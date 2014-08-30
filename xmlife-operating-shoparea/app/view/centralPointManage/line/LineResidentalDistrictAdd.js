Ext.define('XMLifeOperating.view.centralPointManage.line.LineResidentalDistrictAdd', {
    extend: 'Ext.window.Window',
    xtype: 'lineresidentaldistrictadd',
    
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
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'hidden',
                    name: 'id',
                    id:'shopId',
                    fieldLabel: 'shopId',
                    labelWidth: 90,
                    allowBlank:false,
                },
                {
                    xtype: 'displayfield',
                    name: 'name',
                    fieldLabel: '线路名称',
                    labelWidth: 90,
                    allowBlank:false,
                    labelAlign:'center'
                },
                /*{
                    xtype: 'textfield',
                    name: 'uid',
                    id:'shopperuid',
                    fieldLabel: '绑定',
                    labelWidth: 90,
                    allowBlank:false,
                },
                {
                    name: 'shopperIds',
                    store:'Buyer',
                    fieldLabel: '买手',
                    xtype:'gridpanel',
                    itemId:'bindCommunityWithLine',
                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                    columns:[
                        {
                            text:'uid',
                            dataIndex:'uid'
                        },
                        {
                            text:'姓名',
                            dataIndex:'name'
                        }
                    ],
                },*/
                {
                    xtype:'fieldset',
                    labelWidth: 90,
                    border:false,
                    padding:0,
                    items:[
                        
                        {
                            layout:'column',
                            xtype:'fieldset',
                            border:false,
                            padding:0,
                            items:[
                                {
                                    xtype:'textfield',
                                    fieldLabel:'小区名称',
                                    labelWidth: 90,
                                    labelAlign:'left',
                                    name:'keywordCommunity',
                                    itemId: 'keywordCommunity',
                                },
                                {
                                    xtype:'button',
                                    text:'搜索',
                                    itemId:'reseachCommunity'
                                    
                                }
                            ]
                            
                        },
                    ]   
                },
                {
                    name: 'searchCommunityIds',
                    store:'CommunitySearch',
                    allowBlank: false,
                    fieldLabel: '小区',
                    xtype:'gridpanel',
                    itemId:'searchCommunityId',
                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                    columns:[
                        {
                            text:'id',
                            dataIndex:'id'
                        },
                        {
                            text:'小区名称',
                            dataIndex:'name'
                        }
                    ],
                },
                {
                    name: 'oldCommunityIds',
                    store:'Community',
                    fieldLabel: '已绑定小区',
                    xtype:'gridpanel',
                    itemId:'oldCommunityId',
                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                    columns:[
                        {
                            text:'id',
                            dataIndex:'id'
                        },
                        {
                            text:'已绑定小区名称',
                            dataIndex:'name'
                        }
                    ],
                },
                
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-bindLineWithCommunity'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('addCommunityWin')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});

