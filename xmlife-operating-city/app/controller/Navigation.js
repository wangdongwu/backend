Ext.define('XMLifeOperating.controller.Navigation', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.grid.column.Action'],

  views: ['Navigation', 'Toolbar'],

  stores: ['Navigation'],

  models:['Navigation'],
  
  refs: [
    {
      ref: 'contentPanel',
      selector: '#contentPanel',
      xtype: 'panel'
    }, {
      ref: 'moduleTitle',
      selector: '#txtModuleTitle'
    }, {
      ref: 'cmbGlobalCenter',
      selector: '#cmbGlobalCenter'
    }
  ],

  init: function() {
    var me = this;

    this.currentModule = null;

    this.control({
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

  },
  changeCurrentCity: function(combo, records, eOpts) {
    if (records.length === 0) return;

    XMLifeOperating.generic.Global.currentCity = combo.getValue();
    // 如果当前有模块，向模块发送自定义事件
    this.currentModule && this.currentModule.fireEvent('onShowView', this.currentModule, this.currentXType);
  
  },
  changeCurrentCenter: function(combo, records, eOpts) {
    if (records.length === 0) return;

    XMLifeOperating.generic.Global.current_operating = combo.getValue(); 
    // 如果当前有模块，向模块发送自定义事件
    this.currentModule && this.currentModule.fireEvent('onShowView', this.currentModule, this.currentXType);
  
  },
  switchToView: function(model, selectArr) {
    var selected = selectArr[0],
        contentPanel = this.getContentPanel(),
        contentItems = contentPanel.items.items,
        id = selected.raw.id,
        isNew = true;
    if (!selected.raw.leaf) return;
    Ext.Array.each(contentItems, function(item) {
      if (item.xtype === id) isNew = false;
    });
    if (isNew) {
      contentPanel.add({xtype: id});
    }
    contentPanel.setActiveTab(id);
    // 保存当前模块，为切换中心/城市时fireEvent所用
    this.currentModule = contentPanel.getActiveTab();
  }
});