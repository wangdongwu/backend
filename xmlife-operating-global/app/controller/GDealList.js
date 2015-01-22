Ext.define('XMLifeOperating.controller.GDealList', {
    extend: 'Ext.app.Controller',

    views: [
        'dealManage.GDealList',
        'dealManage.GDealDetail',
        'dealManage.GDealCustomerDetail',
        'dealManage.ReturnProductForm',
        'dealManage.GDealReturnAuditList',
        'dealManage.GDealReturnCheckList',
        'dealManage.GDealReturnComfirm'
    ],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems', 'ReturnGoodsAuditList', 'ReturnGoodsApplyList'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems', 'ReturnGoodsAuditList', 'ReturnGoodsApplyList'],

    refs: [{
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'gDealList',
        selector: 'gDealList',
        xtype: 'gDealList'
    }, {
        ref: 'gDealCustomerDetail',
        selector: 'gDealCustomerDetail',
        xtype: 'gDealCustomerDetail',
        autoCreate: true
    }, {
        ref: 'gDealDetail',
        selector: 'gDealDetail',
        xtype: 'gDealDetail',
        autoCreate: true
    }, {
        ref: 'ReturnProductForm',
        selector: 'ReturnProductForm',
        xtype: 'ReturnProductForm',
        autoCreate: true
    }, {
        ref: 'gDealReturnCheckList',
        selector: 'gDealReturnCheckList',
        xtype: 'gDealReturnCheckList',
        autoCreate: true
    }, {
        ref: 'gDealReturnAuditList',
        selector: 'gDealReturnAuditList',
        xtype: 'gDealReturnAuditList',
        autoCreate: true
    }, {
        ref: 'gDealReturnComfirm',
        selector: 'gDealReturnComfirm',
        xtype: 'gDealReturnComfirm',
        autoCreate: true
    }],

    init: function() {
        var me = this;

        this.control({
            'gDealList': {
                added: me.rendenGDealList
            },
            'gDealList #getDealListByDate': {
                click: function() {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'all');
                    dealList.down('#shopAread').setValue('');
                    dealList.down('#statusSearch').setValue('');
                }
            },
            'gDealList #shopAread': {
                select: function(combo) {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'center');
                    this.areaId = combo.getValue();
                }
            },
            'gDealList #dealSearch': {
                click: me.dealSearch
            },
            'gDealList #statusSearch': {
                select: function(combo) {
                    var dealList = me.getGDealList();
                    me.rendenGDealList(dealList, 'center');
                }
            },
            'gDealList #dealDetail': {
                click: me.onDealDetail
            },
            // 申请售后退货
            'gDealDetail #sellRefund': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        buyNum = record.get('num');

                    Ext.MessageBox.prompt('申请售后退货', '商品名称：' + record.get('name') + ' <br />输入数量：',
                        function(result, value) {
                            if (result == 'ok') {
                                if (isNaN(value)) {
                                    Ext.Msg.alert('错误提示', '你输入的格式有误！');
                                    return;
                                } else if (Number(value) > buyNum) {
                                    Ext.Msg.alert('错误提示', '退款数量必须小于当前商品的购买总数！');
                                    return;
                                }

                                value = buyNum - value;
                                sendPutRequest('deal/setProductNum', {
                                        dealId: record.get('dealBackendId'),
                                        productIdList: [record.get('productId')],
                                        productNumList: [value],
                                        promotionIdList: [record.get('promotionId')]
                                    },
                                    '申请售后退货', '申请售后退货成功', '申请售后退货失败',
                                    function(response) {
                                        me.getDealItemsStore().load();
                                    });
                            }
                        },
                        this, false, buyNum
                    );
                }
            },
            // 全部申请售后退货
            'gDealDetail #refundAll': {
                click: function() {
                    var me = this;
                    var returnGoods = me.getGDealDetail().down('#dealDetails').getSelectionModel().selected;
                    var win = me.getGDealReturnComfirm();
                    var store = win.down('#returnGoodsGrid').getStore();

                    if (returnGoods.length == 0) {
                        Ext.Msg.alert('提示', '请选择需要退货的商品！');
                    } else {
                        store.removeAll();
                        store.add(returnGoods.items);
                        win.show();
                    }
                }
            },
            'gDealReturnComfirm #comfirmreturn': {
                click: function(button, e) {
                    var me = this;
                    var win = button.up('gDealReturnComfirm');
                    var form = button.up('form');
                    var grid = form.down('grid');
                    var store = grid.getStore();
                    var items = store.data.items;
                    var dealId = items[0].get('dealBackendId'); //全部商品都来自一个订单
                    var productIds = [],
                        numbers = [];

                    for (var i = 0, len = items.length; i < len; i++) {
                        //退货商品数量判断
                        var allcount = items[i].get('orderNum');
                        var returncount = items[i].get('returncount');
                        if (items[i].get('dealBackendId') != dealId) { //所有商品订单号判断
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '第' + i + '个商品订单编号有误！',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        }
                        if (!(returncount == '' || returncount)) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '退货数量必须填写！',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        } else if (returncount > allcount) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '退货数量不能大于现有数量',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        } else {
                            productIds.push(items[i].get('productId'));
                            numbers.push(returncount);
                        }
                    }
                    var refresh = function(me) {
                        var store = me.getDealItemsStore();
                        //请求的参数在extraparams中已定义
                        store.load({
                            callback: function(records) {
                                var detail = me.getGDealDetail().down('#dealDetails');
                                var model = detail.getSelectionModel();
                                for (var i = 0, len = records.length; i < len; i++) {
                                    var index = store.indexOfId(records[i].get('id'));
                                    model.select(index, true);
                                }
                                detail.getSelectionModel().deselectAll();
                            }
                        });
                    };
                    var success = function(request) {
                        var code = request.responseText;
                        var str;

                        switch (parseInt(code)) {
                            case 1:
                                str = '申请订单退货成功！';
                                break;
                            case 0:
                                str = '订单退货校验失败:' + code;
                                break;
                            case -1:
                                str = '退货数量不能大于现有数量:' + code;
                                break;
                            case -2:
                                str = '不符合条件的订单:' + code;
                                break;
                            case -3:
                                str = '订单已存在申请中的退货:' + code;
                                break;
                        }

                        Ext.Msg.alert('提示', str);
                        win.close();
                        refresh(me);
                    };
                    var failure = function(request) {
                        var code = request.responseText;
                        var str;

                        switch (parseInt(code)) {
                            case 1:
                                str = '申请订单退货成功！';
                                break;
                            case 0:
                                str = '订单退货校验失败:' + code;
                                break;
                            case -1:
                                str = '退货数量不能大于现有数量:' + code;
                                break;
                            case -2:
                                str = '不符合条件的订单:' + code;
                                break;
                            case -3:
                                str = '订单已存在申请中的退货:' + code;
                                break;
                        }

                        Ext.MessageBox.show({
                            title: '提示',
                            msg: '退货请求失败:' + str,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    };
                    sendRequest('returnGoods/apply', {
                        dealId: dealId,
                        productIds: productIds,
                        numbers: numbers
                    }, '申请订单退货请求', '请求成功', '请求失败', success, failure);

                }
            },
            'gDealList #customerDetail': {
                click: me.onCustomerDetail
            },
            'gDealList #toproblemdeal': {
                click: me.onToProblemDeal
            },
            'gDealList #showReturnProductBtn': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        dealId = record.get('id'),
                        itemStore = me.getDealItemsStore(),
                        status = record.get('status');

                    if (status != 4) {
                        return;
                    }

                    me.getReturnProductForm().down('#DealItemsNumber').setValue("");
                    me.getReturnProductForm().down('#DealItems').setValue("");
                    itemStore.getProxy().extraParams = {
                        deal: dealId
                    };
                    itemStore.load();
                    me.getReturnProductForm().show();
                }
            },
            'ReturnProductForm #DealItems': {
                select: function(combo, records, opts) {
                    if (records.length == 0) return;

                    me._returnProductItem = records[0];
                    me.getReturnProductForm().down('#DealItemsNumber').setValue(records[0].data.num);
                }
            },
            'ReturnProductForm #submit': {
                click: function(button) {
                    var form = button.up('form').getForm(),
                        number = button.up('form').down('#DealItemsNumber').getValue();

                    var data = me._returnProductItem.data;
                    if (number > data.num) {
                        button.up('window').close();
                        Ext.Msg.alert('提示', '退货数量大于购买数量');
                        return false;
                    }

                    var params = {
                        dealId: data.dealBackendId,
                        productIdList: [data.productId],
                        productNumList: [data.num - parseInt(number)],
                        promotionIdList: [data.promotionId]
                    };
                    sendPutRequest('deal/setProductNum', params,
                        '售后退货', '售后退货成功', '售后退货失败',
                        function(response) {
                            Ext.Msg.alert('提示', '售后退货成功');
                            button.up("window").close();
                        });
                }
            },
            'gDealReturnCheckList,gDealReturnAuditList': {
                show: me.returnListShow
            },
            'gDealReturnCheckList #rstatus,gDealReturnAuditList #rstatus': {
                change: me.returnStatusComboChange
            },
            'gDealReturnCheckList #getReturnSearch,gDealReturnAuditList #getReturnSearch': {
                click: me.getReturnSearch
            },

            'gDealReturnCheckList #status, gDealReturnAuditList #status': {
                click: me.returnStatusAction
            },

            'gDealReturnCheckList #queryBtn, gDealReturnAuditList #queryBtn ': {
                click: me.queryReturnList
            },
            'gDealReturnAuditList #batchpass, gDealReturnAuditList #batchrefuse': {
                click: me.batchAudit
            },
            'gDealReturnAuditList #longId':{
                click:me.onDealDetail
            }
        });
    },
    batchAudit: function(button, e) {
        var me = this;
        var grid = me.getGDealReturnAuditList();
        var store = me.getReturnGoodsAuditListStore();
        var checkboxmodel = grid.getSelectionModel();
        var selected = checkboxmodel.selected;
        if (selected.length == 0) {
            return
        } else {
            var data = {
                ids: [],
                pass: false
            };
            switch (button['name']) {
                case 'pass':
                    data.pass = true;
                    break;
                case 'refuse':
                    data.pass = false;
                    break;
            }
            for (var i = 0, items = selected.items, len = items.length; i < len; i++) {
                data.ids.push(items[i].get('id'));
            }
            var success = function(response) {
                var code = response.responseText;
                var str;
                switch (parseInt(code)) {
                    case 1:
                        str = '操作成功';
                        break;
                    case 0:
                        str = '操作失败' + code;
                        break;
                    case -1:
                        str = '已通过审核，不能进行操作' + code;
                        break;
                }
                checkboxmodel.deselectAll();
                //成功后，加载上次参数状态的Store
                store.loadPage(1);
                Ext.Msg.alert('提示', str);
            }
            var failure = function(response) {
                var code = response.responseText;
                var str;
                switch (parseInt(code)) {
                    case 1:
                        str = '申请订单退货成功！';
                        break;
                    case 0:
                        str = '订单退货校验失败:' + code;
                        break;
                    case -1:
                        str = '退货数量不能大于现有数量:' + code;
                        break;
                    case -2:
                        str = '不符合条件的订单:' + code;
                        break;
                    case -3:
                        str = '订单已存在申请中的退货:' + code;
                        break;
                }
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '退货请求失败:' + str,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                checkboxmodel.deselectAll();
            }
            sendPutRequest('returnGoods/audit', data, '退货审核操作', '退货审核操作成功', '退货审核操失败 ', success, failure);


        }
    },
    queryReturnList: function(button, e) {
        var me = this;
        var startdate, enddate, name, panel, store, dealId, combo;
        name = button['name'];
        if (name == 'check') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();
        } else if (name == 'audit') {
            panel = me.getGDealReturnAuditList();
            store = me.getReturnGoodsAuditListStore();
        }
        startdate = panel.down('#startTime');
        enddate = panel.down('#endTime');
        combo = panel.down('#rstatus');

        store.getProxy().extraParams = {
            status: combo.getValue(),
            startTime: startdate.getRawValue(),
            endTime: enddate.getRawValue(),
            cityId: XMLifeOperating.generic.Global.currentCity,
        };
        store.loadPage(1);
    },
    //单个退货申请操作方法
    returnStatusAction: function(grid, cell, rowIndex, colIndex, e, record, row) {
        var me = this;
        var target = e.target;
        var store = null;

        if (e.target.tagName == 'BUTTON') { //是按钮
            var type = target.getAttribute('name');
            var data = {};
            var str = '';
            switch (type) {
                case 'cancel':
                    str = 'cancel';
                    data.id = record.get('id');
                    store = me.getReturnGoodsApplyListStore();
                    break;
                case 'pass':
                    str = 'audit';
                    data.ids = record.get('id');
                    data.pass = true;
                    store = me.getReturnGoodsAuditListStore();
                    break;
                case 'refuse':
                    str = 'audit';
                    data.ids = record.get('id');
                    data.pass = false;
                    store = me.getReturnGoodsAuditListStore();
                    break;
            }
            var success = function(response) {
                var code = response.responseText;
                var str;
                switch (parseInt(code)) {
                    case 1:
                        str = '操作成功';
                        break;
                    case 0:
                        str = '操作失败' + code;
                        break;
                    case -1:
                        str = '已通过审核，不能进行操作' + code;
                        break;
                }
                //成功后，加载上次参数状态的Store
                store.loadPage(1);
                Ext.Msg.alert('提示', str);
            };
            var failure = function(response) {
                var code = response.responseText;
                var str;
                switch (parseInt(code)) {
                    case 1:
                        str = '申请订单退货成功！';
                        break;
                    case 0:
                        str = '订单退货校验失败:' + code;
                        break;
                    case -1:
                        str = '退货数量不能大于现有数量:' + code;
                        break;
                    case -2:
                        str = '不符合条件的订单:' + code;
                        break;
                    case -3:
                        str = '订单已存在申请中的退货:' + code;
                        break;
                }
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '退货请求失败:' + str,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            };
            sendPutRequest('returnGoods/' + str, data, '退货审核操作', '退货审核操作成功', '退货审核操失败 ', success, failure);
        }
    },
    returnListShow: function(grid) {
        var stcombo = grid.down('#rstatus');


        if (!stcombo.getValue()) {
            stcombo.select(3); //3：全部
        } else {
            grid.getStore().loadPage(1)
        }
    },
    returnStatusComboChange: function(combo, newValue, oldValue, e) {

        var me = this;
        var startdate, enddate, name, panel, store;
        name = combo.getName();
        if (name == 'check') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();

        } else if (name == 'audit') {
            panel = me.getGDealReturnAuditList();
            store = me.getReturnGoodsAuditListStore();
        }

        startdate = panel.down('#startTime');
        enddate = panel.down('#endTime');

        store.getProxy().extraParams = {
            status: newValue,
            startTime: startdate.getRawValue(),
            endTime: enddate.getRawValue(),
            cityId: XMLifeOperating.generic.Global.currentCity
        };
        store.loadPage(1);
    },
    getReturnSearch: function(button, e) {
        var me = this;
        var startdate, enddate, name, panel, store, dealId, combo;
        name = button['name'];
        if (name == 'check') {
            panel = me.getGDealReturnCheckList();
            store = me.getReturnGoodsApplyListStore();
        } else if (name == 'audit') {
            panel = me.getGDealReturnAuditList();
            store = me.getReturnGoodsAuditListStore();
        }
        startdate = panel.down('#startTime');
        enddate = panel.down('#endTime');
        dealId = panel.down('#keyword');
        combo = panel.down('#rstatus');


        if (dealId.getValue() !== '') {

            store.getProxy().extraParams = {
                status: combo.getValue(),
                startTime: startdate.getRawValue(),
                endTime: enddate.getRawValue(),
                cityId: XMLifeOperating.generic.Global.currentCity,
                dealId: dealId.getValue()
            };
            store.loadPage(1);

        } else {
            Ext.Msg.alert('提示', '搜索时请输入长单号！');
        }
    },
    rendenGDealList: function(grid, type) {
        var beginTime = grid.down('[name=beginTime]').rawValue;
        var endTime = grid.down('[name=endTime]').rawValue;
        var sstore = this.getDealStore();
        var shopArea = '';
        var status = '';
        switch (type) {
            case 'all':
                shopArea = '';
                break;
            case 'center':
                shopArea = grid.down('#shopAread').getValue();
                status = grid.down('#statusSearch').getValue();
                break;
            default:
                shopArea = '';
                break;
        }
        sstore.getProxy().extraParams = {
            status: status,
            shopArea: shopArea,
            beginTime: beginTime,
            endTime: endTime
        };
        sstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    dealSearch: function() {
        var me = this,
            keyWords = me.getGDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getGDealList();

        view.down('#shopAread').setValue('');
        view.down('#statusSearch').setValue('');
        store.getProxy().extraParams = {
            phoneOrDealId: keyWords
        };
        store.loadPage(1);
    },
    onDealDetail: function(view, item, rowIndex, colIndex, e) {
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getGDealDetail(),
            form = win.down('form').getForm(),
            grid = win.down('#dealDetails'),
            localPage = this.getContentPanel().getActiveTab().xtype,
            status = record.get('status');
        // 单独获取详情的接口
        Ext.Ajax.request({
            method: 'GET',
            url: XMLifeOperating.generic.Global.URL.biz + 'deal/' + record.get('dealBackendId'),
            params: {},
            success: function(response) {
                if (response.status == 200 && response.statusText == 'OK') {
                    var data = Ext.decode(response.responseText);
                    form.setValues(data);
                }
            },
            failure: function() {
                Ext.Msg.alert('获取订单详情失败！');
            }
        });

        var store = this.getDealItemsStore();
        store.getProxy().extraParams = {
            deal: record.get('dealBackendId') || record.get('dealId'),
        };
        store.load({
            callback: function(records) {
                var model = win.down('#dealDetails').getSelectionModel();
                model.deselectAll();

                // 仅订单管理页且为完成状态才会显示退货操作
                if (localPage == 'gDealList' && status == 4) {
                    win.down('#refundAll').show();
                    grid.headerCt.items.getAt(0).show();
                } else {
                    win.down('#refundAll').hide();
                    grid.headerCt.items.getAt(0).hide();
                }
            }
        });

        win.show();
    },
    onCustomerDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var store = this.getCustomerStore();

        var win = this.getGDealCustomerDetail();
        store.on('load', function(store, records, successful, eOpts) {
            store.data.items[0].data['dtoAddress'] = dealDetail.getData()['dtoAddress'];
            win.down('form').loadRecord(store.data.items[0]);
        });
        win.show();
        store.getProxy().extraParams = {
            uid: dealDetail.get('customId'),
        };
        store.loadPage(1);
    },
    onToProblemDeal: function(view, rowIndex, colIndex, column, e) {
        var dealitem = view.getRecord(view.findTargetByEvent(e));
        var dealBackendId = dealitem.get('dealBackendId');
        var url = 'deal/transToProblem/' + dealBackendId;
        var me = this;

        Ext.MessageBox.confirm(
            '确认操作',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                        function(response) {
                            if (response.responseText != 0) {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '转为问题订单失败',
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '该订单被成功标记为问题订单',
                                    icon: Ext.Msg.INFO,
                                    buttons: Ext.Msg.OK
                                });
                                var sstore = me.getDealStore();
                                sstore.getProxy().extraParams = {
                                    shopArea: Ext.getCmp('gDealList').down('#shopAread').getValue(),
                                    assignShopper: true
                                };
                            }
                        }
                    );
                }
            }
        );
    }
});
