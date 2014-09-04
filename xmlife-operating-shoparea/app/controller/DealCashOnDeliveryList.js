Ext.define('XMLifeOperating.controller.DealCashOnDeliveryList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealCashOnDelivery.DealCashOnDeliveryList',
    'operationManage.dealCashOnDelivery.DealCashOnDeliveryListEditRemark',
    'operationManage.dealCashOnDelivery.DealCashOnDeliveryListCustomerDetail',
    'operationManage.dealCashOnDelivery.DealCashOnDeliveryListDealDetail'],

    stores: ['DealCashOnDelivery','Customer','DealItems','Deliverer','DealCashOnDeliveryPaid','DealCashOnDeliverySign'],

    models: ['DealCashOnDelivery','Customer','DealItems','Deliverer'],

    refs: [
        {
             ref: 'customerDetail',
             selector: 'customerDetail',
             xtype: 'customerDetail',
             autoCreate: true
        },
        {
             ref: 'dealCashOnDeliveryListDealDetail',
             selector: 'dealCashOnDeliveryListDealDetail',
             xtype: 'dealCashOnDeliveryListDealDetail',
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
            //查看中心下暂停或接单买手
            'dealCashOnDeliveryList #shopArea': {
                select: function(combo) {
                    var store = this.getDealCashOnDeliveryStore();
                    store.load({
                        params: {
                            // city: XMLifeOperating.generic.Global.currentCity,
                            shopArea: combo.getValue(),
                            dayType:0
                        },
                    });
                    var deliveryStore = this.getDelivererStore();
                    deliveryStore.load({
                        params:{
                            city:XMLifeOperating.generic.Global.currentCity,
                            area:combo.getValue()
                        }
                    });
                },
            },
            'dealCashOnDeliveryList': {
                added: me.onShow,
            },
            'dealCashOnDeliveryList #customerDetailId':{
                click:me.onCustomerDetail
            },
            'dealCashOnDeliveryList #orderShortId':{
                click:me.onDealDetail
            },
            'dealCashOnDeliveryList #hasCancelId':{
                click:me.onHasCancelIdOrderDetail
            },
            'dealCashOnDeliveryList #hasReturnId':{
                click:me.onHasReturn
            },
            'dealCashOnDeliveryList radio[name="dayType"]':{
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



                        var store = this.getDealCashOnDeliveryStore();
                        store.load({params:{shopArea:2,
                                            mark:CashMark,
                                            paid:CashPaid,
                                            dayType:str}});
                        CashDayType=str;
                    }
                }
            },
            'dealCashOnDeliveryList #cashUnderCourierId':{
                select: function (combo) {
                   console.log('hello cashUnderCourier');
                   Ext.getCmp('dealCashOnDeliveryList').down('#cashOnDeliveryPaidId').setValue('');
                   Ext.getCmp('dealCashOnDeliveryList').down('#cashOnDeliverySignId').setValue('');
                    var store = this.getDealCashOnDeliveryStore();
                    store.load({
                        params: {
                            shopArea: 2,
                            deliverer: combo.getValue()
                        }
                    });
                    console.log(Ext.getCmp('dealCashOnDeliveryList'));
                },
            },
            'dealCashOnDeliveryList #cashOnDeliverySignId':{
                select: function (combo) {
                   Ext.getCmp('dealCashOnDeliveryList').down('#cashOnDeliveryPaidId').setValue('');
                   Ext.getCmp('dealCashOnDeliveryList').down('#cashUnderCourierId').setValue('');
                    var store = this.getDealCashOnDeliveryStore();
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
            'dealCashOnDeliveryList #cashOnDeliveryPaidId':{
                select: function (combo) {
                    console.log(combo.getValue());
                    Ext.getCmp('dealCashOnDeliveryList').down('#cashOnDeliverySignId').setValue('');
                    Ext.getCmp('dealCashOnDeliveryList').down('#cashUnderCourierId').setValue('');
                    var store = this.getDealCashOnDeliveryStore();
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
            'dealCashOnDeliveryList #remarkId':{
                click:me.onEditRemark
            },
            'dealCashOnDeliveryList #closeOrOpenCodMark':{
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
                            if(str!='yes'){
                                return;
                            }
                            sendPutRequest(url,{},'操作到账','成功操作到账','操作到账失败',function(){
                                    var store = me.getDealCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('dealCashOnDeliveryList').down('#cashUnderCourierId').getValue()
                                        }
                                    });
                            }); 
                    }); 
                }
            },
            'dealCashOnDeliveryList #closeOrOpenProblemMark':{
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
                            if(str!='yes'){
                                return;
                            }
                            sendPutRequest(url,{problemMark:codProblemMark},'操作标记','成功操作标记','操作标记失败',function(){
                                    var store = me.getDealCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('dealCashOnDeliveryList').down('#cashUnderCourierId').getValue()
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
        // var store = this.getDealCashOnDeliveryStore();
        // store.load(
        //     {
        //         params:
        //         {
        //             shopArea:2,
        //             dayType:0
        //         }
        //     });
        // var deliveryStore = this.getDelivererStore();
        // deliveryStore.load({params:{
        //                     city:XMLifeOperating.generic.Global.currentCity,
        //                     area:2}});
    },
    onCustomerDetail: function(view, column, rowIndex,colIndex, e) {
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCustomerDetail();
        win.down('form').loadRecord(customerDetail);
        win.show();
    },
    onDealDetail:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealCashOnDeliveryListDealDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        win.show();
        var store = this.getDealItemsStore();

        store.load({
            params: {
                deal: cashUnderOrderDetail.get('dealBackendId'),
            },
        }); 
    },
    onHasCancelIdOrderDetail:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealCashOnDeliveryListDealDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        if(cashUnderOrderDetail.get('hasCancel')==false){
            return;
        }
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: cashUnderOrderDetail.get('dealBackendId'),
                hasCancel:true
            },
        }); 
    },
    onHasReturn:function(view, column, rowIndex,colIndex, e) {
        var cashUnderOrderDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealCashOnDeliveryListDealDetail();
        win.down('form').loadRecord(cashUnderOrderDetail);
        if(cashUnderOrderDetail.get('hasReturn')==false){
            return;
        }
        win.show();
        var store = this.getDealItemsStore();

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
        var codMarkContent=remark.get('codMarkContent');
        var url='deal/codMarkContent/'+remark.get('dealBackendId');
        sendPutRequest(url,{codMarkContent:codMarkContent},'操作备注','成功操作备注','操作备注失败',function(){
                                    windowEl.unmask();
                                    editWindow.close();
                                    var store = me.getCashOnDeliveryStore();
                                    store.load({
                                        params: {
                                            shopArea: 2,
                                            deliverer: Ext.getCmp('dealCashOnDeliveryList').down('#cashUnderCourierId').getValue()
                                        }
                                    });
                            }); 

    }
});