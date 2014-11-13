Ext.define('XMLifeOperating.view.couponManage.coupon.CouponList', {
    extend: 'Ext.grid.Panel',
    xtype: 'couponList',
    store: 'Coupon',
    id: 'couponList',
    title : '优惠券',
    titleAlign : 'left',
    closable : true,
    forceFit: true,
    tbar: [
    {
        xtype: 'button',
        text: '创建优惠券',
        itemId: 'add',
    },'->',
    {
        xtype : 'combo',
        name : 'status',
        itemId : 'statusComboCoupon',
        queryMode: 'local',
        triggerAction : 'all',
        emptyText : '',
        displayField: 'status',
        width : 120,
        margin : '0 5 0 5',
        valueField: 'value',
        value:'在用',
        store : Ext.create('Ext.data.Store', {
            fields: ['value','status'],
            data : [
                {"value": '1', "status": '在用'},
                {"value": '2', "status": '过期'},
                {"value": '3', "status": '即将开启'}
            ],
        })
    }],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '编号',
            dataIndex: 'id',
            width: 100,
            sortable: true,
            align: 'left',
            editor: {
                allowBlank: false,
                disabled:true
            }
        }, {
            text: '名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'left',
        }, {
            text: '类型',
            dataIndex: 'type',
            width: 60,
            sortable: false,
            align: 'left',
            renderer : function(v){
                // console.log(value);

                var data = {
                    '1' : '满减券',
                    '2' : '打折券',
                    '3' : '免运费券'
                };             
                return data[v];
            }
        }, {
            text: '是否为新手券',
            dataIndex: 'isNew',
            width: 60,
            sortable: false,
            align: 'left',
            renderer : function(v){
                if(v){
                     return '是';
                }else{
                    return '否';
                }              
            }
        },{
            text: '开始日期',
            dataIndex: 'expireStartDate',
            width: 60,
            sortable: false,
            align: 'left',
            renderer: function (v) {
                var date = new Date(v);
                return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
            }
        }, {
            text: '结束日期',
            dataIndex: 'expireEndDate',
            width: 60,
            sortable: false,
            align: 'left',
            renderer: function (v) {
                var date = new Date(v);
                return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
            }

        }, {
            text: '创建日期',
            dataIndex: 'gmtCreate',
            width: 60,
            sortable: false,
            align: 'left',
            renderer: function (v) {
                var date = new Date(v);
                var str = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
                return str;
            }
        }, {
            text: '创建者',
            dataIndex: 'createrName',
            width: 60,
            sortable: false,
            align: 'left'
        },{
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'editCouponId',
        },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {

    })]


});