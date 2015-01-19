Ext.define('XMLifeOperating.view.rechargeableCardManage.onlineCard.CardDetail', {
    extend: 'Ext.window.Window',
    id: 'CardDetail',
    xtype: 'CardDetail',
    alias: 'widget.CardDetail',
    title: '充值卡详情',
    closeAction: 'destroy',
    modal: true,
    width: 500,
    maxHeight: 450,
    autoScroll: true,
    resizable: false,
    bodyPadding: '10 20',
    
    tpl: '<div style="line-height:25px;">' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">名字:</span><span style="display:block;width:75%;float:left;">{batchName}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">批次号:</span><span style="display:block;width:75%;float:left;">{id}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">短描述:</span><span style="display:block;width:75%;float:left;">{simpleDesc}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">长描述:</span><span style="display:block;width:75%;float:left;">{desc}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">售价:</span><span style="display:block;width:75%;float:left;">{soldPrice}元</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">生成日:</span><span style="display:block;width:75%;float:left;">{create}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">开始展示:</span><span style="display:block;width:75%;float:left;">{displayStartTime}至<span <tpl if="disRed">style="color:red"</tpl>>{displayEndTime}</span></span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">有效日期:</span><span style="display:block;width:75%;float:left;">{startTime}至<span <tpl if="endRed">style="color:red"</tpl>>{endTime}</span></span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">已售数量:</span><span style="display:block;width:75%;float:left;">{total}张</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">模板:</span><span style="display:block;width:75%;float:left;">{tname}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">类型:</span><span style="display:block;width:75%;float:left;">{type}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">模板编号:</span><span style="display:block;width:75%;float:left;">{tid}</span></p>' +
        '<tpl if="rule != null">' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">即时到账:</span><span style="display:block;width:75%;float:left;">{rule.immediatelyAmount}元</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">返还金额:</span><span style="display:block;width:75%;float:left;">{rule.batchAmount}元</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">返还次数:</span><span style="display:block;width:75%;float:left;">{rule.count}次</span></p>' +
        '</tpl>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">是否新手卡:</span><span style="display:block;width:75%;float:left;">{newAccount}</span></p>' +
        '<p style="clear:both;"><span style="width:20%;margin-right:10px;float:left;text-align:right">状态:</span><span style="display:block;width:75%;float:left;">{status}</span></p>' +
        '</div>',
    buttons: [{
        text: '编辑',
        itemId: 'edit'
    }, {
        itemId: 'hander'
    }]
});
