Ext.define("XMLifeOperating.base.Global", {
    statics: {
        URL: window.URLMap,

        SERVICECENEERID: 2,

        currentCity: 330100,

        VALIDATION_CONSTANTS: {
            PHONE: /^(86){0,1}(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/,
            ID_NO: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{3})(\d|X)$/,
            PRICE: /^([0-9]{1}\d*)(\.(\d){1,2})?$/,
            URL: /^http:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/,
            NUMBER: /^[0-9]*$/,
            PICTURE: /^.*?\.(jpg|jpeg|bmp|png)$/
        },

        static_image_prefix: '/admin',

        //operating_type: 'global',

        operating_type: 'center',

        current_operating: 2
    }
});
