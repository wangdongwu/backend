/**
 * Created by wangdongwu on 14-9-23.
 */
Ext.define('XMLifeOperating.view.authorityManage.AuthorityTabPanel',{
    extend : 'Ext.tab.Panel',
    layout : 'fit',
    closable : true,
    alias : 'widget.AuthorityTabPanel',
    xtype : 'AuthorityTabPanel',
    id : 'AuthorityTabPanel',
    autoScroll: true,
    title : '权限管理',
    //plain: true,
    tabPosition: 'left',
    initComponent : function(){
      this.items = [
      {
        xtype : 'GlobalAccountManage'
      },{
        xtype : 'CityAccountManage'
      }
    ];
    this.callParent(arguments);
    }
    

})