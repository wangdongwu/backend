Ext.define('XMLifeOperating.controller.Manager', {
    extend: 'Ext.app.Controller',

    views: [
        'staffManage.manager.GManagerList',
        'staffManage.manager.EditManager',
        'staffManage.manager.ManagerWorkTimeList'
    ],

    stores: [
        'Manager',
        'ManagerWorkTime'
    ],

    models: [
        'Manager',
        'ManagerWorkTime'
    ],

    refs: [{
        ref: 'gManagerList',
        selector: 'gManagerList',
        xtype: 'gManagerList',
        autoCreate: true
    }, {
        ref: 'shopArea',
        selector: '#shopArea'
    }, {
        ref: 'editWindow',
        selector: 'editManager',
        xtype: 'editManager',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel'
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
            'gManagerList': {
                added: me.onShow
            },
            'gManagerList #add': {
                click: me.onAdd
            },
            'gManagerList #editManagerId': {
                click: me.onEdit
            },
            'gManagerList #searchButton': {
                click: me.searchManager
            },
            'gManagerList #abandon': {
                click: me.abandon
            },
            'gManagerList #activeAbandon': {
                click: me.activeAbandon
            },
            'editManager #save-manager-edit-btn': {
                click: me.saveEditWindow
            },
            'managerWorkTimeList #managerReturn': {
                click: function() {
                    var tab = me.getGManagerList();
                    var content = me.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'gManagerList #shopArea': {
                render: function(combo) {
                    var view = me.getGManagerList(),
                        activeSearch = view.down('#activeSearch').getText();

                    if (activeSearch == '查看停单掌柜') {
                        isActive = true;
                    } else if (activeSearch == '查看接单掌柜') {
                        isActive = false;
                    }
                    var store = me.getManagerStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue(),
                        isActive: isActive
                    };
                    
                    store.on('load', function() {
                        view.down('#activeBind').setText('查看未绑定的掌柜');
                    });
                    
                    store.loadPage(1);
                },
                select: function(combo) {
                    var view = me.getGManagerList(),
                        activeSearch = view.down('#activeSearch').getText();

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
                    
                    store.on('load', function() {
                        view.down('#activeBind').setText('查看未绑定的掌柜');
                    });

                    store.loadPage(1);
                }
            },
            // 查看中心下暂停或接单掌柜
            'gManagerList #activeSearch': {
                click: function() {
                    var view = me.getGManagerList(),
                        activeSearch = view.down('#activeSearch').getText();

                    if (activeSearch == '查看停单掌柜') {
                        activeSearch = '查看接单掌柜';
                        isActive = false;
                        isUnbind = false;
                    } else if (activeSearch == '查看接单掌柜') {
                        activeSearch = '查看停单掌柜';
                        isActive = true;
                        isUnbind = true;
                    }
                    var store = me.getManagerStore();

                    store.getProxy().extraParams = {
                        area: me.getShopArea().getValue(),
                        isActive: isActive,
                        unbind: isUnbind
                    };
                    
                    store.on('load', function() {
                        view.down('#activeSearch').setText(activeSearch);
                        view.down('#activeBind').setText('查看未绑定的掌柜');
                        view.down('#searchBuyerKeyWords').setValue('');
                    });

                    store.loadPage(1);
                }
            },
            // 查看绑定
            'gManagerList #activeBind': {
                click: function() {
                    var view = me.getGManagerList(),
                        activeBindText = view.down('#activeBind').getText(),
                        lstore = me.getManagerStore();

                    if (activeBindText == '查看已绑定的掌柜') {
                        isUnbind = false;
                        activeBindText = '查看未绑定的掌柜';
                    } else if (activeBindText == '查看未绑定的掌柜') {
                        isUnbind = true;
                        activeBindText = '查看已绑定的掌柜';
                        view.down('#shopArea').setValue('');
                    }

                    lstore.getProxy().extraParams = {
                        unbind: isUnbind
                    };
                   
                    lstore.on('load', function() {
                        view.down('#searchBuyerKeyWords').setValue('');
                        view.down('#activeBind').setText(activeBindText);
                    });

                    lstore.loadPage(1);
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
            'gManagerList #managerWorkTimeId': {
                click: function(view, cell, rowIndex, colIndex, e, record) {
                    var content = this.getContentPanel();

                    content.removeAll(false);

                    var managerId = record.get('uid');
                    var managerWorkTimeStore = this.getManagerWorkTimeStore();
                    var managerWorkTimeList = this.getManagerWorkTimeList();
                    var radios = managerWorkTimeList.down('#managerworktimeradios');

                    this.managerId = managerId;

                    radios.setValue({
                        dayType: 3
                    });

                    if (radios.getValue().dayType == 3) {
                        managerWorkTimeStore.getProxy().extraParams = {
                            manager: managerId,
                            dayType: 3
                        };
                        managerWorkTimeStore.loadPage(1);
                    }

                    content.add(managerWorkTimeList);
                }
            },
            'managerWorkTimeList radio[name="dayType"]': {
                change: function(record, newV) {
                    if (newV) {
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
                        var store = me.getManagerWorkTimeStore();

                        store.getProxy().extraParams = {
                            dayType: str,
                            manager: me.managerId
                        };

                        store.loadPage(1);

                        this.dayType = str;
                    }
                }
            },
            // 操作
            'gManagerList #closeOrOpenOrder': {
                click: function(grid, cell, rowIndex, colIndex, e, record) {
                    var me = this;
                    var manager = record.get('uid');
                    var isActive = record.get('isActive');
                    var view = me.getGManagerList();
                    var msg = isActive ? '确认要将该掌柜停职吗？' : '确认要恢复该掌柜职务吗？';

                    Ext.MessageBox.confirm("掌柜管理", msg, function(str) {
                        if (str !== 'yes') {
                            return;
                        }
                        sendPutRequest('manager/enable', {
                            managerId: manager,
                            isActive: !isActive
                        }, '掌柜管理', '掌柜管理操作成功', '掌柜管理操作失败', function() {
                            //3种情况 手机查询  未绑定查询 中心停单掌柜查询
                            var store = me.getManagerStore();
                            var activeBindText = view.down('#activeBind').getText();
                            var searchBuyerKeyWords = view.down('#searchBuyerKeyWords').getValue();

                            if (activeBindText == '查看已绑定的掌柜' || searchBuyerKeyWords !== '') {
                                record.set('isActive', !isActive);
                                return;
                            }

                            me.fireEvent('refreshView');
                            store.loadPage(1);
                        });
                    });
                }
            }
        });
    },
    // 查看废弃掌柜
    activeAbandon: function() {
        var view = this.getGManagerList();
        var activeAbandon = view.down('#activeAbandon').getText();
        var abandon = view.down('#abandon');
        var store = this.getManagerStore();
        var area = this.getShopArea().getValue();
        //var hide = abandon.hide();
    },
    // 废弃按钮
    abandon: function(grid, cell, rowIndex, colIndex, e, record) {
        var store = this.getManagerStore();
    },
    searchManager: function() {
        var me = this,
            view = me.getGManagerList(),
            keyWords = view.down('#searchBuyerKeyWords').getValue(),
            store = me.getManagerStore(),
            area = me.areaId,
            activeBindText = view.down('#activeBind').getText(),
            isUnbind = null;

        if (activeBindText == '查看已绑定的掌柜') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的掌柜') {
            isUnbind = '';
        }
        
        if (keyWords === '') {
            store.getProxy().extraParams = {
                unbind: isUnbind
            };
            store.on('load', function() {
                view.down('#searchBuyerKeyWords').setValue(keyWords);
            });
            store.loadPage(1);
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords,
                area: area
            };
            store.on('load', function() {
                view.down('#activeBind').setText('查看未绑定的掌柜');
                view.down('#searchBuyerKeyWords').setValue(keyWords);
            });
            store.loadPage(1);
        }
    },
    onShow: function() {},
    onAdd: function() {
        var cClass = this.getManagerModel();
        var manager = new cClass();
        var win = this.getEditWindow();
        win.down('#managerPhone').setDisabled(false);
        win.down('[name=pwd]').allowBlank = false;
        win.down('form').loadRecord(manager);
        win.show();
    },
    // 编辑
    onEdit: function(grid, cell, rowIndex, colIndex, e, record) {
        var win = this.getEditWindow();
        win.down('#managerPhone').setDisabled(true);
        win.down('form').loadRecord(record);
        win.down('[name=pwd]').setValue('');
        win.down('[name=pwd]').allowBlank = true;
        win.show();
    },
    saveEditWindow: function() {
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            manager = form.getRecord();

        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(manager);
            var pwd = editWindow.down('[name=pwd]').getValue();
            pwd = pwd.replace(/(^\s+)|(\s+$)/g, "");
            if (pwd !== '') {
                manager.set('pwd', hex_md5(pwd));
            }

            if (manager.get('id') !== null && manager.get('id') !== '') {
                // 编辑修改
                var url = 'manager/updateManager';
                sendPutRequest(url, {
                    manager: manager.get('uid'),
                    name: manager.get('name'),
                    pwd: manager.get('pwd'),
                    title: manager.get('title'),
                    gender: manager.get('gender'),
                    phone: manager.get('phone'),
                    idcard: manager.get('idcard'),
                    avatar: manager.get('avatar')
                }, '编辑掌柜', '成功编辑掌柜', '编辑掌柜失败', function() {
                    windowEl.unmask();
                    editWindow.close();
                });
                return;
            } else {
                // 添加
                windowEl.unmask();
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

                sendRequest('manager', {
                    name: manager.get('name'),
                    pwd: manager.get('pwd'),
                    title: manager.get('title'),
                    gender: manager.get('gender'),
                    idcard: manager.get('idcard'),
                    phone: manager.get('phone'),
                    avatar: manager.get('avatar')
                }, '添加掌柜', '成功添加掌柜', '添加掌柜失败', success, failure);
            }
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据!');
        }
    }
});
