Ext.define('XMLifeSeller.controller.Main', {
    extend: 'XMLifeSeller.controller',

    views: ['Main'],

    models: ['Navigation'],

    stores: ['Navigation'],

    config: {
        refs: {
        },

        control: {
        },

        deliverId: null
    },

    bindEvents: function (elements, panel) {
        var me = this;
        elements[0].onclick = me.createBindFunc(elements);
    },
    createBindFunc: function (elements) {
        var me = this;
        return function (obj) {
            me.onTap(elements);
        };
    },
    onTap: function (elements) {
        var me = this,
            controller = Ext.create('XMShoppingSeller.controller.Iframe');
        if (elements[0].className == 'agreement') {
            controller.from = 'agreement';
        }
        else if (elements[0].className == 'faq') {
            controller.from = 'faq';
        }
        me.push(controller);
    }
});
