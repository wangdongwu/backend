Ext.define('XMLifeSeller.view.Header', {
    extend: 'Ext.Toolbar',
    xtype: 'header',
    config: {
    	title: '商铺名称',
        items: [{
        	xtype: 'title',
        	title: '小美生活商家端 v1.0'
        },{
        	xtype: 'button',
        	text: '登录/退出',
        	docked: 'right'
        }]
    }
});