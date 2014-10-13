Ext.define('XMLifeOperating.view.freightManage.freightList', {
  extend: 'Ext.grid.Panel',
  id: 'freightList',
  xtype: 'freightList',
  alias: 'widget.freightList',
  store: 'SupportedCitySetShipfee',
  title: '运费管理',
  titleAlign: 'left',
  closable: true,
  columns: [{
      width: 60,
      header: '运费',
      
      dataIndex: 'shipfee'
    }, {
      header: '满免',
      width:100,
      dataIndex: 'deductd'
    }, {
        text: '操作',
        width: 100,
        itemId: 'setFreight',
        menuDisabled: true,
        align: 'center',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return '<a class="showAddressDetail">编辑</a>';
        }
    },
  ]
});