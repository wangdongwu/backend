Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.AddModule', {
    extend: 'Ext.window.Window',
    xtype: 'AddModule',
    alias :'widget.AddModule',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建大积木',
    width: 700,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        layout: 'vbox',
        url : XMLifeOperating.generic.Global.URL.biz+'shopHomepage/createModule',
        bodyPadding: 8,
        defaults : {
          labelWidth: 70
        },
        style: 'line-height:22px;',
        items: [{
            xtype: 'radiogroup',
            itemId :'moduleTypeRadio',
            fieldLabel: '选择类型',
            allowBlank: false,
            width: '100%',
            columns: 3,
            items: [{
                boxLabel: '<img src="resources/images/type/1.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE1',
                checked: true
            }, {
                boxLabel: '<img src="resources/images/type/2.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE2'
            }, {
                boxLabel: '<img src="resources/images/type/3.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE3'
            }, {
                boxLabel: '<img src="resources/images/type/4.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE4'
            }, {
                boxLabel: '<img src="resources/images/type/5.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE5'
            }, {
                boxLabel: '<img src="resources/images/type/6.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE6'
            }, {
                boxLabel: '<img src="resources/images/type/7.jpg" height="60" width="135" />',
                name: 'type',
                inputValue: 'TYPE7'
            }]
        }, {
            xtype: 'radiogroup',
            fieldLabel: '是否为广告',
            allowBlank: false,
            defaults: {
                margin: '0 5 0 0'
            },
            items: [{
                boxLabel: '是',
                name: 'isAdvert',
                inputValue: 'true',
                checked: true
            }, {
                boxLabel: '否',
                name: 'isAdvert',
                inputValue: 'false'
            }]
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '大积木名称',
            allowBlank: false
        },
        {
            xtype: 'combo',
            itemId : 'position',
            name: 'position',
            fieldLabel: '位置',
            store: '',
            queryMode: 'local',
            displayField: '',
            valueField: '',
            emptyText: '请选择位置',
            allowBlank: false
        },
        {
          xtype : 'fieldcontainer',
          hidden : true,
          fieldLabel: '添加小积木',
          labelAlign  : 'top',
          padding : '5 0',
          layout: 'fit',
          itemId : 'moduleCon'
        }
        ],
        buttons: [{
            xtype: 'button',
            text: '保存',
            itemId: 'subModule'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});