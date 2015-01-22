Ext.define('XMLifeOperating.controller.WechatRefund', {
    extend: 'Ext.app.Controller',

    views: [
        'refundManage.wechatRefund.WechatRefundList',
        'refundManage.wechatRefund.TenpayLogin'
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
                    sm.on('selectionchange', self.selectChange, self)
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
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlGDealList = this.getController('GDealList');
                    ctrlGDealList.onDealDetail.apply(ctrlGDealList, arguments);
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
                        self.getTenpayLogin().show();
                        return false;
                    }

                    idObj && sendPutRequest('refund/' + idObj.refundType, {
                        ids: idObj.idList
                    }, '', '', '', function(response) {
                        if (response.responseText == 1) {
                            Ext.Msg.alert('提示', '成功同意' + self.sm.getCount() + '条退款记录');
                            self.rendenWechatRefundList(self.getWechatRefundList());
                        }
                        if (idObj.refundType == 'alipay') {
                            var w = window.open();
                            w.document.open();
                            w.document.write(response.responseText);
                            var confirmMsg = Ext.Msg.confirm('提示', '你已经完成退款了吗', function(value) {
                                if (value == 'yes') {
                                    self.getAlipayRefundStore().reload()
                                }
                            });
                        }
                    }, function() {});
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
                                idObj && sendPutRequest('refund/mark', {
                                    ids: idObj.idList
                                }, '', '', '', function(response) {
                                    if (response.responseText == 1) {
                                        Ext.Msg.alert('提示', '成功拒绝' + self.sm.getCount() + '条退款记录');
                                    }
                                    self.rendenWechatRefundList(self.getWechatRefundList());
                                }, function() {

                                })
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
                    idObj && sendPutRequest('refund/refuse', {
                        ids: idObj.idList
                    }, '', '', '', function(response) {
                        if (response.responseText == 1) {
                            Ext.Msg.alert('提示', '成功拒绝' + self.sm.getCount() + '条退款记录');
                        }
                        self.rendenWechatRefundList(self.getWechatRefundList());
                    }, function() {

                    })
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

                    idObj && sendPutRequest('refund/' + idObj.refundType, {
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
                    })
                }
            },

            'wechatRefundList button[name=searchDeal]': {
                click: function() {
                    self.onSearchDeal();
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
            status = grid.down('#gStatusCombo').getValue();
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
            oldRefundType = '';
        Ext.Array.each(list, function(v, k) {
            if (k == 0) {
                oldRefundType = v.data.refundType
            };
            if (v.data.refundType != oldRefundType) {
                isSameType = false
            };
            idList.push(v.data.id);
        });
        idObj.refundType = oldRefundType.toLowerCase();
        idObj.idList = idList;
        if (!isSameType) {
            Ext.Msg.alert('提示', '批量退款时<br/>请选择相同类型的退款方式');
        }
        if (typeObj.type = 'agree') {
            return isSameType ? idObj : isSameType;
        } else if (typeObj.type = 'disagree') {
            return idObj
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
    }
});
