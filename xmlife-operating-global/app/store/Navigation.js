Ext.define('XMLifeOperating.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model: 'XMLifeOperating.model.Navigation',
    proxy: new XMLifeOperating.generic.BaseProxy('module/getPlatModulesTree?type=Global'),
    defaultRootId: '',
    autoSync: false,
    autoLoad: false,
    root: {
        expanded: true,
        children: [
            /*{
    			"id": "DataExport",
		        "text": "订单中心",
		        "platFormName": "Global",
		        "platFormType": 0,
		        "leaf": true,
		        "isAuth": false,
		        "notShow": false,
		        "children": [{
                "id": "gDealReturnCheckList",
                "text": "退货查看",
                "platFormName": "Global",
                "platFormType": 0,
                "leaf": true,
                "isAuth": false,
                "notShow": false,
                "uniqueName": "gDealReturnCheckList",
                "inheritLevel": 0,
                "auth": false
            }, {
                "id": "gDealReturnAuditList",
                "text": "退货审核",
                "platFormName": "Global",
                "platFormType": 0,
                "leaf": true,
                "isAuth": false,
                "notShow": false,
                "uniqueName": "gDealReturnAuditList",
                "inheritLevel": 0,
                "auth": false
            }],
		        "uniqueName": "DataExport",
		        "inheritLevel": 0,
		        "auth": false
    	}*/
            // {
            //     "id": "supportedCityList",
            //     "text": "开放城市管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": true,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [],
            //     "uniqueName": "supportedCityList",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "staffManage",
            //     "text": "员工管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "gShopperList",
            //             "text": "买手管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "staffManage.gShopperList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "gDelivererList",
            //             "text": "配送员管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "staffManage.gDelivererList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "staffManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "templateManage",
            //     "text": "模板管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "shopBannerTemplateList",
            //             "text": "店铺模板管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "templateManage.shopBannerTemplateList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "productTemplateList",
            //             "text": "商品模板管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "templateManage.productTemplateList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "templateManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "customerManage",
            //     "text": "用户管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "CustomerList",
            //             "text": "用户信息管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "customerManage.CustomerList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "gFeedbackList",
            //             "text": "用户反馈管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "customerManage.gFeedbackList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "customerManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "DealListManage",
            //     "text": "订单中心",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "gDealList",
            //             "text": "订单管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "gDealList.DealListManage",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "DataExport",
            //             "text": "订单数据导出",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "gDealList.DataExport",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "gDealList",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "rechargeablecardManage",
            //     "text": "充值卡管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "OnlineCardManage",
            //             "text": "在线充值卡",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "rechargeablecardManage.OnlineCardManage",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "rechargeablecardtemplatelist",
            //             "text": "充值卡模板管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "rechargeablecardManage.rechargeablecardtemplatelist",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "rechargeablecardManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "couponManage",
            //     "text": "优惠券管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "couponList",
            //             "text": "优惠券模板列表",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "couponManage.couponList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "cardGroupList",
            //             "text": "卡包列表",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "couponManage.cardGroupList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "couponSendList",
            //             "text": "优惠券发放管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": false,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [
            //                 {
            //                     "id": "couponDirectRelease",
            //                     "text": "直接发放",
            //                     "platFormName": "Global",
            //                     "platFormType": 0,
            //                     "leaf": true,
            //                     "isAuth": false,
            //                     "notShow": false,
            //                     "children": [],
            //                     "uniqueName": "couponManage.couponSendList.couponDirectRelease",
            //                     "inheritLevel": 0,
            //                     "auth": false
            //                 },
            //                 {
            //                     "id": "couponShoppingRelease",
            //                     "text": "购物发放",
            //                     "platFormName": "Global",
            //                     "platFormType": 0,
            //                     "leaf": true,
            //                     "isAuth": false,
            //                     "notShow": false,
            //                     "children": [],
            //                     "uniqueName": "couponManage.couponSendList.couponShoppingRelease",
            //                     "inheritLevel": 0,
            //                     "auth": false
            //                 },
            //                 {
            //                     "id": "couponRegisterRelease",
            //                     "text": "注册发放",
            //                     "platFormName": "Global",
            //                     "platFormType": 0,
            //                     "leaf": true,
            //                     "isAuth": false,
            //                     "notShow": false,
            //                     "children": [],
            //                     "uniqueName": "couponManage.couponSendList.couponRegisterRelease",
            //                     "inheritLevel": 0,
            //                     "auth": false
            //                 },
            //                 {
            //                     "id": "couponUrlRelease",
            //                     "text": "URL发放",
            //                     "platFormName": "Global",
            //                     "platFormType": 0,
            //                     "leaf": true,
            //                     "isAuth": false,
            //                     "notShow": false,
            //                     "children": [],
            //                     "uniqueName": "couponManage.couponSendList.couponUrlRelease",
            //                     "inheritLevel": 0,
            //                     "auth": false
            //                 }
            //             ],
            //             "uniqueName": "couponManage.couponSendList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "couponManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "messageManage",
            //     "text": "消息管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "notifyList",
            //             "text": "系统消息",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "messageManage.notifyList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "smsList",
            //             "text": "短信",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "messageManage.smsList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "messageManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "refundManage",
            //     "text": "退款管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "wechatRefundList",
            //             "text": "微信退款管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "refundManage.wechatRefundList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "alipayRefundList",
            //             "text": "支付宝退款管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "refundManage.alipayRefundList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "balanceRefundList",
            //             "text": "余额退款管理",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "refundManage.balanceRefundList",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "refundManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "batchManage",
            //     "text": "批量管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "BatchAddPanel",
            //             "text": "批量增加",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "batchManage.BatchAddPanel",
            //             "inheritLevel": 0,
            //             "auth": false
            //         },
            //         {
            //             "id": "BatchUpdatePanel",
            //             "text": "批量修改",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "batchManage.BatchUpdatePanel",
            //             "inheritLevel": 0,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "batchManage",
            //     "inheritLevel": 0,
            //     "auth": false
            // },
            // {
            //     "id": "AuthorityTabPanel",
            //     "text": "帐号管理",
            //     "platFormName": "Global",
            //     "platFormType": 0,
            //     "leaf": false,
            //     "isAuth": false,
            //     "notShow": false,
            //     "children": [
            //         {
            //             "id": "GlobalAccountManage",
            //             "text": "管理员账号",
            //             "platFormName": "Global",
            //             "platFormType": 0,
            //             "leaf": true,
            //             "isAuth": false,
            //             "notShow": false,
            //             "children": [],
            //             "uniqueName": "AuthorityTabPanel.GlobalAccountManage",
            //             "inheritLevel": 3,
            //             "auth": false
            //         }
            //     ],
            //     "uniqueName": "AuthorityTabPanel",
            //     "inheritLevel": 0,
            //     "auth": false
            // }
        ]
    }
});
