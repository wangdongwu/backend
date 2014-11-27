Ext.define('XMLifeOperating.controller.GFeedbackList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.feedback.GFeedbackList'],
    stores: ['Feedback', 'FeedbackStatus'],
    models: ['Feedback'],
    refs: [{
        ref: 'gFeedbackList',
        selector: 'gFeedbackList',
        xtype: 'gFeedbackList',
        autoCreate: true
    }],
    init: function() {
        var me = this;
        this.control({
            'gFeedbackList': {
                added: me.onShow,
            },
            'gFeedbackList #add': {
                click: function() {
                    var cClass = me.getFeedbackModel();
                    var feedback = new cClass();
                    var win = this.getEditWindow();
                    win.down('form').loadRecord(feedback);
                    win.show();
                }
            },
            'gFeedbackList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
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
                        store.getProxy().extraParams = {
                            dayType: str
                        };
                        store.loadPage(1);
                        this.dayType = str;
                        var win = this.getGFeedbackList();
                        win.down('#feedbackStatus').setValue(null);
                    }
                }
            },
            'gFeedbackList #mark': {
                click: function(component, column, rowIndex, colIndex, e) {
                    var model = component.getStore().getAt(rowIndex);
                    var feedbackId = model.get('id');
                    var className = e.target.className;
                    var url = 'feedback/mark/' + feedbackId;
                    var mark = model.get('mark');
                    model.set('mark', !mark);
                    mark = model.get('mark');
                    sendPutRequest(url, {
                        mark: mark
                    }, '', '成功操作标记', '标记操作失败', function() {
                        /*var store = me.getFeedbackStore();
                        var dayType=me.dayType;
                        var mark = me.getGFeedbackList().down('#feedbackStatus').getValue();
                        var params = {
                            dayType:dayType,
                            mark:mark
                        };
                        if(mark==null){
                            params={
                                dayType:dayType
                            };
                        }
                        store.getProxy().extraParams = params;
                        store.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });*/
                    });
                }
            },
            'gFeedbackList #feedbackStatus': {
                change: me.onFeedbackStatus
            }
        });
    },
    onShow: function() {
        /*var store = this.getFeedbackStore();
            store.getProxy().extraParams={
              dayType:0,
            };
          store.loadPage(0);
          this.dayType=0;*/
        var radios = Ext.ComponentQuery.query('#gFeedbackRadios')[0].setValue({
            dayType: 0
        });
        this.dayType = 0;
    },
    onFeedbackStatus: function(combo) {
        var win = this.getGFeedbackList();
        var mark = combo.getValue();
        var dayType = this.dayType;
        this.rendenFeedbackList(this.getGFeedbackList(), mark, dayType);
    },
    rendenFeedbackList: function(grid, mark, dayType) {
        var store = grid.store;
        store.getProxy().extraParams = {
            dayType: dayType,
            mark: mark
        };
        store.loadPage(1);
        this.dayType = dayType;
    }
});
