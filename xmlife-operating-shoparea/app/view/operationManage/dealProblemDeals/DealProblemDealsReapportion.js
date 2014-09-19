Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsReapportion', {
    extend: 'Ext.window.Window',
    xtype: 'reapportion',
    
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
                    name: 'id',
                    fieldLabel: '订单号',
                    allowBlank:false,
                    labelAlign:'left'
                },
				{
                    xtype: 'displayfield',
                    name: 'created',
                    fieldLabel: '下单时间',
                    allowBlank:false,
            		labelAlign: 'left', 
            		renderer:function(value){
                	var newTime = new Date(parseInt(value));
               	 	newTime = newTime.getHours()+':'+newTime.getMinutes();
               		return newTime;
            		}                 
             	},
                {
                    xtype: 'displayfield',
                    name: 'deliverTime',
                    fieldLabel: '期望送达时间',
                    allowBlank:false,
                    labelAlign:'left',
                    renderer: function(value) {
                        var newTime = new Date(value);
                        newTime = (newTime.getMonth()+1)+'-'+newTime.getDate() +' '+ newTime.getHours() + ':' + newTime.getMinutes();
                        return newTime;
                    }   
                },
                {
                    xtype: 'displayfield',
                    name: 'customerName',
                    fieldLabel: '顾客',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'customerPhone',
                    fieldLabel: '顾客电话',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'dtoAddress',
                    fieldLabel: '送货地址',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    name: 'dealTasks',
                    store:'DealTasks',
                    fieldLabel: '订单',
                    xtype:'gridpanel',
                    itemId:'dealTasks',
                    height:150,
                    columns:[
                        {
                            text:'订单号',
                            width: 150,
                            dataIndex:'id'
                        },
                        {
                            text:'店铺',
                            dataIndex:'shopName'
                        },
                        {
                            text:'分配买手',
                            dataIndex:'shopperName'
                        },
                        {
                            text:'买手电话',
                            dataIndex:'shopperPhone'
                        },
                        {
                            text: '问题原因',
                            dataIndex: 'problem',
                            width: 60,
                            renderer:function(value){
                                //return value;
                                console.log(value);
                                switch(value){
                                    case 0:
                                        return '正常单';
                                        break;
                                    case 1:
                                        return '买手超时';
                                        break;
                                    case 2:
                                        return '未上班';
                                        break;
                                    case 3:
                                        return '未分配';
                                        break;
                                    case 4:
                                        return '配送超时';
                                        break;
                                    default:
                                        return '正常单';
                                }
                            }
                        },
                        {
                            text: '操作',
                            sortable: false,
                            align: 'center',
                            itemId: 'reapportionShopper',
                            renderer: function (value) {
                                return Ext.String.format('<a>重新分配</a>', value, value);
                            }
                        },
                    ],
                },
               
                {
                    xtype:'fieldset',
                    labelWidth: 400,
                    border:false,
                    labelAlign:'left',
                    bodyPadding:0,
                    items:[
                        {
                            layout:'column',
                            xtype:'fieldset',
                            border:false,
                            padding:10,
                            items:[
                                {
                                    xtype:'displayfield',
                                    fieldLabel:'配送员名字',
                                    labelWidth: 100,
                                    name:'delivererName',
                                },
                                {
                                    xtype:'displayfield',
                                    fieldLabel:'线路',
                                    labelWidth: 100,
                                    Padding:20,
                                    name:'zoneName',
                                },
                                {
                                    xtype:'label',
                                    width: 80,
                                    bodyPadding:20,
                                    itemId: 'reapportionDeliverer',
                                    html:'<a>重新分配</a>',
                                    listeners : {
                                        render : function(c) {
                                            c.getEl().on('click', function(){ this.fireEvent('click', c); }, c);
                                        }
                                    }
                                },
                            ]
                            
                        },
                    ]   
                },
                
            ],
        }]

        this.callParent(arguments);

    }

        
});

