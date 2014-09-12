Ext.define('XMLifeOperating.model.Customer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'uid','name','created','phone','avatar','deals','balance','dtoAddress','enable'],
    proxy: new XMLifeOperating.generic.BaseProxy('customer')
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
