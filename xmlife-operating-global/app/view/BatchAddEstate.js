/**
 * Created by wangdongwu on 14-9-17.
 */
Ext.define('XMLifeOperating.view.BatchAddEstate', {
    extend: 'Ext.grid.Panel',
    id : 'BatchAddEstate',
    xtype: 'BatchAddEstate',
    alias:  'widget.BatchAddEstate',
    autoScroll: true,
    title: '批量添加小区',
    closable : true,
    forceFit: true,
    tbar: [
            {
              xtype : 'form',
              width : 600,
              layout : 'column',
              bodyStyle: 'background: transparent;border:0',
              items : [,
                 {
                    xtype: 'combo',
                    columnWidth: 0.2,
                    itemId: 'cmbGlobalCity',
                    store: 'AssignedCity',
                    fieldLabel: '城市',
                    name : 'cityCode',
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
                xtype : 'filefield',
                columnWidth: 0.6,
                name : 'file',
                fieldLabel : '小区Excel文件',
                labelWidth: 120,
                allowBlank: false,
                buttonText : '选择Excel文件'
            },
            {
              xtype : 'button',
              text : '上传',
              itemId : 'uploadfile'
            }]
            }
    ],
    columns : [
        {
            text: '城市'
        }
    ]
  })
