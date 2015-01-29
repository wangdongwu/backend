Ext.define('XMLifeOperating.controller.Manager', {
    extend: 'Ext.app.Controller',

    views: [
        'staffManage.manager.ManagerList',
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
        ref: 'managerList',
        selector: 'managerList',
        xtype: 'managerList',
        autoCreate: true
    }, {
        ref: 'shopArea',
        selector: '#shopArea',
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
            'managerWorkTimeList #managerReturn': {
                click: function() {
                    var tab = me.getManagerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            //查看中心下暂停或接单掌柜
            'managerList #shopArea': {
                render: function(combo) {},
                select: function(combo) {
                    var view = me.getManagerList();
                    var store = me.getManagerStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        area: combo.getValue()
                    };
                    store.on('load', function() {
                        view.down('#activeBind').setText('查看未绑定的掌柜');
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
            Ext.getCmp('managerList').down('#shopArea').setValue('');
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
            store = me.getManagerStore(),
            view = me.getManagerList(),
            area = me.areaId,
            keyWords = view.down('#searchBuyerKeyWords').getValue(),
            activeBindText = view.down('#activeBind').getText(),
            isUnbind = null;

        if (activeBindText == '查看已绑定的掌柜') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的掌柜') {
            isUnbind = false;
        }
        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: isUnbind
            };
            store.on('load', function() {
                view.down('#searchBuyerKeyWords').setValue(keyWords);
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
                nameOrPhone: keyWords
            };
            store.on('load', function() {
                view.down('#activeBind').setText('查看未绑定的掌柜');
                view.down('#searchBuyerKeyWords').setValue(keyWords);
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
    onShow: function() {}
});
