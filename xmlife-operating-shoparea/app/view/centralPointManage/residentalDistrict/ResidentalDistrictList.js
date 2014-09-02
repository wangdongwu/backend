Ext.define('XMLifeOperating.view.centralPointManage.residentalDistrict.ResidentalDistrictList', {
    extend: 'Ext.grid.Panel',
    xtype: 'residentaldistrictlist',

    title: '配送地址管理',
    id: 'residentaldistrictlist',
    store: 'ResidentalDistrict',
    tbar: [
    {
        xtype: 'button',
        text: '添加小区',
        itemId: 'add'
    }, 
    {
        xtype: 'combobox',
        name: 'area',
        itemId: 'lineId',
        emptyText: '请选择线路',
        editable: false,
        queryMode:'local',
        store:'DelivererZone',
        displayField: 'name',
        valueField: 'id'
    }, 
    {
        xtype: 'button',
        itemId: 'activeSearch',
        text: '查看已关闭小区',
        handler: function() {
            if (this.text == '查看已关闭小区') {
                this.setText('查看开启小区');
            } else {
                this.setText('查看已关闭小区');
            }
        }
    }, 
    {
        xtype: 'button',
        itemId: 'activeBind',
        text: '查看未绑定的小区',
        handler: function() {
            if (this.text == '查看未绑定的小区') {
                this.setText('查看已绑定的小区');
            } else {
                this.setText('查看未绑定的小区');
            }
        }
    }, 
    {
        xtype: 'textfield',
        name: 'searchCommunity',
        itemId: 'searchCommunityKeyWords',
        emptyText: '输入小区名称',
    }, 
    {
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
            text: 'ID',
            dataIndex: 'id',
            width: 200,
            sortable: false,
            align: 'left'
        }, 
        {
            text: '小区名',
            dataIndex: 'name',
            width: 150,
            sortable: false,
            align: 'left'
        }, {
            text: '经度',
            dataIndex: 'lng',
            width: 150,
            sortable: false,
            align: 'left'
        }, {
            text: '纬度',
            dataIndex: 'lat',
            width: 150,
            sortable: false,
            align: 'left'
        }, {
            text: '地址',
            dataIndex: 'address',
            width: 150,
            sortable: false,
            align: 'left'
        }, {
            text: '',
            dataIndex: 'isActive',
            width: 100,
            sortable: false,
            align: 'center',
            itemId: 'isActiveId',
            renderer: function(value) {
                if (value == true) {
                    return '<span style="color:blue;cursor:pointer;">关闭</span>';
                }
                return '<span style="color:blue;cursor:pointer;">开启</span>';
            }
        }, {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'ediCommunityId',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        },

    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }

});