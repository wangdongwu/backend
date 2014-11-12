Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleAdd', {
    extend: 'Ext.window.Window',
    xtype: 'moduleAdd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建大积木',
    width: 650,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 15,
        style: 'line-height:30px;',
        items: [{
            xtype: 'radiogroup',
            fieldLabel: '选择类型',
            labelWidth: 70,
            allowBlank: false,
            width: '100%',
            defaults: {
                style: 'margin:25px 35px 0 0',
            },
            columns: 2,
            vertical: true,
            items: [{
                boxLabel: '类型1：<img src="resources/images/type/1.jpg" height="75" style="float:right; margin-top:-30px;" />',
                name: 'type',
                inputValue: 'TYPE1',
                checked: true
            }, {
                boxLabel: '类型2：<img src="resources/images/type/2.jpg" height="75" style="float:right; margin-top:-30px;" />',
                name: 'type',
                inputValue: 'TYPE2'
            }, {
                boxLabel: '类型3：<img src="resources/images/type/3.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE3'
            }, {
                boxLabel: '类型4：<img src="resources/images/type/4.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE4'
            }, {
                boxLabel: '类型5：<img src="resources/images/type/5.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE5'
            }, {
                boxLabel: '类型6：<img src="resources/images/type/6.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE6'
            }, {
                boxLabel: '类型7：<img src="resources/images/type/7.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE7'
            }, {
                boxLabel: '类型8：<img src="resources/images/type/8.jpg" width="132" height="10" />',
                name: 'type',
                inputValue: 'TYPE8'
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