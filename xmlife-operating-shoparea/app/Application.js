

Ext.define('XMLifeOperating.Application', {
    name: 'XMLifeOperating',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.container.Viewport',
        'Ext.selection.CheckboxModel',
        'XMLifeOperating.generic.Global',
        'XMLifeOperating.generic.BaseProxy',
        'Ext.grid.plugin.DragDrop'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Navigation',
        'Shop',
        'Shopper'
    ],

    stores: [
        'Shop',
        'Shopper'
    ],

    launch: function() {
        // Setup a task to fadeOut the splashscreen
        var task = new Ext.util.DelayedTask(function() {
            // Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            // Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function() {
                        // Set the body as unmasked after the animation
                        //Ext.getBody().unmask();
                    }
                }
            });
        });
        // Run the fade 100 milliseconds after launch.
        task.delay(100);
    }
});


var uploadBlobImage = function(blobImage){
    var reader = new FileReader();
    reader.readAsDataURL(blobImage);

    reader.onload = function (imgsrc) {
        var form = new FormData();
        form.append("data",blobImage);
        var xhr = new XMLHttpRequest();
        xhr.timeout = 30 * 1000;
        xhr.open("POST", XMLifeOperating.generic.Global.URL.upload, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('success');
                    var resid = xhr.responseText;
                    console.log(resid);
                    if (resid.length != 26) {
                        Ext.MessageBox.show({
                            title: '无法上传图片',
                            msg: 'Error: <br />' + resid,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return;
                    }
                    window.RECENT_UPLOADS.push(resid);
                } else {
                    console.log('failure');
                    var resid = xhr.responseText;
                    if (resid.length != 26) {
                        Ext.MessageBox.show({
                            title: '无法上传图片',
                            msg: 'Error: <br />' + resid,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                        return;
                    }
                }
            }
        };
        xhr.ontimeout = function() {
            console.log('failure');
        };
        xhr.send(form);
    };
}

var uploadImage = function(form, textfield) {
    console.log('uploadimge');
    form.submit({
        url : XMLifeOperating.generic.Global.URL.upload,
        success: function(form, action) {
            console.log('success');
            var resid = action.response.responseText;
            if (resid.length != 26) {
                Ext.MessageBox.show({
                    title: '无法上传图片',
                    msg: 'Error: <br />' + resid,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });

                return;
            }
            textfield.setValue(action.response.responseText);
        },

        // If you don't pass success:true, it will always go here
        failure: function(form, action) {
            console.log('failure');
            var resid = action.response.responseText;
            if (resid.length != 26) {
                Ext.MessageBox.show({
                    title: '无法上传图片',
                    msg: 'Error: <br />' + resid,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });

                return;
            }
            textfield.setValue(action.response.responseText);
        }
    });
}
