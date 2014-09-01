Ext.define('XMLifeOperating.controller.SupportedCityList', {
    extend: 'Ext.app.Controller',

    views: ['cityManage.SupportedCityList'],

    stores: ['SupportedCity', 'Province', 'AllCities'],

    models: ['SupportedCity'],

    refs: [
        // {
        //     ref: 'editWindow',
        //     selector: 'editCity',
        //     xtype: 'editCity',
        //     autoCreate: true
        // },
        // {
        //     ref: 'modifyShipPrice',
        //     selector: 'modifyShipPrice',
        //     xtype: 'modifyShipPrice',
        //     autoCreate: true
        // },
        // {
        //     ref: 'addWindow',
        //     selector: 'addCity',
        //     xtype: 'addCity',
        //     autoCreate: true
        // },
        // {
        //     ref: 'cmbCity',
        //     selector: '#cmbCity',
        //     xtype: 'combobox'
        // }
    ],

    init: function() {
        var me = this;
        //me.cityRecord = null;
        me.control({
            // 'cityList':{
            //     added: me.onShow,
            //     cellclick: function(self, td, cellIndex, record, tr, rowIndex, evt, eOpts) {
            //         if(cellIndex !== 8){
            //             return false;
            //         }
            //         var code = record.data.code;
            //         if(evt.target.className=='close-city-bnt'){
                        
            //             sendPutRequest('supportedcity/enable',{
            //                 code : code,
            //                 status : 0
            //             },'','','',function(response){
            //                 if(response.responseText=='1'){
            //                     me.onShow();
            //                 }
            //             },function(){
 
            //             });
            //         }else if (evt.target.className=='open-city-bnt'){
            //             sendPutRequest('supportedcity/enable',{
            //                 code : code,
            //                 status : 1
            //             },'','','',function(response){
            //                 if(response.responseText=='1'){
            //                     me.onShow();
            //                 }
            //             },function(){
 
            //             });
            //         }else if(evt.target.className == 'edit-ship-price'){
            //             var modifyShipPriceView = me.getmodifyShipPrice();
            //             modifyShipPriceView.show();
            //         }
            //     }
            // },
            // 'cityList #editCity': {
            //     click: me.onEdit
            // },
            // '#cmbCity':{
            //     select: function(combo,record,index){
            //         me.selectedRecord = record[0];
            //     }

            // },
            // 'cityList #addNewCity': {
            //     click: function() {
            //         var win = me.getAddWindow();
            //         var cityModel = this.getCityModel();
            //         var city = new cityModel();
            //         win.down('form').loadRecord(city);
            //         win.show();

            //     }
            // },
            // '#save-city-edit-btn': {
            //     click: me.saveEditWindow
            // },
            // '#save-city-add-btn':{
            //     click:me.saveAddWindow
            // },
            // 'combobox[name=cpro]': {
            //     select: me.onProvinceChanged
            // }
        });

    },

    // onProvinceChanged: function(combo, records, eOpts) {
    //     if (records.length == 0) {
    //         console.log('no entry selected');
    //         return;
    //     }
    //     var store = this.getAllCitiesStore();
    //     var cmbCity = this.getCmbCity();

    //     cmbCity.lastQuery = null;
    //     cmbCity.clearValue();

    //     store.clearFilter();
    //     store.filter('parent', records[0].data.code);
    // },

    // onEdit: function(view, rowIndex, colIndex, column, e) {
    //     console.log("start edit");
    //     var city = view.getRecord(view.findTargetByEvent(e));
    //     var win = this.getEditWindow();
    //     win.down('form').loadRecord(city);
    //     var status = city.get('status');
    //     var e = win.down('combo[name=status]');
    //     e.setReadOnly(false);
    //     if(status ==1)
    //     {
    //         e.setReadOnly(true);

    //     }
    //     win.down('textfield[name=city]').setValue(city.get('name'));
    //     this.record = city;
    //     win.show();
    // },

    // onShow: function(container, pos, eOpts){
    //     this.getSupportedCityStore().load();
    // },

    // saveEditWindow: function() {
    //     var editWindow = this.getEditWindow(),
    //         windowEl = editWindow.getEl(),
    //         form = editWindow.down('form').getForm(),
    //         city = form.getRecord();

    //     if(form.isValid()) {
    //         windowEl.mask('saving');
    //         form.updateRecord(city);

    //         console.log("try saving");

    //         city.save({
    //             success: function(task, operation) {
    //                 windowEl.unmask();
    //                 editWindow.close();
    //             },
    //             failure: function(task, operation) {
    //                 var error = operation.getError(),
    //                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

    //                 Ext.MessageBox.show({
    //                     title: 'Edit Task Failed',
    //                     msg: msg,
    //                     icon: Ext.Msg.ERROR,
    //                     buttons: Ext.Msg.OK
    //                 });
    //                 windowEl.unmask();
    //             }
    //         })
    //     } else {
    //         Ext.Msg.alert('Invalid Data', 'Please correct form errors');
    //     }
    // }, 

    // saveAddWindow: function() {
    //     console.log(this);
    //     var addWindow = this.getAddWindow(),
    //         windowEl = addWindow.getEl(),
    //         form = addWindow.down('form').getForm(),
    //         city = form.getRecord();

    //     var cityCode = addWindow.down('combo[name=ccity]').getValue();
    //     var status = addWindow.down('combo[name=cstatue]').getValue();
    //     var shipfee = addWindow.down('textfield[name=logisticsPrice]').getValue();
    //     var deductd = addWindow.down('textfield[name=deductdPrice]').getValue();

    //     city.set('code',cityCode);
    //     city.set('lng',this.selectedRecord.get('lng'));
    //     city.set('lat',this.selectedRecord.get('lat'));
    //     city.set('name',this.selectedRecord.get('name'));
    //     city.set('status',status);
    //     city.set('shipfee',shipfee);
    //     city.set('deductd',deductd);

    //     me = this;


    //     if(form.isValid()) {
    //         windowEl.mask('saving');
    //         form.updateRecord(city);
    //         city.save({
    //             success: function(task, operation) {
    //                 windowEl.unmask();
    //                 addWindow.close();
    //                 me.getSupportedCityStore().load();
    //             },
    //             failure: function(task, operation) {
    //                 var error = operation.getError(),
    //                    msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

    //                 Ext.MessageBox.show({
    //                     title: 'Edit Task Failed',
    //                     msg: msg,
    //                     icon: Ext.Msg.ERROR,
    //                     buttons: Ext.Msg.OK
    //                 });
    //                 windowEl.unmask();
    //             }
    //         })
    //     } else {
    //         Ext.Msg.alert('Invalid Data', 'Please correct form errors');
    //     }
    // }
});

