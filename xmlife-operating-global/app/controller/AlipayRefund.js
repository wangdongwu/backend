Ext.define('XMLifeOperating.controller.AlipayRefund', {
    extend: 'Ext.app.Controller',

    views: ['refundManage.alipayRefund.AlipayRefundList',
    		'refundManage.DealDetailRefund'],

    stores: ['AlipayRefund',
    		 'DealItems'],

    models: ['Refund',
    		 'DealItems'],
    refs: [
        {
            ref: 'alipayRefundList',
            selector: 'alipayRefundList',
            xtype: 'alipayRefundList',
            autoCreate: true
        },
        {
            ref: 'dealDetailRefund',
            selector: 'dealDetailRefund',
            xtype: 'dealDetailRefund',
            autoCreate: true
        },
    ],
    init: function() {
        var self = this;
        this.selectObjList = [];
        self.control({
            'alipayRefundList' : {
                added : self.rendenAlipayRefundList,
               afterrender : function(thisObj){
                    sm = thisObj.getSelectionModel();
                    self.sm = sm;
                    sm.on('selectionchange',self.selectChange,self)
               }
            },
            'alipayRefundList button[name=today]':{
                click : function(ele){
                    var RefundList = this.getAlipayRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        date = new Date();
                        beginTime.setValue(date);
                        endTime.setValue(date);
                }
            },
            'alipayRefundList button[name=yesterday]':{
                click : function(ele){
                    var RefundList = this.getAlipayRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-86400000));
                        endTime.setValue(new Date(+new Date()-86400000));
                }
            },
            'alipayRefundList button[name=oldSevenDay]':{
                click : function(ele){
                    var RefundList = this.getAlipayRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-604800000));
                        endTime.setValue(new Date());
                }
            },
            'alipayRefundList button[name=oldMonth]':{
                click : function(ele){
                    var RefundList = this.getAlipayRefundList(),
                        beginTime = RefundList.down('[name=beginTime]'),
                        endTime = RefundList.down('[name=endTime]');
                        beginTime.setValue(new Date(+new Date()-2592000000));
                        endTime.setValue(new Date());
                }
            },
            'alipayRefundList #statusCombo':{
            	change : function(grid,value){
                    self.rendenAlipayRefundList(this.getAlipayRefundList());
                }
            },
            'alipayRefundList datefield':{
                change : function(){
                    self.rendenAlipayRefundList(this.getAlipayRefundList());
                }
            },
            'alipayRefundList #dealDetailRefund':{
                click:self.onDealDetailRefund
            },
            'alipayRefundList button[name=agreeRefund]' : {
                click : function(){
                    var idObj = self.getAlipayRefundIdList({type:'agree'});
                    if(idObj && idObj.refundType == 'tenpay'){
                        self.getTenpayLogin().show();
                        return false;
                    }

                    idObj && sendPutRequest('refund/'+idObj.refundType,{
                            ids : idObj.idList
                        },'','','',function(response){
                            if(response.responseText >= 1){
                                Ext.Msg.alert('提示', '成功同意'+self.sm.getCount()+'条退款记录');                                
                                self.rendenAlipayRefundList(self.getAlipayRefundList());
                            }
                            if(idObj.refundType == 'alipay'){
                                var w = window.open();
                                w.document.open();
                                w.document.write(response.responseText);
                                var confirmMsg = Ext.Msg.confirm('提示', '你已经完成退款了吗',function(value){
                                    if(value == 'yes'){
                                        self.getAlipayRefundStore().reload()
                                    }
                                });  
                            }
                        },function(){
 
                        });
                        
                }
            },
            'alipayRefundList button[name=disAgreeRefund]' : {
                click : function(){
                    var idObj = self.getAlipayRefundIdList({type:'disagree'});
                        idObj && sendPutRequest('refund/refuse',{
                            ids : idObj.idList
                        },'','','',function(response){
                            if(response.responseText == 1){
                                Ext.Msg.alert('提示', '成功拒绝'+self.sm.getCount()+'条退款记录');
                            }
                            self.rendenAlipayRefundList(self.getAlipayRefundList());
                            
                        },function(){
 
                        })

                }
            },
            'alipayRefundList button[name=markRead]' : {
                click : function(){
                    var idObj = self.getAlipayRefundIdList({type:'markRead'});
                    Ext.MessageBox.confirm(
                        '标记人工处理',
                        Ext.String.format("确定要将'{0}'订单标记为人工处理吗？", idObj.idList),
                        function(result) {
                            idObj && sendPutRequest('refund/mark',{
                                ids : idObj.idList
                            },'','','',function(response){
                                if(response.responseText == 1){
                                    Ext.Msg.alert('提示', '成功标记'+self.sm.getCount()+'条记录');
                                }
                                self.rendenAlipayRefundList(self.getAlipayRefundList());
                            },function(){
     
                            })
                        }
                    );
                }
                
            },
        });
    },
    rendenAlipayRefundList : function(grid){
    	var beginTime = grid.down('[name=beginTime]').rawValue,
    		endTime = grid.down('[name=endTime]').rawValue,
    		//refundType = grid.down('#refundTypeCombo').getValue(),
    		refundType='ALIPAY',
            status = grid.down('#statusCombo').getValue();
            store = grid.store;
            store.getProxy().extraParams={
	            beginTime : beginTime,
	            endTime : endTime,
	            refundType : refundType || '',
	            status : status || 0
	        };         
            //this.storeFilter();
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
	        	case '1-4-8':
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(false);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
	        		break;
                //处理中
	        	case '2':
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(false);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
	        		break;
                //人工处理
	        	case '5':
                    grid.down('#manualHandingId').setVisible(true);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(false);
                    grid.down('#manualHandingIntrId').setVisible(true);
                    grid.down('#handledId').setVisible(false);
	        		break;
                default:
                    grid.down('#manualHandingId').setVisible(false);
                    grid.down('#refundFailureId').setVisible(false);
                    grid.down('#pengdingId').setVisible(true);
                    grid.down('#manualHandingIntrId').setVisible(false);
                    grid.down('#handledId').setVisible(false);
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
    getAlipayRefundIdList:function(typeObj){
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
});

