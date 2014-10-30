Ext.define('XMLifeOperating.controller.ShopTopShops', {
    extend: 'Ext.app.Controller',
    views: [
        'centralPointManage.shopTopShops.ShopTopShopsList',
        'centralPointManage.shopTopShops.ShopTopShopsEdit',
        'centralPointManage.shopTopShops.CentralPointConfigureBannerList',
        'centralPointManage.shopTopShops.CentralPointConfigureBannerEdit',
        'centralPointManage.shopTopShops.ShopShopGroupList',
        'centralPointManage.shopTopShops.ShopShopGroupEdit',
    ],
    stores: [
        'ShopTopShops',
        'ShopTopShopsAdd',
        'ShopArea',
        'ShopAreaBanner',
        'ShopShopGroup',
        'ShopShopGroupAdd'
    ],
    models: [
        'ShopTopShops',
        'ShopTopShopsAdd',
        'ShopArea',
        'ShopAreaBanner',
        'ShopShopGroup',
        'ShopShopGroupAdd'
    ],
    refs:[{
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel',
            autoCreate:true,
        },{
            ref:'shopTopShopsEdit',
            selector: 'shopTopShopsEdit',
            xtype: 'shopTopShopsEdit',
            autoCreate:true,
        },{
            ref: 'shopTopShopsList',
            selector: 'shopTopShopsList',
            xtype: 'shopTopShopsList',
            autoCreate: true
        },{
            ref: 'centralPointConfigureBannerList',
            selector: 'centralpointconfigurebannerlist',
            xtype: 'centralpointconfigurebannerlist',
            autoCreate: true
        },{
            ref: 'centralPointConfigureBannerEdit',
            selector: 'centralpointconfigurebanneredit',
            xtype: 'centralpointconfigurebanneredit',
            autoCreate: true
        },{
            ref: 'shopShopGroupList',
            selector: 'shopShopGroupList',
            xtype: 'shopShopGroupList',
            autoCreate: true
        },{
            ref: 'shopShopGroupEdit',
            selector: 'shopShopGroupEdit',
            xtype: 'shopShopGroupEdit',
            autoCreate: true
        }],
    init: function() {
        var me = this;
        this.control({
            /*'shopTopShopsList': {
                added: me.onShow,
            },*/
             'shopTopShopsList #shopArea': 
            {
                select: function(combo) {


                    var lstore = this.getShopTopShopsStore();
                    lstore.load({
                        params: {
                            areaId: combo.getValue()
                        }
                    });
                    this.areaId = combo.getValue();
                },
            },
            'shopTopShopsList #topshopsAdd':{
                click: function() {
                    var cClass = this.getShopTopShopsModel();
                    var shopTopShops = new cClass();
                    var win = this.getShopTopShopsEdit();
                    win.down('form').loadRecord(shopTopShops);
                    win.show();

                    var store = this.getShopTopShopsAddStore();
                    store.load({
                        params: {
                            areaId: me.areaId
                        },
                        callback: function(records) {
                            /*if ((records.length == 1) && (records[0].get('uid') == '')) {
                                store.remove(store.getAt(0));
                            }
                            //初始化打勾
                            var model = Ext.ComponentQuery.query('#bindShopWithShopper')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0; i < records.length; i++) {
                                var index = store.indexOfId(records[i].get('id'));
                                model.select(index, true);
                            }*/
                        }
                    });
                }
            },
            'shopTopShopsEdit #save-shopTopShops-edit-btn':{
                click:function(){
                    var me = this;
                    var editWindow = this.getShopTopShopsEdit(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shopTopShopsStore = form.getRecord();
                    var selectModel = Ext.ComponentQuery.query('#shopTopShopsAddId')[0].getSelectionModel();
                    var selectRecords = selectModel.getSelection();
                    if (form.isValid()) {
                        form.updateRecord(shopTopShopsStore);
                        var areaId = me.areaId;
                        var type = shopTopShopsStore.get('type');

                        var shopId = selectRecords[0].get('id');
                        var params = {
                            areaId:areaId,
                            type:type,
                            shopId:shopId
                        }
                        sendRequest('shop/topshops/store',params, '编辑店铺', '成功编辑店铺', '编辑店铺失败', function() {
                            windowEl.unmask();
                            editWindow.close();
                            var lstore = me.getShopTopShopsStore();
                            lstore.load({
                                params: {
                                    areaId: areaId
                                }
                            });
                        });
                    }
                }
            },
            'shopTopShopsList #deleteShopTopShopsId': {
                click: me.onDeleteShopTopShops
            },
            'shopTopShopsList #seeBannerBtn': {
                click: function() {
                    
                    var tab = this.getCentralPointConfigureBannerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var centralPointId = me.areaId;
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
            'centralpointconfigurebannerlist #returnCentralPoint,shopShopGroupList #returnCentralPoint': {
                click: function() {
                    var tab = me.getShopTopShopsList();
                    var lstore = me.getShopTopShopsStore();
                    lstore.load({
                        params: {
                            areaId: me.areaId
                        }
                    });
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'shopTopShopsList #seeShopShopGroupBtn':{
                click:function(){
                    var tab = this.getShopShopGroupList();
                    var lstore = me.getShopShopGroupStore();
                    lstore.load({
                        params: {
                            areaId: me.areaId
                        }
                    });
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                    /*var tab = this.getShopShopGroupList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var url='shop/shopgroup';
                    content.add(tab);*/
                    //this.centralPointId = centralPointId;
                }

            },
            'shopShopGroupList #add': {
                click: function() {

                    var len = this.getShopShopGroupStore().getCount();

                    if (len >= 6) {
                        Ext.MessageBox.show({
                            title: '无法添加Banner',
                            msg: '店铺数量已经达到上限',
                            icon: Ext.Msg.INFO,
                            buttons: Ext.Msg.OK
                        });
                        return;
                    }
                    var store = this.getShopShopGroupAddStore();
                    store.load({
                        params: {
                            areaId: me.areaId
                        },
                    });

                    var cClass = me.getShopShopGroupAddModel();
                    var ShopShopGroupAdd = new cClass();
                    var win = this.getShopShopGroupEdit();
                    win.down('form').loadRecord(ShopShopGroupAdd);
                    win.show();
                }
            },
            'shopShopGroupEdit #save-shopShopGroup-edit-btn': {
                click:function(){
                    var editWindow = this.getShopShopGroupEdit(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shopShopGroup = form.getRecord();
                    var selectModel = Ext.ComponentQuery.query('#ShopShopGroupAddId')[0].getSelectionModel();
                    var selectRecords = selectModel.getSelection();
                    var shopId = '';
                    selectRecords.forEach(function(item) {
                        if (item.get("id") != null) {
                            shopId += item.get('id')+'|';
                        }
                    });
                    
                    var s=shopId;
                    shopId=s.substring(0,s.length-1);

                    var url = 'shop/shopgroup/store';
                    sendRequest(url, {
                        areaId: me.areaId,
                        name: 'name',
                        shopId:shopId
                    }, '编辑banner', '成功编辑banner', '编辑banner失败', function() {

                        windowEl.unmask();
                        editWindow.close();
                        var shopShopGroupStore = me.getShopShopGroupStore();
                        shopShopGroupStore.load({
                            params: {
                                areaId: me.areaId
                            }
                        });
                    });
                    
                }
            },
            'shopShopGroupList #shopShopGroupDelete': {
                click:me.onShopShopGroupDelete
            },
            'shopShopGroupList #saveOrder':{
                click:me.saveShopGroupOrder
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
            'centralpointconfigurebannerlist #saveOrder': {
                click: me.saveOrder
            },
            'centralpointconfigurebannerlist #editCentralPointBanner': {
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
            },
            'centralpointconfigurebannerlist #deleteBannerId':{
                click: me.onDeleteBanner
            }
        });
    },

    onShow: function() {
        /*var store = this.getShopTopShopsStore();
        store.load({
            params: {
                areaId:1
            }
        });*/
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {

        var centralPoint = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        win.down('form').loadRecord(centralPoint);
        win.show();
    },
    onCentralPointBannerEdit: function(view, rowIndex, colIndex, column, e) {

        var centralPointBanner = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCentralPointConfigureBannerEdit();
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
        var me=this;
        for (var i = 0; i < len; i++) {

            // orderedIds[i] = store.getAt(i).get('id');
            var orderStrArr = store.getAt(i).get('id').split('-');
            orderedIds[i] = orderStrArr[1];
        }

        var centralPointId = this.centralPointId;
        var params = {
            orders: orderedIds
        };
        var url = 'shopArea/banner/setorder/' + centralPointId;
        sendPutRequest(url, params, '保存顺序', '顺序已成功保存', '保存顺序失败',function(){
            var centralPointBannerStroe = me.getShopAreaBannerStore();
            centralPointBannerStroe.load({
                params: {
                    area: centralPointId
                }
            });
        });
    },
    saveEditCentralPointBannerWin: function() {
        var editWindow = this.getCentralPointConfigureBannerEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            centralPointBanner = form.getRecord(),
            me = this;

        var areaId = this.centralPointId;
        centralPointBanner.set('area', areaId);
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
                    order:centralPointBanner.get('order')
                }, '编辑banner', '成功编辑banner', '编辑banner失败', function() {

                    windowEl.unmask();
                    editWindow.close();
                    var centralPointBannerStroe = me.getShopAreaBannerStore();
                    centralPointBannerStroe.load({
                        params: {
                            area: areaId
                        }
                    });
                });
                return;
            }
            centralPointBanner.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    //me.fireEvent('refreshView');
                    var centralPointBannerStroe = me.getShopAreaBannerStore();
                    centralPointBannerStroe.load({
                        params: {
                            area: areaId
                        }
                    });
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
    onDeleteBanner: function(view, rowIndex, colIndex, column, e) {
        var banner = view.getRecord(view.findTargetByEvent(e));
        var areaId = this.centralPointId;
        me=this;

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定删除banner '{0}' 吗？", banner.get('title')),
            function(result) {
                if (result == 'yes') {
                    var order = banner.get('order');
                    
                    var url='shopArea/banner/'+order;

                    sendDeleteRequest(url, {areaId:areaId}, '删除线路', '成功删除线路', '删除线路失败', function(response) {

                            if(response.responseText=='-2'){
                                Ext.Msg.alert('Invalid Data', '不能删除');
                                return;
                            }
                            var centralPointBannerStroe = me.getShopAreaBannerStore();
                            centralPointBannerStroe.load({
                                params: {
                                    area: areaId
                                }
                            });

                    });
                }
            }
        );
    },
    onDeleteShopTopShops:function(view, rowIndex, colIndex, column, e) {
        var shopTopShops = view.getRecord(view.findTargetByEvent(e));
        var areaId = this.areaId;
        var me = this;
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定删除 '{0}' 吗？", shopTopShops.get('shopName')),
            function(result) {
                if (result == 'yes') {
                    var id = shopTopShops.get('id');

                    var url = 'shop/topshops/'+id;
                    sendDeleteRequest(url, {areaId:areaId}, '删除展示店铺', '成功删除展示店铺', '删除展示店铺失败', function(response) {

                            if(response.responseText=='-2'){
                                Ext.Msg.alert('Invalid Data', '不能删除');
                                return;
                            }
                            var shopTopShopsStore = me.getShopTopShopsStore();
                            shopTopShopsStore.load({
                                params: {
                                    areaId: areaId
                                }
                            });

                    });
                }
            }
        );
    },
    /*onShopShopGroupDelete:function(view, rowIndex, colIndex, column, e) {
        var shopShopGroup = view.getRecord(view.findTargetByEvent(e));
        var areaId = this.areaId;
        var me = this;
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定删除 '{0}' 吗？", "优质商铺"),
            function(result) {
                if (result == 'yes') {
                    var id = shopShopGroup.get('shopGroupId');
                    var url = 'shop/shopgroup/'+id;
                    sendDeleteRequest(url, {areaId:areaId}, '删除展示店铺', '成功删除展示店铺', '删除展示店铺失败', function(response) {

                            if(response.responseText=='-2'){
                                Ext.Msg.alert('Invalid Data', '不能删除');
                                return;
                            }
                            var store = me.getShopShopGroupStore();
                            store.load({
                                params: {
                                    areaId: me.areaId
                                },
                            });

                    });
                }
            }
        );
    },*/
    onShopShopGroupDelete:function(view, rowIndex, colIndex, column, e) {
        var shopShopGroup = view.getRecord(view.findTargetByEvent(e));
        var areaId = this.areaId;
        var me = this;
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定删除 '{0}' 吗？", "优质商铺"),
            function(result) {
                if (result == 'yes') {
                    var shopId = shopShopGroup.get('id');
                    var url = 'shop/shopgroup/delete';
                    sendRequest(url, {areaId:areaId,shopId:shopId}, '删除展示店铺', '成功删除展示店铺', '删除展示店铺失败', function(response) {

                            if(response.responseText=='-2'){
                                Ext.Msg.alert('Invalid Data', '不能删除');
                                return;
                            }
                            var store = me.getShopShopGroupStore();
                            store.load({
                                params: {
                                    areaId: me.areaId
                                },
                            });

                    });
                }
            }
        );
    },
    saveShopGroupOrder: function() {
        var store = this.getShopShopGroupStore();
        var len = store.getCount();
        var orderedIds = [];
        var me=this;
        var shopId = '';
        for (var i = 0; i < len; i++) {
            shopId += store.getAt(i).get('id') + '|';
        }
                    
        var s=shopId;
        shopId=s.substring(0,s.length-1); 
        var areaId = this.areaId;
        var params = {
            areaId: areaId,
            shopId:shopId
        };
        var url = 'shop/shopgroup/order';
        sendRequest(url, params, '保存顺序', '顺序已成功保存', '保存顺序失败',function(){
            var shopShopGroupStore = me.getShopShopGroupStore();
            shopShopGroupStore.load({
                params: {
                    areaId: areaId
                }
            });
        });      
    },
});