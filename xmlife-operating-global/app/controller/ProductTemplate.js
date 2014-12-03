Ext.define('XMLifeOperating.controller.ProductTemplate', {
    extend: 'Ext.app.Controller',

    views: ['templateManage.productTemplate.ProductTemplateList',
        'templateManage.productTemplate.ProductTemplateEdit',
        'templateManage.productTemplate.batchModifiWindow',
        'templateManage.productTemplate.batchAddWindow'
    ],

    stores: ['ProductTemplatePageSearch',
        'ProductUnit',
        'ProductTemplateRoots',
        'ProductTemplateGetByCategoryId'
    ],

    models: ['ProductTemplatePageSearch',
        'ProductUnit',
        'ProductTemplateRoots',
        'ProductTemplateGetByCategoryId'
    ],

    refs: [{
        ref: 'productTemplateList',
        selector: 'productTemplateList',
        xtype: 'productTemplateList',
        autoCreate: true
    }, {
        ref: 'editWindow',
        selector: 'productTemplateEdit',
        xtype: 'productTemplateEdit',
        autoCreate: true
    }, {
        ref: 'batchModifiWindow',
        selector: 'batchModifiWindow',
        xtype: 'batchModifiWindow',
        autoCreate: true
    }, {
        ref: 'batchAddWindow',
        selector: 'batchAddWindow',
        xtype: 'batchAddWindow',
        autoCreate: true
    }, {
        ref: 'keyword',
        selector: '#keyword',
    }, {
        ref: 'dataview',
        selector: '#dataview'
    }],

    init: function() {
        var me = this;

        this.control({
            'productTemplateList': {
                added: function() {

                }
            },
            'productTemplateList #batchModifi': {
                click: function() {
                    this.getBatchModifiWindow().show();
                }
            },
            'productTemplateList #batchAdd': {
                click: function() {
                    this.getBatchAddWindow().show();
                }
            },
            'productTemplateList #add': {
                click: function() {
                    var cClass = this.getProductTemplatePageSearchModel();
                    var productTemplate = new cClass();
                    var win = this.getEditWindow();
                    win.down('#barCodeId').setDisabled(false);
                    win.down('#skuIdId').setDisabled(false);
                    win.down('form').loadRecord(productTemplate);
                    win.show();
                }
            },
            'productTemplateList #productTemplateTree': {
                beforeitemexpand: function(node, opts) {
                    var store = node.store;
                    var id = node.data.id
                    if (node.data.leaf == false) { //非子节点
                        var proxy = node.store.getProxy();
                        if (proxy.proxyConfig != 'producttemplate/subs') {
                            proxy.proxyConfig = 'producttemplate/subs';
                            store.setProxy({
                                type: 'ajax',
                                url: XMLifeOperating.generic.Global.URL.biz + 'producttemplate/subs',
                                extraParams: {
                                    parentId: id
                                }
                            });
                        };
                    } else { //子节点
                        return false
                    }
                },
                //view tree视图，record 节点数据， item节点dom ，index 节点顺序 ，e 事件响应， opts view事件
                itemclick: function(view, record, item, index, e, opts) {
                    var me = this;
                    var leaf = record.get('leaf'),
                        grid = me.getProductTemplateList().down('#productTemplateGrid'),
                        picView = me.getProductTemplateList().down('#productTemplatePicView'),
                        pageTool = me.getProductTemplateList().down('#pagetoll');
                    if (leaf) {
                        //叶子
                        var store = me.getProductTemplateGetByCategoryIdStore();
                        var categoryId = record.get('id');

                        if (grid.getStore().storeId != store.storeId) {
                            grid.bindStore(store);
                            picView.bindStore(store);
                            pageTool.bindStore(store);
                        }
                        store.getProxy().extraParams = {
                            categoryId: categoryId
                        }
                        store.loadPage(1, {
                            page: 1,
                            limit: 25,
                            start: 0
                        })
                    } else {
                        return false
                    }
                }

            },
            '#productSearch': {
                click: function() {
                    var me = this;
                    var store = me.getProductTemplatePageSearchStore(),
                        grid = me.getProductTemplateList().down('#productTemplateGrid'),
                        picView = me.getProductTemplateList().down('#productTemplatePicView'),
                        pageTool = me.getProductTemplateList().down('#pagetoll');

                    if (grid.getStore().storeId != store.storeId) {
                        grid.bindStore(store);
                        picView.bindStore(store);
                        pageTool.bindStore(store);
                    }

                    store.getProxy().extraParams = {
                        keyword: me.getKeyword().getValue()
                    }
                    store.loadPage(1, {
                        page: 1,
                        limit: 25,
                        start: 0
                    });

                }
            },
            'productTemplateList #editProductTemplate': {
                click: me.onEdit
            },
            'productTemplateList #detailViewBtn': {
                click: function() {
                    me.switchView(0);
                }
            },
            'productTemplateList #picViewBtn': {
                click: function() {
                    me.switchView(1);
                }
            },
            // dataView内事件
            'productTemplateList #productTemplatePicView': {
                viewready: function(view) {
                    //快速编辑rank
                    view.mon(view.getEl(), {
                        delegate: 'input',
                        mouseover: function(e, t) {
                            Ext.fly(e.target).setStyle('border', '1px solid #eee');
                        }
                    });
                    view.mon(view.getEl(), {
                        delegate: 'input',
                        mouseout: function(e, t) {
                            Ext.fly(e.target).setStyle('border', '1px solid #fff');
                        }
                    });
                    view.mon(view.getEl(), {
                        delegate: 'input',
                        change: function(e, t) {
                            me.saveRank(view, e, Ext.fly(e.target).getValue());
                        }
                    });
                    //修改
                    view.mon(view.getEl(), {
                        delegate: 'img.x-action-col-icon',
                        click: function(e, t) {
                            me.onEdit(view, undefined, undefined, undefined, e);
                        }
                    });
                }
            },
            'productTemplateEdit #btnSave': {
                click: me.saveEditWindow
            },
            'productTemplateEdit #menuitem': {
                click: function() {}
            },
            'batchAddWindow #addProduct': {
                click: function(gird) {
                    me.subForm(gird);
                }
            },
            'batchModifiWindow button': {
                click: function(gird) {
                    me.subForm(gird);
                }
            }
        });

    },
    switchView: function(nth) {
        Ext.getCmp('productTemplateContent').getLayout().setActiveItem(nth);
    },
    subForm: function(gird) {
        var form = gird.up('form').getForm();
        var sessionId = localStorage.getItem('sessionId') || '';
        if (form.isValid()) {
            if (form.url.indexOf('sessionId') < 0) {
                form.url = form.url + '?sessionId=' + sessionId;
            }
            form.submit({
                params: {
                    'sessionId': sessionId
                },
                waitMsg: '正在上传您的文件......',
                success: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                    this.form.getFields().items[0].fileInputEl.set({
                        multiple: 'multiple'
                    });

                },
                failure: function(form, action) {
                    var data = action.response.responseText;
                    console.log(data);
                    this.form.getFields().items[0].fileInputEl.set({
                        multiple: 'multiple'
                    });
                }
            });
        }
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        var productTemplate = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        var names = [];
        if (productTemplate.get('name').indexOf('\n')) {
            names = productTemplate.get('name').split('\n');
        }
        productTemplate.set('name1', names[0]);
        productTemplate.set('name2', names[1]);
        productTemplate.set('name3', names[2]);
        /*win.down('#barCodeId').setDisabled(true);*/
        win.down('#skuIdId').setDisabled(true);
        win.down('form').loadRecord(productTemplate);
        win.show();
    },
    saveRank: function(view, e, rank) {
        var record = view.getRecord(view.findTargetByEvent(e));
        record.set('rank', rank);

        var names = [];
        if (record.get('name').indexOf('\n')) {
            names = record.get('name').split('\n');
        }
        record.set('names', names);

        sendPutRequest('producttemplate/update', record.data, '编辑商品', '成功编辑商品', '编辑商品失败', function() {});
    },
    saveEditWindow: function() {
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            productTemplate = form.getRecord(),
            me = this;

        if (form.isValid()) {
            windowEl.mask('saving');
            form.updateRecord(productTemplate);

            //获取当前视图store（存在多个切换）
            var store = me.getProductTemplateList().down('#productTemplateGrid').getStore(),
                storeId = store.storeId;
            var names = [];
            names.push(productTemplate.get('name1'));
            names.push(productTemplate.get('name2'));
            names.push(productTemplate.get('name3'));
            productTemplate.set('names', names);

            if (productTemplate.get('id') != '' && productTemplate.get('id') != null) {

                var id = productTemplate.get('id');
                //var name = productTemplate.get('name');
                var desc = productTemplate.get('desc');
                var picture = productTemplate.get('picture');
                var unit = productTemplate.get('unit');
                var tag = productTemplate.get('tag');
                var barcode = productTemplate.get('barCode');
                var rank = productTemplate.get('rank');
                var rank2 = productTemplate.get('rank2');
                var sessionId = localStorage.getItem('sessionId') || '';

                form.submit({
                    url: XMLifeOperating.generic.Global.URL.biz + 'producttemplate/update?sessionId=' + sessionId,
                    params: {
                        id: id,
                        sessionId: sessionId,
                        name: names.join('\n')
                    },
                    waitMsg: '正在提交数据',
                    waitTitle: '提示',
                    success: function(form, action) {
                        var resid = action.response.responseText;
                        store.loadPage(1);
                        editWindow.close();
                        windowEl.unmask();
                    },
                    failure: function(form, action) {
                        var resid = action.response.responseText;
                        editWindow.close();
                        if (resid == -99) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '图片命名为:SKUID+"-"+一位数字',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            return;
                        } else if (resid == 175) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '模板命名过长',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        }
                        windowEl.unmask();
                    }
                });

            } else {

                var treeSelected = me.getProductTemplateList().down('#productTemplateTree').getSelectionModel().selected;
                var id = productTemplate.get('id');
                //var name = productTemplate.get('name');
                var desc = productTemplate.get('desc');
                var picture = productTemplate.get('picture');
                var unit = productTemplate.get('unit');
                var tag = productTemplate.get('tag');
                var barCode = productTemplate.get('barCode');
                var skuId = productTemplate.get('skuId');
                var rank = productTemplate.get('rank');
                var rank2 = productTemplate.get('rank2');
                var sessionId = localStorage.getItem('sessionId') || '';

                if (treeSelected.length == 1) {
                    var categoryId = treeSelected.items[0].get('id');
                } else {
                    Ext.MessageBox.show({
                        title: '提示',
                        msg: '添加商品模板请的选择分类',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    windowEl.unmask();
                    return;
                }
                form.submit({
                    url: XMLifeOperating.generic.Global.URL.biz + 'producttemplate?sessionId=' + sessionId,
                    params: {
                        categoryId: categoryId,
                        sessionId: sessionId,
                        name: names.join('\n')
                    },
                    waitMsg: '正在提交数据',
                    waitTitle: '提示',
                    success: function(form, action) {
                        var resid = action.response.responseText;
                        store.loadPage(1);
                        editWindow.close();
                        windowEl.unmask();
                    },
                    failure: function(form, action) {
                        var resid = action.response.responseText;
                        editWindow.close();
                        if (resid == -99) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '图片命名为:SKUID+"-"+一位数字',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            return;
                        } else if (resid == 175) {
                            Ext.MessageBox.show({
                                title: '提示',
                                msg: '模板命名过长',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            return;
                        }
                        windowEl.unmask();
                    }
                });
            }

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
        }
    },
});
