Ext.define('XMLifeOperating.controller.PromotionManage', {
    extend: 'Ext.app.Controller',
    models: ['ShopArea', 'Promotion', 'PromotionGroup', 'PromotionProduct'],
    stores: ['ShopArea', 'Promotion', 'PromotionGroup', 'PromotionProduct'],
    views: [
        'promotion.PromotionManage',
        'promotion.AddPromotion',
        'promotion.PromotionGroupPanel',
        'promotion.PromotionProduct',
        'promotion.PromotionGroup'
    ],
    refs: [{
        ref: 'PromotionGroupPanel',
        selector: 'PromotionGroupPanel',
        xtype: 'PromotionGroupPanel',
        autoCreate: true
    }, {
        ref: 'PromotionProduct',
        selector: 'PromotionProduct',
        xtype: 'PromotionProduct',
        autoCreate: true
    }, {
        ref: 'PromotionManage',
        selector: 'PromotionManage',
        xtype: 'PromotionManage',
        autoCreate: true
    }, {
        ref: 'AddPromotion',
        selector: 'AddPromotion',
        xtype: 'AddPromotion',
        autoCreate: true
    }, {
        ref: 'PromotionGroup',
        selector: 'PromotionGroup',
        xtype: 'PromotionGroup',
        autoCreate: true
    }],
    init: function() {
        var self = this;
        self.shopAreaStore = self.getShopAreaStore();
        self.promotionStore = self.getPromotionStore();
        self.sromotionGroupStore = self.getPromotionGroupStore();
        self.sromotionGroupProductStore = self.getPromotionProductStore();
        self.sromotionGroupStore.on('load', function() {
            self.getPromotionGroup().updateLayout();
        });

        self.control({
            'PromotionManage': {
                added: function() {
                    self.shopAreaStore.load();
                    self.promotionStore.load();
                    self.loadPromotionStore();
                }
            },
            'PromotionManage #addPromotion': {
                click: self.showAddPromotion
            },
            'PromotionManage #edit': {
                click: self.editPromotion
            },
            'PromotionManage #activeBt': {
                click: self.activePro
            },
            'PromotionManage #statusSelect': {
                change: self.loadPromotionStore
            },
            'AddPromotion #save': {
                click: self.savePromotion
            },
            'AddPromotion': {
                afterrender: self.renderAddPromotion
            },
            'PromotionGroup': {
                edit: self.savePromotionGroup,
                cellclick: self.showDetailProduct
            },
            'PromotionGroupPanel #promotionSelect': {
                change: self.loadPromotionGroupData,
                beforerender: self.autoSelectPromotion
            },
            'PromotionGroupPanel #addPromotionBtn': {
                click: self.uploadPromotion
            }
        });
    },
    /**
     * [showAddPromotion show 添加活动窗口 ]
     * @return {[type]} [description]
     */
    showAddPromotion: function() {
        var wins = this.getAddPromotion();
        this.isPromotionEdit = false;
        wins.show();
    },
    /**
     * [savePromotion 添加活动]
     *  根据isPromotionEdit判断是新增还是修改调用不同的接口
     * @param  {[type]} button [添加按钮]
     * @return {[type]}        [null]
     */
    savePromotion: function(button) {
        var self = this,
            wins = button.up('window'),
            form = wins.down('form'),
            data = form.getValues(),
            store = this.getPromotionStore(),
            url = 'promotion';

        if (this.isPromotionEdit) {
            url = 'promotion/update';
        }
        sendPostRequest(url, data, '', '', '', function(response) {
            if (response.responseText) {
                self.loadPromotionStore()
                wins.close();
            } else {
                Ext.Msg.alert('失败', '添加活动失败');
            }
        })
    },
    /**
     * [editPromotion 修改活动]
     * @return {[type]} [null]
     */
    editPromotion: function() {
        var wins = this.getAddPromotion(),
            form = wins.down('form'),
            model = arguments[5],
            id = model.get('id'),
            bannerObj = model.get('promotionBanner');
        this.isPromotionEdit = true;

        //把图片的详细属性添加到model中
        if (bannerObj) {
            bannerObj.home && bannerObj.home[0] && bannerObj.home[0].imageId && model.set('isHaveHomeBanner', true) && model.set('homeBannerSize', bannerObj.home[0].width + '*' + bannerObj.home[0].height) && model.set('homeBanner', bannerObj.home[0].imageId);
            bannerObj.home && bannerObj.home[0] && bannerObj.home[0].imageId && bannerObj.home[0].order && model.set('homeBannerPosition', bannerObj.home[0].order);
            bannerObj.top && bannerObj.top[0] && bannerObj.top[0].imageId && model.set('topBanner', bannerObj.top[0].imageId) && model.set('topBannerSize', bannerObj.top[0].width + '*' + bannerObj.top[0].height);
            bannerObj.bottom && bannerObj.bottom && bannerObj.bottom[0].imageId && model.set('isHaveBottomBanner', true) && model.set('bottomBannerSize', bannerObj.bottom[0].width + '*' + bannerObj.bottom[0].height) && model.set('bottomBanner', bannerObj.bottom[0].imageId);
        }

        form.loadRecord(model);
        wins.show();
    },
    activePro: function() {
        var self = this,
            model = arguments[5],
            status = model.get('activeStatus'),
            promotionId = model.get('promotionId');
        if (status == 1) {
            //激活
        Ext.MessageBox.confirm('提示', '你确定要激活改活动吗?',function(result){
          if(result == 'yes'){
            sendPostRequest('promotion/activate', {
                promotionId: promotionId
            }, '', '', '', function(response) {
                if (response.responseText == 'success') {
                    Ext.Msg.alert('成功', '激活成功');
                    self.loadPromotionStore();
                } else {
                    Ext.Msg.alert('失败', data.msg);
                }
            }, function(response) {
                if (response.status == 500) {
                    Ext.Msg.alert('失败', response.responseText);
                };
            });
          }
        });
            
        } else {
            //取消激活
            Ext.MessageBox.confirm('提示', '你确定要取消激活改活动吗?',function(result){
              sendPostRequest('promotion/deactivate', {
                promotionId: promotionId
              }, '', '', '', function(response) {
                  if (response.responseText == 'success') {
                      Ext.Msg.alert('成功', '取消激活成功');
                      self.loadPromotionStore();
                  } else {
                      Ext.Msg.alert('失败', '取消激活失败');
                  }
              }, function(response) {
                  if (response.status == 500) {
                      Ext.Msg.alert('失败', response.responseText);
                  };
              });
            });
            
        }

    },
    loadPromotionStore: function() {
        var val = this.getPromotionManage().down('#statusSelect').getValue();
        this.promotionStore.load({
            params: {
                status: val
            }
        });
    },
    showDetailProduct: function() {
        var self = this,
            model = arguments[3],
            groupId = model.get('groupId');
        
        self.sromotionGroupProductStore.getProxy().extraParams={
                promotionId: self.currentPromotionId,
                groupId: groupId
            };
        self.sromotionGroupProductStore.load();

        return false;
    },
    /**
     * [loadPromotionGroupData 加载活动组store]
     * @param  {[type]} combo         [当前选择组件]
     * @param  {[type]} promotionId [选中的promotionId]
     * @return {[type]}             [null]
     */
    loadPromotionGroupData: function(combo, promotionId) {
        this.sromotionGroupProductStore.loadData([]);
        this.currentPromotionId = promotionId || this.currentPromotionId;
        this.sromotionGroupStore.load({
            params: {
                promotionId: this.currentPromotionId
            }
        });
    },
    /**
     * [uploadPromotion 提交上传活动组的excel文件]
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */
    uploadPromotion: function(button) {
        var self = this,
            form = button.up('form'),
            sessionId = localStorage.getItem('sessionId') || '',
            promotionName = this.promotionStore.getById(form.getValues().promotionId).get('name');

        Ext.MessageBox.confirm('提示', '你确认上传商品到-<span style="font-weight:bold;color:green">' + promotionName + '</span>-活动吗?', function(result) {
            if (result == 'yes') {
                form.submit({
                    url: XMLifeOperating.generic.Global.URL.biz + 'promotion/group/add?sessionId=' + sessionId,
                    success: function(form, action) {
                        var res = action.response.responseText;
                        if (res) {
                            self.loadPromotionGroupData();
                        }
                    },
                    failure: function(form, action) {
                        var res = action.response.responseText;
                        if (res) {
                            self.loadPromotionGroupData();
                        }
                    }
                });
            }
        });
    },
    /**
     * [autoSelectPromotion 自动选中以一个活动]
     * @param  {[type]} combo [当前选择组件]
     * @return {[type]}       [null]
     */
    autoSelectPromotion: function(combo) {
        var firstPromotion = this.promotionStore.getAt(0);
        firstPromotion && combo.setValue(firstPromotion.get('id'));
    },
    savePromotionGroup: function(editor, e) {
        var self = this,
            model = e.record;
        sendPostRequest('promotion/group/update', model.getData(), '', '', '', function(response) {
            if (response.status == 200 && response.responseText) {
                self.loadPromotionGroupData();
            }
        })
    },
    renderAddPromotion: function() {
    	var self = this;
        self.shopAreaStore.load();
    }
});
