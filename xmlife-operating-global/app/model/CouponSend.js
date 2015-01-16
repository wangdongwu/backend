Ext.define('XMLifeOperating.model.CouponSend', {
    extend: 'Ext.data.Model',
    fields: ['id'],
    proxy: new XMLifeOperating.generic.BaseProxy('shopper')
});
