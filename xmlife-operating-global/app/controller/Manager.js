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
        var activeTab = null;

        me.control({
            'gManagerList': {
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
            'gManagerList #filtrate': {
                change: me.filtrate
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
            'editManager #save-manager-edit-btn': {
                click: me.saveEditWindow
            },
            'managerWorkTimeList #managerReturn': {
                click: function() {
                    var newTab = me.getGManagerList();
                    var content = me.getContentPanel();

                    content.remove(content.activeTab, true);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;
                }
            },
            // 上传图片
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
                    var managerId = record.get('uid');
                    var managerWorkTimeStore = this.getManagerWorkTimeStore();
                    var newTab = this.getManagerWorkTimeList();

                    managerWorkTimeStore.getProxy().extraParams = {
                        managerId: managerId,
                        dayType: 3
                    };

                    managerWorkTimeStore.loadPage(1);

                    content.remove(content.activeTab, false);
                    content.add(newTab);
                    content.setActiveTab(newTab);
                    activeTab = newTab;

                    this.managerId = managerId;
                }
            },
            // 当关掉子级，变量应重新定位到父级
            'managerWorkTimeList': {
                close: function() {
                    activeTab = this.getGManagerList();
                }
            },
            'managerWorkTimeList radio[name="dayType"]': {
                change: function(record, newV) {
                    var store = me.getManagerWorkTimeStore();
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
                            default:
                                str = -1;
                                break;
                        }

                        store.getProxy().extraParams = {
                            dayType: str,
                            managerId: me.managerId
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
                    var msg = isActive ? '确认要将该掌柜停职吗？' : '确认要恢复该掌柜职务吗？';
                    var store = me.getManagerStore();

                    Ext.MessageBox.confirm("掌柜管理", msg, function(str) {
                        if (str !== 'yes') {
                            return;
                        }
                        sendPutRequest('manager/setActive', {
                            managerId: manager,
                            isActive: !isActive
                        }, '掌柜管理', '掌柜管理操作成功', '掌柜管理操作失败', function(obj) {
                            if (obj.responseText == -6) {
                                Ext.Msg.alert('关闭失败', '该掌柜所管辖的店铺中的买手有订单未完成');
                            } else {
                                me.fireEvent('refreshView');
                                store.loadPage(1);
                            }
                        });
                    });
                }
            }
        });
    },
    onShow: function() {
        var store = this.getManagerStore();
        store.loadPage(1);
    },
    filtrate: function(record, newV) {
        var view = this.getGManagerList();
        var abandon = view.down('#abandon');
        var store = this.getManagerStore();
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
        var managerId = record.get('uid');


        var store = me.getManagerStore();
        Ext.MessageBox.confirm("掌柜管理", "确定要将该掌柜废弃吗？", function(str) {
            if (str !== 'yes') {
                return;
            }
            sendPutRequest('manager/disable', {
                managerId: managerId
            }, '掌柜管理', '掌柜管理操作成功', '掌柜管理操作失败', function(obj) {
                if (obj.responseText == -6) {
                    Ext.Msg.alert('废弃失败', '该掌柜所管辖的店铺中的买手有订单未完成');
                } else {
                    me.fireEvent('refreshView');
                    store.loadPage(1);
                }
            });
        });
    },
    // 搜索按钮
    searchManager: function() {
        var me = this,
            view = me.getGManagerList(),
            keyWords = view.down('#searchManagerKeyWords').getValue(),
            store = me.getManagerStore();

        if (keyWords === '') {
            store.getProxy().extraParams = {
                unbind: ''
            };
        } else {
            store.getProxy().extraParams = {
                nameOrPhone: keyWords
            };
        }
        store.on('load', function() {
            view.down('#searchManagerKeyWords').setValue(keyWords);
        });
        store.loadPage(1);
    },
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

            if (manager.get('id') != null && manager.get('id') != '') {
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
