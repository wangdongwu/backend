Ext.define('XMLifeOperating.view.userManage.feedback.GFeedbackList', {
    extend: 'Ext.grid.Panel',
    xtype: 'gFeedbackList',
    title: '用户反馈管理',
    titleAlign : 'left',
    forceFit :true,
    frame : true,
    store: 'Feedback',
    tbar: [
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'今天',
            itemId: 'dayType1'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'昨天',
            itemId: 'dayType2'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'前天',
            itemId: 'dayType3'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'本周',
            itemId: 'dayType4'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'上周',
            itemId: 'dayType5'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'本月',
            itemId: 'dayType6'
        },
        {
            labelWidth: 40,
            xtype: 'radio',
            fieldLabel:'上月',
            itemId: 'dayType7'
        },
        '->',
        ,
        {
            labelWidth: 40,
            xtype:'combo',
            store:'FeedbackStatus',
            value:'0',
            editable: false,
            queryMode:'local',
            displayField:'name',
            valueField:'value',
        }
    ],
    
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            dataIndex: 'created',
            text: '时间',
            width: 100,
            format:'Y-M-D',
            sortable: false,
            align:'center',          
        },
        {
            text: '用户',
            dataIndex: 'name',
            width: 100,
            sortable: false,
             
        },
        {
            text: '注册号码',
            dataIndex: 'phone',
            width: 100,
            sortable: false,
             
        },
        {
            text: '反馈意见',
            dataIndex: 'content',
            width: 100,
            sortable: false,
             
        },
        {
            header:"",
            width: 100,
            dataIndex: 'mark',
            itemId: 'mark',
            menuDisabled: true,
            sortable: false,
             
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