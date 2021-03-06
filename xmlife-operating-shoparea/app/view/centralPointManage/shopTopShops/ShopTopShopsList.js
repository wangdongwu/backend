Ext.define('XMLifeOperating.view.centralPointManage.shopTopShops.ShopTopShopsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shopTopShopsList',
    closable: false,
    id: 'shopTopShopsList',
    title: '首页配置',
    store: 'ShopTopShops',

    tbar: [
        /*{
            xtype: 'button',
            text: '添加中心点',
            itemId: 'add',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        }*/
        {
            xtype: 'combobox',
            name: 'shopArea',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            margin: 10,
            editable: false,
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'button',
            text: '添加展示店铺',
            itemId: 'topshopsAdd'
        }, {
            xtype: 'button',
            text: '首页图片配置',
            itemId: 'seeBannerBtn'
        }, {
            xtype: 'button',
            text: '优质店铺配置',
            itemId: 'seeShopShopGroupBtn'
        }
    ],
    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '编号',
            dataIndex: 'id',
            width: 150,
            sortable: true,
            align: 'left'
        }, {
            text: '展示店铺',
            dataIndex: 'shopName',
            width: 90,
            sortable: true,
            align: 'left'
        }, {
            text: '展示店铺分类',
            dataIndex: 'names',
            width: 100,
            sortable: true,
            align: 'left',
            renderer: function(value) {
                var str = '';
                for (var i = 0; i < value.length; i++) {
                    str += value[i] + '<br />';
                }
                return str;
            }
        }, {
            xtype: 'actioncolumn',
            text: '操作',
            width: 40,
            icon: 'resources/images/delete.png',
            tooltip: 'Delete',
            menuDisabled: true,
            sortable: true,
            itemId: 'deleteShopTopShopsId',
            align: 'center'
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true
});
