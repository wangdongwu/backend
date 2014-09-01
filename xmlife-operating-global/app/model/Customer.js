var dataProxy = new XMLifeOperating.generic.BaseProxy('customer');
Ext.define('XMLifeOperating.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'uid','name','created','phone','avatar','deals','balance','dtoAddress','enable'],
    proxy: dataProxy
});
 

	// public String id;
	// public long uid;
	// public String name;
	// public String phone;
	// public String avatar;
	// // stat
	// public int deals;
	// // payment
	// public int balance;
