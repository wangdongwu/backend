Ext.define('XMLifeOperating.controller.Manager', {
    extend: 'Ext.app.Controller',
    statics: {
        // 指定store读取一页时的参数
        PARAM_1PAGE: {
            start: 0,
            limit: 25,
            page: 1
        }
    },

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
                    var content = me.getContentPanel();

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
                        params: me.self.PARAM_1PAGE
                    });
                    me.areaId = combo.getValue();
                }
            },
            // 考勤管理按时间过滤
            'managerWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV) {
                        var dayType = {
                            'dayType0': 0,
                            'dayType1': 1,
                            'dayType2': 2,
                            'dayType3': 3,
                            'dayType4': 4,
                            'dayType5': 5,
                            'dayType6': 6
                        }[record.itemId];

                        dayType = (dayType !== undefined) ? dayType : -1;

                        var store = me.getManagerWorkTimeStore();

                        store.getProxy().extraParams = {
                            dayType: dayType,
                            manager: me.managerId
                        };
                        store.loadPage(1, {
                            params: me.self.PARAM_1PAGE
                        });
                    }
                }
            }
        });
    },
    // 操作
    closeOrOpenOrder: function(view, cellEl, rowIndex, colIndex, e, record) {
        var me = this,
            manager = record.get('uid'),
            isActive = record.get('isActive'),
            msg = isActive ? '确认要将该掌柜停职吗？' : '确认要恢复该掌柜职务吗？';

        Ext.MessageBox.confirm('掌柜管理', msg, function(btnId) {
            if (btnId !== 'yes') {
                return;
            }
            sendPutRequest('manager/enable', {
                managerId: manager,
                isActive: !isActive
            }, '掌柜管理', '掌柜管理操作成功', '掌柜管理操作失败', function() {
                //3种情况 手机查询  未绑定查询 中心停单掌柜查询
                var store = me.getManagerStore(),
                    activeBindText = me.getManagerList().down('#activeBind').getText(),
                    searchBuyerKeyWords = me.getManagerList().down('#searchBuyerKeyWords').getValue();

                if (activeBindText == '查看已绑定的掌柜' || searchBuyerKeyWords != '') {
                    record.set('isActive', !isActive);
                    return;
                }
                me.fireEvent('refreshView');
            });
        });
    },
    // 考勤管理页面
    managerWorkTimeId: function(view, cellEl, rowIndex, colIndex, e, record) {
        var content = this.getContentPanel();

        content.removeAll(false);

        var managerId = record.get('uid');
        var managerWorkTimeStore = this.getManagerWorkTimeStore();
        var managerWorkTimeList = this.getManagerWorkTimeList();
        var radios = managerWorkTimeList.down('#managerworktimeradios');

        this.managerId = managerId;


        if (radios.getValue().dayType == 3) {
            managerWorkTimeStore.getProxy().extraParams = {
                manager: managerId,
                dayType: 3
            };
            managerWorkTimeStore.loadPage(1, {
                params: this.self.PARAM_1PAGE
            });
        }

        radios.setValue({
            dayType: 3
        });

        content.add(managerWorkTimeList);
    },
    // 查看未绑定的掌柜
    activeBind: function(grid) {
        var me = this;
        var activeBindText = me.getManagerList().down('#activeBind').getText(),
            isUnbind;

        if (activeBindText == '查看已绑定的掌柜') {
            isUnbind = '';
            activeBindText = '查看未绑定的掌柜';
        } else if (activeBindText == '查看未绑定的掌柜') {
            isUnbind = true;
            activeBindText = '查看已绑定的掌柜';
            me.getManagerList().down('#shopArea').setValue('');
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
            params: me.self.PARAM_1PAGE
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
            isUnbind;

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
                params: me.self.PARAM_1PAGE
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
                params: me.self.PARAM_1PAGE
            });
        }
    },
    onShow: function() {}
});
