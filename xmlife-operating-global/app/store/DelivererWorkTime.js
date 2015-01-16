Ext.define('XMLifeOperating.store.DelivererWorkTime', {
    extend: 'Ext.data.Store',
<<<<<<< HEAD
    model: 'XMLifeOperating.model.DelivererWorkTime',
    proxy: new XMLifeOperating.generic.BaseProxy('deliverer/worktime', 'arrayResult')
=======
    model:'XMLifeOperating.model.DelivererWorkTime',
    
    proxy : new XMLifeOperating.generic.BaseProxy('deliverer/worktime','result')
>>>>>>> 退货申请页面接口调试
});