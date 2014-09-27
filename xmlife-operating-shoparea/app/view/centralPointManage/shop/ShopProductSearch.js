Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductSearch', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopproductsearch',
    header: false,
    store: 'ProductSearch',
    itemId: 'shopProductSearch',
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '编码',
        dataIndex: 'skuId',
        sortable: true,
    }, {
        text: 'id',
        dataIndex: 'id'
    }, {
        text: '商品名称',
        dataIndex: 'name',
        sortable: false,
        align: 'center',
    }, {
        text: '所属店铺',
        dataIndex: 'shopname',
        width: 60,
        sortable: false,
        align: 'center',
    }, {
        text: '所属货架',
        dataIndex: 'categoryname',
        width: 60,
        sortable: false,
        align: 'center'
    }, {
        text: '单位',
        dataIndex: 'unitname',
        width: 60,
        sortable: false,
        align: 'center',
    }, {
        text: '进价',
        dataIndex: 'pprice',
        width: 60,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            return value / 100;
        }
    }, {
        text: '原价',
        dataIndex: 'fprice',
        width: 60,
        sortable: false,
        align: 'center',
        renderer: function(value) {

            return value / 100;
        }
    }, {
        text: '售价',
        dataIndex: 'dprice',
        width: 60,
        sortable: false,
        align: 'center',
        renderer: function(value) {

            return value / 100;
        }
    }, {
        text: '限购类型',
        dataIndex: 'limitType',
        width: 100,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            var str = '';
            if (value == 1) {
                str = '每日限购数量';
            } else if (value == 2) {
                str = '累计限购数量';
            }
            return str;
        }
    }, {
        text: '限购数量',
        dataIndex: 'limitCount',
        width: 60,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            if (value == 0) {
                value = '';
            }
            return value;
        }
    }, {
        header: "",
        width: 90,
        dataIndex: 'status',
        itemId: 'putawayOrOut',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            var str = '';
            switch (value) {
                case 3: //售罄，显示上架按钮
                    str += '<input type="button" value="上架" statusValue="online" class="putaway" /><br/>';
                    break;
                case 1:
                    str += '--';
                    break;
                case 0: //在上架中，显示下架按钮
                    str += '<input type="button" value="下架" statusValue="soldout"  class="putaway" /><br/>';
                    break;
            }
            return str;
        }
    }, {
        header: "",
        width: 90,
        dataIndex: 'status',
        itemId: 'frozen',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {

            var str = '';
            switch (value) {
                case 0:
                    str += '<input type="button" value="雪藏" statusValue="offline" class="frozen" />';
                    break;
                case 1:
                    str += '<input type="button" value="取消雪藏" statusValue="soldout" class="frozen" />';
                    break;
                case 3:
                    str += '<input type="button" value="雪藏" statusValue="offline"  class="frozen" />';
            }
            return str;

        }
    }, {
        text: '编辑',

        xtype: 'actioncolumn',
        width: 50,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: false,
        itemId: 'openModifyShelvesGoodsWin',

    }, {
        text: '排序',
        dataIndex: 'rank',
        sortable: true,
        align: 'center',
    }]

});