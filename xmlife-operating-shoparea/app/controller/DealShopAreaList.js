Ext.define('XMLifeOperating.controller.DealShopAreaList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealShopArea.DealShopAreaList',
            'operationManage.dealShopArea.DSADealDetail'],

    stores: [
            'DealShopArea',
            'ShopArea',
            'DealItems'
            ],

    models: [
            'DealShopArea',
            'ShopArea',
            'DealItems'],
 

     refs: [
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
        {
             ref: 'dSADealDetail',
             selector: 'dSADealDetail',
             xtype: 'dSADealDetail',
             autoCreate: true
        }
    ],

    init: function() {

        var me=this;
        this.control({
            
            'dealShopAreaList #shopArea': {
            	select: function (combo) {
                    var store = this.getDealShopAreaStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        shopArea: combo.getValue()
                    };
                    store.loadPage(1,{
                        params: {
                            start: 0,
                            limint: 25,
                            page: 1
                        }
                    });
                },
            }, 
            'dealShopAreaList #arrivalOnCenter':{
                click:function(component,column,rowIndex, colIndex, e){
                    var sstore = this.getDealShopAreaStore();
                    var  dealShopArea= component.getRecord(component.findTargetByEvent(e));
                    if(dealShopArea.get('status')!=2){
                        return;
                    }
                    
                    Ext.MessageBox.confirm("选择框", "您确定您的操作么",function(str){
                        if(str=='yes'){
                            var url='deal/reachShopArea/'+dealShopArea.get('taskId');
                            sendPutRequest(url,{dealId:dealShopArea.get('dealBackendId')},'','','',function(str){
                                if(str.responseText != 0){
                                    console.log('失败');
                                    return;
                                }
                                dealShopArea.set('status',21);
                                /*sstore.load({
                                    params: {
                                        city: XMLifeOperating.generic.Global.currentCity,
                                        shopArea: combo.getValue()
                                    }
                                });*/
                            },function(str){
                                
                            });
                            
                        }
                        
                    });
                }
            },
            'dealShopAreaList #dealDetail':{
                click:me.onDSADealDetail
            }


        });

    },
     onDSADealDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDSADealDetail();
        win.down('form').loadRecord(dealDetail);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: dealDetail.get('dealBackendId'),
            },
            callback: function(records) {
                var model = Ext.ComponentQuery.query('#dealDetails')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },

   
});