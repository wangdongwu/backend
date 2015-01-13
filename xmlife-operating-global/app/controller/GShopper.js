Ext.define('XMLifeOperating.controller.GShopper', {
    extend: 'Ext.app.Controller',

    views: ['staffManage.shopper.GShopperList',
        'staffManage.shopper.GShopperEdit',
        'staffManage.shopper.GDealShopperHistoryList',
        'staffManage.shopper.GShopperWorkTimeList',
        'staffManage.shopper.GDealItemsListShopper'
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
            ref: 'gShopperList',
            selector: 'gShopperList',
            xtype: 'gShopperList',
            autoCreate: true
        }, {
            ref: 'shopArea',
            selector: '#shopArea',
        }, {
            ref: 'editWindow',
            selector: 'gShopperEdit',
            xtype: 'gShopperEdit',
            autoCreate: true
        }, {
            ref: 'gDealShopperHistoryList',
            selector: 'gDealShopperHistoryList',
            xtype: 'gDealShopperHistoryList',
            autoCreate: true
        }, {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        }, {
            ref: 'gShopperWorkTimeList',
            selector: 'gShopperWorkTimeList',
            xtype: 'gShopperWorkTimeList',
            autoCreate: true
        },
        {
            ref: 'gDealItemsListShopper',
            selector: 'gDealItemsListShopper',
            xtype: 'gDealItemsListShopper',
            autoCreate: true
        }
    ],
    init: function() {
        var me = this,
            isActive = true,
            isUnbind = true,
            activeTab = null;

        this.control({
            'gShopperList': {
                added: me.onShow,
                // 接收自定义事件，处理进入或关闭二级面板时显示
                setActive: function() {
                    var content = this.getContentPanel(),
                        isExist = false;
                        
                    Ext.each(content.items.items, function(item) {
                        if (activeTab.id === item.id) {
                            isExist = true;
                        }
                    });
                    if (!isExist) {
                        content.add(activeTab);
                    }
                    content.setActiveTab(activeTab);
                }
            },
            'gShopperList #shopArea': {
                render: function(combo) {

                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive = true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive = false;
                    }
                    var store = this.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                    })
                },
                select: function(combo) {
                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive = true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive = false;
                    }
                    var store = this.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                    })
                },
            },
            //查看中心下暂停或接单买手
            'gShopperList #activeSearch': {
                click: function() {
                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        activeSearch = '查看接单买手';
                        isActive = false;
                        isUnbind = '';
                    } else if (activeSearch == '查看接单买手') {
                        activeSearch = '查看停单买手';
                        isActive = true;
                        isUnbind = true;
                    }
                    var store = me.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        area: me.getShopArea().getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('gShopperList').down('#activeSearch').setText(activeSearch);
                        Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                        me.getGShopperList().down('#searchBuyerKeyWords').setValue('');
                    });

                }
            },
            //查看绑定
            'gShopperList #activeBind': {
                click: function(grid) {
                    var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();
                    if (activeBindText == '查看已绑定的买手') {
                        activeBindText = '查看未绑定的买手';
                        isUnbind = '';
                    } else if (activeBindText == '查看未绑定的买手') {
                        activeBindText = '查看已绑定的买手';
                        isUnbind = true;
                        Ext.getCmp('gShopperList').down('#shopArea').setValue('');
                    }
                    var store = this.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        unbind: isUnbind
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('gShopperList').down('#activeBind').setText(activeBindText);
                        Ext.getCmp('gShopperList').down('#activeSearch').setText('查看停单买手');
                        me.getGShopperList().down('#searchBuyerKeyWords').setValue('');
                    });
                }
            },
            'gShopperList #add': {
                click: me.onAdd
            },
            'gShopperList #editShopperId': {
                click: me.onEdit
            },
            'gShopperEdit #save-shopper-edit-btn': {
                click: me.saveEditWindow
            },
            'gShopperEdit filefield[name="gShopperUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            //历史订单
            'gShopperList #dealShopperHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var Shopper = view.getRecord(view.findTargetByEvent(e));
                    var shopperId = Shopper.get('uid');
                    var dealShopperHistoryStroe = this.getDealShopperHistoryStore();
                    dealShopperHistoryStroe.getProxy().extraParams = {
                        shopper: shopperId,
                        dayType: 0
                    };
                    dealShopperHistoryStroe.loadPage(1);

                    var content = this.getContentPanel(),
                        newTab = this.getGDealShopperHistoryList();
                    
                    content.remove(content.activeTab, false);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;

                    this.shopperId = shopperId;
                }
            },
            //当关掉子级，变量应重新定位到父级
            'gDealShopperHistoryList': {
                close: function() {
                    activeTab = this.getGShopperList();
                }
            },
            'gDealShopperHistoryList radio[name="dayType"]': {
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
                        var dealShopperHistoryStroe = this.getDealShopperHistoryStore();
                        var shopperId = this.shopperId;

                        dealShopperHistoryStroe.getProxy().extraParams = {
                            dayType: str,
                            shopper: shopperId
                        };
                        dealShopperHistoryStroe.loadPage(1);

                        this.dayType = str;
                    }
                }
            },
            //返回买手清单
            'gDealShopperHistoryList #shopperReturn,gShopperWorkTimeList #shopperReturn': {
                click: function() {
                    var content = this.getContentPanel(),
                        newTab = this.getGShopperList();

                    content.remove(content.activeTab, true);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;
                }
            },

            //考勤管理
            'gShopperList #shopperWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var shopper = view.getRecord(view.findTargetByEvent(e)),
                        shopperId = shopper.get('uid'),
                        ShopperWorkTimeStore = this.getSuperShopperWorkTimeStore();

                    ShopperWorkTimeStore.getProxy().extraParams = {
                        shopper: shopperId,
                        dayType: 3
                    }
                    ShopperWorkTimeStore.loadPage(1);

                    var content = this.getContentPanel(),
                        newTab = this.getGShopperWorkTimeList();
                    content.remove(content.activeTab, false);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;

                    this.shopperId = shopperId;
                }
            },
            //当关掉子级，变量应重新定位到父级
            'gShopperWorkTimeList': {
                close: function() {
                    activeTab = this.getGShopperList();
                }
            },
            'gShopperWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    var shopperId = this.shopperId;

                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            // case 'dayType1':
                            //     str=1;
                            //     break;
                            // case 'dayType2':
                            //     str=2;
                            //     break;
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
                        var ShopperWorkTimeStore = this.getSuperShopperWorkTimeStore();

                        ShopperWorkTimeStore.getProxy().extraParams = {
                            shopper: shopperId,
                            dayType: str
                        }
                        ShopperWorkTimeStore.loadPage(1);

                        this.dayType = str;
                    }
                }
            },
            //采购清单
            'gDealShopperHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStroe = this.getDealItemsStore();
                    dealItemsStroe.load({
                        params: {
                            deal: dealBackendId,
                            dayType: 0
                        }
                    });

                    var content = this.getContentPanel(),
                        newTab = this.getGDealItemsListShopper();
                    content.remove(content.activeTab, false);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;
                }

            },
            //当关掉子级，变量应重新定位到父级
            'gDealItemsListShopper': {
                close: function() {
                    activeTab = this.getGDealShopperHistoryList();
                }
            },
            //返回历史订单
            'gDealItemsListShopper #dealShopperHistoryListReturn': {
                click: function() {
                    var content = this.getContentPanel(),
                        newTab = this.getGDealShopperHistoryList();

                    content.remove(content.activeTab, true);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;
                }
            },
            'gShopperList #closeOrOpenOrder': {
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var shopper = record.get('uid');
                    var isActive = record.get('isActive');
                    var url = '';
                    var str = '确认要此操作吗？';
                    if (isActive == true) {
                        str = '确认要暂停买手接单吗？';
                        isActive = false;
                    } else {
                        str = '确认要恢复买手接单';
                        isActive = true;
                    }
                    url = 'superShopper/enable';
                    Ext.MessageBox.confirm("选择框", str, function(str) {
                        if (str == 'no') {
                            return;
                        }
                        sendPutRequest(url, {
                            shopper: shopper,
                            isActive: isActive
                        }, '操作恢复或暂停买手接单', '成功操作买手接单', '操作买手接单失败', function() {

                            var store = me.getSuperShopperStore();
                            var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();
                            var params = '';
                            var searchBuyerKeyWords = me.getGShopperList().down('#searchBuyerKeyWords').getValue();
                            if (activeBindText == '查看已绑定的买手' || searchBuyerKeyWords != '') {
                                record.set('isActive', isActive);
                                return;
                            } else {

                                var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                                if (activeSearch == '查看停单买手') {
                                    isActive = true;
                                } else if (activeSearch == '查看接单买手') {
                                    isActive = false;
                                }
                                store.getProxy().extraParams = {
                                    city: XMLifeOperating.generic.Global.currentCity,
                                    area: me.getShopArea().getValue(),
                                    isActive: isActive
                                };
                                store.loadPage(1);
                                store.on('load', function() {
                                    Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                                });
                            }


                        });
                    });
                }
            },
            //search
            'gShopperList #searchButton': {
                click: me.searchShopper
            }

        });
    },
    searchShopper: function() {
        var me = this,
            keyWords = me.getGShopperList().down('#searchBuyerKeyWords').getValue(),
            store = this.getSuperShopperStore(),
            view = this.getGShopperList();
        var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();
        var isUnbind = null;
        if (activeBindText == '查看已绑定的买手') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的买手') {
            isUnbind = '';
        }
        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: isUnbind
            };
            store.loadPage(1);
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords
            };
            store.loadPage(1);
            store.on('load', function() {
                Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
            });
        }
    },
    onShow: function() {
        /*var store = this.getShopperStore();
        store.load({
            params: {
                unbind: true
            },
            callback: function() {
                Ext.getCmp('gShopperList').down('#activeBind').setText('查看已绑定的买手');
                Ext.getCmp('gShopperList').down('#shopArea').setValue('');
            }
        });*/
    },
    onAdd: function() {
        var cClass = this.getSuperShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
        win.down('form').loadRecord(shopper);
        win.down('#shopperPhone').setDisabled(false);
        win.show();
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        var shopper = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        var record = shopper;
        win.down('#shopperPhone').setDisabled(true);
        win.down('form').loadRecord(record);
        win.down('[name=pwd]').setValue('');
        win.show();
    },
    saveEditWindow: function() {
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            shopper = form.getRecord(),
            me = this,
            url = '';

        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(shopper);

            var pwd = editWindow.down('[name=pwd]').getValue();
            pwd = pwd.replace(/(^\s+)|(\s+$)/g,"");
            if(pwd!=''){
                shopper.set('pwd', hex_md5(pwd));
            }

            if (shopper.get('id') != null && shopper.get('id') != '' && shopper.get('id') != undefined) {
                windowEl.unmask();
                //url = 'superShopper/' + shopper.get('uid');
                url = 'superShopper/updateSuperShopper';
                sendPutRequest(url, {
                    superShopper:shopper.get('uid'),
                    name: shopper.get('name'),
                    pwd: shopper.get('pwd'),
                    title: shopper.get('title'),
                    gender: shopper.get('gender'),
                    idcard: shopper.get('idcard'),
                    phone: shopper.get('phone'),
                    avatar: shopper.get('avatar')
                }, '编辑模板', '成功编辑模板', '编辑模板失败', function() {
                    editWindow.close();
                });
                return;
            }else{
                windowEl.unmask();
                url = 'manager'
                var success = function(task, operation) {
                    var errorStr = '';
                    switch (task.responseText) {
                        case '1':
                            errorStr = '创建成功';
                            break;
                        case '-2':
                            errorStr = '传参错误';
                            break;
                        case '-24':
                            errorStr = '手机已注册';
                            break;
                        case '-28':
                            errorStr = '手机号码格式错误';
                            break;
                    }
                    if (task.responseText < 0) {
                        Ext.MessageBox.show({
                            title: '编辑/添加任务失败',
                            msg: errorStr,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return;
                    }

                    editWindow.close();
                    var keyWords = shopper.get('phone');
                    var store = me.getSuperShopperStore();
                    store.getProxy().extraParams = {
                        nameOrPhone: keyWords
                    };
                    store.loadPage(1);
                    me.getGShopperList().down('#searchBuyerKeyWords').setValue(keyWords);
                };
                var failure = function(task, operation) {
                    var error = operation.getError(),
                        msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                    Ext.MessageBox.show({
                        title: '编辑/添加任务失败',
                        msg: msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                };

                sendRequest(url, {
                        name: shopper.get('name'),
                        pwd: shopper.get('pwd'),
                        title: shopper.get('title'),
                        gender: shopper.get('gender'),
                        idcard: shopper.get('idcard'),
                        phone: shopper.get('phone'),
                        avatar: shopper.get('avatar')
                    }, '添加模板', '成功添加模板', '添加模板失败', success, failure);
            }
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据！');
        }
    }
});