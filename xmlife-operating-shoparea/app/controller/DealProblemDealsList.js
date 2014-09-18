Ext.define('XMLifeOperating.controller.DealProblemDealsList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealProblemDeals.DealProblemDealsList',
    'operationManage.dealProblemDeals.DealProblemDealsReapportion',
    'operationManage.dealProblemDeals.DealProblemDealsReapportionShopper',
    'operationManage.dealProblemDeals.DealProblemDealsReapportionDeliverer'],

    stores: ['DealProblemDeals','ShopArea','DealTasks','Shopper','Deliverer'],

    models: ['DealProblemDeals','ShopArea','DealTasks','Shopper','Deliverer'],
 
    refs: [
        {
             ref: 'dealProblemDealsList',
             selector: 'dealProblemDealsList',
             xtype: 'dealProblemDealsList',
             autoCreate: true
        },
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
        {
             ref: 'reapportion',
             selector: 'reapportion',
             xtype: 'reapportion',
             autoCreate: true
        },
        {
             ref: 'reapportionDealTasksShopper',
             selector: 'reapportionDealTasksShopper',
             xtype: 'reapportionDealTasksShopper',
             autoCreate: true
        },
        {
             ref: 'reapportionDealTasksDeliverer',
             selector: 'reapportionDealTasksDeliverer',
             xtype: 'reapportionDealTasksDeliverer',
             autoCreate: true
        }
    ],

    init: function() {

        var me=this;
        this.control({
            
            'dealProblemDealsList #shopArea': {
            	select: function (combo) {
                    var sstore = this.getDealProblemDealsStore();
                    
                    sstore.load({
                        params: {
                            areaId: combo.getValue()
                        }
                    });

                },
            },
            //刷新按钮

            'dealProblemDealsList #update': {
                click: function() {
                
                    var me = this;
                    var store = this.getDealProblemDealsStore()
                    
                    var shopAreaId = Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue();

                        if (shopAreaId) {
                            store.load({
                                params: {
                                    areaId: shopAreaId
                                }
                            });
                        } else {
                            return;
                        }
                 

                    },
            },
             

            '#cancellation':{
                 click: me.onCancellation
            },     

            '#reapportion':{
                 click: me.onReapportion
            }, 
            '#reapportionShopper':{
                 click: me.onReapportionShopper
            },
            '#putReapportionShopper':{
                 click: me.onPutReapportionShopper
            },
            "#reapportionDeliverer":{
                 click: me.onReapportionDeliverer
            },            
            '#putReapportionDeliverer':{
                 click: me.onPutReapportionDeliverer
            },
            'dealProblemDealsList #dealDetail':{
                click:function(){
                    alert(1111);
                }
            }
        });
    },

    onReapportion: function(view, rowIndex, colIndex, column, e) {
        var reapportion = view.getRecord(view.findTargetByEvent(e));
        var win = this.getReapportion();
        win.down('form').loadRecord(reapportion);
        win.show();
        var store = this.getDealTasksStore();
                console.log(reapportion);

        console.log(reapportion.get('dealBackendId'));
        store.load({
            params: {
                dealId: reapportion.get('dealBackendId'),
            },

            callback:function(records){
                console.log(records);
                var model=Ext.ComponentQuery.query('#dealTasks')[0].getSelectionModel();
                model.deselectAll();
                for ( var i = 0; i<records.length; i++) {
                    var index=store.indexOfId(records[i].get('id'));
                    records[i].parentStore = reapportion;
                    model.select(index,true);
                    }
            }
        });   
    },

    onReapportionShopper: function(view, rowIndex, colIndex, column, e) {
        var reapportion = view.getRecord(view.findTargetByEvent(e));
        
        var win = this.getReapportionDealTasksShopper();
        win.down('form').loadRecord(reapportion);
        win.show();

        var store = this.getShopperStore();

        console.log(reapportion.get('shopId'));
        store.load({
            params: {
                shopId: reapportion.get('shopId'),
            },
            callback:function(records){
                var model=Ext.ComponentQuery.query('#reapportionShoppers')[0].getSelectionModel();
                model.deselectAll();
                for ( var i = 0; i<records.length; i++) {
                    records[i].parentStore = reapportion;
                    var index=store.indexOfId(records[i].get('id'));
                    model.select(index,true);
                    }
            }
        });   
    },
    onPutReapportionShopper: function(view, rowIndex, colIndex, column, e) {
        var editWindow1 = this.getReapportionDealTasksShopper();
        var editWindow2 = this.getReapportion();

        var windowEl = editWindow1.getEl();
        var reapportionBuyerS = view.getRecord(view.findTargetByEvent(e));
        var uid = reapportionBuyerS.get('uid');
        var taskId = reapportionBuyerS.parentStore.get('taskId');
        var dealId = reapportionBuyerS.parentStore.parentStore.get('dealBackendId');
        var me = this;

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionBuyerS.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/assignShopper',{dealId:dealId, taskId:taskId, shopperId:uid},'分单','分单成功','分单失败',function(response){

                        if(response.responseText!=1){
                            Ext.MessageBox.show({
                                title: '订单重新分配失败',
                                msg: '订单重新分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                        }else{
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单重新分配成功',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                            var sstore = me.getDealProblemDealsStore();
                            sstore.load({
                                params: {
                                        areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
                                }
                            });
                        }
                    });
                }
            }
        );
            
    },

    onReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var me=this;
        var reapportionDeliverer = Ext.ComponentQuery.query('#dealForm')[0].getRecord();

        var win = this.getReapportionDealTasksDeliverer();
        win.down('form').loadRecord(reapportionDeliverer);
        win.show();

        var store = this.getDelivererStore();
        console.log(reapportionDeliverer.get('zoneId'));
        store.load({
            params: {
                // deliveryZone: reapportionDeliverer.get('zoneId'),
                area:me.getDealProblemDealsList().down('#shopArea').getValue(),
                isForAssign:true
            },

            callback:function(records){
                var model=Ext.ComponentQuery.query('#reapportionDeliverers')[0].getSelectionModel();
                model.deselectAll();
                for ( var i = 0; i<records.length; i++) {
                    records[i].parentStore = reapportionDeliverer;
                    var index=store.indexOfId(records[i].get('id'));
                    model.select(index,true);
                    }
            }
        });   
    },

    onPutReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var editWindow1 = this.getReapportionDealTasksDeliverer();
        var editWindow2 = this.getReapportion();

        var windowEl = editWindow1.getEl();
        var reapportionDeliverer = view.getRecord(view.findTargetByEvent(e));
        var uid = reapportionDeliverer.get('uid');
        var dealId = reapportionDeliverer.parentStore.get('dealBackendId');
        var me = this;
        /*sendPutRequest('deal/assignDeliverer',{dealId:dealId, delivererId:uid},'分单','分单成功','分单失败',function(){
                windowEl.unmask();
                editWindow1.close();
                editWindow2.close();
                var sstore = me.getDealProblemDealsStore();
                sstore.load({
                    params: {
                            areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
                    }
                });
            });*/
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionDeliverer.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/assignDeliverer',{dealId:dealId, delivererId:uid},'分单','分单成功','分单失败',function(response){
                        console.log();
                        if(response.responseText!=1){
                            Ext.MessageBox.show({
                                title: '订单重新分配失败',
                                msg: '订单重新分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                        }else{
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单重新分配成功',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                            var sstore = me.getDealProblemDealsStore();
                            sstore.load({
                                params: {
                                        areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
                                }
                            });
                        }
                    });
                }
            }
        );

    },

    onCancellation: function(view, rowIndex, colIndex, column, e) {
        alert(123);
        var cancellation = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCancellation();
        win.down('form').loadRecord(cancellation);
        win.show();
    },
});