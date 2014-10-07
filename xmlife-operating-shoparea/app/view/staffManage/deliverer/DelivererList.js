Ext.define('XMLifeOperating.view.staffManage.deliverer.DelivererList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'delivererList',

    title: '配送员管理',
    id: 'delivererList',
    store: 'Deliverer',
    tbar: [{
            xtype: 'button',
            text: '添加快递员',
            itemId: 'add',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'combobox',
            name: 'area',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            // margin: 10,
            editable: false,
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        },
        /*{
            xtype:'textfield',
            emptyText:'配送员名字',
            name:'keyword',
            itemId: 'keyword',
            margin:10
        },
        {
            xtype:'button',
            itemId: 'productSearch',
            text:'搜索',
            margin:10,
        }*/
        '->', {
            xtype: 'textfield',
            name: 'searchcourier',
            itemId: 'searchDelivererKeyWords',
            fieldLabel: '手机号码',
            emptyText: '输入搜索号码...'
        }, {
            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }, {
            xtype: 'button',
            itemId: 'activeBind',
            text: '查看未绑定的快递员',
            // margin: 10,
            handler: function() {
                if (this.text == '查看未绑定的快递员') {
                    this.setText('查看已绑定的快递员');
                } else {
                    this.setText('查看未绑定的快递员');
                }
            }
        }, {
            xtype: 'button',
            itemId: 'activeSearch',
            text: '查看停单快递员',
            // margin: 10,
            handler: function() {

                if (this.text == '查看停单快递员') {
                    this.setText('查看接单快递员');
                } else {
                    this.setText('查看停单快递员');
                }

            }
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Deliverer',
        displayInfo: true,
        style:'border:none'
    }],
    columns: [{
            xtype: 'rownumberer'
        }, {
            text: 'ID',
            dataIndex: 'uid',
            width: 60,
            sortable: true,
            align: 'center'
        }, {
            text: '姓名',
            dataIndex: 'name',
            width: 80,
            sortable: true,
            align: 'center',

        }, {
            text: '职称',
            dataIndex: 'title',
            width: 80,
            sortable: true,
            align: 'center'
        }, {
            text: '电话',
            dataIndex: 'phone',
            width: 90,
            sortable: true,
            align: 'center'
        },
        // {
        //     text: '密码',
        //     dataIndex: 'pwd',
        //     width: 80,
        //     sortable: false,
        //     align: 'left'
        // }, 
        {
            text: '头像',
            dataIndex: 'avatar',
            width: 80,
            sortable: true,
            align: 'center'
        },
        // {
        //     text: '服务商圈',
        //     dataIndex: 'areaNames',
        //     width: 100,
        //     sortable: false,
        //     align: 'left',
        //     renderer: function(value) {
        //         var htmlStr = '';
        //         if (value != null) {

        //             value.forEach(function(item, index, value) {
        //                 htmlStr += item + "<br />";
        //             });
        //             return htmlStr;
        //         }
        //         return htmlStr;
        //     }
        // }, 
        {
            text: '订单数',
            dataIndex: 'deals',
            width: 50,
            sortable: true,
            align: 'center'
        }, {
            text: '退单数',
            dataIndex: 'returnDealNum',
            width: 50,
            sortable: true,
            align: 'center'
        }, {
            text: '好评数',
            dataIndex: 'goods',
            width: 50,
            sortable: true,
            align: 'center'
        }, {
            text: '中评数',
            dataIndex: 'mediums',
            width: 50,
            sortable: true,
            align: 'center'
        }, {
            text: '差评数',
            dataIndex: 'bads',
            width: 50,
            sortable: true,
            align: 'center'
        }, {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: true,
            itemId: 'delivererEditId',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            header: "考勤管理",
            width: 90,
            itemId: 'delivererWorkTimeId',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {

                var seeBtn = '<a>查看</a>';
                return seeBtn;
            }
        }, {
            header: "历史订单",
            width: 90,
            itemId: 'dealDelivererHistoryId',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {

                var seeBtn = '<a>查看</a>';
                return seeBtn;
            }
        }, {
            header: "操作",
            width: 90,
            dataIndex: 'isActive',
            itemId: 'closeOrOpenOrder',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var str = '';
                if (value == true) {
                    str += '<input type="button" value="关闭" statusValue="open" /><br/>';
                } else {
                    str += '<input type="button" value="开启" statusValue="close"  /><br/>';
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
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                // alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true,


});