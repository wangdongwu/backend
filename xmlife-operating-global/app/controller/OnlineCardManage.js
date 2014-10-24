Ext.define('XMLifeOperating.controller.OnlineCardManage', {
    extend: 'Ext.app.Controller',
    models: ['CardTemplate','OnlineCard'],
    stores: ['CardTemplate','OnlineCard'],
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
    },
    {
      ref: 'addOnlineCard',
      selector: 'addOnlineCard',
      xtype: 'addOnlineCard',
      autoCreate: true
    },{
      ref: 'CardDetail',
      selector: 'CardDetail',
      xtype: 'CardDetail',
      autoCreate: true
    }
    ],
    init: function() {
      var self = this;
        self.status = 1;
        self.control({
            'OnlineCardManage' : {
              activate : function(){
                self.getOnlineCardStore().load({params:{status:1}});
                self.getCardTemplateStore().load();
              }
            },
            'OnlineCardManage #online':{
              click : function(){
                /*加载在架的*/
                var store = self.getOnlineCardStore();
                self.status = 1;
                store.getProxy().extraParams={
                  status : 1
                };
                store.load();
              }
            },
            'OnlineCardManage #offline':{
              click : function(){
                /*加载下架的*/
                 var store = self.getOnlineCardStore();
                 self.status = 0;
                 store.getProxy().extraParams={
                  status : 0
                };
                store.load();
              }
            },
            'OnlineCardManage #addNewCart' : {
              click : function(){
                var addOnlineCard = self.getAddOnlineCard(),
                    templeteCombo = addOnlineCard.down('#templeteCombo'),
                    soldPrice = addOnlineCard.down('#soldPrice');

                    templeteCombo.setDisabled(false);
                    soldPrice.setDisabled(false);

                    self.getAddOnlineCard().show();
              }
            },
            'OnlineCardManage #showDetail' : {
              click : function(panel){
                var model = arguments[5],
                    data = model.getData(),
                    cardDetail = self.getCardDetail(),
                    status = model.get('status'),
                    button = cardDetail.down('#hander');
                    
                    if(status){
                      button.setText('下架');
                      cardDetail.url = 'cardBatch/close';
                    }else{
                      button.setText('上架');
                      cardDetail.url = 'cardBatch/open';
                    }
                    cardDetail.status = status;
                    cardDetail.currentId = data.id;
                    cardDetail.show().update(data);
              }
            },
            'addOnlineCard' : {
              activate : function(){
                self.getCardTemplateStore().load();
              }
            },
            'addOnlineCard #templeteCombo' : {
              change : function(combo,newValue,oldValue){
                var addOnlineCard = combo.up('window'),
                    templeteCon = addOnlineCard.down('#templeteCon'),
                    templeteWorp = addOnlineCard.down('#templeteWorp'),
                    tstore = self.getCardTemplateStore(),
                    data = tstore.getById(newValue).getData();
                   
                    templeteWorp.show();
                    templeteCon.update(data);
              }
            },
            'addOnlineCard #submit' : {
              click : function(button){
                var addOnlineCard = button.up('window'),
                    form = addOnlineCard.down('form');
                    if(addOnlineCard.isEdit){
                      /*修改*/
                      form.submit({
                        url : form.editUrl,
                        method : 'put',
                        success : function(response){

                        },
                        failure : function(form,result){
                          if(result.response.responseText == 1){
                            self.loadCartData();
                          };
                        }
                      })
                    }else{
                      /*添加*/
                      form.submit({
                        method : 'put',
                        success : function(response){
                        },
                        failure : function(form,result){
                          if(result.response.responseText == 1){
                            self.loadCartData();
                          }
                        }
                      })
                    }


              }
            },
            'CardDetail #edit' : {
              click : function(button){
                var CardDetail = button.up('window'),
                    id = CardDetail.currentId,
                    addOnlineCard = self.getAddOnlineCard(),
                    templeteCombo = addOnlineCard.down('#templeteCombo'),
                    soldPrice = addOnlineCard.down('#soldPrice'),
                    form = addOnlineCard.down('form'),
                    store = self.getOnlineCardStore(),
                    model = store.getById(id);

                    templeteCombo.setDisabled(true);
                    soldPrice.setDisabled(true);

                    CardDetail.destroy();
                    form.loadRecord(model);
                    addOnlineCard.setTitle('修改充值卡');
                    addOnlineCard.isEdit = true;
                    addOnlineCard.show();


              }
            },
            'CardDetail #hander' : {
              click : function(button){
                var cardDetail = button.up('window');
                Ext.Ajax.request({
                  url : XMLifeOperating.generic.Global.URL.biz +cardDetail.url,
                  method : 'put',
                  params : {id:cardDetail.currentId},
                  success : function(response){
                      if(response.responseText == 1){
                        if(cardDetail.status){
                          Ext.Msg.alert('成功','下架成功');                          
                        }else{
                          Ext.Msg.alert('成功','上架成功');                          
                        }
                        self.getOnlineCardStore().load({params:{status:1}});
                        self.getCardDetail().destroy();
                      }
                    },
                    failure :function(response){
                      Ext.Msg.alert('失败','下架失败');
                    }
                })
              }
            }
        });
    },
    loadCartData : function(){
      var status = this.status;
      Ext.Msg.alert('成功','更新成功');
      this.getOnlineCardStore().load({params:{status:status}});
      this.getAddOnlineCard().destroy();
    }
});
