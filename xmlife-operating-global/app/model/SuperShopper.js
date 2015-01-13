Ext.define('XMLifeOperating.model.SuperShopper', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','title','phone','shopNames','areaNames','deals','returnDealNum','goods','mediums','bads','gender','onlineTime','offlineTime','idcard','avatar','uid','pwd','activeTaskNum','isActive'],
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper'),
});