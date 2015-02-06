Ext.define('XMLifeOperating.controller.BatchOperation', {
    extend: 'Ext.app.Controller',
    views: [
        'batchoperation.BatchAddPanel',
        'batchoperation.BatchUpdatePanel',
        'batchoperation.BatchUploadSimple',
        'batchoperation.BatchUploadWithLocation',
        'batchoperation.update.ProductCategoryUpdateBatch',
        'batchoperation.update.ProductCategoryTemplateUpdateBatch',
        'batchoperation.update.ProductDescriptionUpdateBatch',
        'batchoperation.update.ProductNameUpdateBatch',
        'batchoperation.update.ProductPictureUpdateBatch',
        'batchoperation.update.ProductPriceUpdateBatch',
        'batchoperation.update.ProductRankUpdateBatch',
        'batchoperation.update.ProductRank2UpdateBatch',
        'batchoperation.update.ProductBarCodeUpdateBatch',
        'batchoperation.update.ProductStatusUpdateBatch',
        'batchoperation.update.ProductStockUpdateBatch',
        'batchoperation.update.ProductTagUpdateBatch',
        'batchoperation.update.DistributionTypeUpdateBatch',
        'batchoperation.update.ProductSellerUpdateBatch',
        'batchoperation.add.DistributionLocationAddBatch',
        'batchoperation.add.ProductInstanceAddBatch',
        'batchoperation.add.ProductTemplateAddBatch'
    ],
    models: [],
    stores: ['ShopArea', 'Shop'],
    refs: [{
        ref: 'ProductNameUpdateBatch',
        selector: 'ProductNameUpdateBatch',
        xtype: 'ProductNameUpdateBatch',
        autoCreate: true
    }],
    init: function() {
        var me = this;

        me.control({
            'ProductNameUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/name');
                }
            },
            'ProductCategoryTemplateUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/updatetemplate');
                }
            },
            'ProductDescriptionUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/desc');
                }
            },
            'ProductRankUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/rank');
                }
            },
            'ProductRank2UpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/rank2');
                }
            },
            'ProductBarCodeUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/barCode');
                }
            },
            'ProductTagUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/tag');
                }
            },
            'ProductPriceUpdateBatch #areaId': {
                select: me.loadShopData
            },
            'ProductPriceUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/price');
                }
            },
            'ProductStatusUpdateBatch #areaId, ProductSellerUpdateBatch #areaId': {
                select: me.loadShopData
            },
            'ProductStatusUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/status');
                }
            },
            'ProductStockUpdateBatch #areaId': {
                select: me.loadShopData
            },
            'ProductStockUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/stock');
                }
            },
            'ProductCategoryUpdateBatch #areaId': {
                select: me.loadShopData
            },
            'ProductCategoryUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'product/resetCategory');
                }
            },
            'ProductPictureUpdateBatch #areaId': {
                select: me.loadShopData
            },
            'ProductPictureUpdateBatch #submit': {
                click: function(button) {
                    me.updateAndResumeMultiFileInput(button, '', true);
                }
            },
            'DistributionTypeUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'residentalDistrict/update/district/type');
                }
            },
            'ProductSellerUpdateBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/seller');
                }
            },
            'ProductTemplateAddBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'backdoor/update/product/addtemplates');
                }
            },
            'DistributionLocationAddBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'residentalDistrict/genDistrict');
                }
            },
            'ProductInstanceAddBatch #areaId': {
                select: me.loadShopData
            },
            'ProductInstanceAddBatch #submit': {
                click: function(button) {
                    me.updateSimple(button, 'product/appendProducts');
                }
            }
        });
    },
    updateSimple: function(button, url) {
        var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog'),
            arr = path.split('\\'),
            filename = arr[arr.length - 1].split('.')[0];

        button.up('form').down('textfield[name="filename"]').setValue(filename);

        form.url = XMLifeOperating.generic.Global.URL.biz + url;
        this.submitForm(form, logArea, path);
    },
    updateAndResumeMultiFileInput: function(button, url, syncImg) {
        var me = this,
            host = window.location.host.toLowerCase(),
            form = button.up('form').getForm(),
            path = '/',
            comment = form.owner.down('#commentMsg') && form.owner.down('#commentMsg').getValue(),
            logArea = button.up('form').down('#resultLog'),
            sessionId = localStorage.getItem('sessionId'),
            syncImgUrl = 'https://192.168.6.102/proxy/http://192.168.6.101/jenkins/job/SyncSkuResource/build?delay=0sec';

        if (host.indexOf('localhost') || host.indexOf('127.0') || host.indexOf('dev')) {
            evn = 'dev';
        } else if (host.indexOf('rc')) {
            evn = 'rc';
        } else {
            evn = 'production';
        }

        if (syncImg) {
            Ext.Ajax.request({
                url: syncImgUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    json: Ext.encode({
                        "parameter": [{
                            "name": "session_id",
                            "value": sessionId
                        }, {
                            "name": "dst_env",
                            "value": evn
                        }, {
                            "name": "comment",
                            "value": comment
                        }]
                    })
                },
                method: 'POST',
                success: function(response) {
                    //触发成功
                    if (response.status == 201) {
                        me.getBuildResult(function() {
                            if (url) {
                                form.url = XMLifeOperating.generic.Global.URL.biz + url;
                                me.submitForm(form, logArea, path, function() {});
                            }
                        });
                    }
                },
                failure: function(response, opts) {
                    //触发失败
                }
            });
        }
    },
    getBuildResult: function(callback) {
        var me = this,
            runner = new Ext.util.TaskRunner(),
            resultJsonUrl = 'https://192.168.6.102/proxy/http://192.168.6.101/jenkins/job/SyncSkuResource/lastBuild/api/json',
            getJson = function() {
                Ext.Ajax.request({
                    url: resultJsonUrl,
                    method: 'GET',
                    success: function(response) {
                        var data = Ext.decode(response.responseText);
                        if (response.status === 200) {
                            if (data.result) {
                                if (data.result === 'SUCCESS') {
                                    me.fireEvent('stopGetJsonResult');
                                }
                            }
                        }
                    },
                    failure: function() {}
                });
            },
            pro = Ext.MessageBox.progress('请等待', '上传图片中<a target="_blank" href="http://192.168.6.101/jenkins/job/SyncSkuResource/">查看进度详情..</a>');

        pro.updateProgress(9 / 10);

        var task = runner.newTask({
            run: getJson,
            interval: 5000
        });

        task.start();
        me.on('stopGetJsonResult', function() {
            task.stop();
            pro.hide();
            Ext.Msg.alert('提示', '图片更新成功');
            callback && callback();
        });
    },
    loadShopData: function(combo, records, opts) {
        if (records.length == 0) {
            return;
        }

        var shopStore = this.getShopStore();
        var shopCombo = combo.up('form').down('#shopId');

        shopCombo.setValue('');
        shopStore.load({
            params: {
                areaId: records[0].data.id
            }
        });
    },
    submitForm: function(form, logArea, path, cb) {
        var sessionId = localStorage.getItem('sessionId') || '';

        if (form.isValid()) {
            if (form.url.indexOf('sessionId') < 0) {
                form.url = form.url + '?sessionId=' + sessionId;
            }
            form.submit({
                waitMsg: '正在上传您的文件......',
                success: function(form, action) {
                    if (cb) {
                        cb();
                    }
                    this.customMethod(form, action);
                },
                failure: function(form, action) {
                    if (cb) {
                        cb();
                    }
                    this.customMethod(form, action);
                },
                customMethod: function(form, action) {
                    var data = Ext.decode(action.response.responseText);
                    var dataStr = Ext.Date.format(new Date(data.logTime), 'Y-m-d H:i');
                    var msg = "<p><span style='color: blue;'>日志信息: " + dataStr + "</span><br>";

                    msg += "----------------------------------------<br><br>";
                    msg += '[Msg] 导入开始…… <br>';
                    msg += "[Msg] 导入类型：Excel文件[2007或以上版本]<br>";
                    msg += "[Msg] 导入路径: " + path + "<br>";
                    msg += "[Msg] 执行统计：" + data.runMsg[0] + "<br>";
                    msg += "[Msg] 提交说明：" + data.comment + "<br>";
                    if (data.runResult[0] === 1) {
                        msg += "[Msg] 执行结果：<span style='color: blue;'>成功</span></p>";
                    } else {
                        msg += "[Msg] 错误信息：" + data.errorMsg + "<br>";
                        msg += "[Msg] 执行结果：<span style='color: red;'>失败</span></p>";
                    }
                    logArea.update(msg);
                }
            });
        }
    }
});
