Ext.define('XMLifeOperating.controller.Line', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.line.LineList',
        'centralPointManage.line.LineResidentalDistrictAdd',
        'centralPointManage.line.LineDelivererAdd',
        'centralPointManage.line.LineEdit'
    ],

    stores: [
        'DelivererZone',
        'ResidentalDistrict',
        'Deliverer',
        'ShopArea'
    ],

    models: [
        'DelivererZone',
        'ResidentalDistrict',
        'Deliverer',
        'ShopArea'
    ],
    refs: [{
        ref: 'lineList',
        selector: 'linelist',
        xtype: 'linelist',
        autoCreate: true

    }, {
        ref: 'lineEdit',
        selector: 'lineedit',
        xtype: 'lineedit',
        autoCreate: true
    }, {
        ref: 'lineResidentalDistrictAdd',
        selector: 'lineresidentaldistrictadd',
        xtype: 'lineresidentaldistrictadd',
        autoCreate: true
    }, {
        ref: 'keywordCommunity',
        selector: '#keywordCommunity',
    }, {
        ref: 'lineDelivererAdd',
        selector: 'linedelivereradd',
        xtype: 'linedelivereradd',
        autoCreate: true
    }, {
        ref: 'keywordCourier',
        selector: '#keywordCourier',
    }],

    init: function() {
        var me = this;
        this.control({
            'linelist':{
                added:me.onShow
            },
            'linelist #add': {
                click: function() {
                    var cClass = this.getDelivererZoneModel();
                    var line = new cClass();
                    var win = this.getLineEdit();
                    win.down('form').loadRecord(line);
                    win.show();
                }
            },
            'linelist #shopArea': {

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
            'lineedit #save-line-edit-btn': {
                click: me.saveLineEdit
            },
            'linelist #lineName': {
                click: me.onEdit
            },
            'linelist #bindCommunity': {
                //弹出入小区window
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var win = this.getLineResidentalDistrictAdd();
                    win.down('form').loadRecord(record);
                    win.show();
                    var store = me.getResidentalDistrictStore();
                    store.load({
                        params: {
                            deliveryZone: record.get('id'),
                            isActive: true
                        },
                        callback: function(records) {
                            /*console.log(records.length);
                            return;*/
                            // if((records.length==1)&&(records[0].get('uid')=='')){
                            //    store.remove(store.getAt(0)); 
                            // }
                            //初始化打勾
                            var model = Ext.ComponentQuery.query('#oldCommunityId')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0; i < records.length; i++) {
                                var index = store.indexOfId(records[i].get('id'));
                                model.select(index, true);
                            }
                        }
                    });
                }
            },
            'lineresidentaldistrictadd #reseachCommunity': {
                click: function() {
                    var store = me.getResidentalDistrictStore();
                    store.load({
                        params: {
                            name: me.getKeywordCommunity().getValue()
                        }
                    });
                }
            },
            'lineresidentaldistrictadd #save-bindLineWithCommunity': {
                click: function() {
                    var editWindow = this.getLineResidentalDistrictAdd(),
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
            'linelist #bindCourier': {
                //弹出绑定配送员window
                click: function(grid, column, rowIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    var win = this.getLineDelivererAdd();
                    win.down('form').loadRecord(record);
                    win.show();
                    var store = me.getDelivererStore();

                    store.load({
                        params: {
                            deliveryZone: record.get('id'),
                        },
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
                }
            },
            'linedelivereradd #reseachCourier': {
                click: function() {
                    var store = me.getDelivererStore();
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
            'linedelivereradd #save-bindLineWithCourier': {
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
            'linelist #deleteLineId': {
                click: me.onDeleteLine
            }

        });
    },
    onShow: function() {
        /*var store = this.getDelivererZoneStore();
        store.load({
            params: {
                shopArea: XMLifeOperating.generic.Global.SERVICECENEERID
            }
        });*/
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var line = view.getRecord(view.findTargetByEvent(e));
        var win = this.getLineEdit();
        line.set('shopArea', line.get('areaId'));
        win.down('form').loadRecord(line);
        win.show();
    },
    saveLineEdit: function() {

        var editWindow = this.getLineEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            line = form.getRecord(),
            me = this;

        if (form.isValid()) {

            windowEl.mask('saving');
            form.updateRecord(line);
            console.log("try saving");
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
                    line.destroy({
                        success: function() {
                            console.log('line deleted!');
                        }
                    });
                }
            }
        );

    }



});