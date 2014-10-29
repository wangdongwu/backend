Ext.define('XMLifeOperating.view.freightManage.FreightList', {
  extend: 'Ext.grid.Panel',
  id: 'freightList',
  xtype: 'freight',
  alias: 'widget.freightList',
  store: 'SupportedcityGetByCode',
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
      dataIndex: 'deductd',
      renderer:function(value){                          
        if(value == 0){
          return '';
        }
      }
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