/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.staffManage.deliverer.DelivererWorkTimeList', {
    extend: 'Ext.grid.Panel',
    xtype: 'delivererWorkTimeList',

    title: '考勤管理',

    store: 'DelivererWorkTime',
   tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'delivererReturn'
        },
        /*{

            xtype: 'radio',
            fieldLabel:'今天',
            itemId: 'dayType0',
            name:'dayType'
        },
        {

            xtype: 'radio',
            fieldLabel:'昨天',
            name:'dayType',
            itemId: 'dayType1'
        },
        {

            xtype: 'radio',
            fieldLabel:'前天',
            name:'dayType',
            itemId: 'dayType2'
        },*/
        {

            xtype: 'radio',
            fieldLabel:'本周',
            checked: true,
            name:'dayType',
            itemId: 'dayType3',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上周',
            name:'dayType',
            itemId: 'dayType4',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'本月',
            name:'dayType',
            itemId: 'dayType5',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上月',
            name:'dayType',
            itemId: 'dayType6',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        
        


    ],

    columns: [
       
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