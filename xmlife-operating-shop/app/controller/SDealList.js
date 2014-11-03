Ext.define('XMLifeOperating.controller.SDealList', {
    extend: 'Ext.app.Controller',

    views: ['sDealManage.SDealList',
            'sDealManage.SDealDetail'],

    stores: ['Deal','DealItems'],

    models: ['Deal','DealItems'],

    refs: [{
        ref: 'sDealList',
        selector: 'sDealList',
        xtype: 'sDealList'
    }, {
        ref: 'sDealDetail',
        selector: 'sDealDetail',
        xtype: 'sDealDetail',
        autoCreate: true
    }],
    init:function(){
        var self = this;
        self.control({
            'sDealList' : {
                added : self.rendenSDealList
            },
            'sDealList #getDealListByDate': {
                click: function() {
                    self.rendenSDealList(self.getSDealList());
                }
            },
            'sDealList #dealDetail': {
                click: self.onDealDetail
            },
            'sDealList #productInvoice': {
                click: function() {
                    var sDealList = self.getSDealList();
                    var beginTime = sDealList.down('[name=beginTime]').rawValue;
                    var endTime = sDealList.down('[name=endTime]').rawValue;

                    Ext.MessageBox.confirm('提示', '确认导出商品对货单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportProductStatistic?' + 'shopId=' + self.shopId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '商品对货单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
        });

    },
    
    rendenSDealList : function(grid){

        var beginTime = grid.down('[name=beginTime]').rawValue;
        var endTime = grid.down('[name=endTime]').rawValue;
        this.shopId = '54131c6d0364b0ed8f1ffd91';
        var store = grid.store;
        var shopId = this.shopId;
        store.getProxy().extraParams={
             shopId: shopId || '',
             beginTime:beginTime,
             endTime:endTime
        };
        store.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
            }
        });
    },
    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getSDealDetail();
        win.down('form').loadRecord(dealDetail);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: dealDetail.get('dealBackendId'),
                task: dealDetail.get('taskId')
            },

            callback: function(records) {
            
                var model = Ext.ComponentQuery.query('#dealDetails')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },
});