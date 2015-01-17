Ext.define('XMLifeOperating.view.waitForAudit.WaitForAuditList', {
    extend: 'Ext.grid.Panel',
    id: 'waitForAuditList',
    xtype: 'waitForAuditList',
    autoScroll: true,
    store: 'WaitForAudit',
    title: '改价审核',
    closable: true,
    forceFit: true,
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    requires: [
        'Ext.panel.Panel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.ux.RowExpander',
        'Ext.selection.CheckboxModel'
    ],
    tbar: [{
            xtype: 'button',
            name: 'aKeyBy',
            text: '批量通过',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'button',
            name: 'aKeyNoBy',
            text: '批量不通过',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'button',
            name: 'allRefresh',
            text: '全部',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'combobox',
            name: 'shopArea',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '筛选中心',
            margin: 10,
            editable: false,
            displayField: 'name',
            valueField: 'id'
        }, {
            xtype: 'combobox',
            name: 'shopList',
            itemId: 'shopList',
            store: 'Shop',
            emptyText: '筛选店铺',
            margin: 10,
            editable: false,
            displayField: 'name',
            valueField: 'id'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '搜索商品ID',
            name: 'goodsSkuId',
            allowBlank: false,
            margin: '0 5 0 5'
        }, {
            xtype: 'button',
            name: 'skuIdSearch',
            style: {
                border: '1px solid #99bce8'
            },
            text: '搜索'
        }, {
            xtype: 'button',
            name: 'historicalRecords',
            text: '审核历史记录',
            style: {
                border: '1px solid #99bce8'
            }
        }
    ],
    // dockedItems : [
    //   {
    //     xtype : 'pagingtoolbar',
    //     itemId : 'pagetoll',
    //     store : 'WaitForAudit',
    //     dock : 'bottom',
    //     displayInfo : true/*,
    //     items : ['->'],   
    //     prependButtons: true*/
    //   }
    // ],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        header: '编码',
        dataIndex: 'skuId'
    }, {
        header: 'ID',
        dataIndex: 'id'
    }, {
        header: '商品名称',
        dataIndex: 'productName'
    }, {
        header: '商品类型',
        dataIndex: 'categoryName'
    }, {
        header: '所属店铺',
        dataIndex: 'shopName'
    }, {
        header: '进价',
        dataIndex: 'proPprice',
        renderer: function(value, da, record) {
            return value / 100;
        }
    }, {
        header: '改后进价',
        dataIndex: 'pprice',
        renderer: function(value, da, record) {
            var pprice = record.get('pprice');
            var proPprice = record.get('proPprice');
            value = value / 100;
            if (pprice != proPprice) {
                return '<span style="color:red;">' + value + '</span>';
            }
            return value;
        }
    }, {
        header: '原价',
        dataIndex: 'proPrice',
        renderer: function(value, da, record) {
            return value / 100;
        }
    }, {
        header: '改后原价',
        dataIndex: 'price',
        renderer: function(value, da, record) {
            var price = record.get('price');
            var proPrice = record.get('proPrice');
            value = value / 100;
            if (price != proPrice) {
                return '<span style="color:red;">' + value + '</span>';
            }
            return value;
        }
    }, {
        header: '售价',
        dataIndex: 'proDprice',
        renderer: function(value, da, record) {
            return value / 100;
        }
    }, {
        header: '改后售价',
        dataIndex: 'dprice',
        renderer: function(value, da, record) {
            var dprice = record.get('dprice');
            var proPprice = record.get('proDprice');
            value = value / 100;
            if (dprice != proPprice) {
                return '<span style="color:red;">' + value + '</span>';
            }
            return value;
        }
    }, {
        header: '修改人',
        dataIndex: 'updater'
    }, {
        header: '修改时间',
        dataIndex: 'updated',
        renderer: function(value) {
            var newTime = new Date(value);
            var newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
            newDate += '<br />' + newTime.getHours() + ':' + newTime.getMinutes();
            return newDate;
        }
    }, {
        header: '状态',
        dataIndex: 'status',
        renderer: function(v) {
            //状态 0:提交 1:通过 2:拒绝
            var data = {
                '0': '未审核',
                '1': '通过',
                '2': '拒绝'
            }
            return data[v];
        }
    }, {
        header: '',
        dataIndex: 'status',
        itemId: 'operateAudit',
        renderer: function(v) {
            return '<input type="button" value="操作"/>';
        }
    }],
    columnLines: true
});
