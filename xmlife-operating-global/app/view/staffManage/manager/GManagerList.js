Ext.define('XMLifeOperating.view.staffManage.manager.GManagerList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'gManagerList',
    title: '掌柜管理',
    store: 'Manager',
    id: 'gManagerList',
    tbar: [{
            xtype: 'button',
            text: '添加掌柜',
            itemId: 'add'
        }, {
            xtype: 'combobox',
            name: 'area',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择商圈',
            editable: false,
            displayField: 'name',
            valueField: 'id'
        }, {
            xtype: 'button',
            itemId: 'activeSearch',
            text: '查看停单掌柜',
            handler: function() {
                if (this.text == '查看停单掌柜') {
                    this.setText('查看接单掌柜');
                } else {
                    this.setText('查看停单掌柜');
                }
            }
        }, {
            xtype: 'button',
            itemId: 'activeBind',
            text: '查看未绑定的掌柜',
            handler: function() {
                if (this.text == '查看未绑定的掌柜') {
                    this.setText('查看已绑定的掌柜');
                } else {
                    this.setText('查看未绑定的掌柜');
                }
            }
        },
        '->', {
            xtype: 'textfield',
            name: 'searchbuyer',
            fieldLabel: '手机号码',
            itemId: 'searchBuyerKeyWords',
            emptyText: '输入搜索号码...'
        }, {
            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Manager',
        displayInfo: true,
        style: 'border:none'
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: 'uid',
        dataIndex: 'uid',
        width: 60,
        sortable: true,
        align: 'center'
    }, {
        text: '姓名',
        dataIndex: 'name',
        width: 80,
        sortable: true,
        align: 'center'
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
    }, {
        text: '绑定店铺',
        dataIndex: 'shopNames',
        width: 100,
        sortable: true,
        align: 'center',
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
        header: "考勤管理",
        width: 90,
        itemId: 'managerWorkTimeId',
        menuDisabled: true,
        sortable: true,
        align: 'center',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        header: "编辑",
        xtype: 'actioncolumn',
        width: 60,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: true,
        itemId: 'editManagerId'
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
    }],
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
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true,
});
