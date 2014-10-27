Ext.define('XMLifeOperating.controller.RechargeableCardTemplate', {
    extend: 'Ext.app.Controller',

    views: [
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateList',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateAdd',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateReturnCardAdd',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateDetail',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateReturnCardDetail'
    ],

    stores: ['CardTemplate'],

    models: ['CardTemplate'],


    refs: [{
        ref: 'rechargeableCardTemplateList',
        selector: 'rechargeablecardtemplatelist',
        xtype: 'rechargeablecardtemplatelist',
        autoCreate: true
    }, { //普通充值卡UI
        ref: 'rechargeableCardTemplateAdd',
        selector: 'rechargeablecardtemplateadd',
        xtype: 'rechargeablecardtemplateadd',
        autoCreate: true
    }, { //分次返还卡UI
        ref: 'rechargeableCardTemplateReturnCardAdd',
        selector: 'rechargeablecardtemplatereturncardadd',
        xtype: 'rechargeablecardtemplatereturncardadd',
        autoCreate: true
    }, {
        ref: 'rechargeableCardTemplateReturnCardDetail',
        selector: 'rechargeableCardTemplateReturnCardDetail',
        xtype: 'rechargeableCardTemplateReturnCardDetail',
        autoCreate: true
    },{
        ref: 'rechargeableCardTemplateDetail',
        selector: 'rechargeableCardTemplateDetail',
        xtype: 'rechargeableCardTemplateDetail',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        this.control({

            'rechargeablecardtemplatelist': {
                added: me.onShow,
            },
            'rechargeablecardtemplatelist #addCardTemplate': {
                click: function() {

                    var cClass = me.getCardTemplateModel();
                    var rechargeableCardTemplate = new cClass();
                    var win = this.getRechargeableCardTemplateAdd();
                    win.down('form').loadRecord(rechargeableCardTemplate);
                    win.show();
                }
            },
            //添加普通充值卡按钮事件
            'rechargeablecardtemplateadd #save-addCardTemplate-edit-btn': {
                click: me.saveEditWindow
            },
            '#AddCardTemplate': {
                click: me.onEdit
            },
            'rechargeablecardtemplateadd filefield[name="templateUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },

            'rechargeablecardtemplatelist #addReturnTemplate': {
                click: function() {
                    var cClass = me.getCardTemplateModel();
                    var rechargeableCardTemplate = new cClass();
                    var win = this.getRechargeableCardTemplateReturnCardAdd();
                    var form = win.down('form');
                    form.getForm().reset();
                    form.loadRecord(rechargeableCardTemplate);
                    win.show();
                }
            },
            'rechargeablecardtemplatelist #showDetail': {
                click: me.showDetailWin

            },
            'rechargeablecardtemplatereturncardadd #save-addReturnTemplate-edit-btn': {
                click: me.saveEditReturnWindow
            },
            '#AddReturnTemplate': {
                click: me.onEdit
            },
            'rechargeablecardtemplatereturncardadd #returncount': {
                change: function(e) {
                    var appendTarget = me.getRechargeableCardTemplateReturnCardAdd().down('#returnContainer')
                    var count = e.value;
                    appendTarget.removeAll();
                    if (count >= 1 && count <= 24) {
                        var firstcontainer = Ext.create('Ext.container.Container', {
                            layout: {
                                type: 'column'
                            },
                            width: 300,
                            items: [{
                                xtype: 'textfield',
                                name: 'chargedayamount_1',
                                fieldLabel: '返还规则:&nbsp;&nbsp;&nbsp;&nbsp;第',
                                labelWidth: 90,
                                labelSeparator: '',
                                width: 140,
                                allowBlank: false,
                                margin: '0 0 10 0',
                                cls: 'user-text-field-charge'
                            }, {
                                xtype: 'textfield',
                                name: 'chargearrivemoney_1',
                                fieldLabel: '天,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到账',
                                labelSeparator: '',
                                labelWidth: 70,
                                width: 130,
                                allowBlank: false
                            }, {
                                xtype: 'displayfield',
                                value: '元',
                                style: 'margin-left:5px;'

                            }]
                        });
                        appendTarget.add(firstcontainer).doLayout();
                        for (var i = 1; i < count; i++) {
                            var container = Ext.create('Ext.container.Container', {
                                layout: {
                                    type: 'column'
                                },
                                width: 300,
                                items: [{
                                    xtype: 'textfield',
                                    name: 'chargedayamount_' + (i + 1),
                                    fieldLabel: '第',
                                    labelWidth: 90,
                                    labelSeparator: '',
                                    width: 140,
                                    allowBlank: false,
                                    margin: '0 0 10 0',
                                    labelAlign: 'right',
                                    cls: 'user-text-field-charge'
                                }, {
                                    xtype: 'textfield',
                                    name: 'chargearrivemoney_' + (i + 1),
                                    fieldLabel: '天,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到账',
                                    labelSeparator: '',
                                    labelWidth: 70,
                                    width: 130,
                                    allowBlank: false
                                }, {
                                    xtype: 'displayfield',
                                    value: '元',
                                    style: 'margin-left:5px;'

                                }]
                            });
                            appendTarget.add(container).doLayout();
                        }
                    } else {
                        return
                    }

                }
            },
            'rechargeablecardtemplatereturncardadd filefield[name="templateUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;
                    var hash = uploadfile.previousNode().previousNode();
                    uploadImage(form, hash);
                }
            },

        });
    },
    onShow: function() {
        var store = this.getCardTemplateStore();
        store.load();
    },

    //点击添加普通充值卡
    saveEditWindow: function() {
        var addCardTemplate = this.getRechargeableCardTemplateAdd(),
            windowEl = addCardTemplate.getEl(),
            form = addCardTemplate.down('form').getForm(),
            RechargeableCardTemplate = form.getRecord(),
            me = this,
            addWindow = this.getRechargeableCardTemplateAdd();
        var store = this.getCardTemplateStore();
        if (form.isValid()) {
            // windowEl.mask('saving');
            RechargeableCardTemplate.data.type = 0;
            form.updateRecord(RechargeableCardTemplate);
            var newAccount = false;

            if (RechargeableCardTemplate.data.newAccount == 'true' || RechargeableCardTemplate.data.newAccount == true) {
                newAccount = true;
            } else {
                newAccount = false;
            }

            var success = function(task, operation) {
                windowEl.unmask();
                addWindow.close();
                store.load();
                me.fireEvent('refreshView');
            };
            var failure = function(task, operation) {
                var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
                Ext.MessageBox.show({
                    title: 'Edit Task Failed',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
            };

            sendPutRequest('cardTemplate/create', {
                    type: RechargeableCardTemplate.data.type,
                    name: RechargeableCardTemplate.data.name,
                    desc: RechargeableCardTemplate.data.desc,
                    amount: RechargeableCardTemplate.data.amount * 100,
                    simpleDesc: RechargeableCardTemplate.data.simpleDesc,
                    newAccount: newAccount
                },
                '添加普通充值卡模板',
                '添加模板成功',
                '添加模板失败',
                success,
                failure);

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {

        var addCardTemplate = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        win.down('form').loadRecord(addCardTemplate);
        win.show();
    },
    //点击添加分次返回充值卡
    saveEditReturnWindow: function() {


        var addReturnWindow = this.getRechargeableCardTemplateReturnCardAdd(),
            windowEl = addReturnWindow.getEl(),
            form = addReturnWindow.down('form').getForm(),
            RechargeableCardTemplate = form.getRecord(),
            me = this,
            addWindow = this.getRechargeableCardTemplateReturnCardAdd();
        var store = this.getCardTemplateStore();
        if (form.isValid()) {
            windowEl.mask('saving');
            var values = form.getValues();
            var name = values.name,
                amount = values.immediatelyAmount * 100 + values.returnAmount * 100,
                simpleDesc = values.simpleDesc,
                desc = values.desc,
                immediatelyAmount = values.immediatelyAmount * 100,
                batchAmount = values.returnAmount * 100,
                count = values.count,
                newAccount = values.newAccount,
                days = [],
                amounts = [],
                dayCount = [],
                dayErrorFlag = false;
            var sum = 0;
            //数据处理
            if (newAccount == 'on') {
                newAccount = true;
            } else {
                newAccount = false;
            }

            for (var j = 0, length = count; j < length; j++) {
                dayCount.push(values['chargedayamount_' + (j + 1)]);
                if (values['chargedayamount_' + (j + 1)] <= values['chargedayamount_' + (j)]) {
                    dayErrorFlag = true
                }
                days.push(values['chargedayamount_' + (j + 1)]);
                amounts.push(values['chargearrivemoney_' + (j + 1)] * 100);
                sum += values['chargearrivemoney_' + (j + 1)] * 100;
            }
            //返还价格判断
            if (sum != batchAmount) {
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '分次返还加和与总额不符，请更正！',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
                return;
            }
            //天数判断
            if (dayErrorFlag) {
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '分次返还日期不合规，请更正！',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
                return;
            }
            //Ajax 参数赋值
            var data = {
                name: name,
                amount: amount,
                type: 2,
                desc: desc,
                immediatelyAmount: immediatelyAmount,
                batchAmount: batchAmount,
                count: count,
                newAccount: newAccount,
                days: days,
                amounts: amounts,
                simpleDesc: simpleDesc
            }

            var success = function(task, operation) {
                windowEl.unmask();
                addWindow.close();

                store.load();
                me.fireEvent('refreshView');
            };
            var failure = function(task, operation) {
                var error = operation.getError(),
                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
                Ext.MessageBox.show({
                    title: 'Edit Task Failed',
                    msg: msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
            };

            sendPutRequest('cardTemplate/create', data, '添加分次返回卡模板', '添加模板成功', '添加模板失败', success, failure);

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {

        var rechargeableCardTemplate = view.getRecord(view.findTargetByEvent(e));
        var win = this.getRechargeableCardTemplateReturnCardAdd();
        win.down('form').loadRecord(rechargeableCardTemplate);
        win.show();
    },
    showDetailWin: function(view, rowIndex, colIndex, column, e) {
        var me, record, type, name, simpleDesc, desc, newAccount, id, rule;
        me = this;
        record = view.getRecord(view.findTargetByEvent(e));
        id = record.get('id');
        type = record.get('type');
        name = record.get('name');
        simpleDesc = record.get('simpleDesc');
        desc = record.get('desc');
        newAccount = (record.get('newAccount') == 'true' || record.get('newAccount') == true) ? '是' : '否';
        var returnCardDetail = me.getRechargeableCardTemplateReturnCardDetail();
        var   cardDetail   = me.getRechargeableCardTemplateDetail()
        var values = {
            id: record.get('id'),
            type: record.get('type'),
            name: record.get('name'),
            simpleDesc: record.get('simpleDesc'),
            desc: record.get('desc'),
            newAccount: newAccount,
        }


        if (type == 0) {
            values.amount = record.get('amount')/100;
            cardDetail.down('form').getForm().setValues(values);
            cardDetail.show();
        } else if (type == 2) {
            rule = record.get('rule');
            values.returnAmount = rule.batchAmount/100;
            values.immediatelyAmount = (record.get('amount') - rule.batchAmount)/100;
            values.count = rule.count;
            var days = [];
            var amounts = [];
            var str = [];
            for (var i = 0, len = rule.details.length; i < len; i++) {
                var day = rule.details[i].days;
                var amount = rule.details[i].amount / 100;
                days.push(day);
                amounts.push(amount);
                str.push('第' + day + '天,到账' + amount + '元' + '\n');
            }
            values.ruleText = str.join('');
            returnCardDetail.down('form').getForm().setValues(values);
            returnCardDetail.show();
        }
    }
});