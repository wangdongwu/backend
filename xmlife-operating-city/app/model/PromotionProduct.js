Ext.define('XMLifeOperating.model.PromotionProduct', {
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields: ['promotionProductId', 'productTemplateId','skuId', 'areaName', 'productId', 'promotionProductName', {
		name: 'status',
		convert: function (v) {
      if(!Ext.isDefined(v) || Ext.isEmpty(v)){
        return '';
      }
			var str = '';
			switch (v) {
			case 0: //上架
				str = '<span style="color:green">上架</span>'
				break;
			case 1: //雪藏
				str = '<span style="color:red">雪藏</span>'
				break;
			case 2: //废弃
				str = '<span style="color:crimson">废弃</span>'
				break;
			case 3: //下架
				str = '<span style="color:salmon">下架</span>'
				break;
			default:
				str = '<span style="color:violet">商品不存在</span>'
				break;
			}
			return str;
		}
	}, 'shopName', {
		name: 'currentPrice',
		convert: function (v) {
      if(!v){
        return '';
      }
			return (v / 100).toFixed(2);
		}
	}, {
		name: 'subsidy',
		convert: function (v) {
      if(!v){
        return '';
      }
			return (v / 100).toFixed(2);
		}
	}, {
		name: 'promotionPrice',
		convert: function (v) {
      if(!v){
        return '';
      }
			return (v / 100).toFixed(2);
		}
	}, {name : 'limitPerCityOneDay',convert:function(v){
    if(v == 2147483647 ){
      return '';
    }else{
      return v;
    }
  }}, {name : 'limitPerPersonOneDay',convert:function(v){
    if(v == 2147483647 ){
      return '';
    }else{
      return v;
    } 
  }}, {name : 'limitPerPersonInPromotion',convert:function(v){
    if(v == 2147483647 ){
      return '';
    }else{
      return v;
    }
  }}, 'areaId', 'shopId']
});