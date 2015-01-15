Ext.define('XMLifeOperating.view.staffManage.manager.EditManager', {
    extend: 'Ext.window.Window',
    xtype: 'editManager',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        var genderStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'gender'],
            data: [{
                "value": 0,
                "gender": '男'
            }, {
                "value": 1,
                "gender": '女'
            }],
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '姓名',
                labelWidth: 90,
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'title',
                fieldLabel: '职称',
                labelWidth: 90,
                allowBlank: false,
                minLength: 2,
                minLengthText: '职称最小长度为2',
                maxLength: 10,
                maxLengthText: '职称最大长度为10'
            }, {
                fieldLabel: '性别',
                labelWidth: 90,
                store: genderStore,
                name: 'gender',
                allowBlank: false,
                xtype: 'combo',
                editable: false,
                queryMode: 'local',
                triggerAction: 'all',
                displayField: 'gender',
                valueField: 'value',
                allowBlank: false
            }, {
                xtype: 'fieldset',
                layout: 'column',
                padding: 0,
                border: false,
                items: [{
                    xtype: 'textfield',
                    name: 'avatar',
                    fieldLabel: '上传图片',
                    itemId: 'buyerAvater',
                    labelWidth: 90,
                    readOnly: false
                }, {
                    xtype: 'form',
                    border: false,
                    itemId: 'adf',
                    margin: '0 30 0 0',
                    items: [{
                        xtype: 'filefield',
                        name: 'managerUploadfile',
                        buttonOnly: true,
                        hideLabel: true
                    }]
                }]
            }, {
                xtype: 'textfield',
                name: 'idcard',
                fieldLabel: '身份证',
                labelWidth: 90,
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: '电话',
                labelWidth: 90,
                allowBlank: false,
                regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
                regexText: '请输入正确的手机号码',
                itemId: 'managerPhone'
            }, {
                xtype: 'textfield',
                name: 'pwd',
                fieldLabel: '密码',
                labelWidth: 90,
                allowBlank: false
            }],
            buttons: [{
                text: '保存',
                itemId: 'save-manager-edit-btn'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('editManager')[0].close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
