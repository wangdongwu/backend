Ext.define('XMLifeOperating.model.CustomerUserCashflow', {
    extend: 'Ext.data.Model',
    fields: ['content',
    		 'amount',
    		 'date',
    		 'dealId',
    		 'type'
    		],
});
 
/**
 *  进出资金 负数表示出 正式表示进
 */
//public int amount;

/**
 *  文案
 */
//public String content;

/**
 *  操作时间
 */
//public long date;

/**
 *  订单ID
 */
//public long dealId;

/**
 *  充值记录类型 see ChargeCardRecordConstant
 */
//public String type;