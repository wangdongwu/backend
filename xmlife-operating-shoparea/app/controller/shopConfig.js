Ext.define('XMLifeOperating.controller.shopConfig', {
  extend: 'Ext.app.Controller',
  models: ['ShopArea', 'ShopConfig', 'shopModules', 'ShopModulesItem'],
  stores: ['ModuleNameComplete','ShopArea', 'HomePageShop', 'ShopConfig', 'ShopCopyVersion', 'shopModules', 'ShopCopyModule', 'ShopModulesItem', 'ShopUrlType',
    'HomePageShop', 'HomePageCategory', 'HomePageLeafCategory', 'HomePageProduct', 'HomePageFunction'
  ],
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
    'centralPointManage.shopConfig.AddModuleItem',
    'centralPointManage.shopConfig.CopyModule',
    'centralPointManage.shopConfig.EnableVersion'
  ],
  refs: [{
    ref: 'ShopConfigManage',
    selector: 'ShopConfigManage',
    xtype: 'ShopConfigManage',
    autoCreate: true
  }, {
    ref: 'ShopVersionPanel',
    selector: 'ShopVersionPanel',
    xtype: 'ShopVersionPanel',
    autoCreate: true
  }, {
    ref: 'ShopVersionList',
    selector: 'ShopVersionList',
    xtype: 'ShopVersionList',
    autoCreate: true
  }, {
    ref: 'ShopModuleList',
    selector: 'ShopModuleList',
    xtype: 'ShopModuleList',
    autoCreate: true
  }, {
    ref: 'ShopModuleDetail',
    selector: 'ShopModuleDetail',
    xtype: 'ShopModuleDetail',
    autoCreate: true
  }, {
    ref: 'ShopPreview',
    selector: 'ShopPreview',
    xtype: 'ShopPreview',
    autoCreate: true
  }, {
    ref: 'AddModule',
    selector: 'AddModule',
    xtype: 'AddModule',
    autoCreate: true
  }, {
    ref: 'AddVersion',
    selector: 'AddVersion',
    xtype: 'AddVersion',
    autoCreate: true
  }, {
    ref: 'AddModuleItem',
    selector: 'AddModuleItem',
    xtype: 'AddModuleItem',
    autoCreate: true
  }, {
    ref: 'EditModule',
    selector: 'EditModule',
    xtype: 'EditModule',
    autoCreate: true
  }, {
    ref: 'CopyModule',
    selector: 'CopyModule',
    xtype: 'CopyModule',
    autoCreate: true
  }, {
    ref: 'EnableVersion',
    selector: 'EnableVersion',
    xtype: 'EnableVersion',
    autoCreate: true
  }],
  init: function () {
    var self = this;
    this.moduleType = '';
    self.control({
      'ShopConfigManage': {
        added: self.getInitData,
        onShowView: self.switchArea
      },
      'ShopConfigManage #shopList': {
        change: self.switchShop
      },
      'AddVersion #subNewVersion': {
        click: self.subNewVersion
      },
      'ShopVersionList': {
        selectionchange: self.changeModuleListView,
        added: self.initVersionList
      },
      'ShopVersionList #setDefault': {
        click: self.setDefault
      },
      'ShopVersionList #addVersion': {
        click: self.addNewVersion
      },
      'ShopVersionList #modifyTime': {
        click: self.modifyTime
      },
      'ShopVersionList #enableBt': {
        click: self.enableVersion
      },
      'ShopVersionList #delete': {
        click: self.deleteVersion
      },
      'ShopVersionList #edit': {
        click: self.editVersion
      },
      'EnableVersion #subEnableBt': {
        click: self.subEnableBt
      },
      'AddModule #subModule': {
        click: self.subNewModule
      },
      'EditModule #subEditModule': {
        click: self.subEditModule
      },
      'ShopModuleList': {
        selectionchange: self.changeModuleDetailView
      },
      'ShopModuleList dataview': {
        beforedrop: self.shopModuleSortCheck,
        drop: self.shopModuleSort
      },
      'ShopModuleList #addModule': {
        click: self.addModule
      },
      'ShopModuleList #addfromTemplate': {
        click: self.addfromTemplate
      },
      'ShopModuleList #delete': {
        click: self.deleteModule
      },
      'ShopModuleList #edit': {
        click: self.editModule
      },
      'ShopModuleDetail': {
      },
      'ShopModuleDetail #addNewModuleItem': {
        click: self.addNewModuleItem
      },
      'ShopModuleDetail #refreshPriview': {
        click: self.refreshPriview
      },
      'ShopModuleDetail dataview': {
        drop: self.shopModuleDetailSort
      },
      'ShopModuleDetail #edit': {
        click: self.editModuleItem
      },
      'ShopModuleDetail #delete': {
        click: self.deleteModuleItem
      },
      'AddModuleItem #imageUpload': {
        change: self.uploadModuleImage
      },
      'AddModuleItem #subNewModuleItem': {
        click: self.subNewModuleItem
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
      'CopyModule #versionSelect': {
        change: self.versionSelect
      },
      'CopyModule #ShopSelect': {
        change: self.ShopCopySelect
      },
      'CopyModule #subCopy': {
        click: self.subCopy
      }
      /*,
            'AddModule #moduleTypeRadio' : {
              change : self.switchModuleType,
              render : self.switchModuleType
            }*/
    });
  },
  ShopCopySelect: function (panel, newValue) {
    this.getShopCopyVersionStore().load({
      params: {
        shopId: newValue
      }
    })
  },
  versionSelect: function (panel, newValue) {
    this.loadCopyModuleStore(newValue);
  },
  subCopy: function (button) {
    var self = this,
      windows = button.up('window'),
      form = windows.down('form'),
      currentModuleStore = self.getShopModulesStore(),
      copyModuleStore = self.getShopCopyModuleStore(),
      moduleId = form.getValues().moduleId,
      type = copyModuleStore.findRecord('id', moduleId).get('type'),
      isHaveBanner,
      param = Ext.merge({
        moduleId: moduleId
      }, {
        layoutId: self.layoutId
      }),
      sendCopyRequest = function () {
        Ext.Ajax.request({
          url: XMLifeOperating.generic.Global.URL.biz + 'shopHomepage/copyModule',
          method: 'post',
          params: param,
          success: function (response) {
            if (response.responseText == 1) {
              windows.destroy();
              self.loadModuleVersionStore();
              self.refreshPriview();
            }
          }
        })
      };
    if (type == 'banner') {
      isHaveBanner = currentModuleStore.findRecord('type', 'banner');
      if (isHaveBanner) {
        Ext.MessageBox.confirm('提示', '该版本中已经有banner了，<br/>是否要覆盖当前banner?', function (result) {
          if (result == 'yes') {
            sendCopyRequest();
          } else {
            return false;
          }
        })
      } else {
        sendCopyRequest();
      }
    } else {
      sendCopyRequest();
    }
  },
  switchArea: function () {
    this.areaId = XMLifeOperating.generic.Global.current_operating;
    this.getShopConfigStore().loadData([]);
    this.getShopModulesStore().loadData([]);
    this.getShopModulesItemStore().loadData([]);
    this.getInitData();
  },
  getInitData: function () {
    var panel = this.getShopConfigManage(),
      shopList = panel.down('#shopList'),
      shopStore = this.getHomePageShopStore();
    shopList.setValue('');
    shopStore.load({
      params: {
        areaId: this.areaId
      }
    });
  },
  switchShop: function (panel, shopId) {
    this.shopId = shopId;
    this.loadShopVersionStore(shopId);
    this.getShopModulesStore().loadData([]);
  },
  /**
   * [subNewVersion 添加新版本]
   * @param  {[type]} button [description]
   * @return {[type]}        [description]
   */
  subNewVersion: function (button) {
    var self = this,
      form = button.up('form'),
      windowView = form.up('window'),
      version = form.getValues().version;
    if (self.isEditVersion) {
      sendPutRequest('shopHomepage', {
        layoutId: self.layoutId,
        version: version
      }, '', '', '', function (response) {
        if (response.responseText == 1) {
          self.loadShopVersionStore();
          windowView.destroy();
        }
      })
    } else {
      form.submit({
        params: {
          shopId: self.shopId
        },
        method: 'post',
        success: function () {},
        failure: function (proxy, response) {
          if (response.result == 1) {
            windowView.destroy();
            self.loadShopVersionStore();
          }
        }
      })
    }
  },
  initVersionList: function () {
    this.getShopConfigStore().load();
  },
  /**
   * [addNewVersion 添加新的店铺版本]
   */
  addNewVersion: function () {
    var AddVersion = this.getAddVersion();
    this.isEditVersion = false;
    AddVersion.show();
  },
  setDefault: function () {
    var self = this,
      model = arguments[5],
      defaults = model.get('default'),
      shopId = model.get('shopId'),
      layoutId = model.get('id'),
      param = {
        shopId: shopId,
        layoutId: layoutId
      },
      setDefaultUrL = 'shopHomepage/setDefault';
    if (defaults) {
      return false;
    } else {
      Ext.MessageBox.confirm('提示', '设置改版本为默认版本?', function (result) {
        if (result == 'no') {
          return false;
        }
        sendPutRequest(setDefaultUrL, param, '', '', '', function (response) {
          self.loadShopVersionStore();
          if (response.responseText == '1') {
            Ext.Msg.alert('成功', '成功设置改版本为默认版本');
          } else {
            Ext.Msg.alert('失败', '设置改版本为默认版本失败');
          }
        })
      })
    }
  },
  modifyTime: function () {
    var model = arguments[5],
      status = model.get('status');
    if (status == 0) {
      return false;
    }
    Array.prototype.push.apply(arguments, [true]);
    this.enableVersion.apply(this, arguments);
  },
  /**
   * [enableVersion 启用该版本]
   * @param  {[type]} id [当前版本id]
   * @return {[type]}    [description]
   */
  enableVersion: function () {
    var self = this,
      model = arguments[5],
      isEdit = arguments[8],
      windows = self.getEnableVersion(),
      form = windows.down('form'),
      status = model.get('status'),
      shopId = model.get('shopId'),
      layoutId = model.get('layoutId');
    isEdit && model.set('type', '1');
    form.loadRecord(model);
    if (status == 2 && !isEdit) {
      sendPutRequest('shopHomepage/cancelTiming', {
        shopId: shopId,
        layoutId: layoutId
      }, '', '', '', function (response) {
        if (response.responseText == 1) {
          Ext.Msg.alert('成功', '成功取消定时');
          self.loadShopVersionStore();
        } else {
          Ext.Msg.alert('失败', '取消定时失败');
        }
      });
      return false;
    }
    windows.show();
  },
  subEnableBt: function (button) {
    var self = this,
      form = button.up('form'),
      wins = button.up('window'),
      data = form.getValues(),
      enableUrl = 'shopHomepage/enable';
    sendPutRequest(enableUrl, data, '', '', '', function (response) {
      if (response.responseText == 1) {
        wins.close();
        Ext.Msg.alert('成功', '成功启用该版本');
        self.loadShopVersionStore();
      } else {
        Ext.Msg.alert('失败', '启用该版本失败');
      }
    })
  },
  editVersion: function () {
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
  deleteVersion: function () {
    var self = this,
      id = arguments[5].get('id'),
      deleteUrl = 'shopHomepage/' + id;
    Ext.MessageBox.confirm('提示', '确定删除该版本吗?', function (result) {
      if (result == 'no') {
        return false;
      }
      sendDeleteRequest(deleteUrl, null, '', '', '', function (response) {
        self.loadShopVersionStore();
        if (response.responseText == '1') {
          Ext.Msg.alert('成功', '成功删除改版本');
        } else {
          Ext.Msg.alert('失败', '删除该版本失败');
        }
      })
    })
  },
  addNewModuleItem: function () {
    var addNewModuleItem = this.getAddModuleItem(),
      form = addNewModuleItem.down('form'),
      picSizeTip = form.down('#picSizeTip');
    picSizeTip.html = '<p style="margin:0;padding:0;margin-left:70px;color:red">提示：尺寸 640x320，大小100K以内）</p>';
    form.getForm().reset();
    addNewModuleItem.show();
  },
  /**
   * [addModule 新建模板]
   */
  addModule: function () {
    var self = this,
      panel = this.getAddModule(),
      form = panel.down('form'),
      position = panel.down('#position');
    sendGetRequest('shopHomepage/getCategoryNum', {
      shopId: self.shopId
    }, '', '', '', function (response) {
      if (response.responseText) {
        position.setMaxValue(++response.responseText);
      }
    });
    form.getForm().reset();
    panel.show();
  },
  subEditModule: function (button) {
    var self = this,
      form = button.up('form'),
      windows = form.up('window');
    form.submit({
      method: 'put',
      success: function (proxy, response) {
        if (response.result == 1) {
          windows.destroy();
          self.loadModuleVersionStore();
          self.refreshPriview();
        }
      },
      failure: function (proxy, response) {
        if (response.result == 1) {
          windows.destroy();
          self.loadModuleVersionStore();
          self.refreshPriview();
        }
      }
    })
  },
  subNewModule: function (button) {
    var self = this,
      form = button.up('form'),
      windowView = form.up('window'),
      layoutId = this.layoutId;
    form.submit({
      params: {
        layoutId: layoutId
      },
      success: function (proxy, response) {
        if (response.result == '1') {
          windowView.destroy();
          self.loadModuleVersionStore();
          self.refreshPriview();
        };
      },
      failure: function (proxy, response) {
        if (response.result == '1') {
          windowView.destroy();
          self.loadModuleVersionStore();
          self.refreshPriview();
        };
      }
    })
  },
  editModule: function () {
    var windows = this.getEditModule(),
      form = windows.down('form'),
      model = arguments[5],
      id = model.get('id');
    form.loadRecord(model);
    this.isEditModule = true;
    this.moduleId = id;
    windows.show();
  },
  deleteModule: function () {
    var self = this,
      id = arguments[5].get('id'),
      param = {
        moduleId: id
      },
      deleteUrl = 'shopHomepage/deleteModule';
    Ext.MessageBox.confirm('提示', '你确定要删除改模块吗？', function (result) {
      if (result == 'no') {
        return false;
      }
      sendDeleteRequest(deleteUrl, param, '', '', '', function (response) {
        if (response.responseText == '1') {
          Ext.Msg.alert('成功', '成功删除改模块');
        } else {
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
  addfromTemplate: function () {
    var self = this,
      CopyModule = self.getCopyModule();
    CopyModule.show();
  },
  /**
   * [shopModuleSortCheck 拖动模块排序]
   * @return {[type]} [description]
   */
  shopModuleSortCheck: function (node, data, overModel, dropPosition, dropHandlers) {
    var records = data.records,
      disable = false;
    Ext.each(records, function (record) {
      if (!record.get('isAdvert')) {
        disable = true;
      }
    }, this);
    if (node.rowIndex == 0) {
      disable = true;
    }
    if (disable) {
      return false;
    }
  },
  shopModuleSort: function (node, data, dropRec, dropPosition) {
    var self = this,
      store = this.getShopModulesStore(),
      moduleIds = [];
    for (var i = 0, n = store.totalCount; i < n; i++) {
      var record = store.getAt(i);
      record.set('order', i + 1)
      moduleIds.push(record.get('id'));
    }
    sendPutRequest('shopHomepage/setOrder', {
      layoutId: this.layoutId,
      moduleIds: moduleIds
    }, '设置启用', '启用成功', '启用失败', function () {
      self.loadModuleVersionStore();
      self.refreshPriview();
    });
  },
  /**
   * [shopModuleDetailSort 拖动模块内元素排序]
   * @return {[type]} [description]
   */
  shopModuleDetailSort: function (node, data, dropRec, dropPosition) {
    var self = this,
      store = this.getShopModulesItemStore(),
      index = [];
    for (var i = 0, n = store.totalCount; i < n; i++) {
      var record = store.getAt(i);
      record.set('order', i + 1)
      index.push(record.get('index'));
    }
    sendPutRequest('shopHomepage/setItemOrder ', {
      moduleId: this.moduleId,
      indexs: index
    }, '设置启用', '启用成功', '启用失败', function () {
      self.loadShopModulesItem();
      self.refreshPriview();
    });
  },
  /**
   * [changeModuleListView 渲染木块list view ]
   * @return {[type]} [description]
   */
  changeModuleListView: function (panel, selection) {
    if (selection.length == 0) return;
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
  changeModuleDetailView: function (panel, selection) {
    if (selection.length == 0) return;
    var self = this,
      ShopModuleDetail = this.getShopModuleDetail(),
      addNewModuleItem = ShopModuleDetail.down('#addNewModuleItem'),
      selection = selection[0],
      id = selection.get('id'),
      type = selection.get('type'),
      typeCopy = selection.get('typeCopy'),
      moduleItemList = selection.get('items');
    this.moduleId = id;
    this.moduleType = typeCopy;
    if (type == 'banner') {
      addNewModuleItem.setDisabled(false);
      this.moduleDelete = true;
      this.moduleItemEdit = false;
    } else {
      addNewModuleItem.setDisabled(true);
      this.moduleDelete = false;
      this.moduleItemEdit = true;
    }
    this.loadShopModulesItem();
  },
  /**
   * [switchModuleType 根据type 选择切换模板]
   * @param  {[type]} radiogroup [description]
   * @return {[type]}            [description]
   */
  switchModuleType: function (radiogroup) {
    var data = {
      'TYPE1': 1,
      'TYPE2': 2,
      'TYPE3': 3,
      'TYPE4': 4,
      'TYPE5': 5,
      'TYPE6': 6,
      'TYPE7': 7
    }
    type = radiogroup.getValue().type;
    this.renderModuleCon(data[type]);
  },
  /**
   * [renderModuleCon 根据模块类型创建模块表单]
   * @param  {[Number]} type [description]
   * @return {[type]}      [description]
   */
  renderModuleCon: function (type) {
    var addModule = this.getAddModule(),
      moduleCon = addModule.down('#moduleCon'),
      count = moduleCon.items.getCount(),
      len = type - count,
      fieldcon = {
        xtype: 'fieldcontainer',
        defaultType: 'textfield',
        margin: '5 0',
        defaults: {
          width: 210,
          labelWidth: 30
        },
        layout: {
          type: 'hbox'
        },
        items: [{
          name: 'name',
          fieldLabel: '名字'
        }, {
          name: 'url',
          fieldLabel: 'URL'
        }, {
          name: 'title',
          fieldLabel: 'title'
        }, {
          name: 'image',
          fieldLabel: '图片'
        }]
      };
    if (len == 0) {
      return false;
    } else if (len > 0) {
      for (var i = 0; i < len; i++) {
        moduleCon.add(fieldcon);
      };
    } else {
      len = -len;
      for (var j = 0; j < len; j++) {
        moduleCon.remove(moduleCon.items.last());
      };
    }
  },
  editModuleItem: function (view) {
    var rowIndex = arguments[2],
      AddModuleItem = this.getAddModuleItem(),
      combo = AddModuleItem.down('combo[name=urlType]'),
      form = AddModuleItem.down('form'),
      picSizeTip = form.down('#picSizeTip'),
      model = view.getRecord(view.findTargetByEvent(arguments[4]));
    model.set('index', model.index);
    this.moduleItemEdit = true;
    console.log(model);
    form.loadRecord(model);
    //初始化选择及下拉状态
    combo.fireEvent('select', combo, 'isInit');
    var size = this.getItemSize(this.moduleType, rowIndex);
    picSizeTip.html = '<p style="margin-left:70px;color:red">提示：尺寸' + size + '，大小100K以内）</p>';
    AddModuleItem.show();
  },
  deleteModuleItem: function () {
    var self = this,
      index = arguments[2];
    sendDeleteRequest('shopHomepage/deleteModuleItem', {
      moduleId: this.moduleId,
      index: index
    }, '', '', '', function (response) {
      if (response.responseText == 1) {
        self.loadShopModulesItem();
      }else{
          Ext.Msg.alert('失败', '删除模块失败');
      };
    })
  },
  subNewModuleItem: function (button) {
    var self = this,
      windows = button.up('window'),
      form = button.up('form'),
      param;

    self.processModuleItemData(form);
    param = form.getValues();
    self.saveModuleName(form);
    param.moduleId = self.moduleId;
    if (self.moduleItemEdit) {
      sendPutRequest('shopHomepage/updateModuleItem', param, '', '', '', function (response) {
        if (response.responseText == 1) {
          windows.destroy();
          self.loadShopModulesItem();
          self.refreshPriview();
        } else {
          Ext.Msg.alert('更新数据失败', response.responseText);
        }
      });
    } else {
      Ext.Ajax.request({
        url: form.url,
        params: param,
        method: 'post',
        success: function (response) {
          if (response.responseText == 1) {
            if (response.responseText == 1) {
              windows.destroy();
              self.loadShopModulesItem();
              self.refreshPriview();
            } else {
              Ext.Msg.alert('添加数据失败', response.responseText);
            }
          }
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
  uploadModuleImage: function (filefield) {
    var form = filefield.ownerCt,
      textfield = form.up('window').down('#imageField');
    uploadImage(form, textfield);
  },
  /**
   * 预览
   * @return {[type]} [description]
   */
  refreshPriview: function () {
    var self = this;
    /*,
     */
    sendGetRequest('shopHomepage/getHomePage', {
      layoutId: self.layoutId
    }, '', '', '', function (response) {
      var data = Ext.decode(response.responseText);
      self.renderShopPage(data.modules);
    });
  },
  renderShopPage: function (records) {
    if (!records || records.length == 0) return;
    var res_url = XMLifeOperating.generic.Global.URL.res + '/image/id-',
      html = '';
    var borderT = 'border-top:1px solid #eee;',
      borderR = 'border-right:1px solid #eee;',
      borderB = 'border-bottom:1px solid #eee;',
      borderL = 'border-left:1px solid #eee;',
      wrapCss = 'padding:0;font-family:\'Microsoft Yahei\';line-height:9px;';
    for (var i = 0, n = records.length; i < n; i++) {
      var data = records[i],
        type = data.type,
        items = data.items;
      if (!(items && items.length) && type != 'TYPE8' && type != 'TYPE9') {
        /**Ext.Msg.alert('提示信息','模块 “'+ data.name +'“ 缺少图片，暂无法预览！');
                return;
                */
        continue;
      }
      switch (type) {
      case 'TYPE0':
        html += '<div style="width:100%"><a href="' + items[0].url + '" target="_blank"><img src="' + res_url + items[0].image + '" width="100%" /></a></div>';
        break;
      case 'TYPE1':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          var titles = j == 0 ? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;">' + items[j].titles[1] + '</p><p style="font-size:12px;color:red;">' + items[j].titles[2] + '</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '50%' : '25%') + ';border:1px solid #fff;' + (j == 1 ? borderR + borderB : '') + (j == 4 ? borderL + borderT : '') + '">' + titles + '<a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE2':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          var titles = j == 0 ? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;' + items[j].titles[1] + '</p><p style="font-size:12px;color:red;">' + items[j].titles[2] + '</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '50%' : '50%') + ';border:1px solid #fff;' + (j == 1 ? borderB : '') + '">' + titles + '<a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE3':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '33%' : '33%') + ';border:1px solid #fff;' + (j == 0 || j == 1 ? borderR : '') + '"><a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE4':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '66%' : '33%') + ';border:1px solid #fff;' + (j == 0 ? borderR : '') + '"><a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE5':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '33%' : '66%') + ';border:1px solid #fff;' + (j == 0 ? borderR : '') + '"><a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE6':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '100%' : '100%') + ';border:1px solid #fff;' + (j == 0 ? borderR : '') + '"><a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE7':
        var str = '<ul class="x-clear" style="' + wrapCss + '">';
        for (var j = 0, m = items.length; j < m; j++) {
          //var titles = j==0? '<div style="position:absolute;top:20px;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#c8c8c8;"&#c8c8c8;"&gt;'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
          str += '<li style="float:left;position:relative;width:' + (j == 0 ? '49%' : '49%') + ';border:1px solid #fff;' + (j == 0 ? 'margin-right:2%;' : '') + '"><a href="' + items[j].url + '" target="_blank"><img src="' + res_url + items[j].image + '" width="100%" /></a></li>';
        }
        str += '</ul>'
        html += str;
        break;
      case 'TYPE8':
        html += '<p>大空格</p>';
        break;
      case 'TYPE9':
        html += '<p>小空格</p>';
        break;
      case 'USERCOLLECT':
        html += '<div style="height:30px;line-height:30px;text-align:center;background:red;color:#fff;clear:both">收藏货架</div>';
        break;
      case 'CATEGORY':
        html += '<div style="height:30px;line-height:30px;text-align:center;background:#ddd;clear:both">普通货架-' + data.name + '</div>';
        break;
      default:
        break;
      }
    }
    Ext.get('shopPreviewDetail').setHTML(html);
  },
  urlTypeSelect: function (combo, flag) {
    var self = this,
      win = this.getAddModuleItem(),
      record = win.down('form').getRecord(),
      urlType = combo.getValue();
    this.urlType = urlType;
    if (urlType == 'SHOP' || urlType == 'CATEGORY' || urlType == 'SKU') {
      var store = self.getHomePageShopStore();
      store.getProxy().extraParams = {
        areaId: this.areaId
      };
      store.load();
      // 编辑时，依次触发回填
      if (record && record.get('shopId')) {
        var shopCombo = win.down('combo[name=shopId]');
        shopCombo.fireEvent('select', shopCombo, flag);
        if (record.get('cid')) {
          var categoryCombo = win.down('combo[name=cid]');
          categoryCombo.fireEvent('select', categoryCombo, flag);
        }
      }
      if (record && record.get('url') && flag == 'isInit') {
        win.down('#urlTextField').setValue('');
      }
      win.down('combo[name=fid]').setVisible(false);
      win.down('combo[name=shopId]').setVisible(true);
      win.down('combo[name=cid]').setVisible(urlType == 'CATEGORY' || urlType == 'SKU');
      win.down('combo[name=pid]').setVisible(urlType == 'SKU');
    } else if (urlType == 'FUNCTION') {
      // 只在初始化时赋值，url类型切换时不用
      if (record && record.get('url') && flag == 'isInit') {
        win.down('combo[name=fid]').setValue(record.get('url'));
        win.down('#urlTextField').setValue('');
      }
      win.down('combo[name=fid]').setVisible(true);
      // 隐藏除功能之外的combo
      var otherCombos = win.query('#comboFieldset combo[name!=fid]');
      Ext.each(otherCombos, function (elem, i) {
        elem.setVisible(false);
      });
    }
    win.down('#comboFieldset').setVisible(urlType != 'HTML');
    win.down('#urlTextField').setVisible(urlType == 'HTML');
  },
  shopSelect: function (combo, flag) {
    var self = this,
      shopId = combo.getValue(),
      win = this.getAddModuleItem(),
      store = null;
    if (this.urlType != 'SHOP') {
      if (this.urlType == 'CATEGORY') {
        store = self.getHomePageCategoryStore();
        /*store.on('load',function(){
                  this.filter([function(item){
                    return item.get('status') !== 0;
                  }])
                });*/
      } else if (this.urlType == 'SKU') {
        store = self.getHomePageLeafCategoryStore();
      }
      store.load({
        params: {
          shopId: shopId
        }
      });
      // 选择父级下拉，清空之前选择（初始化时除外）
      if (flag != 'isInit') {
        win.down('combo[name=cid]').setValue('');
        win.down('combo[name=pid]').setValue('');
      }
      win.down('combo[name=cid]').bindStore(store);
    }
  },
  skuSelect: function (combo, flag) {
    if (this.urlType == 'SKU') {
      var cid = combo.getValue(),
        win = this.getAddModuleItem(),
        store = this.getHomePageProductStore();
      store.load({
        params: {
          categoryId: cid
        }
      });
      store.on('load', function () {
        this.filter([
          function (item) {
            var status = item.get('status');
            return status == 0 || status == 3;
          }
        ])
      })
      if (flag != 'isInit') win.down('combo[name=pid]').setValue('');
    }
  },
  loadShopVersionStore: function (ShopId) {
    var self = this,
      ShopConfigStore = this.getShopConfigStore();
    ShopConfigStore.load({
      params: {
        shopId: ShopId || self.shopId
      }
    })
  },
  loadCopyModuleStore: function (layoutId) {
    var self = this,
      ShopCopyModuleStore = this.getShopCopyModuleStore();
    ShopCopyModuleStore.load({
      params: {
        layoutId: layoutId,
        shopId: self.shopId
      }
    });
  },
  loadModuleVersionStore: function (layoutId) {
    var self = this,
      ShopModulesStore = this.getShopModulesStore();
    ShopModulesStore.load({
      params: {
        layoutId: layoutId || self.layoutId,
        shopId: self.shopId
      }
    });
  },
  loadShopModulesItem: function () {
    var self = this,
      ShopModuleDetail = this.getShopModuleDetail(),
      deleteBts = ShopModuleDetail.down('#delete'),
      ShopModulesItemStore = this.getShopModulesItemStore();
    ShopModulesItemStore.load({
      params: {
        moduleId: this.moduleId
      }
    });
    if (!self.moduleDelete) {
      ShopModulesItemStore.on('load', function () {
        this.down('#delete').destroy();
      }, ShopModuleDetail)
    } else {
      ShopModulesItemStore.on('load', function () {
        this.down('#delete').show();
      }, ShopModuleDetail)
    }
  },
  processModuleItemData: function (form) {
    var type = form.down('#urlType').getValue(),
      urlField = form.down('#urlTextField'),
      shopId = form.down('#shopId').getValue(),
      cid = form.down('combo[name=cid]').getValue(),
      pid = form.down('combo[name=pid]').getValue()
    fid = form.down('combo[name=fid]').getValue();
    switch (type) {
    case 'SHOP':
      urlField.setValue(shopId)
      break;
    case 'CATEGORY':
      urlField.setValue(cid)
      break;
    case 'SKU':
      urlField.setValue(pid)
      break;
    case 'FUNCTION':
      urlField.setValue(fid)
      break;
    }
  },
  setAddModuleEnabel: function () {
    var ShopModuleList = this.getShopModuleList()
    buttons = ShopModuleList.query('button');
    Ext.each(buttons, function (button) {
      button.setDisabled(false)
    }, this);
  },
  saveModuleName : function(form){
    //把用户输入的内容存储起来
    var param = form.getValues(),
        moduleNameComplete = this.getModuleNameCompleteStore();

      if(moduleNameComplete.find('name',param.name) == -1){
        if(moduleNameComplete.snapshot){
          if(moduleNameComplete.snapshot.length >= 20){
            moduleNameComplete.snapshot.each(function(record){
              record.destroy();
              return false;
            })
          }
        }
        if(param.name && param.name.length > 0){
          moduleNameComplete.add({name:param.name});
          moduleNameComplete.sync();
        }
      }
  }
  ,
  getItemSize: function (type, index) {
    var sizes = {
      'TYPE0': ['640x320'],
      'TYPE1': ['326x360', '180x180', '180x180', '180x180', '180x180'],
      'TYPE2': ['326x360', '360x180', '360x180'],
      'TYPE3': ['240x228', '240x228', '240x228'],
      'TYPE4': ['480x228', '240x228'],
      'TYPE5': ['240x228', '480x228'],
      'TYPE6': ['676x180'],
      'TYPE7': ['326x180', '326x180']
    }
    return sizes[type][index];
  }
});