Ext.define('XMLifeOperating.controller.WechatRefund', {
    extend: 'Ext.app.Controller',

    views: ['refundManage.wechatRefund.WechatRefundList',
            'refundManage.DealDetailRefund',
            'refundManage.wechatRefund.TenpayLogin'],

    stores: ['WechatRefund',
             'DealItems'],

    models: ['Refund',
             'DealItems'],
    refs: [
        {
            ref: 'wechatRefundList',
            selector: 'wechatRefundList',
            xtype: 'wechatRefundList',
            autoCreate: true
        },
        {
            ref: 'dealDetailRefund',
            selector: 'dealDetailRefund',
            xtype: 'dealDetailRefund',
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
            'wechatRefundList' : {
                added : self.rendenWechatRefundList,
               afterrender : function(thisObj){
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange',self.selectChange,self)
               }
            },
            'wechatRefundList button[name=today]':{
                click : function(ele){
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        date = new Date();
                        beginTime.setValue(date);
                        endTime.setValue(date);
                }
            },
            'wechatRefundList button[name=yesterday]':{
                click : function(ele){
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-86400000));
                        endTime.setValue(new Date());
                }
            },
            'wechatRefundList button[name=oldSevenDay]':{
                click : function(ele){
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-604800000));
                        endTime.setValue(new Date());
                }
            },
            'wechatRefundList button[name=oldMonth]':{
                click : function(ele){
                    var RefundList = this.getWechatRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-2592000000));
                        endTime.setValue(new Date());
                }
            },
            'wechatRefundList #statusCombo':{
            	change : function(grid,value){
                    self.rendenWechatRefundList(this.getWechatRefundList());
                }
            },
            'wechatRefundList datefield':{
                change : function(){
                    self.rendenWechatRefundList(this.getWechatRefundList());
                }
            },
            'wechatRefundList #dealDetailRefund':{
                click:self.onDealDetailRefund
            },
            'wechatRefundList button[name=allSelect]' : {
                click : function(){
                    self.sm.selectAll();
                }
            },
            'wechatRefundList button[name=reverseAllSelect]' : {
                click : function(){
                    self.sm.deselectAll();    
                }
            },
            'wechatRefundList button[name=reverseSelect]' : {
                click : function(){
                }
            },
            'wechatRefundList button[name=agreeRefund]' : {
                click : function(){
                    var idObj = self.getWechatRefundIdList({type:'agree'});
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
            'wechatRefundList button[name=markRead]' : {
                click : function(){
                    var idObj = self.getWechatRefundIdList({type:'markRead'});
                    Ext.MessageBox.confirm(
                        '标记人工处理',
                        Ext.String.format("确定要将'{0}'订单标记为人工处理吗？", idObj.idList),
                        function(result) {
                            if (result == 'yes') {
                               idObj && sendPutRequest('refund/mark',{
                                    ids : idObj.idList
                                },'','','',function(response){
                                    if(response.responseText == 1){
                                        Ext.Msg.alert('提示', '成功拒绝'+self.sm.getCount()+'条退款记录');
                                    }
                                    self.rendenWechatRefundList(self.getWechatRefundList());
                                },function(){
         
                                })
                            }
                        }
                    );
                }
            },
            'wechatRefundList button[name=disAgreeRefund]' : {
                click : function(){
                    var idObj = self.getWechatRefundIdList({type:'disagree'});
                        idObj && sendPutRequest('refund/refuse',{
                            ids : idObj.idList
                        },'','','',function(response){
                            if(response.responseText == 1){
                                Ext.Msg.alert('提示', '成功拒绝'+self.sm.getCount()+'条退款记录');
                            }
                            self.rendenWechatRefundList(self.getWechatRefundList());
                        },function(){
 
                        })
                }
            },
            'tenpayLogin #tenpayLoginBt' : {
                click : function(grid){
                    var TenpayLogin = self.getTenpayLogin();
                    var username = TenpayLogin.down('#username').getValue();
                    var password = TenpayLogin.down('#password').getValue();
                    var idObj = self.getWechatRefundIdList({type:'agree'});
                    idObj && sendPutRequest('refund/'+idObj.refundType,{
                            ids : idObj.idList,
                            username : username,
                            password : password

                    },'','','',function(response){
                        if(response.responseText == 1){
                                TenpayLogin.hide();
                                Ext.Msg.alert('提示', '成功同意'+self.sm.getCount()+'条退款记录');                                
                                self.rendenWechatRefundList(self.getWechatRefundList());
                        }
                    },function(response){

                    })
                }
            }
        });

    },
    rendenWechatRefundList : function(grid){
    	var beginTime = grid.down('[name=beginTime]').rawValue,
    		endTime = grid.down('[name=endTime]').rawValue,
    		//refundType = grid.down('#refundTypeCombo').getValue(),
    		//refundType='',
            refundType='tenpay',
            status = grid.down('#statusCombo').getValue();
            store = grid.store;
            store.getProxy().extraParams={
	            beginTime : beginTime,
	            endTime : endTime,
	            refundType : refundType || '',
	            status : status || 0
	        };
            // this.storeFilter();
	        store.loadPage(1);
	        switch(status){
                //待处理
	        	case '0':
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(true);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
	        		break;
                //已处理
	        	case '1-7-4':
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(false);
                    
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
                    grid.down('#checkAllId').setVisible(false);
	        		break;
                //退款失败
	        	case '3':
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(true);
                    grid.down('#pengdingId').setVisible(false);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
                    grid.down('#checkAllId').setVisible(true);
	        		break;
	        	case '5':
                    grid.down('#manualHandingId').setVisible(true);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(false);
                    grid.down('#manualHandingIntrId').setVisible(true);
                    grid.down('#handledId').setVisible(false);
                    grid.down('#checkAllId').setVisible(true);
	        		break;
                default:
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(true);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
                    grid.down('#checkAllId').setVisible(true);
                    break;
	        }
    },
    onDealDetailRefund: function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealDetailRefund();
        win.down('form').loadRecord(record);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: record.get('dealBackendId'),
            },
        });
    },
    selectChange : function(obj,objList){
        this.selectObjList = objList;
    },
    getWechatRefundIdList : function(typeObj){
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
    },

});

