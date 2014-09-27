Ext.define('XMLifeOperating.view.refundManage.balanceRefund.BalanceRefundList', {
    extend: 'Ext.grid.Panel',
    xtype: 'balanceRefundList',
    store: 'BalanceRefund',
    id: 'balanceRefundList',
    autoScroll: true,
    title : '余额退款列表',
    titleAlign : 'left',
    closable : true,
    forceFit: true,
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    requires:[
            'Ext.panel.Panel',
    		'Ext.grid.*',
			'Ext.data.*',
			'Ext.ux.RowExpander',
			'Ext.selection.CheckboxModel'],
    tbar :[
	    	'查询范围',
	    	{
	    		xtype : 'datefield',
	    		name : 'beginTime',
	    		emptyText : '开始时间',
	    		maxValue: new Date(),
	    		value: new Date(),
	    		format : 'Y-m-d'
	    	},
	    	'到',
	    	{
				xtype : 'datefield',
	    		name : 'endTime',
	    		emptyText : '结束时间',
	    		maxValue: new Date(),
	    		value: new Date(),
	    		format : 'Y-m-d'
	    	},
	    	{
	    		xtype : 'button',
	    		name : 'today',
	    		text : '今天',
	    		style : {
	    			border:'1px solid #99bce8'
	    		}

	    	},
	    	{
	    		xtype : 'button',
	    		name : 'yesterday',
	    		text : '昨天',
	    		style : {
	    			border:'1px solid #99bce8'
	    		}
	    	},
	    	{
	    		xtype : 'button',
	    		name :'oldSevenDay',
	    		text : '最近7天',
	    		style : {
	    			border:'1px solid #99bce8'
	    		}

	    	},
	    	{
	    		xtype : 'button',
	    		name :'oldMonth',
	    		style : {
	    			border:'1px solid #99bce8'
	    		},
	    		text : '最近30天'	
	    	},{
         	 	xtype : 'combo',
          		name : 'status',
          		itemId : 'statusCombo',
          		queryMode: 'local',
          		triggerAction : 'all',
          		emptyText : '待处理',
          		displayField: 'type',
          		width : 120,
          		margin : '0 5 0 5',
          		valueField: 'value',
          		
          		store : Ext.create('Ext.data.Store', {
                    fields: ['value','type'],
                    data : [
                        {"value": '0', "type": '待处理'},
                        {"value": '1-4', "type": '已处理'},
                    ],
                })
        	},
	    	/*'->',
	    	{
	    		xtype : 'textfield',
	    		emptyText : '请输入订单号或手机号',
	    		name : 'mobileSearch',
	    		allowBlank: false,
	    		margin : '0 5 0 5',
	    		
	    	},
	    	{
				xtype : 'button',
	    		name :'searchDeal',
	    		style : {
	    			border:'1px solid #99bce8'
	    		},
	    		text : '搜索订单'	

	    	}*/
    ],
    dockedItems : [{
        xtype : 'toolbar',
        dock : 'bottom',
        itemId:'manualHandingId',
        items : [
        '->',
            {
                xtype : 'button',
                name :'markRead',
                text : '标记为人工处理',
                style:{
                    border:'1px solid #99bce8'
                }
            }]
    },
    {
        xtype : 'toolbar',
        dock : 'bottom',
        itemId: 'refundFailureId',
        items : [
        '->',
            {
                xtype : 'button',
                name :'markRead',
                text : '标记为人工处理',
                style:{
                    border:'1px solid #99bce8'
                }
            },
            /*{
                xtype : 'button',
                name :'',
                text : '重新发起退款',
                align : 'right',
                style:{
                    border:'1px solid #99bce8'
                }
            }*/]
    },
    {
        xtype : 'toolbar',
        dock : 'bottom',
        itemId:'pengdingId',
        items : [
        '->',
            {
                xtype : 'button',
                name :'disAgreeRefund',
                text : '拒绝退款',
                style:{
                    border:'1px solid #99bce8'
                }
            },
        {
                xtype : 'button',
                name :'agreeRefund',
                text : '同意退款',
                align : 'right',
                style:{
                    border:'1px solid #99bce8'
                }
            }]
    },{
        xtype : 'toolbar',
        dock : 'bottom',
        style : {
            borderBottomWidth : '1px',          
            borderColor: 'silver',
            borderStyle: 'solid'
        },
        itemId:'checkAllId',
        items : [
            {
            xtype : 'button',
            name :'allSelect',
            text : '全选',
            style:{
                border:'1px solid #99bce8'
            }
        },
        {
            xtype : 'button',
            name :'reverseAllSelect',
            text : '全选取消选择',
            style:{
                border:'1px solid #99bce8'
            }
        },
        {
            xtype : 'button',
            name :'reverseSelect',
            text : '反向选择',
            style:{
                border:'1px solid #99bce8'
            }
        }]
    },{
        xtype : 'pagingtoolbar',
        itemId : 'pagetoll',
        store : 'BalanceRefund',
        dock : 'bottom',
        displayInfo : true/*,
        items : ['->'],   
        prependButtons: true*/
    },{
        xtype : 'toolbar',
        dock : 'bottom',
        itemId: 'manualHandingIntrId',
        style : {
            borderBottomWidth : '1px',          
            borderColor: 'silver',
            borderStyle: 'solid'
        },
        items : [
            {
                text:'说明：代入转发：因为对方账号有问题，导致不能退款成功。需要我方直接联系用户，通过其他方式进行退款;',
                xtype:'label',
            },
            {
                text:'退款失败：微信退款失败，需要人为处理',
                xtype:'label',
            }
        ]
    },{
        xtype : 'toolbar',
        dock : 'bottom',
        itemId:'handledId',
        style : {
            borderBottomWidth : '1px',          
            borderColor: 'silver',
            borderStyle: 'solid'
        },
        items : [
            {
                text:'说明：退款成功1：微信退款已经确认成功;',
                xtype:'label',
            },
            {
                text:'退款成功2：微信退款处理中，但最终能成功',
                xtype:'label',
            }
        ]
    }],
    columns: [
        {
            xtype: 'rownumberer'
        },{
            text: '用户上报时间',
            dataIndex: 'createTime',
            width: 100,
            sortable: false,
            align: 'left',
        }, {
            text: '我方处理时间',
            dataIndex: 'auditTime',
            width: 60,
            sortable: false,
            align: 'left'
        },{
            text: '退款金额',
            dataIndex: 'amount',
            width: 100,
            sortable: false,
            align: 'left',
            renderer : function(value){
                    return value / 100;
                }
        }, {
            text: '处理状态',
            dataIndex: 'status',
            width: 100,
            sortable: false,
            align: 'left',
            renderer : function(v){
                var data = {
                    '0' : '待处理',
                    '1' : '已处理',
                    '2' : '处理中',
                    '5' : '人工处理',
                    '4' : '拒绝退款'
                }
                return data[v];
            }
        }, {
            text: '订单编号',
            dataIndex: 'shortId',
            width: 50,
            sortable: false,
            align: 'left',
            itemId: 'dealDetailRefund',
            renderer:function(v){
                return '<a href="javascript:void(0)" style="text-decoration:none;">'+v+'</a>';
            }
        }, {
            text: '用户昵称',
            dataIndex: 'userName',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '用户电话',
            dataIndex: 'userPhone',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '订单金额',
            dataIndex: 'dealPrice',
            width: 50,
            sortable: false,
            align: 'left',
            renderer : function(value){
                return value / 100;
            }
        }, {
            text: '三方反馈时间',
            dataIndex: 'onThirdFeedBack',
            width: 50,
            sortable: false,
            align: 'left'
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }

});