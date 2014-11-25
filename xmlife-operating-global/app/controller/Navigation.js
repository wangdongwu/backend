Ext.define('XMLifeOperating.controller.Navigation', {
  extend: 'Ext.app.Controller',
  views: [
    'Navigation',
    'Toolbar',
  ],
  stores : [
    'Navigation',
    'AssignedCity',
    'ShopArea'
  ],
  refs : [{
    ref : 'Navigation',
    selector : 'Navigation',
    xtype : 'Navigation'
  }]
  ,
  requires: [
    'Ext.grid.column.Action'
  ],
  init: function () {
    var me = this;
    

    me.control({
      'moduleNavigation': {
        selectionchange: me.switchToView

      },
      '#cmbGlobalCity': {
        select: me.changeCurrentCity
      },
      '#cmbGlobalCenter': {
        select: me.changeCurrentCenter
      }
    });

    me.loadedClasses = {};
    me.viewStack = [];
    me.currentXType = '';
  },

  refs: [{
    ref: 'contentPanel',
    selector: '#contentPanel',
    xtype: 'panel'
  }, {
      ref: 'moduleTitle',
      selector: '#txtModuleTitle'
  }, {
      ref: 'cmbGlobalCenter',
      selector: '#cmbGlobalCenter'
  }],
  changeCurrentCity : function (combo, records, eOpts) {
    if (records.length === 0) {
     
      return;
  }
  XMLifeOperating.generic.Global.currentCity = records[0].data.code;
  this.switchToView(this.currentXType);

  var defaultHeaders = Ext.Ajax.defaultHeaders || {};
  defaultHeaders["City"] = XMLifeOperating.generic.Global.currentCity;
  Ext.Ajax.defaultHeaders = defaultHeaders;
  },

  changeCurrentCenter : function (combo, records, eOpts) {
    if (records.length === 0) {

        return;
    }

    XMLifeOperating.generic.Global.current_operating = combo.getValue();
    
    if (this.currentXType && this.loadedClasses[this.currentXType]) {
        var cmp = this.loadedClasses[this.currentXType];
        cmp.fireEvent('onShowView', cmp, this.currentXType);
    }
  },


  /**
   * [switchToView 根据treepanel 叶子节点的选择显示相应的面板]
   * 参数具体 参照 EXT API treepanel Event selectionchange
   * @param  {[type]} model     [当前选择模型]
   * @param  {[type]} Selectarr [当前选择项的list]
   * @return {[type]} Ext.Component [当前处于激活状态的panel]
   */
  switchToView : function (model,Selectarr) {
    var selected = Selectarr[0],
        contentPanel = this.getContentPanel(),
        contentItems = contentPanel.items.items,
        id = selected.raw.id,
        isNew = true;
    if (!selected.raw.leaf) {return false}

    this.getModuleTitle().setText(selected.raw.text);
        
    Ext.Array.each(contentItems,function(item) {
      if (item.id === id) isNew = false;
    });
    if (isNew) {
      // 在多层级结构中子级替掉父级时，存在隐藏未消毁的面板，再注册会报错
      var hidePanel = Ext.ComponentQuery.query(id)[0];
      if(hidePanel) {
        //contentPanel.add(hidePanel);
      }else {
        contentPanel.add({xtype: id});
      }

    }

    contentPanel.setActiveTab(id);

    return contentPanel.getActiveTab();
  }
});