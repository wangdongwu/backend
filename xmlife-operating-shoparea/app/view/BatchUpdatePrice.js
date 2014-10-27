Ext.define('XMLifeOperating.view.BatchUpdatePrice', {
    extend: 'Ext.grid.Panel',
    closable : false,
    id : 'BatchUpdatePrice',
    xtype: 'BatchUpdatePrice',
    alias:  'widget.BatchUpdatePrice',
    autoScroll: true,
    title: '批量修改价格',
    closable : false,
    forceFit: true,
    tbar: [
            {
              xtype : 'form',
              layout: 'column',
              width: '100%',
              bodyStyle: 'padding:8px;background:transparent;border:0;',
              defaults: {
                margin: '5 2'
              },
              items: [{
                columnWidth: 0,
                xtype: 'combobox',
                name: 'shopArea',
                itemId: 'shopArea',
                store: 'ShopArea',
                emptyText: '请选择中心',
                margin: 10,
                editable: false,
                displayField: 'name',
                valueField: 'id',
                hidden: true
                }, {
                columnWidth: 0.2,
                xtype : 'combobox',
                alias : 'ShopSelect',
                name : 'shopId',
                fieldLabel : '选择店铺',
                labelWidth : 62,
                labelAlign: 'right',
                store : 'Shop',
                itemId : 'ShopSelect',
                displayField: 'name',
                valueField: 'id',
                allowBlank: false,
                queryMode:'local'
               }, 
              {
                columnWidth: 0.4,
                xtype : 'filefield',
                name : 'file',
                fieldLabel : '价格Excel文件',
                emptyText: '请选择Excel文件...',
                labelWidth: 100,
                labelAlign: 'right',
                buttonText : '选择文件'
            },{
              xtype: 'button',
              text: '上传',
              name: 'uploadPrice'
            },{
                columnWidth: 0.4,
                xtype: 'filefield',
                name: 'statusfile',
                fieldLabel : '状态Excel文件',
                emptyText: '请选择Excel文件...',
                labelWidth: 100,
                labelAlign: 'right',
                buttonText: '选择文件'
            },
            {
              xtype: 'button',
              text: '上传',
              name: 'uploadStatus'
            },{
                columnWidth: 0.4,
                xtype: 'filefield',
                name: 'stockfile',
                fieldLabel: '库存Excel文件',
                emptyText: '请选择Excel文件...',
                labelWidth: 90,
                labelAlign: 'right',
                buttonText: '选择文件'
            },
            {
              xtype: 'button',
              text: '上传',
              name: 'uploadStock'
            }]
        }
    ],

    columns: [],

    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    }

});