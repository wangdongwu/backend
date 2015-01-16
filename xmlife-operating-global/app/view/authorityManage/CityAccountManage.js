/**
 * Created by wangdongwu on 14-9-23.
 */
/**
 * @class XMLifeOperating.view.authorityManage.CityAccountManage
 * @extends Ext.grid.Panel
 * Description
 */
Ext.define('XMLifeOperating.view.authorityManage.CityAccountManage', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.CityAccountManage',
    id: 'CityAccountManage',
    title: '城市账号管理',
    store: 'Account',
    closable: true,
    forceFit: true,
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Account',
        displayInfo: true
    }],
    tbar: [{
        xtype: 'button',
        text: '创建城市经理账号',
        itemId: 'addCityAccount'
    }, {
        xtype: 'button',
        text: '查看开启账号',
        itemId: 'lookActiveAccount'
    }, {
        xtype: 'button',
        text: '查看关闭账号',
        itemId: 'lookDisableAccount'
    }, {
        xtype: 'textfield',
        itemId: 'seachKeyword'
    }, {
        xtype: 'button',
        text: '搜索',
        itemId: 'seachAccount'
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '姓名',
        dataIndex: 'name'
    }, {
        text: '账号',
        dataIndex: 'account'
    }, {
        text: '城市',
        dataIndex: 'cities',
        renderer: function(v) {
            //var str = '<a href="/city-backend-client/index.html?city=">'+v[0]+'</a>'
            return v.join('</br>');
        }
    }, {
        text: '权限',
        dataIndex: 'modules',
        renderer: function(v) {
            return v.join('</br>');
        }
    }, {
        text: '创建者',
        dataIndex: 'creater'
    }, {
        text: '修改',
        align: 'center',
        itemId: 'edit',
        renderer: function() {
            return '<a href="javascript:;">修改</a>';
        }
    }, {
        text: '操作',
        align: 'center',
        itemId: 'handel',
        dataIndex: 'enable',
        renderer: function(val, meta, rec) {
            var text = '<a href="javascript:;">开启</a>';
            if (val) {
                text = '<a href="javascript:;">关闭</a>';
            }
            return text;
        }
    }]
});
