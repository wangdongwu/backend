Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shoplist',
    title: '店铺管理',
    store: 'Shop',
    itemId: 'shoplist',
    titleAlign: 'center',
    /*    iconCls: 'icon-grid',*/
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Shop',
        displayInfo: true,
        style: 'border:none'
    }],
    tbar: [{
            xtype: 'button',
            text: '添加店铺',
            /*            iconCls: 'icon-add',*/
            itemId: 'add'
        }, {
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
        },
        '->'
        /*, {
            xtype: 'textfield',
            name: 'searchshop',
            itemId: 'searchShopKeyWords',
            emptyText: '输入店铺名称',
        }, {

            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }*/
    ],
    columns: [{
            xtype: 'rownumberer'
        }, {
            text: 'shopId',
            dataIndex: 'id',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '店铺名',
            dataIndex: 'name',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '店铺副名称',
            dataIndex: 'desc',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '模板',
            dataIndex: 'templateName',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '地址',
            dataIndex: 'address',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '营业时间',
            dataIndex: 'time',
            width: 100,
            sortable: true,
            align: 'center'
        }, {
            text: '所属中心',
            dataIndex: 'areaNames',
            width: 80,
            sortable: true,
            align: 'center'
        },
        {
            text: '入驻掌柜',
            dataIndex: 'managerCount',
            itemId: 'managerCountId',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                return '<a href="javascript:void(0)">' + value + '</a>';
            }
        }, {
            text: '入驻买手',
            dataIndex: 'superShopperCount',
            itemId: 'shopperCountId',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                return '<a href="javascript:void(0)">' + value + '</a>';
            }
        }, {
            header: "货架",
            width: 90,
            itemId: 'seeCategoryBtn',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<a href="javascript:void(0)">查看</a>';
                return seeBtn;
            }
        }, {
            header: "改价审核",
            width: 90,
            itemId: 'seeChangePriceRecord',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<a href="javascript:void(0)">查看</a>';
                return seeBtn;
            }
        }, {
            text: '商品展开',
            dataIndex: 'showAllProducts',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                return (value == true || value == 'true') ? '是' : '否'
            }
        }, {
            text: '价格审核',
            dataIndex: 'needAuditPrice',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                return (value == true || value == 'true') ? '是' : '否'
            }
        }, {
            text: '库存管理',
            dataIndex: 'storeLimitEnable',
            width: 80,
            sortable: true,
            align: 'center',
            itemId: 'storeLimitEnableBtn',
            renderer: function(value) {
                return value ? '<input type="button" value="关闭"/>' : '<input type="button" value="开启"/>'
            }
        }, {
            header: '店铺操作',
            width: 90,
            dataIndex: 'status',
            itemId: 'closeOrOpenShopStore',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var str = '';
                switch (value) {
                    case 0:
                        str += '<input type="button" value="打开" statusValue="open" /><br/>';
                        break;
                    case 1:
                        str += '<input type="button" value="关闭" statusValue="close"  /><br/>';
                        break;
                }
                return str;
            }
        }, {
            text: '编辑',
            xtype: 'actioncolumn',
            width: 50,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: true,
            itemId: 'modifyShopList'
        }
    ],
    viewConfig: {
        enableTextSelection: true
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
    forceFit: true,
    columnLines: true,
});
