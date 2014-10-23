Ext.define('XMLifeOperating.view.rechargeableCardManage.onlineCard.OnlineCardManage', {
    extend: 'Ext.grid.Panel',
    id : 'OnlineCardManage',
    xtype: 'OnlineCardManage',
    alias : 'widget.OnlineCardManage',
    title : '在线充值卡管理',
    titleAlign : 'left',
    closable : true,
    forceFit: true,
    store: 'OnlineCard',
    tbar: [
        {
            xtype: 'button',
            text: '生成新充值卡',
            itemId: 'addNewCart'
        },
        {
            xtype: 'button',
            text: '上架中',
            itemId: 'online'
        },
        {
            xtype: 'button',
            text: '已下架',
            itemId: 'offline'
        }
    ],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '编号',
            width : 50,
            dataIndex: 'id'
        },
        {
            text: '名称',
            dataIndex: 'batchName',
            itemId : 'showDetail',
            renderer : function(v){
              return '<span style="color:' + '#157fcc' + ';">' + v + '</span>'
            }
        },
        {
            text: '资产额',
            dataIndex: 'amount'
            
        },
        {
            text: '售价',
            dataIndex: 'soldPrice'
            
        },
        {
            text: '类型',
            dataIndex: 'type'
            
        },
        {
            text: '充值有效期开始时间',
            width :150,
            dataIndex: 'startTime'/*,
            renderer: function(v){
              var format = Ext.util.Format.dateRenderer('d-m-Y H:i:s');
              return format(new Date(v));
            }*/
            
        },
        {
            text: '充值有效期结束时间',
            width :150,
            dataIndex: 'endTime'
            
        },
        {
            text: '开始展示时间',
            dataIndex: 'displayStartTime',
            width :150,
        },
        {
            text: '模板',
            dataIndex: 'tid'
            
        },
        {
            text: '出售数量',
            dataIndex: 'total'            
        }
      
    ]
});