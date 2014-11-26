Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductOnline', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopproductonline',
    header: false,
    columnLines: true,
    store: 'ShopCategories',
    initComponent: function() {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            fields: ['value', 'name', 'itemId', 'disabled'],
            data: [{
                'value': 0,
                'name': '上架',
                'itemId': 'onCarriage',
                'disabled': false
            }, {
                'value': 1,
                'name': '雪藏',
                'itemId': 'frozen',
                'disabled': false
            }, {
                'value': 2,
                'name': '废弃',
                'itemId': 'waste',
                'disabled': false
            }, {
                'value': 3,
                'name': '下架',
                'itemId': 'underCarriage',
                'disabled': false
            }]
        });
        var combo = Ext.create('Ext.form.ComboBox', {
            displayField: 'name',
            valueField: 'value',
            triggerAction: 'all',
            autoScroll: true,
            editable: false,
            queryMode: 'local',
            tpl: Ext.create('Ext.XTemplate', '<ul class="x-list-plain">',
                '<tpl for=".">',
                '<li class="x-boundlist-item"',
                '<tpl if="disabled == true">',
                'style="color:lightgray;background-color:whitesmoke;"',
                '</tpl>',
                '>{name}</li>',
                '</tpl>', '</ul>'),
            store: store,
            listeners: {
                beforeselect: function(combo, record, index) {
                    if (record.get('disabled')) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        });
        Ext.applyIf(me, {
            columns: [{
                xtype: 'rownumberer'
            }, {
                text: '商品ID',
                dataIndex: 'id',
                align: 'center'
            }, {
                text: '商品名称',
                dataIndex: 'name',
                align: 'center'
            }, {
                text: '所属货架',
                dataIndex: 'id',
                align: 'center',
                renderer: function(value, e) {
                    var categories = e.record.get('categoryNames');
                    var str = [];
                    for (var i = 0, len = categories.length; i < len; i++) {
                        str.push(categories[i]);
                    }
                    return str.join('<br/>');
                }
            }, {
                text: '操作',
                width: 90,
                dataIndex: 'status',
                itemId: 'putawayOrOut',
                menuDisabled: true,
                sortable: true,
                align: 'center',
                style: 'cursor:pointer',
                editor: combo,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    var me = this,
                        column = me.down('#putawayOrOut'),
                        editor = me.down('#putawayOrOut').getEditor(),
                        store = editor.getStore();
                    var returnStr = '';
                    if (!editor.getStore()) {}
                    var comboRecordIndex = store.find(editor.valueField, value),
                        comboReocrd = store.getAt(comboRecordIndex);
                    if (record == null) {
                        returnStr = value;
                    } else {
                        returnStr = comboReocrd.get(editor.displayField);
                    }
                    return returnStr;
                }
            }],
            bbar: [{
                xtype: 'pagingtoolbar',
                itemId: 'pagetool',
                store: 'ShopCategories',
                displayInfo: true,
                style: 'border:none'
            }],
            plugins: [{
                ptype: 'cellediting',
                clicksToEdit: 1
            }, {
                ptype: 'gridviewdragdrop',
                dragText: 'Drag and drop to reorder'
            }]
        });
        me.callParent(arguments);
    }
});