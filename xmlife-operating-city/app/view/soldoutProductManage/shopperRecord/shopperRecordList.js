Ext.define('XMLifeOperating.view.soldoutProductManage.shopperRecord.shopperRecordList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shopperRecordList',
    itemId: 'shopperRecordList',
    title: '买手记录',
    titleAlign: 'left',
    store: 'GetOptLogs',
    closable: true,
    forceFit:true,
    columns: [{
        header: '买手姓名',
        dataIndex: 'shopper',
        align: 'center'
    }, {
        header: '联系方式',
        dataIndex: 'phoneNum',
        align: 'center'
    }, {
        header: '今日推送任务数',
        dataIndex: 'todayPush',
        align: 'center'
    }, {
        header: '今日维持下架数',
        dataIndex: 'todayKeep',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('todayPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }, {
        header: '今日重新上架数',
        dataIndex: 'todayOnline',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('todayPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }, {
        header: '本周推送任务数',
        dataIndex: 'weekPush',
        align: 'center'
    }, {
        header: '本周维持下架数',
        dataIndex: 'weekKeep',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('weekPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }, {
        header: '本周重新上架数',
        dataIndex: 'weekOnline',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('weekPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }, {
        header: '本月推送任务数',
        dataIndex: 'monthPush',
        align: 'center'
    }, {
        header: '本月维持下架数',
        dataIndex: 'monthkeep',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('monthPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }, {
        header: '本月重新上架数',
        dataIndex: 'monthOnline',
        align: 'center',
        renderer:function(value,metaData,record,rowIndex,colIndex,store,view){
            var percent = (parseInt(value*100)/record.get('monthPush')).toFixed();

            if(percent == Infinity || percent == NaN || percent == 'NaN'){
                return value;
            }else{
                return value+'('+percent+'%)';
            }
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            border: 'none'
        },
        items: [
            '->', {
                xtype: 'textfield',
                fieldLabel: '请输入搜索内容',
                labelWidth: 130,
                labelAlign: 'left',
                name: 'recordSearchKeyWords',
                itemId: 'recordSearchKeyWords',
            }, {
                xtype: 'button',
                text: '搜索',
                itemId: 'recordSearchBtn'
            }
            ]
        }]
    });