var dataProxy = new XMLifeOperating.generic.BaseProxy('feedback');
Ext.define('XMLifeOperating.model.Feedback', {
    extend: 'Ext.data.Model',
    fields: ['name', 'time', 'phone','content','created','mark'],
    proxy: dataProxy,
});