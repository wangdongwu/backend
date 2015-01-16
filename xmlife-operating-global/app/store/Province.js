Ext.define('XMLifeOperating.store.Province', {
    extend: 'Ext.data.Store',
    fields: ['code', 'name'],
    data: [
        {"code": 110000, "name": "\u5317\u4eac\u5e02"},
        {"code": 120000, "name": "\u5929\u6d25\u5e02"},
        {"code": 130000, "name": "\u6cb3\u5317\u7701"},
        {"code": 140000, "name": "\u5c71\u897f\u7701"},
        {"code": 150000, "name": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a"},
        {"code": 210000, "name": "\u8fbd\u5b81\u7701"},
        {"code": 220000, "name": "\u5409\u6797\u7701"},
        {"code": 230000, "name": "\u9ed1\u9f99\u6c5f\u7701"},
        {"code": 310000, "name": "\u4e0a\u6d77\u5e02"},
        {"code": 320000, "name": "\u6c5f\u82cf\u7701"},
        {"code": 330000, "name": "\u6d59\u6c5f\u7701"},
        {"code": 340000, "name": "\u5b89\u5fbd\u7701"},
        {"code": 350000, "name": "\u798f\u5efa\u7701"},
        {"code": 360000, "name": "\u6c5f\u897f\u7701"},
        {"code": 370000, "name": "\u5c71\u4e1c\u7701"},
        {"code": 410000, "name": "\u6cb3\u5357\u7701"},
        {"code": 420000, "name": "\u6e56\u5317\u7701"},
        {"code": 430000, "name": "\u6e56\u5357\u7701"},
        {"code": 440000, "name": "\u5e7f\u4e1c\u7701"},
        {"code": 450000, "name": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a"},
        {"code": 460000, "name": "\u6d77\u5357\u7701"},
        {"code": 500000, "name": "\u91cd\u5e86\u5e02"},
        {"code": 510000, "name": "\u56db\u5ddd\u7701"},
        {"code": 520000, "name": "\u8d35\u5dde\u7701"},
        {"code": 530000, "name": "\u4e91\u5357\u7701"},
        {"code": 540000, "name": "\u897f\u85cf\u81ea\u6cbb\u533a"},
        {"code": 610000, "name": "\u9655\u897f\u7701"},
        {"code": 620000, "name": "\u7518\u8083\u7701"},
        {"code": 630000, "name": "\u9752\u6d77\u7701"},
        {"code": 640000, "name": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a"},
        {"code": 650000, "name": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a"},
        {"code": 710000, "name": "\u53f0\u6e7e\u7701"},
        {"code": 810000, "name": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a"},
        {"code": 820000, "name": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a"}
    ],
    proxy: {
        type: 'memory',
        reader: 'json'
    }
});