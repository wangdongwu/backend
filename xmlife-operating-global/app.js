/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

var splashscreen;
    
Ext.onReady(function() {
        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Loading application...', 'splashscreen');
        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');
    
        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
});


Ext.application({
    name: 'XMLifeOperating',

    extend: 'XMLifeOperating.Application',
    
    autoCreateViewport: true
});
