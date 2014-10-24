Ext.define('XMLifeOperating.controller.WaitForAudit', {
    extend: 'Ext.app.Controller',

    views: ['waitForAudit.WaitForAuditList',
            'waitForAudit.HistoricalRecordsList'
    ],

    stores: ['WaitForAudit',
            'HistoricalRecords',
            'ShopArea',
            'Shop'

    ],
    models: ['ChangePriceRecord',
            'ShopArea',
            'Shop'
    ],
    refs: [{
            ref: 'historicalRecordsList',
            selector: 'historicalRecordsList',
            xtype: 'historicalRecordsList',
            autoCreate: true
      },{
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
      },{
            ref: 'waitForAuditList',
            selector: 'waitForAuditList',
            xtype: 'waitForAuditList',
            autoCreate: true
      },],
    init: function() {

        var self = this;
        this.selectObjList = [];
        this.control({


            'waitForAuditList' : {
                added : self.rendenWaitForAuditList,
                afterrender : function(thisObj){
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange',self.selectChange,self)
                }
            },
            'waitForAuditList button[name=allRefresh]':{
                click:function(){

                    var grid = self.getWaitForAuditList();
                    grid.down('#shopList').setValue('');
                    grid.down('#shopArea').setValue('');
                    grid.down('[name=goodsSkuId]').setValue('');
                    self.rendenWaitForAuditList(grid);
                    var shopStore = self.getShopStore();
                    shopStore.removeAll(false);
                }
            },
            'waitForAuditList #shopArea': {
                 
                select: function(combo) {
                    var grid = self.getWaitForAuditList();
                    grid.down('#shopList').setValue('');
                    self.rendenWaitForAuditList(grid);

                    var shopStore = self.getShopStore();
                    
                    shopStore.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        areaId: combo.getValue()
                    };
                    shopStore.loadPage(1);
                }
            },
            'waitForAuditList #shopList': {
                select: function(combo) {
                    self.rendenWaitForAuditList(self.getWaitForAuditList());
                }
            },
            'historicalRecordsList button[name=allRefresh]':{
                click:function(){
                    var shopStore = self.getShopStore();
                    shopStore.removeAll(false);
                    var grid = self.getHistoricalRecordsList();
                    grid.down('#shopList').setValue('');
                    grid.down('#shopArea').setValue('');
                    grid.down('#isverifyCombo').setValue('');
                    grid.down('[name=goodsSkuId]').setValue('');
                    self.rendenHistoricalRecordsList(grid);
                }
            },
            'historicalRecordsList #shopArea': {
                select: function(combo) {
                    var grid = self.getHistoricalRecordsList();
                    grid.down('#shopList').setValue('');
                    grid.down('#isverifyCombo').setValue('');
                    grid.down('[name=goodsSkuId]').setValue('');
                    self.rendenHistoricalRecordsList(grid);
                    var shopStore = self.getShopStore();
                    shopStore.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        areaId: combo.getValue()
                    };
                    shopStore.loadPage(1);
                }
            },
            'historicalRecordsList #shopList': {
                select: function(combo) {
                    self.rendenHistoricalRecordsList(self.getHistoricalRecordsList());
                }
            },
            //改价审核历史记录
            'waitForAuditList button[name=historicalRecords]' : {
                click : function(){
                    var me = this;
                    var tab=this.getHistoricalRecordsList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var shopStore = self.getShopStore();
                    shopStore.removeAll(false);
                    var historicalRecords = this.getHistoricalRecordsStore();
                    historicalRecords.removeAll();
                    historicalRecords.getProxy().extraParams = {
                        cityId: XMLifeOperating.generic.Global.currentCity
                    }
                    historicalRecords.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                    content.add(tab);
                }
            },
            'waitForAuditList button[name=aKeyBy]':{
                click:function(){
                    var idObj = self.getWaitForAuditIdList({type:'agree'});
                    var url = 'changePriceRecord/audit';
                    var params = {
                        ids:idObj.idList,
                        pass:true,
                        description:''
                    };
                    Ext.MessageBox.confirm(
                        '确认批量审核吗？',
                        Ext.String.format("确定要将'{0}'项商品记录批量通过审核吗？", self.sm.getCount()),
                        function(result) {
                            if (result == 'yes') {
                                console.log(idObj);
                                sendPutRequest(url, params, '批量审核商品改价', '批量审核商品改价成功', '批量审核商品改价失败',
                                    function(response) {
                                        self.rendenWaitForAuditList(self.getWaitForAuditList());

                                    });
                            }
                        }
                    );
                }
            },
            'waitForAuditList button[name=aKeyNoBy]':{
                click:function(){
                    var idObj = self.getWaitForAuditIdList({type:'disagree'});
                    var url = 'changePriceRecord/audit';
                    var params = {
                        ids:idObj.idList,
                        pass:false,
                        description:''
                    };
                    Ext.MessageBox.confirm(
                        '确认批量审核不通过吗？',
                        Ext.String.format("确定要将'{0}'项商品记录批量不通过吗？", self.sm.getCount()),
                        function(result) {
                            if (result == 'yes') {
                                console.log(idObj);
                                sendPutRequest(url, params, '批量审核商品改价', '批量审核商品改价不通过成功', '批量审核商品改价不通过失败',
                                    function(response) {
                                        self.rendenWaitForAuditList(self.getWaitForAuditList());

                                    });
                            }
                        }
                    );
                }
            },
            'historicalRecordsList #returnWaitForAuditList': {
                click:self.returnWaitForAuditList

            },
            'historicalRecordsList #isverifyCombo':{
                change:function(){
                    self.rendenHistoricalRecordsList(this.getHistoricalRecordsList());
                }
            },
            //改价审核搜索商品
            'historicalRecordsList button[name=skuIdSearch]': {
                click:function(){
                    self.rendenHistoricalRecordsList(this.getHistoricalRecordsList());
                }
            },
            'waitForAuditList button[name=skuIdSearch]': {
                click:function(){
                    self.rendenWaitForAuditList(this.getWaitForAuditList());
                }
            },
            'waitForAuditList #operateAudit':{
                click:function(view, rowIndex, colIndex, column, e) {
                    var pass;
                    var grid = view.getRecord(view.findTargetByEvent(e));
                    var id = grid.get('id');
                    var ids=[];
                    ids.push(id);
                    Ext.MessageBox.confirm(
                        '审核改价商品',
                        Ext.String.format("确认通过价格修改吗？", ''),
                        function(result) {

                            if (result == 'yes') {
                                pass=true;

                            }else if(result == 'no'){
                                pass=false;
                            }else{
                                return;
                            }
                            var url = 'changePriceRecord/audit';
                            var params = {
                                ids:ids,
                                pass:pass,
                                description:''
                            };
                           
                            sendPutRequest(url, params, '一键审核商品改价', '一键审核商品改价不通过成功', '一键审核商品改价不通过失败',
                                function(response) {
                                    self.rendenWaitForAuditList(self.getWaitForAuditList());

                                });
                           
                        }
                    );
                }
            }
        });
    },
    returnWaitForAuditList:function(){
        var tab = this.getWaitForAuditList();
        this.rendenWaitForAuditList(tab);
        var content = this.getContentPanel();
        content.removeAll(false);
        content.add(tab);
    },
    onShow: function() {
        var store = this.getWaitForAuditStore();
        store.load({
            params: {
                cityId: XMLifeOperating.generic.Global.currentCity
            }
        });
    },
    getWaitForAuditIdList : function(typeObj){
        var list = this.selectObjList,
            idObj = {},
            idList = [];

        Ext.Array.each(list,function(v,k){
            idList.push(v.data.id);
        });
        idObj.idList = idList;
        return idObj;
    }
    ,
    selectChange : function(obj,objList){
        this.selectObjList = objList;
    },
    rendenWaitForAuditList : function(grid){
        var areaId = grid.down('#shopArea').getValue();
        var shopId = grid.down('#shopList').getValue();
        var skuId = grid.down('[name=goodsSkuId]').getValue();
        var store = grid.store;
        store.getProxy().extraParams={
             cityId: XMLifeOperating.generic.Global.currentCity,
             areaId: areaId || '',
             shopId: shopId || '',
             skuId: skuId || ''

        };
        store.loadPage(1);
    },
    rendenHistoricalRecordsList:function(grid){
        var areaId = grid.down('#shopArea').getValue();
        var shopId = grid.down('#shopList').getValue();
        var status = grid.down('#isverifyCombo').getValue();
        var skuId = grid.down('[name=goodsSkuId]').getValue();
        var store = grid.store;
        store.getProxy().extraParams={
             cityId: XMLifeOperating.generic.Global.currentCity,
             areaId: areaId || '',
             shopId: shopId || '',
             status: status || '',
             skuId: skuId || ''
        };
        store.loadPage(1);
        
    },
});