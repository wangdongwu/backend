Ext.define('XMLifeSeller.view.Nav', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'nav',
    config: {
        xtype: 'nestedlist',
        title: '导航栏',
        displayField: 'text',
        store: 'Nav',
        //detailCard: true,
        //detailContainer: 'unDealOrder',
        listeners: {
            leafitemtap: function(nestedList, list, index, target, record) {
                // var detailCard = nestedList.getDetailCard();
                // detailCard.setHtml('You selected: ' + record.get('text'));
                //nestedList.getDetailContainer().setHtml('You selected: ' + record.get('text'));
                var xtype = record.get('xtype');
                if (xtype) {
                    Ext.getCmp('content').removeAll(false);
                    Ext.getCmp('content').add({
                        xtype: xtype
                    });
                }
            }
        }
    }
});