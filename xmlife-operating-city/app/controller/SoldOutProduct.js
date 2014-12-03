Ext.define('XMLifeOperating.controller.SoldOutProduct', {
    extend: 'Ext.app.Controller',
    views: [
        'soldoutProductManage.soldoutRecord.soldoutRecordList',
        'soldoutProductManage.soldoutRecord.soldoutProductInstanceEdit',
        'soldoutProductManage.soldoutRecord.soldoutProductTemplateEdit',
        'soldoutProductManage.shopperRecord.shopperRecordList'
    ],
    stores: [
        'AdminAdminShopType',
        'OfflineProductGetOfflineRecords',
        'GetOptLogs'
    ],
    models: [
        'AdminAdminShopType',
        'OfflineProductGetOfflineRecords',
        'GetOptLogs'
    ],
    refs: [{
        ref: 'soldoutRecordList',
        selector: 'soldoutRecordList',
        xtype: 'soldoutRecordList'
    }, {
        ref: 'soldoutProductInstanceEdit',
        selector: 'soldoutProductInstanceEdit',
        xtype: 'soldoutProductInstanceEdit',
        autoCreate: true
    }, {
        ref: 'soldoutProductTemplateEdit',
        selector: 'soldoutProductTemplateEdit',
        xtype: 'soldoutProductTemplateEdit',
        autoCreate: true
    }, {
        ref: 'shopperRecordList',
        selector: 'shopperRecordList',
        xtype: 'shopperRecordList'
    }],
    init: function() {
        var me = this;
        me.control({
            'soldoutRecordList': {
                show: me.showSoldoutRecordList,
                beforeedit: me.productStatusEnable,
                validateedit: me.productStatusChange
            },
            'soldoutRecordList #queryRecordBtn': {
                click: me.querySoldoutRecordList
            },
            'soldoutRecordList #recordSearchBtn': {
                click: me.searchSoldoutRecordList
            },
            'soldoutRecordList #editProductInstance, soldoutRecordList #editProductTemplate': {
                editProduct: me.editProduct
            },
            'soldoutProductInstanceEdit #editShelvesGoodsWin': {
                click: me.saveProductInstanceEdit
            },
            'soldoutProductTemplateEdit #btnSave': {
                click: me.saveProductTemplateEdit
            },
            'shopperRecordList': {
                show: me.showShopperRecordList
            },
            'shopperRecordList #queryRecordBtn': {
                click: me.queryShopperRecordList
            },
            'shopperRecordList #recordSearchBtn': {
                click: me.searchShopperRecordList
            }
        });
    },
    showSoldoutRecordList: function() {
        var me = this;
        var store = me.getOfflineProductGetOfflineRecordsStore(),
            recordList = me.getSoldoutRecordList(),
            startTimePicker = recordList.down('[name="startTime"]'),
            endTimePicker = recordList.down('[name="endTime"]');
        store.getProxy().extraParams = {
            startTime: startTimePicker.getValue().getTime(),
            endTime: endTimePicker.getValue().getTime() + 86400000
        }
        store.loadPage(1, {
            params: {
                page: 1,
                start: 0,
                limit: 25
            }
        });
    },
    showShopperRecordList: function() {
        var me = this;
        var store = me.getGetOptLogsStore(),
            recordList = me.getShopperRecordList();
        store.load();
    },
    querySoldoutRecordList: function() {
        var me = this;
        var store = me.getOfflineProductGetOfflineRecordsStore(),
            recordList = me.getSoldoutRecordList(),
            keyWords = recordList.down('#recordSearchKeyWords').setValue(''),
            startTimePicker = recordList.down('[name="startTime"]'),
            endTimePicker = recordList.down('[name="endTime"]');
        store.getProxy().extraParams = {
            startTime: startTimePicker.getValue().getTime(),
            endTime: endTimePicker.getValue().getTime() + 86400000
        }
        store.loadPage(1, {
            params: {
                page: 1,
                start: 0,
                limit: 25
            }
        });
    },
    queryShopperRecordList: function() {
        var me = this;
        var store = me.getGetOptLogsStore(),
            recordList = me.getShopperRecordList(),
            keyWords = recordList.down('#recordSearchKeyWords').setValue('');
        store.load();
    },
    searchSoldoutRecordList: function() {
        var me = this;
        var store = me.getOfflineProductGetOfflineRecordsStore(),
            recordList = me.getSoldoutRecordList(),
            keyWords = recordList.down('#recordSearchKeyWords').getValue(),
            keyType = null,
            startTimePicker = recordList.down('[name="startTime"]'),
            endTimePicker = recordList.down('[name="endTime"]');
        if (keyWords.length == 11 && isNaN(keyWords)) {
            keyType = 1
        } else {
            keyType = 0;
        }
        store.getProxy().extraParams = {
            startTime: startTimePicker.getValue().getTime(),
            endTime: endTimePicker.getValue().getTime() + 86400000,
            keyword: keyWords,
            keyType: keyType
        }
        store.loadPage(1, {
            params: {
                page: 1,
                start: 0,
                limit: 25
            }
        });
    },
    searchShopperRecordList: function() {
        var me = this;
        var store = me.getGetOptLogsStore(),
            recordList = me.getShopperRecordList(),
            keyWords = recordList.down('#recordSearchKeyWords').getValue(),
            keyType = null;
        if (keyWords == '') {
            store.load();
        } else {
            if (keyWords.length == 11 && isNaN(keyWords)) {
                keyType = 1
            } else {
                keyType = 0;
            }
            store.load({
                params: {
                    keyword: keyWords,
                    keyType: keyType
                }
            });
        }
    },
    editProduct: function(args) {
        var me = this;
        var type = args.iconId;
        if (type === 'editProductInstance') {
            me.editProductInstance(me.getSoldoutProductInstanceEdit(), args.record);
        } else if (type === 'editProductTemplate') {
            me.editProductTemplate(me.getSoldoutProductTemplateEdit(), args.record);
        }
    },
    editProductInstance: function(win, record) {
        var me = this,
            editWin = win,
            productData = record.get('product'),
            values = {};
        values.id = record.get('productId');
        values.name = productData.name;
        values.facePrice = (Math.abs(productData.fprice / 100));
        values.purchasePrice = (Math.abs(productData.pprice / 100));
        values.discountPrice = (Math.abs(productData.dprice / 100));
        values.dayLimitCount = '';
        values.dayTodayLimitCount = '';
        values.totalLimitCount = '';
        values.totalTodayLimitCount = '';
        switch (productData.limitType) {
            case 1:
                values.dayLimitCount = productData.limitCount;
                values.dayTodayLimitCount = productData.productLimitCount;
                break;
            case 2:
                values.totalLimitCount = productData.limitCount;
                values.totalTodayLimitCount = productData.productLimitCount;
                break;
            default:
                break;
        }

        me.disableUnAuthorityCmp(record.get('shopType'));
        var stockEnable = record.get('stockEnable');
        var stockCmp = win.down('#editstock');
        if (!stockEnable) { //库存关闭
            if (!stockCmp.isDisabled()) { //有权限
                stockCmp.setDisabled(true);
            }
        }
        win.down('form').getForm().setValues(values);
        win.show();
    },
    editProductTemplate: function(win, record) {
        var me = this,
            editWin = win,
            templateData = record.get('template'),
            values = {};
        values.barCode = templateData.barCode;
        values.canPartiallyReturn = templateData.canPartiallyReturn;
        values.desc = templateData.desc;
        values.id = templateData.id;
        values.picMap = templateData.picMap;
        values.picture = templateData.picture;
        values.rank = templateData.rank;
        values.rank2 = templateData.rank2;
        values.skuId = templateData.skuId;
        values.tag = templateData.tag;
        values.unit = templateData.unit;
        values.unitname = templateData.unitname;
        values.name = templateData.name.split('\n');
        for (var i = 1, len = values.name.length; i <= len; i++) {
            values['name' + i] = values.name[i - 1];
        }
        win.down('form').getForm().setValues(values);
        win.show();
    },
    productStatusChange: function(e, row) {
        var me = this;
        me.productStatusValidate(e, row, me.showSoldoutRecordList);
    },
    productStatusEnable: function(grid, cell) {
        var me = this;
        var record = cell.record;
        var shopType = record.get('shopType');
        me.disableUnAuthorityCmp(shopType, null, me.getSoldoutProductInstanceEdit());
    },
    productStatusValidate: function(e, row, fn, args) {
        var me = this;
        var rec = row.record.get('product');
        var value = row.value;
        var field = e.context.field;
        var store = e.grid.getStore();

        if (field === 'status') {
            var url = ['product'],
                status = value,
                id = row.record.get('productId');
            var success = function(reponse) {
                fn.call(me, args);
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '改变商品状态成功',
                    buttons: Ext.Msg.OK
                });
                return true;
            }
            var failure = function() {
                fn.call(me, args);
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '改变商品状态失败',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                return false;
            }
            switch (status) {
                case 0: //上架
                    url.push('/online');
                    break;
                case 1: //雪藏
                    url.push('/offline');
                    break;
                case 2: //废弃
                    url.push('/remove');
                    break;
                case 3: //下架
                    url.push('/soldout');
                    break;
                default:
                    return;
                    break;
            }
            sendPutRequest(url.join(''), {
                productId: id,
            }, '改变商品状态', '改变商品状态成功', '改变商品状态失败', success, failure);
        } else {
            return false;
        }
    },
    editprice: function(formData, productId, flags) {
        var me = this;
        var form = formData,
            id = productId,
            record = form.getRecord(),
            values = form.getValues(),
            facePrice = me.priceTransform(values['facePrice']),
            discountPrice = me.priceTransform(values['discountPrice']),
            purchasePrice = me.priceTransform(values['purchasePrice']),
            editWindow = me.getSoldoutProductInstanceEdit(),
            flagIdx = flags.length - 1,
            data = {};
        var success = function(response) {
            flags[flagIdx] = true;
            if (response.responseText == 2) {
                var message = Ext.MessageBox.show({
                    title: '提示',
                    msg: '价格修改成功，等待审核…',
                    buttons: Ext.Msg.OK
                });
                setTimeout(function() {
                    message.close();
                }, 1000);
            }
        }
        var failure = function(response) {
            flags[flagIdx] = false;
            Ext.MessageBox.show({
                title: '提示',
                msg: '限购库存失败',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }
        if (discountPrice !== "" && discountPrice >= facePrice) {
            Ext.Msg.alert('Invalid Data', '折扣价不能大于等于原价');
            return;
        }
        data.id = id;
        data.facePrice = facePrice;
        data.purchasePrice = purchasePrice;
        data.discountPrice = discountPrice;
        sendPutRequest('product/updatePrice', data, '修改商品价格', '修改商品价格成功', '修改商品价格失败', success, failure);
    },
    editlimit: function(formData, productId, flags) {
        var me = this;
        var form = formData,
            id = productId,
            record = form.getRecord(),
            limitType = form.getValues()['limitType'],
            flagIdx = flags.length - 1,
            editWindow = me.getSoldoutProductInstanceEdit(),
            data = {};
        var success = function(response) {
            flags[flagIdx] = true;
        }
        var failure = function(response) {
            flags[flagIdx] = false;
            Ext.MessageBox.show({
                title: '提示',
                msg: '限购修改失败',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }
        if (limitType == 1) {
            data.limitCount = form.getValues()['dayLimitCount'];
            data.productLimitCount = form.getValues()['dayTodayLimitCount'];
        } else if (limitType == 2) {
            data.limitCount = form.getValues()['totalLimitCount'];
            data.productLimitCount = form.getValues()['totalTodayLimitCount'];
        } else {
            data.limitType = 0;
            data.limitCount = 0;
            data.productLimitCount = 0;
        }
        if (data.limitCount == 0 || data.limitCount == null || data.limitCount == '') {
            data.limitType = 0;
        }
        data.limitType = limitType;
        data.id = id;
        sendPutRequest('product/updateLimit', data, '修改商品限购', '修改商品限购成功', '修改商品限购失败', success, failure);
    },
    editstock: function(formData, productId, flags) {
        var me = this;
        var form = formData,
            id = productId,
            record = form.getRecord(),
            stock = form.getValues()['stock'],
            flagIdx = flags.length - 1,
            editWindow = me.getSoldoutProductInstanceEdit(),
            data = {};
        var success = function(response) {
            flags[flagIdx] = true;
        }
        var failure = function(response) {
            flags[flagIdx] = false;
            Ext.MessageBox.show({
                title: '提示',
                msg: '限购库存失败',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }
        if (stock == '') {
            stock = -1;
        } else if (stock == 0 || stock < -1) {
            Ext.MessageBox.show({
                title: '提示',
                msg: '库存输入错误！',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            return
        }
        data.stock = stock;
        data.id = id;
        sendPutRequest('product/updateStock', data, '修改商品库存', '修改商品库存成功', '修改商品库存失败', success, failure);
    },
    priceTransform: function(value) {
        return parseInt((value * 100).toFixed());
    },
    isDisabledCmp: function(view, cmpId) {
        var me = this,
            cmp = view.down('#' + cmpId);
        if (cmp) {
            if (!cmp.isDisabled()) { //未被禁用
                if (cmp.down && cmp.down('#belngShelf')) { //移动货架
                    return cmp.down('#belngShelf').isDisabled()
                } else {
                    return false
                }
            } else {
                return true
            }
        } else {
            return true
        }
    },
    disableUnAuthorityCmp: function(shopType, listview, editview) {
        var me = this;
        var adminShopTypeStore = me.getAdminAdminShopTypeStore(),
            currentShopType = shopType,
            userInfo = adminShopTypeStore.getAt(0).getData(), //获取第一位
            listview = listview || me.getSoldoutRecordList(),
            editview = editview || me.getSoldoutProductInstanceEdit();

        for (var properName in userInfo) {
            var properArray = userInfo[properName];
            var itemId = '#' + properName;
            if (properArray == '' || (properArray instanceof Array && properArray.indexOf(currentShopType) == -1)) { //没有权限
                if (editview.down(itemId)) { //在ProductEdit中的操作
                    editview.down(itemId).setDisabled(true);
                } else if (listview.down(itemId)) { //在ProductList中的操作
                    listview.down(itemId).setDisabled(true);
                } else { //状态下拉框禁用
                    var editor = listview.down('#putawayOrOut').editor || listview.down('#putawayOrOut').getEditor();
                    if (editor.findRecord('itemId', properName)) {
                        editor.findRecord('itemId', properName).set('disabled', true);
                    }
                }
            } else {
                if (editview.down(itemId)) {
                    editview.down(itemId).setDisabled(false);
                } else if (listview.down(itemId)) {
                    listview.down(itemId).setDisabled(false);
                } else {
                    var editor = listview.down('#putawayOrOut').editor || listview.down('#putawayOrOut').getEditor();
                    if (editor.findRecord('itemId', properName)) {
                        editor.findRecord('itemId', properName).set('disabled', false);
                    }
                }
            }
        }
    },
    saveProductInstanceEdit: function() {
        var me = this;
        var editWindow = me.getSoldoutProductInstanceEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            record = form.getValues(),
            adminShopTypeStore = me.getAdminAdminShopTypeStore(),
            userInfo = adminShopTypeStore.getAt(0).getData();
        var flags = [];
        var count = 0;
        if (form.isValid()) {
            for (var pro in userInfo) {
                if (pro == 'frozen') {
                    continue
                }
                if (!me.isDisabledCmp(editWindow.down('form'), pro)) {
                    count += 1;
                }
            }
            var clock = setInterval(function() {
                if (flags.indexOf(0) == -1 && flags.length == count) {
                    clearInterval(clock);
                    me.showSoldoutRecordList();
                    editWindow.close();
                }
            }, 500);
            for (var pro in userInfo) {
                if (pro == 'frozen') {
                    return
                }
                if (!me.isDisabledCmp(editWindow.down('form'), pro)) {
                    flags.push(0);
                    me[pro].call(me, form, record['id'], flags);
                }
            }
        } else {
            Ext.Msg.alert('无效数据', '请更正表单数据！');
        }
    },
    saveProductTemplateEdit: function() {
        var me = this;
        var win = me.getSoldoutProductTemplateEdit();
        var form = win.down('form');
        var values = form.getForm().getValues();

        if (form.isValid()) {
            var id = values.id;
            var desc = values.desc;
            var picture = values.picture;
            var unit = values.unit;
            var tag = values.tag;
            var barcode = values.barCode;
            var rank = values.rank;
            var rank2 = values.rank2;
            var sessionId = localStorage.getItem('sessionId') || '';
            var names = [values.name1, values.name2, values.name3];

            form.submit({
                url: XMLifeOperating.generic.Global.URL.biz + 'producttemplate/update?sessionId=' + sessionId,
                params: {
                    id: id,
                    sessionId: sessionId,
                    name: names.join('\n')
                },
                waitMsg: '正在提交数据',
                waitTitle: '提示',
                success: function(form, action) {
                    var resid = action.response.responseText;
                    win.close();
                    store.loadPage(1);
                },
                failure: function(form, action) {
                    var resid = action.response.responseText;
                    if (resid == -99) {
                        Ext.MessageBox.show({
                            title: '提示',
                            msg: '图片命名为:SKUID+"-"+一位数字 ',
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        windowEl.unmask();
                        return;
                    }
                    windowEl.unmask();
                }
            });

        } else {

            Ext.Msg.alert('无效数据', '请更正表单数据！');

        }
    }
})
