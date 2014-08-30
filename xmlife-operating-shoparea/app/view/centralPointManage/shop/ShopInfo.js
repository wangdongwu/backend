/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'shopinfo',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel'
    ],
    layout: 'anchor',
    bodyPadding: 10,
    border: false,
    frame: false,
    defaults:{
        anchor: '100%'
    },
    autoScroll: true,
    tbar:[
        {text:'返回',itemId:'returnShopBack'}
    ],
    items: [
                 {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '店铺名称',
                    labelWidth: 90,
                    allowBlank:false,
                    maxLength: 4,
                    maxLengthText:'商品名称最大长度为4',
                },
                {
                    xtype: 'textfield',
                    name: 'desc',
                    fieldLabel: '店铺副名称',
                    labelWidth: 90,
                    allowBlank:false,
                    maxLength: 14,
                    maxLengthText:'商品名称最大长度为14',
                },
                {
                    xtype: 'combo',
                    name: 'shopBannerTemplateId',
                    fieldLabel: '模板',
                    allowBlank: false,
                    blankText: '请选择模板',
                    labelWidth: 90,
                    editable : false,
                    store:'Template',
                    displayField:'name',
                    valueField:'id',
                    emptyText: "请选择模板"
                },
                {
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: '地址',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'商品名称最小长度为2',
                    maxLength: 10,
                    maxLengthText:'商品名称最大长度为10',
                },
                {
                    xtype: 'textfield',
                    name: 'lng',
                    fieldLabel: '经度',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'商品名称最小长度为2',
                    maxLength: 10,
                    maxLengthText:'商品名称最大长度为10',
                },
                {
                    xtype: 'textfield',
                    name: 'lat',
                    fieldLabel: '纬度',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'商品名称最小长度为2',
                    maxLength: 10,
                    maxLengthText:'商品名称最大长度为10',
                },
                {
                    xtype: 'timefield',
                    name: 'openTime',
                    fieldLabel: '开始时间',
                    labelWidth: 90,
                    format:'H:i',
                    allowBlank:false,
                },
                {
                    xtype: 'timefield',
                    name: 'closeTime',
                    fieldLabel: '结束时间',
                    labelWidth: 90,
                    format:'H:i',
                    allowBlank:false,
                },
                
                // {
                //     name: 'areaIds',
                //     store:'BusinessArea',
                //     fieldLabel: '中心',
                //     xtype:'gridpanel',
                //     itemId:'businessAreaScid',
                //     height:150,
                //     selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                //     columns:[
                //         {
                //             text:'id',
                //             dataIndex:'id'
                //         },
                //         {
                //             text:'中心名称',
                //             dataIndex:'name'
                //         }
                //     ],
                // },

                {
                    xtype:'button',
                    text:'修改',
                    itemId:'modifyShopStoreInfo'
                }
    ]

});