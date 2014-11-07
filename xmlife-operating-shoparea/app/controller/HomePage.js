Ext.define('XMLifeOperating.controller.HomePage', {
	extend: 'Ext.app.Controller',

	views: [
        'centralPointManage.homePage.HomePage',
        'centralPointManage.homePage.VersionAdd',
        'centralPointManage.homePage.ModuleAdd',
        'centralPointManage.homePage.ModuleCopy',
        'centralPointManage.homePage.ModuleDetailEdit'
    ],

    stores: ['HomePage', 'HomePageModuleList', 'HomePageModuleDetail', 'HomePageUrlType', 'HomePagePreview'],

	models: ['HomePage'],

	refs: [{
        ref: 'homePage',
        selector: 'homePage',
        autoCreate: true
    },{
        ref: 'versionAdd',
        xtype: 'versionAdd',
        autoCreate: true
    },{
        ref: 'moduleAdd',
        xtype: 'moduleAdd',
        autoCreate: true
    },{
        ref: 'moduleCopy',
        xtype: 'moduleCopy',
        autoCreate: true
    },{
        ref: 'moduleDetailEdit',
        xtype: 'moduleDetailEdit',
        autoCreate: true
    }],

	init: function(){
        var me = this;
        this.layoutId = '';
        this.moduleId = '';
        this.isBanner = false;

		this.control({
            // 加载版本列表，并自动选择
			'homePage': {
                onShowView: function() {
                    this.areaId = XMLifeOperating.generic.Global.current_operating;
                    var store = this.getHomePageStore();
                    store.getProxy().extraParams = {
                        areaId: this.areaId
                    };
                    store.load({
                        callback: function(records) {
                            if(!records || records.length == 0) return;
                            //初始化选择启用项
                            var model = Ext.ComponentQuery.query('#versionList')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0, n = records.length; i < n; i++) {
                                if(records[i].get('enable') == true){
                                    model.select(i, true);
                                }
                            }
                        }
                    });
                }
			},
            // 添加版本
            'homePage #addVersion': {
                click: function() {
                    var win = this.getVersionAdd();
                    win.show();
                }
            },
            // 添加版本保存
            'versionAdd #save': {
                click: function() {
                    var win = this.getVersionAdd(),
                        form = win.down('form').getForm();
                        version = win.down('#version').getValue();

                    if (form.isValid()) {
                        sendRequest('homepage',{
                            areaId: this.areaId,
                            version: version
                        }, '添加版本', '添加版本成功', '添加版本失败', function() {
                            var store = me.getHomePageStore();
                            store.load();
                            win.close();
                        });
                    }
                }
            },
            // 删除版本
            'homePage #delVersion': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        version = record.get('version'),
                        layoutId = record.get('id');

                    Ext.MessageBox.confirm('确认删除', 
                        Ext.String.format("确定删除版本 '{0}' 吗？", version),
                        function(result) {
                            if (result == 'yes') {
                                var url = 'homepage/' + layoutId;
                                sendDeleteRequest(url, {
                                    layoutId: layoutId
                                },
                                '删除线路', '成功删除线路', '删除线路失败', function(response) {
                                    me.getHomePageStore().load();
                                });
                            }
                        }
                    );
                }
            },
            // 启用版本
            'homePage #setEnable': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e));
                    sendPutRequest('homepage/enable',{
                        areaId: this.areaId,
                        layoutId: record.get('id')
                    }, '设置启用', '启用成功', '启用失败', function() {
                        var store = me.getHomePageStore();
                        store.load();
                    });
                    //e.stopPropagation();
                }
            },
            // 选择版本，展示大积木列表
            'homePage #versionList': {
                selectionchange: function(model, selected) {
                    if(selected.length == 0) return;
                    var record = selected[0].data;
                    //保存当前版本id
                    this.layoutId = record.id;

                    var store = this.getHomePageModuleListStore();
                    store.getProxy().extraParams = {
                        layoutId: this.layoutId
                    }
                    store.load();
                }

            },
            // 大积木选择, 展示详情
            'homePage #moduleList': {
                selectionchange: function(model, selected) {
                    if(selected.length == 0) return;
                    var record = selected[0].data;
                    //保存当前积木id
                    this.moduleId = record.id;
                    this.isBanner = record.type == 'TYPE0' ? true : false;
                    //只当banner才需要新建
                    this.getHomePage().down('#addModuleItem').setDisabled(!this.isBanner);

                    var store = this.getHomePageModuleDetailStore();
                    store.getProxy().extraParams = {
                        moduleId: this.moduleId
                    }
                    store.load();
                }
            },
            // 大积木排序
            'homePage #moduleList dataview': {
                beforedrop: function(node, data, dropRec, dropPosition) {
                  if(dropRec.index == 0 || data.records[0].type == 'TYPE0') return false;
                },
                drop: function(node, data, dropRec, dropPosition) {
                    var store = this.getHomePageModuleListStore();
                    var moduleIds = [];
                    for(var i=0, n=store.totalCount; i<n; i++){
                        var record = store.getAt(i);
                        record.set('order',i)
                        moduleIds.push(record.get('id'));
                    }
                    sendPutRequest('homepage/setOrder',{
                        layoutId: this.layoutId,
                        moduleIds: moduleIds
                    }, '设置启用', '启用成功', '启用失败', function() {
                        store.load();
                    });
                }
            },
            // 添加大积木
            'homePage #addModule': {
                click: function() {
                    var win = this.getModuleAdd();
                    win.show();
                }
            },
            // 新建大积木保存
            'moduleAdd #save': {
                click: function() {
                    var win =  this.getModuleAdd(),
                        form =  win.down('form').getForm(),
                        values = form.getValues();

                    values.layoutId = this.layoutId;

                    if (form.isValid()) {
                        sendRequest('homepage/createModule', values, '添加大积木', '大积木添加成功', '大积木添加失败', function() {
                            me.getHomePageModuleListStore().load();
                            win.close();
                        });
                    }
                }
            },
            // copy大积木
            'homePage #copyModule': {
                click: function() {
                    var win = this.getModuleCopy();
                    win.show();
                }
            },
            // 删除大积木
            'homePage #delModule': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        name = record.get('name'),
                        moduleId = record.get('id');

                    Ext.MessageBox.confirm('确认删除', 
                        Ext.String.format("确定删除大积木 '{0}' 吗？", name),
                        function(result) {
                            if (result == 'yes') {
                                sendDeleteRequest('homepage/deleteModule', {
                                    moduleId: moduleId
                                },
                                '删除大积木', '删除大积木成功', '删除大积木失败', function(response) {
                                    me.getHomePageModuleListStore().load();
                                });
                            }
                        }
                    );
                }
            },
            // 新建小积木（banner）
            'homePage #addModuleItem': {
                click: function() {
                    var win =  this.getModuleDetailEdit();
                    win.show();

                    var store = this.getHomePageModuleDetailStore();
                    if(store.length >= 5) {
                        this.setDisabled(true);
                    }
                }
            },
            // 编辑小积木
            'homePage #editModuleItem': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var win =  this.getModuleDetailEdit(),
                        form = win.down('form').getForm(),
                        record = view.getRecord(view.findTargetByEvent(e));

                    form.loadRecord(record);
                    win.show();
                }
            },
            // 上传图片
            'moduleDetailEdit filefield[name="moduleUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt,
                        textfield = uploadfile.previousNode().previousNode();

                    uploadImage(form, textfield);
                }
            },
            // 保存编辑小积木
            'moduleDetailEdit #save': {
                click: function() {
                    var win =  this.getModuleDetailEdit(),
                        form =  win.down('form').getForm();

                    if (form.isValid()) {
                        var values = form.getValues(),
                            record = form.getRecord(),
                            post_url = '';
                        //新建时无index
                        if(record) {
                            values.index = record.index;
                            post_url = 'homepage/updateModuleItem';
                        } else {
                            post_url = 'homepage/createModuleItem';
                        }
                        values.moduleId = this.moduleId;

                        sendPutRequest(post_url, values, '属性编辑', '属性编辑成功', '属性编辑失败', function() {
                            me.getHomePageModuleDetailStore().load();
                            win.close();
                        });
                    }
                }
            },
            // 预览首页
            'homePage #previewPage': {
                click: function() {
                    var store = this.getHomePagePreviewStore();
                    store.getProxy().extraParams = {layoutId: this.layoutId};
                    store.load({
                        callback: function(records) {
                            if(!records || records.length == 0) return;
                            var res_url = XMLifeOperating.generic.Global.URL.res + '/image/id-',
                                html = '';

                            for (var i = 0, n = records.length; i < n; i++) {
                                var data = records[i].data,
                                    type = data.type,
                                    items = data.items;

                                if(!(items && items.length)){
                                    Ext.Msg.alert('提示信息','模块 “'+ data.name +'“ 缺少图片，暂无法预览！');
                                    return;
                                } 
                                console.log(data);
                                switch (type){
                                    case 'TYPE0':
                                        html += '<div style="width:100%"><a href="'+ items[0].url +'"><img src="'+ res_url + items[0].image +'" width="100%" /></a></div>';
                                        break;

                                    case 'TYPE1':
                                        var str = '<ul class="x-clear" style="padding:0;">',
                                            borderRB = 'border-right:1px solid #eee;border-bottom:1px solid #eee;',
                                            borderLT = 'border-left:1px solid #eee;border-top:1px solid #eee;';

                                        for (var j=0, n=items.length; j<n; j++) {
                                            var titles = j==0? '<div style="position:absolute;top:20px;left:20px;font-family:\'Microsoft Yahei\';line-height:10px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;color:gray;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                                            str += '<li style="float:left;position:relative;width:'+ (j==0? '50%':'25%') +';border:1px solid #fff;'+ (j==1? borderRB:'') + (j==4? borderLT:'') + '">'+ titles +'<a href="'+ items[j].url +'"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                                        }
                                        str += '</ul>'
                                        html += str;
                                        break;

                                    case 'TYPE2':
                                        var str = '<ul class="x-clear" style="padding:0;">',
                                            borderRB = 'border-right:1px solid #eee;border-bottom:1px solid #eee;',
                                            borderLT = 'border-left:1px solid #eee;border-top:1px solid #eee;';

                                        for (var j=0, n=items.length; j<n; j++) {
                                            var titles = j==0? '<div style="position:absolute;top:20px;left:20px;font-family:\'Microsoft Yahei\';line-height:10px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;color:gray;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:red;">'+ items[j].titles[2]+'</p></div>' : '';
                                            str += '<li style="float:left;position:relative;width:'+ (j==0? '50%':'25%') +';border:1px solid #fff;'+ (j==1? borderRB:'') + (j==4? borderLT:'') + '">'+ titles +'<a href="'+ items[j].url +'"><img src="'+ res_url + items[j].image +'" width="100%" /></a></li>';
                                        }
                                        str += '</ul>'
                                        html += str;
                                        break;

                                    default:
                                        break;
                                }
                            }
                            Ext.get('homePreviewList').setHTML(html);
                        }
                    });
                }

            }
		});

	}

});