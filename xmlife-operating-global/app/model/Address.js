Ext.define('XMLifeOperating.model.Address', {
    extend: 'Ext.data.Model',
    fields: ['addrdesc','addressDetail','addressId'],
    proxy: new XMLifeOperating.generic.BaseProxy('address')
});
 

// {
// city: {
// shipfee: 0,
// status: 0,
// code: 330100,
// deductd: 0,
// name: "杭州",
// parent: 0
// },
// phone: "15305816388",
// contacts: "吴江海",
// uid: 25,
// district: {
// created: 1407391699668,
// address: null,
// areaId: 0,
// areaName: null,
// lat: 30.288115,
// lng: 120.12475,
// id: "53e317d303641329d8c16ba9",
// zoneName: null,
// zoneId: 5,
// isActive: true,
// name: "元茂大厦"
// },
// addrdesc: "文三西路179号",
// addressDetail: "元茂大厦文三西路179号",
// addressId: "53f40f0b0cf252cb9cba9cd6"
// },
