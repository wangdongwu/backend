Ext.define('XMLifeOperating.controller.GDeliverer', {
    extend: 'Ext.app.Controller',
    views: ['staffManage.deliverer.GDelivererList',
            'staffManage.deliverer.GDelivererEdit',
            'staffManage.deliverer.GDealDelivererHistoryList',
            'staffManage.deliverer.GDelivererWorkTimeList',
            'staffManage.deliverer.GDealItemsList'],

    stores: ['Deliverer',
             'ShopArea',
             'DealDelivererHistory',
             'DelivererWorkTime',
             'DealItems'],

    models: ['Deliverer',
             'ShopArea',
             'DealDelivererHistory',
             'DelivererWorkTime',
             'DealItems'],
    refs: [{
            ref: 'gDelivererList',
            selector: 'gDelivererList',
            xtype: 'gDelivererList',
            autoCreate: true
        },
        {
            ref: 'gDelivererEdit',
            selector: 'gDelivererEdit',
            xtype: 'gDelivererEdit',
            autoCreate: true
        },
        {
            ref: 'shopArea',
            selector: '#shopArea',
        },
        {
            ref: 'gDealDelivererHistoryList',
            selector: 'gDealDelivererHistoryList',
            xtype: 'gDealDelivererHistoryList',
            autoCreate: true
        },
        {
            ref: 'gDelivererWorkTimeList',
            selector: 'gDelivererWorkTimeList',
            xtype: 'gDelivererWorkTimeList',
            autoCreate: true
        },
        {
            ref: 'gDealItemsList',
            selector: 'gDealItemsList',
            xtype: 'gDealItemsList',
            autoCreate: true
        },
        
        {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        }],
    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({
            'gDelivererList #shopArea': {
                select: function(combo) {

                    console.log('hello shop dsitrict');
                    var sstore = this.getDelivererStore();
                    Ext.getCmp('gDelivererList').down('#activeBind').setText('查看未绑定的快递员');
                    isUnbind = true;
                    sstore.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: combo.getValue(),
                            isActive: isActive
                        }
                    });

                },
            },
            //查看中心下暂停或接单快递员
            'gDelivererList #activeSearch': {
                click: function() {
                    var activeSearch = Ext.getCmp('gDelivererList').down('#activeSearch').getText();
                    if (activeSearch == '查看停单快递员') {
                        isActive=false;
                        isUnbind = '';
                    } else if (activeSearch == '查看接单快递员') {
                        isActive=true;
                        isUnbind = true;
                    }
                    var store = me.getDelivererStore();
                    store.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            area: me.getShopArea().getValue(),
                            isActive: isActive
                        },
                        callback: function() {
                            Ext.getCmp('gDelivererList').down('#activeBind').setText('查看未绑定的快递员');
                        }
                    });
                }
            },
            'gDelivererList #activeBind': {
                click: function(grid) {
                    //Ext.getCmp('communityList').down('#lineId').setValue('');
                    var activeBindText = Ext.getCmp('gDelivererList').down('#activeBind').getText();
                    if (activeBindText == '查看已绑定的快递员') {
                        isUnbind = '';
                    } else if (activeBindText == '查看未绑定的快递员') {
                        isUnbind = true;
                    }
                    var lstore = this.getDelivererStore();
                    lstore.load({
                        params: {
                            unbind: isUnbind
                        },
                        callback: function() {
                            Ext.getCmp('gDelivererList').down('#activeSearch').setText('查看停单快递员');
                            Ext.getCmp('gDelivererList').down('#shopArea').setValue('');
                            me.getGDelivererList().down('#searchDelivererKeyWords').setValue('');
                        }
                    });
                }
            },
            'gDelivererList #add': {
                click: me.onAdd
            },
            'gDelivererList #delivererEditId': {
                click: me.onEdit
            },
            'gDelivererEdit #save-deliverer-edit-btn': {
                click: me.saveEditWindow
            },
            'gDelivererEdit filefield[name="delivererUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            'gDelivererList': {
                added: me.onShow,
            },
            //历史订单
            'gDelivererList #dealDelivererHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getGDealDelivererHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var deliverer = view.getRecord(view.findTargetByEvent(e));

                    var delivererId = deliverer.get('uid');
                    var dealDelivererHistoryStroe = this.getDealDelivererHistoryStore();
                    
                    dealDelivererHistoryStroe.getProxy().extraParams={
                        deliverer: delivererId,
                        dayType: 0
                      }
                    dealDelivererHistoryStroe.loadPage(1);

                    content.add(tab);
                    this.delivererId = delivererId;
                }
            },
            'gDealDelivererHistoryList radio[name="dayType"]': {
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
                            default:
                                str = -1;
                                break;
                        }
                        var dealDelivererHistoryStroe = this.getDealDelivererHistoryStore();
                        var delivererId = this.delivererId;
                        
                        dealDelivererHistoryStroe.getProxy().extraParams={
                            dayType: str,
                            deliverer: delivererId
                          };
                        dealDelivererHistoryStroe.loadPage(1);

                        this.dayType = str;
                        console.log(record.itemId);
                    }
                }
            },
            //返回配送员清单
            'gDealDelivererHistoryList #delivererReturn,gDelivererWorkTimeList #delivererReturn':{
                click:function() {

                    var tab=me.getGDelivererList();
                    /*var store = me.getdelivererStore();
                    store.load({
                        params: {
                            unbind: true
                        },
                        callback: function() {
                            Ext.getCmp('delivererList').down('#activeBind').setText('查看已绑定的买手');
                            Ext.getCmp('delivererList').down('#shopArea').setValue('');
                        }
                    });*/
                        
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            //考勤管理
            'gDelivererList #delivererWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    
                    var tab = this.getGDelivererWorkTimeList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var deliverer = view.getRecord(view.findTargetByEvent(e));

                    var delivererId = deliverer.get('uid');
                    var delivererWorkTimeStore = this.getDelivererWorkTimeStore();
                    
                    delivererWorkTimeStore.getProxy().extraParams={
                        deliverer: delivererId,
                        dayType: 1
                      }
                    delivererWorkTimeStore.loadPage(1);

                    content.add(tab);
                    this.deliverer=delivererId;
                }
            },
            'gDelivererWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            /* case 'dayType0':
                                str=0;
                                break;
                            case 'dayType1':
                                str=1;
                                break;
                            case 'dayType2':
                                str=2;
                                break;*/
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
                                str = -1;
                                break;
                        }
                        var delivererWorkTimeStore = this.getDelivererWorkTimeStore();
                        var delivererId = this.delivererId;
                        
                        delivererWorkTimeStore.getProxy().extraParams={
                            deliverer: delivererId,
                            dayType: str
                          }
                        delivererWorkTimeStore.loadPage(1);
                        this.dayType = str;
                    }
                }
            },
            //订单详情
            'gDealDelivererHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getGDealItemsList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStore = this.getDealItemsStore();
                    dealItemsStore.load({
                        params: {
                            deal: dealBackendId,
                            dayType: 0
                        }
                    });
                    content.add(tab);
                }

            },
            ///返回历史订单
            'gDealItemsList #dealDelivererHistoryListReturn':{
                click:function() {
                    var tab=me.getGDealDelivererHistoryList();                   
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'gDelivererList #closeOrOpenOrder':{
                click:function(grid, column, rowIndex) { 
                    var record = grid.getStore().getAt(rowIndex);
                    console.log(record);
                    var deliverer = record.get('uid');
                    var isActive = record.get('isActive');
                    var url='';
                    var str='确认要此操作吗？';
                    if(isActive == true){
                        str='确认要暂停配送员接单吗？';
                        isActive =false;
                    }else{
                        str='确认要恢复配送员接单吗？';
                        isActive =true;
                    }
                    url = 'deliverer/enable';
                    Ext.MessageBox.confirm("选择框", str,function(str){
                            if(str=='no'){
                                return;
                            }
                            sendPutRequest(url,{deliverer:deliverer,isActive:isActive},'操作恢复或暂停配送员接单','成功操作配送员接单','操作配送员接单失败',function(){
                                    var store = me.getDelivererStore();
                                    var activeBindText = Ext.getCmp('gDelivererList').down('#activeBind').getText();
                                    var params='';
                                    var searchDelivererKeyWords = me.getGDelivererList().down('#searchDelivererKeyWords').getValue();
                                    if(activeBindText=='查看已绑定的快递员'||searchDelivererKeyWords!=''){
                                        record.set('isActive',isActive);
                                        return;
                                    }else{
                                        me.fireEvent('refreshView');
                                        // var activeSearch = Ext.getCmp('gShopperList').down('#activeSearch').getText();
                                        // if (activeSearch == '查看停单买手') {
                                        //     isActive=true;
                                        // } else if (activeSearch == '查看接单买手') {
                                        //     isActive=false;
                                        // }
                                        // store.load({
                                        //     params: {
                                        //         city: XMLifeOperating.generic.Global.currentCity,
                                        //         area: me.getShopArea().getValue(),
                                        //         isActive: isActive
                                        //     },
                                        //     callback: function() {
                                        //         Ext.getCmp('gShopperList').down('#activeBind').setText('查看未绑定的买手');
                                        //     }
                                        // });
                                    } 
                            }); 
                    });
                }
            },
            'gDelivererList #searchButton': {
                click: me.searchDeliverer
            }

        });
    },
    searchDeliverer: function() {
        var me = this,
            keyWords = me.getGDelivererList().down('#searchDelivererKeyWords').getValue(),
            store = this.getDelivererStore(),
            view = this.getGDelivererList();

        var activeBindText = Ext.getCmp('gDelivererList').down('#activeBind').getText();
        if (activeBindText == '查看已绑定的快递员') {
            isUnbind = true
        } else if (activeBindText == '查看未绑定的快递员') {
            isUnbind = ' ';
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
        /*var store = this.getDelivererStore();
        store.load({
            params: {
                unbind: true
            },
            callback: function() {
                Ext.getCmp('gDelivererList').down('#activeBind').setText('查看已绑定的快递员');
                Ext.getCmp('gDelivererList').down('#shopArea').setValue('');
            }
        });*/

    },
    onAdd: function() {
        var cClass = this.getDelivererModel();
        var deliverer = new cClass();
        var win = this.getGDelivererEdit();
        win.down('form').loadRecord(deliverer);
        win.show();
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var deliverer = view.getRecord(view.findTargetByEvent(e));
        var win = this.getGDelivererEdit();
        var record = deliverer;
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
        var editWindow = this.getGDelivererEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            deliverer = form.getRecord(),
            me = this;
        if (form.isValid()) {

            windowEl.mask('saving');
            form.updateRecord(deliverer);

            deliverer.set('onlineTime', (deliverer.get('onlineTime').getHours() * 60 + deliverer.get('onlineTime').getMinutes()));
            deliverer.set('offlineTime', (deliverer.get('offlineTime').getHours() * 60 + deliverer.get('offlineTime').getMinutes()));
            deliverer.set('pwd', hex_md5(deliverer.get('pwd')));
            console.log("try saving");
            if(deliverer.get('id')!=null&&deliverer.get('id')!=''){
                var url='deliverer/'+deliverer.get('uid')
                sendPutRequest(url,{
                                       name:deliverer.get('name'),
                                       pwd:deliverer.get('pwd'),
                                       title:deliverer.get('title'),
                                       gender:deliverer.get('gender'),
                                       idcard:deliverer.get('idcard'),
                                       phone:deliverer.get('phone'),
                                       onlineTime:deliverer.get('onlineTime'),
                                       offlineTime:deliverer.get('offlineTime'),
                                       avatar:deliverer.get('avatar'),
                                                     },'编辑配送员','成功编辑配送员','编辑配送员失败',function(){
                    windowEl.unmask();
                    editWindow.close();
                    me.fireEvent('refreshView');
                });
                return;
            }
            deliverer.save({
                success: function(task, operation) {
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