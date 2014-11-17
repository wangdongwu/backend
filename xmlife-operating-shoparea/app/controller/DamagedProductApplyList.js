Ext.define('XMLifeOperating.controller.DamagedProductApplyList', {
    extend: 'Ext.app.Controller',

    views: ['damagedProductApply.DamagedProductApplyList','damagedProductApply.AddDamagedProductApply'],

    stores: ['DamagedProductApply', 'ShopArea','DamagedProductStatus','Shop','ProductSearch'],

    models: ['DamagedProductApply', 'ShopArea','Shop'],

    refs: [{
        ref: 'damagedProductApplyList',
        selector: 'damagedProductApplyList',
        xtype: 'damagedProductApplyList'
    }, 
    {
        ref: 'shopArea',
        selector: '#shopArea',
    }, 
    {
        ref: 'keyword',
        selector: '#keyword',
    },
    {
        ref: 'addDamagedProductApply',
        selector: 'addDamagedProductApply',
        xtype: 'addDamagedProductApply',
        autoCreate: true
    },
    {
        ref: 'chooseShopList',
        selector: '#chooseShopList',
    },
    ],
    init: function() {
        var me = this;
        this.control({
            'damagedProductApplyList #shopArea': {
                select: function(combo) {
                    var sstore = this.getDamagedProductApplyStore();
                    me.dateReset();
                    sstore.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/applyList';
                    sstore.getProxy().extraParams = {
                        cityId: XMLifeOperating.generic.Global.currentCity,
                        areaId:combo.getValue(),
                        startTime: me.beginTime,
                        endTime: me.endTime
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
            'damagedProductApplyList':{

            },
            'damagedProductApplyList #createDamagedProductApply': {
                click: function() {
                    var cClass = this.getDamagedProductApplyModel();
                    var line = new cClass();
                    var win = this.getAddDamagedProductApply();
                    win.down('form').loadRecord(line);
                    
                    var store = Ext.create('XMLifeOperating.store.Shop', {
                        autoSync: true
                    });
                    store.load({
                        params:{
                            cities:XMLifeOperating.generic.Global.currentCity,
                            areaId:this.areaId
                        },
                     })

                    this.getChooseShopList().bindStore(store,false);

                    win.show();
                }
            },

           'addDamagedProductApply #reseachShopProduct': {
                click: function() {
                    var shopid = me.getAddDamagedProductApply().down('#chooseShopList').getValue();
                    var keyWords = me.getAddDamagedProductApply().down('#keywordShop').getValue();
                    var store = me.getProductSearchStore();
                    if (keyWords == '') {
                        return;
                    } else {
                        store.load({
                            params: {
                                shopId: shopid,
                                keyword: keyWords
                            }
                        });
                    }
                }
            },
            'addDamagedProductApply #saveDamagedProductApplyBtn': {
                click: function() {
                var editWindow = this.getAddDamagedProductApply();
                var windowEl = editWindow.getEl();

                var me = this;
                var shopid = me.getAddDamagedProductApply().down('#chooseShopList').getValue();
                var shopProductModel = Ext.ComponentQuery.query('#chooseShopProductId')[0].getSelectionModel();
                var selectRecords = shopProductModel.getSelection();
                var shopProduct=[];
                selectRecords.forEach(function(item) {
                    if (item.get("id") != null) {
                        shopProduct.push(item.get('id'));
                    }
                });
                var reasonCode = me.getAddDamagedProductApply().down('#reasonCodeitem').getValue();
                var totalCount = me.getAddDamagedProductApply().down('#totalCount').getValue();
                var params = {
                            productId:shopProduct,
                            reasonCode:reasonCode,
                            count:totalCount
                }
                sendRequest('damagedProductApply/apply',params, '申报残损', '成功申报残损', '申报残损失败', function() {
                    windowEl.unmask();
                    editWindow.close();
                    var sstore = me.getDamagedProductApplyStore();
                    me.dateReset();
                    sstore.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/applyList';
                    sstore.getProxy().extraParams = {
                        cityId: XMLifeOperating.generic.Global.currentCity,
                        startTime: me.beginTime,
                        endTime: me.endTime,
                        areaId:me.areaId
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                });
                }
            },

            'damagedProductApplyList #damagedProductApplyInvoice': {
                click: function() {
                    var me = this;
                    var damagedProductApplyList = me.getDamagedProductApplyList();
                    var beginTime = damagedProductApplyList.down('[name=beginTime]').rawValue;
                    var endTime = damagedProductApplyList.down('[name=endTime]').rawValue;

                    Ext.MessageBox.confirm('提示', '确认导出残损申报数据？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/exportApplyList?' + 'areaId=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&startTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '残损申报单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },

            'damagedProductApplyList #getDealListByDate': {
                click: function() {
                    var me = this;
                    var damagedProductApplyList = me.getDamagedProductApplyList();
                    var beginTime = damagedProductApplyList.down('[name=beginTime]').rawValue;
                    var endTime = damagedProductApplyList.down('[name=endTime]').rawValue;
                    var sstore = this.getDamagedProductApplyStore();
                    sstore.getProxy().extraParams = {
                        areaId: this.areaId,
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

            'damagedProductApplyList #dpStatusSearch': {
                select: function(combo) {
                    var sstore = this.getDamagedProductApplyStore();
                    var damagedProductApplyList = me.getDamagedProductApplyList();
                    var beginTime = damagedProductApplyList.down('[name=beginTime]').rawValue;
                    var endTime = damagedProductApplyList.down('[name=endTime]').rawValue;
                    sstore.getProxy().extraParams = {
                        areaId: this.areaId,
                        status: combo.getValue(),
                        startTime: beginTime,
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
            },

            'damagedProductApplyList #getDamagedProductApplyListByDate': {
                click: function() {
                    var me = this;
                    var damagedProductApplyList = me.getDamagedProductApplyList();
                    var beginTime = damagedProductApplyList.down('[name=beginTime]').rawValue;
                    var endTime = damagedProductApplyList.down('[name=endTime]').rawValue;
                    var sstore = this.getDamagedProductApplyStore();
                    sstore.getProxy().extraParams = {
                        areaId: this.areaId,
                        startTime: beginTime,
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
        });
},
dateReset:function(){
    var me =this;
    var damagedProductApplyList = me.getDamagedProductApplyList();
    var beginTimeCmp = damagedProductApplyList.down('[name=beginTime]');
    var endTimeCmp  = damagedProductApplyList.down('[name=endTime]');
    beginTimeCmp.reset();
    endTimeCmp.reset();
    this.beginTime = beginTimeCmp.rawValue;
    this.endTime = endTimeCmp.rawValue;
},

dateString: function(date) {
    var date  = date||{};
    return date.getFullYear() + '-' + (date.getMonth() + 1) +'-'+ date.getDate();
},

onRefresh: function(view, e, eOpts) {
    var me = this;
    if (!view.isDisabled()) {
            //发送刷新请求
            var sstore = this.getDamagedProductApplyStore();
            me.dateReset();//日期号码重置
            sstore.getProxy().extraParams = {
                areaId: this.areaId,
                endTime:me.endTime,
                beginTime:me.beginTime
            };
            sstore.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
            //禁用按钮并进入倒计时
            var count = function(t) {
                var time = 5 - t;
                view.setText(time + 's');
            }
            view.setDisabled(true);
            for (var i = 0; i < 5; i++) {
                (function(t) {
                    setTimeout(function() {
                        count(t)
                    }, t * 1000);
                }(i))
            }
            setTimeout(function() {
                view.setDisabled(false);
                view.setText('刷新');
            }, 5000);
        } else {
            return
        }
    },

});