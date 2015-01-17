Ext.define('XMLifeOperating.view.centralPointManage.centralPointConfigure.CentralPointConfigureList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    id: 'centralpointconfigurelist',
    xtype: 'centralpointconfigurelist',
    title: '首页配置',
    store: 'ShopArea',

    tbar: [{
        xtype: 'button',
        text: '添加展示店铺',
        itemId: 'topshopsAdd'
    }],

    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '编号',
        dataIndex: 'id',
        width: 60,
        sortable: true,
        align: 'left'
    }, {
        text: '管辖线路',
        dataIndex: 'zoneNames',
        width: 100,
        sortable: true,
        align: 'left',
        renderer: function(value) {
            var str = '';
            for (var i = 0; i < value.length; i++) {
                str += value[i] + '<br />';
            }
            return str;
        }
    }, {
        text: '店铺',
        dataIndex: 'shopNames',
        width: 100,
        sortable: true,
        align: 'left',
        renderer: function(value) {
            var str = '';
            for (var i = 0; i < value.length; i++) {
                str += value[i] + '<br />';
            }
            return str;
        }
    }, {
        header: "首页配置",
        width: 70,
        itemId: 'seeBannerBtn',
        menuDisabled: true,
        sortable: true,
        align: 'center',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return '<a href="javascript:;">配置</a>';
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true
});
