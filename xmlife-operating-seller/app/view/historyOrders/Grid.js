Ext.define('XMLifeSeller.view.historyOrders.Grid', {
    extend: 'Ext.Container',
    xtype: 'historyOrdersGrid',
    config: {
        layout: 'fit',
        columns: [],
        items: [{
            docked: 'top',
            height: 40,
            html: 'Header not set. Please check "columns" property value'
        }, {
            xtype: 'list',
            itemTpl: 'Item template not set. Please check "columns" property value'
        }]
    },
    initialize: function() {
        var headerHtml = '',
            itemTplHtml = '';
        Ext.Array.forEach((this.getColumns() || []), function(col) {
            headerHtml += '<span style="display:inline-block;width:' + col.width + '">' + col.text + '</span>';
            itemTplHtml += '<span style="display:inline-block;width:' + col.width + '">{' + col.dataIndex + '}</span>';
        });

        this.down('container').setHtml('<div style="padding:12px 15px;font-size:14px;font-weight:bold;">' + headerHtml + '</div>');
        this.down('list').setItemTpl('<div>' + itemTplHtml + '</div>');
    }
});
