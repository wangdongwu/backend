Ext.define('XMLifeOperating.controller.ProductTemplate', {
    extend: 'Ext.app.Controller',

    views: ['templateManage.productTemplate.ProductTemplateList',
            'templateManage.productTemplate.ProductTemplateEdit'
            ],

    stores: ['ProductTemplate',
             'ProductUnit'],

    models: ['ProductTemplate',
             'ProductUnit'],

    refs: [
        {
          ref : 'productTemplateList',
          selector : 'productTemplateList',
          xtype : 'productTemplateList',
          autoCreate : true
        },
        {
             ref: 'editWindow',
             selector: 'productTemplateEdit',
             xtype: 'productTemplateEdit',
             autoCreate: true
        },
        {
            ref: 'keyword',
            selector: '#keyword',
        },
        /*{
             ref: 'txtAvatar',
             selector: 'editProductTemplate textfield[name=name]',
             autoCreate: true
        }*/
    ],

    init: function() {

        var me=this;
        this.control({
            'productTemplateList' : {
              added : function(){
                var store = this.getProductTemplateStore();
                store.loadPage(1);
              }
            },
            'productTemplateList #add':{
                click: function() {
                    var cClass = this.getProductTemplateModel();
                    var productTemplate = new cClass();
                    var win = this.getEditWindow();
                    win.down('#barCodeId').setDisabled(false);
                    win.down('#skuIdId').setDisabled(false);
                    win.down('form').loadRecord(productTemplate);
                    win.show();
                }
            },
            '#productSearch':{
                click: function(){
                    // var form = this.getSearchForm();
                    var store = me.getProductTemplateStore();
                    store.getProxy().extraParams={
                                keyword : me.getKeyword().getValue()
                        }
                    store.loadPage(1);

                }
            },
            'productTemplateList #editProductTemplate':{
                click: me.onEdit
            },
            'productTemplateEdit #btnSave': {
                click: me.saveEditWindow
            },
           'productTemplateEdit filefield[name="productTemplateUploadfile"]':{
                change:function(uploadfile){
                  var form=uploadfile.ownerCt;
                  
                  var hash=uploadfile.previousNode().previousNode();
                 
                  uploadImage(form, hash);
                }
            },
        });

    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var productTemplate = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        var names=[];
        if(productTemplate.get('name').indexOf('\n')){
            names = productTemplate.get('name').split('\n');
        }
        productTemplate.set('name1',names[0]);
        productTemplate.set('name2',names[1]);
        productTemplate.set('name3',names[2]);
        win.down('#barCodeId').setDisabled(true);
        win.down('#skuIdId').setDisabled(true);
        win.down('form').loadRecord(productTemplate);
        win.show();
    },
    saveEditWindow: function() {
      
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            productTemplate = form.getRecord(),
            me = this;

        if(form.isValid()) {

            windowEl.mask('saving');
            form.updateRecord(productTemplate);
            

            productTemplate.get('name1');
            productTemplate.get('name2');
            productTemplate.get('name3');
            var names=[];
            names.push(productTemplate.get('name1'));
            names.push(productTemplate.get('name2'));
            names.push(productTemplate.get('name3'));
            productTemplate.set('names',names);
            console.log(productTemplate);
            console.log("try saving");
            if(productTemplate.get('id')!=''&&productTemplate.get('id')!=null){
                console.log(names);
                var id=productTemplate.get('id');
                //var name=productTemplate.get('name');
                var desc=productTemplate.get('desc');
                var picture=productTemplate.get('picture');
                var unit=productTemplate.get('unit');
                var tag=productTemplate.get('tag');
                
              
                sendPutRequest('producttemplate/update',{id:id,names:names,desc:desc,picture:picture,unit:unit,tag:tag},'编辑商品','成功编辑商品','编辑商品失败',function(){
                                    windowEl.unmask();
                                    editWindow.close();
                                    // me.fireEvent('refreshView');
                                    var keyword = productTemplate.get('name1');
                                    var store = me.getProductTemplateStore();

                                    store.getProxy().extraParams={
                                                keyword      : keyword
                                        }
                                    store.loadPage(1);

                                    Ext.getCmp('productTemplateList').down('#keyword').setValue(keyword);
                                    
                            });
                return;
            }
            productTemplate.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    var keyword = productTemplate.get('name1');
                    var store = me.getProductTemplateStore();
                    store.getProxy().extraParams={
                      keyword : keyword
                    }
                      store.loadPage(1);

                    Ext.getCmp('productTemplateList').down('#keyword').setValue(keyword);

                },
                failure: function(task, operation) {

                    var error = operation.getError(),
                        msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                    Ext.MessageBox.show({
                        title: 'Edit Task Failed',
                        msg: msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                }
            })
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
});