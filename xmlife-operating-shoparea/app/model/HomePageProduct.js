Ext.define('XMLifeOperating.model.HomePageProduct', {
    extend: 'Ext.data.Model',
    fields: [
    	'id', 'skuId', 'status',
        {name: 'name', convert: function(value, record) {
                return record.get('skuId') + '-' + value.replace(/\n/g,' ');
            }
        }
      ]
});
