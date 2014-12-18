Ext.define('XMLifeOperating.controller.HomePage', {
    extend: 'Ext.app.Controller',

    views: [
        'centralPointManage.homePage.HomePage',
        'centralPointManage.homePage.VersionAdd',
        'centralPointManage.homePage.VersionEnable',
        'centralPointManage.homePage.ModuleAdd',
        'centralPointManage.homePage.ModuleCopy',
        'centralPointManage.homePage.ModuleDetailEdit'
    ],

    stores: [
        'HomePage', 'HomePageModuleList', 'HomePageModuleCopy', 'HomePageModuleDetail',
        'HomePageModuleRenter', 'HomePagePreview', 'HomePageUrlType', 'HomePageShop', 
        'HomePageCategory', 'HomePageLeafCategory', 'HomePageProduct', 'HomePageFunction',
        'HomePageShopSet', 'HomePagePromotion'
    ],

    models: ['HomePage'],

    refs: [{
        ref: 'homePage',
        selector: 'homePage',
        autoCreate: true
    }, {
        ref: 'versionAdd',
        xtype: 'versionAdd',
        autoCreate: true
    }, {
        ref: 'versionEnable',
        xtype: 'versionEnable',
        autoCreate: true
    }, {
        ref: 'moduleAdd',
        xtype: 'moduleAdd',
        autoCreate: true
    }, {
        ref: 'moduleCopy',
        xtype: 'moduleCopy',
        autoCreate: true
    }, {
        ref: 'moduleDetailEdit',
        xtype: 'moduleDetailEdit',
        autoCreate: true
    }],

    init: function() {
        var me = this;
        this.layoutId = '';
        this.moduleId = '';
        this.moduleType = '';
        this.isRenter = false;

        this.control({
            // 加载版本列表，并自动选择
            'homePage': {
                onShowView: function() {
                    this.areaId = XMLifeOperating.generic.Global.current_operating;

                    this.refreshView('all');

                    var store = this.getHomePageStore();
                    store.getProxy().extraParams = {
                        areaId: this.areaId
                    };
                    store.load({
                        callback: function(records) {
                            if (!records || records.length === 0) return;
                            // 初始化选择启用项
                            var model = Ext.ComponentQuery.query('#versionList')[0].getSelectionModel();
                            model.deselectAll();
                            for (var i = 0, n = records.length; i < n; i++) {
                                if (records[i].get('status') === 1) {
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
                        form = win.down('form').getForm(),
                        version = win.down('#version').getValue();

                    if (form.isValid()) {
                        sendRequest('homepage', {
                            areaId: this.areaId,
                            version: version
                        }, '添加版本', '添加版本成功', '添加版本失败', function() {
                            me.getHomePageStore().load();
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
                                    '删除版本', '删除版本成功', '删除版本失败',
                                    function(response) {
                                        me.getHomePageStore().load();
                                        me.refreshView('all');
                                    });
                            }
                        }
                    );
                }
            },
            // 设置默认版本
            'homePage #setDefault': {
                dblclick: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e));
                    if (record.get('default')) {
                        return;
                    } else {
                        Ext.MessageBox.confirm('默认版本设置', "确定要设置该版本为默认版本吗？",
                            function(result) {
                                if (result == 'yes') {
                                    sendPutRequest('homepage/setDefault', {
                                        areaId: me.areaId,
                                        layoutId: record.get('id')
                                    }, '设置默认版本', '默认版本成功', '默认版本失败', function() {
                                        me.getHomePageStore().load();
                                    });
                                }
                            }
                        );
                    }
                }
            },
            // 取消定时/弹窗设置
            'homePage #setEnable': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e));
                    // 取消定时
                    if (record.get('status') == 2) {
                        sendPutRequest('homepage/cancelTiming', {
                            areaId: this.areaId,
                            layoutId: record.get('id')
                        }, '取消定时', '取消成功', '取消失败', function() {
                            me.getHomePageStore().load();
                        });
                    } else { // 弹出启用设置窗口
                        var win = this.getVersionEnable();
                        win.down('form').getForm().loadRecord(record);
                        win.show();
                    }
                }
            },
            // 编辑定时时间
            'homePage #editTime': {
                click: function(view, rowIndex, colIndex, column, e) {
                    var record = view.getRecord(view.findTargetByEvent(e));
                    if(record.get('startTime')) {
                        var win = this.getVersionEnable(),
                            form = win.down('form').getForm();
                        form.loadRecord(record);
                        win.down('#timeEnable').setValue(1);
                        // 若当前定时正在执行，开始时间不能改
                        if (record.get('status') == 1) {
                            win.down('datefield[name=startTime]').setDisabled(true);
                        }
                        win.show();
                    }
                }
            },
            // 启用类型切换
            'versionEnable #timeEnable': {
                change: function(radio) {
                    var win = this.getVersionEnable();
                    if (radio.getValue()) {
                        Ext.each(win.query('datefield'), function(elem, index) {
                            elem.setVisible(true);
                        });
                    } else {
                        Ext.each(win.query('datefield'), function(elem, index) {
                            elem.setVisible(false);
                        });
                    }
                }
            },
            // 定时时间处理
            'versionEnable datefield': {
                select: function(elem) {
                    var value = elem.getValue(),
                        selDate = Ext.Date.format(value, 'Y-m-d'),
                        curDate = Ext.Date.format(new Date(), 'Y-m-d');
                    // 如果选择是当天，推迟
                    if (selDate == curDate) {
                        value = Ext.Date.add(new Date(), Ext.Date.MINUTE, 30);
                        elem.setValue(value);
                    }
                }
            },
            // 保存启用设置
            'versionEnable #save': {
                click: function() {
                    var win = this.getVersionEnable(),
                        form = win.down('form').getForm(),
                        values = form.getValues(),
                        record = form.getRecord();

                    if (values.type == 1) {
                        if (!form.isValid()) return;
                        if (values.endTime <= values.startTime) {
                            Ext.Msg.alert('错误提示', '结束时间不能小于开始时间！');
                            return;
                        }
                        // 若当前定时正在执行，开始时间disabled后，不会被自动保存，需手动添加进去
                        if (!values.startTime) {
                            values.startTime = record.get('startTime');
                        }
                    }
                    values.areaId = this.areaId;
                    values.layoutId = record.get('id');
                    sendPutRequest('homepage/enable', values, '设置启用', '启用成功', '启用失败', function() {
                        me.getHomePageStore().load();
                        win.close();
                    });
                }
            },
            // 选择版本，展示大积木列表
            'homePage #versionList': {
                selectionchange: function(model, selected) {
                    if (selected.length === 0) return;
                    var record = selected[0].data;
                    //保存当前版本id
                    this.layoutId = record.id;

                    var store = this.getHomePageModuleListStore();
                    store.getProxy().extraParams = {
                        layoutId: this.layoutId
                    };
                    store.load();
                    this.refreshView('detail', 'preview');
                    //灰掉新建小积木
                    this.getHomePage().down('#addModuleItem').setDisabled(true);
                },
                edit: function(editor, e) {
                    var record = e.record;

                    sendPutRequest('homepage', {
                        layoutId: record.get('id'),
                        version: record.get('version')
                    }, '修改名称', '修改名称成功', '修改名称失败', function() {
                        var store = me.getHomePageStore();
                        store.load();
                    });
                }
            },
            // 新建大积木
            'homePage #addModule': {
                click: function() {
                    var win = this.getModuleAdd();
                    win.show();
                }
            },
            // 新建大积木保存
            'moduleAdd #save': {
                click: function() {
                    var win = this.getModuleAdd(),
                        form = win.down('form').getForm(),
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
            // 动态显示已有大积木
            'moduleCopy #versionCombo': {
                select: function(combo) {
                    var layoutId = combo.getValue();
                    var store = this.getHomePageModuleCopyStore();
                    store.load({
                        params: {
                            layoutId: layoutId
                        }
                    });
                }
            },
            // 保持type值于hidden中用以提示
            'moduleCopy #moduleCombo': {
                select: function(combo, records) {
                    var moduleType = records[0].get('type');
                    this.getModuleCopy().down('#moduleType').setValue(moduleType);
                }
            },
            // 保存copy
            'moduleCopy #save': {
                click: function() {
                    var win = this.getModuleCopy(),
                        form = win.down('form'),
                        values = form.getValues();

                    if (form.isValid()) {
                        if (values.type == 'TYPE0') {
                            Ext.MessageBox.confirm('确认拷贝banner', "拷贝banner将会替换当前banner, 你确定吗？",
                                function(result) {
                                    if (result == 'yes') {
                                        sendRequest('homepage/copyModule', {
                                            layoutId: me.layoutId,
                                            moduleId: values.moduleId
                                        }, '拷贝大积木', '拷贝大积木成功', '拷贝大积木失败', function() {
                                            me.getHomePageModuleListStore().load();
                                            win.close();
                                        });
                                    }
                                }
                            );
                        } else {
                            sendRequest('homepage/copyModule', {
                                layoutId: this.layoutId,
                                moduleId: values.moduleId
                            }, '拷贝大积木', '拷贝大积木成功', '拷贝大积木失败', function() {
                                me.getHomePageModuleListStore().load();
                                win.close();
                            });

                        }

                    }
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
                                    '删除大积木', '删除大积木成功', '删除大积木失败',
                                    function(response) {
                                        me.getHomePageModuleListStore().load();
                                        me.refreshView('detail');
                                    });
                            }
                        }
                    );
                }
            },
            // 大积木排序
            'homePage #moduleList dataview': {
                beforedrop: function(node, data, dropRec, dropPosition) {
                    if (dropRec.index === 0 || data.records[0].type == 'TYPE0') return false;
                },
                drop: function(node, data, dropRec, dropPosition) {
                    var store = this.getHomePageModuleListStore();
                    var moduleIds = [];
                    for (var i = 0, n = store.totalCount; i < n; i++) {
                        var record = store.getAt(i);
                        record.set('order', i);
                        moduleIds.push(record.get('id'));
                    }
                    sendPutRequest('homepage/setOrder', {
                        layoutId: this.layoutId,
                        moduleIds: moduleIds
                    }, '大积木排序', '大积木排序成功', '大积木排序失败', function() {
                        store.load();
                    });
                }
            },
            // 大积木选择展示详情、编辑（名称/分割线）
            'homePage #moduleList': {
                selectionchange: function(model, selected) {
                    if (selected.length === 0) return;

                    // 保存当前大积木全局属性
                    var record = selected[0].data;
                    this.moduleId = record.id;
                    this.moduleType = record.type;
                    // 共享全局变量，供小积木列表删除按钮状态判断用
                    XMLifeOperating.generic.Global.isBanner = this.moduleType == 'TYPE0' ? true : false;

                    var win = this.getHomePage();
                    // 只当banner才需要新建
                    win.down('#addModuleItem').setDisabled(!XMLifeOperating.generic.Global.isBanner);

                    // 若当前处理子级列表，模拟点击返回
                    if (this.isRenter) {
                        this.isRenter = false;
                        win.down('#returnModuleItem').el.dom.click();
                    }

                    var store = this.getHomePageModuleDetailStore();
                    store.getProxy().extraParams = {
                        moduleId: this.moduleId
                    };
                    store.load();

                    // banner栏不显示租客
                    if (this.moduleType == 'TYPE0') {
                        win.down('#renterView').hide();
                    } else {
                        win.down('#renterView').show();
                    }
                    
                },
                edit: function(editor, e) {
                    var record = e.record;
                    // 编辑大积木名称
                    if (e.field == 'name') {
                        sendPutRequest('homepage/updateModule', {
                            moduleId: record.get('id'),
                            name: record.get('name')
                        }, '修改名称', '修改名称成功', '修改名称失败', function() {
                            me.getHomePageModuleListStore().load();
                        });

                    // 编辑分割线
                    } else if (e.field == 'needLine'){
                        if (record.get('type') != 'TYPE14') return;

                        var url  = record.get('needLine') ? 'homepage/showLine' : 'homepage/hiddenLine';
                        sendPutRequest(url, {
                            moduleId: record.get('id')
                        }, '修改名称', '修改名称成功', '修改名称失败', function() {
                            me.getHomePageModuleListStore().load();
                        });
                    }            
                }
            },
            // 返回小积木列表
            'homePage #returnModuleItem': {
                click: function() {
                    var win = this.getHomePage(),
                        store = this.getHomePageModuleDetailStore();

                    this.isRenter = false;

                    win.down('#moduleDetail').bindStore(store);
                    win.down('#moduleDetail').setTitle('小积木列表');
                    // 隐藏切换column项
                    win.down('#renterTime').hide();
                    win.down('#renterView').show();
                    win.down('#returnModuleItem').hide();
                    win.down('#addModuleItem').setText('新建小积木').setDisabled(!XMLifeOperating.generic.Global.isBanner);
                }
            },
            // 显示小积木租客列表
            'homePage #renterView': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var win = this.getHomePage(),
                        record = view.getRecord(view.findTargetByEvent(e)),
                        store = this.getHomePageModuleRenterStore();

                    store.getProxy().extraParams = {
                        moduleId: this.moduleId,
                        index: rowIndex
                    };
                    store.load();

                    // 设置当前是否为租客
                    this.isRenter = true;
                    this.renterParentIndex = record.get('index'); 

                    win.down('#moduleDetail').bindStore(store);
                    win.down('#moduleDetail').setTitle(this.renterParentIndex + '号小积木-租客列表');
                    win.down('#renterTime').show();
                    win.down('#renterView').hide();
                    win.down('#returnModuleItem').show();
                    win.down('#addModuleItem').setText('新建租客').setDisabled(false);
                }
            },
            // 新建小积木(现只有banner用)/租客
            'homePage #addModuleItem': {
                click: function(button, e) {
                    var win = this.getModuleDetailEdit(),
                        store = this.getHomePageModuleDetailStore();
                    if (store.totalCount >= 6) {
                        Ext.Msg.alert('信息提示', 'banner最多只能建6个！');
                        return;
                    }

                    // 若是租客，需手动合成租赁位置combo store
                    if (this.isRenter) {
                        var records = store.data.items,
                            data = [];
                        for (var i in records) {
                            data.push({
                                name: records[i].get('index') + '号小积木',
                                index: records[i].get('index')
                            })
                        }

                        var renterIndexStore = Ext.create('Ext.data.Store', {
                            fields: ['name', 'index'],
                            data: data
                        });
                        win.down('combo[name=index]').bindStore(renterIndexStore).setValue(this.renterParentIndex);
                    }

                    // 显示两行租客表单选项
                    win.down('#renterTime').setVisible(this.isRenter);
                    win.down('datefield[name=startTime]').setDisabled(!this.isRenter);
                    win.down('datefield[name=endTime]').setDisabled(!this.isRenter);
                    win.down('combo[name=index]').setDisabled(!this.isRenter);
                    
                    //显示图片大小提示
                    var index = this.isRenter ? this.renterParentIndex : 0;
                    var size = this.getItemSize(this.moduleType, index);
                    win.down('#picSizeTip').setText('（提示：尺寸' + size + '，大小100K以内）');

                    win.show();
                }
            },
            // 编辑、删除小积木/租客
            'homePage #editModuleItem': {
                click: function(view, item, rowIndex, colIndex, e) {
                    var record = view.getRecord(view.findTargetByEvent(e)),
                        targetClass = e.target.getAttribute('class');

                    // 编辑
                    if (targetClass.indexOf('action-edit') >= 0) {
                        var win = this.getModuleDetailEdit(),
                            form = win.down('form').getForm();

                        // 若是租客，需手动合成租赁位置combo store
                        if (this.isRenter) {
                            var records = this.getHomePageModuleDetailStore().data.items,
                                data = [];
                            for (var i in records) {
                                data.push({
                                    name: records[i].get('index') + '号小积木',
                                    index: records[i].get('index')
                                })
                            }
                            var renterIndexStore = Ext.create('Ext.data.Store', {
                                fields: ['name', 'index'],
                                data: data
                            });
                            win.down('combo[name=index]').bindStore(renterIndexStore);
                        }

                        // 显示两行租客表单选项
                        win.down('#renterTime').setVisible(this.isRenter);
                        win.down('datefield[name=startTime]').setDisabled(!this.isRenter);
                        win.down('datefield[name=endTime]').setDisabled(!this.isRenter);
                        win.down('combo[name=index]').setDisabled(!this.isRenter);

                        form.loadRecord(record);
                        //初始化选择及下拉状态
                        var combo = win.down('combo[name=urlType]');
                        combo.fireEvent('select', combo, 'isInit');
                        //显示图片大小提示
                        var index = this.isRenter ? this.renterParentIndex : rowIndex;
                        var size = this.getItemSize(this.moduleType, index);
                        win.down('#picSizeTip').setText('（提示：尺寸' + size + '，大小100K以内）');
                        win.show();

                    // 删除
                    } else if (targetClass.indexOf('action-del') >= 0) {
                        Ext.MessageBox.confirm('确认删除',
                            Ext.String.format("您确定要删除 '{0}' 吗？", record.get('name')),
                            function(result) {
                                if (result == 'yes') {
                                    if (me.isRenter) {
                                        sendDeleteRequest('homepage/deleteItemRenter', {
                                                renterId: record.get('renterId')
                                            },
                                            '删除租客', '租客删除成功', '租客删除失败',
                                            function(response) {
                                                me.getHomePageModuleRenterStore().load();
                                            }
                                        );

                                    } else {
                                        sendDeleteRequest('homepage/deleteModuleItem', {
                                                moduleId: me.moduleId,
                                                index: record.get('index')
                                            },
                                            '删除小积木', '小积木删除成功', '小积木删除失败',
                                            function(response) {
                                                me.getHomePageModuleDetailStore().load();
                                            }
                                        );
                                    }
                                    
                                }
                            }
                        );
                    }
                }
            },
            // 选择url类型
            'moduleDetailEdit combo[name=urlType]': {
                select: function(combo, flag) {
                    var win = this.getModuleDetailEdit(),
                        record = win.down('form').getRecord(),
                        urlType = combo.getValue();

                    this.urlType = urlType;

                    if (urlType == 'SHOP' || urlType == 'CATEGORY' || urlType == 'SKU') {
                        this.getHomePageShopStore().load({
                            params: {
                                areaId: this.areaId
                            }
                        });

                        // 编辑时，依次触发回填
                        if (record && record.get('shopId')) {
                            var shopCombo = win.down('combo[name=shopId]');
                            shopCombo.fireEvent('select', shopCombo, flag);

                            if (record.get('cid')) {
                                var categoryCombo = win.down('combo[name=cid]');
                                categoryCombo.fireEvent('select', categoryCombo, flag);
                            }
                        }
                        // 处理掉url值，url类型切换时不干扰url值
                        if (record && record.get('url') && flag == 'isInit') {
                            win.down('#urlTextField').setValue('');
                        }
                        win.down('combo[name=fid]').setVisible(false);
                        win.down('combo[name=shopSetId]').setVisible(false);
                        win.down('combo[name=promoId]').setVisible(false);
                        win.down('combo[name=shopId]').setVisible(true);
                        win.down('combo[name=cid]').setVisible(urlType == 'CATEGORY' || urlType == 'SKU');
                        win.down('combo[name=pid]').setVisible(urlType == 'SKU');

                    } else if (urlType == 'SHOPSET') {
                        this.getHomePageShopSetStore().load({
                            params: {
                                areaId: this.areaId
                            }
                        });
                        // 只在初始化时赋值，url类型切换时不用
                        if (record && record.get('url') && flag == 'isInit') {
                            win.down('combo[name=shopSetId]').setValue(record.get('url'));
                            win.down('#urlTextField').setValue('');
                        }

                        win.down('combo[name=shopSetId]').setVisible(true);
                        // 隐藏除此之外的combo
                        var otherCombos = win.query('#comboFieldset combo[name!=shopSetId]');
                        Ext.each(otherCombos, function(elem, i) {
                            elem.setVisible(false);
                        });

                    } else if (urlType == 'FUNCTION') {
                        // 只在初始化时赋值，url类型切换时不用
                        if (record && record.get('url') && flag == 'isInit') {
                            win.down('combo[name=fid]').setValue(record.get('url'));
                            win.down('#urlTextField').setValue('');
                        }

                        win.down('combo[name=fid]').setVisible(true);
                        // 隐藏除功能之外的combo
                        var otherCombos = win.query('#comboFieldset combo[name!=fid]');
                        Ext.each(otherCombos, function(elem, i) {
                            elem.setVisible(false);
                        });

                    } else if (urlType == 'PROMOTION') {
                        this.getHomePagePromotionStore().load({
                            params: {
                                areaId: this.areaId
                            }
                        });
                        // 只在初始化时赋值，url类型切换时不用
                        if (record && record.get('url') && flag == 'isInit') {
                            win.down('combo[name=promoId]').setValue(record.get('url'));
                            win.down('#urlTextField').setValue('');
                        }

                        win.down('combo[name=promoId]').setVisible(true);
                        // 隐藏除功能之外的combo
                        var otherCombos = win.query('#comboFieldset combo[name!=promoId]');
                        Ext.each(otherCombos, function(elem, i) {
                            elem.setVisible(false);
                        });
                    }

                    win.down('#comboFieldset').setVisible(urlType != 'HTML');
                    win.down('#urlTextField').setVisible(urlType == 'HTML');
                }
            },
            // 选择店铺
            'moduleDetailEdit combo[name=shopId]': {
                select: function(combo, flag) {
                    var shopId = combo.getValue(),
                        win = this.getModuleDetailEdit(),
                        store = null;

                    if (this.urlType != 'SHOP') {

                        if (this.urlType == 'CATEGORY') {
                            store = me.getHomePageCategoryStore();
                        } else if (this.urlType == 'SKU') {
                            store = me.getHomePageLeafCategoryStore();
                        }
                        store.load({
                            params: {
                                shopId: shopId
                            }
                        });

                        // 选择父级下拉，清空之前选择（初始化时除外）
                        if (flag != 'isInit') {
                            win.down('combo[name=cid]').setValue('');
                            win.down('combo[name=pid]').setValue('');
                        }
                        win.down('combo[name=cid]').bindStore(store);
                    }
                }
            },
            // 选择货架
            'moduleDetailEdit combo[name=cid]': {
                select: function(combo, flag) {
                    if (this.urlType == 'SKU') {
                        var cid = combo.getValue(),
                            win = this.getModuleDetailEdit(),
                            store = me.getHomePageProductStore();

                        store.load({
                            params: {
                                categoryId: cid
                            }
                        });
                        if (flag != 'isInit') win.down('combo[name=pid]').setValue('');
                    }
                }
            },
            // 定时时间处理
            'moduleDetailEdit datefield': {
                select: function(elem) {
                    var value = elem.getValue(),
                        selDate = Ext.Date.format(value, 'Y-m-d'),
                        curDate = Ext.Date.format(new Date(), 'Y-m-d');
                    // 如果选择是当天，推迟
                    if (selDate == curDate) {
                        value = Ext.Date.add(new Date(), Ext.Date.MINUTE, 30);
                        elem.setValue(value);
                    }
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
            // 保存小积木
            'moduleDetailEdit #save': {
                click: function() {
                    var win = this.getModuleDetailEdit(),
                        form = win.down('form').getForm();

                    if (form.isValid()) {
                        var values = form.getValues(),
                            record = form.getRecord();

                        values.moduleId = this.moduleId;

                        // 其它几种类型都置于url中传给后端
                        switch (this.urlType) {
                            case 'SHOPSET':
                                values.url = values.shopSetId;
                                break;
                            case 'SHOP':
                                values.url = values.shopId;
                                break;
                            case 'CATEGORY':
                                values.url = values.cid;
                                break;
                            case 'SKU':
                                values.url = values.pid;
                                break;
                            case 'FUNCTION':
                                values.url = values.fid;
                                break;
                            case 'PROMOTION':
                                values.url = values.promoId;
                                break;
                        }

                        if (this.urlType != 'HTML' && !values.url) {
                            Ext.Msg.alert('验证信息', 'url下拉有一项未选择，请选择完整。');
                            return;
                        }

                        // 小积木/租客 (编辑、保存)
                        if (record) {
                            if (this.isRenter) {
                                values.renterId = record.get('renterId');
                                sendPutRequest('homepage/updateItemRenter', values, '修改提示', '修改成功！', '修改失败！', function() {
                                    me.getHomePageModuleRenterStore().load();
                                    win.close();
                                });

                            } else {
                                // 编辑时要传index，新建时无
                                values.index = record.index;
                                sendPutRequest('homepage/updateModuleItem', values, '修改提示', '修改成功！', '修改失败！', function() {
                                    me.getHomePageModuleDetailStore().load();
                                    win.close();
                                });
                            }
                        } else {
                            if (this.isRenter) {
                                sendRequest('homepage/createItemRenter', values, '新建提示', '新建成功！', '新建失败！', function() {
                                    me.getHomePageModuleRenterStore().load();
                                    win.close();
                                });

                            } else {
                                sendRequest('homepage/createModuleItem', values, '新建提示', '新建成功！', '新建失败！', function() {
                                    me.getHomePageModuleDetailStore().load();
                                    win.close();
                                });
                            }
                        }
                    }
                }
            },
            // 小积木排序
            'homePage #moduleDetail dataview': {
                drop: function(node, data, dropRec, dropPosition) {
                    var store = this.getHomePageModuleDetailStore();
                    var indexs = [];
                    for (var i = 0, n = store.totalCount; i < n; i++) {
                        var record = store.getAt(i);
                        indexs.push(record.get('index'));
                    }
                    sendPutRequest('homepage/setItemOrder', {
                        indexs: indexs,
                        moduleId: this.moduleId
                    }, '小积木', '小积木成功', '小积木失败', function() {
                        store.load();
                    });
                }
            },
            // 预览首页
            'homePage #previewPage': {
                click: function() {
                    var store = this.getHomePagePreviewStore();
                    store.getProxy().extraParams = {
                        layoutId: this.layoutId
                    };
                    store.load({
                        callback: me.renderHomePage
                    });
                }

            }
        });
    },
    // 中心、版本切换时，刷新视图
    refreshView: function(target, view) {
        if (target == 'all' || target == 'list') {
            this.getHomePageModuleListStore().load({
                params: {
                    layoutId: ''
                }
            });
        }
        if (target == 'all' || target == 'detail') {
            // 当停留在二级页面租客时，清空
            if (this.isRenter) {
                this.isRenter = false;
                this.getHomePage().down('#returnModuleItem').el.dom.click();
            }
            this.getHomePageModuleDetailStore().load({
                params: {
                    moduleId: ''
                }
            });
        }
        if (target == 'all' || view == 'preview') {
            setTimeout(function() {
                Ext.get('homePreviewList').setHTML('<p style="text-align:center;">当前暂无预览</p>');
            }, 300);
        }
    },
    // 获取各类型大小，以提示
    getItemSize: function(type, index) {
        var sizes = {
            'TYPE0': ['640x320', '640x320', '640x320', '640x320', '640x320', '640x320'],
            'TYPE1': ['326x360', '180x180', '180x180', '180x180', '180x180'],
            'TYPE2': ['326x360', '360x180', '360x180'],
            'TYPE3': ['240x228', '240x228', '240x228'],
            'TYPE4': ['480x228', '240x228'],
            'TYPE5': ['240x228', '480x228'],
            'TYPE6': ['676x180'],
            'TYPE7': ['326x180', '326x180'],
            'TYPE10': ['240x96', '240x96', '240x96'],
            'TYPE11': ['100x144', '100x144', '100x144', '100x144', '100x144'],
            'TYPE12': ['388x360', '360x168', '168x168', '168x168'],
            'TYPE13': ['无'],
            'TYPE14': ['336x168', '336x168', '无', '无', '无', '无', '无', '无'],
            'TYPE15': ['360x144', '360x144']
        };

        if (type && sizes[type]) {
            return sizes[type][index];
        }
    },
    // 渲染预览首页
    renderHomePage: function(records) {
        if (!records || records.length === 0) return;

        var res_url = XMLifeOperating.generic.Global.URL.res + '/image/id-',
            html = '';

        var borderT = 'border-top:1px solid #eee;',
            borderR = 'border-right:1px solid #eee;',
            borderB = 'border-bottom:1px solid #eee;',
            borderL = 'border-left:1px solid #eee;',
            wrapCss = 'width:100%;padding:0;font-family:\'Microsoft Yahei\';line-height:9px;';

        for (var i = 0, n = records.length; i < n; i++) {
            var data = records[i].data,
                type = data.type,
                items = data.items,
                str = '',
                titles = '',
                j = 0,
                m = 0;

            if (!(items && items.length) && type != 'TYPE8' && type != 'TYPE9') {
                Ext.Msg.alert('提示信息', '模块 “' + data.name + '“ 缺少图片，暂无法预览！');
                return;
            }

            switch (type) {
                case 'TYPE0':
                    html += '<div style="width:100%">' + (items[0].url ? '<a href="' + items[0].url + '" target="_blank">' : '') + '<img src="' + res_url + items[0].image + '" width="100%" />' + (items[0].url ? '</a>' : '') + '</div>';
                    break;

                case 'TYPE1':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        titles = j === 0 ? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="margin-left:-10px;font-size:10px;-webkit-transform:scale(0.8);color:#999;">' + items[j].titles[1] + '</p><p style="font-size:12px;color:#F86125;">' + items[j].titles[2] + '</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '50%' : '25%') + ';border:1px solid #fff;' + (j == 1 ? borderR + borderB : '') + (j == 2 ? borderB : '') + (j == 3 ? borderR : '') + '">' + titles + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE2':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        titles = j === 0 ? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="margin-left:-10px;font-size:10px;-webkit-transform:scale(0.8);color:#999;">' + items[j].titles[1] + '</p><p style="font-size:12px;color:#F86125;">' + items[j].titles[2] + '</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '50%' : '50%') + ';border:1px solid #fff;' + (j === 1 ? borderB : '') + '">' + titles + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE3':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '33%' : '33%') + ';border:1px solid #fff;' + (j === 0 || j == 1 ? borderR : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE4':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '66%' : '33%') + ';border:1px solid #fff;' + (j === 0 ? borderR : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE5':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '33%' : '66%') + ';border:1px solid #fff;' + (j === 0 ? borderR : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE6':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //var titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '100%' : '100%') + ';border:1px solid #fff;' + (j === 0 ? borderR : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE7':
                    str = '<ul class="x-clear" style="' + wrapCss + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '49%' : '49%') + ';border:1px solid #fff;' + (j === 0 ? 'margin-right:2%;' : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE8':
                    html += '<p style="margin:0;' + (i > 1 ? borderT : '') + '">&nbsp;</p>';
                    break;

                case 'TYPE9':
                    html += '<p style="margin:0;">&nbsp;</p>';
                    break;

                case 'TYPE10':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '33%' : '33%') + ';border:1px solid #fff;' + (j === 0 || j == 1 ? borderR : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE11':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        str += '<li style="float:left;position:relative;padding:5px;width:20%;border:1px solid #fff;">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE12':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        titles = j === 0 ? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="margin-left:-10px;font-size:10px;-webkit-transform:scale(0.8);color:#999;">' + items[j].titles[1] + '</p><p style="font-size:12px;color:#F86125;">' + items[j].titles[2] + '</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '50%' : (j === 1 ? '50%' : '25%')) + ';border:1px solid #fff;' + (j === 1 ? borderB : '') + '">' + titles + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE13':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT + borderB : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        titles = j === 0 ? '<div style="height:35px;padding-left:10px;"><p style="text-align:left;line-height:35px;font-size:12px;font-weight:bold;color:#6FAB38;">' + items[j].titles[0] + '<span style="float:right;font-size:10px;font-weight:normal;-webkit-transform:scale(0.8);color:#F86125;">'+ (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + items[j].titles[1] +  (items[j].url ? '</a>' : '') + '</span></p></div>' : '';
                        str += '<li style="float:left;position:relative;width:100%;">' + titles  + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE14':
                    str = '<ul class="x-clear" style="' + wrapCss + (i > 1 ? borderT : '') + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        titles = j === 0 ? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">' + items[j].titles[0] + '</p><p style="margin-left:-10px;font-size:10px;-webkit-transform:scale(0.8);color:#999;">' + items[j].titles[1] + '</p><p style="font-size:12px;color:#F86125;">' + items[j].titles[2] + '</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '50%' : '50%') + ';border:1px solid #fff;' + (j === 1 ? borderB : '') + '">' + titles + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                case 'TYPE15':
                    str = '<ul class="x-clear" style="' + wrapCss + '">';
                    for (j = 0, m = items.length; j < m; j++) {
                        //titles = j==0? '<div style="position:absolute;top:0;left:20px;"><p style="font-size:14px;color:green;">'+ items[j].titles[0]+'</p><p style="font-size:10px;-webkit-transform:scale(0.8);color:#999;">'+ items[j].titles[1]+'</p><p style="font-size:12px;color:#F86125;">'+ items[j].titles[2]+'</p></div>' : '';
                        str += '<li style="float:left;position:relative;width:' + (j === 0 ? '49%' : '49%') + ';border:1px solid #fff;' + (j === 0 ? 'margin-right:2%;' : '') + '">' + (items[j].url ? '<a href="' + items[j].url + '" target="_blank">' : '') + '<img src="' + res_url + items[j].image + '" width="100%" />' + (items[j].url ? '</a>' : '') + '</li>';
                    }
                    str += '</ul>';
                    html += str;
                    break;

                default:
                    break;
            }
        }
        Ext.get('homePreviewList').setHTML(html);
    }

});
