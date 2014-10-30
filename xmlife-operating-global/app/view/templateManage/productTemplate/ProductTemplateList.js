Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateList', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.DataView'],
    xtype: 'productTemplateList',
    id: 'productTemplateList',
    title : '商品模板管理',
    titleAlign : 'left',
    closable : true,
    forceFit: true,
    store: 'ProductTemplate',
    layout: 'card',

    dockedItems: [{
      xtype: 'pagingtoolbar',
      itemId: 'pagetoll',
      store: 'ProductTemplate',
      dock: 'bottom',
      displayInfo: true/*,
      items : ['->'],   
      prependButtons: true*/
    }],

    tbar: [
        {
            xtype: 'button',
            text: '添加商品模板',
            itemId: 'add'
        },
        '-',
        {
            xtype: 'textfield',
            emptyText: '商品名称',
            name: 'keyword',
            itemId: 'keyword',
        },
        {
            xtype: 'button',
            itemId: 'productSearch',
            text: '搜索'
        },
        '-',
        {
          xtype: 'button',
          text: '批量修改商品',
          itemId: 'batchModifi'
        },
        '-',
        {
          xtype: 'button',
          text: '批量添加商品',
          itemId: 'batchAdd'
        },
        '->',
        {
          xtype: 'button',
          text: '切换查看方式',
          margin: '0 10 0 0',
          itemId: 'batchSwitch',
          menu: {
            xtype: 'menu',
            items: [{
                text: '详情查看',
                itemId: 'detailViewBtn'
            },{
                text: '大图查看',
                itemId: 'picViewBtn'
            }]
          }
        }
    ],

    initComponent: function() {
        this.items = [{
            xtype : 'grid',
            id: 'tempDetailView',
            store : 'ProductTemplate',
            layout: 'fit',
            forceFit: true,

            columns: [
                {
                    xtype: 'rownumberer'
                }, 
                {
                    text: 'ID',
                    dataIndex: 'id',
                    width: 150,
                    sortable: false,
                    align: 'left'
                },
                {
                    text: '商品名称',
                    dataIndex: 'name',
                    width: 200,
                    sortable: false,
                     
                    
                },
                {
                    text: '图片',
                    dataIndex: 'picture',
                    width: 150,
                    sortable: false,
                    renderer: function (value) {
                        return Ext.String.format('<img src="{0}/image/id-{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
                    }
                },
                {
                    text: 'rank',
                    dataIndex: 'rank',
                    width: 65,
                    sortable: true,
                    align: 'center'
                },
                {   
                    text: 'rank2',
                    dataIndex: 'rank2',
                    width: 65,
                    sortable: true,
                    align: 'center'
                },
                /*{
                    text: '是否部分退货',
                    dataIndex: 'canPartiallyReturn',
                    width: 130,
                    sortable: false,
                     
                    renderer:function(value){
                        if(value){
                            return '可以';
                        }
                        return '不可以'
                    }
                },*/
                {
                    xtype: 'actioncolumn',
                    width: 24,
                    icon: 'resources/images/edit.png',
                    tooltip: 'Edit',
                    menuDisabled: true,
                    sortable: false,
                    itemId: 'editProductTemplate'
                },
                
            ],
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    dragText: 'Drag and drop to reorder'
                }
            }
        }, 

        {
            xtype: 'panel',
            id: 'tempPicView',
            itemId: 'tempPicView',
            autoScroll: true,
            items: [{
                xtype: 'dataview',
                store: 'ProductTemplate',
                itemId: 'dataview',
                itemSelector: 'li',
                emptyText: '没有可用的图片',
                tpl: new Ext.XTemplate(
                    '<ul id="picViewList" style="width:100%;list-style:none;text-align:center;">',
                    '<tpl for=".">', // 处理数据的子节点
                        '<li class="picList" style="float:left;margin:10px 25px 15px 8px;width:29%;border:1px solid #eee;">',
                            '<p><img src="'+ XMLifeOperating.generic.Global.URL.res + '/image/id-'+ '{picture}" width="90%" /></p>',
                            '<p style="position:relative;">{name} <input type="text" value="{rank}" title="点击编辑" style="width:50px;margin-left:15px;padding-left:2px;border:1px solid #fff;color:#999;" />',
                            '<img class="x-action-col-icon" src="resources/images/edit.png" title="修改" style="position:absolute;right:10px;" /></p>',
                        '</li>',
                    '</tpl>',
                    '</ul'
                )
            }]

        }];

        this.callParent(arguments);
    }
});