Ext.define('XMLifeOperating.controller.SDealList', {
    extend: 'Ext.app.Controller',

    views: ['sDealManage.SDealList'],

    stores: ['Deal'],

    models: ['Deal'],

    /*refs: [{
        ref: 'sDealList',
        selector: 'sDealList',
        xtype: 'sDealList'
    }],*/
    /*init: function() {
        var me = this;
        this.control({
            'sDealList #shopArea': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    me.dateReset();
                    sstore.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'deal';
                    sstore.getProxy().extraParams = {
                        shopArea: combo.getValue(),
                        beginTime:me.beginTime,
                        endTime:me.endTime
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                    this.areaId = combo.getValue();
                }
            },
            'sDealList':{

            },
            'sDealList #productInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;

                    Ext.MessageBox.confirm('提示', '确认导出商品对货单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportProductStatistic?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '商品对货单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'sDealList #paymentInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    Ext.MessageBox.confirm('提示', '确认导出支付对账单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportDealCashflow?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '支付对账单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'sDealList #deallistInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    Ext.MessageBox.confirm('提示', '确认导出订单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportDeal?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '订单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'sDealList #getDealListByDate': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams = {
                        shopArea: this.areaId,
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
                }

            },
            'sDealList #dealSearch': {
                click: me.dealSearch
            },
            'sDealList #statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('dealList').down('#shopArea').getValue(),
                        status: combo.getValue(),
                        beginTime:beginTime,
                        endTime:endTime
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });

                },
            },
            'sDealList #dealDetail': {
                click: me.onDealDetail
            },
            'sDealList #customerDetail': {
                click: me.onCustomerDetail
            },
            'sDealList #toproblemdeal': {
                click: me.onToProblemDeal
            },
            'sDealList #refresh': {
                click: me.onRefresh

            },
            'sDealList #cancalDealId': {
                click: me.onCancalDeal
            }
        });
},*/

});