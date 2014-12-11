Ext.define('XMLifeOperating.model.Promotion', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: ['gmtModified', {
        name: 'startDate',
        convert: function (v) {
            if (!v) {
                return '';
            }
            var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
            return format(new Date(v))
        }
    }, {
        name: 'displayDate',
        convert: function (v) {
            if (!v) {
                return '';
            }
            var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
            return format(new Date(v))
        }
    }, {
        name: 'endDate',
        convert: function (v) {
            if (!v) {
                return '';
            }
            var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
            return format(new Date(v))
        }
    }, {
        name: 'status',
        convert: function (v) {
            var str = '';
            switch (v) {
                case 1:
                    str = '未激活';
                    break;
                case 2:
                    str = '未激活';
                    break;
                case 3:
                    str = '即将开始';
                    break;
                case 4:
                    str = '进行中';
                    break;
                case 5:
                    str = '已经结束';
                    break;
            }
            return str;
        }
    }, {
        name: 'activeStatus',
        mapping : 'status'
    }, 'remark',
        'showOnProductDetail',
        'shopLink',
        'globalUserActiveNum',
        'id',
        {
            name: 'promotionId',
            mapping: 'id'
        },
        'showShopLink',
        'promotionBanner',
        'showShortName',
        'showName',
        'name',
        'globalUserDailyNum',
        'areaIds',
        'isHaveHomeBanner',
        'isHaveBottomBanner',
        'homeBannerPosition',
        'homeBanner',
        'topBanner',
        'bottomBanner',
        'homeBannerSize',
        'topBannerSize',
        'bottomBannerSize'
    ]

});