Ext.define('XMLifeOperating.controller.ShopBannerTemplate', {
    extend: 'Ext.app.Controller',

    views: ['templateManage.shopBannerTemplate.ShopBannerTemplateList',
            'templateManage.shopBannerTemplate.ShopBannerTemplateEdit'],

    stores: ['ShopBannerTemplate'],

    models: ['ShopBannerTemplate'],

    refs: [
        {
             ref: 'editWindow',
             selector: 'shopBannerTemplateEdit',
             xtype: 'shopBannerTemplateEdit',
             autoCreate: true
        },
        
    ],

    init: function() {

        var me=this;
        this.control({
           
            'shopBannerTemplateList': {
                added: me.onShow,
            },
            'shopBannerTemplateList #add':{
                click: function() {
                    var cClass = me.getShopBannerTemplateModel();
                    var template = new cClass();
                    var win = this.getEditWindow();
                    win.down('form').loadRecord(template);
                    win.show();
                }
            },
            'shopBannerTemplateEdit #save-template-edit-btn': {
                click: me.saveEditWindow
            },
            'shopBannerTemplateList #editTemplate':{
                click: me.onEdit
            },
            'shopBannerTemplateEdit filefield[name="templateUploadfile"]':{
                change:function(uploadfile){
                  var form=uploadfile.ownerCt;
                  
                  var hash=uploadfile.previousNode().previousNode();
                 
                  uploadImage(form, hash);
                }
            },
        });
    },
    onShow: function() {
        var store = this.getShopBannerTemplateStore();
        store.load({params:{city: XMLifeOperating.generic.Global.currentCity}});
    },
    saveEditWindow: function() {
      
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            template = form.getRecord(),

            me = this;
            
        if(form.isValid()) {

            var descColor = form.findField('descColor').lastValue;
            var descStrokeColor = form.findField('descStrokeColor').lastValue;
            var nameColor = form.findField('nameColor').lastValue;
            var nameStrokeColor = form.findField('nameStrokeColor').lastValue;
            descColor = parseInt(descColor,'16');
            descStrokeColor = parseInt(descStrokeColor,'16');
            nameColor = parseInt(nameColor,'16');
            nameStrokeColor = parseInt(nameStrokeColor,'16');

            windowEl.mask('saving');
            form.updateRecord(template);
            
            template.set('descColor', descColor);
            template.set('descStrokeColor', descStrokeColor);
          
            template.set('nameColor', nameColor);
            template.set('nameStrokeColor', nameStrokeColor);

            if(template.get('id')!=null){
                sendPutRequest('shopbannertemplate',{id:template.get('id'),
                                                     banner:template.get('banner'),
                                                     name:template.get('name'),
                                                     nameColor:template.get('nameColor'),
                                                     nameStrokeColor:template.get('nameStrokeColor'),
                                                     nameDegree:template.get('nameDegree'),
                                                     descColor:template.get('descColor'),
                                                     descStrokeColor:template.get('descStrokeColor'),
                                                     descDegree:template.get('descDegree'),
                                                     type:template.get('type'),},'编辑模板','成功编辑模板','编辑模板失败',function(){
                       
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
                });
                return;
            }
            template.save({
                success: function(task, operation) {
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
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
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var template = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        win.down('form').loadRecord(template);
        win.show();
    },
});