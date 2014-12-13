Ext.define('XMLifeSeller.view.historyOrders.DateAndExportToolbar', {
    extend: 'Ext.Toolbar',
    requires: [
        'Ext.field.DatePicker'
    ],
    xtype: 'historyOrdersToolbar',
    config: {
        docked: 'top',
        ui: 'neutral',
        layout: {
            align: 'center'
        },
        items: [{
            xtype: 'datepickerfield',
            destroyPickerOnHide: true,
            name: 'startDate',
            value: new Date(),
            picker: {
                yearFrom: 2013
            }
        }, {
            xtype: 'datepickerfield',
            destroyPickerOnHide: true,
            label: '至',
            labelWidth: '15%',
            name: 'endDate',
            value: new Date(),
            picker: {
                yearFrom: 2013
            }
        }, {
            text: '查看'
        }, {
            xtype: 'spacer'
        }, {
            text: '[未设置]',
            itemId: 'exportBtn'
        }]
    }
});
