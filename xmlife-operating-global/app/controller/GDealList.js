Ext.define('XMLifeOperating.controller.GDealList', {
    extend: 'Ext.app.Controller',

    views: [
        'dealManage.GDealList',
        'dealManage.GDealDetail',
        'dealManage.GDealCustomerDetail',
        'dealManage.ReturnProductForm',
        'dealManage.GDealReturnAuditList',
        'dealManage.GDealReturnCheckList',
        'dealManage.GDealReturnComfirm'
    ],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems', 'ReturnGoodsAuditList', 'ReturnGoodsApplyList'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems', 'ReturnGoodsAuditList', 'ReturnGoodsApplyList'],

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
    }, {
        ref: 'gDealReturnCheckList',
        selector: 'gDealReturnCheckList',
        xtype: 'gDealReturnCheckList',
        autoCreate: true
    }, {
        ref: 'gDealReturnAuditList',
        selector: 'gDealReturnAuditList',
        xtype: 'gDealReturnAuditList',
        autoCreate: true
    }, {
        ref: 'gDealReturnComfirm',
        selector: 'gDealReturnComfirm',
        xtype: 'gDealReturnComfirm',
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
                }
            },
            '#dealDetail': {
                click: me.onDealDetail
            },
            // 申请售后退货
            'gDealDetail #sellRefund': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        buyNum = record.get('num');

                    Ext.MessageBox.prompt('申请售后退货', '商品名称：' + record.get('name') + ' <br />输入数量：',
                        function(result, value) {
                            if (result == 'ok') {
                                if (isNaN(value)) {
                                    Ext.Msg.alert('错误提示', '你输入的格式有误！');
                                    return;
                                } else if (Number(value) > buyNum) {
                                    Ext.Msg.alert('错误提示', '退款数量必须小于当前商品的购买总数！');
                                    return;
                                }

                                value = buyNum - value;
                                sendPutRequest('deal/setProductNum', {
                                        dealId: record.get('dealBackendId'),
                                        productIdList: [record.get('productId')],
                                        productNumList: [value],
                                        promotionIdList: [record.get('promotionId')]
                                    },
                                    '申请售后退货', '申请售后退货成功', '申请售后退货失败',
                                    function(response) {
                                        me.getDealItemsStore().load();
                                    });
                            }
                        },
                        this, false, buyNum
                    );
                }
            },
            // 全部申请售后退货
            'gDealDetail #refundAll': {
                click: function() {
                    var me = this;
                    var win = me.getGDealReturnComfirm();
                    //数据传递给returnconfirm页面
                    win.show();
                    /*                    Ext.MessageBox.confirm('全部申请售后退货', '确定要退掉此订单的全部商品吗？',
                                            function(result) {
                                                if (result == 'yes') {
                                                    var store = me.getDealItemsStore(),
                                                        records = store.data.items,
                                                        productIdList = [],
                                                        productNumList = [],
                                                        promotionIdList = [];

                                                    for (var i = 0, n = records.length; i < n; i++) {
                                                        productIdList.push(records[i].get('productId'));
                                                        //productNumList.push(records[i].get('num'));
                                                        productNumList.push(0);
                                                        promotionIdList.push(records[i].get('promotionId'));
                                                    }

                                                    sendPutRequest('deal/setProductNum', {
                                                            dealId: store.getAt(0).get('dealBackendId'),
                                                            productIdList: productIdList,
                                                            productNumList: productNumList,
                                                            promotionIdList: promotionIdList
                                                        },
                                                        '全部申请售后退货', '全部申请售后退货成功', '全部申请售后退货失败',
                                                        function(response) {
                                                            me.getDealItemsStore().load();
                                                        });
                                                }
                                            }
                                        );*/
                }
            },
            'gDealReturnComfirm #comfirmreturn': {
                click: function(button, e) {
                    var me = this;
                    var form = button.up('form');
                    var grid = form.down('grid');
                    var store = grid.getStore();
                    var items = store.data.items;
                    var dealId = form.down('#dealreturnid').getValue();
                    var productIds = [],
                        numbers = [];
                    var success = function(request) {
                        var code = request.responseText;
                        var str;
                        switch (code) {
                            case 1:
                                str = '申请订单退货成功！';
                                break;
                            case 0:
                                str = '订单退货校验失败:' + code;
                                break;
                            case -1:
                                str = '退货数量不能大于现有数量:' + code;
                                break;
                            case -2:
                                str = '不符合条件的订单:' + code;
                                break;
                            case -3:
                                str = '订单已存在申请中的退货:' + code;
                                break;
                        }
                        Ext.Msg.alert('提示', str);
                    }
                    var failure = function(request) {
                        Ext.MessageBox.show({
                            title: '提示',
                            msg: '退货请求失败！',
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                    
                    for (var i = 0, len = items.length; i < len; i++) {
                        //退货商品数量判断
                        var allcount = items[i].get('allcount');
                        var returncount = items[i].get('returncount');
                        if (returncount == '') {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '退货数量必须填写！',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        } else if (returncount > allcount) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '退货数量不能大于现有数量',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        } else {
                            productIds.push(items[i].get('id'));
                            numbers.push(returncount)
                        }
                    }

                    sendRequest('returnGoods/apply', {
                        dealId: dealId,
                        productIds: productIds,
                        numbers: numbers
                    }, '申请订单退货', '申请订单退货成功', '申请订单退货失败', success, failure);

                }
            },
            '#customerDetail': {
                click: me.onCustomerDetail
            },

            '#toproblemdeal': {
                click: me.onToProblemDeal
            },
            'gDealList #showReturnProductBtn': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        dealId = record.get('id'),
                        itemStore = me.getDealItemsStore(),
                        status = record.get('status');

                    if (status != 4) {
                        return;
                    }

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

                    var data = me._returnProductItem.data;
                    if (number > data.num) {
                        button.up('window').close();
                        Ext.Msg.alert('提示', '退货数量大于购买数量');
                        return false;
                    }

                    var params = {
                        dealId: data.dealBackendId,
                        productIdList: [data.productId],
                        productNumList: [data.num - parseInt(number)],
                        promotionIdList: [data.promotionId]
                    };
                    sendPutRequest('deal/setProductNum', params,
                        '售后退货', '售后退货成功', '售后退货失败',
                        function(response) {
                            Ext.Msg.alert('提示', '售后退货成功');
                            button.up("window").close();
                        });
                }
            },
            'gDealReturnCheckList': {
                show: me.returnListShow
            },
            'gDealReturnAuditList': {
                show: me.returnListShow
            },
            'gDealReturnCheckList #rstatus': {
                change: me.returnStatusComboChange
            },
            'gDealReturnAuditList #rstatus': {
                change: me.returnStatusComboChange
            },
            'gDealReturnCheckList #getReturnSearch': {
                click: me.getReturnSearch
            },
            'gDealReturnAuditList #getReturnSearch': {
                click: me.getReturnSearch
            },
            'gDealReturnCheckList #status': {
                click: me.returnStatusAction

            },
            'gDealReturnAuditList #status': {
                click: me.returnStatusAction

            }

        });
    },
    returnStatusAction: function(grid, rowIndex, colIndex, record, row, e) {



    },
    returnListShow: function(grid) {
        var me = this;
        var stcombo = grid.down('#rstatus');

        if (!stcombo.getValue()) {
            stcombo.select(3); //3：全部
        }
    },
    returnStatusComboChange: function(combo, newValue, oldValue, e) {

        var me = this;
        var startdate, enddate, name, panel, store;
        name = combo.getName();
        if (name == 'check') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();

        } else if (name == 'audit') {
            panel = me.getGDealReturnAuditList();
            store = me.getReturnGoodsAuditListStore();
        }
        startdate = panel.down('#startTime');
        enddate = panel.down('#endTime');

        store.getProxy().extraParams = {
            status: newValue,
            startTime: startdate.getRawValue(),
            endTime: enddate.getRawValue(),
            cityId: XMLifeOperating.generic.Global.currentCity
        }
        store.loadPage(1);

    },
    getReturnSearch: function(button, e) {
        var me = this;
        var startdate, enddate, name, panel, store, longId, combo;
        name = button['name'];
        if (name == 'check') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();
        } else if (name == 'audit') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();
        }
        startdate = panel.down('#startTime');
        enddate = panel.down('#endTime');
        longId = panel.down('#keyword');
        combo = panel.down('#rstatus');


        if (longId.getValue() !== '') {
            store.getProxy().extraParams = {
                status: combo.getValue(),
                startTime: startdate.getRawValue(),
                endTime: enddate.getRawValue(),
                cityId: XMLifeOperating.generic.Global.currentCity,
                dealId: longId
            }
            store.loadPage(1);

        } else {
            Ext.Msg.alert('提示', '搜索时请输入长单号！');
        }
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
        var win = this.getGDealReturnComfirm();
        win.show();
    },
    dealSearch: function() {
        var me = this,
            keyWords = me.getGDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getGDealList();

        view.down('#shopAread').setValue('');
        view.down('#statusSearch').setValue('');
        store.getProxy().extraParams = {
            phoneOrDealId: keyWords,
        };
        store.loadPage(1);
    },

    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getGDealDetail(),
            form = win.down('form').getForm(),
            status = record.get('status');
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
        store.getProxy().extraParams = {
            deal: record.get('dealBackendId') || record.get('dealId'),
        };
        store.load({
            callback: function(records) {
                var model = win.down('#dealDetails').getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }

                if (status != 4) {
                    win.down('#sellRefund').hide();
                    win.down('#refundAll').hide();
                } else {
                    win.down('#sellRefund').show();
                    win.down('#refundAll').show();
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
            '确认操作',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                        function(response) {
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
                                    /*sstore.loadPage(1, {
                                        params: {
                                            start: 0,
                                            limit: 25,
                                            page: 1
                                        }
                                    });*/
                            }
                        }
                    );
                }
            }
        );
    }
});
