Ext.define('XMLifeOperating.controller.BatchAddEstate', {
    extend: 'Ext.app.Controller',

    views: ['BatchAddEstate'],

    stores: [],

    models: [],

    refs: [{
        ref: 'BatchAddEstate',
        selector: 'BatchAddEstate',
        xtype: 'BatchAddEstate',
        autoCreate: true
    }],

    init: function() {
      var self = this;
      self.control({
        'BatchAddEstate #uploadfile':{
          click : function(gird){
            var sessionId = localStorage.getItem('sessionId') || '';
            var form = gird.up('form').getForm();
            if(form.isValid()){
              form.submit({
                url : XMLifeOperating.generic.Global.URL.biz+'residentalDistrict/genDistrict?sessionId='+sessionId,
                params: {'sessionId':sessionId}, 
                waitMsg : '正在上传您的文件......',
                success : function(form, action){
                  var data = action.response.responseText;
                  console.log(data);
                },
                failure : function(form, action){
                  var data = action.response.responseText;
                  console.log(data);
                }
              });
            }
          }
        }
      })
    },
});