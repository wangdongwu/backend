Ext.define('XMLifeOperating.view.templateManage.productTemplate.batchModifiWindow', {
    extend: 'Ext.window.Window',
    xtype: 'batchModifiWindow',
    closeAction: 'hide',
    modal: true,
    resizable :false,

    items:[{
      xtype : 'panel',
      defaults : {
        margin : '8 5'
      },
      items : [
      {
              xtype : 'form',
              layout : 'column',
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/name',
              items : [
              {
                xtype : 'filefield',
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
              layout : 'column',
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/desc',
              items : [
              {
                xtype : 'filefield',
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
              layout : 'column',
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/img2',
              items : [
              {
                xtype : 'filefield',
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
            },
            {
              xtype : 'form',
              layout : 'column',
              defaults : {
                margin : '0 5'
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/rank',
              items : [
              {
                xtype : 'filefield',
                name : 'file',
                allowBlank: false,
                buttonText : '商品排列Excel文件'
            },
            {
              xtype : 'button',
              text : '上传',
              itemId : 'uploadfile'
            }]
            }
            ]
    }]




});

