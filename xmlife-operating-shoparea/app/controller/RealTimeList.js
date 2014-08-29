Ext.define('XMLifeOperating.controller.RealTimeList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.realTime.RealTimeList'],

    stores: ['RealTime','ShopArea'],

    models: ['RealTime','ShopArea'],
 
    refs: [
        {
            ref: 'shopArear',
            selector: '#shopArear',
        },
    ],

    init: function() {

        var me=this;
        this.control({
            
            'realTimeList #shopArear': {
            	select: function (combo) {

                   console.log('hello shop dsitrict');
                    var sstore = this.getRealTimeStore();
                    sstore.load({
                        params: {
                            areaId: combo.getValue()
                        }
                    });

                },
            }, 
        });
    },
   
});