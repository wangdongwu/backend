Ext.define('XMLifeSeller.view.phone.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        fullscreen: true,
        layout: 'card',
        items: [{
            xtype: 'header',
            docked: 'top'
        }, {
            xtype: 'nav',
            detailCard: {
                xtype: 'panel'
            },
            listeners: {
                leafitemtap: function(nestedList, list, index, target, record) {
                    var detailCard = nestedList.getDetailCard();
                    var xtype = record.get('xtype');
                    if (xtype) {
                        detailCard.removeAll(false);
                        detailCard.add({
                            xtype: xtype
                        });
                    }
                }
            }
        }]
    }
});