Ext.define('XMLifeOperating.view.centralPointManage.residentalDistrict.ResidentalDistrictAdd', {
    extend: 'Ext.window.Window',
    xtype: 'residentaldistrictadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 250,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 15,
            frame: true,
            border: false,
            defaults: {
                anchor: '95%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '小区名',
                    labelWidth: 60,
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'lng',
                    fieldLabel: '经度',
                    labelWidth: 60,
                    allowBlank: false,
                    regex: /^-?((\d|[1-9]\d|1[0-7]\d)(\.)([0-9]{0,8})|(\d|[1-9]\d|1[0-7]\d))$/,
                    regexText: '请输入正确的经度大于-180小于等于180'
                }, {
                    xtype: 'textfield',
                    name: 'lat',
                    fieldLabel: '纬度',
                    labelWidth: 60,
                    allowBlank: false,
                    regex: /^-?((\d|[1-9]\d|1[0-7]\d)(\.)([0-9]{0,8})|(\d|[1-9]\d|1[0-7]\d))$/,
                    regexText: '请输入正确的经度大于-180小于等于180'
                }, {
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: '地址',
                    labelWidth: 60,
                    allowBlank: false
                }
            ],
            buttons: [{
                text: '保存',
                itemId: 'save-community'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('residentaldistrictadd')[0].close();
                }
            }]
        }];

        this.callParent(arguments);
    }

});