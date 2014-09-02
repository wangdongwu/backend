
Ext.define('XMLifeOperating.view.userManage.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerList',

    title: '用户信息管理',

    store: 'Customer',
    id:'customerList',
    forceFit: true,
    dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                style : {
                    padding : '2px 8px',
                },
                items: [
                    {
                        xtype:'combo',
                        name:'shopAreac',
                        itemId:'shopArea',
                        store:'ShopArea',
                        emptyText:'请选择中心',
                        editable: false,
                        queryMode:'local',
                        displayField:'name',
                        valueField:'id',
                        hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
                    },
                    '->',
                    {
                        xtype:'textfield',
                        emptyText:'输入搜索号码...',
                        name:'keywordc',
                        itemId: 'keywordc',
                        fieldLabel: '手机号码',
                        regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
                        regexText: '请输入正确的手机号',
                    },
                    {
                        xtype:'button',
                        itemId: 'customerSearch',
                        text:'搜索',
                    },
                    {
                        xtype:'button',
                        itemId: 'customerTitle',
                        text:'查看封号用户',
                    }
                    ]
    }],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '用户昵称',
            dataIndex: 'name',
            width: 100  
        },
        {
            text: '手机号',
            dataIndex: 'phone',
            width: 100  
        },
        {
            text: '日期',
            dataIndex: 'created',
            width: 80,
            sortable: true, 
            renderer:function(value){
               var newTime = new Date(value);
               newDate = newTime.getFullYear()+'.'+(newTime.getMonth()+1)+'.'+newTime.getDate();
               return newDate;
            } 
        },
        {
            text: '余额',
            dataIndex: 'balance',
            width: 60  
        },
        {
            text: '收获地址',
            width: 60,
            itemId: 'addressCustomer',
            menuDisabled: true,
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a class="showAddressDetail">查看收货地址</a>';
            }
        },
        {
            text: '历史订单',
            width: 60,
            itemId: 'orderHistory',
            menuDisabled: true,
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a class="showDealList">查看历史订单</a>';
                }
        }
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
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },

});