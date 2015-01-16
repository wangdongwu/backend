Ext.define('XMLifeOperating.store.ReturnGoodsApplyList', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ReturnGoodsApplyList',
    proxy: new XMLifeOperating.generic.BaseProxy('returnGoods/applyList', 'result')
});