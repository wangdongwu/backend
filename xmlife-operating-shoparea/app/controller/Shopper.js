Ext.define('XMLifeOperating.controller.Shopper', {
    extend: 'Ext.app.Controller',
    
    views: ['staffManage.shopper.ShopperList',
            'staffManage.shopper.EditShopper',
            'staffManage.shopper.DealShopperHistoryList'],

    stores: ['Shopper',
             'DealShopperHistory'],

    models: ['Shopper',
             'DealShopperHistory'],
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
        }],
/*
    views: ['shopper.shopperList', 'shopper.Editshopper', 'shopper.shopperHistory', 'shopper.shopperClock', 'shopper.ShoppingList'],

    stores: ['shopper', 'shopperHistory', 'shopperClock', 'ShoppingList'],

    models: ['shopper', 'shopperHistory', 'shopperClock', 'ShoppingList'],*/

/*    refs: [{
            ref: 'shopperList',
            selector: 'shopperList',
            xtype: 'shopperList',
            autoCreate: true

        }, {
            ref: 'businessArea',
            selector: '#businessArea',
        }, {
            ref: 'editWindow',
            selector: 'editshopper',
            xtype: 'editshopper',
            autoCreate: true
        }, {
            ref: 'shopperHistory',
            selector: 'shopperHistory',
            xtype: 'shopperHistory',
            autoCreate: true
        }, {
            ref: 'shopperClock',
            selector: 'shopperClock',
            xtype: 'shopperClock',
            autoCreate: true
        }, {
            ref: 'shoppingList',
            selector: 'shoppingList',
            xtype: 'shoppingList',
            autoCreate: true
        }, {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        },

    ],*/
    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({

            'shopperList': {
                added: me.onShow,
            },
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
                    console.log('hello shop dsitrict');
                    var sstore = this.getShopperStore();
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        }
                    });

                },
            },
            'shopperList #activeSearch': {
                click: function() {
                    if (isActive == true) {
                        isActive = false;
                    } else {
                        isActive = true;
                    }
                    var store = me.getShopperStore();
                    store.load({
                        params: {
                            area: me.getShopArea().getValue(),
                            isActive: isActive
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
                            case 'dayType7':
                                str = 7;
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
            'dealShopperHistoryList #shopperReturn':{
                click:function() {
                    var tab=me.getShopperList();
                    var store = me.getShopperStore();
                    store.load({
                        params: {
                            unbind: true
                        },
                        callback: function() {
                            Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                            Ext.getCmp('shopperList').down('#shopArea').setValue('');
                        }
                    });
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
        });
    },
    onShow: function() {
        var store = this.getShopperStore();
        store.load({
            params: {
                unbind: true
            },
            callback: function() {
                Ext.getCmp('shopperList').down('#activeBind').setText('查看已绑定的买手');
                Ext.getCmp('shopperList').down('#shopArea').setValue('');
            }
        });
    },
    onAdd: function() {
        var cClass = this.getShopperModel();
        var shopper = new cClass();
        var win = this.getEditWindow();
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

            // windowEl.mask('saving');
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
                    me.fireEvent('refreshView');
                });
                return;
            }

            shopper.save({
                success: function(task, operation) {
                    console.log(operation);
                    console.log(operation.response.responseText);
                    var error = operation.getError();
                    if (operation.response.responseText == '-2') {
                        Ext.MessageBox.show({
                            title: 'Edit Task Failed',
                            msg: '传参错误',
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