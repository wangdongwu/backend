Ext.define('XMLifeOperating.view.cityManage.SupportedCityAdd', {
    extend: 'Ext.window.Window',
    xtype: 'supportedCityAdd',
    closeAction: 'hide',
    width: 500,
    height: 350,
    resizable: false,
    layout: 'card',
    initComponent: function() {
        var statueStore = Ext.create('Ext.data.Store', {
            fields: ['value','name'],
            data : [
                {"value": 1, "name":"开放"} ,
                {"value": 0, "name":"筹备"}
            ],
            autoload: true
        });

        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                {

				    fieldLabel : '省份',
                    store : 'Province',
					name : 'cpro',
					allowBlank : false,
                    blankText: '请选择省份',
					xtype : 'combo',
					editable : false,
					mode : 'local',
					triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'code',
                    queryMode:'local'
				},
                {
                    fieldLabel : '城市',
                    name : 'ccity',
                    store : 'AllCities',
                    itemId: 'cmbCity',
                    blankText: '请选择城市',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    mode : 'local',
                    triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'code',
                    queryMode:'local',
                    emptyText: "请先选择省份"
                },
                // {
                //     fieldLabel : '状态',
                //     value : 1,
                //     name : 'cstatue',
                //     store : statueStore,
                //     hiddenName: 'name',
                //     xtype : 'combo',
                //     editable : false,
                //     mode : 'local',
                //     triggerAction : 'all',
                //     displayField: 'name',
                //     valueField: 'value',
                //     queryMode:'local'
                // },
                {
                    fieldLabel : '运费',
                    value : 10,
                    name : 'logisticsPrice',
                    xtype : 'textfield',
                    editable : false,
                    mode : 'local',
                    triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'value',
                    queryMode:'local'
                },
                {
                    fieldLabel : '满免运费',
                    width : 180,
                    value : 100,
                    name : 'deductdPrice',
                    xtype : 'textfield',
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
                    text: '关闭',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('supportedCityAdd')[0].close();
                    }
                },
                {
                    text: '添加',
                    itemId: 'save-city-add-btn'
                }
            ]
        }]

        this.callParent(arguments);
    }

});      
