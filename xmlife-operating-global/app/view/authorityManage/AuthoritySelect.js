Ext.define('XMLifeOperating.view.authorityManage.AuthoritySelect', {
    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.data.TreeStore'
    ],
    xtype: 'AuthoritySelect',
    alias : 'widget.AuthoritySelect',
    deferredRender: false,
    rootVisible: false,
    useArrows: true
})