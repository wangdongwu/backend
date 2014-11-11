var dataProxy = new XMLifeOperating.generic.BaseProxy('damagedProductApply/applyList');
Ext.define('XMLifeOperating.model.DamagedProductApply', {
    extend: 'Ext.data.Model',
    fields: [
    'applyTime',
    'productName',
    'productId',
    'count',
    'fprice',
    'pprice',
    'dprice',
    'totalPrice',
    'shopId',
    'shopName',
    'reasonCode',
    'shopNames',
    'status',
    'creator',
    'creatorName',
    'auditer',
    'auditerName',
    'areaName'],
    proxy: dataProxy
});
 
        // private long applyTime;//申报时间 long类型
        // private String productName;//商品名称 快照
        // private String productId;//商品ID
        // private int count;//数量 
        // private int fprice;//原价 快照
        // private int pprice;//购买价 快照
        // private int dprice;//折扣价  快照
        // private long totalPrice;//总价 快照
        // private String shopId;//店铺ID
        // private String shopName;//店铺名称 快照
        // private int reasonCode;//理由 前端自己定义code 和 显示文案
        // private int status;//0:提交未审核状态 1:审核通过 2:审核拒绝
        // private String creator;
        // private String creatorName;
        // private String auditer;
        // private String auditerName;
        // private String areaName;
