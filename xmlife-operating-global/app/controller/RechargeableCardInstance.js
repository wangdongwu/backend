Ext.define('XMLifeOperating.controller.RechargeableCardInstance', {
    extend: 'Ext.app.Controller',

    views: [
    'rechargeableCardManage.rechargeableCardInstance.RechargeableCardInstanceList',
    'rechargeableCardManage.rechargeableCardInstance.RechargeableCardInstanceAdd'],

    stores: ['CardBatch'],

    models: ['CardBatch'],
    refs: [
        {
             ref: 'rechargeableCardInstanceAdd',
             selector: 'rechargeablecardinstanceadd',
             xtype: 'rechargeablecardinstanceadd',
             autoCreate: true
        },
        
    ],

  init: function() {
        var me=this;
        this.control({
           'rechargeablecrdinstancelist': {
                added: me.onShow,
            },
            'rechargeablecrdinstancelist #generateCard':{
                click: function() {
                    var cClass = me.getCardBatchModel();
                    var rechargeableCard = new cClass();
                    var win = this.getRechargeableCardInstanceAdd();
                    win.down('form').loadRecord(rechargeableCard);
                    win.show();
                }
            },
            'rechargeablecardinstanceadd #save-generateCard-edit-btn': {
                //click: me.saveEditWindow
            },
            '#GenerateCard':{
                //click: me.onEdit
            },
            'rechargeablecardinstanceadd filefield[name="templateUploadfile"]':{
                change:function(uploadfile){
                  var form=uploadfile.ownerCt;
                  
                  var hash=uploadfile.previousNode().previousNode();
                 
                  uploadImage(form, hash);
                }
            },

            
        });

        

    },
    onShow: function() {
        var store = this.getCardBatchStore();
        store.load();
    },

});