/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.Navigation', {
    extend: 'Ext.tree.Panel',
    xtype: 'moduleNavigation',
    hideHeaders: true,
    rootVisible: false,
    frame: true,
    store: 'Navigation' 
});