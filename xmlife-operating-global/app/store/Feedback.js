Ext.define('XMLifeOperating.store.Feedback', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Feedback',
    
    proxy : new XMLifeOperating.generic.BaseProxy('feedback','result')
});
 