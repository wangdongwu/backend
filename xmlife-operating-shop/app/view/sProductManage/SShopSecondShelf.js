 Ext.define('XMLifeOperating.view.sProductManage.SShopSecondShelf', {
     extend: 'Ext.grid.Panel',
     closable: false,
     xtype: 'sShopSecondShelf',
     header: false,
     itemId: 'sShopSecondShelf',
     store: 'CategorySubs',
     columns: [{
         xtype: 'rownumberer'
     }, {
         text: 'id',
         dataIndex: 'id'
     }, /*{
         text: 'shopId',
         dataIndex: 'shopId'
     }, */{
         text: '货架名称',
         dataIndex: 'name'
     }, {
         text: '是否有次级货架',
         dataIndex: 'leaf',
         align: 'center',
         renderer: function(value, metadata, model, rowIndex, colIndex, store) {
             if (value) {
                 return '无';
             }
             return '有';
         }
     }/*, {
         text: '编辑',
         xtype: 'actioncolumn',
         width: 50,
         icon: 'resources/images/edit.png',
         tooltip: 'Edit',
         menuDisabled: true,
         sortable: true,
         itemId: 'openModifySecondShelvesWin',
     }*/],
     dockedItems: [{
         xtype: 'toolbar',
         dock: 'top',
         style: {
             border: 'none'
         },
         items: [/*{
             text: '添加货架',
             itemId: 'openCreateSecondShelvesWin'
         }, {
             xtype: 'button',
             text: '保存排序',
             itemId: 'saveShelvesOrder'
         }*/]
     }, {
         xtype: 'toolbar',
         dock: 'bottom',
         items: [{
             xtype: 'pagingtoolbar',
             itemId: 'pagetool',
             store: 'CategorySubs',
             displayInfo: true,
             style: 'border:none'
         }]
     }],
     viewConfig: {
         plugins: {
             ptype: 'gridviewdragdrop',
             dragText: 'Drag and drop to reorder'
         }
     }
 });