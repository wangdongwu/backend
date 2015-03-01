Ext.define('XMLifeOperating.view.general.Util', {
    singleton: true,
    alternateClassName: 'XMLifeOperating.ViewUtil',
    rmbRenderer: function(value) {
        return (value / 100) + '元';
    },
    dateRenderer: function(value) {
        return Ext.Date.format(new Date(parseInt(value, 10)), 'Y.m.d');
    }
});
