/**
 * @class XMLifeOperating.controller.AuthorityTabPanel
 * @extends extendsClass
 * Description
 */
Ext.define('XMLifeOperating.controller.Authority', {
    extend: 'Ext.app.Controller',
    views : [
      'authorityManage.AuthorityTabPanel',
      'authorityManage.CityAccountManage',
      'authorityManage.GlobalAccountManage',
      'authorityManage.addGlobalAccount',
      'authorityManage.addCityManagerAccount',
      'authorityManage.MerchantAccountManagement',
      'authorityManage.AddMerchantAccount',
      'authorityManage.AuthoritySelect'
    ],
    models : ['Account','ShopArea'],
    stores : ['Account','Authority','Province','ShopArea','AllCities', 'SupportedCity', 'ShopArea', 'Shop'],
    refs: [{
      ref: 'AuthorityTabPanel',
      selector: 'AuthorityTabPanel',
      xtype: 'AuthorityTabPanel',
      autoCreate: true
    },{
      ref: 'CityAccountManage',
      selector: 'CityAccountManage',
      xtype: 'CityAccountManage',
      autoCreate: true
    },{
      ref: 'GlobalAccountManage',
      selector: 'GlobalAccountManage',
      xtype: 'GlobalAccountManage',
      autoCreate: true
    },{
      ref: 'MerchantAccountManagement',
      selector: 'MerchantAccountManagement',
      xtype: 'MerchantAccountManagement',
      autoCreate: true
    },{
      ref: 'addGlobalAccount',
      selector: 'addGlobalAccount',
      xtype: 'addGlobalAccount',
      autoCreate: true
    },{
      ref: 'addCityManagerAccount',
      selector: 'addCityManagerAccount',
      xtype: 'addCityManagerAccount',
      autoCreate: true
    }, {
      ref: 'AddMerchantAccount',
      selector: 'AddMerchantAccount',
      xtype: 'AddMerchantAccount',
      autoCreate: true
    }, {
      ref: 'cmbCity',
      selector: '#cmbCity',
      xtype: 'combobox'
    }, {
      ref: 'shopArea',
      selector: '#shopArea',
      xtype: 'combobox'
    }, {
      ref: 'shop',
      selector: '#shop',
      xtype: 'combobox'
    }
    ],
    init : function(){
      var self = this;
      self.control({
        'GlobalAccountManage' : {
          activate : function(){
            self.loadData('Global');
            self.initGlobalAuthority();
          }
        },
        'GlobalAccountManage #addGlobalAccount' : {
          click : function(){
            //创建全局账号

            var addGlobalAccount = self.getAddGlobalAccount(),
                form = addGlobalAccount.down('form'),
                formEl = form.getForm(),
                accountField = form.down('#accountField');
                accountField.setDisabled(false);
                formEl.reset();
                form.edit = false;
                self.resetSelect();
                addGlobalAccount.show();

          }
        },
        'GlobalAccountManage #seachAccount' : {
          click : function(){
            //搜索全局账号
            var store = self.getAccountStore(),
                seachKeyword = self.getGlobalAccountManage().down('#seachKeyword').getValue();
                store.getProxy().extraParams = {
                   keyword : seachKeyword,
                   type : 'Global'
                    };
                store.loadPage(1);
              }
        },
        'GlobalAccountManage #edit' : {
          click : function(a,b,c,d,e,f,g){
            var addGlobalAccount = self.getAddGlobalAccount(),
                form = addGlobalAccount.down('form'),
                accountField = form.down('#accountField'),
                citiesCheckbox = form.down('#citiesCheckbox').query('checkboxfield'),
                isHaveCities = form.down('#isHaveCities'),
                model = arguments[5],
                cityIds = model.get('cityIds'),
                modules = model.get('modules'); 
                moduleIds = model.get('moduleIds');
                self.resetSelect();
                form.loadRecord(model);
                accountField.setDisabled(true);
                self.initSelectData(form,modules);

                if(cityIds.length>0){
                  isHaveCities.setValue(true);
                }

                Ext.each(citiesCheckbox, function(checkbox) {
                   for(var i = 0 , l = cityIds.length; i < l ; i++){
                    if(checkbox.inputValue == cityIds[i]){
                      checkbox.setValue(true);
                    }
                   }
                });

                form.edit = true;
                addGlobalAccount.show();

          }
        },
        'CityAccountManage' : {
          activate : function(){
            self.loadData('City');
          }
        },
        'CityAccountManage #edit' : {
            click : function(){
              var addCityManagerAccount = self.getAddCityManagerAccount()
                  form = addCityManagerAccount.down('form'),
                  accountField = form.down('#accountField'),
                  cmbCity = form.down('#cmbCity'),
                  cmbProvince = form.down('#cmbProvince'),
                  model = arguments[5],
                  cityIds = model.get('cityIds'),
                  cityId = cityIds[0],
                  allCitiesStore = self.getAllCitiesStore(),
                  cityModel = allCitiesStore.findRecord('code',cityId),
                  provinceId = cityModel.get('parent');

                  cmbProvince.setValue(provinceId);
                  cmbCity.setValue(cityId);

                  accountField.setDisabled(true);
                  form.getForm().reset();
                  form.loadRecord(model);

                  form.edit = true;
                  addCityManagerAccount.show();

            }
        },
        'MerchantAccountManagement': {
          activate: function () {
            self.loadData('Shop');
          }
        },
        'MerchantAccountManagement #edit': {
          click: function () {
            var addMerchantAccount = self.getAddMerchantAccount(),
                form               = addMerchantAccount.down('form'),
                accountField       = form.down('#accountField'),
                city               = form.down('#city'),
                shoparea           = form.down('#shopArea'),
                shop               = form.down('#shop'),

                model = arguments[5];

            city.setValue(model.get('cityIds')[0]);
            shoparea.setValue(model.get('areaId'));
            shop.setValue(model.get('shopId'));

            city.getStore().load();
            shoparea.getStore().load();
            shop.getStore().load({
              params: {'areaId': model.get('areaId')}
            });

            console.log(model);
            form.loadRecord(model);
            form.edit = true;
            accountField.setDisabled(true);
            addMerchantAccount.show();
          }
        },
        '#handel' : {
          click : function(){
            var model = arguments[5],
                enable = model.get('enable'),
                account = model.get('account'),
                url = '',
                str = '';
                if(enable){
                  url = XMLifeOperating.generic.Global.URL.biz+'admin/disable/'+account
                  str = '关闭';
                }else{
                  url = XMLifeOperating.generic.Global.URL.biz+'admin/enable/'+account;
                  str = '开启';

                }
                Ext.Ajax.request({
                  method : "PUT",
                  url: url,
                  success : function(data){
                      if(data.responseText == '1'){
                        Ext.Msg.alert('成功', '成功'+str+'账户'+account);
                        var store = self.getAccountStore();
                        store.clearFilter(true);
                        store.load();
                      }
                  }
              });
          }
        },
        'addGlobalAccount #submit' : {
          click : function(button){
            self.submitData(button);
          }
        },
        'addCityManagerAccount #submit' : {
          click : function(button){
            self.submitData(button);
          }
        },
        'AddMerchantAccount #submit': {
          click: function (button) {
            self.addOrUpdateShopAdmin(button);
          }
        },
        'CityAccountManage #addCityAccount' : {
          click : function(){
            //创建城市经理
            //
             var addCityManagerAccount = self.getAddCityManagerAccount(),
                form = addCityManagerAccount.down('form'),
                formEl = form.getForm(),
                accountField = form.down('#accountField');
                accountField.setDisabled(false);
                formEl.reset();
                form.edit =false;
                addCityManagerAccount.show();


          }
        },
        'MerchantAccountManagement #addMerchantAccount': {
          click: function () {
            // 创建商户
            var addMerchantAccount = self.getAddMerchantAccount(),
                form               = addMerchantAccount.down('form'),
                formEl             = form.getForm(),
                accountField       = form.down('#accountField');

            accountField.setDisabled(false);
            formEl.reset();
            form.edit = false;
            addMerchantAccount.show();
          }
        },
        'MerchantAccountManagement #seachAccount' : {
          click : function(){
            var store = self.getAccountStore(),
            seachKeyword = self.getMerchantAccountManagement().down('#seachKeyword').getValue();
            store.getProxy().extraParams = {
              keyword : seachKeyword,
              type : 'Shop'
            };
            store.loadPage(1);
          }
        },
        '#lookActiveAccount' : {
          click : function(){
            //查看开启的账号
           var store = self.getAccountStore();
           store.clearFilter(true);
           store.filter('enable',true)
          }
        },
        '#lookDisableAccount' : {
          click : function(){
            //查看关闭的账号
            var store = self.getAccountStore();
                store.clearFilter(true);
                store.filter('enable',false)
          }
        },
        'CityAccountManage #seachAccount' : {
          click : function(){
            //搜索城市经理账号
            var store = self.getAccountStore(),
                seachKeyword = self.getCityAccountManage().down('#seachKeyword').getValue();
                store.getProxy().extraParams = {
                   keyword : seachKeyword,
                   type : 'City'
                    };
                store.loadPage(1);

          }
        },
        'addCityManagerAccount combobox[name=cpro]' : {
            select: function(combo, records, eOpts) {
                if (records.length == 0) return;

                var store = this.getAllCitiesStore();
                var cmbCity = this.getCmbCity();

                cmbCity.lastQuery = null;
                cmbCity.clearValue();

                store.clearFilter();
                store.filter('parent', records[0].data.code);
            }
        },
        'AddMerchantAccount combobox[name=city]': {
          select: function(combo, records, options) {
            if (records.length == 0) return;

            var shopAreaStore     = this.getShopAreaStore(),
                shopArea          = this.getShopArea(),
                shop              = this.getShop();

            shopArea.clearValue();
            shop.clearValue();

            shopAreaStore.clearFilter();
            shopAreaStore.filter('city', records[0].data.code);
          }
        },
        'AddMerchantAccount combobox[name=areaId]': {
          select: function(combo, records, options) {
            if (records.length == 0) return;

            var shopStore = this.getShopStore();
                shop      = this.getShop();

            shop.clearValue();
            shopStore.load({
              params: {areaId: records[0].data.id}
            });
          }
        }
      })
    },
    loadData : function (type) {
      this.activeType = type || 'Global';

      var store = this.getAccountStore(),
          proxy = store.getProxy();

      proxy.extraParams = { type : this.activeType};

      store.clearFilter(true);
      store.load();

    },
    initGlobalAuthority : function(){
      /**
       * 初始化 权限配置面板
       * @type {[type]}
       */
            var self = this,
                authorityStore = self.getAuthorityStore(),
                cityStore = this.getAllCitiesStore(),
                addGlobalAccount = this.getAddGlobalAccount(),
                globalSelect = addGlobalAccount.down('#globalSelect'),
                citySelect = addGlobalAccount.down('#citySelect'),
                shopareaSelect = addGlobalAccount.down('#shopareaSelect'),
                url = XMLifeOperating.generic.Global.URL.biz+'module/getNewAdminModules';
                authorityStore.setRootNode({expanded:true});;
                authorityStore.on('load',function(store,nodes){
                    var global = {expanded:true,children:[]},
                        city = {expanded:true,children:[]},
                        shoparea = {expanded:true,children:[]};
                        nodes.cascadeBy(function(node){
                          if(node.isLeaf()){
                            node.set('checked',false);
                            node.set('id','');
                            node.set('name',node.get('uniqueName'));
                          };
                        });
                    Ext.each(nodes.childNodes, function(node) {
                      //var subData = self.formatData(node);
                        if(node.get('platFormName')== 'Global'){
                          global.children.push(node);
                        }
                        if(node.get('platFormName')== 'City'){
                           city.children.push(node);
                        }
                        if(node.get('platFormName')== 'Area'){
                          shoparea.children.push(node);
                        }
                    }, this);
                    //debugger;
                    //globalSelect.reconfigure(global);
                    globalSelect.setRootNode(global);
                    citySelect.setRootNode(city);
                    shopareaSelect.setRootNode(shoparea);
                    return false;
                });
    },
    /**
     * 格式化从服务端取回来的数据
     * 1.根绝auth值添加checked
     * 2.删除没用的id
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    formatData : function(data){
      var formatCheck = function checkData(data){
        if(Ext.isObject(data)){
          if(data.auth){
            //delete data.children;
            delete data.id;
            data.checked = false;
            data.name = data.uniqueName;
          }else{
            checkData(data.children);
          }
        }
        if(Ext.isArray(data)){
          Ext.each(data, function(dataItem) {
            if(dataItem.auth){
            //delete dataItem.children;
            delete dataItem.id;
            dataItem.checked = false;
            dataItem.name = dataItem.uniqueName;
          }else{
            checkData(dataItem.children);
          }   
          }, this);
        }
          
      }
      formatCheck(data);
      return data;
    },
    addOrUpdateShopAdmin: function (button) {
      var windowEl        = button.up('window'),
          form            = button.up('window').down('form'),
          account         = form.down('#accountField') && form.down('#accountField').getValue(),
          subData         = form.getValues();

      if (account) {
        subData['account'] = account
      }
      console.log(subData);
      this.submitAjaxData(form, subData, windowEl, account);
    },
    // TODO (zhouzhen) refactor to splitting logic of adding global account and adding city account
    submitData : function(button){
            var self            = this,
                windowEl        = button.up('window'),
                form            = button.up('window').down('form'),
                account         = form.down('#accountField') && form.down('#accountField').getValue(),
                isHaveCities    = form.down('#isHaveCities') && form.down('#isHaveCities').getValue(),
                citiesCheckboxs = form.down('#citiesCheckbox') && form.down('#citiesCheckbox').query('checkboxfield'),
                subData         = form.getValues(),
                editUrl         = form.editUrl,
                cityNum         = 0;
            var selectData = self.getSelectData(form);


            if (account) {
              subData['account'] = account
            }

            if(isHaveCities){
              Ext.each(citiesCheckboxs, function(checkbox) {
              if(checkbox.getValue()){
                cityNum++;
              }
            });
            if(cityNum <= 0){
              Ext.Msg.alert('失败', '请至少选择一个城市');
              return false;
            }
           }
            if (form.edit) {
              subData = Ext.merge(subData,selectData);
              Ext.Ajax.request({
                  method : "PUT",
                  url: editUrl,
                  params: subData,
                  success : function(data){
                      if(data.responseText == '1'){
                        Ext.Msg.alert('成功', '成功更新账户'+account);
                        var store = self.getAccountStore();
                        store.clearFilter(true);
                        windowEl.close();
                        store.load();
                        self.resetSelect();

                      }else{
                        Ext.Msg.alert('失败', '更新账户'+account+'失败');
                      }
                  }
              });
            }else{
              
              form.submit({
                params : selectData,
                failure : function(form, action) {
                  if(action.response.responseText == '1'){
                    Ext.Msg.alert('添加成功', '成功添加');
                    var store = self.getAccountStore();
                    store.clearFilter(true);
                    windowEl.close();
                    store.load();
                    self.resetSelect();
                  }else{
                    Ext.Msg.alert('失败', '失败');
                  }
                }
              });
            };
    },
    submitAjaxData: function (form, subData, windowEl, account) {
      var self = this;
      if (form.edit) {
        var url = form.editUrl;

        Ext.Ajax.request({
          method: 'PUT',
          url: url,
          params: subData,
          success: function (data) {
            if (data.responseText == '1') {
              Ext.Msg.alert('成功', '成功更新账户' + account);
              var store = self.getAccountStore();
              store.clearFilter(true);
              windowEl.close();
              store.load()
            }else{
              Ext.Msg.alert('失败', '更新账户' + account + '失败');
            }
          }
        });
      } else {
        form.submit({
          method: 'POST',
          failure: function (form, action) {
            if (action.response.responseText == '1') {
              Ext.Msg.alert('添加成功', '成功添加');
              var store = self.getAccountStore();
              store.clearFilter(true);
              windowEl.close();
              store.load();
            } else {
              Ext.Msg.alert('失败', '失败');
            }
          }
        });
      };
    },
    resetSelect : function(){
      var form = this.getAddGlobalAccount().down('form'),
          treePanelList = form.query('treepanel'),
          nodes;
      Ext.each(treePanelList, function(treepanel) {
        nodes = treepanel.getRootNode();
            nodes.cascadeBy(function(node){
              if(node.get('checked')){
                node.set('checked',false);
              }
              
              if(!node.isRoot() && !node.isLeaf()){
                node.setCollapsed(true);
              }
            });
            
      }, this);
    }
    ,
    initSelectData : function(form,modules){
      var treePanelList = form.query('treepanel'),
          checkList,
          nodes;
          var expandParentNodes = function expandParent(node){
               var parentNode = node.parentNode;
               if(node.getDepth() !=1 && parentNode){
                  node.parentNode.expand(true);
                  expandParent(parentNode);
              }
           }
          Ext.each(treePanelList, function(treepanel) {
            nodes = treepanel.getRootNode();
            nodes.cascadeBy(function(node){
              Ext.each(modules, function(module) {
               if(node.get('uniqueName') == module){
                  node.set('checked',true);
                  expandParentNodes(node);
               }
                
              }, this);
            })
          }, this);
    },
    getSelectData : function(form){
      var treePanelList = form.query('treepanel'),
          checkList,
          data = {modules : []};
          Ext.each(treePanelList, function(treepanel) {
            checkList = treepanel.getChecked();
            Ext.each(checkList, function(check) {
              data.modules.push(check.get('uniqueName'));
            }, this);
          }, this);
          return data;
    }
});