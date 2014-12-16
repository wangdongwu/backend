Ext.define('XMLifeOperating.controller.DataExport', {
    extend: 'Ext.app.Controller',
    views: [
        'dealManage.DataExport',
        'dealManage.AccountSales',
        'dealManage.DamagedAddSalesDefeat',
        'dealManage.DealSales',
        'dealManage.CustomerSales',
        'dealManage.RechargeableCardSales'
    ],
    models: ['AdminGetInfo'],
    stores: ['SupportedCity', 'ShopArea', 'ShopBannerTemplate', 'AdminGetInfo'],
    refs: [{
        ref: 'DataExport',
        selector: 'DataExport',
        xtype: 'DataExport'
    }],
    init: function() {
        var self = this;
        self.control({
            'DataExport': {
                show: self.renderDataExport
            },
            'AccountSales #exportPurchase': {
                click: self.exportPurchase
            },
            'AccountSales #exportReturn': {
                click: self.exportReturn
            },
            'DealSales #exportsmall,DealSales #exportbig': {
                click: self.exportDealSales
            },
            'DamagedAddSalesDefeat #exportDamage': {
                click: self.exportDamage
            },
            'CustomerSales #export': {
                click: self.exportCustomerSales
            },
            'RechargeableCardSales #export': {
                click: self.exportRechargeableCardSales
            }
        });
    },
    renderDataExport: function() {
        var self = this,
            dataExport = self.getDataExport(),
            accountSales = dataExport.down('#accountSales'),
            damaged = dataExport.down('#damagedAddSalesDefeat'),
            dealSales = dataExport.down('#dealSales'),
            customerSales = dataExport.down('#customerSales'),
            rechargeableCard = dataExport.down('#rechargeableCardSales'),
            item = self.getAdminGetInfoStore().data.items[0],
            modules = item.data.modules;

        for (var i = 0, n = modules.length; i < n; i++) {
            // 商品销售清单
            if (modules[i] == 'DealListManage.DataExport.exportPurchaseData') {
                accountSales.setDisabled(false);
            }
            // 商品残损和退货失败清单
            if (modules[i] == 'DealListManage.DataExport.exportReturnAndDamageData') {
                damaged.setDisabled(false);
            }
            // 用户清单
            if (modules[i] == 'DealListManage.DataExport.exportUserData') {
                customerSales.setDisabled(false);
            }
            // 充值卡清单
            if (modules[i] == 'DealListManage.DataExport.exportChargeData') {
                rechargeableCard.setDisabled(false);
            }
            // 订单清单
            if (modules[i] == 'DealListManage.DataExport.exportOperatorData') {
                dealSales.setDisabled(false);
            }
        }
    },
    // 导出商品采购清单
    exportPurchase: function(button) {
        var win = button.up("panel"),
            areaId = win.down("#areaId").getValue(),
            city = win.down("#city").getValue(),
            shopTId = win.down("#shopId").getValue(),
            beginTime = win.down("datefield[name='beginTime']").getValue(),
            endTime = win.down("datefield[name='endTime']").getValue(),
            sessionId = localStorage.getItem('sessionId') || '';

        if (areaId == 'all') {
            areaId = "";
        };
        var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/exportPurchase' +
            '?sessionId=' + sessionId +
            '&city=' + city +
            '&areaId=' + areaId +
            '&shopTId=' + shopTId +
            '&beginTime=' + this.formatDate(beginTime, 0) +
            '&endTime=' + this.formatDate(endTime, 1);
        window.open(url, '_blank');

    },
    // 导出用户退货清单
    exportReturn: function(button) {
        var win = button.up("panel"),
            areaId = win.down("#areaId").getValue(),
            city = win.down("#city").getValue(),
            shopTId = win.down("#shopId").getValue(),
            beginTime = win.down("datefield[name='beginTime']").getValue(),
            endTime = win.down("datefield[name='endTime']").getValue(),
            sessionId = localStorage.getItem('sessionId') || '';

        if (areaId == 'all') {
            areaId = "";
        };

        var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/exportReturn' +
            '?sessionId=' + sessionId +
            '&city=' + city +
            '&areaId=' + areaId +
            '&shopTId=' + shopTId +
            '&beginTime=' + this.formatDate(beginTime, 0) +
            '&endTime=' + this.formatDate(endTime, 1);
        window.open(url, '_blank');
    },
    // 订单清单导出小单或大单
    exportDealSales: function(button) {
        var win = button.up("panel"),
            cityCode = win.down("#city").getValue(),
            shopArea = win.down("#areaId").getValue(),
            shopBannerId = win.down("#shopId").getValue(),
            beginTime = win.down("datefield[name='beginTime']").getValue(),
            endTime = win.down("datefield[name='endTime']").getValue(),
            isBigDeal = button.isBigDeal,
            sessionId = localStorage.getItem('sessionId') || '';

        if (shopArea == 'all') {
            shopArea = "";
        };

        var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/exportAllDeal' +
            '?cityCode=' + cityCode +
            '&ShopArea=' + shopArea +
            '&shopBannerId=' + shopBannerId +
            '&beginTime=' + this.formatDate(beginTime, 0) +
            '&endTime=' + this.formatDate(endTime, 1) +
            '&isBigDeal=' + isBigDeal +
            '&sessionId=' + sessionId;
        window.open(url, '_blank');
    },
    // 导出商品残损与退货失败清单
    exportDamage: function(button) {
        var win = button.up("panel"),
            areaId = win.down("#areaId").getValue(),
            city = win.down("#city").getValue(),
            shopTId = win.down("#shopId").getValue(),
            beginTime = win.down("datefield[name='beginTime']").getValue(),
            endTime = win.down("datefield[name='endTime']").getValue(),
            sessionId = localStorage.getItem('sessionId') || '';

        if (areaId == 'all') {
            areaId = "";
        };

        var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/exportDamage' +
            '?sessionId=' + sessionId +
            '&city=' + city +
            '&areaId=' + areaId +
            '&shopTId=' + shopTId +
            '&beginTime=' + this.formatDate(beginTime, 0) +
            '&endTime=' + this.formatDate(endTime, 1);
        window.open(url, '_blank');
    },
    // 用户总览导出表
    exportCustomerSales: function(button) {
        var win = button.up("panel"),
            city = win.down('#city').getValue(),
            beginTime = win.down("datefield[name='beginTime']").getValue(),
            endTime = win.down("datefield[name='endTime']").getValue(),
            file = win.down("#file").getValue(),
            isChecked = win.getForm().findField('rangeType').checked,
            sessionId = localStorage.getItem('sessionId') || '';

        if (isChecked == true) {
            // 按日期导出
            var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/customerDataExportByDate' +
                '?cityCode=' + city +
                '&beginTime=' + this.formatDate(beginTime, 0) +
                '&endTime=' + this.formatDate(endTime, 1) +
                '&sessionId=' + sessionId;
            window.open(url, '_blank');
        } else {
            // 按用户ID导出用户清单
            var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/customerDataExportByUserId' +
                '?sessionId=' + sessionId;

            win.getForm().submit({
                url: url,
                params: {
                    sessionId: sessionId,
                    city: city
                },
                success: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                },
                failure: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                }
            })
        }
    },
    // 导出充值卡
    exportRechargeableCardSales: function(button) {
        var win = button.up("panel"),
            bizType = win.down("#bizType").getValue(),
            file = win.down("#file").getValue(),
            start = win.down("datefield[name='startTime']").getValue(),
            end = win.down("datefield[name='endTime']").getValue(),
            batch = win.down("#batchId"),
            batchId = batch.getValue(),
            isChecked = win.getForm().findField('rangeType').checked,
            sessionId = localStorage.getItem('sessionId') || '',
            rangeType;

        if (isChecked == true) {
            rangeType = 1;
        } else {
            rangeType = 2;
        }
        if (rangeType == 2) {
            // 指定时间和批次
            var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/charge' +
                '?bizType=' + bizType +
                '&start=' + this.formatDate(start, 0) +
                '&end=' + this.formatDate(end, 1) +
                '&batchId=' + batchId +
                '&sessionId=' + sessionId;

            win.getForm().submit({
                url: url,
                params: {
                    sessionId: sessionId,
                    bizType: bizType,
                    start: this.formatDate(start, 0),
                    end: this.formatDate(end, 1),
                    batchId: batchId
                },
                success: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                },
                failure: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                }
            })
        } else {
            // 指定卡号
            var url = XMLifeOperating.generic.Global.URL.biz + 'dataExport/charge' +
                '?sessionId=' + sessionId;

            win.getForm().submit({
                url: url,
                params: {
                    sessionId: sessionId,
                    bizType: bizType
                },
                success: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                },
                failure: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                }
            })
        }
    },
    formatDate: function(date, n) {
        var timestp;
        if (n === 0) {
            timestp = date.getTime();
        } else if (n === 1) {
            timestp = date.getTime() + 86400000;
        }
        return timestp;
    }
});
