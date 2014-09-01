var dataProxy = new XMLifeOperating.generic.BaseProxy('shopper');
Ext.define('XMLifeOperating.model.Shopper', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','title','phone','shopNames','areaNames','deals','returnDealNum','goods','mediums','bads','gender','onlineTime','offlineTime','idcard','avatar','uid','pwd','activeTaskNum','isActive'],
    proxy: dataProxy,
});