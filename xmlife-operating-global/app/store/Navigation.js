Ext.define('XMLifeOperating.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model: 'XMLifeOperating.model.Navigation',
    proxy: new XMLifeOperating.generic.BaseProxy('module/getPlatModulesTree?type=Global'),
    defaultRootId: '',
    autoSync: false,
    autoLoad: false,
    root: {
    	expanded: true,
    	children: [
    	// {
    	// 		"id": "managerList",
		   //      "text": "掌柜",
		   //      "platFormName": "Global",
		   //      "platFormType": 0,
		   //      "leaf": true,
		   //      "isAuth": false,
		   //      "notShow": false,
		   //      "children": [],
		   //      "uniqueName": "managerList",
		   //      "inheritLevel": 0,
		   //      "auth": false
    	// },
		]
    }
});
