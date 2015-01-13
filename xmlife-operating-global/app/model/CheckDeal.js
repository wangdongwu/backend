Ext.define('XMLifeOperating.model.CheckDeal', {
  extend: 'Ext.data.Model',
  fields: ['dealId','dealTime','feedback','returnCount','star','timeDiff',
            {
              name : 'dealBackendId',
              mapping : 'dealId'
            }
          ]
});
