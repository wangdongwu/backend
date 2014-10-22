Ext.define('XMLifeOperating.view.userManage.feedback.GFeedbackList', {
    extend: 'Ext.grid.Panel',
    id: 'gFeedbackList',
    xtype: 'gFeedbackList',
    title: '用户反馈管理',
    titleAlign : 'left',
    closable : true,
    forceFit :true,
    
    store: 'Feedback',
    dockedItems : [
        {
          xtype : 'pagingtoolbar',
          itemId : 'pagetoll',
          store : 'Feedback',
          dock : 'bottom',
          displayInfo : true/*,
          items : ['->'],   
          prependButtons: true*/
        }
    ],
    tbar: [
        { 
            xtype: 'fieldcontainer',
            fieldLabel : '按时间过滤',
            defaultType: 'radiofield',
            defaults: {
                flex: 1,
                margin : '0 5'
            },
            layout: 'hbox',
            items : [
            {
            checked: true,    
            boxLabel:'今天',
            name : 'dayType',
            itemId: 'dayType1'
            },
        {
            boxLabel:'昨天',
            name : 'dayType',
            itemId: 'dayType2'
            },
        {
            boxLabel:'前天',
            name : 'dayType',
            itemId: 'dayType3'
            },
        {
            boxLabel:'本周',
            name : 'dayType',
            itemId: 'dayType4'
            },
        {
            boxLabel:'上周',
            name : 'dayType',
            itemId: 'dayType5'
            },
        {
            boxLabel:'本月',
            name : 'dayType',
            itemId: 'dayType6'
            },
        {
            boxLabel:'上月',
            name : 'dayType',
            itemId: 'dayType7'
            }
        ]
        }
        ,
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