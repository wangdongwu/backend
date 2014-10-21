Ext.define('XMLifeOperating.controller.RechargeableCardTemplate', {
    extend: 'Ext.app.Controller',

    views: [
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateList',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateAdd',
        'rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateReturnCardAdd'
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
    }, ],


    init: function() {

        var me = this;
        this.control({

            'rechargeablecardtemplatelist': {
                added: me.onShow,
            },
            'rechargeablecardtemplatelist #addCardTemplate': {
                click: function() {
                    console.log(123);
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
                    win.down('form').loadRecord(rechargeableCardTemplate);
                    win.show();
                }
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
                                width: 130,
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
                                xtype: 'label',
                                text: '元',
                                textAlign: 'left'

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
                                    width: 130,
                                    allowBlank: false,
                                    margin: '0 0 10 0',
                                    labelAlign:'right',
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
                                    xtype: 'label',
                                    text: '元',
                                    textAlign: 'left',
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
        if (form.isValid()) {
            // windowEl.mask('saving');

            RechargeableCardTemplate.data.type = 0;
            form.updateRecord(RechargeableCardTemplate);

            var success = function(task, operation) {
                windowEl.unmask();
                addWindow.close();
                var store = me.getStore('CardTemplate')
                store.load({
                    params: {
                        type: RechargeableCardTemplate.data.type,
                        name: RechargeableCardTemplate.data.name,
                        desc: RechargeableCardTemplate.data.desc,
                        amount: RechargeableCardTemplate.data.amount
                    }
                });
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
            console.log("try saving");
            sendRequest('cardTemplate', {
                    type: RechargeableCardTemplate.data.type,
                    name: RechargeableCardTemplate.data.name,
                    desc: RechargeableCardTemplate.data.desc,
                    amount: RechargeableCardTemplate.data.amount
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
        console.log("start edit");
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
        if (form.isValid()) {
            windowEl.mask('saving');
            var values = form.getValues();
            var data = {
                name: values.name,
                amount: values.amount,
                type: 2,
                desc: values.desc,
                immediatelyAmount: values.immediatelyAmount,
                batchAmount: values.amount - values.immediatelyAmount,
                count: values.count,
                newAccount: null,
                days: [],
                amounts: [],
            }
            if (values.newAccount == 'on') {
                data.newAccount = true;
            } else {
                data.newAccount = false;
            }

            for (var j = 0, length = values.count; j < length; j++) {
                data.days.push(values['chargearrivemoney_' + (j + 1)]);
                data.amounts.push(values['chargedayamount_' + (j + 1)]);
            }

            var success = function(task, operation) {
                windowEl.unmask();
                addWindow.close();
                var store = me.getStore('CardTemplate')
/*                     store.load({
                        params: data
                   });*/
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
            console.log("try saving");
            sendRequest('cardTemplate',data,'添加分次返回卡模板','添加模板成功','添加模板失败',success,failure);

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var rechargeableCardTemplate = view.getRecord(view.findTargetByEvent(e));
        var win = this.getRechargeableCardTemplateReturnCardAdd();
        win.down('form').loadRecord(rechargeableCardTemplate);
        win.show();
    },
});