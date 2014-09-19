Ext.define('XMLifeOperating.controller.ResidentalDistrict', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.residentalDistrict.ResidentalDistrictList',
        'centralPointManage.residentalDistrict.ResidentalDistrictAdd'
    ],

    stores: [
        'ResidentalDistrict',
        'DelivererZone'
    ],

    models: [
        'ResidentalDistrict',
        'DelivererZone'
    ],
    refs: [{
        ref: 'residentalDistrictList',
        selector: 'residentaldistrictlist',
        xtype: 'residentaldistrictlist',
        autoCreate: true
    }, {
        ref: 'residentalDistrictAdd',
        selector: 'residentaldistrictadd',
        xtype: 'residentaldistrictadd',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({
            'residentaldistrictlist #shopArea': {
                select: function(combo) {
                    var store = this.getResidentalDistrictStore();
                    store.getProxy().extraParams = {
                        unbind: true,
                    }
                    store.loadPage(1, {
                        start: 0,
                        limit: 25,
                        page: 1
                    });
                    Ext.getCmp('residentaldistrictlist').down('#activeBind').setText('查看已绑定的小区');
                    Ext.getCmp('residentaldistrictlist').down('#lineId').setValue('');
                    var delivererZone = this.getDelivererZoneStore();
                    delivererZone.load({
                        params: {
                            shopArea: combo.getValue()
                        }
                    });
                    this.areaId = combo.getValue();
                },
            },
            'residentaldistrictlist #add': {
                click: function() {

                    var cClass = this.getResidentalDistrictModel();
                    var community = new cClass();
                    var win = this.getResidentalDistrictAdd();
                    win.down('form').loadRecord(community);
                    win.show();
                }
            },
            'residentaldistrictlist #lineId': {
                select: function(combo) {
                    //console.log(Ext.getCmp('communityList'));
                    //console.log(Ext.getCmp('communityList').down('#lineId').getValue());
                    console.log('hello shop dsitrict');
                    Ext.getCmp('residentaldistrictlist').down('#activeBind').setText('查看未绑定的小区');
                    isUnbind = true;
                    var store = this.getResidentalDistrictStore();
                    store.getProxy().extraParams = {
                        deliveryZone: combo.getValue(),
                        isActive: true
                    }
                    store.loadPage(1, {
                        start: 0,
                        limit: 25,
                        page: 1
                    });
                },
            },
            'residentaldistrictlist #activeBind': {
                click: function(grid) {
                    Ext.getCmp('residentaldistrictlist').down('#lineId').setValue('');
                    var activeBindText = Ext.getCmp('residentaldistrictlist').down('#activeBind').getText();
                    if (activeBindText == '查看已绑定的小区') {
                        isUnbind = '';
                    } else if (activeBindText == '查看未绑定的小区') {
                        isUnbind = true;
                    }
                    var store = this.getResidentalDistrictStore();
                    store.getProxy().extraParams = {
                        unbind: isUnbind
                    }
                    store.loadPage(1, {
                        start: 0,
                        limit: 25,
                        page: 1
                    });
                }
            },
            'residentaldistrictlist #activeSearch': {
                click: function(grid) {
                    Ext.getCmp('residentaldistrictlist').down('#lineId').setValue('');
                    var activeBindText = Ext.getCmp('residentaldistrictlist').down('#activeSearch').getText();
                    if (activeBindText == '查看已关闭小区') {
                        isUnbind = false;
                    } else if (activeBindText == '查看开启小区') {
                        isUnbind = true;
                    }
                    var store = this.getResidentalDistrictStore();
                    store.getProxy().extraParams = {
                        isActive: isUnbind
                    }
                    store.loadPage(1, {
                        start: 0,
                        limit: 25,
                        page: 1
                    });
                }
            },
            'residentaldistrictlist': {
                added: me.onShow,
            },
            'residentaldistrictlist #ediCommunityId': {
                click: me.onEdit
            },
            'residentaldistrictlist #isActiveId': {
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var district = record.get('id');
                    var isActive = record.get('isActive');
                    console.log(district);
                    var url = '';
                    var str = '确认要此操作吗？';
                    if (isActive == true) {
                        str = '确认要关闭此小区吗？';
                        isActive = false;
                    } else {
                        str = '确认要开启此小区';
                        isActive = true;
                    }
                    url = 'residentalDistrict/enable';
                    Ext.MessageBox.confirm("选择框", str, function(str) {
                        if (str == 'no') {
                            return;
                        }
                        sendPutRequest(url, {
                            district: district,
                            isActive: isActive
                        }, '操作关闭或开启小区', '成功操作小区', '操作小区失败', function() {

                            record.set('isActive',isActive);
                            //me.fireEvent('refreshView');



                           /* var store = me.getResidentalDistrictStore();
                            store.getProxy().extraParams = {
                                //unbind: true
                                isActive:false
                            }
                            store.loadPage(1, {
                                start: 0,
                                limit: 25,
                                page: 1
                            });

                            Ext.getCmp('residentaldistrictlist').down('#activeBind').setText('查看已绑定的小区');
                            Ext.getCmp('residentaldistrictlist').down('#lineId').setValue('');*/
                        });
                    });
                }
            },
            'residentaldistrictlist #searchButton': {
                click: me.searchResidentalDistrict
            },

            'residentaldistrictadd #save-community': {
                click: me.saveEditWindow
            }
        });
    },
    searchResidentalDistrict: function() {
        var me = this,
            keyWords = me.getResidentalDistrictList().down('#searchCommunityKeyWords').getValue(),
            store = this.getResidentalDistrictStore(),
            view = this.getResidentalDistrictList();
        var activeBindText = Ext.getCmp('residentaldistrictlist').down('#activeBind').getText();
        var isUnbind = null;
        if (activeBindText == '查看已绑定的小区') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的小区') {
            isUnbind = ' ';
        }
        if (keyWords == '') {
            store.getProxy().extraParams = {
                unbind: isUnbind
            }
            store.loadPage(1, {
                start: 0,
                limit: 25,
                page: 1
            });
        } else {
            store.getProxy().extraParams = {
                name: keyWords
            }
            store.loadPage(1, {
                start: 0,
                limit: 25,
                page: 1
            });
        }

    },
    onShow: function() {
        // var store = this.getResidentalDistrictStore();
        // store.load({
        //     params: {
        //         unbind: true
        //     },
        //     callback: function() {
        //         Ext.getCmp('residentaldistrictlist').down('#activeBind').setText('查看已绑定的小区');
        //         Ext.getCmp('residentaldistrictlist').down('#lineId').setValue('');
        //     }
        // });
    },
    saveEditWindow: function() {

        var addWindow = this.getResidentalDistrictAdd(),
            windowEl = addWindow.getEl(),
            form = addWindow.down('form').getForm(),
            community = form.getRecord(),
            me = this;
        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(community);
            community.set('city', XMLifeOperating.generic.Global.currentCity);
            console.log("try saving");
            community.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    addWindow.close();
                    //me.fireEvent('refreshView');
                    var store = me.getResidentalDistrictStore();
                    store.getProxy().extraParams = {
                        unbind: true
                    }
                    store.loadPage(1, {
                        start: 0,
                        limit: 25,
                        page: 1
                    });
                    Ext.getCmp('residentaldistrictlist').down('#activeBind').setText('查看已绑定的小区');

                },
                failure: function(task, operation) {

                    var error = operation.getError(),
                        msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                    Ext.MessageBox.show({
                        title: 'Edit Task Failed',
                        msg: msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                }
            })
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var community = view.getRecord(view.findTargetByEvent(e));
        var win = this.getResidentalDistrictAdd();
        win.down('form').loadRecord(community);
        win.show();
    },
});