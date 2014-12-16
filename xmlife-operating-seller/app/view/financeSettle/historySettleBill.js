/**
 *
 * @authors ljlong
 * @date    2014-12-15 14:32:35
 * @version $Id$
 */
Ext.define('XMLifeSeller.view.financeSettle.historySettleBill', {
    extend: 'Ext.grid.Grid',
    xtype: 'historySettleBill',

    config: {
        store: Ext.create('Ext.data.Store', {
            fileds: [
                'beginTime',
                'amount'
            ],
            data: [{
                'beginTime': '123',
                'amount': '123'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }, {
                'beginTime': '123',
                'amount': '52'
            }]
        }),
        titleBar: {
            xtype: "titlebar",
            docked: "top",
            items: [{
                xtype: 'button',
                text: '有问题，找财务'
            }]
        },
        defaults: {
            align: 'center'
        },
        columns: [{
            text: '结算发起日',
            dataIndex: 'beginTime',
            width: 150,
            align: 'center'

        }, {
            text: '结算金额',
            dataIndex: 'amount',
            width: 150,
            align: 'center'
        }, {
            text: '账期起点',
            dataIndex: 'amount',
            width: 150,
            align: 'center'

        }, {
            text: '账期重点',
            dataIndex: 'amount',
            width: 150,
            align: 'center'

        }, {
            text: '结算受理日',
            dataIndex: 'amount',
            width: 150,
            align: 'center'

        }, {
            text: '移交银行日',
            dataIndex: 'amount',
            width: 150,
            align: 'center'

        }, {
            text: '导出',
            dataIndex: 'amount',
            width: 150,
            align: 'center',
            renderer: function() {

            }

        }]
    }

})
