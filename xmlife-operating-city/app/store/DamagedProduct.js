Ext.define('XMLifeOperating.store.DamagedProduct', {
  extend: 'Ext.data.Store',
  storeId:'DamagedProduct',
  model:'XMLifeOperating.model.DamagedProduct',
  proxy: new XMLifeOperating.generic.BaseProxy('damagedProductApply/auditList', 'result')
});
