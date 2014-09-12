Ext.define('XMLifeOperating.controller.Shop', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.shop.ShopList',
        'centralPointManage.shop.ShopAdd',
        'centralPointManage.shop.ShopBanner',
        'centralPointManage.shop.ShopBannerAdd',
        'centralPointManage.shop.ShopEdit',
        'centralPointManage.shop.ShopTab',
        'centralPointManage.shop.ShopShelf',
        'centralPointManage.shop.ShopShelfAdd',
        'centralPointManage.shop.ShopShelfTab',
        'centralPointManage.shop.ShopProduct',
        'centralPointManage.shop.ShopSecondShelf',
        'centralPointManage.shop.ShopSecondShelfAdd',
        'centralPointManage.shop.ShopProductAdd',
        'centralPointManage.shop.ShopProductEdit',
        'centralPointManage.shop.ShopBuyer'
    ],

    stores: [
        'Shop',
        'Shopper',
        'ShopBannerTemplate',
        'CategoryRoots',
        'Product',
        'CategorySubs',
        'ProductTemplate'
        // 'Buyer',
        // 'Shelves',
        // 'Template',
        // 'BuyerSearch'
    ],

    models: [
        'Shop',
        'Shopper',

        'ShopBannerTemplate',
        'CategoryRoots',
        'Product',
        'CategorySubs',
        'ProductTemplate'
        // 'Template',
        // 'Buyer',
        // 'Template',
        // 'ShopBannerTemplate',
        // 'BuyerSearch'
    ],
    /*
      @param selector  widget.XX
      @param ref       this.getXXX()
      @param xtype     类型
    */
    refs: [{
            ref: 'shopList',
            selector: 'shoplist',
            xtype: 'shoplist',
            autoCreate: true
        }, {
            ref: 'shopAdd',
            selector: 'shopadd',
            xtype: 'shopadd',
            autoCreate: true
        }, {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        }, {
            ref: 'shopBanner',
            selector: 'shopbanner',
            xtype: 'shopbanner',
            autoCreate: true
        }, {
            ref: 'shopBannerAdd',
            selector: 'shopbanneradd',
            xtype: 'shopbanneradd',
            autoCreate: true
        }, {
            ref: 'shopEdit',
            selector: 'shopedit',
            xtype: 'shopedit',
            autoCreate: true
        }, {
            ref: 'shopTab',
            selector: 'shoptab',
            xtype: 'shoptab',
            autoCreate: true
        }, {
            ref: 'shopShelfTab',
            selector: 'shopshelftab',
            xtype: 'shopshelftab',
            autoCreate: true
        }, {
            ref: 'shopShelfAdd',
            selector: 'shopshelfadd',
            xtype: 'shopshelfadd',
            autoCreate: true
        }, {

            ref: 'shopSecondShelfAdd',
            selector: 'shopsecondshelfadd',
            xtype: 'shopsecondshelfadd',
            autoCreate: true
        }, {
            ref: 'shopProductAdd',
            selector: 'shopproductadd',
            xtype: 'shopproductadd',
            autoCreate: true
        }, {
            ref: 'shopProductEdit',
            selector: 'shopproductedit',
            xtype: 'shopproductedit',
            autoCreate: true
        }, {
            ref: 'shopBuyer',
            selector: 'shopbuyer',
            xtype: 'shopbuyer',
            autoCreate: true
        }, {
            ref: 'keywordProductTemplate',
            selector: '#keywordProductTemplate',
        }, {
            ref: 'keywordBuyer',
            selector: '#keywordBuyer',
        }
        // {
        //     ref: 'editWindow',
        //     selector: 'editShopStore',
        //     xtype: 'editShopStore',
        //     autoCreate: true
        // }, {
        //     ref: 'keywordBuyer',
        //     selector: '#keywordBuyer',
        // }
    ],
    init: function() {
        var me = this,
            isSuccess = true;
        this.control({
            'shoplist #shopArea': {
                select: function(combo) {
                    var dstore = me.getShopStore();
                    dstore.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        areaId: combo.getValue()
                    }
                    dstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                    this.areaId = combo.getValue();
                }
            },
            /*
             *shoplist事件
             */
            'shoplist #add': {
                click: function() {
                    var cClass = this.getShopModel();
                    var shop = new cClass();
                    var win = this.getShopAdd();
                    win.down('#shopeditform').loadRecord(shop);
                    win.show();
                }
            },
            'shoplist #seeBannerBtn': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getShopBanner();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var record = view.getRecord(view.findTargetByEvent(e));
                    var shopStoreId = record.get('id');
                    var banners = record.get('banners');
                    var shopStoreBannerStore = this.getShopBannerTemplateStore();
                    shopStoreBannerStore.removeAll();
                    if (banners) {
                        for (var i = 0, length = banners.length; i < length; i++) {
                            shopStoreBannerStore.add(banners[i]);
                        }
                    };
                    content.add(tab);
                    this.shopId = shopStoreId;
                }
            },
            'shoplist #seeCategoryBtn': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var me = this;
                    var tab = this.getShopShelfTab();
                    tab.setActiveTab('tab2');
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var record = view.getRecord(view.findTargetByEvent(e));
                    var shopId = record.get('id');
                    me.showCategoryRootsList(shopId);
                    content.add(tab);
                    this.shopId = shopId;
                    this.tabIdStr = 'tab2_' + shopId;
                }
            },
            'shoplist #closeOrOpenShopStore': {
                click: function(grid, column, rowIndex) {
                    var me = this;
                    var record = grid.getStore().getAt(rowIndex);
                    var status = record.get('status');
                    var shopId = record.get('id');
                    var url = '';
                    var str = '确认要此操作吗？';
                    if (status == 0) {
                        url = 'shop/open';
                        str = '确认要开启该店铺吗？';
                    } else if (status == 1) {
                        url = 'shop/close';
                        str = '确认要关闭该店铺吗？';
                    }
                    Ext.MessageBox.confirm("选择框", str, function(str) {
                        if (str == 'no') {
                            return;
                        }
                        sendPutRequest(url, {
                            id: shopId
                        }, '店铺开启或关闭', '成功操作店铺', '操作店铺失败', function() {
                            me.showShopList();
                        });

                    });

                }
            },
            'shoplist #shopperCountId': {
                //弹出入住买手window
                click: function(grid, rowIndex, colIndex) {
                    var record = grid.getStore().getAt(colIndex);
                    var win = this.getShopBuyer();
                    win.down('form').loadRecord(record);
                    win.show();
                    var store = this.getShopperStore();
                    var storeCount = store.getCount();
                    store.removeAll();
                    store.getProxy().extraParams = {
                        shopId: record.get('id')
                    }
                    store.load({
                        callback: function(records) {
                            if ((records.length == 1) && (records[0].get('uid') == '')) {
                                store.remove(store.getAt(0));
                            }
                            //初始化打勾
                            var model = Ext.ComponentQuery.query('#bindShopWithShopper')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0; i < records.length; i++) {
                                var index = store.indexOfId(records[i].get('id'));
                                model.select(index, true);
                            }
                        }
                    });
                }
            },
            'shoplist #modifyShopList': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getShopEdit();
                    var record = view.getRecord(view.findTargetByEvent(e));
                    this.record = record;
                    var shopInfoForm = tab;
                    var form = shopInfoForm.down('form');
                    this.record.set('shopBannerTemplateId', this.record.get('templateName'));
                    var leftOpenTime = Math.floor(this.record.get('openTime') / 60) < 10 ? '0' + Math.floor(this.record.get('openTime') / 60) : Math.floor(this.record.get('openTime') / 60);
                    var rightOpenTime = this.record.get('openTime') % 60 < 10 ? '0' + this.record.get('openTime') % 60 : this.record.get('openTime') % 60;
                    var leftCloseTime = Math.floor(this.record.get('closeTime') / 60) < 10 ? '0' + Math.floor(this.record.get('closeTime') / 60) : Math.floor(this.record.get('closeTime') / 60);
                    var rightCloseTime = this.record.get('closeTime') % 60 < 10 ? '0' + this.record.get('closeTime') % 60 : this.record.get('closeTime') % 60;
                    var openTime = leftOpenTime + ':' + rightOpenTime;
                    var closeTime = leftCloseTime + ':' + rightCloseTime;
                    this.record.set('openTimeText', openTime);
                    this.record.set('closeTimeText', closeTime);
                    console.log(this.record)
                    form.loadRecord(this.record);
                    this.shopId = this.record.raw.id;
                    tab.show();
                }
            },
            //shopadd 事件
            'shopadd #save-shopStore-edit-btn': {
                click: function(button) {
                    var editWindow;
                    var itemId = button.getItemId();
                    editWindow = this.getShopAdd();
                    var windowEl = editWindow.getEl(),
                        form = editWindow.down('#shopeditform').getForm(),
                        shopStore = form.getRecord(),
                        me = this;
                    var jSting, wString;

                    if (form.isValid()) {
                        form.updateRecord(shopStore);
                        //经纬度检验
                        jString = shopStore.get('lng');
                        wString = shopStore.get('lat');
                        var pattern = /(\d{1,3}\.)\d{1,3}/;
                        if (pattern.test(jString) && pattern.test(wString)) {
                            if (jString > 180 || jString < 0) {
                                alert('经度错误');
                                return;
                            }
                            if (wString > 90 || wString < 0) {
                                alert('纬度错误');
                                return;
                            }
                        } else {
                            alert('经纬度格式错误');
                            return
                        }
                        //开始结束时间点检验
                        var openTime = shopStore.get('openTime').getHours() * 60 + shopStore.get('openTime').getMinutes();
                        var closeTime = shopStore.get('closeTime').getHours() * 60 + shopStore.get('closeTime').getMinutes();
                        if (openTime >= closeTime) {
                            alert('请确认结束时间晚于开始时间！');
                            return;
                        }
                        windowEl.mask('saving');
                        shopStore.set('city', XMLifeOperating.generic.Global.currentCity);
                        //var areaIds = [XMLifeOperating.generic.Global.SERVICECENEERID];
                        var areaIds = [this.areaId];
                        shopStore.set('areaIds', areaIds);
                        shopStore.set('beCopyedShopId', '123');
                        shopStore.set('autoOnline', false);
                        shopStore.set('openTime', (shopStore.get('openTime').getHours() * 60 + shopStore.get('openTime').getMinutes()));
                        shopStore.set('closeTime', (shopStore.get('closeTime').getHours() * 60 + shopStore.get('closeTime').getMinutes()));
                        shopStore.save({
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
                        });
                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            /*
             * shopbanner事件
             */
            'shopbanner #returnShopStore': {
                click: function() {
                    var me = this;
                    var tab = me.getShopList();
                    me.showShopList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'shopbanner #add': {
                click: function() {
                    var cClass = me.getShopBannerTemplateModel();
                    var ShopStoreBanner = new cClass();
                    var win = this.getShopBannerAdd();
                    win.down('form').loadRecord(ShopStoreBanner);
                    win.show();
                }
            },
            'shopbanner #editShopStoreBanner': {
                click: me.onShopStoreBannerEdit
            },
            'shopbanneradd #btnSave': {
                click: me.saveEditShopStoreBannerWin
            },
            'shopbanneradd filefield[name="shopStoreBannerUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },


            /*
             *Tab事件
             */
            '#shopStoreInfoTab': {
                tabchange: function(tabPanel, newCard, oldCard, eOpts) {
                    var me = this;
                    var tabIdStr = newCard.getItemId();
                    tabIdArray = tabIdStr.split('_');
                    var tabId = tabIdArray[0];
                    var sstore = this.getCategoryRootsStore();
                    var snstore = this.getCategorySubsStore();
                    var sgstore = this.getProductStore();
                    var shopId = this.shopId;
                    this.tabIdStr = tabIdStr;
                    switch (tabId) {
                        case 'tab1': //form
                            break;
                        case 'tab2': //collection一级货架
                            console.log('tab2 shopId:' + shopId);
                            me.showCategoryRootsList(this.shopId);

                            break;
                        case 'tab3': //次级货架
                            me.showCategorySubsList(this.shopId, tabIdArray[1]);

                            break;
                        case 'tab4':
                            //商品
                            me.showProductList(tabIdArray[1]);

                            break;
                    }
                }
            },
            /*
             * shopedit事件
             */
            'shopedit #modifyShopStoreInfo': {
                click: function(button) {
                    var editWindow;
                    var itemId = button.getItemId();
                    editWindow = this.getShopEdit();
                    var windowEl = editWindow.getEl(),
                        form = editWindow.down('#shopeditform').getForm(),
                        shopStore = form.getRecord(),
                        me = this;
                    var jStng, wString;
                    if (form.isValid()) {
                        form.updateRecord(shopStore);
                        jString = shopStore.get('lng');
                        wString = shopStore.get('lat');
                        var pattern = /(\d{1,3}\.)\d{1,3}/;
                        if (pattern.test(jString) && pattern.test(wString)) {
                            if (jString > 180 || jString < 0) {
                                alert('经度错误');
                                return;
                            }
                            if (wString > 90 || wString < 0) {
                                alert('纬度错误');
                                return;
                            }
                        } else {
                            alert('经纬度格式错误');
                            return
                        }
                        //开始结束时间点检验
                        var openTime = shopStore.get('openTimeText').getHours() * 60 + shopStore.get('openTimeText').getMinutes();
                        var closeTime = shopStore.get('closeTimeText').getHours() * 60 + shopStore.get('closeTimeText').getMinutes();
                        if (openTime >= closeTime) {
                            alert('请确认结束时间晚于开始时间！');
                            return;
                        }
                        windowEl.mask('saving');
                        shopStore.set('city', XMLifeOperating.generic.Global.currentCity);
                        //var areaIds = [XMLifeOperating.generic.Global.SERVICECENEERID];
                        var areaIds = [shopStore.get('areas')[0].areaId];
                        var templateId = this.getShopBannerTemplateStore().data.items.length ? this.getShopBannerTemplateStore().findRecord('id', shopStore.get('shopBannerTemplateId')).getId() : null;
                        //shopStore.set('templateName',templateName);
                        shopStore.set('areaIds', areaIds);
                        shopStore.set('beCopyedShopId', '123');
                        shopStore.set('autoOnline', false);
                        shopStore.set('openTime', openTime);
                        shopStore.set('closeTime', closeTime);

                        var requestparams = {
                            id: shopStore.get('id'),
                            name: shopStore.get('name'),
                            openTime: shopStore.get('openTime'),
                            closeTime: shopStore.get('closeTime'),
                            lng: shopStore.get('lng'),
                            lat: shopStore.get('lat'),
                            areaIds: areaIds,
                            address: shopStore.get('address'),
                            shopBannerTemplateId: templateId ? templateId : shopStore.get('templateId'),
                            city: XMLifeOperating.generic.Global.currentCity,
                            autoOnline: shopStore.get('autoOnline'),
                            desc: shopStore.get('desc')
                        };
                        var modifySuccessCallback = function(task, operation) {
                            windowEl.unmask();
                            editWindow.close();
                            me.showShopList();

                            me.getShopStore().load({
                                params: {
                                    city: XMLifeOperating.generic.Global.currentCity,
                                    areaId: me.areaId
                                }
                            });
                            //me.fireEvent('refreshView');
                        };
                        var modifyFailureCallback = function(task, operation) {

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
                        sendPutRequest('shop/update', requestparams, '编辑模板', '成功编辑模板', '编辑模板失败', modifySuccessCallback, modifyFailureCallback);
                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            'shopedit #returnShopBack': {
                click: function(record) {
                    var shopEditWin = this.getShopEdit();
                    var content = this.getContentPanel();
                    var form = shopEditWin.down('#shopeditform').getForm();
                    form.reset();
                    content.removeAll(false);
                    var tabShopStore = this.getShopList();
                    /*var sstore = this.getShopStore();*/
                    me.showShopList();
                    /*                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        }
                    });*/
                    /*                    sstore.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                    }
                    sstore.loadPage(1);*/
                    content.add(tabShopStore);
                }
            },
            /*
             * 一级货架(shopshelf)事件
             */
            'shopshelf,shopsecondshelf': {
                itemdblclick: function(grid, record, item, index, e, eOpts) {
                    var toolbar = Ext.getCmp('toolbar');
                    var tab = me.getShopShelfTab();
                    this.record = record;
                    for (var i = 0; i < toolbar.items.length; i++) {
                        if (toolbar.items.keys[i].split('_')[1] == record.get('id')) {
                            tab.setActiveTab(toolbar.items.keys[i])
                            return;
                        }
                    };
                    if (this.record.raw.leaf == true) {
                        Ext.MessageBox.confirm("选择框", "无次级货架,进入商品添加列表页面", function(str) {
                            if (str == 'no') {
                                return;
                            }
                            toolbar.add({
                                title: record.get('name'),
                                id: 'tab4_' + record.get('id'),
                                layout: 'fit',
                                items: {
                                    xtype: 'shopproduct'
                                },
                                closable: true
                            });
                            tab.setActiveTab('tab4_' + record.get('id'));
                        });
                        return;
                    } else {
                        toolbar.add({
                            title: record.get('name'),
                            id: 'tab3_' + record.get('id'),
                            layout: 'fit',
                            items: {
                                xtype: 'shopsecondshelf'
                            },
                            closable: true
                        });
                        tab.setActiveTab('tab3_' + record.get('id'));
                    }
                }
            },
            'shopbuyer #reseachBuyer': {
                click: function() {
                    var store = Ext.ComponentQuery.query('shopbuyer #searchBuyerId')[0].getStore();
                    store.getProxy().extraParams = {
                        nameOrPhone: me.getKeywordBuyer().getValue(),
                        isActive: true
                    }
                    store.load();
                }
            },
            'shopbuyer #save-bindShopWithShopper': {
                click: function() {
                    var me = this;
                    var editWindow = this.getShopBuyer(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        buyerStore = form.getRecord();
                    var selectModel = Ext.ComponentQuery.query('#searchBuyerId')[0].getSelectionModel();
                    var selectRecords = selectModel.getSelection();
                    var shopperIds = [];
                    selectRecords.forEach(function(item) {
                        if (item.get("id") != null) {
                            shopperIds.push(item.get("uid"));
                        }
                    });
                    var oldSelectModel = Ext.ComponentQuery.query('#bindShopWithShopper')[0].getSelectionModel();
                    var oldSelectRecords = oldSelectModel.getSelection();
                    oldSelectRecords.forEach(function(item) {
                        if (item.get("uid") != '') {
                            shopperIds.push(item.get("uid"));
                        }
                    });
                    var shopId = buyerStore.get('id');
                    var store = this.getShopStore();
                    sendPutRequest('shopper/bindToShop', {
                        shopId: shopId,
                        shopperIds: shopperIds
                    }, '买手绑定店铺', '成功绑定买手', '绑定买手失败', function() {
                        editWindow.close();
                        me.showShopList();
                        /*                        var dstore = me.getShopStore();
                        dstore.getProxy.extraParams = {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        }
                        dstore.loadPage(1);*/


                        /*  dstore.load({
                            params: {
                                city: XMLifeOperating.generic.Global.currentCity,
                                areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                            }
                        });*/
                    });

                }
            },
            '#openCreateShelvesWin,#openModifyShelvesWin': {
                click: function(component, rowIndex, colIndex) {
                    var itemId = component.getItemId();
                    var win = this.getShopShelfAdd();
                    var model;
                    if (itemId == 'openCreateShelvesWin') {
                        model = this.getCategoryRootsModel();
                        model = new model();
                    } else {
                        model = component.getStore().getAt(colIndex);
                    }
                    me.openWin(win, model);
                }
            },
            'shopshelfadd filefield[name="shopShelfxImageUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },
            'shopshelfadd filefield[name="shopShelfvImageUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },
            'shopshelfadd #addShelvesWin': { //添加或修改一级货架
                click: function() {
                    var editWindow = this.getShopShelfAdd(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shelves = form.getRecord(),
                        me = this;
                    var tabIdstrArray = this.tabIdStr.split('_');
                    var parentId = '',
                        parentIdStr = '';
                    if (tabIdstrArray[0] == 'tab3' && tabIdstrArray[1] != undefined) {
                        parentId = tabIdstrArray[1];
                    }
                    if (form.isValid()) {
                        form.updateRecord(shelves);
                        shopId = this.shopId;
                        //修改分类
                        if (shelves.get('id') != null && shelves.get('id') != '') {
                            sendPutRequest('category/update', {
                                id: shelves.get('id'),
                                name: shelves.get('name'),
                            }, '编辑分类', '成功编辑分类', '编辑分类失败', function() {
                                editWindow.close();
                                if (parentId == '') {
                                    me.showCategoryRootsList(shopId);
                                } else {
                                    me.showCategorySubsList(shopId, parentId);
                                }
                            });
                            return;
                        } else { //添加分类
                          
                            var shelvesName = Ext.getCmp('shelvesName').getValue();
                            var shelvesLeaf = Ext.getCmp('shelvesLeaf').getValue();
                            var xImage = Ext.getCmp('xImage').getValue();
                            var vImage = Ext.getCmp('vImage').getValue();
                            var jsonStr = {
                                shopId: shopId,
                                name: shelvesName,
                                leaf: shelvesLeaf,
                                xImage: xImage,
                                vImage: vImage
                            };
                            if (parentId != '') {
                                jsonStr["parentId"] = parentId;
                            }
                            sendRequest('category', jsonStr, '创建分类', '成功创建分类', '创建分类失败', function() {
                                editWindow.close();
                                if (parentId == '') {
                                    me.showCategoryRootsList(shopId);
                                } else {
                                    me.showCategorySubsList(shopId, parentId);
                                }

                            });
                        }

                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            /*
             * 一级货架(shopshelf)事件
             */
            '#openCreateSecondShelvesWin,#openModifySecondShelvesWin': {
                click: function(component, rowIndex, colIndex) {
                    var itemId = component.getItemId();
                    var win = this.getShopSecondShelfAdd();
                    var model;
                    if (itemId == 'openCreateShelvesWin') {
                        model = this.getCategorySubsModel();
                        model = new model();
                    } else {
                        model = component.getStore().getAt(colIndex);
                    }
                    me.openWin(win, model);
                }

            },
            /*             'shopsecondshelfadd #addShelvesWin': { //添加或修改二级货架
                click: function() {
                    var editWindow = this.getShopSecondShelfAdd(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shelves = form.getRecord(),
                        me = this;
                    var tabIdstrArray = this.tabIdStr.split('_');
                    var parentId = '',
                        parentIdStr = '';
                    if (tabIdstrArray[0] == 'tab3' && tabIdstrArray[1] != undefined) {
                        parentId = tabIdstrArray[1];
                    }
                    if (form.isValid()) {
                        form.updateRecord(shelves);
                        shopId = this.shopId;
                        //修改分类
                        if (shelves.get('id') != null && shelves.get('id') != '') {
                            sendPutRequest('category/update', {
                                id: shelves.get('id'),
                                name: shelves.get('name'),
                            }, '编辑分类', '成功编辑分类', '编辑分类失败', function() {
                                editWindow.close();
                                me.showCategorySubsList(shopId, parentId);
                            });
                            return;
                        } else { //添加分类
                            var shelvesName = Ext.getCmp('shelvesName').getValue();
                            var shelvesLeaf = Ext.getCmp('shelvesLeaf').getValue();
                            var jsonStr = {
                                shopId: shopId,
                                name: shelvesName,
                                leaf: shelvesLeaf
                            };
                            if (parentId != '') {
                                jsonStr["parentId"] = parentId;
                            }
                            sendRequest('category', jsonStr, '创建分类', '成功创建分类', '创建分类失败', function() {
                                editWindow.close();
                                me.showCategorySubsList(shopId, parentId);
                            });
                        }

                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }

            },*/
            /*
             * 商品事件
             */
            //上下架
            '#putawayOrOut,#frozen': {
                click: function(component, column, rowIndex, colIndex, e) {

                    var model = component.getStore().getAt(rowIndex);
                    var className = e.target.className;
                    var statusValue = Ext.query("." + className)[rowIndex].getAttribute("statusValue");
                    var url = 'product/' + statusValue;
                    var status;
                    console.log(statusValue)
                    //statusValue为点击事件后商品的状态
                    switch (statusValue) {
                        case 'soldout': //让商品下架（目前处于上架状态）
                            status = 3;
                            break;
                        case 'offline': //让商品雪藏（目前处于未雪藏）
                            status = 1;
                            break;
                        case 'online': //让商品上架（目前处于售罄状态）
                            status = 0;
                            break;
                    }
                    sendPutRequest(url, {
                        productId: model.get('id')
                    }, '', '成功创建分类', '创建分类失败', function() {
                        //me.fireEvent('refreshView');
                        model.set('status', status);
                    });
                }
            },
            '#openModifyShelvesGoodsWin': {
                click: function(component, rowIndex, colIndex) {
                    var itemId = component.getItemId();
                    var win = this.getShopProductEdit();
                    var model, form = win.down('form').getForm();
                    var name = '',
                        productTemplateId = '',
                        limitType = '',
                        limitCount = '';
                    form.reset();
                    model = component.getStore().getAt(colIndex);
                    limitType = model.get('limitType');
                    limitCount = model.get('limitCount');
                    name = model.get('name');
                    model.set('facePrice', (Math.abs(model.get('fprice') / 100)));
                    model.set('purchasePrice', (Math.abs(model.get('pprice') / 100)));
                    model.set('discountPrice', (Math.abs(model.get('dprice') / 100)));
                    model.set('name', name);
                    if (limitType == 1) {
                        model.set('dayLimitCount', limitCount);
                    } else if (limitType == 2) {
                        model.set('totalLimitCount', limitCount);
                    } else {
                        model.set('dayLimitCount', '');
                        model.set('totalLimitCount', '');
                    }

                    me.openWin(win, model);
                }
            },
            '#openCreateShelvesGoodsWin': {
                click: function(component, rowIndex, colIndex) {
                    var itemId = component.getItemId();
                    var win = this.getShopProductAdd();
                    var model, form = win.down('form').getForm();
                    var name = '',
                        productTemplateId = '',
                        limitType = '',
                        limitCount = '';
                    form.reset();

                    if (itemId == 'openCreateShelvesGoodsWin') {
                        model = this.getProductModel();
                        model = new model();
                    } else {
                        model = component.getStore().getAt(colIndex);
                        limitType = model.get('limitType');
                        limitCount = model.get('limitCount');
                        name = model.get('name');
                        model.set('facePrice', (Math.abs(model.get('fprice') / 100)));
                        model.set('purchasePrice', (Math.abs(model.get('pprice') / 100)));
                        model.set('discountPrice', (Math.abs(model.get('dprice') / 100)));
                        model.set('name', name);
                        if (limitType == 1) {
                            model.set('dayLimitCount', limitCount);
                        } else if (limitType == 2) {
                            model.set('totalLimitCount', limitCount);
                        } else {
                            model.set('dayLimitCount', '');
                            model.set('totalLimitCount', '');
                        }
                    }
                    me.openWin(win, model);
                }
            },
            '#addShelvesGoodsWin': {
                click: function() {
                    var editWindow = this.getShopProductAdd(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shelvesGoods = form.getRecord(),
                        me = this;
                    var tabIdstrArray = this.tabIdStr.split('_');
                    var categoryId = '',
                        limitType = 0,
                        limitCount = 0;

                    if (tabIdstrArray[0] == 'tab4' && tabIdstrArray[1] != undefined) {
                        categoryId = tabIdstrArray[1];
                    }
                    if (form.isValid()) {
                        form.updateRecord(shelvesGoods);
                        console.log(shelvesGoods);
                        shopId = this.shopId;
                        limitType = form.getValues()['limitType'];

                        if (limitType == 1) {
                            limitCount = form.getValues()['dayLimitCount'];
                        } else if (limitType == 2) {
                            limitCount = form.getValues()['totalLimitCount'];
                        } else {
                            limitType = 0;
                            limitCount = 0;
                        }
                        if (limitCount == 0 || limitCount == null || limitCount == '') {
                            limitType = 0;
                        }
                        var facePrice = Math.abs(parseInt(shelvesGoods.get('facePrice') * 100));
                        var discountPrice = shelvesGoods.get('discountPrice');
                        if (discountPrice != "") {
                            discountPrice = Math.abs(parseInt(shelvesGoods.get('discountPrice') * 100));
                            if (discountPrice >= facePrice) {
                                Ext.Msg.alert('Invalid Data', '折扣价不能大于等于原价');
                                return;
                            };
                        }
                        shelvesGoods.set('shopId', shopId);
                        shelvesGoods.set('categoryId', categoryId);
                        shelvesGoods.set('facePrice', (Math.abs(parseInt(shelvesGoods.get('facePrice') * 100))));
                        shelvesGoods.set('purchasePrice', (Math.abs(parseInt(shelvesGoods.get('purchasePrice') * 100))));
                        shelvesGoods.set('discountPrice', discountPrice);
                        shelvesGoods.set('limitType', limitType);
                        shelvesGoods.set('limitCount', limitCount);
                        console.log("try saving");
                        windowEl.mask('saving');
                        if (shelvesGoods.get('id') != null) {
                            console.log('编辑');
                            var id = shelvesGoods.get('id');
                            var facePrice = Math.abs(parseInt(shelvesGoods.get('facePrice')));
                            var purchasePrice = Math.abs(parseInt(shelvesGoods.get('purchasePrice')));
                            var discountPrice = Math.abs(parseInt(shelvesGoods.get('discountPrice')));
                            sendPutRequest('product/update', {
                                id: id,
                                facePrice: facePrice,
                                purchasePrice: purchasePrice,
                                discountPrice: discountPrice,
                                limitType: limitType,
                                limitCount: limitCount
                            }, '编辑商品', '成功编辑商品', '编辑商品失败', function() {
                                windowEl.unmask();
                                editWindow.close();
                                me.showProductList(categoryId);
                            });
                            return;
                        } else {
                            var selectModel = Ext.ComponentQuery.query('#productTemplateId')[0].getSelectionModel();
                            var selectRecords = selectModel.getSelection();
                            if (selectRecords[0] == null) {
                                Ext.Msg.alert('添加商品失败', '请选择添加商品模板');
                                windowEl.unmask();
                                return;
                            }
                            shelvesGoods.set('productTemplateId', selectRecords[0].raw.id);
                            console.log(categoryId);
                            shelvesGoods.save({
                                success: function(task, operation) {
                                    windowEl.unmask();
                                    editWindow.close();
                                    me.showProductList(categoryId);
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
                            });
                        }
                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            '#editShelvesGoodsWin': {
                click: function() {
                    var editWindow = this.getShopProductEdit(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        shelvesGoods = form.getRecord(),
                        me = this;
                    var tabIdstrArray = this.tabIdStr.split('_');
                    var categoryId = '',
                        limitType = 0,
                        limitCount = 0;
                    if (tabIdstrArray[0] == 'tab4' && tabIdstrArray[1] != undefined) {
                        categoryId = tabIdstrArray[1];
                    }
                    if (form.isValid()) {
                        form.updateRecord(shelvesGoods);
                        console.log(shelvesGoods);
                        shopId = this.shopId;
                        limitType = form.getValues()['limitType'];
                        if (limitType == 1) {
                            limitCount = form.getValues()['dayLimitCount'];
                        } else if (limitType == 2) {
                            limitCount = form.getValues()['totalLimitCount'];
                        } else {
                            limitType = 0;
                            limitCount = 0;
                        }
                        if (limitCount == 0 || limitCount == null || limitCount == '') {
                            limitType = 0;
                        }
                        var facePrice = Math.abs(parseInt(shelvesGoods.get('facePrice') * 100));
                        var discountPrice = Math.abs(parseInt(shelvesGoods.get('discountPrice') * 100));
                        if (discountPrice >= facePrice) {
                            Ext.Msg.alert('Invalid Data', '折扣价不能大于等于原价');
                            return;
                        };
                        shelvesGoods.set('shopId', shopId);
                        shelvesGoods.set('categoryId', categoryId);
                        shelvesGoods.set('facePrice', (Math.abs(parseInt(shelvesGoods.get('facePrice') * 100))));
                        shelvesGoods.set('purchasePrice', (Math.abs(parseInt(shelvesGoods.get('purchasePrice') * 100))));
                        shelvesGoods.set('discountPrice', (Math.abs(parseInt(shelvesGoods.get('discountPrice') * 100))));
                        shelvesGoods.set('limitType', limitType);
                        shelvesGoods.set('limitCount', limitCount);
                        console.log("try saving");
                        windowEl.mask('saving');
                        if (shelvesGoods.get('id') != null) {
                            console.log('编辑');
                            var id = shelvesGoods.get('id');
                            var facePrice = Math.abs(parseInt(shelvesGoods.get('facePrice')));
                            var purchasePrice = Math.abs(parseInt(shelvesGoods.get('purchasePrice')));
                            var discountPrice = Math.abs(parseInt(shelvesGoods.get('discountPrice')));
                            sendPutRequest('product/update', {
                                id: id,
                                facePrice: facePrice,
                                purchasePrice: purchasePrice,
                                discountPrice: discountPrice,
                                limitType: limitType,
                                limitCount: limitCount
                            }, '编辑商品', '成功编辑商品', '编辑商品失败', function() {
                                windowEl.unmask();
                                editWindow.close();
                                me.showProductList(categoryId);
                            });
                            return;
                        } else {
                            var selectModel = Ext.ComponentQuery.query('#productTemplateId')[0].getSelectionModel();
                            var selectRecords = selectModel.getSelection();
                            if (selectRecords[0] == null) {
                                Ext.Msg.alert('添加商品失败', '请选择添加商品模板');
                                windowEl.unmask();
                                return;
                            }
                            shelvesGoods.set('productTemplateId', selectRecords[0].raw.id);
                            console.log(categoryId);
                            shelvesGoods.save({
                                success: function(task, operation) {
                                    windowEl.unmask();
                                    editWindow.close();
                                    me.showProductList(categoryId);
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
                            });
                        }
                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            '#reseachProductTemplate': {
                click: function() {
                    var store = me.getProductTemplateStore();
                    store.load({
                        params: {
                            keyword: me.getKeywordProductTemplate().getValue()
                        }
                    });
                }
            }
        });
        Ext.QuickTips.init();
    },
    showShopList: function() {
        var dstore = this.getShopStore();
        dstore.getProxy().extraParams = {
            city: XMLifeOperating.generic.Global.currentCity,
            //areaId: XMLifeOperating.generic.Global.SERVICECENEERID
            areaId: this.areaId
        }
        dstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    showCategoryRootsList: function(shopId) {
        var shopShelfStore = this.getCategoryRootsStore();
        shopShelfStore.removeAll();
        shopShelfStore.getProxy().extraParams = {
            shopId: shopId
        }
        shopShelfStore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    showCategorySubsList: function(shopId, parentId) {
        var snstore = this.getCategorySubsStore();
        snstore.getProxy().extraParams = {
            shopId: shopId,
            parentId: parentId
        }
        snstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    showProductList: function(categoryId) {
        var sgstore = this.getProductStore();
        sgstore.getProxy().extraParams = {
            categoryId: categoryId
        }
        sgstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    openWin: function(win, model, callback) {
        //打开窗口
        var form = win.down('form');
        form.loadRecord(model);
        if (callback) {
            callback();
        };
        win.show();
    },
    onShopStoreBannerEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var ShopStoreBanner = view.getRecord(view.findTargetByEvent(e));
        console.log(ShopStoreBanner);
        var win = this.getShopBannerAdd();
        win.down('form').loadRecord(ShopStoreBanner);
        win.show();
    },
    saveEditShopStoreBannerWin: function() {
        var editWindow = this.getShopBannerAdd(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            me = this;
        var inputs = form.updateRecord().getRecord().data;
        var data = {
            id: null,
            bannerIds: [],
            bannerUrls: [],
            titles: []
        }
        var allbaners = this.getShopBannerTemplateStore().data.items;
        var hash = inputs.image;
        console.log(hash);
        this.getShopBannerTemplateStore().each(function(e) {
            data.bannerIds.push(e.getId());
            data.bannerUrls.push(e.data.url);
            data.titles.push(e.data.title);
        });
        data.id = me.shopId;
        data.bannerIds.push(hash);
        data.bannerUrls.push(inputs.url);
        data.titles.push(inputs.title);
        if (form.isValid()) {
            var success = function(task, operation) {
                windowEl.unmask();
                editWindow.close();
                me.fireEvent('refreshView');
            };
            var failure = function(task, operation) {
                var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
                Ext.MessageBox.show({
                    title: 'Edit Task Failed',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
            };
            sendPutRequest('shop/updatebanners', data, '添加Banner模板', '添加Banner模板成功', '添加Banner模板失败', success, failure);
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },

});

function putawayOrOut(obj) {
    console.log($(obj));
}