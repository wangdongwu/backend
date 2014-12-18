Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleDetailEdit', {
    extend: 'Ext.window.Window',
    xtype: 'moduleDetailEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建/编辑属性',
    width: 450,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 12,
        defaults: {
            width: '95%',
            margin: '8 0 0 0'
        },
        items: [{
            xtype: 'combo',
            name: 'name',
            labelWidth: 60,
            labelAlign: 'right',
            queryMode: 'local',
            hideTrigger: true,
            typeAhead: true,
            store: 'ModuleNameComplete',
            fieldLabel: '名称',
            displayField: 'name',
            valueField: 'name',
            minChars: 1,
            tpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '<div class="x-boundlist-item" style="color:green;text-align:left">{name}</div>',
                '</tpl>'
            ),
            listeners: {
                buffer: 50,
                focus: function(component) {
                    this.expand();
                },
                removed: function(component) {
                    this.store.clearFilter(true);
                }
            }
        }, {
            xtype: 'label',
            text: '（提示: 多个titles之间用;号隔开）',
            width: '100%',
            style: 'padding-left:58px;color:#999;text-align:left;'
        }, {
            xtype: 'combo',
            name: 'titles',
            labelWidth: 60,
            labelAlign: 'right',
            queryMode: 'local',
            hideTrigger: true,
            typeAhead: true,
            store: 'ModuleNameComplete',
            fieldLabel: 'titles',
            displayField: 'name',
            valueField: 'name',
            minChars: 1,
            tpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '<div class="x-boundlist-item" style="color:green;text-align:left">{name}</div>',
                '</tpl>'
            ),
            listeners: {
                buffer: 50,
                focus: function(component) {
                    this.expand();
                },
                removed: function(component) {
                    this.store.clearFilter(true);
                }
            }

        }, {
            xtype: 'combo',
            name: 'urlType',
            fieldLabel: 'url类型',
            labelWidth: 60,
            labelAlign: 'right',
            store: 'HomePageUrlType',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'urlType',
            emptyText: '请选择类型',
            allowBlank: false
        }, {
            xtype: 'fieldset',
            itemId: 'comboFieldset',
            layout: 'column',
            padding: 0,
            border: false,
            hidden: true,
            defaults: {
                margin: '0 2 0 0'
            },
            items: [{
                xtype: 'combo',
                name: 'shopSetId',
                fieldLabel: '选择',
                labelAlign: 'right',
                labelWidth: 60,
                store: 'HomePageShopSet',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择店铺集合',
                width: 185,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'shopId',
                fieldLabel: '选择',
                labelAlign: 'right',
                labelWidth: 60,
                store: 'HomePageShop',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择商铺',
                width: 165,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'cid',
                store: 'HomePageCategory',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择货架',
                width: 110,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'pid',
                store: 'HomePageProduct',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择SKU',
                width: 110,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'fid',
                fieldLabel: '选择',
                labelWidth: 60,
                labelAlign: 'right',
                store: 'HomePageFunction',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                emptyText: '请选择功能页面',
                width: 185,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'promoId',
                fieldLabel: '选择',
                labelWidth: 60,
                labelAlign: 'right',
                store: 'HomePagePromotion',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'promotionId',
                emptyText: '请选择限购活动',
                width: 185,
                hidden: true
            }]
        }, {
            xtype: 'textfield',
            name: 'url',
            itemId: 'urlTextField',
            fieldLabel: 'url',
            emptyText: 'http://',
            labelWidth: 60,
            labelAlign: 'right',
            hidden: true
        }, {
            xtype: 'fieldset',
            layout: 'column',
            itemId: 'renterTime',
            padding: 0,
            border: false,
            hidden: true,
            items: [{
                xtype: 'datefield',
                name: 'startTime',
                fieldLabel: '租赁期限',
                labelAlign: 'right',
                labelWidth: 60,
                width: 215,
                format: 'Y-m-d H:i:s',
                minValue: new Date(),
                editable: true,
                disabled: true,
                emptyText: '开始于...',
                allowBlank: false
            }, {
                xtype: 'label',
                text: '至',
                width: '5%'
            }, {
                xtype: 'datefield',
                name: 'endTime',
                width: 155,
                format: 'Y-m-d H:i:s',
                minValue: new Date(),
                editable: true,
                disabled: true,
                emptyText: '结束于...',
                allowBlank: false
            }]
        }, {
            xtype: 'combo',
            name: 'index',
            fieldLabel: '租赁位置',
            labelWidth: 60,
            labelAlign: 'right',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'index',
            emptyText: '请选择位置',
            hidden: true,
            disabled: true,
            allowBlank: false
        }, {
            xtype: 'label',
            itemId: 'picSizeTip',
            width: '100%',
            style: 'padding-left:58px;color:rgb(255, 68, 0);text-align:left;'
        }, {
            xtype: 'fieldset',
            layout: 'column',
            padding: 0,
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'image',
                fieldLabel: '图片',
                itemId: 'imageHash',
                labelWidth: 60,
                labelAlign: 'right',
                width: 329,
                allowBlank: true,
                //readOnly: true,
            }, {
                xtype: 'form',
                border: false,
                itemId: 'adf',
                items: [{
                    xtype: 'filefield',
                    name: 'moduleUploadfile',
                    buttonOnly: true,
                    buttonText: '选择文件',
                    hideLabel: true
                }]
            }]
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
