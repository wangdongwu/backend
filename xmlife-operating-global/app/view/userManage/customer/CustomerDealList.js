Ext.define('XMLifeOperating.view.userManage.customer.CustomerDealList', {
    extend: 'XMLifeOperating.view.general.CommonDealList',
    xtype: 'CustomerDealList',
    id: 'CustomerDealList',
    store: 'DealCustomerHistory',
    closable: true
}, function() {
    // this是指向类本身
    // 修改本类的columns，但是不影响父类
    var needClone = !this.prototype.hasOwnProperty('columns'),
        columns = this.prototype.columns;

    columns = needClone ? Ext.clone(columns) : columns;

    var items = columns.items,
        spliced = 0;

    // 删除父类特定的列。这里利用查找而不是直接使用位置访问是为了降低耦合，避免父类结构改变时这里忘记更新。
    Ext.Array.each(items, function(item, index, arr) {
        if (item.dataIndex === 'contactsName' || item.dataIndex === 'contactsPhone') {
            arr.splice(index, 1);
            spliced++;
        }
        return spliced !== 2; // 该删除的都删除后提前退出。
    }, null, true);

    this.prototype.columns = columns;
});
