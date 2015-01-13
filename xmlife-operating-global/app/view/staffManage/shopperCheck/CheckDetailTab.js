Ext.define('XMLifeOperating.view.staffManage.shopperCheck.CheckDetailTab', {
    extend: 'Ext.tab.Panel',
    alias : 'widget.CheckDetailTab',
    xtype : 'CheckDetailTab',
    items: [{
      xtype : 'CompletedDealList'
    },{
      xtype : 'CancelDealList',
    },{
      xtype : 'DirectRefuseDealList'
    },{
      xtype : 'OverTimeRefuseDealList'
    },{
      xtype : 'ReturnedDealList'
    },{
      xtype : 'IssueDealList'
    },{
      xtype : 'ReturnRecordList'
    },{
      xtype : 'ComplainRecordList'
    }],
  });
