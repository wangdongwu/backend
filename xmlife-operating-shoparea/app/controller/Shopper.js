Ext.define('XMLifeOperating.controller.Shopper', {
    extend: 'Ext.app.Controller',
    
    views: ['staffManage.shopper.ShopperList',
            'staffManage.shopper.EditShopper',
            'staffManage.shopper.DealShopperHistoryList',
            'staffManage.shopper.ShopperWorkTimeList',
            'staffManage.shopper.DealItemsList'],

    stores: ['Shopper',
             'DealShopperHistory',
             'ShopperWorkTime',
             'DealItems'],
    models: ['Shopper',
             'DealShopperHistory',
             'ShopperWorkTime',
             'DealItems'],
    refs: [{
            ref: 'shopperList',
            selector: 'shopperList',
            xtype: 'shopperList',
            autoCreate: true
        }, 
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
        {
            ref: 'editWindow',
            selector: 'editShopper',
            xtype: 'editShopper',
            autoCreate: true
        },
        {
            ref: 'dealShopperHistoryList',
            selector: 'dealShopperHistoryList',
            xtype: 'dealShopperHistoryList',
            autoCreate: true
        },
        {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        },
        {
            ref: 'shopperWorkTimeList',
            selector: 'shopperWorkTimeList',
            xtype: 'shopperWorkTimeList',
            autoCreate: true
        },
        {
            ref: 'dealItemsList',
            selector: 'dealItemsList',
            xtype: 'dealItemsList',
            autoCreate: true
        }],
    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({

            'shopperList': {
                added: me.onShow,
            },
            //查看中心下暂停或接单买手
            'shopperList #shopArea': {
                render: function(combo) {

                    var dstore = me.getShopperStore();
                    dstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        }
                    });
                },
                select: function(combo) {
                    var activeSearch = Ext.getCmp('shopperList').down('#activeSearch').getText();

                    if (activeSearch == '查看停单买手') {
                        isActive=true;
                    } else if (activeSearch == '查看接单买手') {
                        isActive=false;
                    }
                    var sstore = this.getShopperStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        },
                        callback: function() {
                            Ext.getCmp('shopperList').down('#activeBind').setText('查看未绑定的买手');
                        }

                    });

                },
            },
            //查看中心下暂停或接单买手
            'shopperList #activeSearch': {
                click: function() {
                    var activeSearch = Ext.getCmp('shopperList').down('#activeSearch').getText();
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
                            Ext.getCmp('shopperList').down('#activeBind').setText('查看未绑定的买手');
                        }
                    });
                }
            },
            'shopperList #activeBind': {
                click: function(grid) {
                    //Ext.getCmp('communityList').down('#lineId').setValue('');
                    var activeBindText = Ext.getCmp('shopperList').down('#activeBind').getText();

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
                            Ext.getCmp('shopperList').down('#activeSearch').setText('查看停单买手');
                            Ext.getCmp('shopperList').down('#shopArea').setValue('');
                        }
                    });
                }
            },
            'shopperList #add': {
                click: me.onAdd
            },
            'shopperList #editShopperId': {
                click: me.onEdit
            },
            'editShopper #save-shopper-edit-btn': {
                click: me.saveEditWindow
            },
            'editShopper filefield[name="shopperUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            //历史订单
            'shopperList #dealShopperHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getDealShopperHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var Shopper = view.getRecord(view.findTargetByEvent(e));
                    var shopperId = Shopper.get('uid');
                    var dealShopperHistoryStroe = this.getDealShopperHistoryStore();
                    dealShopperHistoryStroe.load({
                        params: {
                            shopper: shopperId,
                            dataType: 1
                        }
                    });
                    content.add(tab);
                    this.shopperId=shopperId;
                }
            },
            'dealShopperHistoryList radio[name="dayType"]': {
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
            'dealShopperHistoryList #shopperReturn,shopperWorkTimeList #shopperReturn':{
                click:function() {
                    var tab=me.getShopperList();
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
            'shopperList #shopperWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getShopperWorkTimeList();
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
                    me.shopperId=shopperId;
                }
            },
            'shopperWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    var shopperId=me.shopperId;
                    if (newV == true) {;
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                             case 'dayType0':
                                str=0;
                                break;
                            case 'dayType1':
                                str=1;
                                break;
                            case 'dayType2':
                                str=2;
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
                            default:
                                str=-1;
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
            'dealShopperHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getDealItemsList();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStroe = this.getDealItemsStore();
                    dealItemsStroe.load({
                        params: {
                            deal: dealBackendId,
                            dataType: 1
                        }
                    });
                    content.add(tab);
                }

            },
            ///返回历史订单
            'dealItemsList #dealShopperHistoryListReturn':{
                click:function() {
                    var tab=me.getDealShopperHistoryList();                   
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'shopperList #closeOrOpenOrder':{
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
                                //3种情况 手机查询  未绑定查询 中心停单买手查询
                                    /*var store = me.getShopperStore();
                                    store.load({
                                        params: {
                                            unbind:true
                                        },
                                        callback:function(){
                                           
                                            Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                                            Ext.getCmp('shopperList').down('#shopArea').setValue('');
                                        }
                                    });*/
                                    record.set('isActive',isActive);
                                    me.fireEvent('refreshView');
                            }); 
                    });
                }
            },
            //search
            'shopperList #searchButton': {
                click: me.searchShopper
            }
            
        });
    },
    searchShopper: function() {
        var me = this,
            keyWords = me.getShopperList().down('#searchBuyerKeyWords').getValue(),
            store = this.getShopperStore(),
            view = this.getShopperList();
        var activeBindText = Ext.getCmp('shopperList').down('#activeBind').getText();
        var isUnbind = null;
        view.down('#shopArea').setValue('');
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
                Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                Ext.getCmp('shopperList').down('#shopArea').setValue('');
            }
        });*/
    },
    onAdd: function() {
        var cClass = this.getShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
        win.down('#shopperPhone').setDisabled(false);
        win.down('form').loadRecord(shopper);
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
        win.down('#shopperPhone').setDisabled(true);
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
            console.log(shopper);

            console.log("try saving");
            if(shopper.get('id')!=null&&shopper.get('id')!=''){
                var url='shopper/'+shopper.get('uid')
                sendPutRequest(url,{
                                       name:shopper.get('name'),
                                       pwd:shopper.get('pwd'),
                                       title:shopper.get('title'),
                                       gender:shopper.get('gender'),
                                       idcard:shopper.get('idcard'),
                                       onlineTime:shopper.get('onlineTime'),
                                       offlineTime:shopper.get('offlineTime'),
                                       avatar:shopper.get('avatar'),
                                                     },'编辑模板','成功编辑模板','编辑模板失败',function(operation){
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
                    me.fireEvent('refreshView');
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
                    console.log(errorStr);
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
                    me.fireEvent('refreshView');
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