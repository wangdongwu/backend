Ext.define('XMLifeOperating.controller.GDealList', {
    extend: 'Ext.app.Controller',

    views: [
        'dealManage.GDealList',
        'dealManage.GDealDetail',
        'dealManage.GDealCustomerDetail',
        'dealManage.ReturnProductForm'
    ],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems'],

    refs: [{
        ref: 'gDealList',
        selector: 'gDealList',
        xtype: 'gDealList'
    }, {
        ref: 'shopAread',
        selector: '#shopAread',
    }, {
        ref: 'keyword',
        selector: '#keyword',
    }, {
        ref: 'statusSearch',
        selector: '#statusSearch'
    }, {
        ref: 'gDealCustomerDetail',
        selector: 'gDealCustomerDetail',
        xtype: 'gDealCustomerDetail',
        autoCreate: true
    }, {
        ref: 'gDealDetail',
        selector: 'gDealDetail',
        xtype: 'gDealDetail',
        autoCreate: true
    }, {
        ref: 'ReturnProductForm',
        selector: 'ReturnProductForm',
        xtype: 'ReturnProductForm',
        autoCreate: true
    }],

    init: function() {
        var me = this;

        this.control({
            'gDealList': {
                added: me.rendenGDealList
            },
            'gDealList #getDealListByDate': {
                click: function() {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'all');
                    dealList.down('#shopAread').setValue('');
                    dealList.down('#statusSearch').setValue('');
                }

            },
            'gDealList #shopAread': {
                select: function(combo) {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'center');
                    this.areaId = combo.getValue();
                }
            },

            'gDealList #dealSearch': {
                click: me.dealSearch
            },
            '#statusSearch': {
                select: function(combo) {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'center');
                },
            },

            '#dealDetail': {
                click: me.onDealDetail
            },

            '#customerDetail': {
                click: me.onCustomerDetail
            },

            '#toproblemdeal': {
                click: me.onToProblemDeal
            },

            'gDealList #showReturnProductBtn': {
                click: function() {
                    var dealId = arguments[5].get('id'),
                        itemStore = me.getDealItemsStore();

                    me.getReturnProductForm().down('#DealItemsNumber').setValue("");
                    me.getReturnProductForm().down('#DealItems').setValue("");
                    itemStore.getProxy().extraParams = {
                        deal: dealId
                    }
                    itemStore.load();
                    me.getReturnProductForm().show();
                }
            },
            'ReturnProductForm #DealItems': {
                select: function(combo, records, opts) {
                    if (records.length == 0) return;

                    me._returnProductItem = records[0];
                    me.getReturnProductForm().down('#DealItemsNumber').setValue(records[0].data.num);
                }
            },
            'ReturnProductForm #submit': {
                click: function(button) {
                    var form = button.up('form').getForm(),
                        number = button.up('form').down('#DealItemsNumber').getValue();
                    console.log(form.getValues());
                    var data = me._returnProductItem.data;
                    if (number > data.num) {
                        button.up('window').close();
                        Ext.Msg.alert("退货数量大于购买数量");
                        return false;
                    }
                    var params = {
                        dealId: data.dealBackendId,
                        productIdList: [data.productId],
                        productNumList: [data.num - parseInt(number)]
                    }
                    Ext.Ajax.request({
                        method: 'PUT',
                        url: XMLifeOperating.generic.Global.URL.biz + 'deal/setProductNum',
                        params: params,
                        success: function() {
                            button.up("window").close();
                        },
                        failure: function() {
                            Ext.Msg.alert("退货失败");
                        }
                    })
                }
            }
        });
    },
    rendenGDealList: function(grid, type) {
        var beginTime = grid.down('[name=beginTime]').rawValue;
        var endTime = grid.down('[name=endTime]').rawValue;
        var sstore = this.getDealStore();
        var shopArea = '';
        var status = '';
        switch (type) {
            case 'all':
                shopArea = '';
                break;
            case 'center':
                shopArea = grid.down('#shopAread').getValue();
                status = grid.down('#statusSearch').getValue();
                break;
            default:
                shopArea = '';
                break;
        }
        sstore.getProxy().extraParams = {
            status: status,
            shopArea: shopArea,
            beginTime: beginTime,
            endTime: endTime
        }
        sstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    dealSearch: function() {
        var me = this,
            keyWords = me.getGDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getGDealList();

        view.grid.down('#shopAread').setValue('');
        view.down('#statusSearch').setValue('')
        store.getProxy().extraParams = {
            phoneOrDealId: keyWords,
        };
        store.loadPage(1);
    },

    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getGDealDetail(),
            form = win.down('form').getForm();          
        // 单独获取详情的接口
        Ext.Ajax.request({
            method: 'GET',
            url: XMLifeOperating.generic.Global.URL.biz + 'deal/' + record.get('dealBackendId'),
            params: {},
            success: function(response) {
                if (response.status == 200 && response.statusText == 'OK') {
                  var data = Ext.decode(response.responseText);
                  form.setValues(data); 
                }
            },
            failure: function() {
                Ext.Msg.alert('获取订单详情失败！');
            }
        }); 

        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: record.get('dealBackendId') || record.get('dealId'),
            },
            callback: function(records) {
                var model = Ext.ComponentQuery.query('#gDealDetails')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });

        win.show();
    },

    onCustomerDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var store = this.getCustomerStore();

        var win = this.getGDealCustomerDetail();
        store.on('load', function(store, records, successful, eOpts) {
            store.data.items[0].data['dtoAddress'] = dealDetail.getData()['dtoAddress'];

            win.down('form').loadRecord(store.data.items[0]);
            win.show();
        });
        store.getProxy().extraParams = {
            uid: dealDetail.get('customId'),
        };
        store.loadPage(1);
    },

    onToProblemDeal: function(view, rowIndex, colIndex, column, e) {
        var dealitem = view.getRecord(view.findTargetByEvent(e));
        var dealBackendId = dealitem.get('dealBackendId');
        var url = 'deal/transToProblem/' + dealBackendId;
        var me = this;

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                        function(response) {
                            // alert(response);
                            if (response.responseText != 0) {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '转为问题订单失败',
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '该订单被成功标记为问题订单',
                                    icon: Ext.Msg.INFO,
                                    buttons: Ext.Msg.OK
                                });
                                var sstore = me.getDealStore();
                                sstore.getProxy().extraParams = {
                                    shopArea: Ext.getCmp('gDealList').down('#shopAread').getValue(),
                                    assignShopper: true
                                }
                                sstore.loadPage(1, {
                                    params: {
                                        start: 0,
                                        limit: 25,
                                        page: 1
                                    }
                                });
                            }

                        });
                }
            }
        );
    }
});
