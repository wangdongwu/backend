/**
 * Created by wangdongwu on 14-9-23.
 */
/**
 * @class XMLifeOperating.View.authorityManage.GlobalAccountManage
 * @extends Ext.grid.Panel
 * Description
 */
Ext.define('XMLifeOperating.view.authorityManage.GlobalAccountManage', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.GlobalAccountManage',
    id: 'GlobalAccountManage',
    title: '全局账号管理',
    store: 'Account',
    forceFit: true,
    closable: true,
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Account',
        displayInfo: true
    }],
    tbar: [{
        xtype: 'button',
        text: '创建管理员账号',
        itemId: 'addGlobalAccount'
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
            text: '区域',
            dataIndex: 'cities',
            renderer: function(v) {
                return v.join('</br>');
            }
        },
        /*
                {
                  text : '权限',
                  dataIndex : 'modules',
                  renderer : function(v){
                    return v.join('</br>');
                  }
                },
                {
                  text : '等级',
                  dataIndex : 'level'
                },*/
        {
            text: '创建者',
            dataIndex: 'creater'

        }, {
            text: '所有者',
            dataIndex: 'owner'
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
        }
    ]
});
