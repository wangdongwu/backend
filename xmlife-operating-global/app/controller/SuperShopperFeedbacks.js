Ext.define('XMLifeOperating.controller.SuperShopperFeedbacks', {
    extend: 'Ext.app.Controller',
    views: ['staffManage.superShopperFeedbacks.SuperShopperFeedbacksList'],
    stores: ['SuperShopperFeedbacks'],
    models: ['SuperShopperFeedbacks'],
    refs: [{
        ref: 'superShopperFeedbacksList',
        selector: 'superShopperFeedbacksList',
        xtype: 'superShopperFeedbacksList',
        autoCreate: true
    }],
    init: function() {
        var me = this;

        this.control({
            'superShopperFeedbacksList': {
                added: function(){
                    var view = me.getSuperShopperFeedbacksList(),
                        beginTime = view.down('[name=beginTime]'),
                        endTime = view.down('[name=endTime]'),
                        toolsDate = me.getToolsDate();
                    beginTime.setValue(toolsDate.weekStartDate);
                    endTime.setValue(toolsDate.weekEndDate);

                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },
            'superShopperFeedbacksList button[name=thisWeek]': {
                click: function() {
                    var view = me.getSuperShopperFeedbacksList(),
                        beginTime = view.down('[name=beginTime]'),
                        endTime = view.down('[name=endTime]'),
                        toolsDate = me.getToolsDate();
                    beginTime.setValue(toolsDate.weekStartDate);
                    endTime.setValue(toolsDate.weekEndDate);

                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },
            'superShopperFeedbacksList button[name=lastWeek]': {
                click: function() {
                    var view = me.getSuperShopperFeedbacksList(),
                        beginTime = view.down('[name=beginTime]'),
                        endTime = view.down('[name=endTime]'),
                        toolsDate = me.getToolsDate();

                    beginTime.setValue(toolsDate.lastWeekStartDate);
                    endTime.setValue(toolsDate.lastWeekEndDate);

                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },
            'superShopperFeedbacksList button[name=thisMonth]': {
                click: function() {
                    var view = me.getSuperShopperFeedbacksList(),
                        beginTime = view.down('[name=beginTime]'),
                        endTime = view.down('[name=endTime]'),
                        toolsDate = me.getToolsDate();
                        
                    beginTime.setValue(toolsDate.monthStartDate);
                    endTime.setValue(toolsDate.monthEndDate);

                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },
            'superShopperFeedbacksList button[name=lastMonth]': {
                click: function() {
                    var view = me.getSuperShopperFeedbacksList(),
                        beginTime = view.down('[name=beginTime]'),
                        endTime = view.down('[name=endTime]'),
                        toolsDate = me.getToolsDate();
                        
                    beginTime.setValue(toolsDate.lastMonthStartDate);
                    endTime.setValue(toolsDate.lastMonthEndDate);

                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },
            /*'superShopperFeedbacksList datefield': {
                change: function() {
                    me.renderShow(this.getSuperShopperFeedbacksList(),0);
                }
            },*/
            'superShopperFeedbacksList #feedbackStatus': {
                change: me.onFeedbackStatus
            },

            'superShopperFeedbacksList #mark': {
                click: me.onMark
            },

            'superShopperFeedbacksList #feedbackcontent': {
                click: function() {
                    arguments[5].set('content',arguments[5].get('feedback'));
                    // 这里引用了用户反馈管理的control方法
                    var gFeedbackList = this.getController('GFeedbackList');
                    gFeedbackList.onFeedbackcontent.apply(gFeedbackList, arguments);
                }
            },
        });
    },
    renderShow: function(grid,mark) {
        var startTime = grid.down('[name=beginTime]').rawValue,
            endTime = grid.down('[name=endTime]').rawValue,
            store = grid.store;

        startTime = (new Date(startTime)).getTime();
        endTime = (new Date(endTime)).getTime() + 86399999;

        if(mark === null || mark === ''){
            store.getProxy().extraParams={
                startTime: startTime,
                endTime: endTime
            };
            
        }else{
            store.getProxy().extraParams={
                startTime: startTime,
                endTime: endTime,
                mark: mark
            };
        } 
        grid.down('#feedbackStatus').setValue(mark);  
        store.loadPage(1);
    },

    getToolsDate: function() {
        var dateObj = {},
            now = new Date(),
            nowDayOfWeek = now.getDay(),
            nowDay = now.getDate(),
            nowMonth = now.getMonth(),
            nowYear = now.getYear();
        nowYear += (nowYear < 2000) ? 1900 : 0;
        var lastMonthDate = new Date();  //上月日期  
        lastMonthDate.setDate(1);  
        lastMonthDate.setMonth(lastMonthDate.getMonth()-1);  
        var lastMonth = lastMonthDate.getMonth(); 

        //获取本周开始日期
        var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
        weekStartDate = Ext.util.Format.date(weekStartDate, "Y-m-d");

        //获取本周结束日期           
        var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));
        weekEndDate = Ext.util.Format.date(weekEndDate, "Y-m-d");

        //获取上周开始日期
        var lastWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek-6);
        lastWeekStartDate = Ext.util.Format.date(lastWeekStartDate, "Y-m-d");

        
        //获取上周结束日期           
        var lastWeekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek );
        lastWeekEndDate = Ext.util.Format.date(lastWeekEndDate, "Y-m-d");

        //获得本月的开始日期 
        var monthStartDate = new Date(nowYear, nowMonth, 1);
        monthStartDate = Ext.util.Format.date(monthStartDate, "Y-m-d");

        //获得本月的结束日期 
        var monthEndDate = new Date(nowYear, nowMonth, this.getMonthDays(nowMonth));
        monthEndDate = Ext.util.Format.date(monthEndDate, "Y-m-d");

        //获得上月的开始日期
        var lastMonthStartDate = new Date(nowYear, lastMonth, 1); 
        lastMonthStartDate = Ext.util.Format.date(lastMonthStartDate, "Y-m-d");

        //获得上月结束时间   
        var lastMonthEndDate = new Date(nowYear, lastMonth, this.getMonthDays(lastMonth));
        lastMonthEndDate = Ext.util.Format.date(lastMonthEndDate, "Y-m-d");

        dateObj.weekStartDate = weekStartDate;
        dateObj.weekEndDate = weekEndDate;
        dateObj.lastWeekStartDate = lastWeekStartDate;
        dateObj.lastWeekEndDate = lastWeekEndDate;
        dateObj.monthStartDate = monthStartDate;
        dateObj.monthEndDate = monthEndDate;
        dateObj.lastMonthStartDate = lastMonthStartDate;
        dateObj.lastMonthEndDate = lastMonthEndDate;
        return dateObj;
    },

    //获得某月的天数     
    getMonthDays: function(myMonth) {
        var now = new Date(),
            nowYear = now.getYear();
        nowYear += (nowYear < 2000) ? 1900 : 0;
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },

    onFeedbackStatus: function(combo) {
        var mark = combo.getValue();
        this.renderShow(this.getSuperShopperFeedbacksList(),mark);
    },

    onMark: function(view, cellEl, rowIndex, colIndex, e, record){
        var url = 'superShopper/markFeedback';
        var mark = record.get('mark');
        record.set('mark', !mark);
        sendPutRequest(url, {
            mark: record.get('mark'),
            id: record.get('id')
        }, '操作标记', '成功操作标记', '标记操作失败');
    }

});
