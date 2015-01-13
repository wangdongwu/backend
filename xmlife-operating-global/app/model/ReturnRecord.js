Ext.define('XMLifeOperating.model.ReturnRecord', {
  extend: 'Ext.data.Model',
  fields: [{name : 'allPrice',
            convert:function(v){
              return v/100
            }},'barCode','count','dealId','dealTime','productName',{
              name : 'purchasePrice',
              convert:function(v){
                return v/100
              }
            },'shopName','shopNote',
  {
    name : 'dealBackendId',
    mapping : 'dealId'
  }]
});
