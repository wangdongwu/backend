rpc.IMClientManager = {};

rpc.IMClientManager.gClientDict = {};

rpc.IMClientManager.getClient = function(uid) {
	if(!uid) return null;
	return rpc.IMClientManager.gClientDict[uid];
};


rpc.IMClientManager.createClient = function(uid, callback) {
    if(!uid)
        return null;
    var client = rpc.IMClientManager.getClient(uid);
    if(client && client.isClientActive())
        return client;
    
    client = new rpc.IMClient(uid, callback);
    rpc.IMClientManager.gClientDict[uid] = client;
    client.start();
    return client;
};

rpc.IMClientManager.destroyClient = function(uid) {
    if(!uid)
        return;
    var client = rpc.IMClientManager.gClientDict[uid];
    if(!client)
        return;
    delete rpc.IMClientManager.gClientDict[uid];
    client.destroy();
};