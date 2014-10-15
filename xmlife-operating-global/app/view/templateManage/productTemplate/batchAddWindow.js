Ext.define('XMLifeOperating.view.templateManage.productTemplate.batchAddWindow', {
    extend: 'Ext.window.Window',
    id : 'batchAddWindow',
    xtype : 'batchAddWindow',
    alias : 'widget.batchAddWindow',
    title : '批量添加商品',
    closeAction: 'hide',
    modal: true,
    width: 350,
    resizable :false,
    items : [{
      xtype : 'form',
      url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/addtemplates',
      bodyPadding : '10 20',
      defaults : {
        width : 300
      },
      items : [
      {
          xtype : 'filefield',
          name : 'file',
          allowBlank: false,
          buttonText : '商品xcel文件'
      },
      {
        xtype : 'filefield',
        name : 'pictures',
        allowBlank: false,
        buttonText : '选择图片文件',
        listeners : {
          afterrender : function(gird){
            gird.fileInputEl.set({multiple:'multiple'});
            var el = gird.getEl();

            var maxSize = 1000;
            var fileSize =  gird.getActionEl().dom.size,
                button = gird.up('form').down('#addProduct');

            var fileSize ;
            el.dom.onchange = function(e){
              fileSize = e.srcElement.files.length;
              if(fileSize > maxSize){
              Ext.Msg.alert('警告', '你选择的文件数量多余'+maxSize);
                button.setDisabled(true);
              }else{
                button.setDisabled(false);
              }
            }
          }
        }
      }
    ],
    buttons : [{
      text : '取消',
      handler : function(){
        this.up('window').close();
      }
    },{
      text : '上传',
      itemId : 'addProduct'
    }]
    }]
    
});