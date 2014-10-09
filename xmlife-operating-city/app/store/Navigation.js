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
                id: 'supportedCityList',
                text: '城市开放管理',
                leaf: true
            }, {
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
                }]
            }, {
                id: 'templateManage',
                text: '模板管理',
                leaf: false,
                expanded: true,
                children: [{
                    id: 'productTemplateList',
                    text: '商品模板管理',
                    leaf: true
                }, {
                    id: 'shopBannerTemplateList',
                    text: '店铺模板管理',
                    leaf: true
                }]
            }, {
                id: 'customerManage',
                text: '用户管理',
                leaf: false,
                expanded: true,
                children: [{
                    id: 'CustomerList',
                    text: '用户信息管理',
                    leaf: true
                }, {
                    id: 'gFeedbackList',
                    text: '用户反馈管理',
                    leaf: true
                }]
            }, {
                id: 'gDealList',
                text: '订单管理',
                leaf: true
            }, {
                id: 'refundManage',
                text: '退款管理',
                leaf: false,
                expanded: true,
                children: [{
                    id: 'wechatRefundList',
                    text: '微信退款管理',
                    leaf: true
                }, {
                    id: 'alipayRefundList',
                    text: '支付宝退款管理',
                    leaf: true
                }, {
                    id: 'balanceRefundList',
                    text: '余额退款管理',
                    leaf: true
                }]
            }, {
                id: 'rechargeableCardManage',
                text: '充值卡管理',
                expanded: true,
                leaf: false,
                children: [{
                    id: 'rechargeablecrdinstancelist',
                    text: '充值卡实例管理',
                    leaf: true
                }, {
                    id: 'rechargeablecardtemplatelist',
                    text: '充值卡模板管理',
                    leaf: true
                }]
            },
            {
                id: 'AuthorityTabPanel',
                text: '权限管理',
                leaf: true
            }, {
                id: 'shopareaList',
                text: '中心平台管理',
                leaf: true
            }/*, {
                id: 'BatchAddEstate',
                text: '批量添加小区',
                leaf: true
            }*/
        ]
    }
});