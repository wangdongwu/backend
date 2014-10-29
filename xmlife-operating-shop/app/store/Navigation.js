Ext.define('XMLifeOperating.store.Navigation', {
    requires: [
    'Ext.grid.*',
    'Ext.data.TreeStore',
    ],
    defaultRootId : '',
    extend: 'Ext.data.TreeStore',
    //model:'XMLifeOperating.model.Navigation',
    autoLoad:false,
    /*root:{
        expanded:false
    },*/
    root: {
        text: 'Root',
        expanded: true,
        children: [{
            id:'sShopShelfTab',
            text:'商品管理',
            leaf:true
        },{
            id: 'sDealList',
            text: '订单管理',
            leaf: true
        }]
    }
});