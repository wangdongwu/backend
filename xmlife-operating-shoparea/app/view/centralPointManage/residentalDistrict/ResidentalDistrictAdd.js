Ext.define('XMLifeOperating.view.centralPointManage.residentalDistrict.ResidentalDistrictAdd', {
    extend: 'Ext.window.Window',
    xtype: 'residentaldistrictadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 350,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            
            defaults: {
                anchor: '100%'
            },
            items: [

                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '小区名',
                    labelWidth: 90,
                    allowBlank: false,
                }, {
                    xtype: 'textfield',
                    name: 'lng',
                    fieldLabel: '经度',
                    labelWidth: 90,
                    allowBlank: false,
                    regex: /^-?((\d|[1-9]\d|1[0-7]\d)(\.)([0-9]{0,8})|(\d|[1-9]\d|1[0-7]\d))$/,
                    regexText: '请输入正确的经度大于-180小于等于180',
                }, {
                    xtype: 'textfield',
                    name: 'lat',
                    fieldLabel: '纬度',
                    labelWidth: 90,
                    allowBlank: false,
                    regex: /^-?((\d|[1-9]\d|1[0-7]\d)(\.)([0-9]{0,8})|(\d|[1-9]\d|1[0-7]\d))$/,
                    regexText: '请输入正确的经度大于-180小于等于180',
                }, {
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: '地址',
                    labelWidth: 90,
                    allowBlank: false,
                },

            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-community'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('residentaldistrictadd')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});