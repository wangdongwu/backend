Ext.define('XMLifeOperating.controller.SProductList', {
    extend: 'Ext.app.Controller',
    views: [
        'sProductManage.SShopShelfTab',
        'sProductManage.SShopShelf',
        'sProductManage.SShopSecondShelf',
        'sProductManage.SShopProduct',
        'sProductManage.SShopProductEdit'
    ],
    stores: ['CategoryRoots', 'CategorySubs', 'Product'],
    models: ['CategoryRoots', 'CategorySubs', 'Product'],
    refs: [{
        ref: 'sShopShelf',
        selector: 'sShopShelf',
        xtype: 'sShopShelf',
        autoCreate: true
    }, {
        ref: 'sShopSecondShelf',
        selector: 'sShopSecondShelf',
        xtype: 'sShopSecondShelf',
        autoCreate: true
    }, {
        ref: 'sShopShelfTab',
        selector: 'sShopShelfTab',
        xtype: 'sShopShelfTab',
        autoCreate: true
    }, {
        ref: 'sShopProduct',
        selector: 'sShopProduct',
        xtype: 'sShopProduct',
        autoCreate: true
    }, {
        ref: 'sShopProductEdit',
        selector: 'sShopProductEdit',
        xtype: 'sShopProductEdit',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        this.control({
            'sShopShelf': {
                added: me.showCategoryRootsList,
                itemdblclick: me.categoryDoubleClick
            },
            'sShopSecondShelf': {
                /*                added: me.showCategorySubs,
                show: me.showCategorySubs,*/
                itemdblclick: me.categoryDoubleClick
            },
            'sShopShelfTab': {
                tabchange: me.tabChange
            },
            'sShopProduct #openModifyShelvesGoodsWin': {
                click: me.openProductEditWindow
            },
            'sShopProductEdit #saveEditBtn': {
                click: me.saveProductEdit
            }

        });
    },
    tabChange: function(tabPanel, newCard, oldCard, eOpts) {
        var me = this;
        var tabIdStr = newCard.getItemId();
        tabIdArray = tabIdStr.split('_');
        var tabId = tabIdArray[0];
        var sstore = this.getCategoryRootsStore();
        var snstore = this.getCategorySubsStore();
        /* var sgstore = this.getProductStore();*/
        var shopId = this.shopId;
        this.tabIdStr = tabIdStr;
        switch (tabId) {
            case 'tab1': //form
                break;
            case 'tab2': //collection一级货架
                me.showCategoryRootsList();
                break;
            case 'tab3': //次级货架
                me.showCategorySubsList(tabIdArray[1]);

                break;
            case 'tab4':
                //商品
                me.showProductList(tabIdArray[1]);
                break;
            case 'tab5':
                me.showProductSoldOutOrOffLineList(tabIdArray[1]);
                break;
            case 'tab6':
                me.showProductSearchList();
                break;

        }
    },
    showCategoryRootsList: function() {
        var me = this;
        var store = me.getCategoryRootsStore();
        store.loadPage(1, {
            params: {
                shopId: XMLifeOperating.generic.Global.currentShop,
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    showCategorySubsList: function(parentId) {
        var me = this;
        var snstore = me.getCategorySubsStore();
        snstore.loadPage(1, {
            params: {
                shopId: XMLifeOperating.generic.Global.currentShop,
                start: 0,
                limit: 25,
                page: 1,
                parentId: parentId
            }
        });
    },
    showProductList: function(categoryId) {
        var me = this;
        var sgstore = me.getProductStore();
        sgstore.loadPage(1, {
            params: {
                categoryId: categoryId,
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    categoryDoubleClick: function(grid, record, item, index, e, eOpts) {
        var me = this;
        var tab = me.getSShopShelfTab();
        this.record = record;
        for (var i = 0; i < tab.items.length; i++) {
            if (tab.items.keys[i].split('_')[1] == record.get('id')) {
                tab.setActiveTab(tab.items.keys[i])
                return;
            }
        };
        if (this.record.raw.leaf == true) {
            Ext.MessageBox.confirm("选择框", "无次级货架,进入商品添加列表页面", function(str) {
                if (str == 'no') {
                    return;
                }
                tab.add({
                    title: record.get('name'),
                    id: 'tab4_' + record.get('id'),
                    layout: 'fit',
                    items: {
                        xtype: 'sShopProduct'
                    },
                    closable: true
                });
                tab.setActiveTab('tab4_' + record.get('id'));
            });
            return;
        } else {
            tab.add({
                title: record.get('name'),
                id: 'tab3_' + record.get('id'),
                layout: 'fit',
                items: {
                    xtype: 'sShopSecondShelf'
                },
                closable: true
            });
            tab.setActiveTab('tab3_' + record.get('id'));
        }
    },
    openProductEditWindow: function(view, target, rowInde, colIndex, e, record, rowNode, opts) {
        var me = this;
        var win = me.getSShopProductEdit(),
            form = win.down('form'),
            record = record;
        record.set('discountPrice', record.get('dprice') / 100);
        record.set('facePrice', record.get('fprice') / 100);
        record.set('purchasePrice', record.get('pprice') / 100);
        form.getForm().loadRecord(record);
        win.show();
    },
    saveProductEdit: function(view, e) {

        var me = this;
        var win = me.getSShopProductEdit(),
            winEL = win.getEl(),
            form = win.down('form'),
            record = form.getForm().getRecord(),
            categoryId = null,
            data = {
                id: null,
                facePrice: null,
                purchasePrice: null,
                discountPrice: null,
            };
        var tabIdstrArray = this.tabIdStr.split('_');
        if (tabIdstrArray[0] == 'tab4' && tabIdstrArray[1] != undefined) {
            categoryId = tabIdstrArray[1];
        }
        if (form.isValid()) {
            //价格限制
            var facePrice = me.priceTransform(record.get('facePrice'));
            var discountPrice = me.priceTransform(record.get('discountPrice'));
            var purchasePrice = me.priceTransform(record.get('purchasePrice'));
            if (discountPrice != "") {
                data.discountPrice = discountPrice;
                if (discountPrice >= facePrice) {
                    Ext.Msg.alert('Invalid Data', '折扣价不能大于等于原价');
                    return;
                };
            }

            data.id = record.get('id');
            data.facePrice = facePrice;
            data.discountPrice = discountPrice;
            data.purchasePrice = purchasePrice;

            var success = function(response) {
                winEL.unmask();
                if (response.responseText == '2') {
                    var message = Ext.MessageBox.show({
                        title: '提示',
                        msg: '价格修改成功，等待审核…',
                        buttons: Ext.Msg.OK
                    });
                    setTimeout(function() {
                        message.close();
                    }, 1000);
                }
                me.showProductList(categoryId);
                win.close();

            };
            var failure = function(response) {
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '修改失败:' + response.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                winEL.unmask();
            };
            winEL.mask();
            sendPutRequest('product/update', data, '编辑商品', '成功编辑商品', '编辑商品失败', success, failure);
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }

    },
    priceTransform: function(value) {
        return parseInt((value * 100).toFixed());
    }
});