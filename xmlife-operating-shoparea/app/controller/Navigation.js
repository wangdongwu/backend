Ext.define('XMLifeOperating.controller.Navigation', {
    extend: 'Ext.app.Controller',

    views: [
        'Navigation',
        'Toolbar'
    ],

    stores: [
        'Navigation',
        'AssignedCity',
        'ShopArea'
    ],

    requires: [
        'Ext.grid.column.Action'
    ],


    init: function() {
        var me = this;
        me.control({
            'moduleNavigation': {
                selectionchange: me.enterModule

            },
            '#cmbGlobalCity': {
                select: me.changeCurrentCity
            },
            '#cmbGlobalCenter': {
                select: me.changeCurrentCenter
            }
        });

        me.loadedClasses = {};
        me.viewStack = [];
        me.currentXType;

        me.listen({
            controller: {
                '*': {
                    refreshView: me.refreshView
                }
            }
        });

    },

    refs: [{
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'moduleTitle',
        selector: '#txtModuleTitle'
    }, {
        ref: 'cmbGlobalCenter',
        selector: '#cmbGlobalCenter'
    }],

    enterModule: function(selected, eOpts) {
        if (eOpts.length == 0) {
            return;
        }
        var xtype = eOpts[0].raw.id,
            text = eOpts[0].raw.text;


        if (xtype) { // only leaf nodes have ids
            this.switchToView(xtype);

            // this.getContentPanel().setTitle(text);
            this.getModuleTitle().setText(text);
            document.title = text + ' - ' + XMLifeOperating.getApplication().name;
            // location.hash = xtype;

            this.viewStack = [];
        }
    },

    refreshView: function() {
        this.switchToView(this.currentXType);
    },

    changeCurrentCity: function(combo, records, eOpts) {
        if (records.length == 0) {

            return;
        }
        XMLifeOperating.generic.Global.currentCity = records[0].data.code;
        this.switchToView(this.currentXType);

        var defaultHeaders = Ext.Ajax.defaultHeaders || {};
        defaultHeaders["City"] = XMLifeOperating.generic.Global.currentCity;
        Ext.Ajax.defaultHeaders = defaultHeaders;
    },

    changeCurrentCenter: function(combo, records, eOpts) {
        if (records.length == 0) {

            return;
        }

        XMLifeOperating.generic.Global.current_operating = combo.getValue();
        //alert(XMLifeOperating.generic.Global.current_operating);
        //combo.setValue(records[0].data.code);
        //combo.reset();
        //combo.isExpanded = false;
        if (this.currentXType && this.loadedClasses[this.currentXType]) {
            var cmp = this.loadedClasses[this.currentXType];
            cmp.fireEvent('onShowView', cmp, this.currentXType);
        }
    },

    switchToView: function(xtype) {

        this.currentXType = xtype;
        var alias = 'widget.' + xtype,
            contentPanel = this.getContentPanel();
        contentPanel.removeAll(false);

        if (this.loadedClasses[xtype]) {
            cmp = this.loadedClasses[xtype];
        } else {
            var ViewClass = Ext.ClassManager.getByAlias(alias);
            cmp = new ViewClass();
            this.loadedClasses[xtype] = cmp;
        }

        // var clsProto = ViewClass.prototype;
        // if (clsProto.themes) {
        //     clsProto.themeInfo = clsProto.themes[themeName];
        //     if (themeName === 'gray' || themeName === 'access') {
        //         clsProto.themeInfo = Ext.applyIf(clsProto.themeInfo || {}, clsProto.themes.classic);
        //     }
        // }
        //XMLifeOperating.generic.Global.current_operating = this.getCmbGlobalCenter().displayTplData.data.code;
        //alert(XMLifeOperating.generic.Global.current_operating);
        contentPanel.add(cmp);
        cmp.fireEvent('onShowView', cmp, xtype);
    },

    pushView: function(xtype) {
        this.viewStack.push(xtype);

        this.switchToView(xtype);
    },

    popView: function() {
        if (this.viewStack.length < 2) {
            return;
        }
        var previousViewXType = this.viewStack[this.viewStack.lenth - 2];
        this.viewStack.pop();
        this.switchToView(previousViewXType);
    }
});