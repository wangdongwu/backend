
Ext.define('XMLifeOperating.view.userManage.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerList',

    header: false,

    store: 'Customer',
    id:'customerList',

    tbar: [
        {
            xtype:'combo',
            name:'shopAreac',
            itemId:'shopAreac',
            store:'ShopArea',
            emptyText:'请选择中心',
            margin:10,
            editable: false,
            queryMode:'local',
            displayField:'name',
            valueField:'id',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        },
        {
            xtype:'textfield',
            emptyText:'输入搜索号码...',
            name:'keywordc',
            itemId: 'keywordc',
            fieldLabel: '手机号码',
            regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
            regexText: '请输入正确的手机号',
            margin:10
        },
        {
            xtype:'button',
            itemId: 'customerSearch',
            text:'搜索',
            margin:10,
        },
        {
            xtype:'button',
            itemId: 'customerTitle',
            text:'查看封号用户',
            margin:10,
        },
     ],

    columns: [
        {
            text: '用户昵称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '手机号',
            dataIndex: 'phone',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '日期',
            dataIndex: 'created',
            width: 80,
            sortable: true,
            align: 'center', 
            renderer:function(value){
               var newTime = new Date(value);
               newDate = newTime.getFullYear()+'.'+(newTime.getMonth()+1)+'.'+newTime.getDate();
               return newDate;
            } 
        },
        {
            text: '余额',
            dataIndex: 'balance',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '收获地址',
            width: 60,
            itemId: 'addressCustomer',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>查看</a>', value, value);
            }
        },
        {
            text: '历史订单',
            width: 60,
            itemId: 'orderHistory',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>查看</a>', value, value);
            }
        },
        // {
        //     text: '操作',
        //     width: 60,
        //     dataIndex: 'enable',
        //     itemId: 'operationc',
        //     menuDisabled: true,
        //     sortable: false,
        //     align: 'center',
        //      renderer:function(value){
        //         if (value) 
        //         {
        //             return Ext.String.format('<a>封号</a>', value, value);
        //         }
        //         else
        //         {
        //             return Ext.String.format('<a>解封</a>', value, value);
        //         }
        //     } 
        // },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {           
            if(XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if(XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#businessArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },

});