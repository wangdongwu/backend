Ext.define('XMLifeOperating.controller.CentralPointConfigure', {
    extend: 'Ext.app.Controller',
    views: [
        'centralPointManage.centralPointConfigure.CentralPointConfigureList',
        'centralPointManage.centralPointConfigure.CentralPointConfigureStoreConfigure',
        'centralPointManage.centralPointConfigure.CentralPointConfigureBannerList',
        'centralPointManage.centralPointConfigure.CentralPointConfigureBannerEdit'
    ],
    stores: [
        'ShopArea',
        'ShopAreaBanner',
        'Shop'
    ],
    models: [
        'ShopArea',
        'ShopAreaBanner',
        'Shop'
    ],
    refs: [{
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel',
        autoCreate:true,
    }, {
        ref: 'centralPointConfigureBannerList',
        selector: 'centralpointconfigurebannerlist',
        xtype: 'centralpointconfigurebannerlist',
        autoCreate: true
    }, {
        ref: 'centralPointConfigureStoreConfigure',
        selector: 'centralpointconfigurestoreconfigure',
        xtype: 'centralpointconfigurestoreconfigure',
        autoCreate: true
    }, {
        ref: 'centralPointConfigureList',
        selector: 'centralpointconfigurelist',
        xtype: 'centralpointconfigurelist',
        autoCreate: true
    }, {
        ref: 'centralPointConfigureBannerEdit',
        selector: 'centralpointconfigurebanneredit',
        xtype: 'centralpointconfigurebanneredit',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        this.control({
            'centralpointconfigurelist': {
                added: me.onShow,
            },

            'centralpointconfigurelist #editCentralPoint': {
                //click: me.onEdit
                click: me.onEdit
            },
            'centralpointconfigurelist #seeBannerBtn': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getCentralPointConfigureBannerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var centralPoint = view.getRecord(view.findTargetByEvent(e));

                    var centralPointId = centralPoint.get('id');
                    var centralPointBannerStroe = this.getShopAreaBannerStore();
                    centralPointBannerStroe.load({
                        params: {
                            area: centralPointId
                        }
                    });
                    content.add(tab);
                    this.centralPointId = centralPointId;
                }
            },
            'centralpointconfigurebannerlist #returnCentralPoint': {
                click: function() {
                    var tab = me.getCentralPointConfigureList();
                    var store = me.getShopAreaStore();
                    store.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity
                        },
                    });
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'centralpointconfigurebannerlist #add': {
                click: function() {
                    var len = this.getShopAreaBannerStore().getCount();

                    if (len >= 6) {
                        Ext.MessageBox.show({
                            title: '无法添加Banner',
                            msg: 'Banner数量已经达到上限',
                            icon: Ext.Msg.INFO,
                            buttons: Ext.Msg.OK
                        });

                        return;
                    }
                    var cClass = me.getShopAreaBannerModel();
                    var CentralPointBanner = new cClass();
                    var win = this.getCentralPointConfigureBannerEdit();
                    win.down('form').loadRecord(CentralPointBanner);
                    win.show();
                }
            },
            'centralpointconfigurebanneredit #saveOrder': {
                click: me.saveOrder
            },
            'centralpointconfigurebanneredit #editCentralPointBanner': {
                click: me.onCentralPointBannerEdit
            },
            'centralpointconfigurebanneredit #btnSave': {
                click: me.saveEditCentralPointBannerWin
            },
            'centralpointconfigurebanneredit filefield[name="centralPointBannerUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            }

        });
    },
    onShow: function() {
        var store = this.getShopAreaStore();
        store.load({
            params: {
                city: XMLifeOperating.generic.Global.currentCity
            }
        });
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var centralPoint = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        win.down('form').loadRecord(centralPoint);
        win.show();
    },
    onCentralPointBannerEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var centralPointBanner = view.getRecord(view.findTargetByEvent(e));
        console.log(centralPointBanner);
        var win = this.getEditCentralPointBannerWin();
        centralPointBanner.set('oldUrl', centralPointBanner.get('url'));
        win.down('form').loadRecord(centralPointBanner);
        win.show();
    },
    saveEditWindow: function() {

        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            centralPoint = form.getRecord(),
            me = this;
        if (form.isValid()) {
            windowEl.mask('saving');
            centralPoint.set('city', XMLifeOperating.generic.Global.currentCity);
            form.updateRecord(centralPoint);
            if (centralPoint.get('id') != '' && centralPoint.get('id') != null) {
                // alert('功能在完善中');
                windowEl.unmask();
                editWindow.close();
                return;

            }
            centralPoint.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
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
    saveOrder: function() {
        var store = this.getShopAreaBannerStore();
        var len = store.getCount();
        var orderedIds = [];

        for (var i = 0; i < len; i++) {

            // orderedIds[i] = store.getAt(i).get('id');
            var orderStrArr = store.getAt(i).get('id').split('-');
            orderedIds[i] = orderStrArr[1];
        }
        console.log(this.centralPointId);
        var centralPointId = this.centralPointId;
        var params = {
            orders: orderedIds
        };
        var url = 'shopArea/banner/setorder/' + centralPointId;
        sendPutRequest(url, params, '保存顺序', '顺序已成功保存', '保存顺序失败');
    },
    saveEditCentralPointBannerWin: function() {

        var editWindow = this.getCentralPointConfigureBannerEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            centralPointBanner = form.getRecord(),
            me = this;
        //console.log(centralPointBanner.get());
        var areaId = this.centralPointId;
        centralPointBanner.set('area', areaId);
        console.log(this.centralPointId);
        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(centralPointBanner);
            if (centralPointBanner.get('id') != null && centralPointBanner.get('id') != '') {
                var url = 'shopArea/banner/' + centralPointBanner.get('id');
                sendPutRequest(url, {
                    areaId: centralPointBanner.get('area'),
                    title: centralPointBanner.get('title'),
                    url: centralPointBanner.get('url'),
                    image: centralPointBanner.get('image'),
                    oldUrl: centralPointBanner.get('oldUrl')
                }, '编辑banner', '成功编辑banner', '编辑banner失败', function() {

                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
                });
                return;
            }
            centralPointBanner.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
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
    }
});