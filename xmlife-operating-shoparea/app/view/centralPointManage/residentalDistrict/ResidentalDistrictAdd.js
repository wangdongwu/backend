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
                }, {
                    fieldLabel : '小区类型',
                    labelWidth: 60,
                    itemId:'typeId',
                    name : 'type',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'type',
                    valueField: 'value',
                    emptyText:'请选择小区类型',
                    allowBlank:false,
                    store : Ext.create('Ext.data.Store', {
                        fields: ['value','type'],
                        data : [
                            {"value": 0, "type": '住宅小区'},
                            {"value": 1, "type": '写字楼'},
                            {"value": 2, "type": '酒店'},
                            {"value": 3, "type": '医院'}
                        ],
                    })                
                },
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