Ext.define('XMLifeOperating.controller.GShopper', {
    extend: 'Ext.app.Controller',

    views: ['staffManage.shopper.GShopperList',
            'staffManage.shopper.GShopperEdit',
            'staffManage.shopper.GDealShopperHistoryList',
            'staffManage.shopper.GShopperWorkTimeList',
            'staffManage.shopper.GDealItemsList'],

    stores: ['Shopper',
             'DealShopperHistory',
             'ShopperWorkTime',
             'DealItems'],
    models: ['Shopper',
             'DealShopperHistory',
             'ShopperWorkTime',
             'DealItems'],
    refs: [{
            ref: 'gShopperList',
            selector: 'gShopperList',
            xtype: 'gShopperList',
            autoCreate: true
        }, 
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
        {
            ref: 'editWindow',
            selector: 'gShopperEdit',
            xtype: 'gShopperEdit',
            autoCreate: true
        },
        {
            ref: 'gDealShopperHistoryList',
            selector: 'gDealShopperHistoryList',
            xtype: 'gDealShopperHistoryList',
            autoCreate: true
        },
        {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        },
        {
            ref: 'gShopperWorkTimeList',
            selector: 'gShopperWorkTimeList',
            xtype: 'gShopperWorkTimeList',
            autoCreate: true
        },
        /*{
            ref: 'dealItemsList',
            selector: 'dealItemsList',
            xtype: 'dealItemsList',
            autoCreate: true
        }*/],
    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({

            'gShopperList': {
                added: me.onShow,
            },
            'gShopperList #shopArea': {
                render: function(combo) {

                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive=true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive=false;
                    }
                    console.log('hello shop dsitrict');
                    var sstore = this.getShopperStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        },
                        callback: function() {
                            Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                        }

                    });
                },
                select: function(combo) {
                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive=true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive=false;
                    }
                    console.log('hello shop dsitrict');
                    var sstore = this.getShopperStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        },
                        callback: function() {
                            Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                        }

                    });

                },
            },
            //查看中心下暂停或接单买手
            'gShopperList #activeSearch': {
                click: function() {
                    var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单买手') {
                        isActive=false;
                        isUnbind = '';
                    } else if (activeSearch == '查看接单买手') {
                        isActive=true;
                        isUnbind = true;
                    }
                    var store = me.getShopperStore();
                    store.load({
                        params: {
                            area: me.getShopArea().getValue(),
                            isActive: isActive
                        },
                        callback: function() {
                            Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                            me.getGShopperList().down('#searchBuyerKeyWords').setValue('');
                        }
                    });
                }
            },
            //查看绑定
            'gShopperList #activeBind': {
                click: function(grid) {
                    var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();

                    if (activeBindText == '查看已绑定的买手') {
                        isUnbind = '';
                    } else if (activeBindText == '查看未绑定的买手') {
                        isUnbind = true;
                    }
                    var lstore = this.getShopperStore();
                    lstore.load({
                        params: {
                            unbind: isUnbind
                        },
                        callback: function() {
                            Ext.getCmp('gShopperList').down('#activeSearch').setText('查看停单买手');
                            Ext.getCmp('gShopperList').down('#shopArea').setValue('');
                            me.getGShopperList().down('#searchBuyerKeyWords').setValue('');
                        }
                    });
                }
            },
            'gShopperList #add': {
                click: me.onAdd
            },
            'gShopperList #editShopperId': {
                click: me.onEdit
            },
            'gShopperEdit #save-shopper-edit-btn': {
                click: me.saveEditWindow
            },
            'gShopperEdit filefield[name="shopperUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            //历史订单
            'gShopperList #dealShopperHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getGDealShopperHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var Shopper = view.getRecord(view.findTargetByEvent(e));
                    var shopperId = Shopper.get('uid');
                    var dealShopperHistoryStroe = this.getDealShopperHistoryStore();
                    dealShopperHistoryStroe.load({
                        params: {
                            shopper: shopperId,
                            dayType: 0
                        }
                    });
                    content.add(tab);
                    this.shopperId=shopperId;
                }
            },
            'gDealShopperHistoryList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            case 'dayType0':
                                str = 0;
                                break;
                            case 'dayType1':
                                str = 1;
                                break;
                            case 'dayType2':
                                str = 2;
                                break;
                            case 'dayType3':
                                str = 3;
                                break;
                            case 'dayType4':
                                str = 4;
                                break;
                            case 'dayType5':
                                str = 5;
                                break;
                            case 'dayType6':
                                str = 6;
                                break;
                        }
                        var store = this.getDealShopperHistoryStore();
                        var shopperId = this.shopperId;
                        store.load({
                            params: {
                                dayType: str,
                                shopper: shopperId
                            }
                        });
                        this.dayType = str;
                        console.log(record.itemId);
                    }
                }
            },
            //返回买手清单
            'gDealShopperHistoryList #shopperReturn,gShopperWorkTimeList #shopperReturn':{
                click:function() {
                    var tab=me.getGShopperList();
                    /*var store = me.getShopperStore();
                    store.load({
                        params: {
                            unbind: true
                        },
                        callback: function() {
                            Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                            Ext.getCmp('shopperList').down('#shopArea').setValue('');
                        }
                    });*/
                        
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },

            //考勤管理
            'gShopperList #shopperWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getGShopperWorkTimeList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var shopper = view.getRecord(view.findTargetByEvent(e));

                    var shopperId = shopper.get('uid');
                    var ShopperWorkTimeStore = this.getShopperWorkTimeStore();
                    ShopperWorkTimeStore.load({
                        params: {
                            shopper: shopperId,
                            dayType: 3
                        }
                    });
                    content.add(tab);
                    this.shopperId=shopperId;
                }
            },
            'gShopperWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    var shopperId=this.shopperId;
                    console.log(shopperId);

                    if (newV == true) {
                        console.log(record);
                        //console.log(record.itemId);
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            // case 'dayType1':
                            //     str=1;
                            //     break;
                            // case 'dayType2':
                            //     str=2;
                            //     break;
                            case 'dayType3':
                                str=3;
                                break;
                            case 'dayType4':
                                str = 4;
                                break;
                            case 'dayType5':
                                str = 5;
                                break;
                            case 'dayType6':
                                str = 6;
                                break;
                        }
                        var store = this.getShopperWorkTimeStore();

                        store.load({
                            params: {
                                dayType: str,
                                shopper: shopperId
                            }
                        });
                        this.dayType = str;

                    }
                }
            },
            //采购清单
            'gDealShopperHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getGDealItemsList();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStroe = this.getDealItemsStore();
                    dealItemsStroe.load({
                        params: {
                            deal: dealBackendId,
                            dayType: 0
                        }
                    });
                    content.add(tab);
                }

            },
            ///返回历史订单
            'gDealItemsList #dealShopperHistoryListReturn':{
                click:function() {
                    var tab=me.getGDealShopperHistoryList();                   
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'gShopperList #closeOrOpenOrder':{
                click:function(grid, column, rowIndex) { 
                    var record = grid.getStore().getAt(rowIndex);
                    var shopper = record.get('uid');
                    var isActive = record.get('isActive');
                    var url='';
                    var str='确认要此操作吗？';
                    if(isActive == true){
                        str='确认要暂停买手接单吗？';
                        isActive =false;
                    }else{
                        str='确认要恢复买手接单';
                        isActive =true;
                    }
                    url='shopper/enable';
                    Ext.MessageBox.confirm("选择框", str,function(str){
                            if(str=='no'){
                                return;
                            }
                            sendPutRequest(url,{shopper:shopper,isActive:isActive},'操作恢复或暂停买手接单','成功操作买手接单','操作买手接单失败',function(){
                                    
                                    var store = me.getShopperStore();
                                    var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();
                                    var params='';
                                    var searchBuyerKeyWords = me.getGShopperList().down('#searchBuyerKeyWords').getValue();
                                    if(activeBindText=='查看已绑定的买手'||searchBuyerKeyWords!=''){
                                        record.set('isActive',isActive);
                                        return;
                                    }else{

                                        var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                                        if (activeSearch == '查看停单买手') {
                                            isActive=true;
                                        } else if (activeSearch == '查看接单买手') {
                                            isActive=false;
                                        }
                                        store.load({
                                            params: {
                                                city: XMLifeOperating.generic.Global.currentCity,
                                                area: me.getShopArea().getValue(),
                                                isActive: isActive
                                            },
                                            callback: function() {
                                                Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                                            }
                                        });
                                    }  
                                   
                                    
                            }); 
                    });
                }
            },
            //search
            'gShopperList #searchButton': {
                click: me.searchShopper
            }
            
        });
    },
    searchShopper: function() {
        var me = this,
            keyWords = me.getGShopperList().down('#searchBuyerKeyWords').getValue(),
            store = this.getShopperStore(),
            view = this.getGShopperList();
        var activeBindText = Ext.getCmp('gShopperList').down('#activeBind').getText();
        var isUnbind = null;
        if (activeBindText == '查看已绑定的买手') {
            isUnbind = true;
        } else if (activeBindText == '查看未绑定的买手') {
            isUnbind = '';
        }
        if (keyWords == '') {
            store.load({
                params: {
                    unbind: isUnbind
                }
            });
        } else {
            store.load({
                params: {
                    nameOrPhone: keyWords
                },
                callback:function(){
                    Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                }
            });
        }
    },
    onShow: function() {
        /*var store = this.getShopperStore();
        store.load({
            params: {
                unbind: true
            },
            callback: function() {
                Ext.getCmp('gShopperList').down('#activeBind').setText('查看已绑定的买手');
                Ext.getCmp('gShopperList').down('#shopArea').setValue('');
            }
        });*/
    },
    onAdd: function() {
        var cClass = this.getShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
        win.down('form').loadRecord(shopper);
        win.down('#shopperPhone').setDisabled(false);
        win.show();
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var shopper = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditWindow();
        var record = shopper;
        var leftOnlineTime = Math.floor(record.get('onlineTime') / 60) < 10 ? '0' + Math.floor(record.get('onlineTime') / 60) : Math.floor(record.get('onlineTime') / 60);
        var rightOnlineTime = record.get('onlineTime') % 60 < 10 ? '0' + record.get('onlineTime') % 60 : record.get('onlineTime') % 60;
        var leftOfflineTime = Math.floor(record.get('offlineTime') / 60) < 10 ? '0' + Math.floor(record.get('offlineTime') / 60) : Math.floor(record.get('offlineTime') / 60);
        var rightOfflineTime = record.get('offlineTime') % 60 < 10 ? '0' + record.get('offlineTime') % 60 : record.get('offlineTime') % 60;
        var onlineTime = leftOnlineTime + ':' + rightOnlineTime;
        var offlineTime = leftOfflineTime + ':' + rightOfflineTime;
        record.set('onlineTime', onlineTime);
        record.set('offlineTime', offlineTime);
        win.down('form').loadRecord(record);
        win.show();
    },
    saveEditWindow: function() {
        var editWindow = this.getEditWindow(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            shopper = form.getRecord(),
            me = this;
        if (form.isValid()) {

            windowEl.mask('saving');
            form.updateRecord(shopper);


            shopper.set('onlineTime', (shopper.get('onlineTime').getHours()*60+shopper.get('onlineTime').getMinutes()));
            shopper.set('offlineTime',(shopper.get('offlineTime').getHours()*60+shopper.get('offlineTime').getMinutes()));
            shopper.set('pwd',hex_md5(shopper.get('pwd')));
            console.log("try saving");
            console.log(shopper.get('id'));
            if(shopper.get('id')!=null&&shopper.get('id')!=''&&shopper.get('id')!=undefined){

                var url='shopper/'+shopper.get('uid')
                sendPutRequest(url,{
                                       name:shopper.get('name'),
                                       pwd:shopper.get('pwd'),
                                       title:shopper.get('title'),
                                       gender:shopper.get('gender'),
                                       idcard:shopper.get('idcard'),
                                       phone:shopper.get('phone'),
                                       onlineTime:shopper.get('onlineTime'),
                                       offlineTime:shopper.get('offlineTime'),
                                       avatar:shopper.get('avatar'),
                                                     },'编辑模板','成功编辑模板','编辑模板失败',function(){
                    windowEl.unmask();
                    editWindow.close();
                    /*var shopStoreAreaId = me.shopStoreAreaId;
                    var sstore = me.getShopStoreStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            areaId: shopStoreAreaId
                        }
                    });*/
                    //me.fireEvent('refreshView');
                });
                return;
            }

            shopper.save({
                success: function(task, operation) {
                    var error = operation.getError();
                    var errorStr='';
                    switch(operation.response.responseText){
                        case '1':
                            errorStr='创建成功';
                            break;
                        case '-2':
                            errorStr='传参错误';
                            break;
                        case '-24':
                            errorStr='手机已注册';
                            break;
                        case '-28':
                            errorStr='手机号码格式错误';
                            break;
                    }
                    if(operation.response.responseText<0){
                        Ext.MessageBox.show({
                            title: 'Edit Task Failed',
                            msg: errorStr,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        windowEl.unmask();
                        return;
                    }
                    windowEl.unmask();
                    editWindow.close();
                    var keyWords=shopper.get('phone');
                    me.getShopperStore().load({
                        params: {
                            nameOrPhone: keyWords
                        }
                    });
                    me.getGShopperList().down('#searchBuyerKeyWords').setValue(keyWords);
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



});