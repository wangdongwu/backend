Ext.define('XMLifeOperating.controller.CashOnDelivery', {
    extend: 'Ext.app.Controller',

    views: ['cashOnDelivery.CashOnDeliveryList',
            'cashOnDelivery.CustomerDetail',
            'cashOnDelivery.CashUnderOrderDetail',
            'cashOnDelivery.EditRemark'],

    stores: ['CashOnDelivery','Customer','ShoppingList','Courier','CashOnDeliverySign','CashOnDeliveryPaid'],

    models: ['CashOnDelivery','Customer','ShoppingList','Courier'],

    refs: [
        {
             ref: 'customerDetail',
             selector: 'customerDetail',
             xtype: 'customerDetail',
             autoCreate: true
        },
        {
             ref: 'cashUnderOrderDetail',
             selector: 'cashUnderOrderDetail',
             xtype: 'cashUnderOrderDetail',
             autoCreate: true
        },
        {
             ref: 'editRemark',
             selector: 'editRemark',
             xtype: 'editRemark',
             autoCreate: true
        },
    ],
    init: function() {

        var me=this,CashDayType=-1,CashMark='',CashPaid='';
        this.control({
           
            'cashOnDeliveryList': {
                added: me.onShow,
            },
            'cashOnDeliveryList #customerDetailId':{
                click:me.onCustomerDetail
            },
            'cashOnDeliveryList #orderShortId':{
                click:me.onOrderDetail
            },
            'cashOnDeliveryList #hasCancelId':{
                click:me.onHasCancelIdOrderDetail
            },
            'cashOnDeliveryList #hasReturnId':{
                click:me.onHasReturn
            },
            'cashOnDeliveryList radio[name="dayType"]':{
                change:function(record,newV,oldV){
                    console.log(record);
                        console.log(record.itemId);
                    if(newV==true){
                        console.log(record);
                        console.log(record.itemId);
                        var itemId=record.itemId,str;
                        switch(itemId){
                            case 'dayType1':
                                str=1;
                                break;
                            case 'dayType2':
                                str=2;
                                break;
                            case 'dayType3':
                                str=3;
                                break;
                            case 'dayType4':
                                str=4;
                                break;
                            case 'dayType5':
                                str=5;
                                break;
                            case 'dayType6':
                                str=6;
                                break;
                            case 'dayType7':
                                str=-1;
                                break;
                        }
                        if(CashMark==true){
                            CashPaid=null;
                        }else if(CashPaid==true){
                            CashMark=null;
                        }



                        var store = this.getCashOnDeliveryStore();
                        store.load({params:{shopArea:2,
                                            mark:CashMark,
                                            paid:CashPaid,
                                            dayType:str}});
                        CashDayType=str;
                    }
                }
            },
            'cashOnDeliveryList #cashUnderCourierId':{
                select: function (combo) {
                   console.log('hello cashUnderCourier');
                   Ext.getCmp('cashOnDeliveryList').down('#cashOnDeliveryPaidId').setValue('');
                   Ext.getCmp('cashOnDeliveryList').down('#cashOnDeliverySignId').setValue('');
                    var store = this.getCashOnDeliveryStore();
                    store.load({
                        params: {
                            shopArea: 2,
                            deliverer: combo.getValue()
                        }
                    });
                    // console.log(Ext.getCmp('cashOnDeliveryList').get('dayType'));
                    console.log(Ext.getCmp('cashOnDeliveryList'));
                },
            },
            'cashOnDeliveryList #cashOnDeliverySignId':{
                select: function (combo) {
                   console.log('hello cashOnDeliverySign');
                   Ext.getCmp('cashOnDeliveryList').down('#cashOnDeliveryPaidId').setValue('');
                   Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').setValue('');
                    var store = this.getCashOnDeliveryStore();
                    store.load({
                        params: {
                            shopArea: 2,
                            dayType:CashDayType,
                            mark:combo.getValue(),
                            paid:''
                        }
                    });
                    mark=combo.getValue();

                },
            },
            'cashOnDeliveryList #cashOnDeliveryPaidId':{
                select: function (combo) {
                   console.log('hello cashOnDeliveryPaid');
                    console.log(combo.getValue());
                    Ext.getCmp('cashOnDeliveryList').down('#cashOnDeliverySignId').setValue('');
                    Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').setValue('');
                    var store = this.getCashOnDeliveryStore();
                    store.load({
                        params: {
                            shopArea: 2,
                            dayType:CashDayType,
                            paid:combo.getValue(),
                            mark:''
                            
                        },

                    });
                    mark=combo.getValue();
                    

                },
            },
            'cashOnDeliveryList #remarkId':{
                click:me.onEditRemark
            },
            'cashOnDeliveryList #closeOrOpenCodMark':{
                click:function(grid, column, rowIndex) { 
                    var record = grid.getStore().getAt(rowIndex);
                    var dealBackendId = record.get('dealBackendId');
                    var codMark = record.get('codMark');
                    var url='';
                    var str='确认要此操作吗？';
                    if(codMark != true){
                        str='确认要点击到账吗？';
                    }else{
                        return;
                    }
                    url='deal/codMark/'+dealBackendId;
                    Ext.MessageBox.confirm("选择框", str,function(str){
                            if(str=='no'){
                                return;
                            }
                            sendPutRequest(url,{},'操作到账','成功操作到账','操作到账失败',function(){
                                    var store = me.getCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').getValue()
                                        }
                                    });
                            }); 
                    }); 
                }
            },
            'cashOnDeliveryList #closeOrOpenProblemMark':{
                click:function(grid, column, rowIndex) { 
                    var record = grid.getStore().getAt(rowIndex);
                    var dealBackendId = record.get('dealBackendId');
                    var codProblemMark = record.get('codProblemMark');
                    var url='';
                    var str='确认要此操作吗？';
                    if(codProblemMark == true){
                        str='确认要取消标记此订单吗？';
                        codProblemMark =false;
                    }else{
                        str='确认要标记此订单';
                        codProblemMark =true;
                    }
                    url='deal/codProblemMark/'+dealBackendId;
                    Ext.MessageBox.confirm("选择框", str,function(str){
                            if(str=='no'){
                                return;
                            }
                            sendPutRequest(url,{problemMark:codProblemMark},'操作标记','成功操作标记','操作标记失败',function(){
                                    var store = me.getCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').getValue()
                                        }
                                    });
                            }); 
                    }); 
                }
            },
            'editRemark #save-editRemark-edit-btn':{
                click:me.saveEditRemarkWindow
            }


        });

    },
    onShow: function() {
        var store = this.getCashOnDeliveryStore();
        store.load({params:{shopArea:2,dayType:3}});
        var deliveryStore = this.getCourierStore();
        deliveryStore.load({params:{
                            city:XMLifeOperating.generic.Global.currentCity,
                            area:2}});
    },
    onCustomerDetail: function(view, column, rowIndex,colIndex, e) {
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCustomerDetail();
        win.down('form').loadRecord(customerDetail);
        win.show();
    },
    onOrderDetail:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCashUnderOrderDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        win.show();
        var store = this.getShoppingListStore();

        store.load({
            params: {
                deal: cashUnderOrderDetail.get('dealBackendId'),
            },
        }); 

    },
    onHasCancelIdOrderDetail:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCashUnderOrderDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        if(cashUnderOrderDetail.get('hasCancel')==false){
            return;
        }
        win.show();
        var store = this.getShoppingListStore();
        store.load({
            params: {
                deal: cashUnderOrderDetail.get('dealBackendId'),
                hasCancel:true
            },
        }); 
    },
    onHasReturn:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCashUnderOrderDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        if(cashUnderOrderDetail.get('hasReturn')==false){
            return;
        }
        win.show();
        var store = this.getShoppingListStore();

        store.load({
            params: {
                deal: cashUnderOrderDetail.get('dealBackendId'),
                hasReturn:true
            },
        }); 
    },
    onEditRemark: function(view, column, rowIndex,colIndex, e) {
        var remark = view.getRecord(view.findTargetByEvent(e));
        var win = this.getEditRemark();
        win.down('form').loadRecord(remark);
        win.show();
    },
    saveEditRemarkWindow:function(grid, column, rowIndex) {
        var editWindow = this.getEditRemark(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            remark = form.getRecord(),
            me = this;
        form.updateRecord(remark);
        console.log(remark);
        var codMarkContent=remark.get('codMarkContent');
        //Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').getValue()
        var url='deal/codMarkContent/'+remark.get('dealBackendId');
        sendPutRequest(url,{codMarkContent:codMarkContent},'操作备注','成功操作备注','操作备注失败',function(){
                                    windowEl.unmask();
                                    editWindow.close();
                                    var store = me.getCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('cashOnDeliveryList').down('#cashUnderCourierId').getValue()
                                        }
                                    });
                            }); 

    }
});