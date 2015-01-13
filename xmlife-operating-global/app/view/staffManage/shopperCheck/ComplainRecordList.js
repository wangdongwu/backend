Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ComplainRecordList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.ComplainRecordList',
  xtype : 'ComplainRecordList',
  title: '投诉记录',
  store: 'ComplainRecord',
  dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ComplainRecord',
        dock: 'bottom',
        displayInfo: true
  }],
  columns: [{
    width : 200,
    text: '订单编号',
    dataIndex: 'id'
  }, {
    text: '下单时间',
    dataIndex: 'complaintTime'
  }, {
    text: '投诉原因',
    dataIndex: 'complaintNote'
  }]
});