Ext.define('XMLifeOperating.view.operationManage.dealCashOnDelivery.DealCashOnDeliveryListDealDetail', {
    extend: 'Ext.window.Window',
    xtype: 'dealCashOnDeliveryListDealDetail',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 380,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title:'订单详情',
            itemId:'dealForm',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'displayfield',
                    name: 'shortId',
                    fieldLabel: '订单号',
                    allowBlank:false,
                    labelAlign:'left'
                },
/*                {
                    xtype: 'displayfield',
                    name: 'actualDealPrice',
                    fieldLabel: '总计',
                    allowBlank:false,
                    labelAlign:'left'               
                },*/
               
                {
                    name: 'orderDetails',
                    store:'DealItems',
                    fieldLabel: '购买清单',
                    xtype:'gridpanel',
                    itemId:'orderDetail',
                    height:200,
                    columns:[

                        {
                            text:'店铺名',
                            width: 100,
                            dataIndex:'shopName'
                        },
                        {
                            text:'商品名',
                            dataIndex:'name'
                        },
                        
                        {
                            text:'单价',
                            width: 50,
                            dataIndex:'price',
                            renderer : function(value){
                                return value / 100;
                            }
                        },
                        {
                            text:'数量',
                            width: 50,
                            dataIndex:'num'
                        },
                        {
                            text:'合计',
                            width: 50,
                            dataIndex:'actualItemPrice',
                            renderer : function(value){
                                return value / 100;
                            }
                        },
                    ],
                },
                
            ],
            buttons: [
                {
                    text: '知道了',
                    labelAlign:'center',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('dealCashOnDeliveryListDealDetail')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});

