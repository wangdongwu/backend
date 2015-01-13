Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ReturnRecordList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.ReturnRecordList',
  xtype : 'ReturnRecordList',
  title: '退货记录',
  store: 'ReturnRecord',
  dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ReturnRecord',
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
    text: '店铺名称',
    dataIndex: 'shopName'
  }, {
    text: '商品名称',
    dataIndex: 'productName'
  }, {
    text: '商品条形码',
    dataIndex: 'barCode'
  }, {
    text: '数量',
    dataIndex: 'count'
  }, {
    text: '进货价',
    dataIndex: 'purchasePrice'
  }, {
    text: '店铺处理',
    dataIndex: 'shopNote'
  }, {
    text: '小计',
    dataIndex: 'allPrice'
  }]
});