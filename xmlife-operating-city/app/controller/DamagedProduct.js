Ext.define('XMLifeOperating.controller.DamagedProduct', {
    extend: 'Ext.app.Controller',
    views: [
        'damagedGoodsManage.DamagedGoodsList',
        'damagedGoodsManage.DamagedGoodsLostWin',
        'damagedGoodsManage.CDealDetail'
    ],
    stores: ['DamagedProduct', 'ShopArea', 'DealItems'],
    models: ['DamagedProduct', 'DealItems'],
    refs: [{
        ref: 'damagedGoodsList',
        selector: 'damagedGoodsList',
        xtype: 'damagedGoodsList',
        autoCreate: true
    }, {
        ref: 'damagedGoodsLostWin',
        selector: 'damagedGoodsLostWin',
        xtype: 'damagedGoodsLostWin',
        autoCreate: true
    }, {
        ref: 'cDealDetail',
        selector: 'cDealDetail',
        xtype: 'cDealDetail',
        autoCreate: true
    }],
    init: function() {
        var self = this;
        self.queryParams = {};
        self.control({
            'damagedGoodsList #shopArea': {
                click: function() {
                    var store = self.getShopAreaStore();
                    console.log(XMLifeOperating.generic.Global.currentCity);
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity
                    }
                    store.load();
                }
            },

            'damagedGoodsList #search': {
                click: function(button) {
                    self.queryParams.areaId = button.up("panel").down("#shopArea").getValue();
                    self.queryParams.startTime = self.formatDate(button.up("panel").down("datefield[name='startTime']").getValue());
                    self.queryParams.endTime = self.formatDate(button.up("panel").down("datefield[name='endTime']").getValue());
                    self.queryParams.status = button.up("panel").down("#status").getValue();
                    self.queryParams.cityId = XMLifeOperating.generic.Global.currentCity;

                    self.reloadProductList();
                }
            },

            'damagedGoodsList #export': {
                click: function(button) {
                    var areaId = button.up("panel").down("#shopArea").getValue(),
                        startTime = button.up("panel").down("datefield[name='startTime']").getValue(),
                        endTime = button.up("panel").down("datefield[name='endTime']").getValue(),
                        status = button.up("panel").down("#status").getValue();
                    if (areaId == null) {
                        areaId = "";
                    };
                    if (status == null) {
                        status = "";
                    };
                    var sessionId = localStorage.getItem('sessionId') || '';
                    var url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/exportAuditList' +
                        '?cityId=' + XMLifeOperating.generic.Global.currentCity +
                        '&areaId=' + areaId +
                        '&startTime=' + self.formatDate(startTime) +
                        '&endTime=' + self.formatDate(endTime) +
                        '&status=' + status +
                        '&sessionId=' + sessionId;

                    window.open(url, '_blank');
                }
            },

            'damagedGoodsList #batchAccept': {
                click: function(button) {
                    var selectedItems = button.up("panel").getSelectionModel().getSelection(),
                        params = {},
                        itemIds = [];
                    for (var i = 0; i < selectedItems.length; i++) {
                        itemIds.push(selectedItems[i].get('id'));
                    }
                    params['ids'] = itemIds;
                    params['pass'] = true;
                    self.auditProduct(params);
                }
            },

            'damagedGoodsList #acceptBtn': {
                click: function() {
                    var id = arguments[5].get("id");
                    self.auditProduct({
                        'ids': [id],
                        'pass': true
                    });
                }
            },

            /*'damagedGoodsList #rejectBtn': {
                click: function() {
                    var id = arguments[5].get("id");
                    console.log(id);

                    self.auditProduct({
                        'ids': [id],
                        'pass': false
                    });
                }
            }*/
            //商品丢失
            'damagedGoodsList #goodsLostBtn': {
                click: self.onGoodsLostBtn
            },

            'damagedGoodsLostWin #saveBtn': {
                click: self.onSaveBtn
            },
            //查看订单
            'damagedGoodsList #cDealDetail': {
                click: self.onCDealDetail
            }
        });
    },
    auditProduct: function(params) {
        var self = this;
        sendPutRequest('damagedProductApply/auditPass', params, '残损审核', '成功通过残损审核', '残损审核失败', function(){
            self.reloadProductList();
        });
    },

    reloadProductList: function() {
        var productStore = this.getDamagedProductStore();
        productStore.getProxy().extraParams = this.queryParams;
        productStore.load();
    },
    
    formatDate: function(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },

    onGoodsLostBtn: function(grid, column, rowIndex, colIndex, e){
        var self = this,
            win = self.getDamagedGoodsLostWin(),
            record = grid.getStore().getAt(rowIndex),
            form = win.down('form').getForm();

        win.down('form').loadRecord(record);
        win.down('#lostNum').maxValue = record.get('count');
        win.down('#lostNum').setValue(record.get('count'));

        win.show();
    },

    onSaveBtn: function(){
        var win = this.getDamagedGoodsLostWin(),
            windowEl = win.getEl(),
            form = win.down('form').getForm(),
            record = form.getRecord(),
            me = this;

        if (form.isValid()) {
            windowEl.mask('saving');
            var success = function(task, operation) {
                windowEl.unmask();
                if (task.responseText < 0) {
                    Ext.MessageBox.show({
                        title: '提示',
                        msg: '记录不存在或丢失数量大于申请数量',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    return;
                }
                win.close();
                me.reloadProductList();

            };

            var failure = function(task, operation) {
                windowEl.unmask();
                Ext.Msg.alert('提示', '操作商品丢失失败');
            };

            sendPutRequest('damagedProductApply/lose', 
                {id:record.get('id'),
                 loseCount:win.down('[name=loseCount]').getValue()
                }, '操作商品丢失', '操作商品丢失成功', '操作商品丢失失败', success, failure);
                
        } else {
            Ext.Msg.alert('无效数据', '请提交正确的表格数据！');
        }
        
    },

    onCDealDetail: function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getCDealDetail(),
            form = win.down('form').getForm(),
            status = record.get('status'),
            dealId = record.get('dealBackendId') || record.get('dealId');
        if(dealId === null){
            return;
        }
        // record.set('dealId','94012672286130185');
        // 单独获取详情的接口
        Ext.Ajax.request({
            method: 'GET',
            url: XMLifeOperating.generic.Global.URL.biz + 'deal/' + dealId,
            params: {},
            success: function(response) {
                if (response.status == 200 && response.statusText == 'OK') {
                    var data = Ext.decode(response.responseText);
                    form.setValues(data);
                }
            },
            failure: function() {
                Ext.Msg.alert('获取订单详情失败！');
            }
        });

        var store = this.getDealItemsStore();
        store.getProxy().extraParams = {
            deal: dealId
        };
        store.load({
            callback: function(records) {
                var model = win.down('#dealDetails').getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }

                /*if (status != 4) {
                    win.down('#sellRefund').hide();
                    win.down('#refundAll').hide();
                } else {
                    win.down('#sellRefund').show();
                    win.down('#refundAll').show();
                }*/
            }
        });
        win.show();
    }
})
