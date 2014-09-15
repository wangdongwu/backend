Ext.define('XMLifeOperating.controller.DelivererZoneList', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.delivererZone.DelivererZoneList',
        'centralPointManage.delivererZone.ResidentalDistrictEdit',
        'centralPointManage.delivererZone.LineDelivererAdd',
        'centralPointManage.delivererZone.DelivererZoneEdit'
    ],

    stores: [
        'ResidentalDistrict',
        'DelivererZone',
        // 'Deliverer',
        'ShopArea'
    ],

    models: [
        'DelivererZone',
        'ResidentalDistrict',
        // 'Deliverer',
        'ShopArea'
    ],
    refs: [{
        ref: 'delivererZoneList',
        selector: 'delivererZoneList',
        xtype: 'delivererZoneList',
        autoCreate: true

    }, {
        ref: 'delivererZoneEdit',
        selector: 'delivererZoneEdit',
        xtype: 'delivererZoneEdit',
        autoCreate: true
    }, {
        ref: 'residentalDistrictEdit',
        selector: 'residentalDistrictEdit',
        xtype: 'residentalDistrictEdit',
        autoCreate: true
    }, {
        ref: 'keywordCommunity',
        selector: '#keywordCommunity',
    }, {
        ref: 'lineDelivererAdd',
        selector: 'lineDelivererAdd',
        xtype: 'lineDelivererAdd',
        autoCreate: true
    }, {
        ref: 'oldCommunityId',
        selector: '#oldCommunityId',
    }, {
        ref: 'searchCommunityId',
        selector: '#searchCommunityId',
    }, {
        ref: 'oldCourierId',
        selector: '#oldCourierId',
    }, {
        ref: 'searchCourierId',
        selector: '#searchCourierId',
    }, {
        ref: 'keywordCourier',
        selector: '#keywordCourier',
    }],

    init: function() {
        var me = this;
        this.control({
            'delivererZoneList': {
                added: me.onShow
            },
            'delivererZoneList #add': {
                click: function() {
                    var cClass = this.getDelivererZoneModel();
                    var line = new cClass();
                    var win = this.getDelivererZoneEdit();
                    win.down('form').loadRecord(line);
                    win.show();
                }
            },
            'delivererZoneList #shopArea': {
                select: function(combo) {

                    console.log('hello shop dsitrict');
                    var lstore = this.getDelivererZoneStore();

                    lstore.load({
                        params: {
                            shopArea: combo.getValue()
                        }
                    });
                },
            },
            'delivererZoneEdit #save-line-edit-btn': {
                click: me.onSaveDelivererZoneEdit
            },
            'delivererZoneList #lineName': {
                click: me.onEdit
            },
            'delivererZoneList #bindCommunity': {
                //弹出入小区window
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var win = me.getResidentalDistrictEdit();
                    win.down('form').loadRecord(record);
                    win.show();
                    var store = Ext.create('XMLifeOperating.store.ResidentalDistrict');
                    this.getOldCommunityId().bindStore(store, false);
                    // Ext.ComponentQuery.query('residentalDistrictEdit #pagetool_has')[0].bindStore(store, false);
                    store.getProxy().extraParams = {
                        deliveryZone: record.get('id'),
                        isActive: true,
                        allDistricts: true
                    }
                    store.on('load', function(records) {
                        //初始化打勾
                        var model = Ext.ComponentQuery.query('#oldCommunityId')[0].getSelectionModel();
                        model.deselectAll();
                        for (var i = 0; i < records.data.length; i++) {
                            var index = store.indexOfId(records.data.items[i].get('id'));
                            model.select(index, true);
                        };
                    });
                    store.load();
                }
            },
            'residentalDistrictEdit #reseachCommunity': {
                click: function() {
                    var view = this.getSearchCommunityId();
                    var store = view.store;
                    store.getProxy().extraParams = {
                        name: me.getKeywordCommunity().getValue()
                    }
                    store.load();
                }
            },
            'residentalDistrictEdit #save-bindLineWithCommunity': {
                click: function() {
                    var editWindow = this.getResidentalDistrictEdit(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        line = form.getRecord();
                    console.log(line);
                    var selectModel = Ext.ComponentQuery.query('#searchCommunityId')[0].getSelectionModel();
                    var selectRecords = selectModel.getSelection();
                    var communityIds = [],
                        districtIds = [],
                        zoneId;
                    selectRecords.forEach(function(item) {
                        if (item.get("id") != null) {
                            communityIds.push(item.get("id"));
                        }
                    });
                    var oldSelectModel = Ext.ComponentQuery.query('#oldCommunityId')[0].getSelectionModel();
                    var oldSelectRecords = oldSelectModel.getSelection();
                    oldSelectRecords.forEach(function(item) {
                        if (item.get("id") != null) {
                            communityIds.push(item.get("id"));
                        }
                    });
                    districtIds = communityIds;
                    zoneId = line.get('id');


                    sendPutRequest('residentalDistrict/bindToZone', {
                        districtIds: districtIds,
                        zoneId: zoneId
                    }, '编辑商品', '成功编辑商品', '编辑商品失败', function() {
                        windowEl.unmask();
                        editWindow.close();
                        var lstore = me.getDelivererZoneStore();
                        lstore.load({
                            params: {
                                shopArea: line.get('areaId')
                            }
                        });

                    });
                }
            },
            'delivererZoneList #bindCourier': {
                //弹出绑定配送员window
                click: function(grid, column, rowIndex) {

                    var record = grid.getStore().getAt(rowIndex);
                    var win = me.getLineDelivererAdd();
                    win.down('form').loadRecord(record);
                    win.show();
                    var store = Ext.create('XMLifeOperating.store.Deliverer', {
                        autoSync: true
                    });
                    this.getOldCourierId().bindStore(store, false);
                    store.getProxy().extraParams = {
                        deliveryZone: record.get('id')
                    }
                    store.load({
                        callback: function(records) {
                            //初始化打勾
                            var model = Ext.ComponentQuery.query('#oldCourierId')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0; i < records.length; i++) {
                                var index = store.indexOfId(records[i].get('id'));
                                model.select(index, true);
                            }
                        }
                    });
                    var store1 = Ext.create('XMLifeOperating.store.Deliverer', {
                        autoSync: true
                    });
                    this.getSearchCourierId().bindStore(store1, false);
                }
            },
            'lineDelivererAdd #reseachCourier': {
                click: function() {
                    // var store = me.getDelivererStore();
                    var store = this.getSearchCourierId().store;
                    store.load({
                        params: {
                            nameOrPhone: me.getKeywordCourier().getValue(),
                            isActive: true,
                        },
                        callback: function(records) {
                            console.log('----');
                            console.log(records);
                            console.log('-----');
                        }
                    });
                }
            },
            'lineDelivererAdd #save-bindLineWithCourier': {
                click: function() {

                    var editWindow = this.getLineDelivererAdd(),
                        windowEl = editWindow.getEl(),
                        form = editWindow.down('form').getForm(),
                        line = form.getRecord();

                    var selectModel = Ext.ComponentQuery.query('#searchCourierId')[0].getSelectionModel();
                    var selectRecords = selectModel.getSelection();
                    var courierIds = [],
                        districtIds = [],
                        zoneId;
                    selectRecords.forEach(function(item) {
                        if (item.get("id") != null) {
                            courierIds.push(item.get("uid"));
                        }
                    });
                    console.log(courierIds);
                    var oldSelectModel = Ext.ComponentQuery.query('#oldCourierId')[0].getSelectionModel();
                    var oldSelectRecords = oldSelectModel.getSelection();
                    oldSelectRecords.forEach(function(item) {
                        if (item.get("uid") != null) {
                            courierIds.push(item.get("uid"));
                        }
                    });
                    delivererIds = courierIds;
                    console.log(delivererIds);

                    zoneId = line.get('id');
                    console.log(zoneId);
                    sendRequest('deliverer/bindToZone', {
                        delivererIds: delivererIds,
                        zoneId: zoneId
                    }, '配送员绑定线路', '成功绑定线路', '绑定线路失败', function() {
                        windowEl.unmask();
                        editWindow.close();
                        var lstore = me.getDelivererZoneStore();
                        lstore.load({
                            params: {
                                shopArea: line.get('areaId')
                            }
                        });

                    });
                }
            },
            'delivererZoneList #deleteLineId': {
                click: me.onDeleteLine
            }

        });
    },
    onShow: function() {
        // var store = this.getDelivererZoneStore();
        // store.load({
        //     params: {
        //         shopArea: XMLifeOperating.generic.Global.SERVICECENEERID
        //     }
        // });
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var line = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDelivererZoneEdit();
        line.set('shopArea', line.get('areaId'));
        win.down('form').loadRecord(line);
        win.show();
    },
    onSaveDelivererZoneEdit: function() {

        var editWindow = this.getDelivererZoneEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            line = form.getRecord(),
            me = this;

        if (form.isValid()) {

            windowEl.mask('saving');
            form.updateRecord(line);

            if (line.get('id') != '' && line.get('id') != null) {
                var id = line.get('id');
                var name = line.get('name');
                var shopArea = line.get('shopArea');
                var url = 'delivererZone/' + id;

                sendPutRequest(url, {
                    name: name,
                    shopArea: shopArea
                }, '编辑线路', '成功编辑线路', '编辑线路失败', function() {
                    windowEl.unmask();
                    editWindow.close();
                    var lstore = me.getDelivererZoneStore();
                    lstore.load({
                        params: {
                            shopArea: line.get('shopArea')
                        }
                    });

                });
                return;
            }
            var areaId = Ext.getCmp('delivererZoneList').down('#shopArea').getValue();
            line.set('shopArea', areaId);
            line.set('areaId', areaId);
            line.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    //me.fireEvent('refreshView');
                    var lstore = me.getDelivererZoneStore();
                    lstore.load({
                        params: {
                            shopArea: line.get('shopArea')
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
    onDeleteLine: function(view, rowIndex, colIndex, column, e) {
        var line = view.getRecord(view.findTargetByEvent(e));
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定删除线路 '{0}' 吗？", line.get('name')),
            function(result) {
                if (result == 'yes') {
                    var zoneId = line.get('id');
                    var url = 'delivererZone/' + zoneId;
                    sendDeleteRequest(url, {}, '删除线路', '成功删除线路', '删除线路失败', function(response) {
                        console.log(response);
                        if (response.responseText == '-2') {
                            Ext.Msg.alert('Invalid Data', '不能删除');
                            return;
                        }
                        line.destroy({
                            success: function() {
                                console.log('line deleted!');
                            }
                        });

                    });
                }
            }
        );

    }



});