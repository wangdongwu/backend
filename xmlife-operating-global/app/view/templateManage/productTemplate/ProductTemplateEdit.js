Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateEdit', {
    extend: 'Ext.window.Window',
    xtype: 'productTemplateEdit',
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 450,
    resizable: false,
    layout: 'fit',
    buttons: [{
        text: '保存',
        itemId: 'btnSave'
    }, {
        text: '取消',
        itemId: 'btnCancel',
        handler: function() {
            this.up('productTemplateEdit').close();
        }
    }],

    items: {
        xtype: 'form',
        itemId: 'productTemplateForm',
        layout: 'anchor',
        bodyPadding: 10,
        border: false,
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'textfield',
            name: 'name1',
            fieldLabel: '商品名称1',
            labelWidth: 90,
            allowBlank: false,
            validator: function(str) {
                /*var len = getStrLength(str);
                if(len > 14){
                    return '商品名称最大长度为7';
                }else{
                    return true;
                }*/
                var value = str;
                var length = 0;
                for (var i = 0, len = value.length; i < len; i++) {
                    var chart = value.charCodeAt(i);

                    if (chart == 32 || chart == 12288) {
                        length = length + 0;
                    } else if (chart >= 0 && chart <= 255) {
                        length = length + 1;
                    } else {
                        length = length + 2;
                    }
                }
                if (length > 14) {
                    return '店铺主名称最大长度为7个汉字或14个字母'
                } else {
                    return true
                }

            },
            maxLengthText: '商品名称最大长度为7',
        }, {
            xtype: 'textfield',
            name: 'name2',
            fieldLabel: '商品名称2',
            labelWidth: 90,
            validator: function(str) {
                /*var len = getStrLength(str);
                if(len > 14){
                    return '商品名称最大长度为7';
                }else{
                    return true;
                }*/
                var value = str;
                var length = 0;
                for (var i = 0, len = value.length; i < len; i++) {
                    var chart = value.charCodeAt(i);

                    if (chart == 32 || chart == 12288) {
                        length = length + 0;
                    } else if (chart >= 0 && chart <= 255) {
                        length = length + 1;
                    } else {
                        length = length + 2;
                    }
                }
                if (length > 14) {
                    return '店铺主名称最大长度为7个汉字或14个字母'
                } else {
                    return true
                }
            },
            maxLengthText: '商品名称最大长度为7',
        }, {
            xtype: 'textfield',
            name: 'name3',
            fieldLabel: '商品名称3',
            labelWidth: 90,
            validator: function(str) {
                /*var len = getStrLength(str);
                if(len > 14){
                    return '商品名称最大长度为7';
                }else{
                    return true;
                }*/
                var value = str;
                var length = 0;
                for (var i = 0, len = value.length; i < len; i++) {
                    var chart = value.charCodeAt(i);

                    if (chart == 32 || chart == 12288) {
                        length = length + 0;
                    } else if (chart >= 0 && chart <= 255) {
                        length = length + 1;
                    } else {
                        length = length + 2;
                    }
                }
                if (length > 14) {
                    return '店铺主名称最大长度为7个汉字或14个字母'
                } else {
                    return true
                }
            },
            maxLengthText: '商品名称最大长度为7',

        }, {
            xtype: 'textfield',
            name: 'barCode',
            fieldLabel: '条形码',
            labelWidth: 90,
            itemId: 'barCodeId'
        }, {
            xtype: 'textfield',
            name: 'skuId',
            fieldLabel: '商品编码',
            labelWidth: 90,
            allowBlank: false,
            itemId: 'skuIdId'
        }, {
            xtype: 'textfield',
            name: 'tag',
            fieldLabel: '标签',
            labelWidth: 90,
            blankText: '请输入标签，之间用空格隔开',
        }, {
            xtype: 'textfield',
            name: 'rank',
            fieldLabel: 'rank',
            labelWidth: 90,
            allowBlank: false,
            itemId: 'rank'
        }, {
            xtype: 'textfield',
            name: 'rank2',
            fieldLabel: 'rank2',
            labelWidth: 90,
            allowBlank: false,
            itemId: 'rank2'
        }, {
            xtype: 'filefield',
            fieldLabel: '上传图片',
            emptyText: '请选择图片',
            name:'pictures',
            itemId: 'productTemplateUploadfile',
            listeners: {
                afterrender: function(cmp) {
                    cmp.fileInputEl.set({
                        multiple: 'multiple'
                    });
                },
                change: function(value) {
                    var me = this;
                    var files = value.fileInputEl.dom.files;
                    var length = files.length > 6 ? 6 : files.length;
                    var arraytemp = [];
                    var reg = /^[A-Z]\d{9}\-\d{1}$/;
                    for (var i = 0; i < length; i++) {
                        if (reg.test(files[i].name.split('.')[0])) {
                            arraytemp.push(files[i].name);
                        } else {
                            Ext.Msg.alert('提示', '图片' + files[i].name + '命名错误！');
                            return
                        }
                    }
                    var str = arraytemp.join(';');
                    me.inputEl.dom.value = '共' + files.length + '张图片：' + str;
                }
            }
        }, {
            xtype: 'textarea',
            name: 'desc',
            fieldLabel: '商品描述',
            labelWidth: 90,
            minLength: 2,
            minLengthText: '商品描述最小长度为2',
            validator: function(str) {
                var len = getStrLength(str);
                if (len > 400) {
                    return '商品名称最大长度为200';
                } else {
                    return true;
                }
            }
        }]
    }
});
