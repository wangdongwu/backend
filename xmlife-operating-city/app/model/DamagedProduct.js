Ext.define('XMLifeOperating.model.DamagedProduct', {
	extend: 'Ext.data.Model',
	//  private int status;//0:提交未审核状态 1:审核通过 2:审核拒绝
	fields: ['id', 'applyTime', 'productName', 'productId', 'count', 'fprice', 'pprice', 'dprice', 'totalPrice', 'shopId', 'shopName', 'reasonCode', 'status', 'areaName', 'dealId', 'loseCount', 'pkgCount', 'pkgName', 'source', 'creatorName', 'creator']
});
//pkgCount; //量贩数量
//pkgName; //量贩模板名称
//source;  source="m" 掌柜退货 source="b" 手动添加
//creator; 掌柜id