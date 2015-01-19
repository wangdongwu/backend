Ext.define('XMLifeOperating.view.freightManage.FreightList', {
  extend: 'Ext.grid.Panel',
  id: 'freight',
  xtype: 'freightList',
  alias: 'widget.freight',
  store: 'SupportedcityGetByCode',
  title: '运费管理',
  titleAlign: 'left',
  closable: true,
  // 服务器端存储的精度友好的数字在'SupportedcityGetByCode' model里已经被convert过了
  // 这里的renderer不需要再做位数转换的事情
  columns: [{
    width: 70,
    header: '基本配送费',
    dataIndex: 'initShippingFee'
  }, {
    header: '起送金额',
    width: 60,
    dataIndex: 'minPrice'
  }, {
    header: '满免金额',
    width: 60,
    dataIndex: 'minOrderForFreeShipping',
    renderer: function(value) {
      return (value > 0) ? value : '';
    }
  }, {
    header: '配送距离',
    width: 60,
    dataIndex: 'minDistance',
    renderer: function(value) {
      return (value > 0) ? value : '';
    }
  }, {
    header: '超配送距离追加费',
    width: 110,
    dataIndex: 'shippingFeePerKM',
    renderer: function(value, md, record) {
      return (record.data.minDistance > 0) ? value : '';
    }
  }, {
    text: '操作',
    width: 60,
    itemId: 'setFreight',
    menuDisabled: true,
    align: 'center',
    renderer: function(value, metadata, model, rowIndex, colIndex, store) {
      return '<a class="showAddressDetail">编辑</a>';
    }
  }]
});