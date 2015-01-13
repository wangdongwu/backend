Ext.define('XMLifeOperating.view.staffManage.shopperCheck.CancelDealList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.CancelDealList',
  xtype : 'CancelDealList',
  title: '取消的订单',
  store: 'CancelDeal',
  dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'CancelDeal',
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