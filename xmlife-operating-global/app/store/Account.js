/**
 * @class XMLifeOperating.data.Account
 * @extends extendsClass
 * Description
 */
Ext.define('XMLifeOperating.store.Account', {
    extend: 'Ext.data.Store',
    model : 'XMLifeOperating.model.Account',
    proxy : new XMLifeOperating.generic.BaseProxy('admin/list','result')
});