Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateList', {
    extend: 'Ext.grid.Panel',
    xtype: 'productTemplateList',

    header: false,

    store: 'ProductTemplate',
    id:'productTemplateList',
    tbar: [
        {
            xtype: 'button',
            text: '添加商品模板',
            itemId: 'add'
        },
        {
            xtype:'textfield',
            emptyText:'商品名称',
            name:'keyword',
            itemId: 'keyword',
            margin:10
        },
        {
            xtype:'button',
            itemId: 'productSearch',
            text:'搜索',
            margin:10,
        }
    ],

    columns: [
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
            align: 'center',
            
        },
        {
            text: '图片',
            dataIndex: 'picture',
            width: 150,
            sortable: false,
            align: 'center',
            renderer: function (value) {
                return Ext.String.format('<img src="{0}/image/id-{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
            }
        },
        {
            text: '单位',
            dataIndex: 'unitname',
            width: 65,
            sortable: false,
            align: 'center'
        },
        {
            text: '是否部分退货',
            dataIndex: 'canPartiallyReturn',
            width: 130,
            sortable: false,
            align: 'center',
            renderer:function(value){
                if(value){
                    return '可以';
                }
                return '不可以'
            }
        },
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
});