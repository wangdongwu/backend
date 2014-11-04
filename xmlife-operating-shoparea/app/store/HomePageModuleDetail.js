Ext.define('XMLifeOperating.store.HomePageModuleDetail', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getModuleItems')
	// data: [
	// 	{'id':'10000', 'order':1, 'image':'541432dc03643ef8f885fc61db', 'title':'小美生活', 'url':'http://www.xiaomei.com'},
	// 	{'id':'10001', 'order':2, 'image':'541432dc03643ef8f885fc61db', 'title':'小美生活', 'url':'http://www.xiaomei.com'},
	// 	{'id':'10002', 'order':3, 'image':'541432dc03643ef8f885fc61db', 'title':'小美生活', 'url':'http://www.xiaomei.com'}
	// ],
	// proxy: {
	// 	type: 'memory',
	// 	reader: {
	// 		type: 'json'
	// 	}
	// }
});