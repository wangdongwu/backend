Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsReapportionShopper', {
    extend: 'Ext.window.Window',
    xtype: 'reapportionDealTasksShopper',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 500,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title:'重新分配买手',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            
            defaults:{
                anchor: '100%'
            },


            items: [
                {
                    name: 'reapportionShoppers',
                    store:'Shopper',
                    fieldLabel: '重新分配买手',
                    xtype:'gridpanel',
                    itemId:'reapportionShoppers',
                    height:150,
                    columns:[
                        {
                            text:'买手姓名',
                            dataIndex:'name'
                        },
                        {
                            text:'联系电话',
                            dataIndex:'phone'
                        },
                        {
                            text:'店铺',
                            dataIndex:'shopNames',
                            sortable: false,
                            renderer:function(value){
                                var str='';
                                for(var i=0;i<value.length;i++){
                                    str += value[i]+'<br />';
                                }
                                return str;
                            }
                        },
                        {
                            text:'当前订单数',
                            width: 80,
                            align: 'center',
                            dataIndex:'activeTaskNum'
                        },
                        {
                            text: '操作',
                            sortable: false,
                            align: 'center',
                            itemId: 'putReapportionShopper',
                            renderer: function (value) {
                                return Ext.String.format('<a>分单</a>', value, value);
                            }
                        },
                    ],
                },
            ],
        }]

        this.callParent(arguments);

    }

        
});

