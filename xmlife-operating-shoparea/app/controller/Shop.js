Ext.define('XMLifeOperating.controller.Shop', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.shop.ShopList',
        'centralPointManage.shop.ShopEdit',
        'centralPointManage.shop.ShopBanner',
        'centralPointManage.shop.ShopBannerAdd',
        'centralPointManage.shop.ShopInfo',
        'centralPointManage.shop.ShopTab',
        'centralPointManage.shop.ShopShelf',
        'centralPointManage.shop.ShopShelfAdd',
        'centralPointManage.shop.ShopShelfTab',
        'centralPointManage.shop.ShopProduct',
        'centralPointManage.shop.ShopSecondShelf',
        'centralPointManage.shop.ShopProductAdd',
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
            ref: 'shopEdit',
            selector: 'shopedit',
            xtype: 'shopedit',
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
            ref: 'shopInfo',
            selector: 'shopinfo',
            xtype: 'shopinfo',
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
            ref: 'shopProductAdd',
            selector: 'shopproductadd',
            xtype: 'shopproductadd',
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
            /*
             *shoplist事件
             */
            'shoplist': {
                added: function() {
                    var dstore = me.getShopStore();
                    dstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        }
                    });
                },
                itemdblclick: function(grid, record, item, index, e, eOpts) {
                    //替换成shopStoreinfo的面板
                    var tab = this.getShopInfo();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    this.record = record;
                    var shopInfoForm = tab;
                    /* tab.setActiveTab('tab1');
                    var shopInfoForm = tab.getActiveTab();
                    if (shopInfoForm.getItemId() == 'tab1') {*/
                    var form = shopInfoForm.getForm();
                    record.set('shopBannerTemplateId', record.get('templateId'));
                    var leftOpenTime = Math.floor(record.get('openTime') / 60) < 10 ? '0' + Math.floor(record.get('openTime') / 60) : Math.floor(record.get('openTime') / 60);
                    var rightOpenTime = record.get('openTime') % 60 < 10 ? '0' + record.get('openTime') % 60 : record.get('openTime') % 60;
                    var leftCloseTime = Math.floor(record.get('closeTime') / 60) < 10 ? '0' + Math.floor(record.get('closeTime') / 60) : Math.floor(record.get('closeTime') / 60);
                    var rightCloseTime = record.get('closeTime') % 60 < 10 ? '0' + record.get('closeTime') % 60 : record.get('closeTime') % 60;
                    var openTime = leftOpenTime + ':' + rightOpenTime;
                    var closeTime = leftCloseTime + ':' + rightCloseTime;
                    record.set('openTime', openTime);
                    record.set('closeTime', closeTime);
                    form.loadRecord(record);
                    this.shopId = this.record.raw.id;
                    content.add(tab);
                }
            },
            'shoplist #add': {
                click: function() {
                    var cClass = this.getShopModel();
                    var shop = new cClass();
                    var win = this.getShopEdit();
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
                    var tab = this.getShopShelfTab();
                    tab.setActiveTab('tab2');
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var record = view.getRecord(view.findTargetByEvent(e));
                    var shopId = record.get('id');
                    var shopShelfStore = this.getCategoryRootsStore();
                    shopShelfStore.removeAll();
                    shopShelfStore.load({
                        params: {
                            shopId: shopId
                        }
                    });
                    content.add(tab);
                    this.shopId = shopId;
                    this.tabIdStr = 'tab2_' + shopId;
                }
            },
            'shoplist #closeOrOpenShopStore': {
                click: function(grid, column, rowIndex) {
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
                            var dstore = me.getShopStore();
                            dstore.load({
                                params: {
                                    city: XMLifeOperating.generic.Global.currentCity,
                                    areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                                }
                            });
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
                    store.load({
                        params: {
                            shopId: record.get('id')
                        },
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
            /*
             * shopbanner事件
             */
            'shopbanner #returnShopStore': {
                click: function() {
                    var tab = me.getShopList();
                    var store = me.getShopStore();
                    store.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        }
                    });
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
             * shopedit事件
             */
            'shopedit #save-shopStore-edit-btn,#modifyShopStoreInfo': {
                click: function(button) {
                    var editWindow;
                    var itemId = button.getItemId();
                    if (itemId == 'save-shopStore-edit-btn') {
                        editWindow = this.getShopEdit();
                    } else {
                        editWindow = this.getShopInfo();
                    }
                    var windowEl = editWindow.getEl(),
                        form = editWindow.getForm(),
                        shopStore = form.getRecord(),
                        me = this;
                    if (form.isValid()) {
                        //windowEl.mask('saving');
                        form.updateRecord(shopStore);
                        shopStore.set('city', XMLifeOperating.generic.Global.currentCity);
                        var areaIds = [XMLifeOperating.generic.Global.SERVICECENEERID];
                        shopStore.set('areaIds', areaIds);
                        shopStore.set('beCopyedShopId', '123');
                        shopStore.set('autoOnline', false);
                        shopStore.set('openTime', (shopStore.get('openTime').getHours() * 60 + shopStore.get('openTime').getMinutes()));
                        shopStore.set('closeTime', (shopStore.get('closeTime').getHours() * 60 + shopStore.get('closeTime').getMinutes()));
                        /*   if (shopStore.get('id') != null && shopStore.get('id') != '') {
                            sendPutRequest('shop/update', {
                                    id: shopStore.get('id'),
                                    name: shopStore.get('name'),
                                    openTime: shopStore.get('openTime'),
                                    closeTime: shopStore.get('closeTime'),
                                    lng: shopStore.get('lng'),
                                    lat: shopStore.get('lat'),
                                    areaIds: areaIds,
                                    address: shopStore.get('address'),
                                    shopBannerTemplateId: shopStore.get('shopBannerTemplateId'),
                                    city: XMLifeOperating.generic.Global.currentCity,
                                    autoOnline: shopStore.get('autoOnline'),
                                    desc: shopStore.get('desc'),
                                },
                                '编辑模板', '成功编辑模板', '编辑模板失败',
                                function() {
                                    windowEl.unmask();
                                    editWindow.close();
                                    var sstore = me.getShopStore();
                                    sstore.load({
                                        params: {
                                            city: XMLifeOperating.generic.Global.currentCity,
                                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                                        }
                                    });
                                    me.fireEvent('refreshView');
                                });
                            return;
                        } else {*/
                        // var data = {
                        //     name: shopStore.get('name'),
                        //     openTime: shopStore.get('openTime'),
                        //     closeTime: shopStore.get('closeTime'),
                        //     lng: shopStore.get('lng'),
                        //     lat: shopStore.get('lat'),
                        //     areaIds: areaIds,
                        //     address: shopStore.get('address'),
                        //     shopBannerTemplateId: shopStore.get('shopBannerTemplateId'),
                        //     city: XMLifeOperating.generic.Global.currentCity,
                        //     autoOnline: shopStore.get('autoOnline'),
                        //     beCopyedShopId: shopStore.get('beCopyedShopId'),
                        //     desc: shopStore.get('desc'),
                        // }
                        // sendRequest('shop',$.param(data), '创建店铺', '创建店铺成功', '创建店铺失败', function() {
                        //     windowEl.unmask();
                        //     editWindow.close();
                        //     var sstore = me.getShopStore();
                        //     sstore.load({
                        //         params: {
                        //             city: XMLifeOperating.generic.Global.currentCity,
                        //             areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        //         }
                        //     });
                        //     me.fireEvent('refreshView');
                        // })

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
                        //}

                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },
            /*
             * shopeinfo事件
             */
            'shopinfo #returnShopBack': {
                click: function(record) {
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var tabShopStore = this.getShopList();
                    var sstore = this.getShopStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                        }
                    });
                    content.add(tabShopStore);
                }
            },
            /*
             * shopshelf事件
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
            '#shopStoreInfoTab': {
                tabchange: function(tabPanel, newCard, oldCard, eOpts) {
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
                            sstore.load({
                                params: {
                                    shopId: this.shopId
                                }
                            });
                            break;
                        case 'tab3': //次级货架
                            snstore.load({
                                params: {
                                    shopId: this.shopId,
                                    parentId: tabIdArray[1]
                                }
                            });
                            break;
                        case 'tab4':
                            //商品
                            sgstore.load({
                                params: {
                                    categoryId: tabIdArray[1]
                                }
                            });
                            break;
                    }
                }
            },
            'shopbuyer #reseachBuyer': {
                click: function() {
                    var store = Ext.ComponentQuery.query('shopbuyer #searchBuyerId')[0].getStore();
                    store.load({
                        params: {
                            nameOrPhone: me.getKeywordBuyer().getValue(),
                            isActive: true
                        }
                    });
                }
            },
            'shopbuyer #save-bindShopWithShopper': {
                click: function() {

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
                        var dstore = me.getShopStore();
                        dstore.load({
                            params: {
                                city: XMLifeOperating.generic.Global.currentCity,
                                areaId: XMLifeOperating.generic.Global.SERVICECENEERID
                            }
                        });
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
            'shopshelfadd #addShelvesWin': { //保存添加货架
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
                        if (shelves.get('id') != null && shelves.get('id') != '') {
                            sendPutRequest('category/update', {
                                id: shelves.get('id'),
                                name: shelves.get('name'),
                            }, '编辑分类', '成功编辑分类', '编辑分类失败', function() {
                                editWindow.close();
                                if (parentId == '') {
                                    me.getCategoryRootsStore().load({
                                        params: {
                                            shopId: shopId
                                        }
                                    });
                                } else {
                                    me.getCategorySubsStore().load({
                                        params: {
                                            shopId: shopId,
                                            parentId: parentId
                                        }
                                    });
                                }
                            });
                            return;
                        }
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
                            if (parentId == '') {
                                me.getCategoryRootsStore().load({
                                    params: {
                                        shopId: shopId,
                                    }
                                });
                            } else {
                                me.getCategorySubsStore().load({
                                    params: {
                                        shopId: shopId,
                                        parentId: parentId
                                    }
                                });
                            }

                        });
                    } else {
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors');
                    }
                }
            },

            //上下架
            '#putawayOrOut,#frozen': {
                click: function(component, column, rowIndex, colIndex, e) {
                    var model = component.getStore().getAt(rowIndex);
                    var className = e.target.className;
                    var statusValue = Ext.query("." + className)[rowIndex].getAttribute("statusValue");
                    var url = 'product/' + statusValue;
                    var status;
                    switch (statusValue) {
                        case 'online':
                            status = 0;
                            break;
                        case 'offline':
                            status = 1;
                            break;
                        case 'soldout':
                            status = 3;
                            break;

                    }
                    sendPutRequest(url, {
                        productId: model.get('id')
                    }, '', '成功创建分类', '创建分类失败', function() {
                        // me.fireEvent('refreshView');
                        model.set('status', status);
                    });
                }
            },
            '#openCreateShelvesGoodsWin,#openModifyShelvesGoodsWin': {
                click: function(component, rowIndex, colIndex) {
                    var itemId = component.getItemId();
                    var win = this.getShopProductAdd();
                    var model, form = win.down('form').getForm();
                    form.reset();

                    if (itemId == 'openCreateShelvesGoodsWin') {
                        model = this.getProductModel();
                        model = new model();

                    } else {
                        model = component.getStore().getAt(colIndex);
                        model.set('facePrice', (Math.abs(model.get('fprice') / 100)));
                        model.set('purchasePrice', (Math.abs(model.get('pprice') / 100)));
                        model.set('discountPrice', (Math.abs(model.get('dprice') / 100)));
                        var limitType = '',
                            limitCount = '';
                        limitType = model.get('limitType');
                        limitCount = model.get('limitCount');
                        if (limitType == 1) {
                            model.set('dayLimitCount', limitCount);
                        } else if (limitType == 2) {
                            model.set('totalLimitCount', limitCount);
                        } else {
                            model.set('dayLimitCount', '');
                            model.set('totalLimitCount', '');
                        }
                        console.log(model);
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
                        //windowEl.mask('saving');
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
                        }
                        shelvesGoods.set('shopId', shopId);
                        shelvesGoods.set('categoryId', categoryId);
                        shelvesGoods.set('facePrice', (Math.abs(parseInt(shelvesGoods.get('facePrice') * 100))));
                        shelvesGoods.set('purchasePrice', (Math.abs(parseInt(shelvesGoods.get('purchasePrice') * 100))));
                        shelvesGoods.set('discountPrice', (Math.abs(parseInt(shelvesGoods.get('discountPrice') * 100))));
                        shelvesGoods.set('limitType', limitType);
                        shelvesGoods.set('limitCount', limitCount);
                        console.log("try saving");
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
                                me.getProductStore().load({
                                    params: {
                                        categoryId: categoryId
                                    }
                                });
                            });
                            return;
                        }
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
                                // me.fireEvent('refreshView');
                                me.getProductStore().load({
                                    params: {
                                        categoryId: categoryId
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
    },
    openWin: function(win, model, callback) {
        //打开窗口
        var form = win.down('form');
        form.loadRecord(model);
        if (callback) {
            callback();
        }
        win.show();
    },
    onShopStoreBannerEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var ShopStoreBanner = view.getRecord(view.findTargetByEvent(e));
        console.log(ShopStoreBanner);
        var win = this.getShopBannerAdd();
        win.down('form').loadRecord(shopStoreBanner);
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
        this.getShopBannerTemplateStore().each(function(e) {
            data.bannerIds.push(e.getId());
            data.bannerUrls.push(e.data.url);
            data.titles.push(e.data.title);
        });

        data.id = me.shopStoreId;
        data.bannerIds.push('53ec44e20cf292d0f893df5db9');
        data.bannerUrls.push(inputs.url);
        data.titles.push(inputs.title);
        data.id = me.shopStoreId;

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
            }
            sendPutRequest('shop/updatebanners', $.param(data, true), '添加Banner模板', '添加Banner模板成功', '添加Banner模板失败', success, failure);

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },

});

function putawayOrOut(obj) {
    console.log($(obj));
}