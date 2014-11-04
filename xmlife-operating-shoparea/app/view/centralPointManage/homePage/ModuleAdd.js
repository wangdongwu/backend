Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleAdd', {
    extend: 'Ext.window.Window',
    xtype: 'moduleAdd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建大积木',
    width: 500,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 15,
        style: 'line-height:22px;',
        items: [{
            xtype: 'radiogroup',
            fieldLabel: '选择类型',
            labelWidth: 70,
            allowBlank: false,
            width: '100%',
            columns: 2,
            vertical: true,
            items: [{
                boxLabel: '类型1',
                name: 'type',
                inputValue: 'TYPE1',
                checked: true
            }, {
                boxLabel: '类型2',
                name: 'type',
                inputValue: 'TYPE2',
                renderer: function(){
                    return '<button>fdsafdsafafdafa</button>'
                }
            }, {
                boxLabel: '类型3',
                name: 'type',
                inputValue: 'TYPE3'
            }, {
                boxLabel: '类型4',
                name: 'type',
                inputValue: 'TYPE4'
            }, {
                boxLabel: '类型5',
                name: 'type',
                inputValue: 'TYPE5'
            }, {
                boxLabel: '类型6',
                name: 'type',
                inputValue: 'TYPE6'
            }, {
                boxLabel: '类型7',
                name: 'type',
                inputValue: 'TYPE7'
            }]
        }, {
            xtype: 'radiogroup',
            fieldLabel: '是否为广告',
            labelWidth: 70,
            allowBlank: false,
            defaults: {
                margin: '0 5 0 0'
            },
            items: [{
                boxLabel: '是',
                name: 'isAdvert',
                inputValue: 'true'
            }, {
                boxLabel: '否',
                name: 'isAdvert',
                inputValue: 'false',
                checked: true
            }]
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '大积木名称',
            labelWidth: 70,
            allowBlank: false
        }],
        buttons: [{
            xtype: 'button',
            text: '保存',
            itemId: 'save'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});