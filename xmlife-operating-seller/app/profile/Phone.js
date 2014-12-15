Ext.define('XMLifeSeller.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        views: ['Main'],
    },
    isActive: function() {
        return Ext.os.is.Phone
    },
    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('XMLifeSeller.view.phone.Main'));
    },
});
