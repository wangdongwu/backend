Ext.define('XMLifeOperating.controller.OnlineCardManage', {
  extend: 'Ext.app.Controller',
  models: ['CardTemplate', 'OnlineCard'],
  stores: ['CardTemplate', 'OnlineCard'],
  views: [
    'rechargeableCardManage.onlineCard.OnlineCardManage',
    'rechargeableCardManage.onlineCard.addOnlineCard',
    'rechargeableCardManage.onlineCard.CardDetail'
  ],
  refs: [{
    ref: 'OnlineCardManage',
    selector: 'OnlineCardManage',
    xtype: 'OnlineCardManage',
    autoCreate: true
  }, {
    ref: 'addOnlineCard',
    selector: 'addOnlineCard',
    xtype: 'addOnlineCard',
    autoCreate: true
  }, {
    ref: 'CardDetail',
    selector: 'CardDetail',
    xtype: 'CardDetail',
    autoCreate: true
  }],
  init: function () {
    var self = this;
    self.status = 1;
    self.control({
      'OnlineCardManage': {
        activate: function () {
          self.getOnlineCardManage().down('#status').select('1');
          self.getCardTemplateStore().load();
        }
      },
      'OnlineCardManage #saveSort': {
        click: function () {
          var store = self.getOnlineCardStore(),
            idList = [];
          store.each(function (v) {
            idList.push(v.get('id'));
          });
          sendPutRequest('cardBatch/updateOrder', {
            idList: idList
          }, '', '', '', function (response) {
            if (response.responseText == 1) {
              Ext.Msg.alert('提示', '排序成功');
            } else {
              Ext.Msg.alert('提示', '排序失败');
            }
            store.load();
          });
        }
      },
      'OnlineCardManage #status': {
        change: function (combo, v) {
          var store = self.getOnlineCardStore();
          self.status = v;
          store.getProxy().extraParams = {
            status: v
          };
          store.load();
        }
      },
      'OnlineCardManage #addNewCart': {
        click: function () {
          var addOnlineCard = self.getAddOnlineCard(),
            templeteCombo = addOnlineCard.down('#templeteCombo'),
            soldPrice = addOnlineCard.down('#soldPrice');
          templeteCombo.setDisabled(false);
          soldPrice.setDisabled(false);
          self.getAddOnlineCard().show();
        }
      },
      'OnlineCardManage #showDetail': {
        click: function () {
          var model = arguments[5],
            data = model.getData(),
            cardDetail = self.getCardDetail(),
            status = model.get('status'),
            button = cardDetail.down('#hander'),
            date = new Date();
          if (new Date(data.endTime) < date) {
            button.setDisabled(true);
          }
          if (new Date(data.endTime) < date) {
            data.endRed = true;
          }
          if (new Date(data.displayEndTime) < date) {
            data.disRed = true;
          }
          if (status == 1) {
            button.setText('下架');
            cardDetail.url = 'cardBatch/close';
          } else {
            button.setText('上架');
            cardDetail.url = 'cardBatch/open';
          }
          cardDetail.status = status;
          cardDetail.currentId = data.id;
          cardDetail.update(data);
          cardDetail.show();
        }
      },
      'addOnlineCard': {
        activate: function () {
          self.getCardTemplateStore().load();
        }
      },
      'addOnlineCard #templeteCombo': {
        change: function (combo, newValue) {
          var addOnlineCard = combo.up('window'),
            form = addOnlineCard.down('form'),
            templeteCon = addOnlineCard.down('#templeteCon'),
            templeteWorp = addOnlineCard.down('#templeteWorp'),
            batchName = addOnlineCard.down('#batchName'),
            tstore = self.getCardTemplateStore(),
            model = tstore.getById(newValue),
            data = model.getData();
          self.formatData(data);
          if (!addOnlineCard.isEdit) {
            batchName.setValue(model.get('name'));
            form.loadRecord(model);
          }
          templeteWorp.show();
          templeteCon.update(data);
        }
      },
      'addOnlineCard #submit': {
        click: function (button) {
          var addOnlineCard = button.up('window'),
            form = addOnlineCard.down('form'),
            soldPrice = form.down('#soldPrice'),
            price = form.down('#soldPrice').getValue();
          soldPrice.setValue(price * 100);
          if (addOnlineCard.isEdit) {
            /*修改*/
            form.submit({
              url: form.editUrl,
              method: 'put',
              success: function () {
                soldPrice.setValue(price);
              },
              failure: function (form, result) {
                soldPrice.setValue(price);
                if (result.response.responseText == 1) {
                  self.loadCartData(function (cartStore) {
                    var cardDetail = self.getCardDetail(),
                      data = cartStore.findRecord('id', cardDetail.currentId).getData();
                    cardDetail.show().update(data);
                  });
                }
              }
            });
          } else {
            /*添加*/
            form.submit({
              method: 'put',
              success: function () {
                soldPrice.setValue(price);
              },
              failure: function (form, result) {
                soldPrice.setValue(price);
                if (result.response.responseText == 1) {
                  Ext.Msg.alert('失败', '添加成功');
                  self.loadCartData();
                } else {
                  Ext.Msg.alert('提示', result.response.responseText);
                }
              }
            });
          }
        }
      },
      'CardDetail #edit': {
        click: function (button) {
          var CardDetail = button.up('window'),
            id = CardDetail.currentId,
            addOnlineCard = self.getAddOnlineCard(),
            templeteCombo = addOnlineCard.down('#templeteCombo'),
            soldPrice = addOnlineCard.down('#soldPrice'),
            form = addOnlineCard.down('form'),
            store = self.getOnlineCardStore(),
            model = store.getById(id);
          addOnlineCard.isEdit = true;
          CardDetail.hide();
          templeteCombo.setDisabled(true);
          soldPrice.setDisabled(true);
          form.loadRecord(model);
          addOnlineCard.setTitle('修改充值卡');
          addOnlineCard.show();
        }
      },
      'CardDetail #hander': {
        click: function (button) {
          var cardDetail = button.up('window');
          Ext.Ajax.request({
            url: XMLifeOperating.generic.Global.URL.biz + cardDetail.url,
            method: 'put',
            params: {
              id: cardDetail.currentId
            },
            success: function (response) {
              var status = null;
              if (response.responseText == 1) {
                if (cardDetail.status == 1) {
                  Ext.Msg.alert('成功', '下架成功');
                  status = 1;
                } else {
                  Ext.Msg.alert('成功', '上架成功');
                  status = 0;
                }
                self.getOnlineCardStore().load({
                  params: {
                    status: status
                  }
                });
                self.getCardDetail().destroy();
              }
            },
            failure: function () {
              Ext.Msg.alert('失败', '下架失败');
            }
          });
        }
      }
    });
  },
  loadCartData: function (callback) {
    var status = this.status;
    this.getOnlineCardStore().load({
      params: {
        status: status
      },
      callback: function () {
        callback && callback(this);
      }
    });
    this.getAddOnlineCard().destroy();
  },
  formatData: function (data) {
    if (data.type == 0) {
      data.type = '普通卡';
    } else if (data.type == 2) {
      data.type = '返现卡';
    }
    if (data.amount) {
      data.amount = (data.amount / 100).toFixed(2);
    }
    if (data.rule) {
      data.rule.immediatelyAmount = (data.rule.immediatelyAmount / 100).toFixed(2);
      data.rule.batchAmount = (data.rule.batchAmount / 100).toFixed(2);
    }
    if (data.newAccount) {
      data.newAccount = '是';
    } else {
      data.newAccount = '否';
    }
    data.soldPrice = (data.soldPrice / 100).toFixed(2);
  }
});