Ext.define('XMLifeOperating.controller.Shopper', {
    extend: 'Ext.app.Controller',

    views: ['staffManage.shopper.ShopperList',
        'staffManage.shopper.EditShopper',
        'staffManage.shopper.DealShopperHistoryList',
        'staffManage.shopper.ShopperWorkTimeList',
        'staffManage.shopper.DealItemsLists'
    ],

    stores: ['SuperShopper',
        'DealShopperHistory',
        'SuperShopperWorkTime',
        'DealItems'
    ],
    models: ['SuperShopper',
        'DealShopperHistory',
        'SuperShopperWorkTime',
        'DealItems'
    ],
    refs: [{
        ref: 'shopperList',
        selector: 'shopperList',
        xtype: 'shopperList',
        autoCreate: true
    }, {
        ref: 'shopArea',
        selector: '#shopArea',
    }, {
        ref: 'editWindow',
        selector: 'editShopper',
        xtype: 'editShopper',
        autoCreate: true
    }, {
        ref: 'dealShopperHistoryList',
        selector: 'dealShopperHistoryList',
        xtype: 'dealShopperHistoryList',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'shopperWorkTimeList',
        selector: 'shopperWorkTimeList',
        xtype: 'shopperWorkTimeList',
        autoCreate: true
    }, {
        ref: 'dealItemsLists',
        selector: 'dealItemsLists',
        xtype: 'dealItemsLists',
        autoCreate: true
    }],
    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({

            'shopperList': {
                added: me.onShow,
            },
            //查看中心下暂停或接单买手
            'shopperList #shopArea': {
                render: function(combo) {},
                select: function(combo) {
                    var view = me.getShopperList(),
                        activeSearch = view.down('#activeSearch').getText();

                    if (activeSearch == '查看停单买手') {
                        isActive = true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive = false;
                    }

                    var store = me.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    store.on('load', function() {
                        view.down('#activeBind').setText('查看未绑定的买手');
                        view.down('#searchBuyerKeyWords').setValue('');
                    });
                    store.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                    this.areaId = combo.getValue();
                },
            },
            //查看中心下暂停或接单买手
            'shopperList #activeSearch': {
                click: function() {
                    var view = me.getShopperList(),
                        activeSearch = view.down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive = false;
                        isUnbind = '';
                        activeSearch = '查看接单买手';
                    } else if (activeSearch == '查看接单买手') {
                        isActive = true;
                        isUnbind = true;
                        activeSearch = '查看停单买手';
                    }
                    var store = me.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        area: me.getShopArea().getValue(),
                        isActive: isActive
                    };
                    store.on('load', function() {
                        view.down('#activeBind').setText('查看未绑定的买手');
                        view.down('#searchBuyerKeyWords').setValue('');
                        view.down('#activeSearch').setText(activeSearch);
                    });

                    store.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                }
            },
            'shopperList #activeBind': {
                click: function(grid) {
                    var view = me.getShopperList(),
                        activeBindText = view.down('#activeBind').getText();

                    if (activeBindText == '查看已绑定的买手') {
                        isUnbind = '';
                        activeBindText = '查看未绑定的买手';
                    } else if (activeBindText == '查看未绑定的买手') {
                        isUnbind = true;
                        activeBindText = '查看已绑定的买手';
                    }
                    var store = this.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        unbind: isUnbind
                    };
                    store.on('load', function() {
                        view.down('#activeSearch').setText('查看停单买手');
                        view.down('#searchBuyerKeyWords').setValue('');
                        view.down('#activeBind').setText(activeBindText);
                    });
                    store.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                }
            },
            'shopperList #add': {
                click: me.onAdd
            },
            'editShopper filefield[name="shopperUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            //历史订单
            'shopperList #dealShopperHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getDealShopperHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var Shopper = view.getRecord(view.findTargetByEvent(e));
                    var shopperId = Shopper.get('uid');
                    var dealShopperHistoryStroe = this.getDealShopperHistoryStore();
                    var dealShopperHistory = this.getDealShopperHistoryList()

                    this.shopperId = shopperId;
                    var radios = dealShopperHistory.down('#historyorderradios');
                    if (radios.getValue().dayType == 0) {
                        radios.setValue({
                            dayType: 0
                        });
                        dealShopperHistoryStroe.getProxy().extraParams = {
                            shopper: shopperId,
                            dayType: 0
                        };
                        dealShopperHistoryStroe.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                    } else {
                        radios.setValue({
                            dayType: 0
                        });
                    }
                    content.add(tab);
                }
            },
            'dealShopperHistoryList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            case 'dayType0':
                                str = 0;
                                break;
                            case 'dayType1':
                                str = 1;
                                break;
                            case 'dayType2':
                                str = 2;
                                break;
                            case 'dayType3':
                                str = 3;
                                break;
                            case 'dayType4':
                                str = 4;
                                break;
                            case 'dayType5':
                                str = 5;
                                break;
                            case 'dayType6':
                                str = 6;
                                break;
                        }
                        var store = this.getDealShopperHistoryStore();
                        var shopperId = this.shopperId;

                        store.getProxy().extraParams = {
                            dayType: str,
                            superShopperId: shopperId
                        };
                        store.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });

                        this.dayType = str;

                    }
                }
            },
            //返回买手清单
            'dealShopperHistoryList #shopperReturn,shopperWorkTimeList #shopperReturn': {
                click: function() {
                    var tab = me.getShopperList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },

            //考勤管理
            'shopperList #shopperWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getShopperWorkTimeList(),
                        content = this.getContentPanel(),
                        shopper = view.getRecord(view.findTargetByEvent(e)),
                        shopperId = shopper.get('uid'),
                        shopperWorkTimeStore = this.getSuperShopperWorkTimeStore(),
                        shopperWorkTimeList = this.getShopperWorkTimeList(),
                        radios = shopperWorkTimeList.down('#shopperworktimeradios');

                    content.removeAll(false);
                    this.shopperId = shopperId;
                    if (radios.getValue().dayType == 3) {
                        radios.setValue({
                            dayType: 3
                        });
                        shopperWorkTimeStore.getProxy().extraParams = {
                            superShopperId: shopperId,
                            dayType: 3
                        }
                        shopperWorkTimeStore.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                    } else {
                        radios.setValue({
                            dayType: 3
                        });
                    }
                    content.add(tab);

                }
            },
            'shopperWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    var shopperId = me.shopperId;
                    if (newV == true) {;
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            case 'dayType0':
                                str = 0;
                                break;
                            case 'dayType1':
                                str = 1;
                                break;
                            case 'dayType2':
                                str = 2;
                                break;
                            case 'dayType3':
                                str = 3;
                                break;
                            case 'dayType4':
                                str = 4;
                                break;
                            case 'dayType5':
                                str = 5;
                                break;
                            case 'dayType6':
                                str = 6;
                                break;
                            default:
                                str = -1;
                                break;
                        }
                        var store = this.getSuperShopperWorkTimeStore();
                        store.getProxy().extraParams = {
                            dayType: str,
                            superShopperId: shopperId
                        };
                        store.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                        this.dayType = str;

                    }
                }
            },
            //采购清单
            'dealShopperHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getDealItemsLists();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStroe = this.getDealItemsStore();
                    dealItemsStroe.load({
                        params: {
                            deal: dealBackendId,
                            dayType: 1
                        }
                    });
                    content.add(tab);
                }

            },
            ///返回历史订单
            'dealItemsLists #dealShopperHistoryListReturn': {
                click: function() {
                    var tab = me.getDealShopperHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'shopperList #closeOrOpenOrder': {
                click: function(grid, column, rowIndex, colIndex, e) {
                    var record = grid.getRecord(grid.findTargetByEvent(e)),
                        superShopperId = record.get('uid'),
                        isActive = record.get('isActive'),
                        url = '',
                        str = '确认要此操作吗？',
                        win = me.getShopperList(),
                        store = me.getSuperShopperStore(),
                        activeBindText = win.down('#activeBind').getText(),
                        searchBuyerKeyWords = win.down('#searchBuyerKeyWords').getValue();
                    if (isActive === true) {
                        str = '确认要暂停买手接单吗？';
                        isActive = false;
                    } else {
                        str = '确认要恢复买手接单';
                        isActive = true;
                    }
                    url = 'superShopper/enable';
                    Ext.MessageBox.confirm("选择框", str, function(str) {
                        if (str != 'yes') {
                            return;
                        }
                        sendPutRequest(url, {
                            superShopperId: superShopperId,
                            isActive: isActive
                        }, '操作恢复或暂停买手接单', '成功操作买手接单', '操作买手接单失败', function() {
                            if (activeBindText == '查看已绑定的买手' || searchBuyerKeyWords != '') {
                                record.set('isActive', isActive);
                                return;
                            }
                            me.fireEvent('refreshView');
                        });
                    });
                }
            },
            //search
            'shopperList #searchButton': {
                click: me.searchShopper
            }

        });
    },
    searchShopper: function() {
        var me = this,
            view = me.getShopperList(),
            keyWords = Ext.util.Format.trim(view.down('#searchBuyerKeyWords').getValue()),
            store = me.getSuperShopperStore(),
            activeBindText = view.down('#activeBind').getText();

        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: ''
            };
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords
            };
        }

        store.on('load', function() {
            view.down('#activeBind').setText('查看未绑定的买手');
            view.down('#searchBuyerKeyWords').setValue(keyWords);
        });
        store.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    onShow: function() {
        /*var store = this.getShopperStore();
        store.load({
            params: {
                unbind: true
            },
            callback: function() {
                Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                Ext.getCmp('shopperList').down('#shopArea').setValue('');
            }
        });*/
    },
    onAdd: function() {
        var cClass = this.getSuperShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
        win.down('#shopperPhone').setDisabled(false);
        win.down('form').loadRecord(shopper);
        win.show();
    }
});
