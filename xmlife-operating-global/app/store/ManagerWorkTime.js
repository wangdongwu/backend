Ext.define('XMLifeOperating.store.ManagerWorkTime', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ManagerWorkTime',
    proxy: new XMLifeOperating.generic.BaseProxy('manager/worktime', 'arrayResult')
});
