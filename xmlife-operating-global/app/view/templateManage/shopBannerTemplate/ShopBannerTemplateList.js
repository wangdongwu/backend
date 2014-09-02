Ext.define('XMLifeOperating.view.templateManage.shopBannerTemplate.ShopBannerTemplateList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shopBannerTemplateList',
    title : '店铺模板管理',
    titleAlign : 'left',closable : true,
    forceFit: true,
    store: 'ShopBannerTemplate',
    tbar: [
        {
            xtype: 'button',
            text: '新建模板',
            itemId: 'add'
        },
    ],

    columns: [
       {
            xtype: 'rownumberer'
        }, 
        {
            text: '商品名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
               
        },
        {
            text: '模板图片',
            dataIndex: 'banner',
            width: 180,
            sortable: false,
             
            renderer: function (value) {
                return Ext.String.format('<img src="{0}/image/id-{1}" height="45" />', XMLifeOperating.generic.Global.URL.res, value);
            }
        },
        {
            text: '店铺类型',
            dataIndex: 'type',
            width: 130,
            sortable: false,
             
            renderer: function (value) {
                if(value==1){
                    return '农贸市场';
                }else if(value==2){
                    return '生活超市';
                }
            }
        },
        {
            text: '大标题aRGB',
            dataIndex: 'descColor',
            width: 130,
            sortable: false,
             
            renderer: function (value) {
                return value.toString(16);
            }
        },
        {
            text: '大标题 Stroke argb',
            dataIndex: 'descStrokeColor',
            width: 130,
            sortable: false,
             
            renderer: function (value) {
                return value.toString(16);
            }
        },
        {
            text: '大标题投影角度',
            dataIndex: 'descDegree',
            width: 130,
            sortable: false,
             
        },
        {
            text: '小标题aRGB',
            dataIndex: 'nameColor',
            width: 130,
            sortable: false,
             
        },
        {
            text: '小标题 Stroke argb',
            dataIndex: 'nameStrokeColor',
            width: 130,
            sortable: false,
             
        },
        {
            text: '小标题投影角度',
            dataIndex: 'nameDegree',
            width: 130,
            sortable: false,
             
        },
        {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'editTemplate'
        },
        
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});