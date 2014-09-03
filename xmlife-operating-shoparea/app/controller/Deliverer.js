Ext.define('XMLifeOperating.controller.Deliverer', {
    extend: 'Ext.app.Controller',
    views: ['staffManage.deliverer.DelivererList',
            'staffManage.deliverer.DelivererEdit',
            'staffManage.deliverer.DealDelivererHistoryList',
            'staffManage.deliverer.DelivererWorkTimeList',
            'staffManage.deliverer.DealItemsList'],

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
            ref: 'delivererList',
            selector: 'delivererList',
            xtype: 'delivererList',
            autoCreate: true
        },
        {
            ref: 'delivererEdit',
            selector: 'delivererEdit',
            xtype: 'delivererEdit',
            autoCreate: true
        },
        {
            ref: 'dealDelivererHistoryList',
            selector: 'dealDelivererHistoryList',
            xtype: 'dealDelivererHistoryList',
            autoCreate: true
        },
        {
            ref: 'delivererWorkTimeList',
            selector: 'delivererWorkTimeList',
            xtype: 'delivererWorkTimeList',
            autoCreate: true
        },
        {
            ref: 'dealItemsList',
            selector: 'dealItemsList',
            xtype: 'dealItemsList',
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
            'delivererList #shopArea': {
                select: function(combo) {

                    console.log('hello shop dsitrict');
                    var sstore = this.getDelivererStore();
                    Ext.getCmp('delivererList').down('#activeBind').setText('查看未绑定的快递员');
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
            'delivererList #activeBind': {
                click: function(grid) {
                    //Ext.getCmp('communityList').down('#lineId').setValue('');
                    var activeBindText = Ext.getCmp('delivererList').down('#activeBind').getText();
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
                    });
                }
            },
            'delivererList #add': {
                click: me.onAdd
            },
            'delivererList #delivererEditId': {
                click: me.onEdit
            },
            'delivererEdit #save-deliverer-edit-btn': {
                click: me.saveEditWindow
            },
            'delivererEdit filefield[name="delivererUploadfile"]': {
                change: function(uploadfile) {
                    var form = uploadfile.ownerCt;

                    var hash = uploadfile.previousNode().previousNode();

                    uploadImage(form, hash);
                }
            },
            'delivererList': {
                added: me.onShow,
            },
            //历史订单
            'delivererList #dealDelivererHistoryId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    var tab = this.getDealDelivererHistoryList();
                    var content = this.getContentPanel();
                    content.removeAll(false);

                    var deliverer = view.getRecord(view.findTargetByEvent(e));

                    var delivererId = deliverer.get('uid');
                    var dealDelivererHistoryStroe = this.getDealDelivererHistoryStore();
                    dealDelivererHistoryStroe.load({
                        params: {
                            deliverer: delivererId,
                            dayType: 1
                        }
                    });
                    content.add(tab);
                    this.delivererId = delivererId;
                }
            },
            'dealDelivererHistoryList radio[name="dayType"]': {
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
                        var store = this.getDealDelivererHistoryStore();
                        var delivererId = this.delivererId;
                        store.load({
                            params: {
                                dayType: str,
                                deliverer: delivererId
                            }
                        });
                    }
                }
            },
            //返回配送员清单
            'dealDelivererHistoryList #delivererReturn,delivererWorkTimeList #delivererReturn':{
                click:function() {

                    var tab=me.getDelivererList();
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
            'delivererList #delivererWorkTimeId': {
                click: function(view, column, rowIndex, colIndex, e) {
                    
                    var tab = this.getDelivererWorkTimeList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var deliverer = view.getRecord(view.findTargetByEvent(e));

                    var delivererId = deliverer.get('uid');
                    var delivererWorkTimeStore = this.getDelivererWorkTimeStore();
                    delivererWorkTimeStore.load({
                        params: {
                            deliverer: delivererId,
                            dayType: 1
                        }
                    });
                    content.add(tab);
                    this.deliverer=delivererId;
                }
            },
            'delivererWorkTimeList radio[name="dayType"]': {
                change: function(record, newV, oldV) {
                    if (newV == true) {
                        var itemId = record.itemId,
                            str;
                        switch (itemId) {
                            /* case 'dayType1':
                                str=1;
                                break;
                            case 'dayType2':
                                str=2;
                                break;
                            case 'dayType3':
                                str=3;
                                break;*/
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
                        var store = this.getDelivererWorkTimeStore();
                        var delivererId = this.delivererId;
                        store.load({
                            params: {
                                dayType: str,
                                deliverer: delivererId
                            }
                        });
                        this.dayType = str;
                    }
                }
            },
            //订单详情
            'dealDelivererHistoryList #dealItemsId': {
                click: function(view, column, rowIndex, colIndex, e) {

                    var tab = this.getDealItemsList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    var deal = view.getRecord(view.findTargetByEvent(e));
                    var dealBackendId = deal.get('dealBackendId')

                    var dealItemsStore = this.getDealItemsStore();
                    dealItemsStore.load({
                        params: {
                            deal: dealBackendId,
                            dayType: 1
                        }
                    });
                    content.add(tab);
                }

            },
            ///返回历史订单
            'dealItemsList #dealDelivererHistoryListReturn':{
                click:function() {
                    var tab=me.getDealDelivererHistoryList();                   
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'delivererList #closeOrOpenOrder':{
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
                                    store.load({
                                        params: {
                                            unbind:true
                                        },
                                        callback:function(){
                                            Ext.getCmp('delivererList').down('#activeBind').setText('查看已绑定的快递员');
                                            Ext.getCmp('delivererList').down('#shopArea').setValue('');
                                        }
                                    });
                            }); 
                    });
                }
            },
            'delivererList #searchButton': {
                click: me.searchDeliverer
            }

        });
    },
    searchDeliverer: function() {
        var me = this,
            keyWords = me.getDelivererList().down('#searchDelivererKeyWords').getValue(),
            store = this.getDelivererStore(),
            view = this.getDelivererList();

        var activeBindText = Ext.getCmp('delivererList').down('#activeBind').getText();
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
                Ext.getCmp('delivererList').down('#activeBind').setText('查看已绑定的快递员');
                Ext.getCmp('delivererList').down('#shopArea').setValue('');
            }
        });*/

    },
    onAdd: function() {
        var cClass = this.getDelivererModel();
        var deliverer = new cClass();
        var win = this.getDelivererEdit();
        win.down('form').loadRecord(deliverer);
        win.show();
    },
    onEdit: function(view, rowIndex, colIndex, column, e) {
        console.log("start edit");
        var deliverer = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDelivererEdit();
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
        var editWindow = this.getDelivererEdit(),
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