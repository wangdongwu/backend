Ext.define('XMLifeOperating.store.Message', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Message',
    autoLoad: false,
    proxy: new XMLifeOperating.generic.BaseProxy('notify/list'),
    data:[
        { 'id': '10001','content':'今天要发布系统','startTime':1414118179178,'adminName':'wwb','url':'http://www.xiaomei.com/send','file':'杭州用户UID.text','status': 0,'linkType':2},
        { 'id': '10002','content':'魂牵梦萦','startTime':1414118179178,'adminName':'hoby','url':'http://www.xiaomei.com/send','file':'杭州用户UID.text','status': 0,'linkType':3,'internalType':4},
        { 'id': '10000','content':'I\'m love body good','startTime':1414118179178,'adminName':'hoby','url':'http://www.xiaomei.com/send','file':'杭州用户UID.text','status': 1}
    ]
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json'
    //     }
    // }
});