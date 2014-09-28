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
                margin : '0 5',
                labelWidth : 120
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/name',
              items : [
              {
                xtype : 'filefield',
                fieldLabel : '批量修改商品名称',
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
                margin : '0 5',
                labelWidth : 120
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/desc',
              items : [
              {
                xtype : 'filefield',
                fieldLabel : '批量修改商品描述',
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
                margin : '0 5',
                labelWidth : 120
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/img2',
              items : [
              {
                xtype : 'filefield',
                name : 'file',
                fieldLabel : '批量修改商品图片',
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
                margin : '0 5',
                labelWidth : 120
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/rank',
              items : [
              {
                xtype : 'filefield',
                fieldLabel : '批量修改商品排列',
                name : 'file',
                allowBlank: false,
                buttonText : '商品排列Excel文件'
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
                margin : '0 5',
                labelWidth : 120
              },
              url : XMLifeOperating.generic.Global.URL.biz+'backdoor/update/product/tag',
              items : [
              {
                xtype : 'filefield',
                fieldLabel : '批量修改商品标签',
                name : 'file',
                allowBlank: false,
                buttonText : '商品标签Excel文件'
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

