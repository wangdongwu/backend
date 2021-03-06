Ext.define('XMLifeOperating.view.templateManage.productTemplate.batchModifiWindow', {
    extend: 'Ext.window.Window',
    xtype: 'batchModifiWindow',
    title : '批量修改商品',
    closeAction: 'hide',
    modal: true,
    resizable :false,
    items:[{
      xtype : 'panel',
      defaults : {
        margin : 15
      },
      items : [
      {
              xtype : 'form',
              layout : 'column',
              bodyStyle: 'border:0;',
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
              bodyStyle: 'border:0;',
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
              bodyStyle: 'border:0;',
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
                buttonText : '选择商品图片文件',
                listeners : {
                  afterrender : function(gird){
                    gird.fileInputEl.set({multiple:'multiple'});
                    var el = gird.getEl();

                    var maxSize = 1000;
                    var fileSize =  gird.getActionEl().dom.size,
                        button = gird.up('form').down('#uploadfile');

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
              bodyStyle: 'border:0;',
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
              bodyStyle: 'border:0;',
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

