Ext.define('XMLifeOperating.controller.RealTimeList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.realTime.RealTimeList'],

    stores: ['RealTime','ShopArea'],

    models: ['RealTime','ShopArea'],
 
    refs: [
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
    ],

    init: function() {

        var me=this;
        this.control({
            
            'realTimeList #shopArea': {
            	select: function (combo) {
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