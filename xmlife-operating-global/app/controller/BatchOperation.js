Ext.define('XMLifeOperating.controller.BatchOperation', {
  extend: 'Ext.app.Controller',
  views: [
    'batchoperation.BatchAddPanel',
    'batchoperation.BatchUpdatePanel',
    'batchoperation.BatchUploadSimple',
    'batchoperation.BatchUploadWithLocation',
    'batchoperation.update.ProductCategoryUpdateBatch',
    'batchoperation.update.ProductDescriptionUpdateBatch',
    'batchoperation.update.ProductNameUpdateBatch',
    'batchoperation.update.ProductPictureUpdateBatch',
    'batchoperation.update.ProductPriceUpdateBatch',
    'batchoperation.update.ProductRankUpdateBatch',
    'batchoperation.update.ProductStatusUpdateBatch',
    'batchoperation.update.ProductStockUpdateBatch',
    'batchoperation.update.ProductTagUpdateBatch',
    'batchoperation.add.DistributionLocationAddBatch',
    'batchoperation.add.ProductInstanceAddBatch',
    'batchoperation.add.ProductTemplateAddBatch'
  ],
  models : [],
  stores : ['ShopArea', 'Shop'],
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
          var form = button.up('form').getForm(),
              path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/name';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductDescriptionUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
              path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/desc';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductRankUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
              path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/rank';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductTagUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/tag';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductPriceUpdateBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductPriceUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/price';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductStatusUpdateBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductStatusUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/status';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductStockUpdateBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductStockUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/stock';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductCategoryUpdateBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductCategoryUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'product/resetCategory';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductPictureUpdateBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductPictureUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/img2';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductTemplateAddBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/addtemplates';
          self.submitForm(form, logArea, path);
        }
      },
      'DistributionLocationAddBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'residentalDistrict/genDistrict';
          self.submitForm(form, logArea, path);
        }
      },
      'ProductInstanceAddBatch #areaId': {
        select: function(combo, records, opts) {
          if (records.length == 0) return;

          var shopStore = this.getShopStore();
          shopStore.load({
            params: {areaId: records[0].data.id}
          });
        }
      },
      'ProductInstanceAddBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            path = button.up("fieldcontainer").down("filefield").getValue(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'product/appendProducts';
          self.submitForm(form, logArea, path);
        }
      }
    });

  },
  submitForm: function (form, logArea, path) {
    var sessionId = localStorage.getItem('sessionId') || '';
    if (form.isValid()) {
      if (form.url.indexOf('sessionId') < 0) {
        form.url = form.url + '?sessionId=' + sessionId;
      }
      form.submit({
        waitMsg: '正在上传您的文件......',
        success: function(form, action) {
          this.customMethod(form, action);
        },
        failure: function(form, action) {
          this.customMethod(form, action);
        },
        customMethod: function(form, action) {
          var data = JSON.parse(action.response.responseText);
          var date = new Date(data.logTime);
          var dataStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
          msg = "<p><span style='color: blue;'>日志信息: " + dataStr + "</span><br>";
          msg += "----------------------------------------<br><br>";
          msg += '[Msg] 导入开始…… <br>';
          msg += "[Msg] 导入类型：Excel文件[2007或以上版本]<br>";
          msg += "[Msg] 导入路径: " + path + "<br>";
          msg += "[Msg]执行统计：" + data.runMsg[0] + "<br>";
          if (data.runResult[0] === 1) {
            msg += "[Msg]执行结果：<span style='color: blue;'>成功</span></p>"
          } else {
            msg += "[Msg]错误信息：" + data.errorMsg + "<br>";
            msg += "[Msg]执行结果：<span style='color: red;'>失败</span></p>";
          }
          logArea.update(msg);
        }
      });
    }
  }
});
