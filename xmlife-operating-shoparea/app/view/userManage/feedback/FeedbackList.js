Ext.define('XMLifeOperating.view.userManage.feedback.FeedbackList', {
    extend: 'Ext.grid.Panel',
    xtype: 'feedbackList',
    header: false,
    store: 'Feedback',       

    tbar: [
        {

            xtype: 'radio',
            fieldLabel:'今天',
            itemId: 'dayType1',
            name:'dayType',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'昨天',
            name:'dayType',
            itemId: 'dayType2',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'前天',
            name:'dayType',
            itemId: 'dayType3',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'本周',
            name:'dayType',
            itemId: 'dayType4',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上周',
            name:'dayType',
            itemId: 'dayType5',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'本月',
            name:'dayType',
            itemId: 'dayType6',
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上月',
            name:'dayType',
            itemId: 'dayType7', 
            labelAlign: 'right',
            style : 'border:1px solid;margin-right:10px;',
        },
        {
            xtype:'combo',
            name:'sa',
            store:'FeedbackStatus',
            value:'0',
            margin:10,
            editable: false,
            queryMode:'local',
            displayField:'name',
            valueField:'value',
        },
    ],
    
    columns: [
        {
            dataIndex: 'created',
            text: '时间',
            width: 130,
            format:'Y-M-D',
            sortable: false,
            align:'center',          
        },
        {
            text: '用户',
            dataIndex: 'name',
            width: 130,
            sortable: false,
            align: 'center',
        },
        {
            text: '注册号码',
            dataIndex: 'phone',
            width: 130,
            sortable: false,
            align: 'center',
        },
        {
            text: '反馈意见',
            dataIndex: 'content',
            width: 130,
            sortable: false,
            align: 'center',
        },
        {
            header:"",
            width: 130,
            dataIndex: 'mark',
            itemId: 'mark',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer : function(value) { 
                var str='';
               if(value==true){
                    str='<input type="button" value="取消标记" statusValue="offline" class="markStatus" />';
                }else{
                    str='<input type="button" value="标记" statusValue="online" class="markStatus" />';
                }
                return str;
            }
        }, 
        
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});