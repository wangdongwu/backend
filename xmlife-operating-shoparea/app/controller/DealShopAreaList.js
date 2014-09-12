Ext.define('XMLifeOperating.controller.DealShopAreaList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealShopArea.DealShopAreaList'],

    stores: ['DealShopArea','ShopArea'],

    models: ['DealShopArea','ShopArea'],
 

     refs: [
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
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

        });

    },

   
});