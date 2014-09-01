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
        children: [
        {
            id: 'supportedCityList',
            text: '城市开放管理',
            leaf: true
        }, 
        {
            id: 'staffManage',
            text: '员工管理',
            leaf: false,
            expanded: true,
            children: [{
                id: 'gShopperList',
                text: '买手管理',
                leaf: true
            }, {
                id: 'gDelivererList',
                text: '配送员管理',
                leaf: true
            }, {
                id: 'otherList',
                text: '其他员工管理',
                leaf: true
            }]
        }, 
        {
            id: 'templateManage',
            text: '模板管理',
            leaf: false,
            expanded: true,
            children: [{
                id: 'productTemplateList',
                text: '商品模板管理',
                leaf: true
            }, {
                id: 'templateList',
                text: '店铺模板管理',
                leaf: true
            }]
        },
        {
            id: 'rechargeableCardManage',
            text: '充值卡管理',
            expanded: true,
            leaf: false,
            children: [{
                id: 'rechargeableCardList',
                text: '充值卡实例管理',
                leaf: true
            }, {
                id: 'rechargeableCardTemplateList',
                text: '充值卡模板管理',
                leaf: true
            }]
        }, 

        {
            id: 'customerManage',
            text: '用户管理',
            leaf: false,
            expanded: true,
            children: [{
                id: 'customerList',
                text: '用户信息管理',
                leaf: true
            }, {
                id: 'feedbackList',
                text: '用户反馈管理',
                leaf: true
            }]
        }, 
        {
            id: 'dealList',
            text: '订单管理',
            leaf: true
        }, 
        {
            id: 'refundList',
            text: '退款管理',
            leaf: true
        },
        {
            id: 'authorityManage',
            text: '权限管理',
            leaf: true
        },
        {
            id: 'shoparea',
            text: '中心平台',
            leaf: true
        }]
    }
});