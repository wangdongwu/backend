Ext.define('XMLifeOperating.view.cityManage.SupportedCityList', {
    extend: 'Ext.grid.Panel',
    xtype: 'supportedCityList',
    alias: 'widget.supportedCityList',
    autoScroll: true,
    store: 'SupportedCity',
    tbar: [{
        xtype: 'button',
        text: '添加城市',
        id: 'addNewCity'
    }],
    forceFit: true,
    viewConfig: {
        getRowClass: function(record, rowIndex, rowParams, store) {
            return record.get("status") == 0 && 'close-city';
        }
    },
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            header: '城市',
            dataIndex: 'name'
        }, 
        {
            header: '城市编号',
            dataIndex: 'code'
        }, 
        {
            header: '中心点数',
            dataIndex: 'shopAreas'
        }, 
        {
            header: '线路数',
            dataIndex: 'zones'
        }, 
        {
            header: '运费',
            dataIndex: 'shipfee'
        }, 
        {
            header: '满免运费',
            dataIndex: 'deductd'
        }, 
        {
            header: '状态',
            dataIndex: 'status',
            renderer: function(value) {
                if (value == 1) {
                    return "开放";
                } else {
                    return "关闭";
                }
            }
        }, 
        {
            header: "操作",
            dataIndex: 'status',
            itemId: 'status',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value) {
                if (value == 1) {
                    return '<a class="edit-ship-price">设置运费</a> | <a class="close-city-bnt">暂时关闭</a>';
                } else {
                    return '<a class="edit-ship-price">设置运费</a> |<a class="open-city-bnt">上线</a>';
                }
            }
        },
        {
            id: 'editCity',
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false
        }
    ]
});