Ext.define('XMLifeOperating.controller.SProductList', {
    extend: 'Ext.app.Controller',
    views: [
        'sProductManage.SShopShelfTab',
        'sProductManage.SShopShelf',
        'sProductManage.SShopSecondShelf',
        'sProductManage.SShopProduct'
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
    }
});