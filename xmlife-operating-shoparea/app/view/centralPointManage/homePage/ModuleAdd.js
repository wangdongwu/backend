Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleAdd', {
    extend: 'Ext.window.Window',
    xtype: 'moduleAdd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建大积木',
    width: 750,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: '15 0 10 15',
        style: 'line-height:30px;',
        items: [{
            xtype: 'radiogroup',
            fieldLabel: '选择类型',
            labelWidth: 70,
            allowBlank: false,
            width: '100%',
            height: 420,
            defaults: {
                style: 'margin:25px 35px 0 0'
            },
            columns: 2,
            vertical: true,
            autoScroll: true,
            items: [{
                boxLabel: '类型1：<img src="resources/images/type/1.jpg" height="75" style="float:right; margin-top:-30px;" />',
                name: 'type',
                inputValue: 'TYPE1',
                checked: true
            }, {
                boxLabel: '类型2：<img src="resources/images/type/2.jpg" height="75" style="float:right; margin-top:-30px;" />',
                name: 'type',
                inputValue: 'TYPE2'
            }, {
                boxLabel: '类型3：<img src="resources/images/type/3.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE3'
            }, {
                boxLabel: '类型4：<img src="resources/images/type/4.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE4'
            }, {
                boxLabel: '类型5：<img src="resources/images/type/5.jpg" height="50" style="float:right; margin-top:-17px;" />',
                name: 'type',
                inputValue: 'TYPE5'
            }, {
                boxLabel: '类型6：<img src="resources/images/type/6.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE6'
            }, {
                boxLabel: '类型7：<img src="resources/images/type/7.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE7'
            }, {
                boxLabel: '类型8：<img src="resources/images/type/8.jpg" width="145" height="10" />',
                name: 'type',
                inputValue: 'TYPE8'
            }, {
                boxLabel: '类型9：<img src="resources/images/type/9.jpg" width="145" height="10" />',
                name: 'type',
                inputValue: 'TYPE9'
            }, {
                boxLabel: '类型10：<img src="resources/images/type/10.jpg" height="26" style="float:right; margin-top:-6px;" />',
                name: 'type',
                inputValue: 'TYPE10'
            }, {
                boxLabel: '类型11：<img src="resources/images/type/11.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE11'
            }, {
                boxLabel: '类型12：<img src="resources/images/type/12.jpg" height="70" style="float:right; margin-top:-20px;" />',
                name: 'type',
                inputValue: 'TYPE12'
            }, {
                boxLabel: '类型13：<img src="resources/images/type/13.jpg" height="25" style="float:right; margin-top:-5px;"  />',
                name: 'type',
                inputValue: 'TYPE13'
            }, {
                boxLabel: '类型14：<img src="resources/images/type/14.jpg" height="70" style="float:right; margin-top:-20px;" />',
                name: 'type',
                inputValue: 'TYPE14'
            }, {
                boxLabel: '类型15：<img src="resources/images/type/15.jpg" height="35" style="float:right; margin-top:-10px;" />',
                name: 'type',
                inputValue: 'TYPE15'
            }]
        },
        // {
        //     xtype: 'radiogroup',
        //     fieldLabel: '是否为广告',
        //     labelWidth: 70,
        //     allowBlank: false,
        //     defaults: {
        //         margin: '0 5 0 0'
        //     },
        //     items: [{
        //         boxLabel: '是',
        //         name: 'isAdvert',
        //         inputValue: 'true'
        //     }, {
        //         boxLabel: '否',
        //         name: 'isAdvert',
        //         inputValue: 'false',
        //         checked: true
        //     }]
        // },
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '大积木名称',
            labelWidth: 70,
            allowBlank: false
        }],
        buttons: [{
            xtype: 'button',
            text: '保存',
            itemId: 'save'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});
