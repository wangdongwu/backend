Ext.define('XMLifeOperating.store.ShopperExamine', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ShopperExamine',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/getGather','','report'),
    /*data : [{
      xxxx : '11111'
    },{
      xxxx : '11111'
    },{
      xxxx : '11111'
    }],
     proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }*/
});
