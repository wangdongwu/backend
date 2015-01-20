Ext.define('XMLifeOperating.view.dealManage.GDealReturnComfirm', {
    extend: 'Ext.window.Window',
    xtype: 'gDealReturnComfirm',
    title: '售后退货申请',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: ['id', 'name', 'allcount', 'returncount','dealBackendId','num']
        });
        this.items = [{
            xtype: 'form',
            itemId: 'dealreturnform',
            layout: 'anchor',
            buttonAlign: 'center',
            border: false,
            defaults: {
                margin: 0,
                padding: 0,
                labelWidth: 85,
                labelPad: 15,
            },
            items: [{
                xtype: 'textfield',
                name: 'dealid',
                itemId: 'dealreturnid',
                editable: false,
                hidden: true
            }, {
                xtype: 'grid',
                itemId: 'returnGoodsGrid',
                store: store,
                forceFit: true,
                border: false,
                columnLines: true,
                columns: [{
                    xtype: 'rownumberer',
                    width: 50,
                    align: 'center'
                }, {
                    text: '商品名称',
                    dataIndex: 'name',
                    align: 'center'

                }, {
                    text: '现有数量',
                    dataIndex: 'num',
                    align: 'center'
                }, {
                    text: '退货数量',
                    dataIndex: 'returncount',
                    editor: Ext.form.NumberField(),
                    align: 'center',
                    field: {
                        xtype: 'numberfield'
                    }
                }],
                plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
                ],
                listeners: {
                    validateedit: function(editor, eObj) {
                        var me = this;
                        var field = eObj.field;
                        var allcount = eObj.record.get('allcount');
                        var returncount = eObj.value;
                        if (field == 'returncount') {
                            if (returncount > allcount) {
                                Ext.MessageBox.show({
                                    title: '提示',
                                    msg: '退货数量不能大于现有数量',
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                                return false;
                            } else {
                                return true;
                            }
                        } else {
                            Ext.Msg.alert('提示', '无法修改该数据！');
                            return false;
                        }
                    }
                }
            }],
            buttons: [{
                text: '确认提交',
                itemId: 'comfirmreturn'
            }]
        }];

        this.callParent(arguments);
    }
});
