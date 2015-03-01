Ext.define('XMLifeOperating.controller.WechatRefund', {
    extend: 'Ext.app.Controller',

    views: [
        'refundManage.wechatRefund.WechatRefundList',
        'refundManage.wechatRefund.TenpayLogin',
        'refundManage.RechargeRefundDetail'
    ],

    stores: ['WechatRefund'],

    models: ['Refund'],

    refs: [{
        ref: 'wechatRefundList',
        selector: 'wechatRefundList',
        xtype: 'wechatRefundList',
        autoCreate: true
    }, {
        ref: 'tenpayLogin',
        selector: 'tenpayLogin',
        xtype: 'tenpayLogin',
        autoCreate: true
    }, {
        ref: 'rechargeRefundDetail',
        selector: 'rechargeRefundDetail',
        xtype: 'rechargeRefundDetail',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel'
    }],

    init: function() {
        var self = this;
        this.selectObjList = [];
        
        self.control({
            'wechatRefundList': {
                added: self.rendenWechatRefundList,
                afterrender: function(thisObj) {
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange', self.selectChange, self);
                }
            },
            'wechatRefundList button[name=today]': {
                click: function(ele) {
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]'),
                        date = new Date();
                    beginTime.setValue(date);
                    endTime.setValue(date);
                    self.onCleanSearch(RefundList);
                }
            },
            'wechatRefundList button[name=yesterday]': {
                click: function(ele) {
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 86400000));
                    endTime.setValue(new Date(+new Date() - 86400000));
                    self.onCleanSearch(RefundList);
                }
            },
            'wechatRefundList button[name=oldSevenDay]': {
                click: function(ele) {
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 604800000));
                    endTime.setValue(new Date());
                    self.onCleanSearch(RefundList);
                }
            },
            'wechatRefundList button[name=oldMonth]': {
                click: function(ele) {
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 2592000000));
                    endTime.setValue(new Date());
                    self.onCleanSearch(RefundList);

                }
            },
            'wechatRefundList #gStatusCombo': {
                change: function(grid, value) {
                    self.onCleanSearch(this.getWechatRefundList());
                    self.rendenWechatRefundList(this.getWechatRefundList());
                }
            },
            'wechatRefundList datefield': {
                change: function() {
                    self.onCleanSearch(this.getWechatRefundList());
                    self.rendenWechatRefundList(this.getWechatRefundList());
                }
            },
            'wechatRefundList #dealDetailRefund': {
                click: function(view, cellEl, rowIndex, colIndex, e, record) { 
                    var dealIdType = record.get('dealIdType');
                    if(dealIdType == 1){
                        // 这里引用了订单管理的control方法
                        var ctrlGDealList = this.getController('GDealList');
                        ctrlGDealList.onDealDetail.apply(ctrlGDealList, arguments);
                    }else if(dealIdType == 2){
                        var wechatRefund = this.getController('WechatRefund');
                        wechatRefund.onRechargeRefundDetail.apply(wechatRefund, arguments);
                    }else{
                        Ext.Msg.alert('提示', '未知类型');
                    }                   
                }
            },
            'wechatRefundList button[name=allSelect]': {
                click: function() {
                    self.sm.selectAll();
                }
            },
            'wechatRefundList button[name=reverseAllSelect]': {
                click: function() {
                    self.sm.deselectAll();
                }
            },
            'wechatRefundList button[name=reverseSelect]': {
                click: function() {}
            },
            'wechatRefundList button[name=agreeRefund]': {
                click: function() {
                    var idObj = self.getWechatRefundIdList({
                        type: 'agree'
                    });

                    if (idObj && idObj.refundType == 'tenpay') {
                        Ext.MessageBox.confirm(
                            '同意退款',
                            Ext.String.format("共选中'{0}'笔退款总金额'{1}'元", self.sm.getCount(),idObj.amountTotal),
                            function(result) {
                                if (result == 'yes') {
                                   self.getTenpayLogin().show();
                                }
                            }
                        );
                        return false;
                    }
                }
            },
            'wechatRefundList button[name=markRead]': {
                click: function() {
                    var idObj = self.getWechatRefundIdList({
                        type: 'markRead'
                    });
                    Ext.MessageBox.confirm(
                        '标记人工处理',
                        Ext.String.format("确定要将'{0}'订单标记为人工处理吗？", idObj.idList),
                        function(result) {
                            if (result == 'yes') {
                                if(idObj){
                                    sendPutRequest('refund/mark', {
                                        ids: idObj.idList
                                    }, '', '', '', function(response) {
                                        if (response.responseText == 1) {
                                            Ext.Msg.alert('提示', '成功拒绝' + self.sm.getCount() + '条退款记录');
                                        }
                                        self.rendenWechatRefundList(self.getWechatRefundList());
                                    }, function() {
                                    });
                                }
                            }
                        }
                    );
                }
            },
            'wechatRefundList button[name=disAgreeRefund]': {
                click: function() {
                    var idObj = self.getWechatRefundIdList({
                        type: 'disagree'
                    });

                    if(idObj){
                        Ext.MessageBox.confirm(
                            '拒绝退款',
                            Ext.String.format("共选中'{0}'笔退款总金额'{1}'元", self.sm.getCount(),idObj.amountTotal),
                            function(result) {
                                if (result == 'yes') {
                                   sendPutRequest('refund/refuse', {
                                        ids: idObj.idList
                                    }, '', '', '', function(response) {
                                        if (response.responseText == 1) {
                                            Ext.Msg.alert('提示', '成功拒绝' + self.sm.getCount() + '条退款记录');
                                        }
                                        self.rendenWechatRefundList(self.getWechatRefundList());
                                    }, function() {
                                    });
                                }
                            }
                        );
                    }
                }
            },

            'tenpayLogin #tenpayLoginBt': {
                click: function(grid) {
                    var TenpayLogin = self.getTenpayLogin();
                    var username = TenpayLogin.down('#username').getValue();
                    var password = TenpayLogin.down('#password').getValue();
                    var idObj = self.getWechatRefundIdList({
                        type: 'agree'
                    });

                    if(idObj){
                        sendPutRequest('refund/' + idObj.refundType, {
                            ids: idObj.idList,
                            username: username,
                            password: password

                        }, '', '', '', function(response) {
                            if (response.responseText >= 1) {
                                TenpayLogin.hide();
                                Ext.Msg.alert('提示', '成功同意' + self.sm.getCount() + '条退款记录');
                                self.rendenWechatRefundList(self.getWechatRefundList());
                            } else {
                                Ext.Msg.alert('提示', '微信退款失败');
                            }
                        }, function(response) {
                            Ext.Msg.alert('提示', '微信退款操作失败');
                        });
                    }
                }
            },

            'wechatRefundList button[name=searchDeal]': {
                click: function() {
                    self.onSearchDeal();
                }
            },

            'rechargeRefundDetail #batchId': {
                afterrender: function(field) {
                    // 这里引用了用户管理的control方法
                    field.getEl().on('click', this.getController('CustomerList').openChargeBatchInfo, this);
                }
            }

        });

    },
    rendenWechatRefundList: function(grid) {
        var beginTime = grid.down('[name=beginTime]').rawValue,
            endTime = grid.down('[name=endTime]').rawValue,
            //refundType = grid.down('#refundTypeCombo').getValue(),
            //refundType='',
            refundType = 'tenpay',
            status = grid.down('#gStatusCombo').getValue(),
            store = grid.store;
        store.getProxy().extraParams = {
            beginTime: beginTime,
            endTime: endTime,
            refundType: refundType || '',
            status: status || 0
        };
        // this.storeFilter();
        store.loadPage(1);
        switch (status) {
            //待处理
            case '0':
                grid.down('#manualHandingId').setVisible(false);
                grid.down('#refundFailureId').setVisible(false);
                grid.down('#pengdingId').setVisible(true);
                grid.down('#manualHandingIntrId').setVisible(false);
                grid.down('#handledId').setVisible(false);
                break;
            //已处理
            case '1-7-4-8':
                grid.down('#manualHandingId').setVisible(false);
                grid.down('#refundFailureId').setVisible(false);
                grid.down('#pengdingId').setVisible(false);

                grid.down('#manualHandingIntrId').setVisible(false);
                grid.down('#handledId').setVisible(false);
                grid.down('#checkAllId').setVisible(false);
                break;
            //处理中
            case '2':
                grid.down('#manualHandingId').setVisible(false);
                grid.down('#refundFailureId').setVisible(false);
                grid.down('#pengdingId').setVisible(false);

                grid.down('#manualHandingIntrId').setVisible(false);
                grid.down('#handledId').setVisible(false);
                grid.down('#checkAllId').setVisible(false);
                break;
                //退款失败
            case '3':
                grid.down('#manualHandingId').setVisible(false);
                grid.down('#refundFailureId').setVisible(true);
                grid.down('#pengdingId').setVisible(false);
                grid.down('#manualHandingIntrId').setVisible(false);
                grid.down('#handledId').setVisible(false);
                grid.down('#checkAllId').setVisible(true);
                break;
            case '5':
                grid.down('#manualHandingId').setVisible(true);
                grid.down('#refundFailureId').setVisible(false);
                grid.down('#pengdingId').setVisible(false);
                grid.down('#manualHandingIntrId').setVisible(true);
                grid.down('#handledId').setVisible(false);
                grid.down('#checkAllId').setVisible(true);
                break;
            default:
                grid.down('#manualHandingId').setVisible(false);
                grid.down('#refundFailureId').setVisible(false);
                grid.down('#pengdingId').setVisible(true);
                grid.down('#manualHandingIntrId').setVisible(false);
                grid.down('#handledId').setVisible(false);
                grid.down('#checkAllId').setVisible(true);
                break;
        }
    },
    selectChange: function(obj, objList) {
        this.selectObjList = objList;
    },
    getWechatRefundIdList: function(typeObj) {
        var list = this.selectObjList,
            idObj = {},
            idList = [],
            isSameType = true,
            oldRefundType = '',
            amountTotal = 0;
        if(this.sm.getCount() === 0){
            Ext.Msg.alert('提示', '很抱歉，没有退款记录，请选择！');
            return;
        }    
        Ext.Array.each(list, function(v, k) {
            if (k === 0) {
                oldRefundType = v.data.refundType;
            }
            if (v.data.refundType != oldRefundType) {
                isSameType = false;
            }
            idList.push(v.data.id);
            amountTotal += v.data.amount;
        });

        idObj.refundType = oldRefundType.toLowerCase();
        idObj.idList = idList;
        idObj.amountTotal = amountTotal/100;
        if (!isSameType) {
            Ext.Msg.alert('提示', '批量退款时<br/>请选择相同类型的退款方式');
        }
        if (typeObj.type == 'agree') {
            return isSameType ? idObj : isSameType;
        } else if (typeObj.type == 'disagree') {
            return idObj;
        } else {
            return idObj;
        }
    },

    onSearchDeal: function() {
        var self = this,
            RefundList = this.getWechatRefundList(),
            SearchInput = RefundList.down('[name=mobileSearch]'),
            mobileOrDealId = SearchInput.getValue(),
            store = self.getWechatRefundStore(),
            refundTypeSearch = RefundList.down('[name=refundTypeSearch]').getValue(),
            params = {
                dealId: mobileOrDealId,
                refundType: 'tenpay'
            };
        if (refundTypeSearch == 'mobile') {
            params = {
                mobile: mobileOrDealId,
                refundType: 'tenpay'
            };
        }
        store.getProxy().extraParams = params;
        store.load();
    },

    onCleanSearch: function(grid) {
        grid.down('[name=mobileSearch]').setValue('');
        grid.down('[name=refundTypeSearch]').setValue('');
    },

    onRechargeRefundDetail: function(view, cellEl, rowIndex, colIndex, e, record) {
        var win = this.getRechargeRefundDetail(),
            form = win.down('form').getForm();
        //10006062
        // 单独获取详情的接口
        Ext.Ajax.request({
            method: 'GET',
            url: XMLifeOperating.generic.Global.URL.biz + 'refund/chargeDetail',
            params: {chargeId:record.get('dealId')},
            // params: {chargeId:10006062},
            success: function(response) {
                if (response.status == 200 && response.statusText == 'OK') {
                    var data = Ext.decode(response.responseText);
                    form.setValues(data);
                    win.down('grid').getStore().loadData(data.refunds || []);
                }
            },
            failure: function() {
                Ext.Msg.alert('获取在线充值详情失败！');
            }
        });
        win.show();
    }
});
