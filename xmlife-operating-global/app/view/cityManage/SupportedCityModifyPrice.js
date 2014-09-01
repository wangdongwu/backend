Ext.define('XMLifeOperating.view.cityManage.SupportedCityModifyPrice',{
	extend : 'Ext.window.Window',
	xtype : 'supportedCityModifyPrice',
    closeAction: 'hide',
	modal: true,
    width: 500,
    height: 350,
    resizable: false,
    layout: 'card',
    initComponent : function(){
    	this.items = [
    		{
    			xtype : 'button',
    			text : '修改'
    		}
    	]
    }
})