Ext.define('XMLifeOperating.view.operationManage.refund.tenpayLogin', {
    extend: 'Ext.window.Window',
    xtype: 'tenpayLogin',
    closeAction: 'hide',
    modal: true,
    width: 350,
    height: 150,
    resizable: false,
    layout: 'card',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,

            items: [
                
                {
                    fieldLabel : '用户名',
                    itemId : 'username',
                    xtype : 'textfield',
                    editable : false,
                    mode : 'local',
                    triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'value',
                    queryMode:'local'
                },
                {
                    fieldLabel : '密码',
                    itemId : 'password',
                    xtype : 'textfield',
                    inputType: 'password',
                    editable : false,
                    mode : 'local',
                    triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'value',
                    queryMode:'local'
                }
            ],
            buttons: [
                {
                    text: '登陆',
                    itemId: 'tenpayLoginBt'
                },
                {
                    text: '关闭',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('tenpayLogin')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);
    }

});      
