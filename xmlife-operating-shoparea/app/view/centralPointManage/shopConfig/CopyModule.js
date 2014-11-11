Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.CopyModule', {
    extend: 'Ext.window.Window',
    xtype: 'CopyModule',
    alias :'widget.CopyModule',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '拷贝积木',
    width: 300,
    buttonAlign: 'center',
    items: [{  
      xtype : 'form',
      items : [{
      xtype : 'combo',
      fieldLabel: '店铺',
      itemId : 'ShopSelect',
      store: 'Shop',
      queryMode: 'local',
      displayField: 'name',
      valueField: 'id',
    },{
      xtype : 'combo',
      fieldLabel: '版本',
      itemId : 'versionSelect',
      store: 'ShopCopyVersion',
      queryMode: 'local',
      displayField: 'version',
      valueField: 'id',
    },{
      xtype : 'combo',
      fieldLabel: '积木',
      name : 'moduleId',
      store: 'ShopCopyModule',
      queryMode: 'local',
      displayField: 'name',
      valueField: 'id',
    }]
    
    }],
    buttons: [{
            xtype: 'button',
            text: '拷贝',
            itemId: 'subCopy'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
});