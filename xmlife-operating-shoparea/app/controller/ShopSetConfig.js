Ext.define('XMLifeOperating.controller.ShopSetConfig', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.shopSetConfig.ShopSetConfigList',
        'centralPointManage.shopSetConfig.ShopSetConfigEdit',
        'centralPointManage.shopSetConfig.ShopSetConfigSonList',
        'centralPointManage.shopSetConfig.ShopSetConfigSonEdit'
    ],
    stores: [
        'ShopSetConfig', 'ShopSetItem'
    ],
    models: [
        'ShopSetConfig'
    ],
    /*
      @param selector  widget.XX
      @param ref       this.getXXX()
      @param xtype     类型
      */
    refs: [{
        ref: 'shopSetConfigList',
        selector: 'shopSetConfigList',
        xtype: 'shopSetConfigList',
        autoCreate: true
    }, {
        ref: 'shopSetConfigEdit',
        selector: 'shopSetConfigEdit',
        xtype: 'shopSetConfigEdit',
        autoCreate: true
    }, {
        ref: 'shopSetConfigSonList',
        selector: 'shopSetConfigSonList',
        xtype: 'shopSetConfigSonList',
        autoCreate: true
    }, {
        ref: 'shopSetConfigSonEdit',
        selector: 'shopSetConfigSonEdit',
        xtype: 'shopSetConfigSonEdit',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'gainOpenShopsId',
        selector: '#gainOpenShopsId'
    }],
    init: function() {
        var me = this;
        this.control({
            'shopSetConfigList #shopArea': {
                select: function(combo) {
                    var dstore = me.getShopSetConfigStore();
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
                    me.areaId = combo.getValue();
                }
            },

            'shopSetConfigList #add': {
                click: function(){
                    me.onAdd('shopSetConfigList');
                }
            },

            'shopSetConfigList #edit': {
                click: me.onEdit
            },

            'shopSetConfigList #delete': {
                click: me.onDelete
            },

            'shopSetConfigEdit #saveBtn': {
                click: me.onSave
            },

            'shopSetConfigList #seeShopSetConfigSon': {
                click: me.onSeeShopSetConfigSon
            },

            //返回店铺集合
            'shopSetConfigSonList #return': {
                click: me.onReturn
            },

            'shopSetConfigSonList #add': {
                click: function(){
                    me.onAdd('shopSetConfigSonList');
                }
            },

            'shopSetConfigSonEdit #saveBtn': {
                click: me.onSonSave
            },

            'shopSetConfigSonList #edit': {
                click: me.onSonEdit
            },

            'shopSetConfigSonList #delete': {
                click: me.onSonDelete
            },

            'shopSetConfigSonList dataview': {
                drop: function(node, data, dropRec, dropPosition) {
                    var store = me.getShopSetConfigSonList().store;
                    var indexs = [];
                    for (var i = 0, n = store.totalCount; i < n; i++) {
                        var record = store.getAt(i);
                        indexs.push(record.index);
                    }
                    
                    sendPutRequest('shop/shopset/setItemOrder ', {
                        shopSetId: me.shopSetId,
                        indexs: indexs
                    }, '集合排序', '集合排序成功', '集合排序失败', function() {
                        me.showShopSetConfigSonList(me.shopSetId);
                    });
                }
            }
        });
        Ext.QuickTips.init();
    },
    showShopSetConfigList: function(grid){
        var me = this,
            grid = me.getShopSetConfigList(),
            store = grid.store;
        
        store.getProxy().extraParams={
            city: XMLifeOperating.generic.Global.currentCity,
            areaId: me.areaId
        };
        store.loadPage(1);
    },
    onAdd:function(type){
        var me = this;
        if(type == 'shopSetConfigSonList'){
            var win = this.getShopSetConfigSonEdit();
            win.down('form').getForm().reset();
            var store = Ext.create('XMLifeOperating.store.HomePageShop', {
                autoSync: false
            });
            me.getGainOpenShopsId().bindStore(store, false);
            store.getProxy().extraParams = {
                areaId: me.areaId
            }
            store.load();
        }else{
            var win = this.getShopSetConfigEdit();
        }
        var cClass = this.getShopSetConfigModel();
        var record= new cClass();
        win.down('form').loadRecord(record);
        win.down('form').getForm().reset();
        win.show();
    },

    onEdit: function(grid,colIndex,rowIndex) {
        var me = this;
        var record = grid.getStore().getAt(rowIndex);
        var win = me.getShopSetConfigEdit();
        win.down('form').loadRecord(record);
        win.show();
    },

    onDelete: function(grid,html,rowIndex){
        var record= grid.store.getAt(rowIndex);
        var me = this;
        Ext.MessageBox.confirm("提示", "确认要删除该集合吗？", function(result) {
            if (result == 'yes') {

                var params = {
                    shopSetId: record.get('id')
                };

                var success = function(task, operation) {
                    if (task.responseText == '1') {
                        Ext.Msg.alert('成功', '成功删除该店铺集合');
                    }
                    me.showShopSetConfigList();
                };
                var failure = function(task, operation) {

                };
                sendDeleteRequest('shop/shopset', params, '删除店铺集合', '删除店铺集合成功', '删除店铺集合失败', success, failure);
            }
        });
    },

    onSave: function(){
        var me = this,
            win = this.getShopSetConfigEdit(),
            windowEl = win.getEl(),
            form = win.down('form').getForm(),
            records = form.getRecord();

        if(form.isValid()){
            windowEl.mask('saving');
            var params = {
                name:win.down('[name=name]').getValue(),
                areaId:me.areaId
            };
            
            var success = function(task, operation) {
                windowEl.unmask();
                win.close();
                me.showShopSetConfigList();
            };

            var failure = function(task, operation) {
                windowEl.unmask();
                win.close();
            };
            if(records.get('id')){
                params = {
                    name: win.down('[name=name]').getValue(),
                    shopSetId: records.get('id')
                };
                sendPutRequest('shop/shopset', params, '修改店铺集合', '成功修改店铺集合', '修改店铺集合失败', success, failure);
                return;
            }
            sendRequest('shop/shopset', params, '添加店铺集合', '成功添加店铺集合', '添加店铺集合失败', success, failure);
        }else{
            Ext.MessageBox.alert('提示','请按正确格式填写！');
        }
        
    },

    onSeeShopSetConfigSon: function(grid){
        var tab = this.getShopSetConfigSonList();
        var content = this.getContentPanel();
        content.removeAll(false);
        var record = grid.getStore().getAt(arguments[2]);
        var store = tab.store;
        store.removeAll();
        store.getProxy().extraParams = {
            shopSetId: record.get('id')
        }
        store.loadPage(1);
        content.add(tab);
        this.shopSetId = record.get('id');
    },

    onReturn: function(){
        var me = this,
            tab = me.getShopSetConfigList(),
            content = me.getContentPanel();
        content.removeAll(false);
        content.add(tab);
    },

    onSonEdit: function(grid,colIndex,rowIndex) {
        var me = this;
        var record = grid.getStore().getAt(rowIndex);
        var win = me.getShopSetConfigSonEdit();
        var store = Ext.create('XMLifeOperating.store.HomePageShop', {
            autoSync: false
        });
        me.getGainOpenShopsId().bindStore(store, false);
        store.getProxy().extraParams = {
            areaId: me.areaId
        }
        store.load();
        win.down('form').loadRecord(record);
        win.show();

    },

    onSonSave: function(){
        var me = this,
            win = this.getShopSetConfigSonEdit(),
            windowEl = win.getEl(),
            form = win.down('form').getForm(),
            records = form.getRecord();

        if(form.isValid()){
            windowEl.mask('saving');
            var params = {
                shopId:win.down('[name=shopId]').getValue(),
                shopSetId:me.shopSetId 
            };
            
            var success = function(task, operation) {
                windowEl.unmask();
                win.close();
                me.showShopSetConfigSonList(me.shopSetId);
            };

            var failure = function(task, operation) {
                windowEl.unmask();
                win.close();
            };
            if(records.get('shopId')){
                params = {
                    shopId: win.down('[name=shopId]').getValue(),
                    shopSetId: me.shopSetId,
                    index: records.index
                };
                sendPutRequest('shop/shopset/item', params, '修改店铺集合', '成功修改店铺集合', '修改店铺集合失败', success, failure);
                return;
            }
            sendRequest('shop/shopset/item', params, '添加店铺', '成功添加店铺', '添加店铺失败', success, failure);
        }else{
            Ext.MessageBox.alert('提示','请按正确格式填写！');
        }
    },

    showShopSetConfigSonList: function(shopSetId){
        var grid = this.getShopSetConfigSonList();
        var store = grid.store;
        store.getProxy().extraParams = {
            shopSetId: shopSetId
        }
        store.loadPage(1);
    },

    onSonDelete: function(grid,html,rowIndex){
        var record= grid.store.getAt(rowIndex);
        var me = this;
        Ext.MessageBox.confirm("提示", "确认要删除该集合吗？", function(result) {
            if (result == 'yes') {

                var params = {
                    shopSetId: me.shopSetId,
                    index: record.index
                };

                var success = function(task, operation) {
                    if (task.responseText == '1') {
                        Ext.Msg.alert('成功', '成功删除该店铺集合');
                    }
                    me.showShopSetConfigSonList(me.shopSetId);
                };
                var failure = function(task, operation) {

                };
                sendDeleteRequest('shop/shopset/item', params, '删除店铺', '删除店铺成功', '删除店铺失败', success, failure);
            }
        });
    },
});
