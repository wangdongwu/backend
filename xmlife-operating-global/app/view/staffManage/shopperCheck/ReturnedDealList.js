Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ReturnedDealList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.ReturnedDealList',
  xtype : 'ReturnedDealList',
  title: '全部退货的订单',
  store: 'ReturnedDeal',
  dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ReturnedDeal',
        dock: 'bottom',
        displayInfo: true
  }],
  columns: [{
    text: '订单编号',
    width : 200,
    dataIndex: 'dealId',
    itemId: 'dealDetail',
    renderer: function(value) {
        return '<a style="color:blue;">' + value + '</a>'
    }
  }, {
    text: '下单时间',
    dataIndex: 'dealTime'
  }, {
    text: '送达时间差距',
    dataIndex: 'timeDiff'
  }, {
    text: '退货数量',
    dataIndex: 'returnCount'
  }, {
    text: '用户评星',
    dataIndex: 'star'
  }, {
    text: '用户反馈',
    dataIndex: 'feedback'
  }]
});