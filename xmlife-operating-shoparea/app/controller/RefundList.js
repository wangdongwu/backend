Ext.define('XMLifeOperating.controller.RefundList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.refund.RefundList',
            'operationManage.refund.DealDetailRefund'],

    stores: ['Refund','DealItems'],

    models: ['Refund','DealItems'],

    refs: [{
        ref: 'RefundList',
        selector: 'RefundList',
        xtype: 'RefundList',
        autoCreate: true
    }, {
        ref: 'dealDetailRefund',
        selector: 'dealDetailRefund',
        xtype: 'dealDetailRefund',
        autoCreate: true
    }],

    init: function() {
        var self = this;
        this.selectObjList = [];
        self.control({
            'RefundList': {
                added: self.rendenRefundList,
                afterrender: function(thisObj) {
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange', self.selectChange, self)
                }
            },
            'RefundList button[name=today]': {
                click: function(ele) {
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    date = new Date();

                    beginTime.setValue(date);
                    endTime.setValue(date);
                    self.onCleanSearch();
                }
            },
            'RefundList button[name=yesterday]': {
                click: function(ele) {
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 86400000));
                    endTime.setValue(new Date());
                    self.onCleanSearch();
                }
            },
            'RefundList button[name=oldSevenDay]': {
                click: function(ele) {
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 604800000));
                    endTime.setValue(new Date());
                    self.onCleanSearch();
                }
            },
            'RefundList button[name=oldMonth]': {
                click: function(ele) {
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                    beginTime.setValue(new Date(+new Date() - 2592000000));
                    endTime.setValue(new Date());
                    self.onCleanSearch();
                }
            },
            'RefundList combo': {
                change: function(grid, value) {
                    if (grid.itemId == 'refundTypeSearch') {
                        return;
                    }
                    self.onCleanSearch();
                    self.rendenRefundList(this.getRefundList());
                }
            },
            'RefundList datefield': {
                change: function() {
                    self.onCleanSearch();
                    self.rendenRefundList(this.getRefundList());
                }
            },
            'RefundList button[name=searchDeal]': {
                click: function() {
                    self.onSearchDeal();
                }
            },
            'RefundList button[name=allSelect]': {
                click: function() {
                    self.sm.selectAll();
                }
            },
            'RefundList button[name=reverseAllSelect]': {
                click: function() {
                    self.sm.deselectAll();
                }
            },
            'RefundList button[name=reverseSelect]': {
                click: function() {

                }
            },
            'RefundList button[name=agreeRefund]': {
                click: function() {
                    var idObj = self.getRefundIdList({
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
                            self.rendenRefundList(self.getRefundList());
                        }
                        if (idObj.refundType == 'alipay') {
                            var w = window.open();
                            w.document.open();
                            w.document.write(response.responseText);
                            var confirmMsg = Ext.Msg.confirm('提示', '你已经完成退款了吗', function(value) {
                                if (value = 'yes') {
                                    self.getRefundStore().reload()
                                }
                            });
                        }


                    }, function() {

                    });

                }
            },
            'RefundList button[name=disAgreeRefund]': {
                click: function() {
                    var idObj = self.getRefundIdList({
                        type: 'disagree'
                    });
                    idObj && sendPutRequest('refund/refuse', {
                        ids: idObj.idList
                    }, '', '', '', function(response) {
                        if (response.responseText == 1) {
                            Ext.Msg.alert('提示', '成功拒绝' + self.sm.getCount() + '条退款记录');
                        }
                        self.rendenRefundList(self.getRefundList());
                    }, function() {})
                }
            },
            'RefundList #dealDetailRefund': {
                click: self.onDealDetailRefund
            },
        });
    },

    getRefundIdList: function(typeObj) {
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

    selectChange: function(obj, objList) {
        this.selectObjList = objList;
    },

    storeFilter: function() {
        var self = this;
        this.getRefundStore().clearFilter(true);
        this.getRefundStore().filter([{
            filterFn: function(item) {
                var comboVal = self.getRefundList().down('combo[name=refundType]').getValue();
                if (comboVal) {
                    return item.get('status') != 1 && item.get('refundType') == comboVal;
                } else {
                    return item.get('status') != 1
                }
            }
        }]);
    },

    rendenRefundList: function(grid) {
        var beginTime = grid.down('[name=beginTime]').rawValue,
            endTime = grid.down('[name=endTime]').rawValue,
            refundType = grid.down('#refundTypeCombo').getValue(),
            status = grid.down('#statusCombo').getValue();

        store = grid.store;

        store.getProxy().extraParams = {
            beginTime: beginTime,
            endTime: endTime,
            refundType: refundType || '',
            status: status || ''
        };
        //this.storeFilter();
        store.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },

    onSearchDeal: function() {
        var self = this,
            RefundList = this.getRefundList(),
            SearchInput = RefundList.down('[name=mobileSearch]'),
            mobileOrDealId = SearchInput.getValue(),
            store = self.getRefundStore(),
            refundTypeSearch = RefundList.down('[name=refundTypeSearch]').getValue(),
            params = {
                dealId: mobileOrDealId
            };
        if (refundTypeSearch == 'mobile') {
            params = {
                mobile: mobileOrDealId
            };
        }
        store.getProxy().extraParams = params;
        store.load();
    },

    onCleanSearch:function(){
        this.getRefundList().down('[name=mobileSearch]').setValue('');
        this.getRefundList().down('[name=refundTypeSearch]').setValue('');
    },

    onDealDetailRefund: function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealDetailRefund();
        win.down('form').loadRecord(record);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: record.get('dealBackendId'),
            }
        });
    },
});
