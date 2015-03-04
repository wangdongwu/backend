Ext.define('XMLifeOperating.model.Manager', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'name',
        'title',
        'phone',
        'shopNames',
        'areaNames',
        'deals',
        'returnDealNum',
        'goods',
        'mediums',
        'bads',
        'gender',
        'idcard',
        'avatar',
        'uid',
        'pwd',
        'activeTaskNum',
        'isActive',
        'enable'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('manager')
});
