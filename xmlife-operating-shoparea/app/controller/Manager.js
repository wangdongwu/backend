Ext.define('XMLifeOperating.controller.Manager', {
    extend: 'Ext.app.Controller',

    views: [
        'staffManage.manager.ManagerList',
        'staffManage.manager.EditManager',
        'staffManage.manager.ManagerWorkTimeList',
        'staffManage.manager.Maintain'
    ],

    stores: [
        'Manager',
        'ManagerWorkTime',
        //'Maintain'
    ],

    models: [
        'Manager',
        'ManagerWorkTime',
        //'Maintain'
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
    }, {
        ref: 'maintain',
        selector: 'maintain',
        xtype: 'maintain',
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
            'managerList #editManagerId': {
                click: me.onEdit
            },
            'editManager #save-manager-edit-btn': {
                click: me.saveEditWindow
            },
            'managerList #searchButton': {
                click: me.searchManager
            },
            'managerList #activeBind': {
                click: me.activeBind
            },
            'managerList #managerWorkTimeId': {
                click: me.managerWorkTimeId
            },
            'managerList #closeOrOpenOrder': {
                click: me.closeOrOpenOrder
            },
            'editManager filefield[name="managerUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },
            'managerWorkTimeList #managerReturn':{
                click: function() {
                    var tab = me.getManagerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            // 考勤管理按时间过滤
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
        });
    },
    // 操作
    closeOrOpenOrder: function(grid, column, rowIndex) {
        var me = this;
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
    },
    // 考勤管理页面
    managerWorkTimeId: function(view, column, rowIndex, colIndex, e) {
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
    },
    // 查看未绑定的掌柜
    activeBind: function(grid) {
        var me = this;
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
    },
    // 搜索
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

            var pwd = editWindow.down('[name=pwd]').getValue();
            pwd = pwd.replace(/(^\s+)|(\s+$)/g,"");
            if(pwd!=''){
                manager.set('pwd', hex_md5(pwd));
            }

            if (manager.get('id') != null && manager.get('id') != '') {
                var url = 'manager/updateManager';
                sendPutRequest(url, {
                    manager:manager.get('uid'),
                    name: manager.get('name'),
                    pwd: manager.get('pwd'),
                    phone: manager.get('phone'),
                    title: manager.get('title'),
                    gender: manager.get('gender'),
                    idcard: manager.get('idcard'),
                    avatar: manager.get('avatar'),
                }, '编辑模板', '成功编辑模板', '编辑模板失败', function(operation) {
                    windowEl.unmask();
                    editWindow.close();
                });
                return;
            }

            manager.save({
                success: function(task, operation) {
                    var error = operation.getError();
                    var errorStr = '';
                    switch (operation.response.responseText) {
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
                    if (operation.response.responseText < 0) {
                        Ext.MessageBox.show({
                            title: '编辑任务失败',
                            msg: errorStr,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        windowEl.unmask();
                        return;
                    }
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
                },
                failure: function(task, operation) {
                    var error = operation.getError(),
                        msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                    Ext.MessageBox.show({
                        title: '编辑任务失败',
                        msg: msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                }
            })
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据!');
        }
    }
});
