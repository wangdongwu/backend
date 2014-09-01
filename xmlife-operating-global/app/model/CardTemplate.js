var dataProxy = new XMLifeOperating.generic.BaseProxy('cardTemplate');
Ext.define('XMLifeOperating.model.CardTemplate', {
    extend: 'Ext.data.Model',
    fields: ['id','name','type','amount','newAccount','desc'],
    proxy: dataProxy,
});