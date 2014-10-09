Ext.define('XMLifeOperating.controller.Authority', {
  extend: 'Ext.app.Controller',
  views: ['authorityManage.AuthorityList'],
  stores: [],
  models: [],
  refs: [{
    ref: 'authorityList',
    selector: 'authorityList',
    xtype: 'authorityList',
    autoCreate: true
  }, {
    ref: 'contentPanel',
    selector: '#contentPanel',
    xtype: 'panel'
  }],
  init: function() {
    var self = this;
    self.control({
      'authorityList': {
        added: self.renderAuthorityList
      }
    });
  },
  renderAuthorityList: function() {
    var me = this;
  },
  addAuthority: function() {
    var me = this;
  }
})