Ext.define('XMLifeOperating.view.staffManage.manager.ManagerList', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'managerList',
    title: '掌柜管理',
    store: 'Manager',
    id: 'managerList',
    tbar: [{
            xtype: 'combobox',
            name: 'area',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            editable: false,
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
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
        }, '-', {
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
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Manager',
        displayInfo: true,
        style: 'border:none'
    }],
    columns: {
        defaults: {
            align: 'center'
        },
        items: [{
            xtype: 'rownumberer',
            width: 50
        }, {
            text: 'uid',
            dataIndex: 'uid',
            width: 60
        }, {
            text: '姓名',
            dataIndex: 'name',
            width: 80
        }, {
            text: '职称',
            dataIndex: 'title',
            width: 80
        }, {
            text: '电话',
            dataIndex: 'phone',
            width: 90
        }, {
            text: '绑定店铺',
            dataIndex: 'shopNames',
            width: 100,
            renderer: function(value) {
                return (value || []).join('<br />');
            }
        }, {
            header: "考勤管理",
            width: 90,
            itemId: 'managerWorkTimeId',
            menuDisabled: true,
            renderer: function() {
                return '<a href="javascript:;">查看</a>';
            }
        }, {
            header: "操作",
            width: 90,
            dataIndex: 'isActive',
            itemId: 'closeOrOpenOrder',
            menuDisabled: true,
            renderer: function(value) {
                var txt = value ? '关闭' : '开启',
                    statusValue = value ? 'open' : 'close';

                return Ext.String.format('<input type="button" value="{0}" statusValue="{1}"  /><br/>', txt, statusValue);
            }
        }]
    },
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
    columnLines: true
});
