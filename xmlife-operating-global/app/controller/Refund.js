Ext.define('XMLifeOperating.controller.Refund', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.refund.refundList',
            'operationManage.refund.tenpayLogin'
            ],

    stores: ['refundStore'],

    models: ['refundModel'],

    refs: [
        {
            ref: 'refundList',
            selector: 'refundList',
            xtype: 'refundList',
            autoCreate: true
        },
        {
            ref: 'tenpayLogin',
            selector: 'tenpayLogin',
            xtype: 'tenpayLogin',
            autoCreate: true
        }
    ],

    init: function() {
        var self = this;
        this.selectObjList = [];
        self.control({
            'refundList' : {
                added : self.rendenRefundList,
                afterrender : function(thisObj){
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange',self.selectChange,self)
                }
            },
            'refundList button[name=today]':{
                click : function(ele){
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        date = new Date();

                        beginTime.setValue(date);
                        endTime.setValue(date);
                }
            },
            'refundList button[name=yesterday]':{
                click : function(ele){
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-86400000));
                        endTime.setValue(new Date());
                }
            },
            'refundList button[name=oldSevenDay]':{
                click : function(ele){
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-604800000));
                        endTime.setValue(new Date());
                }
            },
            'refundList button[name=oldMonth]':{
                click : function(ele){
                    var RefundList = this.getRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-2592000000));
                        endTime.setValue(new Date());
                }
            },
            'refundList combo[name=refundType]' : {
                change : function(grid,value){
                    self.getRefundStoreStore().clearFilter(true);
                    if(value !== 'all'){
                        self.getRefundStoreStore().filter('refundType',value);
                    }else{
                        self.getRefundStoreStore().reload();
                    }
                }
            },
            'refundList datefield':{
                change : function(){
                    self.rendenRefundList(this.getRefundList());
                }
            },
            'refundList button[name=searchDeal]':{
                click : function(){
                    var RefundList = this.getRefundList(),
                        SearchInput = RefundList.down('[name=mobileSearch]'),
                        mobile = SearchInput.getValue(),
                        store = self.getRefundStoreStore();
                        store.getProxy().extraParams={
                                mobile : mobile
                        };
                        self.storeFilter();
                        store.load();
                }
            },
            'refundList button[name=allSelect]' : {
                click : function(){
                    self.sm.selectAll();
                }
            },
            'refundList button[name=reverseAllSelect]' : {
                click : function(){
                    self.sm.deselectAll();    
                }
            },
            'refundList button[name=reverseSelect]' : {
                click : function(){

                }
            },
            'refundList button[name=agreeRefund]' : {
                click : function(){
                    var idObj = self.getRefundIdList({type:'agree'});
                    if(idObj && idObj.refundType == 'tenpay'){
                        self.getTenpayLogin().show();
                        return false;
                    }

                    idObj && sendPutRequest('refund/'+idObj.refundType,{
                            ids : idObj.idList
                        },'','','',function(response){
                            if(response.responseText == 1){
                                Ext.Msg.alert('提示', '成功同意'+self.sm.getCount()+'条退款记录');                                
                                self.rendenRefundList(self.getRefundList());
                            }
                            if(idObj.refundType == 'alipay'){
                                var w = window.open();
                                w.document.open();
                                w.document.write(response.responseText);
                                var confirmMsg = Ext.Msg.confirm('提示', '你已经完成退款了吗',function(value){
                                    if(value = 'yes'){
                                        self.getRefundStoreStore().reload()
                                    }
                                });  
                            }
                            
                            
                        },function(){
 
                        });
                        
                }
            },
            'refundList button[name=disAgreeRefund]' : {
                click : function(){
                    var idObj = self.getRefundIdList({type:'disagree'});
                        idObj && sendPutRequest('refund/refuse',{
                            ids : idObj.idList
                        },'','','',function(response){
                            if(response.responseText == 1){
                                Ext.Msg.alert('提示', '成功拒绝'+self.sm.getCount()+'条退款记录');
                            }
                            self.rendenRefundList(self.getRefundList());
                            

                        },function(){
 
                        })

                }
            },
            'tenpayLogin #tenpayLoginBt' : {
                click : function(grid){
                    var TenpayLogin = self.getTenpayLogin();
                    var username = TenpayLogin.down('#username').getValue();
                    var password = TenpayLogin.down('#password').getValue();
                    var idObj = self.getRefundIdList({type:'agree'});
                    idObj && sendPutRequest('refund/'+idObj.refundType,{
                            ids : idObj.idList,
                            username : username,
                            password : password

                    },'','','',function(response){
                        if(response.responseText == 1){
                                TenpayLogin.hide();
                                Ext.Msg.alert('提示', '成功同意'+self.sm.getCount()+'条退款记录');                                
                                self.rendenRefundList(self.getRefundList());
                        }
                    },function(response){

                    })
                }
            }
        });

    },
    getRefundIdList : function(typeObj){
        var list = this.selectObjList,
            idObj = {},
            idList = [],
            isSameType = true,
            oldRefundType = '';
        Ext.Array.each(list,function(v,k){
            if(k == 0){oldRefundType = v.data.refundType};
            if(v.data.refundType != oldRefundType){isSameType = false};
            idList.push(v.data.id);
        });
        idObj.refundType = oldRefundType.toLowerCase();
        idObj.idList = idList;
        if(!isSameType){
            Ext.Msg.alert('提示', '批量退款时<br/>请选择相同类型的退款方式');
        }
        if(typeObj.type = 'agree'){
            return isSameType ? idObj : isSameType;            
        }else if(typeObj.type = 'disagree'){
            return idObj           
        }else{
            return idObj;
        }
    }
    ,
    selectChange : function(obj,objList){
        this.selectObjList = objList;
    },
    storeFilter : function(){
        this.getRefundStoreStore().clearFilter(true);
        this.getRefundStoreStore().filter([{filterFn : function(item){
            return item.get('status') != 1 && item.get('refundType') == self.getRefundList().down('combo[name=refundType]').getValue();
        }
        }]);
    }
    ,
    rendenRefundList : function(grid){
        var beginTime = grid.down('[name=beginTime]').rawValue,
            endTime = grid.down('[name=endTime]').rawValue,
            store = grid.store;
        store.getProxy().extraParams={
                beginTime : beginTime,
                endTime : endTime
        };
        this.storeFilter();
        store.load();
    }
});

