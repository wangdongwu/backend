Ext.define('XMLifeOperating.controller.Capacity', {
	extend: 'Ext.app.Controller',

	views: ['centralPointManage.capacity.Capacity', 'centralPointManage.capacity.CapacityEdit','Toolbar'],

	stores: ['Capacity'],

	models: ['Capacity'],

	refs: [{
        ref: 'capacity',
        selector: 'capacity',
        xtype: 'capacity',
        autoCreate: true
    }, {
        ref: 'capacityEdit',
        selector: 'capacityEdit',
        xtype: 'capacityEdit',
        autoCreate: true
    }, {
        ref: 'headerToolbar',
        selector: 'headerToolbar',
        xtype: 'headerToolbar',
        autoCreate: true
    }],

	init: function(){
		this.control({
            'headerToolbar #cmbGlobalCenter': {
                select: function(combo) {
                    var self = this;
                    this.areaId = combo.getValue();

                    var store = this.getCapacityStore();
                    store.load({
                        params: {
                            shopArea: this.areaId

                        }, callback: function(records, options, success){
                            if(success){
                                self.record = records[0].data;
                                self.getCapacity().down('#capacityLimit').setValue(self.record.limit);
                            }else{
                                Ext.Msg.alert('提示','数据加载失败!');
                            }
                        }
                    });
                }
            },
			'capacity': {
				added: function(src){
                    var self = this;
                    this.areaId = this.areaId || XMLifeOperating.generic.Global.current_operating;

					var store = this.getCapacityStore();
                    store.load({
                        params: {
                            shopArea: this.areaId

                        }, callback: function(records, options, success){
                            if(success){
                                self.record = records[0].data;

                                var capContent = self.getCapacity();
                                capContent.down('#capacityLimit').setValue(self.record.limit);
                            }else{
                                Ext.Msg.alert('提示','数据加载失败!');
                            }
                        }
                    });
				}
			},
			'capacity #modifyCapacity': {
                click: function() {
                    var limitValue = this.getCapacity().down('#capacityLimit').getValue();

                    var editWindow = this.getCapacityEdit();
                    editWindow.down('#capacityLimit').setValue(limitValue);
                    editWindow.show();
                }
            },
            'capacityEdit #saveCapacity': {
                click: function(button) {
                    var self = this,
                        editWindow = this.getCapacityEdit(),
                        editForm = editWindow.down('#capacityEditForm').getForm(),
                        newLimit = editWindow.down('#capacityLimit').getValue();

                    if (editForm.isValid()) {
                        var reqParams = {
                            shopArea: this.areaId,
                            value: newLimit
                        };
                        var modifySuccessCallback = function(task, operation) {
                            self.getCapacity().down('#capacityLimit').setValue(newLimit);
                            editWindow.close();
                        };
                        var modifyFailureCallback = function(task, operation) {
                            var error = operation.getError(),
                                msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;
                            Ext.MessageBox.show({title: '保存失败', msg: msg, icon: Ext.Msg.ERROR, buttons: Ext.Msg.OK});
                        }
                        //发送保存请求
                        sendPutRequest('shopArea/setDealLimit', reqParams, '修改运力', '成功修改运力', '修改运力失败', modifySuccessCallback, modifyFailureCallback);

                    } else {
                        Ext.Msg.alert('提示', '输入格式错误，请重新输入！');
                    }
                }
            }

		});
	}
});