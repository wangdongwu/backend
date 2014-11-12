Ext.define('XMLifeOperating.view.waitForAudit.HistoricalRecordsList', {
    extend: 'Ext.grid.Panel',
    id : 'historicalRecordsList',
    xtype: 'historicalRecordsList',
    autoScroll: true,
    store: 'HistoricalRecords',
    title: '改价审核',
   // titleAlign : 'left',
    closable : false,
    forceFit: true,
    requires:[
            'Ext.panel.Panel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.ux.RowExpander',
        'Ext.selection.CheckboxModel'],
    tbar :[
        
        {
            xtype: 'button',
            text: '返回',
            itemId: 'returnWaitForAuditList'
        },
        {
            xtype : 'button',
            name :'allRefresh',
            text : '全部',
            style:{
                border:'1px solid #99bce8'
            }
        },
        {
            xtype:'combobox',
            name:'shopArea',
            itemId:'shopArea',
            store:'ShopArea',
            emptyText:'筛选中心',
            margin:10,
            editable: false,
            displayField:'name',
            valueField:'id',
        },
        {
            xtype:'combobox',
            name:'shopList',
            itemId:'shopList',
            store:'Shop',
            emptyText:'筛选店铺',
            margin:10,
            editable: false,
            displayField:'name',
            valueField:'id',
        },
        {
          xtype : 'combo',
          name : 'isverify',
          itemId : 'isverifyCombo',
          queryMode: 'local',
          triggerAction : 'all',
          emptyText : '审核状态',
          displayField: 'type',
          width : 120,
          margin : '0 5 0 5',
              valueField: 'value',
          store : Ext.create('Ext.data.Store', {
                    fields: ['value','type'],
                    data : [
                        {"value": '', "type": '全部'},
                        {"value": '1', "type": '通过'},
                        {"value": '2', "type": '拒绝'}
                    ],
                })
        },
        '->',
        {
          xtype : 'textfield',
          emptyText : '搜索商品ID',
          name : 'goodsSkuId',
          allowBlank: false,
          margin : '0 5 0 5',
          
        },
        {
          xtype : 'button',
          name :'skuIdSearch',
          style : {
            border:'1px solid #99bce8'
          },
          text : '搜索' 

        },

    ],
    dockedItems : [
      {
        xtype : 'pagingtoolbar',
        itemId : 'pagetoll',
        store : 'HistoricalRecords',
        dock : 'bottom',
        displayInfo : true/*,
        items : ['->'],   
        prependButtons: true*/
      }
    ],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        { header: '编码', dataIndex: 'skuId'},
        { header: 'ID',dataIndex:'id'},
        { header: '商品名称',dataIndex:'productName'},
        { header: '商品类型',dataIndex:'categoryName'},
        { header: '所属店铺',dataIndex:'shopName'},
        { header: '原进价',dataIndex:'proPprice',
          renderer: function(value, da, record) {
               return value/100;
            }
        },
        { header: '改后进价',dataIndex:'pprice',
          renderer: function(value, da, record) {
               var pprice = record.get('pprice');
               var proPprice = record.get('proPprice');
               value = value/100;
               if(pprice!=proPprice){
                    return '<span style="color:red;">'+value+'</span>';
               }
               return value;
            }
        },
        { header: '原售价',dataIndex:'proDprice',
          renderer: function(value, da, record) {
               return value/100;
            }
        },
        { header: '改后售价',dataIndex:'dprice',
          renderer: function(value, da, record) {
               var dprice = record.get('dprice');
               var proPprice = record.get('proDprice');
               value = value/100;
               if(dprice!=proPprice){
                    return '<span style="color:red;">'+value+'</span>';
               }
               return value;
            }
        },
        { header: '修改人',dataIndex:'updater'},
        { header: '修改时间',dataIndex:'updated',
          renderer:function(value){
               var newTime = new Date(value);
               var newDate = newTime.getFullYear()+'.'+(newTime.getMonth()+1)+'.'+newTime.getDate();
               newDate += '<br />'+newTime.getHours()+':'+newTime.getMinutes();
               return newDate;
            } 
        },
        { header: '状态',dataIndex:'status',
            renderer : function(v){
              //状态 0:提交 1:通过 2:拒绝
              var data = {
                '0' : '提交',
                '1' : '通过',
                '2' : '拒绝'
              }
              return data[v];
            }
        },
    ],
    columnLines: true,
    
    
});