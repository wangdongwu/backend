/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.staffManage.deliverer.DelivererWorkTimeList', {
    extend: 'Ext.grid.Panel',
    closable : false,
    xtype: 'delivererWorkTimeList',

    title: '考勤管理',
    store: 'DelivererWorkTime',
    dockedItems : [
      {
      xtype : 'pagingtoolbar',
      itemId : 'pagetoll',
      store : 'DelivererWorkTime',
      dock : 'bottom',
      displayInfo : true/*,
      items : ['->'],   
      prependButtons: true*/
    }
    ],
   tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'delivererReturn'
        },
        { 
            xtype: 'radiogroup',
            fieldLabel : '按时间过滤',
            defaultType: 'radiofield',
            itemId:'delivererworktimeradios',
            defaults: {
                flex: 1,
                margin : '0 5 0 5'
            },
            layout: 'hbox',
            items : [
                {
                    boxLabel:'本周',
                    name : 'dayType',
                    checked: true,
                    itemId: 'dayType3',
                    inputValue:3
                },
                {
                    boxLabel:'上周',
                    name : 'dayType',
                    itemId: 'dayType4',
                    inputValue:4
                },
                {
                    boxLabel:'本月',
                    name : 'dayType',
                    itemId: 'dayType5',
                    inputValue:5
                },
                {
                    boxLabel:'上月',
                    name : 'dayType',
                    itemId: 'dayType6',
                    inputValue:6
                }
            ]
        },
    ],

    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '日期',
            dataIndex: 'created',
            sortable: false,
            width: 100,
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getFullYear()+'-'+(newTime.getMonth()+1)+'-'+newTime.getDate();
               return newTime;
            } 
        },
        {
            text: '上班时间',
            dataIndex: 'onlineTime',
            format:'H:i',
            sortable: false,
            width: 100,
            renderer:function(value){
               var time = Math.floor(value/60) +':'+ (value%60);
               return time;
            }
        },
        {
            text: '下班时间',
            dataIndex: 'offlineTime',
            format:'H:i',
            sortable: false,
            width: 100,
            renderer:function(value){
               var time = Math.floor(value/60) +':'+ (value%60);
               return time;
            }
        },
        {
            text: '本次工时',
            dataIndex: 'workTime',
            
            sortable: false,
            width: 100,
            renderer:function(value){
               var time = Math.floor(value/60) +'时'+ (value%60) +'分';
               return time;
            }
        },
        {
            text: '完成订单数',
            dataIndex: 'deals',
            
            sortable: false,
            width: 100
        },
       
        
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'
    
});