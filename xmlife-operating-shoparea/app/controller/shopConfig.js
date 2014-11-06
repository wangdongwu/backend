Ext.define('XMLifeOperating.controller.shopConfig', {
    extend: 'Ext.app.Controller',
    models: ['ShopArea','Shop','ShopConfig','shopModules','ShopModulesItem'],
    stores: ['ShopArea','Shop','ShopConfig','shopModules','ShopModulesItem','ShopUrlType',
    'HomePageShop', 'HomePageCategory', 'HomePageLeafCategory', 'HomePageProduct'],
    views: [
    'centralPointManage.shopConfig.ShopConfigManage',
    'centralPointManage.shopConfig.ShopVersionPanel',
    'centralPointManage.shopConfig.ShopVersionList',
    'centralPointManage.shopConfig.ShopModuleList',
    'centralPointManage.shopConfig.ShopModuleDetail',
    'centralPointManage.shopConfig.ShopPreview',
    'centralPointManage.shopConfig.AddModule',
    'centralPointManage.shopConfig.EditModule',
    'centralPointManage.shopConfig.AddVersion',
    'centralPointManage.shopConfig.AddModuleItem'
    ],
    refs: [{
      ref: 'ShopConfigManage',
      selector: 'ShopConfigManage',
      xtype: 'ShopConfigManage',
      autoCreate: true
    },
    {
      ref: 'ShopVersionPanel',
      selector: 'ShopVersionPanel',
      xtype: 'ShopVersionPanel',
      autoCreate: true
    },
    {
      ref: 'ShopVersionList',
      selector: 'ShopVersionList',
      xtype: 'ShopVersionList',
      autoCreate: true
    },
    {
      ref: 'ShopModuleList',
      selector: 'ShopModuleList',
      xtype: 'ShopModuleList',
      autoCreate: true
    },
    {
      ref: 'ShopModuleDetail',
      selector: 'ShopModuleDetail',
      xtype: 'ShopModuleDetail',
      autoCreate: true
    },
    {
      ref: 'ShopPreview',
      selector: 'ShopPreview',
      xtype: 'ShopPreview',
      autoCreate: true
    },{
      ref: 'AddModule',
      selector: 'AddModule',
      xtype: 'AddModule',
      autoCreate: true
    },{
      ref: 'AddVersion',
      selector: 'AddVersion',
      xtype: 'AddVersion',
      autoCreate: true
    },{
      ref: 'AddModuleItem',
      selector: 'AddModuleItem',
      xtype: 'AddModuleItem',
      autoCreate: true
    },{
      ref: 'EditModule',
      selector: 'EditModule',
      xtype: 'EditModule',
      autoCreate: true
    }],
    init: function() {
      var self = this;
        self.control({
            'ShopConfigManage' : {
              added : self.getInitData,
              onShowView : self.switchArea
            },
            'ShopConfigManage #shopList':{
              change : self.switchShop
            },
            'AddVersion #subNewVersion' : {
              click : self.subNewVersion
            },
            'ShopVersionList' : {
              selectionchange : self.changeModuleListView,
              added : self.initVersionList
            },
            'ShopVersionList #addVersion' : {
              click : self.addNewVersion
            },
            'ShopVersionList #enableBt' : {
              click : self.enableVersion
            },
            'ShopVersionList #delete' : {
              click : self.deleteVersion
            },
            'ShopVersionList #edit' : {
              click : self.editVersion
            },
            'AddModule #subModule' : {
              click : self.subNewModule
            },
            'EditModule #subEditModule' :{
                click : self.subEditModule
            },
            'ShopModuleList' : {
              selectionchange : self.changeModuleDetailView
            },
            'ShopModuleList dataview' : {
              beforedrop : self.shopModuleSortCheck,
              drop : self.shopModuleSort
            },
            'ShopModuleList #addModule' : {
              click : self.addModule
            },
            'ShopModuleList #addfromTemplate' : {
              click : self.addfromTemplate
            },
            'ShopModuleList #delete' : {
              click : self.deleteModule
            },
              'ShopModuleList #edit' : {
                click : self.editModule
              }
            ,
            'ShopModuleDetail':{
              
            },
            'ShopModuleDetail #addNewModuleItem' : {
              click : self.addNewModuleItem
            },
            'ShopModuleDetail #refreshPriview' : {
              click : self.refreshPriview
            },
            'ShopModuleDetail dataview' : {
              drop : self.shopModuleDetailSort
            },
            'ShopModuleDetail #edit' : {
              click : self.editModuleItem
            },
            'ShopModuleDetail #delete' : {
              click : self.deleteModuleItem
            },
            'AddModuleItem #imageUpload' :{
              change : self.uploadModuleImage
            },
            'AddModuleItem #subNewModuleItem':{
              click : self.subNewModuleItem
            },
            // 选择url类型
            'AddModuleItem combo[name=urlType]': {
                select: self.urlTypeSelect,
            },
            // 选择店铺
            'AddModuleItem combo[name=shopId]': {
                select: self.shopSelect
            },
            // 选择货架
            'AddModuleItem combo[name=cid]': {
                select: self.skuSelect
            },

            /*,
            'AddModule #moduleTypeRadio' : {
              change : self.switchModuleType,
              render : self.switchModuleType
            }*/
        });
    },
    switchArea : function(){
      this.areaId = XMLifeOperating.generic.Global.current_operating;
      this.getInitData();
    },
    getInitData : function(){
      var panel = this.getShopConfigManage(),
          shopList = panel.down('#shopList'),
          shopStore = this.getShopStore();

          shopList.setValue('');
          shopStore.load({
            params : {
              areaId : this.areaId
            }
          });
          
    },
    switchShop : function(panel,shopId){
        this.currentShopId = shopId;
        this.loadShopVersionStore(shopId);
    },
    /**
     * [subNewVersion 添加新版本]
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */
    subNewVersion : function(button){
      var self = this,
          form = button.up('form'),
          windowView = form.up('window'),
          version = form.getValues().version;

      if(self.isEditVersion){
        sendPutRequest('shopHomepage',{layoutId:self.layoutId,version:version},'','','',function(response){
          if(response.responseText == 1){
            self.loadShopVersionStore();
            windowView.hide();
          }
        })
      }else{
        form.submit({
        params : {shopId:self.currentShopId},
        method : 'post',
        success : function(){
        },
        failure : function(proxy,response){
          if(response.result == 1){
            windowView.hide();
            self.loadShopVersionStore();
          }
        }
      })  
      }
      
    }
    ,
    initVersionList : function(){
      this.getShopConfigStore().load();
    },
    /**
     * [addNewVersion 添加新的店铺版本]
     */
    addNewVersion : function(){
      var AddVersion = this.getAddVersion();
          AddVersion.show();
      console.log('添加新的店铺版本');
    },
    /**
     * [enableVersion 启用该版本]
     * @param  {[type]} id [当前版本id]
     * @return {[type]}    [description]
     */
    enableVersion : function(){
      var self = this,
          model = arguments[5],
          enable = model.get('enable'),
          shopId = model.get('shopId'),
          layoutId = model.get('id'),
          param = {shopId:shopId,layoutId:layoutId},
          enableUrl = 'shopHomepage/enable';

      if(enable){
        return false;
      }else{
        Ext.MessageBox.confirm('提示','你确定要启用改版本吗？',function(result){
          if(result == 'no'){
            return false;
          }
            sendPutRequest(enableUrl,param,'','','',function(response){
            self.loadShopVersionStore();
            if(response.responseText == '1'){
              Ext.Msg.alert('成功', '成功启用该版本');
            }else{
                Ext.Msg.alert('失败', '启用该版本失败');
            }
          })
        })
      }
      console.log('启用该版本');
    },
    editVersion : function(){
      var windows = this.getAddVersion(),
          form = this.getAddVersion().down('form'),
          model = arguments[5],
          id = model.get('id');
          form.loadRecord(model);
          this.isEditVersion = true;
          this.layoutId = id;
          windows.show();

    },
    /**
     * [deleteVersion 删除该版本]
     * @param  {[type]} id [当前版本id]
     * @return {[type]}    [description]
     */
    deleteVersion : function(){
      var self = this,
          id = arguments[5].get('id'),
          deleteUrl = 'shopHomepage/'+id;
      Ext.MessageBox.confirm('提示','确定删除该版本吗?',function(result){
        if(result == 'no'){
          return false;
        }
        sendDeleteRequest(deleteUrl,null,'','','',function(response){
        self.loadShopVersionStore();
          if(response.responseText == '1'){
              Ext.Msg.alert('成功', '成功删除改版本');
          }else{
              Ext.Msg.alert('失败', '删除该版本失败');
          }
        })
      })
      
    },
    addNewModuleItem : function(){
      var addNewModuleItem = this.getAddModuleItem()
          form = addNewModuleItem.down('form');
          form.getForm().reset();
          addNewModuleItem.show();
    },
    /**
     * [addModule 新建模板]
     */
    addModule : function(){
      var panel = this.getAddModule(),
          form = panel.down('form');
          
          form.getForm().reset();
          panel.show();
    },
    subEditModule : function(button){
      var self = this,
          form = button.up('form'),
          windows = form.up('window');
      form.submit({
        method : 'put',
        success : function(proxy,response){
          
        },
        failure : function(proxy,response){
          if(response.responseText == 1){
            windows.hide();
            self.loadModuleVersionStore();
          }
        }
      })
    },
    subNewModule : function(button){
      var self = this,
          form = button.up('form'),
          windowView = form.up('window'),
          layoutId = this.layoutId;
      form.submit({
        params:{
          layoutId : layoutId
        },
        success : function(proxy,response){
          if (response.result == '1') {
            windowView.hide();
            self.loadModuleVersionStore();
          };
        },
        failure : function(proxy,response){
          if (response.result == '1') {
            windowView.hide();
            self.loadModuleVersionStore();
          };          
        }
      })
    },
    editModule :function(){
      var windows = this.getEditModule(),
          form = windows.down('form'),
          model = arguments[5],
          id = model.get('id');

          form.loadRecord(model);
          this.isEditModule = true;
          this.moduleId = id;
          windows.show();
    },
    deleteModule : function(){
      var self = this,
          id = arguments[5].get('id'),
          param = {moduleId:id},
          deleteUrl = 'shopHomepage/deleteModule';
      Ext.MessageBox.confirm('提示','你确定要删除改模块吗？',function(result){
        if(result == 'no'){
          return false;
        }
        sendDeleteRequest(deleteUrl,param,'','','',function(response){
          if(response.responseText == '1'){
              Ext.Msg.alert('成功', '成功删除改模块');
          }else{
              Ext.Msg.alert('失败', '删除该模块失败');
          }
          self.refreshPriview();
          self.loadModuleVersionStore();
        })
      })
      
    },
    /**
     * [addfromTemplate 从成品添加]
     * @return {[type]} [description]
     */
    addfromTemplate : function(){
      console.log('从成品添加');
    },
    /**
     * [shopModuleSortCheck 拖动模块排序]
     * @return {[type]} [description]
     */
    shopModuleSortCheck : function(node, data, overModel, dropPosition, dropHandlers){
      var records = data.records,
          disable = false;
      Ext.each(records, function(record) {
        if(!record.get('isAdvert')){
          disable = true;
        }
      }, this);
      if(node.rowIndex == 0){
        disable = true;
      }
      if(disable){
        return false;
      }
    },
    shopModuleSort : function(node, data, dropRec, dropPosition){
      var self = this,
          store = this.getShopModulesStore(),
          moduleIds = [];
          for(var i=0, n=store.totalCount; i<n; i++){
              var record = store.getAt(i);
              record.set('order',i+1)
              moduleIds.push(record.get('id'));
          }
          sendPutRequest('shopHomepage/setOrder',{
              layoutId: this.layoutId,
              moduleIds: moduleIds
          }, '设置启用', '启用成功', '启用失败', function() {
              self.loadModuleVersionStore();
              self.refreshPriview();
          });
      
    },
    /**
     * [shopModuleDetailSort 拖动模块内元素排序]
     * @return {[type]} [description]
     */
    shopModuleDetailSort : function(node, data, dropRec, dropPosition){
      console.log('拖动模块内元素排序');
      var self = this,
          store = this.getShopModulesItemStore(),
          index = [];
          for(var i=0, n=store.totalCount; i<n; i++){
              var record = store.getAt(i);
              record.set('order',i+1)
              index.push(record.get('index'));
          }
          sendPutRequest('shopHomePage/setItemOrder ',{
              moduleId: this.moduleId,
              indexs: index
          }, '设置启用', '启用成功', '启用失败', function() {
              store.load();
              self.refreshPriview();
          });

    },
    /**
     * [changeModuleListView 渲染木块list view ]
     * @return {[type]} [description]
     */
    changeModuleListView : function(panel,selection){
      if(selection.length == 0) return;
      var ShopModulesItemStore = this.getShopModulesItemStore()
          selection = selection[0],
          id = selection.get('id');
          this.layoutId = id;
          this.refreshPriview();
          this.setAddModuleEnabel();
          ShopModulesItemStore.loadData([]);
          this.loadModuleVersionStore();
    },
    /**
     * [changeModuleDetailView 渲染模块详情 view]
     * @return {[type]} [description]
     */
    changeModuleDetailView : function(panel,selection){
      if(selection.length == 0) return;
      var self = this,
          ShopModuleDetail = this.getShopModuleDetail(),
          addNewModuleItem = ShopModuleDetail.down('#addNewModuleItem'),
          selection = selection[0],
          id = selection.get('id'),
          type = selection.get('type'),
          moduleItemList = selection.get('items');
          this.moduleId = id;
          
          if(type == 'banner'){
            addNewModuleItem.setDisabled(false);
            this.moduleDelete = true;
            this.moduleItemEdit = false;
          }else{
            addNewModuleItem.setDisabled(true);
            this.moduleDelete = false;
            this.moduleItemEdit = true;
          }
          this.loadShopModulesItem();
      console.log('渲染模块详情 view');
    },
    /**
     * [switchModuleType 根据type 选择切换模板]
     * @param  {[type]} radiogroup [description]
     * @return {[type]}            [description]
     */
    switchModuleType : function(radiogroup){
      var data = {
        'TYPE1' : 1,
        'TYPE2' : 2,
        'TYPE3' : 3,
        'TYPE4' : 4,
        'TYPE5' : 5,
        'TYPE6' : 6,
        'TYPE7' : 7
      }
          type = radiogroup.getValue().type;
          this.renderModuleCon(data[type]);

    },
    /**
     * [renderModuleCon 根据模块类型创建模块表单]
     * @param  {[Number]} type [description]
     * @return {[type]}      [description]
     */
    renderModuleCon : function(type){
      var addModule = this.getAddModule(),
          moduleCon = addModule.down('#moduleCon'),
          count = moduleCon.items.getCount(),
          len = type - count,
          fieldcon = {
            xtype : 'fieldcontainer',
            defaultType : 'textfield',
            margin : '5 0',
            defaults : {
              width : 210,
              labelWidth : 30
            },
            layout : {
              type : 'hbox'
            },
            items: [{
            name : 'name',
            fieldLabel: '名字'
          },
          {
            name : 'url',
            fieldLabel: 'URL'
          },
          {
            name : 'title',
            fieldLabel: 'title'
          },
          {
            name : 'image',
            fieldLabel: '图片'
          }]
          };
          if(len == 0){
            return false;
          }else if(len > 0){
            for (var i = 0; i < len; i++) {
              moduleCon.add(fieldcon);
            };  
          }else{
            len = -len;
            for (var j = 0; j < len; j++){
              moduleCon.remove(moduleCon.items.last());
            };
          }

    },
    editModuleItem : function(){
      var AddModuleItem = this.getAddModuleItem(),
          urlTypeCombo = AddModuleItem.down('combo[name=urlType]'),
          form = AddModuleItem.down('form'),
          model = arguments[5];
          model.set('index',model.index);
          form.loadRecord(model);

          urlTypeCombo.fireEvent('select',urlTypeCombo);
          AddModuleItem.show();
    },
    deleteModuleItem : function(){
      debugger;
    },
    subNewModuleItem : function(button){
      var self = this,
          windows = button.up('window'),
          form = button.up('form'),
          param;

          self.processModuleItemData(form);
          param = form.getValues();
          param.moduleId = self.moduleId;
          if(self.moduleItemEdit){
            
            sendPutRequest('shopHomepage/updateModuleItem',param,'','','',function(response){
              if(response.responseText == 1){
                windows.hide();
                self.loadShopModulesItem();
                self.refreshPriview();
              }else{
                Ext.Msg.alert('更新数据失败', response.responseText);
              }
            }); 
          }else{ 
            Ext.Ajax.request({
              url : form.url,
              params : param,
              method : 'post',
              success : function(response){
                if(response.responseText == 1){
                  if(response.responseText == 1){
                      windows.hide();
                      self.loadShopModulesItem();
                      self.refreshPriview();
                    }else{
                      Ext.Msg.alert('添加数据失败', response.responseText);
                    }   
                }
              },
              failure : function(){
                debugger;
              }
            })
          }
          
      /*form.submit({
        method : 'put',
        params : {moduleId : self.layoutId},
        success :function(){
          
        },
        failure : function(){
          
        }
      });*/
    },
    uploadModuleImage : function(filefield){
      var form = filefield.ownerCt,
          textfield = form.up('window').down('#imageField');
      uploadImage(form,textfield);
    },
    /**
     * 预览
     * @return {[type]} [description]
     */
    refreshPriview : function(){
      var self = this;/*,
          records ={"areaId":2,"id":"545735f32cd452e1a4eab9ef","modules":[{"id":"545735952cd452e1a4eab9ee","isAdvert":false,"items":[{"image":"54280de40cf292d0f893e0cc1f","name":"11","titles":["搞个活动"],"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"SKU"},{"image":"542274e40cf292d0f893e0c22a","titles":["周黑鸭"],"url":"http://www.xiaomei.com/zhouheiya.html","urlType":"HTML"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"banner","order":0,"type":"TYPE0"},{"id":"545737702cd452e1a4eab9f0","isAdvert":false,"items":[{"image":"54599ae90cf292d0f893e13ffc","params":{},"titles":["农贸市场","Food market","全部品类 >"],"url":"54131c6d0364b0ed8f1ffd91","urlType":"SHOP"},{"image":"5459988e0cf292d0f893e130f8","params":{"PRODUCTCATEGORY":{"cid":"541464d90364b19b21f3b2de","name":"放心肉类","shopId":"54131c6d0364b0ed8f1ffd91"}},"titles":["放心肉类"],"url":"541464d90364b19b21f3b2de","urlType":"CATEGORY"},{"image":"545998ac0cf292d0f893e13168","params":{"PRODUCTCATEGORY":{"cid":"541464d90364b19b21f3b2e0","name":"鱼虾蟹贝","shopId":"54131c6d0364b0ed8f1ffd91"}},"titles":["田园时蔬"],"url":"541464d90364b19b21f3b2e0","urlType":"CATEGORY"},{"image":"545998be0cf292d0f893e132d4","params":{"PRODUCTCATEGORY":{"cid":"541464da0364b19b21f3b2e4","name":"南北干货","shopId":"54131c6d0364b0ed8f1ffd91"}},"titles":["蛋奶豆制品"],"url":"541464da0364b19b21f3b2e4","urlType":"CATEGORY"},{"image":"545998d10cf292d0f893e13351","name":"fdsa","params":{},"titles":["3折特区"],"url":"541464dd0364b19b21f3b2ed","urlType":"SHOP"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"supermarket","order":1,"type":"TYPE1"},{"id":"5458b67d2cd452e1a4eacdbf","isAdvert":false,"items":[{"image":"54599b080cf292d0f893e141cc","params":{},"titles":["某某商家或超市","Some market","全部品类 >"],"url":"54131c6d0364b0ed8f1ffd91","urlType":"SHOP"},{"image":"5459993d0cf292d0f893e1357a","name":"从","titles":["周黑鸭"],"url":"541466ea180ac35a8e42589d","urlType":"CATEGORY"},{"image":"545cc6350cf292d0f893e15358","name":"好","params":{},"titles":["买手介绍"],"url":"541466ea180ac35a8e4258a9","urlType":"HTML"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"supermarket2","order":2,"type":"TYPE2"},{"id":"5458b6ea2cd452e1a4eacdc1","isAdvert":false,"items":[{"image":"5459999b0cf292d0f893e13978","params":{},"titles":["大洋世家"],"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"HTML"},{"image":"545999b20cf292d0f893e13a3a","params":{},"titles":["周黑鸭"],"url":"http://www.xiaomei.com/zhouheiya.html","urlType":"HTML"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"shop2","order":3,"type":"TYPE4"},{"id":"5458b6b52cd452e1a4eacdc0","isAdvert":false,"items":[{"image":"5459995f0cf292d0f893e13692","params":{},"titles":["大洋世家"],"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"HTML"},{"image":"545999700cf292d0f893e137f4","params":{},"titles":["周黑鸭"],"url":"http://www.xiaomei.com/zhouheiya.html","urlType":"HTML"},{"image":"545999800cf292d0f893e13841","params":{},"titles":["买手介绍"],"url":"http://www.xiaomei.com/shopper_story.html","urlType":"HTML"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"shop","order":4,"type":"TYPE3"},{"type":"TYPE8"},{"id":"5458b70a2cd452e1a4eacdc2","isAdvert":true,"items":[{"image":"545999d00cf292d0f893e13bb4","name":"牛肉","params":{},"titles":["大洋世家"],"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"SHOP"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"advert","order":5,"type":"TYPE6"},{"type":"TYPE9"},{"id":"545739712cd452e1a4eab9f5","isAdvert":true,"items":[{"image":"54599a410cf292d0f893e13cdc","params":{},"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"HTML"},{"image":"54599a520cf292d0f893e13d76","params":{},"url":"http://www.xiaomei.com/shopbannerdetail.html","urlType":"HTML"}],"layoutId":"545735f32cd452e1a4eab9ef","name":"advert2","order":6,"type":"TYPE7"}],"shops":[{"address":"计量大厦17","areaIds":[2],"banners":[{"image":"541fc0c40cf292d0f893e0bc59","order":0,"title":"111","url":"http://dev.xiaomei.com"}],"closeTime":1305,"desc":"测试店铺","icon":"54131c2903643b27cfbb124f4b","lat":38.913611,"lng":77.013222,"logo":"54131c2903643b27cfbb125013","name":"测试店铺","openTime":90,"order":99999,"shopId":"5417085d0cf2458352c9340c","showType":0,"status":1,"storeLimitEnable":true},{"address":"文一路和万塘路交汇处","areaIds":[2],"banners":[{"image":"541fc0a10cf292d0f893e0b963","order":0,"title":"","url":""}],"closeTime":1425,"desc":"","icon":"5412fb110364452d87bd21c78e","lat":30.293879,"lng":120.130495,"logo":"5412fb110364452d87bd21c89a","name":"翠苑农贸市场","openTime":15,"order":99999,"shopId":"54131c6d0364b0ed8f1ffd91","showType":0,"status":1,"storeLimitEnable":false},{"address":"1111","areaIds":[2],"banners":[{"image":"11111","order":0,"title":"1111","url":"http://www.xiaomei.com"},{"image":"222222","order":0,"title":"222","url":"http://xiaomei.com"},{"image":"432424","order":0,"title":"3333","url":"http://xiaomei.com"},{"image":"","order":0,"title":"111","url":"http://xiaomei.com"}],"closeTime":1410,"desc":"","icon":"5412fb0d0364452d87bd21c139","lat":11.11,"lng":11.11,"logo":"5412fb100364452d87bd21c2a1","name":"测试商超","openTime":15,"order":99999,"shopId":"5425510e0cf27fe451af555e","showType":0,"status":1,"storeLimitEnable":true},{"address":"地球村100号","areaIds":[2],"banners":[{"image":"11","order":0,"title":"","url":""}],"closeTime":45,"desc":"","icon":"5412fb0d0364452d87bd21c139","lat":11.11,"lng":12.12,"logo":"5412fb100364452d87bd21c2a1","name":"测试店铺10号","openTime":15,"order":99999,"shopId":"545736030cf2a680caeac0e4","showType":0,"status":1,"storeLimitEnable":true},{"address":"文三路99999","areaIds":[2],"banners":[],"closeTime":1380,"desc":"","icon":"5412fb110364452d87bd21cdf9","lat":11.11,"lng":111.11,"logo":"541711950cf2bc282b845e49f9","name":"星巴克克","openTime":600,"order":99999,"shopId":"543f2bda0cf2d0067cd22049","showType":0,"status":1,"storeLimitEnable":false},{"address":"1111","areaIds":[2],"banners":[{"image":"541fc08a0cf292d0f893e0b86f","order":0,"title":"冠相品","url":"http://www.xiaomei.com/shopper_story.html"}],"closeTime":1335,"desc":"111","icon":"5412fb110364452d87bd21ca5e","lat":11.11,"lng":11.11,"logo":"5412fb110364452d87bd21cb98","name":"冠相品1","openTime":60,"order":99999,"shopId":"54131c6d0364b0ed8f1ffd92","showType":0,"status":1,"storeLimitEnable":true},{"address":"益乐店","areaIds":[2],"banners":[{"image":"541fbef60cf292d0f893e0b6f2","order":0,"title":"鲜丰水果","url":"http://www.xiaomei.com/shopper_story.html"}],"closeTime":1350,"desc":"鲜丰水果","icon":"5412fb110364452d87bd21cdf9","lat":11.11,"lng":11.11,"logo":"541711950cf2bc282b845e49f9","name":"鲜丰水果","openTime":15,"order":99999,"shopId":"54131c6d0364b0ed8f1ffd93","showType":0,"status":1,"storeLimitEnable":false}],"version":"国庆版本"};
      */ sendGetRequest('shopHomepage/getHomePage',{layoutId:self.layoutId},'','','',function(response){
        var data = Ext.decode(response.responseText);
        self.renderShopPage(data.modules);
       });
      
    },
    renderShopPage: function(records) {
        if(!records || records.length == 0) return;
        
        var res_url = XMLifeOperating.generic.Global.URL.res + '/image/id-',
            html = '';

        var borderT = 'border-top:1px solid #eee;',
            borderR = 'border-right:1px solid #eee;',
            borderB = 'border-bottom:1px solid #eee;',
            borderL = 'border-left:1px solid #eee;',
            wrapCss = 'padding:0;font-family:\'Microsoft Yahei\';line-height:9px;';

            console.log(records);
        for (var i = 0, n = records.length; i < n; i++) {
            var data = records[i],
                type = data.type,
                items = data.items;

            if(!(items && items.length) && type != 'TYPE8' && type != 'TYPE9'){
                Ext.Msg.alert('提示信息','模块 “'+ data.name +'“ 缺少图片，暂无法预览！');
                return;
            }

            switch (type){
                case 'TYPE0':
                    html += '<div style="width:100%"><a href="'+ items[0].url +'" target="_blank"><img src="'+ res_url + items[0].image +'" width="100%" /></a></div>';
                    break;

                case 'TYPE1':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '50%':'25%') +';border:1px solid #fff;'+ (j==1? borderR+borderB:'') + (j==4? borderL+borderT:'') + '">'+ titles +'<a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE2':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '50%':'50%') +';border:1px solid #fff;'+ (j==1? borderB:'') + '">'+ titles +'<a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE3':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '33%':'33%') +';border:1px solid #fff;'+ (j==0 || j==1? borderR:'') + '"><a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE4':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '66%':'33%') +';border:1px solid #fff;'+ (j==0? borderR:'') + '"><a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE5':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '33%':'66%') +';border:1px solid #fff;'+ (j==0? borderR:'') + '"><a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE6':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '100%':'100%') +';border:1px solid #fff;'+ (j==0? borderR:'') + '"><a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE7':
                    var str = '<ul class="x-clear" style="'+ wrapCss +'">';
                    for (var j=0, m=items.length; j<m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:'+ (j==0? '49%':'49%') +';border:1px solid #fff;'+ (j==0? 'margin-right:2%;':'') + '"><a href="'+ items[j].url +'" target="_blank"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                    }
                    str += '</ul>'
                    html += str;
                    break;

                case 'TYPE8':
                    html += '<p></p>';
                    break;

                case 'TYPE9':
                    html += '<p></p>';
                    break;
                case 'USERCOLLECT':
                    html += '<div style="height:30px;line-height:30px;text-align:center;background:red;color:#fff;clear:both">收藏货架</div>';
                    break;
                case 'CATEGORY':
                    html += '<div style="height:30px;line-height:30px;text-align:center;background:#ddd;clear:both">普通货架</div>';
                    break;
                default:
                    break;
            }
        }
        Ext.get('shopPreviewDetail').setHTML(html);
    },
    urlTypeSelect : function(combo) {
        var self = this,
            win =  this.getAddModuleItem(),
            urlType = combo.getValue();

        this.urlType = urlType;

        if (urlType == 'SHOP' || urlType == 'CATEGORY' || urlType == 'SKU') {
            var store = self.getHomePageShopStore();
                store.getProxy().extraParams = {areaId: this.areaId};
                store.load();

            win.down('combo[name=cid]').setVisible(urlType == 'CATEGORY' || urlType == 'SKU');
            win.down('combo[name=pid]').setVisible(urlType == 'SKU');
        }

        win.down('#comboFieldset').setVisible(urlType != 'HTML');
        win.down('#urlTextField').setVisible(urlType == 'HTML');
    },
    shopSelect :function(combo) {
        var self = this,
            shopId = combo.getValue(),
            win =  this.getAddModuleItem(),
            categoryCombo = win.down('combo[name=cid]'),
            store = null;

        if(this.urlType != 'SHOP') {

            if (this.urlType == 'CATEGORY') {
                store = self.getHomePageCategoryStore();

            } else if (this.urlType == 'SKU') {
                store = self.getHomePageLeafCategoryStore();
            }
            store.load({ params: {shopId: shopId} });

            categoryCombo.setValue('');
            categoryCombo.bindStore(store);
        }
    },
    skuSelect : function(combo) {
        if(this.urlType == 'SKU') {
            var cid = combo.getValue(),
                win =  this.getAddModuleItem(),
                store = self.getHomePageProductStore();

            store.load({ params: {id: cid} });
            win.down('combo[name=pid]').setValue('');
        }
    }
    ,
    loadShopVersionStore : function(ShopId){
      var self = this,
        ShopConfigStore = this.getShopConfigStore();
        ShopConfigStore.load({
          params : {
            shopId : ShopId || self.currentShopId
          }
        })
    },
    loadModuleVersionStore : function(layoutId){
      var self = this,
        ShopModulesStore = this.getShopModulesStore();
        ShopModulesStore.load({
          params : {
            layoutId : layoutId || self.layoutId
          }
        });

    },
    loadShopModulesItem : function(){
      var self = this,
          ShopModuleDetail = this.getShopModuleDetail(),
          deleteBts = ShopModuleDetail.down('#delete'),
          ShopModulesItemStore = this.getShopModulesItemStore()
          ShopModulesItemStore.load({
            params : {moduleId : this.moduleId}
          });
          if(self.moduleDelete){
            ShopModulesItemStore.on('load',function(records){
              records.each(function(record){
                record.set('delete',true);
              });
              ShopModuleDetail.reconfigure(records);
            })
        }
    },
    processModuleItemData : function(form){
      var type = form.down('#urlType').getValue(),
          urlField = form.down('#urlTextField'),
          shopId = form.down('#shopId').getValue(),
          cid = form.down('#cid').getValue(),
          pid = form.down('#pid').getValue();
      switch(type)
        {
        case 'SHOP':
          urlField.setValue(shopId)
          break;
        case 'CATEGORY':
          urlField.setValue(cid)
          break;
        case 'SKU':
          urlField.setValue(pid)
          break;
        }
    },
    setAddModuleEnabel : function(){
      var ShopModuleList = this.getShopModuleList()
          buttons = ShopModuleList.query('button');
         Ext.each(buttons, function(button) {
            button.setDisabled(false)
         }, this);

    }

    
});
