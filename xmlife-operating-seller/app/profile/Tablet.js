Ext.define('XMLifeSeller.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        views: ['Main'],
    },
    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop
    },
    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('XMLifeSeller.view.tablet.Main'));
    },
});
