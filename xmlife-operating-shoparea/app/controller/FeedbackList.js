Ext.define('XMLifeOperating.controller.FeedbackList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.feedback.FeedbackList'],
    stores: ['Feedback', 'FeedbackStatus'],
    models: ['Feedback'],

    init: function() {

        var me = this;
        this.control({
            'feedbackList': {
                added: me.onShow,
            },
            'feedbackList #add': {
                click: function() {
                    var cClass = me.getFeedbackModel();
                    var feedback = new cClass();
                    var win = this.getEditWindow();
                    win.down('form').loadRecord(feedback);
                    win.show();
                }
            },
            'feedbackList #feedbackStatus': {
                select: function(combo) {
                    var itemId = Ext.getCmp('feedbackList').down('radiogroup').getValue().dayType;
                    var store = this.getFeedbackStore();
                    var params = {
                        dayType: itemId
                    };
                    var mark = combo.getValue();
                    if (mark !== null) {
                        params['mark'] = mark;
                    }
                    store.getProxy().extraParams = params;
                    store.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                }
            },
            'feedbackList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV === true) {
                        var itemId = record.itemId,
                            str;
                        var combo = Ext.getCmp('feedbackList').down('#feedbackStatus');
                        switch (itemId) {
                            case 'dayType0':
                                str = 0;
                                break;
                            case 'dayType1':
                                str = 1;
                                break;
                            case 'dayType2':
                                str = 2;
                                break;
                            case 'dayType3':
                                str = 3;
                                break;
                            case 'dayType4':
                                str = 4;
                                break;
                            case 'dayType5':
                                str = 5;
                                break;
                            case 'dayType6':
                                str = 6;
                                break;
                        }
                        var store = this.getFeedbackStore();
                        var params = {
                            dayType: str
                        };
                        var mark = combo.getValue();
                        if (mark != null) {
                            params['mark'] = mark;
                        }

                        store.getProxy().extraParams = params;
                        store.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                        this.dayType = str;

                    }
                }
            },
            'feedbackList #mark': {
                click: function(component, column, rowIndex, colIndex, e) {

                    var model = component.getStore().getAt(rowIndex);

                    var feedbackId = model.get('id');

                    var className = e.target.className;
                    var url = 'feedback/' + feedbackId;

                    var mark = model.get('mark');

                    model.set('mark', !mark);
                    if (mark == true) {
                        status = 0;
                    } else {
                        status = 1;
                    }

                    sendPutRequest(url, {}, '', '成功操作标记', '标记操作失败', function() {
                        var store = this.getFeedbackStore();
                        var dayType = me.dayType;

                        store.getProxy().extraParams = {
                            dayType: dayType,
                            mark: false
                        };
                        store.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                    });
                }
            },

        });
    },

    onShow: function() {
 /*        var store = this.getFeedbackStore();
        store.getProxy().extraParams = {
            dayType: 0,
            mark: false
        }
        store.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });*/
        var radios = Ext.ComponentQuery.query('#feedbackRadios')[0].setValue({
            dayType: 0
        });
        this.dayType = 0;

    }

});