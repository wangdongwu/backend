Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateList', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.DataView',
        'Ext.ux.TabScrollerMenu'
    ],
    id: 'productTemplateList',
    xtype: 'productTemplateList',
    title: '商品模板管理',
    titleAlign: 'left',
    closable: true,
    style: 'overflow:hidden',
    defaults: {
        border: false
    },
    layout: 'border',
    items: [{
        xtype: 'tabpanel',
        region: 'north',
        bodyStyle: 'border:none',
        itemId: 'productTemplateTabs',
        items: [],
        plugins: [{
            ptype: 'tabscrollermenu'
        }],
    }, {
        xtype: 'treepanel',
        region: 'west',
        store: 'ProductTemplateSubs',
        title: '分类',
        split: true,
        border: true,
        titleAlign: 'center',
        width: 200,
        rootVisible: false,
        collapsible: true,
        displayField: 'name',
        itemId: 'productTemplateTree'
    }, {
        xtype: 'panel',
        region: 'center',
        id: 'productTemplateContent',
        autoScroll: true,
        title: '商品模板',
        titleAlign: 'center',
        hearPosition: 'center',
        layout: 'card',
        items: [{
            xtype: 'grid',
            itemId: 'productTemplateGrid',
            store: 'ProductTemplateGetByCategoryId',
            layout: 'fit',
            forceFit: true,
            defaults: {
                align: 'center'
            },
            columns: [{
                xtype: 'rownumberer',
                width: 50,
                align: 'center'
            }, {
                text: 'ID',
                dataIndex: 'id',
                width: 150,
                sortable: false,
                align: 'left'
            }, {
                text: '商品名称',
                dataIndex: 'name',
                width: 200,
                sortable: false,
            }, {
                text: '图片',
                dataIndex: 'picture',
                width: 150,
                sortable: false,
                renderer: function(value) {
                    return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
                }
            }, {
                text: 'rank',
                dataIndex: 'rank',
                width: 65,
                sortable: true,
            }, {
                text: 'rank2',
                dataIndex: 'rank2',
                width: 65,
                sortable: true,
            }, {
                text: '价格区间',
                dataIndex: 'minPrice',
                width: 100,
                sortable: true,
                renderer:function(value,cell,record,rowIndex,colIndex,store){
                    return value/100+'-'+record.get('maxPrice')/100;
                }
            }, {
                xtype: 'actioncolumn',
                width: 24,
                icon: 'resources/images/edit.png',
                tooltip: 'Edit',
                menuDisabled: true,
                sortable: false,
                itemId: 'editProductTemplate'
            }],
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    dragText: 'Drag and drop to reorder'
                }
            }
        }, {
            xtype: 'panel',
            itemId: 'tempPicView',
            autoScroll: true,
            items: [{
                xtype: 'dataview',
                store: 'ProductTemplateGetByCategoryId',
                itemId: 'productTemplatePicView',
                itemSelector: 'li',
                emptyText: '没有可用的图片',
                tpl: new Ext.XTemplate(
                    '<ul id="picViewList" style="width:100%;list-style:none;text-align:center;">',
                    '<tpl for=".">', // 处理数据的子节点
                    '<li class="picList" style="float:left;margin:10px 25px 15px 8px;width:29%;border:1px solid #eee;">',
                    '<p><img src="' + XMLifeOperating.generic.Global.URL.res + '{picture}" width="90%" /></p>',
                    '<p style="position:relative;">{name} <input type="text" value="{rank}" title="点击编辑" style="width:50px;margin-left:15px;padding-left:2px;border:1px solid #fff;color:#999;" />',
                    '<img class="x-action-col-icon" src="resources/images/edit.png" title="修改" style="position:absolute;right:10px;" /></p>',
                    '</li>',
                    '</tpl>',
                    '</ul'
                )
            }]
        }],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            itemId: 'pagetoll',
            store: 'ProductTemplateGetByCategoryId',
            dock: 'bottom',
            displayInfo: true
        }, {
            xtype: 'toolbar',
            itemId: 'topbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: '添加商品模板',
                itemId: 'add'
            }, '-', {
                xtype: 'textfield',
                emptyText: '商品名称',
                name: 'keyword',
                itemId: 'keyword',
            }, {
                xtype: 'button',
                itemId: 'productSearch',
                text: '搜索'
            }, '->', {
                xtype: 'button',
                text: '切换查看方式',
                margin: '0 10 0 0',
                itemId: 'batchSwitch',
                menu: {
                    xtype: 'menu',
                    items: [{
                        text: '详情查看',
                        itemId: 'detailViewBtn'
                    }, {
                        text: '大图查看',
                        itemId: 'picViewBtn'
                    }]
                }
            }]
        }]
    }]
});
