Ext.define('XMLifeOperating.view.templateManage.productTemplate.batchAddWindow', {
    extend: 'Ext.window.Window',
    xtype: 'batchAddWindow',
    closeAction: 'hide',
    modal: true,
    width: 600,
    resizable :false,

    items:[{
      xtype : 'panel',
      defaults : {
        margin : '8 5',
        border : '0'
      },
      items : [
      {
              xtype : 'form',
              width : 600,
              layout : 'column',
              border : 0,
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/name',
              items : [
              {
                xtype : 'filefield',
                columnWidth: 0.8,
                name : 'file',
                allowBlank: false,
                buttonText : '商品名称Excel文件'
            },
            {
              xtype : 'button',
              text : '上传',
              itemId : 'uploadfile'
            }]
            },{
              xtype : 'form',
              width : 600,
              layout : 'column',
              border : 0,
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/desc',
              items : [
              {
                xtype : 'filefield',
                columnWidth: 0.8,
                name : 'file',
                allowBlank: false,
                buttonText : '商品描述Excel文件'
            },
            {
              xtype : 'button',
              text : '上传',
              itemId : 'uploadfile'
            }]
            },{
              xtype : 'form',
              width : 600,
              layout : 'column',
              border : 0,
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/img2',
              items : [
              {
                xtype : 'filefield',
                columnWidth: 0.8,
                name : 'file',
                allowBlank: false,
                buttonText : '选择图片文件',
                listeners : {
                  render : function(gird){
                    gird.fileInputEl.set({multiple:'multiple'});
                  }
                }
            },
            {
              xtype : 'button',
              text : '上传',
              itemId : 'uploadfile'
            }]
            }]
    }]




});

