Ext.define('XMLifeOperating.view.templateManage.shopBannerTemplate.ShopBannerTemplateList', {
    extend: 'Ext.grid.Panel',
    id: 'shopBannerTemplateList',
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
            text: '店铺名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
               
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
                }else if(value==3){
                    return '买手型优选店铺';
                }else if(value==4){
                    return '库存型优选店铺';
                }
            }
        },
        {
            text: '店铺logo',
            dataIndex: 'logo',
            width: 180,
            sortable: false,
             
            renderer: function (value) {
                return Ext.String.format('<img src="{0}/image/id-{1}" height="45" />', XMLifeOperating.generic.Global.URL.res, value);
            }
        },
        {
            text: '店铺icon',
            dataIndex: 'icon',
            width: 180,
            sortable: false,
             
            renderer: function (value) {
                return Ext.String.format('<img src="{0}/image/id-{1}" height="45" />', XMLifeOperating.generic.Global.URL.res, value);
            }
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