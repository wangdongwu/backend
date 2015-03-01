Ext.define('XMLifeOperating.controller.GShopper', {
    extend: 'Ext.app.Controller',

    views: [
        'staffManage.shopper.GShopperList',
        'staffManage.shopper.GShopperEdit',
        'staffManage.shopper.GShopperWorkTimeList'
    ],

    stores: [
        'SuperShopper',
        'SuperShopperWorkTime'
    ],
    models: [
        'SuperShopper',
        'SuperShopperWorkTime'
    ],
    refs: [{
        ref: 'gShopperList',
        selector: 'gShopperList',
        xtype: 'gShopperList',
        autoCreate: true
    }, {
        ref: 'editWindow',
        selector: 'gShopperEdit',
        xtype: 'gShopperEdit',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel'
    }, {
        ref: 'gShopperWorkTimeList',
        selector: 'gShopperWorkTimeList',
        xtype: 'gShopperWorkTimeList',
        autoCreate: true
    }],
    init: function() {
        var me = this,
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
            'gShopperList #filtrate': {
                change: me.filtrate
            },
            'gShopperList #abandon': {
                click: me.abandon
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
            //返回买手清单
            'gShopperWorkTimeList #shopperReturn': {
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
                click: function(view, cell, rowIndex, colIndex, e, record) {
                    var shopperId = record.get('uid'),
                        shopperWorkTimeStore = this.getSuperShopperWorkTimeStore(),
                        content = this.getContentPanel(),
                        newTab = this.getGShopperWorkTimeList();

                    shopperWorkTimeStore.getProxy().extraParams = {
                        superShopperId: shopperId,
                        dayType: 3
                    };

                    shopperWorkTimeStore.loadPage(1);

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
                change: function(record, newV) {
                    var shopperId = this.shopperId;
                    var ShopperWorkTimeStore = this.getSuperShopperWorkTimeStore();
                    if (newV) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
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
                        ShopperWorkTimeStore.getProxy().extraParams = {
                            superShopperId: shopperId,
                            dayType: str
                        };

                        ShopperWorkTimeStore.loadPage(1);

                        this.dayType = str;
                    }
                }
            },
            'gShopperList #closeOrOpenOrder': {
                click: function(grid, cell, rowIndex, colIndex, e, record) {
                    var shopperId = record.get('uid');
                    var isActive = record.get('isActive');
                    var msg = isActive ? '确认要暂停买手接单吗？' : '确认要恢复买手接单';
                    var store = me.getSuperShopperStore();

                    Ext.MessageBox.confirm("买手管理", msg, function(str) {
                        if (str !== 'yes') {
                            return;
                        }
                        sendPutRequest('superShopper/setActive', {
                            superShopperId: shopperId,
                            isActive: !isActive
                        }, '买手管理', '买手管理操作成功', '买手管理操作失败', function(obj) {
                            if (obj.responseText == -6) {
                                Ext.Msg.alert('废弃失败', '该买手还有订单未完成');
                            } else {
                                me.fireEvent('refreshView');
                                store.loadPage(1);
                            }
                        });
                    });
                }
            },
            'gShopperList #searchButton': {
                click: me.searchShopper
            }
        });
    },
    filtrate: function(record, newV) {
        var store = this.getSuperShopperStore();
        var view = this.getGShopperList();
        var abandon = view.down('#abandon');
        var str;

        switch (newV) {
            case '0':
                str = 0;
                break;
            case '1':
                str = 1;
                break;
            case '2':
                str = 2;
                break;
            case '3':
                str = 3;
                break;
            case '4':
                str = 4;
                break;
            case '5':
                str = 5;
                break;
        }
        if (str === 5) {
            abandon.hide();
        } else {
            abandon.show();
        }
        store.getProxy().extraParams = {
            status: str
        };

        store.loadPage(1);
    },
    // 废弃按钮
    abandon: function(grid, cell, rowIndex, colIndex, e, record) {
        var me = this;
        var shopperId = record.get('uid');
        var store = me.getSuperShopperStore();

        Ext.MessageBox.confirm("买手管理", '确定要将该买手废弃吗？', function(str) {
            if (str !== 'yes') {
                return;
            }
            sendPutRequest('superShopper/setActive', {
                superShopperId: shopperId
            }, '买手管理', '买手管理操作成功', '买手管理操作失败', function(obj) {
                if (obj.responseText == -6) {
                    Ext.Msg.alert('废弃失败', '该买手还有订单未完成');
                } else {
                    me.fireEvent('refreshView');
                    store.loadPage(1);
                }
            });
        });
    },
    // 搜索
    searchShopper: function() {
        var me = this,
            view = me.getGShopperList(),
            keyWords = Ext.util.Format.trim(view.down('#searchBuyerKeyWords').getValue()),
            store = me.getSuperShopperStore();

        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: ''
            };
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords
            };
        }
        store.loadPage(1);
    },
    onShow: function() {
        var store = this.getSuperShopperStore();
        store.loadPage(1);
    },
    onAdd: function() {
        var cClass = this.getSuperShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
        win.down('form').loadRecord(shopper);
        win.down('#shopperPhone').setDisabled(false);
        win.show();
    },
    onEdit: function(view, cell, rowIndex, colIndex, e, record) {
        var win = this.getEditWindow();
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
            url = '',
            view = me.getGShopperList();

        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(shopper);

            var pwd = editWindow.down('[name=pwd]').getValue();
            pwd = pwd.replace(/(^\s+)|(\s+$)/g, "");
            if (pwd != '') {
                shopper.set('pwd', hex_md5(pwd));
            }

            if (shopper.get('id') != null && shopper.get('id') != '' && shopper.get('id') != undefined) {
                windowEl.unmask();
                sendPutRequest('superShopper/updateSuperShopper', {
                    superShopperId: shopper.get('uid'),
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
            } else {
                windowEl.unmask();
                url = 'superShopper';
                var success = function(task) {
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

                    store.on('load', function() {
                        view.down('#searchBuyerKeyWords').setValue(keyWords);
                        view.down('#activeBind').setText('查看未绑定的买手');
                    });

                    store.loadPage(1);
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
                }, '添加买手', '成功添加买手', '添加买手失败', success, failure);
            }
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据！');
        }
    }
});
