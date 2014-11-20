Ext.define('XMLifeOperating.controller.DamagedProduct', {
  extend: 'Ext.app.Controller',
  views: [
    'damagedGoodsManage.DamagedGoodsList'
  ],
  stores: ['DamagedProduct', 'ShopArea'],
  models: ['DamagedProduct'],
  refs: [
    {
      ref: 'damagedGoodsList',
      selector: 'damagedGoodsList',
      xtype: 'damagedGoodsList',
      autoCreate: true
    }
  ],
  init: function () {
    var self = this;
    self.queryParams = {};
    self.control({
      'damagedGoodsList #shopArea': {
        click: function () {
          var store = self.getShopAreaStore();

          console.log(XMLifeOperating.generic.Global.currentCity);
          store.getProxy().extraParams = {
            city: XMLifeOperating.generic.Global.currentCity
          }
          store.load();
        }
      },
      'damagedGoodsList #search': {
        click: function (button) {
          self.queryParams.areaId = button.up("panel").down("#shopArea").getValue();
          self.queryParams.startTime = self.formatDate(button.up("panel").down("datefield[name='startTime']").getValue());
          self.queryParams.endTime = self.formatDate(button.up("panel").down("datefield[name='endTime']").getValue());
          self.queryParams.status = button.up("panel").down("#status").getValue();
          self.queryParams.cityId = XMLifeOperating.generic.Global.currentCity;

          self.reloadProductList();

        }
      },
      'damagedGoodsList #export': {
        click: function (button) {
          var areaId = button.up("panel").down("#shopArea").getValue(),
              startTime = button.up("panel").down("datefield[name='startTime']").getValue(),
              endTime = button.up("panel").down("datefield[name='endTime']").getValue(),
              status = button.up("panel").down("#status").getValue();
          if (areaId == null) {
              areaId = "";
          };
          if (status == null) {
              status = "";
          };
          var sessionId = localStorage.getItem('sessionId') || '';
          var url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/exportAuditList' +
            '?cityId=' + XMLifeOperating.generic.Global.currentCity +
            '&areaId=' + areaId +
            '&startTime=' + self.formatDate(startTime) +
            '&endTime=' + self.formatDate(endTime) +
            '&status=' + status +
            '&sessionId=' + sessionId;

          window.open(url, '_blank');
        }
      },
      'damagedGoodsList #batchAccept': {
        click: function (button) {
          var selectedItems = button.up("panel").getSelectionModel().getSelection(),
            params = {},
            itemIds = [];
          for (var i = 0; i < selectedItems.length; i++) {
            itemIds.push(selectedItems[i].get('id'));
          }
          params['ids'] = itemIds;
          params['pass'] = true;
          self.auditProduct(params);
        }
      },
      'damagedGoodsList #acceptBtn': {
        click: function () {
          var id = arguments[5].get("id");

          self.auditProduct({
            'ids': [id],
            'pass': true
          });
        }
      },
      'damagedGoodsList #rejectBtn': {
        click: function () {
          var id = arguments[5].get("id");
          console.log(id);

          self.auditProduct({
            'ids': [id],
            'pass': false
          });

        }
      }
    });
  },
  auditProduct: function (params) {
    var self = this;
    var url = XMLifeOperating.generic.Global.URL.biz + 'damagedProductApply/audit';
    Ext.Ajax.request({
      url: url,
      method: 'PUT',
      params: params,
      success: function (v, action) {
        self.reloadProductList();
      }
    })
  },
  reloadProductList: function () {
    var productStore = this.getDamagedProductStore();
    productStore.getProxy().extraParams = this.queryParams;
    productStore.load();
  },
  formatDate: function (date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }
})
