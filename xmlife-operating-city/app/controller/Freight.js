Ext.define('XMLifeOperating.controller.Freight', {
    extend: 'Ext.app.Controller',
    views: ['freightManage.FreightList', 'freightManage.FreightSet', 'Toolbar'],
    stores: ['SupportedcityGetByCode', 'SupportedCity'],
    models: ['SupportedcityGetByCode', 'SupportedCity'],
    refs: [{
        ref: 'freightList',
        selector: 'freightList',
        xtype: 'freightList',
        autoCreate: true
    }, {
        ref: 'freightSet',
        selector: 'freightSet',
        xtype: 'freightSet',
        autoCreate: true
    }],
    init: function() {
        var me = this,
            modelFields = me.getSupportedcityGetByCodeModel().getFields();

        me.fieldMap = {};
        Ext.Array.each(modelFields, function(field) {
            me.fieldMap[field.name] = field;
        });

        me.control({
            'freightList': {
                show: me.renderFreightList,
                onShowView: me.renderFreightList
            },
            '#setFreight': {
                click: me.showSetFreight
            },
            'freightSet textfield': {
                enable: Ext.pass(me.propagateCtrlDisabledToTailLabel, [false]),
                disable: Ext.pass(me.propagateCtrlDisabledToTailLabel, [true])
            },
            '#initShippingFee': {
                change: me.onInitShippingFeeChanged
            },
            '#minPrice': {
                change: me.onMinPriceChanged
            },
            '#submitId': {
                click: me.submitData
            }
        });
    },
    propagateCtrlDisabledToTailLabel: function(disabled, field) {
        var tailLabel = field.nextSibling('label');
        return tailLabel && tailLabel.setDisabled(disabled);
    },
    onInitShippingFeeChanged: function(field, newVal, oldVal) {
        if (field.isValid()) {
            var minOrderForFreeShippingContainer = this.getFreightSet().down('#minOrderForFreeShippingCont');
            minOrderForFreeShippingContainer.setVisible(newVal > 0);
            // 当minOrderForFreeShipping不再有意义时，同时disable相应的域，再次enable需要手动勾选checkbox
            if (newVal <= 0) {
                minOrderForFreeShippingContainer.child('#minOrderForFreeShippingEnabled').setValue(false);
            }
        }
    },
    onMinPriceChanged: function(field, newVal, oldVal) {
        if (field.isValid()) {
            var minOrderForFreeShippingCmp = this.getFreightSet().down('#minOrderForFreeShipping');
            minOrderForFreeShippingCmp.setMinValue(newVal);
            minOrderForFreeShippingCmp.validate();
        }
    },
    showSetFreight: function(view, rowIndex, colIndex, column, e) {
        var me = this;
        var win = me.getFreightSet();
        var freightDetailRec = view.getRecord(view.findTargetByEvent(e));
        // 服务器端存储的精度友好的数字在'SupportedcityGetByCode' model里已经被convert过了
        // enabler虚拟域也通过convert处理好了
        // 这里只需直接读取
        win.down('form').loadRecord(freightDetailRec);
        win.show();
    },
    renderFreightList: function() {
        var me = this;
        var store = me.getSupportedcityGetByCodeStore();
        store.load({
            params: {
                code: XMLifeOperating.generic.Global.currentCity
            }
        });
    },
    priceTransform: function(value) {
        return parseInt((value * 100).toFixed());
    },
    submitData: function(button) {
        var me = this,
            fieldMap = me.fieldMap,
            windowEl = button.up('window'),
            form = button.up('form');

        if (form.isValid()) {
            var subData = form.getValues(),
                ajaxData = {};

            Ext.Object.each(subData, function(key, val, obj) {
                // disabled域默认不被form.getValues()返回，
                // 而#initShippingFee及各checkbox的“值改变”响应逻辑保证了隐藏的textfield一定是disabled
                // 所以这里的都是visible且enabled的域
                if (fieldMap[key].type === Ext.data.Types.RMB) {
                    ajaxData[key] = me.priceTransform(val);
                }
            });

            // 提交value＝0用以表示该域被disabled了
            if (subData.minDistanceEnabled !== 'on') {
                ajaxData.minDistance = 0;
            }
            if (subData.minOrderForFreeShippingEnabled !== 'on') {
                ajaxData.minOrderForFreeShipping = 0;
            }

            ajaxData.code = XMLifeOperating.generic.Global.currentCity;
            sendPutRequest('supportedcity/setShippingFee', ajaxData, '编辑模板', '成功编辑模板', '编辑模板失败', function() {

                me.getSupportedcityGetByCodeStore().load({
                    params: {
                        code: XMLifeOperating.generic.Global.currentCity
                    }
                });
                windowEl.close();
                me.fireEvent('refreshView');
            });
        }
    }

});
