Ext.define('XMLifeOperating.store.Navigation', {
    requires: [
    'Ext.grid.*',
    'Ext.data.TreeStore',
    ],
    extend: 'Ext.data.TreeStore',
    fields: ['id', 'text', 'code', 'leaf'],
    autoLoad: true,
    root: {
        text: 'Root',
        expanded: true,
        children: [{
            id: 'freightList',
            text: '运费管理',
            leaf: true
        }, {
            id: 'shopAreaList',
            text: '中心平台管理',
            leaf: true
        }, {
            id: 'authorityList',
            text: '中心权限管理',
            leaf: true
        },{
            id: 'personalCenter',
            text: '个人中心',
            leaf: true
        }
            ]
        }
    });