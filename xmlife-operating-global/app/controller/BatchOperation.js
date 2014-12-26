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
    'batchoperation.add.DistributionLocationAddBatch',
    'batchoperation.add.ProductInstanceAddBatch',
    'batchoperation.add.ProductTemplateAddBatch'
  ],
  models: [],
  stores: ['ShopArea', 'Shop'],
  refs: [
    {
      ref: 'ProductNameUpdateBatch',
      selector: 'ProductNameUpdateBatch',
      xtype: 'ProductNameUpdateBatch',
      autoCreate: true
    }
  ],
  init: function () {
    var self = this;
    self.control({
      'ProductNameUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/name');
        }
      },
      'ProductCategoryTemplateUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/updatetemplate');
        }
      },
      'ProductDescriptionUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/desc');
        }
      },
      'ProductRankUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/rank');
        }
      },
      'ProductRank2UpdateBatch #submit': {
          click: function(button) {
              self.updateSimple(button, 'backdoor/update/product/rank2');
          }
      },
      'ProductBarCodeUpdateBatch #submit': {
          click: function(button) {
              self.updateSimple(button, 'backdoor/update/product/barCode');
          }
      },
      'ProductTagUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/tag');
        }
      },
      'ProductPriceUpdateBatch #areaId': {
        select: self.loadShopData
      },
      'ProductPriceUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/price');
        }
      },
      'ProductStatusUpdateBatch #areaId': {
        select: self.loadShopData
      },
      'ProductStatusUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/status');
        }
      },
      'ProductStockUpdateBatch #areaId': {
        select: self.loadShopData
      },
      'ProductStockUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'backdoor/update/product/stock');
        }
      },
      'ProductCategoryUpdateBatch #areaId': {
        select: self.loadShopData
      },
      'ProductCategoryUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'product/resetCategory');
        }
      },
      'ProductPictureUpdateBatch #areaId': {
        select: self.loadShopData
      },
      'ProductPictureUpdateBatch #submit': {
        click: function (button) {
          self.updateAndResumeMultiFileInput(button, 'backdoor/update/product/img2')
        }
      },
      'DistributionTypeUpdateBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'residentalDistrict/update/district/type');
        }
      },
      'ProductTemplateAddBatch #submit': {
        click: function (button) {
          self.updateAndResumeMultiFileInput(button, 'backdoor/update/product/addtemplates')
        }
      },
      'DistributionLocationAddBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'residentalDistrict/genDistrict');
        }
      },
      'ProductInstanceAddBatch #areaId': {
        select: self.loadShopData
      },
      'ProductInstanceAddBatch #submit': {
        click: function (button) {
          self.updateSimple(button, 'product/appendProducts');
        }
      }
    });
  },
  updateSimple: function (button, url) {
    var form = button.up('form').getForm(),
      path = button.up("fieldcontainer").down("filefield").getValue(),
      logArea = button.up('form').down('#resultLog'),
      arr = path.split('\\'),
      filename = arr[arr.length-1].split('.')[0];
      button.up('form').down('textfield[name="filename"]').setValue(filename);

    form.url = XMLifeOperating.generic.Global.URL.biz + url;
    this.submitForm(form, logArea, path);
  },
  updateAndResumeMultiFileInput: function (button, url) {
    var form = button.up('form').getForm(),
      path = button.up("fieldcontainer").down("filefield").getValue(),
      logArea = button.up('form').down('#resultLog');

    form.url = XMLifeOperating.generic.Global.URL.biz + url;
    this.submitForm(form, logArea, path, function () {
      button.up('form').down('#pictures').fileInputEl.set({multiple: 'multiple'});
    });
  },
  loadShopData: function(combo, records, opts) {
    if (records.length == 0) return;

    var shopStore = this.getShopStore();
    var shopCombo = combo.up('form').down('#shopId')
    shopCombo.setValue('');
    shopStore.load({
      params: {areaId: records[0].data.id}
    });
  },
  submitForm: function (form, logArea, path, cb) {
    var sessionId = localStorage.getItem('sessionId') || '';
    if (form.isValid()) {
      if (form.url.indexOf('sessionId') < 0) {
        form.url = form.url + '?sessionId=' + sessionId;
      }
      form.submit({
        waitMsg: '正在上传您的文件......',
        success: function (form, action) {
          if (cb) {
            cb();
          }
          this.customMethod(form, action);
        },
        failure: function (form, action) {
          if (cb) {
            cb();
          }
          this.customMethod(form, action);
        },
        customMethod: function (form, action) {
          var data = JSON.parse(action.response.responseText);
          var date = new Date(data.logTime);
          var dataStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
          msg = "<p><span style='color: blue;'>日志信息: " + dataStr + "</span><br>";
          msg += "----------------------------------------<br><br>";
          msg += '[Msg] 导入开始…… <br>';
          msg += "[Msg] 导入类型：Excel文件[2007或以上版本]<br>";
          msg += "[Msg] 导入路径: " + path + "<br>";
          msg += "[Msg] 执行统计：" + data.runMsg[0] + "<br>";
          msg += "[Msg] 提交说明：" + data.comment + "<br>";
          if (data.runResult[0] === 1) {
            msg += "[Msg] 执行结果：<span style='color: blue;'>成功</span></p>"
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
