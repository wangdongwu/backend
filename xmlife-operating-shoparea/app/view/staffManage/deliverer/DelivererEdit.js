Ext.define('XMLifeOperating.view.staffManage.deliverer.GDelivererEdit', {
    extend: 'Ext.window.Window',
    xtype: 'gDelivererEdit',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel'
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 550,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        var  genderStore= Ext.create('Ext.data.Store', {
            fields: ['value','gender'],
            data : [
                {"value": 0, "gender": '男'},
                {"value": 1, "gender": '女'}
            ],
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '姓名',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'姓名最小长度为2',
                    maxLength: 10,
                    maxLengthText:'姓名最大长度为10',
                },
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: '职称',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'职称最小长度为2',
                    maxLength: 10,
                    maxLengthText:'职称最大长度为10',
                },
               {
                    fieldLabel : '性别',
                    labelWidth: 90,
                    store : genderStore,
                    name : 'gender',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'gender',
                    valueField: 'value',
                    allowBlank:false                  
                },
                {
                    xtype: 'fieldset',
                    layout: 'column',
                    padding: 0,
                    border: false,
                    items:[
                        {
                            xtype: 'textfield',
                            name: 'avatar',
                            fieldLabel: '上传图片',
                            itemId:'courierAvater',
                            labelWidth: 90,
                            
                            readOnly: false,
                        },
                        {
                            xtype: 'form',
                            border: false,
                            itemId:'adf',
                            margin: '0 30 0 0',
                            items:[
                                {
                                    xtype: 'filefield',
                                    name: 'delivererUploadfile',
                                    buttonOnly: true,
                                    hideLabel: true,
                                },
                            ]
                        },
                    ]
                },
                {
                    xtype: 'textfield',
                    name: 'idcard',
                    fieldLabel: '身份证',
                    labelWidth: 90,
                    allowBlank:false,
                    
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: '电话',
                    labelWidth: 90,
                    allowBlank:false,
                   
                },
                {
                    xtype: 'textfield',
                    name: 'pwd',
                    fieldLabel: '密码',
                    labelWidth: 90,
                    allowBlank:false,
                   
                },
                /*{
                    name: 'areaIds',
                    store:'BusinessArea',
                    fieldLabel: '中心名称',
                    xtype:'gridpanel',
                    itemId:'businessAreaScid',
                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                    columns:[
                        {
                            text:'id',
                            dataIndex:'id'
                        },
                        {
                            text:'中心名称',
                            dataIndex:'name'
                        }
                    ],
                },*/
                {
                    xtype: 'timefield',
                    name: 'onlineTime',
                    fieldLabel: '开始时间',
                    labelWidth: 90,
                    format:'H:i',
                    allowBlank:false,
                    
                },
                {
                    xtype: 'timefield',
                    name: 'offlineTime',
                    fieldLabel: '结束时间',
                    labelWidth: 90,
                    format:'H:i',
                    allowBlank:false,

                },
                
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-deliverer-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('gDelivererEdit')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});