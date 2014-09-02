Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shoplist',
    title: '店铺列表',
    store: 'Shop',
    itemId: 'shoplist',
    tbar: [{
            xtype: 'button',
            text: '添加店铺',
            itemId: 'add'
        },
        {
            xtype:'combobox',
            name:'areaId',
            itemId:'shopArea',
            store:'ShopArea',
            emptyText:'请选择中心',
            margin:10,
            editable: false,
            queryMode:'local',
            displayField:'name',
            valueField:'id',
            id:'areaId',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        },
        {
            xtype: 'textfield',
            name: 'searchshop',
            itemId: 'searchShopKeyWords',
            emptyText: '输入店铺名称',
            margin: 10,
        }, {

            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }
    ],

    columns: [{
            xtype: 'rownumberer'
        }, {
            text: 'shopId',
            dataIndex: 'id',
            width: 100,
            sortable: false,
            align: 'center',
        },

        {
            text: '店铺名',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '店铺副名称',
            dataIndex: 'desc',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '模板',
            dataIndex: 'templateName',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '地址',
            dataIndex: 'address',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '营业时间',
            dataIndex: 'time',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '所属中心',
            dataIndex: 'areaNames',
            width: 80,
            sortable: false,
            align: 'center',
        }, {
            header: "店铺配置",
            width: 90,
            itemId: 'seeBannerBtn',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<a href="javascript:void(0)">查看</a>';
                return seeBtn;
            }
        }, {
            text: '入住买手',
            dataIndex: 'shopperCount',
            itemId: 'shopperCountId',
            width: 80,
            sortable: false,
            align: 'center',
        }, {
            header: "货架",
            width: 90,
            itemId: 'seeCategoryBtn',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<a href="javascript:void(0)">查看</a>';
                return seeBtn;
                // var style = ['color:blue;cursor:pointer;', 'color:#AAA;cursor:default;'];
                // var seeBtn = '<span style="' + style[0] + '" class="affirm" ><input type="button" value="货到中心" /></span>&nbsp&nbsp';
                // return seeBtn;
            }
        }, {
            header: "",
            width: 90,
            dataIndex: 'status',
            itemId: 'closeOrOpenShopStore',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value) {
                var str = '';
                switch (value) {
                    case 0:
                        str += '<input type="button" value="打开" statusValue="open" /><br/>';
                        break;
                    case 1:
                        str += '<input type="button" value="关闭" statusValue="close"  /><br/>';
                        break;
                }
                return str;
            }
        },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            if(XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if(XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },

});