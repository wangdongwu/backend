/**
 * @class SimpleTasks.view.Toolbar
 * @extends Ext.toolbar.Toolbar
 */
Ext.define('XMLifeOperating.view.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'headerToolbar',
    requires: [
        'Ext.form.Label',
        'Ext.form.field.ComboBox'
    ],
    cls : 'topHeadToolbar',
    items: [
        {
            xtype : 'image',
            src : '/resources/images/logo.png',
            itemId : 'myTestImg',
            style: {
                marginLeft: '10px',
                height : '33px'
            }
        }
        , 
        {
            xtype: 'label',
            itemId: 'txtModuleTitle',
            margin: '0 20 0 20'
        },
        '->',
        {
            xtype: 'combo',
            itemId: 'cmbGlobalCity',
            store: 'AssignedCity',
            fieldLabel: '城市',
            autoSelect: true,
            labelWidth: 30,
            maxWitdh: 60,
            queryMode: 'local',
            editable: false,
            mode: 'local',
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'code',
            value: XMLifeOperating.generic.Global.currentCity,
            tooltip: 'Choose current city'
        },
        {
            xtype: 'combobox',
            itemId: 'cmbGlobalCenter',
            store: 'ShopArea',
            fieldLabel: '中心',
            labelWidth: 30,
            editable: false,
            maxWitdh: 60,
            displayField: 'name',
            valueField: 'id',
            tooltip: 'Choose current center',
            queryMode:'local',
            hidden:(XMLifeOperating.generic.Global.operating_type != 'center')
        },
        '-',
        {
            text: 'admin',
            itemId: 'txtUserName',
            margin: '0 10 0 10',
            menu: {
                items: [
                    {
                        text: '修改密码'
                        // iconCls: 'tasks-new'
                    },
                    '-',
                    {
                        text: '注销',
                        itemId: 'btnSignOut',
                        handler : function(){
                          var loginOutUrl = XMLifeOperating.generic.Global.URL.biz + 'admin/logout',
                              sessionId = localStorage.getItem('sessionId');
                              Ext.Ajax.request({
                                  url: loginOutUrl,
                                  method: 'post',
                                  success : function(response){
                                    if(response.responseText){
                                      localStorage.removeItem('sessionId');
                                    }
                                  },
                                  failure : function(response){
                                      Ext.MessageBox.show({
                                        title: '注销失败',
                                        msg: '很抱歉您注销失败了,请重新尝试!',
                                        buttons: Ext.Msg.OK
                                     });
                                    
                                  }
                                })
                                          }
                        // iconCls: 'tasks-new-list'
                    },
                ]
            }
        },
    ]
});


