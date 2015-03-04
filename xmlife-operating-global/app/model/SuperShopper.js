Ext.define('XMLifeOperating.model.SuperShopper', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'name', 'title', 'phone', 'shopNames', 'areaNames', 'totalDeals',
        'returnDealNum', 'goods', 'mediums', 'bads', 'gender', 'onlineTime', 'offlineTime',
        'idcard', 'avatar', 'uid', 'pwd', 'activeTaskNum', 'isActive','enable'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper')
});
