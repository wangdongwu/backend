Ext.define('XMLifeOperating.store.HomePagePreview', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	//proxy: new XMLifeOperating.generic.BaseProxy('homepage/getHomePage', 'modules'),
	data: [
	    {
	        "id": "545735952cd452e1a4eab9ee",
	        "isAdvert": false,
	        "keys": [
	            {
	                "image": "54408a590cf204fc5d90c94771",
	                "titles": [
	                    "搞个活动"
	                ],
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "54408a650cf204fc5d90c948ca",
	                "titles": [
	                    "周黑鸭"
	                ],
	                "url": "http://www.xiaomei.com/zhouheiya.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "54408a740cf204fc5d90c94988",
	                "titles": [
	                    "买手介绍"
	                ],
	                "url": "http://www.xiaomei.com/shopper_story.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "54408a830cf204fc5d90c94a55",
	                "titles": [
	                    "小美介绍"
	                ],
	                "url": "http://www.xiaomei.com/carousel.html",
	                "urlType": "HTML"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "banner",
	        "order": 0,
	        "type": "TYPE0"
	    },
	    {
	        "id": "545737702cd452e1a4eab9f0",
	        "isAdvert": false,
	        "items": [
	            {
	                "image": "54599ae90cf292d0f893e13ffc",
	                "params": {},
	                "titles": [
	                    "农贸市场",
	                    "Food market",
	                    "全部品类 >"
	                ],
	                "url": "54131c6d0364b0ed8f1ffd91",
	                "urlType": "SHOP"
	            },
	            {
	                "image": "5459988e0cf292d0f893e130f8",
	                "params": {
	                    "PRODUCTCATEGORY": {
	                        "cid": "541464d90364b19b21f3b2de",
	                        "name": "放心肉类"
	                    }
	                },
	                "titles": [
	                    "放心肉类"
	                ],
	                "url": "541464d90364b19b21f3b2de",
	                "urlType": "CATEGORY"
	            },
	            {
	                "image": "545998ac0cf292d0f893e13168",
	                "params": {
	                    "PRODUCTCATEGORY": {
	                        "cid": "541464d90364b19b21f3b2e0",
	                        "name": "鱼虾蟹贝"
	                    }
	                },
	                "titles": [
	                    "田园时蔬"
	                ],
	                "url": "541464d90364b19b21f3b2e0",
	                "urlType": "CATEGORY"
	            },
	            {
	                "image": "545998be0cf292d0f893e132d4",
	                "params": {
	                    "PRODUCTCATEGORY": {
	                        "cid": "541464da0364b19b21f3b2e4",
	                        "name": "南北干货"
	                    }
	                },
	                "titles": [
	                    "蛋奶豆制品"
	                ],
	                "url": "541464da0364b19b21f3b2e4",
	                "urlType": "CATEGORY"
	            },
	            {
	                "image": "545998d10cf292d0f893e13351",
	                "params": {
	                    "PRODUCTCATEGORY": {
	                        "cid": "541464dd0364b19b21f3b2ed",
	                        "name": "熟食"
	                    }
	                },
	                "titles": [
	                    "3折特区"
	                ],
	                "url": "541464dd0364b19b21f3b2ed",
	                "urlType": "CATEGORY"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "supermarket",
	        "order": 1,
	        "type": "TYPE1"
	    },
	    {
	        "id": "5458b67d2cd452e1a4eacdbf",
	        "isAdvert": false,
	        "items": [
	            {
	                "image": "54599b080cf292d0f893e141cc",
	                "params": {},
	                "titles": [
	                    "某某商家或超市",
	                    "Some market",
	                    "全部品类 >"
	                ],
	                "url": "54131c6d0364b0ed8f1ffd91",
	                "urlType": "SHOP"
	            },
	            {
	                "image": "5459993d0cf292d0f893e1357a",
	                "params": {
	                    "PRODUCT": {
	                        "barCode": "",
	                        "canPartialReturn": true,
	                        "categoryIds": [
	                            "541464d70364b19b21f3b2d8"
	                        ],
	                        "created": 1410532542628,
	                        "description": "蔬菜中的维生素A、C含量之冠！\n\n富含维生素A和C，以及身体造血物质铁，常食菠菜，具有通便清热、理气补血、防病抗衰等功效，特别适宜贫血症、糖尿病、肺结核、高血压等人群。\n\n推荐菜谱：上汤菠菜、芝麻菠菜、菠菜蛋饼",
	                        "dprice": 800,
	                        "isTop": false,
	                        "limitType": 0,
	                        "limitcount": 0,
	                        "names": [
	                            "菠菜 1斤"
	                        ],
	                        "offlineReason": 0,
	                        "picture": "5427d9c10cf2d52030336f2b5e",
	                        "pid": "541466ea180ac35a8e42589d",
	                        "pprice": 650,
	                        "price": 880,
	                        "productLimitcount": 0,
	                        "rank": 1,
	                        "shopId": "54131c6d0364b0ed8f1ffd91",
	                        "skuId": "A000000007",
	                        "soldCount": 40,
	                        "status": 3,
	                        "stock": -1,
	                        "topTime": 0,
	                        "unit": "份",
	                        "updated": 1415004415754
	                    }
	                },
	                "titles": [
	                    "周黑鸭"
	                ],
	                "url": "541466ea180ac35a8e42589d",
	                "urlType": "SKU"
	            },
	            {
	                "image": "54408a740cf204fc5d90c94988",
	                "params": {
	                    "PRODUCT": {
	                        "barCode": "",
	                        "canPartialReturn": true,
	                        "categoryIds": [
	                            "541464d70364b19b21f3b2d8"
	                        ],
	                        "created": 1410532542628,
	                        "description": "富含胡萝卜素，脆嫩可口！\n\n挑选茼蒿以水嫩、深绿为佳，富含各种氨基酸、胡萝卜素，化痰止咳，清利头目，和中健胃，特别适合高血压患者、脑力劳动人士、贫血者、缺钙人群等。\n\n推荐菜谱：清炒茼蒿、凉拌茼蒿",
	                        "dprice": 540,
	                        "isTop": false,
	                        "limitType": 0,
	                        "limitcount": 0,
	                        "names": [
	                            "茼蒿 9两"
	                        ],
	                        "offlineReason": 0,
	                        "picture": "5416ff540cf22590dc7a0ba784",
	                        "pid": "541466ea180ac35a8e4258a9",
	                        "pprice": 495,
	                        "price": 594,
	                        "productLimitcount": 0,
	                        "rank": 25,
	                        "shopId": "54131c6d0364b0ed8f1ffd91",
	                        "skuId": "A000000024",
	                        "soldCount": 1,
	                        "status": 0,
	                        "stock": -1,
	                        "topTime": 0,
	                        "unit": "份",
	                        "updated": 1410590405313
	                    }
	                },
	                "titles": [
	                    "买手介绍"
	                ],
	                "url": "541466ea180ac35a8e4258a9",
	                "urlType": "SKU"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "supermarket2",
	        "order": 2,
	        "type": "TYPE2"
	    },
	    {
	        "id": "5458b6b52cd452e1a4eacdc0",
	        "isAdvert": false,
	        "items": [
	            {
	                "image": "5459995f0cf292d0f893e13692",
	                "params": {},
	                "titles": [
	                    "大洋世家"
	                ],
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "545999700cf292d0f893e137f4",
	                "params": {},
	                "titles": [
	                    "周黑鸭"
	                ],
	                "url": "http://www.xiaomei.com/zhouheiya.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "545999800cf292d0f893e13841",
	                "params": {},
	                "titles": [
	                    "买手介绍"
	                ],
	                "url": "http://www.xiaomei.com/shopper_story.html",
	                "urlType": "HTML"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "shop",
	        "order": 3,
	        "type": "TYPE3"
	    },
	    {
	        "id": "5458b6ea2cd452e1a4eacdc1",
	        "isAdvert": false,
	        "items": [
	            {
	                "image": "5459999b0cf292d0f893e13978",
	                "params": {},
	                "titles": [
	                    "大洋世家"
	                ],
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "545999b20cf292d0f893e13a3a",
	                "params": {},
	                "titles": [
	                    "周黑鸭"
	                ],
	                "url": "http://www.xiaomei.com/zhouheiya.html",
	                "urlType": "HTML"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "shop2",
	        "order": 4,
	        "type": "TYPE4"
	    },
	    {
	        "type": "TYPE8"
	    },
	    {
	        "id": "5458b70a2cd452e1a4eacdc2",
	        "isAdvert": true,
	        "items": [
	            {
	                "image": "545999d00cf292d0f893e13bb4",
	                "params": {},
	                "titles": [
	                    "大洋世家"
	                ],
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "advert",
	        "order": 5,
	        "type": "TYPE6"
	    },
	    {
	        "type": "TYPE9"
	    },
	    {
	        "id": "545739712cd452e1a4eab9f5",
	        "isAdvert": true,
	        "items": [
	            {
	                "image": "54599a410cf292d0f893e13cdc",
	                "params": {},
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            },
	            {
	                "image": "54599a520cf292d0f893e13d76",
	                "params": {},
	                "url": "http://www.xiaomei.com/shopbannerdetail.html",
	                "urlType": "HTML"
	            }
	        ],
	        "layoutId": "545735f32cd452e1a4eab9ef",
	        "name": "advert2",
	        "order": 6,
	        "type": "TYPE7"
	    }
	],
	"shops": [
	    {
	        "address": "地球村100号",
	        "areaIds": [
	            2
	        ],
	        "banners": [],
	        "closeTime": 45,
	        "desc": "",
	        "icon": "5412fb0d0364452d87bd21c139",
	        "lat": 11.11,
	        "lng": 12.12,
	        "logo": "5412fb100364452d87bd21c2a1",
	        "name": "测试店铺100号",
	        "openTime": 15,
	        "order": 0,
	        "shopId": "545736030cf2a680caeac0e4",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": true
	    },
	    {
	        "address": "计量大厦17",
	        "areaIds": [
	            2
	        ],
	        "banners": [
	            {
	                "image": "541fc0c40cf292d0f893e0bc59",
	                "order": 0,
	                "title": "111",
	                "url": "http://dev.xiaomei.com"
	            }
	        ],
	        "closeTime": 1305,
	        "desc": "测试店铺",
	        "icon": "54131c2903643b27cfbb124f4b",
	        "lat": 38.913611,
	        "lng": 77.013222,
	        "logo": "54131c2903643b27cfbb125013",
	        "name": "测试店铺",
	        "openTime": 90,
	        "order": 99999,
	        "shopId": "5417085d0cf2458352c9340c",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": true
	    },
	    {
	        "address": "文一路和万塘路交汇处",
	        "areaIds": [
	            2
	        ],
	        "banners": [
	            {
	                "image": "541fc0a10cf292d0f893e0b963",
	                "order": 0,
	                "title": "",
	                "url": ""
	            }
	        ],
	        "closeTime": 1425,
	        "desc": "",
	        "icon": "5412fb110364452d87bd21c78e",
	        "lat": 30.293879,
	        "lng": 120.130495,
	        "logo": "5412fb110364452d87bd21c89a",
	        "name": "翠苑农贸市场",
	        "openTime": 15,
	        "order": 99999,
	        "shopId": "54131c6d0364b0ed8f1ffd91",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": false
	    },
	    {
	        "address": "1111",
	        "areaIds": [
	            2
	        ],
	        "banners": [
	            {
	                "image": "11111",
	                "order": 0,
	                "title": "1111",
	                "url": "http://www.xiaomei.com"
	            },
	            {
	                "image": "222222",
	                "order": 0,
	                "title": "222",
	                "url": "http://xiaomei.com"
	            },
	            {
	                "image": "432424",
	                "order": 0,
	                "title": "3333",
	                "url": "http://xiaomei.com"
	            },
	            {
	                "image": "",
	                "order": 0,
	                "title": "111",
	                "url": "http://xiaomei.com"
	            }
	        ],
	        "closeTime": 1410,
	        "desc": "",
	        "icon": "5412fb0d0364452d87bd21c139",
	        "lat": 11.11,
	        "lng": 11.11,
	        "logo": "5412fb100364452d87bd21c2a1",
	        "name": "测试商超",
	        "openTime": 15,
	        "order": 99999,
	        "shopId": "5425510e0cf27fe451af555e",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": true
	    },
	    {
	        "address": "文三路99999",
	        "areaIds": [
	            2
	        ],
	        "banners": [],
	        "closeTime": 1380,
	        "desc": "",
	        "icon": "5412fb110364452d87bd21cdf9",
	        "lat": 11.11,
	        "lng": 111.11,
	        "logo": "541711950cf2bc282b845e49f9",
	        "name": "星巴克克",
	        "openTime": 600,
	        "order": 99999,
	        "shopId": "543f2bda0cf2d0067cd22049",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": false
	    },
	    {
	        "address": "1111",
	        "areaIds": [
	            2
	        ],
	        "banners": [
	            {
	                "image": "541fc08a0cf292d0f893e0b86f",
	                "order": 0,
	                "title": "冠相品",
	                "url": "http://www.xiaomei.com/shopper_story.html"
	            }
	        ],
	        "closeTime": 1335,
	        "desc": "111",
	        "icon": "5412fb110364452d87bd21ca5e",
	        "lat": 11.11,
	        "lng": 11.11,
	        "logo": "5412fb110364452d87bd21cb98",
	        "name": "冠相品1",
	        "openTime": 60,
	        "order": 99999,
	        "shopId": "54131c6d0364b0ed8f1ffd92",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": true
	    },
	    {
	        "address": "益乐店",
	        "areaIds": [
	            2
	        ],
	        "banners": [
	            {
	                "image": "541fbef60cf292d0f893e0b6f2",
	                "order": 0,
	                "title": "鲜丰水果",
	                "url": "http://www.xiaomei.com/shopper_story.html"
	            }
	        ],
	        "closeTime": 1350,
	        "desc": "鲜丰水果",
	        "icon": "5412fb110364452d87bd21cdf9",
	        "lat": 11.11,
	        "lng": 11.11,
	        "logo": "541711950cf2bc282b845e49f9",
	        "name": "鲜丰水果",
	        "openTime": 15,
	        "order": 99999,
	        "shopId": "54131c6d0364b0ed8f1ffd93",
	        "showType": 0,
	        "status": 1,
	        "storeLimitEnable": false
	    }
	],
	proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }

});