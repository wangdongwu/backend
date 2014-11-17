Ext.define('XMLifeOperating.controller.Message', {
    extend: 'Ext.app.Controller',

    views: [
        'msgManage.NotifyList',
        'msgManage.NotifyAdd',
        'msgManage.SmsList',
        'msgManage.SmsAdd'
    ],

    stores: ['Message', 'MessageStatus'],

    models: ['Message'],

    refs: [{
        ref: 'notifyList',
        selector: 'notifyList',
        xtype: 'notifyList',
        autoCreate: true
    }, {
        ref: 'notifyAdd',
        selector: 'notifyAdd',
        xtype: 'notifyAdd',
        autoCreate: true
    }, {
        ref: 'smsList',
        selector: 'smsList',
        xtype: 'smsList',
        autoCreate: true
    }, {
        ref: 'smsAdd',
        selector: 'smsAdd',
        xtype: 'smsAdd',
        autoCreate: true
    }],

    init: function() {
        var me = this;

        this.control({
            'notifyList': {
                show: function() {
                    var combo = this.getNotifyList().down('combo');
                    combo.fireEvent('select', combo);
                }
            },
            'smsList': {
                show: function() {
                    var combo = this.getSmsList().down('combo');
                    combo.fireEvent('select', combo);
                }
            },
            '#statusCombo': {
                select: function(combo) {
                    var msgType = combo.previousSibling('#msgType').getValue();
                    var store = this.getMessageStore();
                    store.getProxy().extraParams = {
                        type: msgType,
                        status: combo.getValue()
                    };
                    store.loadPage(1);
                }
            },
            'notifyList #addBtn': {
                click: function() {
                    me.onAdd('getNotifyAdd');
                }
            },
            'smsList #addBtn': {
                click: function() {
                    me.onAdd('getSmsAdd');
                }
            },
            'notifyList #editBtn': {
                click: function(view, rowIndex, colIndex, column, e) {
                    //排除没有编辑图标的
                    if (e.target.getAttribute('class') != "x-action-col-icon") return;
                    me.onEdit({
                        view: view,
                        e: e
                    }, 'getNotifyAdd');
                }
            },
            'smsList #editBtn': {
                click: function(view, rowIndex, colIndex, column, e) {
                    if (e.target.getAttribute('class') != "x-action-col-icon") return;
                    me.onEdit({
                        view: view,
                        e: e
                    }, 'getSmsAdd');
                }
            },
            'notifyAdd #startTime': {
                select: me.onDateSelect
            },
            'notifyAdd #linkType': {
                change: me.onLinkTypeSelect

            },
            'notifyAdd #saveBtn': {
                click: function() {
                    me.onSave('getNotifyAdd');
                }
            },
            'smsAdd #saveBtn': {
                click: function() {
                    me.onSave('getSmsAdd');
                }
            },
            'smsAdd #startTime': {
                select: me.onDateSelect
            }
        });
    },
    onLinkTypeSelect: function(component, record) {
        var me = this;
        var linkType = record;
        var nextCmp = component.nextSibling();
        var urlCmp = me.getNotifyAdd().down('#linkUrl');

        if (linkType == 2) { //h5页面
            nextCmp.isVisible() ? nextCmp.setVisible(false) : null;
            urlCmp.isVisible() ? null : urlCmp.setVisible(true);
        } else if (linkType == 3) { //内部功能
            nextCmp.isVisible() ? null : nextCmp.setVisible(true);
            urlCmp.isVisible() ? urlCmp.setVisible(false) : null;
        } else {
            nextCmp.isVisible() ? nextCmp.setVisible(false) : null;
            urlCmp.isVisible() ? urlCmp.setVisible(false) : null;
        }
    },
    onAdd: function(method) {
        var record = new(this.getMessageModel());
        var win = this[method]();
        win.down('form').getForm().reset();
        win.down('form').loadRecord(record);
        win.show();
    },
    onEdit: function(args, method) {
        var me = this;
        var win = this[method]();
        var record = args.view.getRecord(args.view.findTargetByEvent(args.e));
        win.down('form').loadRecord(record)
        win.show();
    },
    onDateSelect: function(elem) {
        var selValue = elem.getValue(),
            selDate = Ext.Date.format(selValue, 'Y-m-d'),
            now = new Date(),
            curDate = Ext.Date.format(now, 'Y-m-d');

        //如果是当天，比当前时间+10分钟
        if (selDate == curDate) {
            selValue = Ext.Date.add(now, Ext.Date.MINUTE, 10);
        }
        elem.setValue(selValue);
    },
    onSave: function(method) {
        var self = this,
            win = this[method](),
            form = win.down('form').getForm(),
            record = form.getRecord();

        var msgType = method == 'getNotifyAdd' ? 1 : 2, //根据方法名判断消息类型
            isAdd = record.get('id') ? false : true,
            isUpload = win.down('filefield').getValue() ? true : false,
            postUrl = isAdd ? 'notify/add' : 'notify/update';

        if (form.isValid()) {
            if (isAdd && !isUpload) {
                Ext.Msg.alert('提示信息', '还未上传消息发送UID，请选择文件后上传！');
                return;
            }
            var data = {
                type: null,
                id: null,
                beginTime: null,
                isUpload: null,
                linkType: null
            }
            data.type = msgType;
            data.id = record.get('id');
            data.beginTime = Date.parse(win.down('datefield').getValue());
            data.isUpload = isUpload;

            var sessionId = localStorage.getItem('sessionId') || '';

            if (msgType == 1) {
                //linkType 
                var linkType = win.down('#linkType').getValue();
                var url = win.down('#linkUrl').getValue();

                if (linkType == 2) { //h5
                    data.linkType = 2;
                    data.url = url;
                } else if (linkType == 3) { //内部类型
                    data.linkType = 3;
                    var internalType = win.down('#internalType').getValue();
                    if (!internalType) {
                        Ext.MessageBox.show({
                            title: '提示',
                            msg: '请选择功能页',
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return
                    } else {
                        data.internalType = internalType;
                    }

                } else {
                    data.linkType = 0;
                }
            }

            form.submit({
                url: XMLifeOperating.generic.Global.URL.biz + postUrl + '?sessionId=' + sessionId,
                params: data,
                waitMsg: '正在上传文件......',
                success: function(form, action) {
                    self.getMessageStore().reload();
                    win.close();
                },
                failure: function(form, action) {
                    console.log('failure:', action.response.responseText);
                    self.getMessageStore().reload();
                    win.close();
                }
            });
        } else {
            Ext.Msg.alert('提示信息', '表单验证失败，请确认无误后再提交！');
        }
    }

});