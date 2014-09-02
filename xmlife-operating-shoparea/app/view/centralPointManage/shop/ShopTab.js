/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */

 Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'shoptab',
    header: false,
    itemId:'shopInfoTab',
    items:[
            {
                title: '店铺信息',
                id:'tab1',
                autoScroll: true,
                layout:'fit',
                items:{
                    xtype:'shopInfo'
                }
            },
            {
                title: '货架管理',
                id:'tab2',
                layout:'fit',
                items:{
                    xtype:'productCollection'
                }
            },
            {
                title:'商品管理',
                id:'tab3',
                layout:'fit',
                items:{
                    xtype:'productList'
                }
            },
            {
                title:'快递员管理',
                id:'tab4',
                layout:'fit',
                items:{
                    xtype:'shopDelivererList'
                }
            },
            {
                title:'账单管理',
                layout:'fit',
                items:{
                    xtype:'shopOrder'
                }
            }
        ]
});