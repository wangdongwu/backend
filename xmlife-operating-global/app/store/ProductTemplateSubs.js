Ext.define('XMLifeOperating.store.ProductTemplateSubs', {
    extend: 'Ext.data.TreeStore',
    model: 'XMLifeOperating.model.ProductTemplateSubs',
    defaultRootId: '',
    autoSync: false,
    autoLoad: false,
    clearOnLoad:true,
    nodeParam: 'parentId',
    proxy: {
    	type:'ajax',
    	url:XMLifeOperating.generic.Global.URL.biz+'producttemplate/subs'
    }
});
