Ext.define('XMLifeOperating.controller.FeedbackList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.feedback.FeedbackList'],
    stores: ['Feedback','FeedbackStatus'],
    models: ['Feedback'],

    init: function() {

        var me=this;
        this.control({
            'feedbackList': {
                added: me.onShow,
            },
            'feedbackList #add':{
                click: function() {
                    var cClass = me.getFeedbackModel();
                    var feedback = new cClass();
                    var win = this.getEditWindow();
                    win.down('form').loadRecord(feedback);
                    win.show();
                }
            },
            'feedbackList radio[name="dayType"]':{
                change:function(record,newV,oldV){
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
                        }
                        var store = this.getFeedbackStore();
                        store.load({params:{dayType:str,mark:false}
                                    });
                                        this.dayType=str;

                    }
                }
            },
            'feedbackList #mark':{
                click: function (component, column, rowIndex,colIndex,e) {
                    
                    var model=component.getStore().getAt(rowIndex);
                    console.log(model);
                    var feedbackId=model.get('id');

                    var className = e.target.className;            
                    var url= 'feedback/'+feedbackId;

                    var mark=model.get('mark');

                    model.set('mark',!mark);
                    if(mark==true){
                        status=0;
                    }else{
                        status=1; 
                    }
                   /* switch(statusValue){
                        case 'online':
                            status=0;
                            break;
                        case 'offline':
                            status=1;
                            break;
                        case 'soldout':
                            status=3;
                            break;
                            
                    }*/

                    sendPutRequest(url,{},'','成功操作标记','标记操作失败',function(){
                        var store = this.getFeedbackStore();
                            var dayType=me.dayType;
                            store.load({params:{dayType:dayType,mark:false}});
                           // me.fireEvent('refreshView');
                           // model.set('mark',status);
                    });
                }
            },

        });
    },

    onShow: function() {
        var store = this.getFeedbackStore();
        store.load({params:{dayType:5,mark:false},
                    });
                        this.dayType=5;

    },
    
});