Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductSearch', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopProductSearch',
    header: false,
    store: 'ProductSearch',
    itemId: 'shopProductSearch',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '编码',
                dataIndex: 'skuId',
                sortable: true,
            }, {
                text: 'id',
                dataIndex: 'id'
            }, {
                text: '商品名称',
                dataIndex: 'name',
                sortable: true,
                align: 'center',
            }, {
                text: '所属店铺',
                dataIndex: 'shopname',
                width: 60,
                sortable: true,
                align: 'center',
            }, {
                text: '所属货架',
                dataIndex: 'categoryname',
                width: 60,
                sortable: true,
                align: 'center'
            }, {
                text: '单位',
                dataIndex: 'unitname',
                width: 60,
                sortable: true,
                align: 'center',
            }, {
                text: '进价',
                dataIndex: 'pprice',
                width: 60,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    return value / 100;
                }
            }, {
                text: '原价',
                dataIndex: 'fprice',
                width: 60,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    return value / 100;
                }
            }, {
                text: '售价',
                dataIndex: 'dprice',
                width: 60,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    return value / 100;
                }
            }, {
                text: '限购类型',
                dataIndex: 'limitType',
                width: 100,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    var str = '';
                    if (value == 1) {
                        str = '每日限购数量';
                    } else if (value == 2) {
                        str = '累计限购数量';
                    }
                    return str;
                }
            }, {
                text: '限购数量',
                dataIndex: 'limitCount',
                width: 60,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    if (value == 0) {
                        value = '';
                    }
                    return value;
                }
            }, {
                text: '当日总限购数量',
                dataIndex: 'productLimitCount',
                width: 60,
                sortable: false,
                align: 'center',
                renderer: function(value) {
                    if (value == 0) {
                        value = '';
                    }
                    return value;
                }
            }, {
                text: '库存',
                dataIndex: 'stock',
                width: 60,
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    if (value == -1) {
                        value = '无限制';
                    }
                    return value;
                }
            }, {
                text: '状态',
                width: 90,
                dataIndex: 'status',
                itemId: 'putawayOrOut',
                menuDisabled: true,
                sortable: true,
                align: 'center',
                style: 'cursor:pointer',
                renderer: function(value) {
                    var str = '';
                    switch (value) {
                        case 0:
                            str = '上架';
                            break;
                        case 1:
                            str = '雪藏';
                            break;

                        case 2:
                            str = '废弃';
                            break;

                        case 3:
                            str = '下架';
                            break;
                        default:
                            break;
                    }
                    return '<a href="javascript:void(0)">' +str+'</a>'
                }
            }, {
                text: '编辑',
                xtype: 'actioncolumn',
                width: 50,
                icon: 'resources/images/edit.png',
                tooltip: 'Edit',
                menuDisabled: true,
                sortable: true,
                itemId: 'openModifyShelvesGoodsWin',

            }, {
                text: '排序',
                dataIndex: 'rank',
                sortable: true,
                align: 'center',
            }, {
                text: '首页排序值',
                dataIndex: 'rank2',
                sortable: true,
                align: 'center',
            }, {
                text: '置顶',
                dataIndex: 'top',
                itemId: 'setProductTop',
                sortable: true,
                align: 'center',
                renderer: function(value) {
                    if (value) {
                        return '<input type="button"  value="取消置顶"/>'
                    } else {
                        return '<input type="button"  value="置顶"/>'
                    }

                }
            }],
            plugins: [{
                ptype: 'cellediting',
                clicksToEdit: 1
            }]
        });
        me.callParent(arguments);
    }
});
