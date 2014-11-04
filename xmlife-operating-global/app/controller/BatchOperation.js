Ext.define('XMLifeOperating.controller.BatchOperation', {
  extend: 'Ext.app.Controller',
  views: [
    'batchoperation.update.ProductNameUpdateBatch'
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
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/name';
          self.submitForm(form, logArea);
        }
      },
      'ProductDescriptionUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/desc';
          self.submitForm(form, logArea);
        }
      },
      'ProductRankUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/rank';
          self.submitForm(form, logArea);
        }
      },
      'ProductTagUpdateBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/tag';
          self.submitForm(form, logArea);
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
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/price';
          self.submitForm(form, logArea);
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
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/status';
          self.submitForm(form, logArea);
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
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/stock';
          self.submitForm(form, logArea);
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
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'product/resetCategory';
          self.submitForm(form, logArea);
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
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/img2';
          self.submitForm(form, logArea);
        }
      },
      'ProductTemplateAddBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'backdoor/update/product/addtemplates';
          self.submitForm(form, logArea);
        }
      },
      'DistributionLocationAddBatch #submit': {
        click: function (button) {
          var form = button.up('form').getForm(),
            logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'residentalDistrict/genDistrict';
          self.submitForm(form, logArea);
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
              logArea = button.up('form').down('#resultLog');

          form.url = XMLifeOperating.generic.Global.URL.biz + 'product/appendProducts';
          self.submitForm(form, logArea);
        }
      }
    });

  },
  submitForm: function (form, logArea) {
    form.url = form.url;
    form.submit({
      waitMsg: '正在上传您的文件......',
      success: function(form, action) {
        logArea.setValue(action.response.responseText);
      },
      failure: function(form, action) {
        logArea.setValue(action.response.responseText);
      }
    });
  }
});
