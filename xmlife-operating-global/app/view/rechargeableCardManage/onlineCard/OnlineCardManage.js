Ext.define('XMLifeOperating.view.rechargeableCardManage.onlineCard.OnlineCardManage', {
    extend: 'Ext.grid.Panel',
    id: 'OnlineCardManage',
    xtype: 'OnlineCardManage',
    alias: 'widget.OnlineCardManage',
    title: '在线充值卡管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    store: 'OnlineCard',
    bbar: [{
        xtype: 'button',
        text: '保存排序',
        itemId: 'saveSort'
    }],
    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: '拖拽可排序'
        }
    },
    tbar: [{
        xtype: 'button',
        text: '生成新充值卡',
        itemId: 'addNewCart'
    }, {
        xtype: 'combo',
        name: 'status',
        itemId: 'status',
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: '选择状态',
        displayField: 'type',
        width: 120,
        valueField: 'value',
        store: Ext.create('Ext.data.Store', {
            fields: ['value', 'type'],
            data: [{
                "value": '1',
                "type": '上架中'
            }, {
                "value": '0',
                "type": '已下架'
            }],
        })
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '编号',
        width: 50,
        dataIndex: 'id'
    }, {
        text: '名称',
        dataIndex: 'batchName',
        itemId: 'showDetail',
        renderer: function(v) {
            return '<span style="color:#157fcc">' + v + '</span>';
        }
    }, {
        text: '资产额',
        dataIndex: 'amount'
    }, {
        text: '售价',
        dataIndex: 'soldPrice'
    }, {
        text: '类型',
        dataIndex: 'type'
    }, {
        text: '充值有效期开始时间',
        width: 150,
        dataIndex: 'startTime'
            /*,
                  renderer: function(v){
                    var format = Ext.util.Format.dateRenderer('d-m-Y H:i:s');
                    return format(new Date(v));
                  }*/
    }, {
        text: '充值有效期结束时间',
        width: 150,
        dataIndex: 'endTime'
    }, {
        text: '开始展示时间',
        dataIndex: 'displayStartTime',
        width: 150,
    }, {
        text: '模板',
        dataIndex: 'tname'
    }, {
        text: '出售数量',
        dataIndex: 'total'
    }]
});
