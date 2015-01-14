Ext.define('XMLifeOperating.controller.Manager', {
    extend: 'Ext.app.Controller',

    views: [
        'staffManage.manager.ManagerList',
        'staffManage.manager.EditManager',
        'staffManage.manager.ManagerWorkTimeList'
    ],

    stores: [
        'Manager',
        'ManagerWorkTime',
    ],

    models: [
        'Manager',
        'ManagerWorkTime',
    ],

    refs: [{
        ref: 'managerList',
        selector: 'managerList',
        xtype: 'managerList',
        autoCreate: true
    }, {
        ref: 'shopArea',
        selector: '#shopArea',
    }, {
        ref: 'editWindow',
        selector: 'editManager',
        xtype: 'editManager',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'managerWorkTimeList',
        selector: 'managerWorkTimeList',
        xtype: 'managerWorkTimeList',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        var isActive = true,
            isUnbind = true;

        me.control({
            'managerList': {
                added: me.onShow
            },
            'managerList #add': {
                click: me.onAdd
            },
            'managerList #editManagerId': {
                click: me.onEdit
            },
            'managerList #searchButton': {
                click: me.searchManager
            },
            'editManager #save-manager-edit-btn': {
                click: me.saveEditWindow
            },
            'managerList #shopArea': {
                render: function(combo) {
                    var activeSearch = Ext.getCmp('managerList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单掌柜') {
                        isActive = true;
                    } else if (activeSearch == '查看接单掌柜') {
                        isActive = false;
                    }
                    var store = this.getManagerStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('managerList').down('#activeBind').setText('查看未绑定的掌柜');
                    })
                },
                select: function(combo) {
                    var activeSearch = Ext.getCmp('managerList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单掌柜') {
                        isActive = true;
                    } else if (activeSearch == '查看接单掌柜') {
                        isActive = false;
                    }
                    var store = this.getManagerStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('managerList').down('#activeBind').setText('查看未绑定的掌柜');
                    })
                },
            },
            // 查看中心下暂停或接单掌柜
            'managerList #activeSearch': {
                click: function() {
                    var activeSearch = Ext.getCmp('managerList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单掌柜') {
                        activeSearch = '查看接单掌柜';
                        isActive = false;
                        isUnbind = '';
                    } else if (activeSearch == '查看接单掌柜') {
                        activeSearch = '查看停单掌柜';
                        isActive = true;
                        isUnbind = true;
                    }
                    var store = me.getManagerStore();
                    store.getProxy().extraParams = {
                        area: me.getShopArea().getValue(),
                        isActive: isActive
                    };
                    store.loadPage(1);
                    store.on('load', function() {
                        Ext.getCmp('managerList').down('#activeSearch').setText(activeSearch);
                        Ext.getCmp('managerList').down('#activeBind').setText('查看未绑定的掌柜');
                        me.getManagerList().down('#searchBuyerKeyWords').setValue('');
                    });
                }
            },
            // 查看绑定
            'managerList #activeBind': {
                click: function(grid) {
                    var activeBindText = Ext.getCmp('managerList').down('#activeBind').getText();

                    if (activeBindText == '查看已绑定的掌柜') {
                        isUnbind = '';
                        activeBindText = '查看未绑定的掌柜';
                    } else if (activeBindText == '查看未绑定的掌柜') {
                        isUnbind = true;
                        activeBindText = '查看已绑定的掌柜';
                    }
                    var lstore = this.getManagerStore();
                    lstore.getProxy().extraParams = {
                        unbind: isUnbind
                    };
                    lstore.on('load', function() {
                        me.getManagerList().down('#searchBuyerKeyWords').setValue('');
                        me.getManagerList().down('#activeBind').setText(activeBindText);
                    });
                    lstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                }
            },
            'editManager filefield[name="managerUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },
            // 考勤管理
            'managerList #managerWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getManagerWorkTimeList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var manager = view.getRecord(view.findTargetByEvent(e));
                    var managerId = manager.get('uid');
                    var ManagerWorkTimeStore = this.getManagerWorkTimeStore();
                    var managerWorkTimeList = this.getManagerWorkTimeList();
                    var radios = managerWorkTimeList.down('#managerworktimeradios');
                    this.managerId = managerId;
                    if (radios.getValue().dayType == 3) {
                        radios.setValue({
                            dayType: 3
                        });
                        ManagerWorkTimeStore.getProxy().extraParams = {
                            manager: managerId,
                            dayType: 3
                        }
                        ManagerWorkTimeStore.loadPage(1, {
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
            'managerWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    var managerId = me.managerId;
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
                        var store = this.getManagerWorkTimeStore();
                        store.getProxy().extraParams = {
                            dayType: str,
                            manager: managerId
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
            // 操作
            'managerList #closeOrOpenOrder': {
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var manager = record.get('uid');
                    var isActive = record.get('isActive');
                    var url = '';
                    var str = '确认要此操作吗？';
                    if (isActive == true) {
                        str = '确认要暂停掌柜接单吗？';
                        isActive = false;
                    } else {
                        str = '确认要恢复掌柜接单';
                        isActive = true;
                    }
                    url = 'manager/enable';
                    Ext.MessageBox.confirm("选择框", str, function(str) {
                        if (str != 'yes') {
                            return;
                        }
                        sendPutRequest(url, {
                            managerId: manager,
                            isActive: isActive
                        }, '操作恢复或暂停掌柜接单', '成功操作掌柜接单', '操作掌柜接单失败', function() {
                            //3种情况 手机查询  未绑定查询 中心停单掌柜查询
                            var store = me.getManagerStore();
                            var activeBindText = Ext.getCmp('managerList').down('#activeBind').getText();
                            var params = '';
                            var searchBuyerKeyWords = me.getManagerList().down('#searchBuyerKeyWords').getValue();
                            if (activeBindText == '查看已绑定的掌柜' || searchBuyerKeyWords != '') {
                                record.set('isActive', isActive);
                                return;
                            }
                            me.fireEvent('refreshView');
                        });
                    });
                }
            },
            'managerWorkTimeList #managerReturn': {
                click: function() {
                    var tab = me.getManagerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
        });
    },
    searchManager: function() {
        var me = this,
            keyWords = me.getManagerList().down('#searchBuyerKeyWords').getValue(),
            store = me.getManagerStore(),
            view = me.getManagerList(),
            area = me.areaId,
            activeBindText = Ext.getCmp('managerList').down('#activeBind').getText(),
            isUnbind = null;
        if (activeBindText == '查看已绑定的掌柜') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的掌柜') {
            isUnbind = '';
        }
        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: isUnbind
            };
            store.on('load', function() {
                me.getManagerList().down('#searchBuyerKeyWords').setValue(keyWords);
            });
            store.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords,
                area: area
            };
            store.on('load', function() {
                Ext.getCmp('managerList').down('#activeBind').setText('查看未绑定的掌柜');
                me.getManagerList().down('#searchBuyerKeyWords').setValue(keyWords);
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
    onShow: function() {},
    onAdd: function() {
        var cClass = this.getManagerModel();
        var manager = new cClass();
        var win = this.getEditWindow();
        win.down('#managerPhone').setDisabled(false);
        win.down('form').loadRecord(manager);
        win.show();
    },
    // 编辑
    onEdit: function(view, rowIndex, colIndex, column, e) {
        var manager = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        var record = manager;
        win.down('#managerPhone').setDisabled(true);
        win.down('form').loadRecord(record);
        win.down('[name=pwd]').setValue('');
        win.show();
    },
    saveEditWindow: function() {
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            manager = form.getRecord(),
            me = this;

        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(manager);
            manager.set('pwd', hex_md5(manager.get('pwd')));

            if (manager.get('id') != null && manager.get('id') != '') {
                var url = 'manager/updateManager';
                sendPutRequest(url, {
                    managerId: manager.get('uid'),
                    name: manager.get('name'),
                    pwd: manager.get('pwd'),
                    title: manager.get('title'),
                    gender: manager.get('gender'),
                    phone: manager.get('phone'),
                    idcard: manager.get('idcard'),
                    avatar: manager.get('avatar'),
                }, '编辑模板', '成功编辑模板', '编辑模板失败', function(operation) {
                    windowEl.unmask();
                    editWindow.close();
                });
                return;
            } else {
                windowEl.unmask();
                url = 'manager';
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
                            title: '添加失败',
                            msg: errorStr,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return;
                    }
                    editWindow.close();
                };
                var failure = function(task, operation) {
                    var error = operation.getError(),
                        msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                    Ext.MessageBox.show({
                        title: '添加失败',
                        msg: msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                };

                sendRequest(url, {
                    name: manager.get('name'),
                    pwd: manager.get('pwd'),
                    title: manager.get('title'),
                    gender: manager.get('gender'),
                    idcard: manager.get('idcard'),
                    phone: manager.get('phone'),
                    avatar: manager.get('avatar')
                }, '添加模板', '成功添加模板', '添加模板失败', success, failure);
            }
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据!');
        }
    }
});
