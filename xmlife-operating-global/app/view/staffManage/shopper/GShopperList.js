Ext.define('XMLifeOperating.view.staffManage.shopper.GShopperList', {
    extend: 'Ext.grid.Panel',
    xtype: 'gShopperList',
    store: 'Shopper',
    id: 'gShopperList',
    title : '买手管理',
    titleAlign : 'left',
    forceFit: true,
    tbar: [
    {
        xtype: 'button',
        text: '添加买手',
        itemId: 'add',
        hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
    }, 
    {
        xtype: 'combobox',
        name: 'area',
        itemId: 'shopArea',
        store: 'ShopArea',
        emptyText: '请选择中心',
        editable: false,
        displayField: 'name',
        valueField: 'id',
        hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
    }, 
    {
        xtype: 'button',
        itemId: 'activeSearch',
        text: '查看停单买手',
        handler: function() {

            if (this.text == '查看停单买手') {
                this.setText('查看接单买手');
            } else {
                this.setText('查看停单买手');
            }

        }
    }, {
        xtype: 'button',
        itemId: 'activeBind',
        text: '查看未绑定的买手',
        handler: function() {
            if (this.text == '查看未绑定的买手') {
                this.setText('查看已绑定的买手');
            } else {
                this.setText('查看未绑定的买手');
            }
        }
    },
    '->',
    , {
        xtype: 'textfield',
        name: 'searchbuyer',
        itemId: 'searchBuyerKeyWords',
        emptyText: '输入手机号'
    }, {
        xtype: 'button',
        name: 'searchbutton',
        itemId: 'searchButton',
        text: '搜索'
    }],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: 'uid',
            dataIndex: 'uid',
            width: 100,
            sortable: true,
            align: 'left'
        }, {
            text: '姓名',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'left',
        }, {
            text: '职称',
            dataIndex: 'title',
            width: 60,
            sortable: false,
            align: 'left'
        },

        {
            text: '电话',
            dataIndex: 'phone',
            width: 100,
            sortable: false,
            align: 'left',
        }, 
        /*{
            text: '密码',
            dataIndex: 'pwd',
            width: 100,
            sortable: false,
            align: 'left'
        },*/
        {
            text: '服务商铺',
            dataIndex: 'shopNames',
            width: 100,
            sortable: false,
            align: 'left',
            renderer: function(value) {
                var htmlStr = '';
                if (value != null) {

                    value.forEach(function(item, index, value) {
                        htmlStr += item + "<br />";
                    });
                }
                return htmlStr;
            }
        }, {
            text: '服务商圈',
            dataIndex: 'areaNames',
            width: 100,
            sortable: false,
            align: 'left',
            renderer: function(value) {
                var htmlStr = '';
                if (value != null) {
                    value.forEach(function(item, index, value) {
                        htmlStr += item + "<br />";
                    });
                }
                return htmlStr;
            }
        }, {
            text: '订单数',
            dataIndex: 'deals',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '退单数',
            dataIndex: 'returnDealNum',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '好评数',
            dataIndex: 'goods',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '中评数',
            dataIndex: 'mediums',
            width: 50,
            sortable: false,
            align: 'left'
        }, {
            text: '差评数',
            dataIndex: 'bads',
            width: 50,
            sortable: false,
            align: 'left'
        }, 
        {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'editShopperId',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        }, 
        {
            header: "考勤管理",
            width: 90,
            itemId: 'shopperWorkTimeId',
            menuDisabled: true,
            sortable: false,
             

            renderer: function(value, metadata, model, rowIndex, colIndex, store) {

                var seeBtn = '<span style="cursor:pointer">查看</span>';
                return seeBtn;
            }
        }, {
            header: "历史订单",
            width: 90,
            itemId: 'dealShopperHistoryId',
            menuDisabled: true,
            sortable: false,
             
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {

                var seeBtn = '<span style="cursor:pointer">查看</span>';
                return seeBtn;
            }
        },
        {
            header:"",
            width: 90,
            dataIndex: 'isActive',
            itemId: 'closeOrOpenOrder',
            menuDisabled: true,
            sortable: false,
             
            renderer : function(value) {
                var str='';
                if(value==true){
                    str+='<input type="button" value="暂停接单" statusValue="open" /><br/>';
                }else{
                    str+='<input type="button" value="恢复接单" statusValue="close"  /><br/>';
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