Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ShopperDetail', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    id : 'ShopperDetail',
    xtype : 'ShopperDetail',
    alias : 'widget.ShopperDetail',
    title : '买手信息',
    width : 350,
    closeAction: 'destroy',
    modal: true,
    layout : 'fit',
    resizable: false,
    bodyPadding : '5 10',
     tpl :  '<img align="center" style="width:60px;height:60px;float:left;margin-top:10px;" src="'+XMLifeOperating.generic.Global.URL.res+'{avatar}"/>'+
            '<div style="margin-left:65px">'+
            '<p>编号: {idcard}</p>'+
            '<p>姓名: {name}</p>'+
            '<p>手机: {phone}</p>'+
            '<p>所属商圈: <tpl for="areaNames">'+
              '<span style="font-weight:bold;margin-right:8px">{.}</span>/ '+
            '</tpl></p>'+
            '<p>所属店铺: <tpl for="shopNames">'+
              '<span style="font-weight:bold;margin-right:8px">{.}</span>/ '+
            '</tpl></p>'+
            '</div>'
});