Ext.define('XMLifeOperating.controller.Navigation', {
    extend: 'Ext.app.Controller',

    views: [
        'Navigation',
        'Toolbar',
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
                selectionchange: me.switchToView

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
    changeCurrentCity: function(combo, records, eOpts) {
        if (records.length == 0) {
            console.log('no entry selected');
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
            console.log('no entry selected');
            return;
        }

        XMLifeOperating.generic.Global.current_operating = combo.getValue();
        
        if (this.currentXType && this.loadedClasses[this.currentXType]) {
            var cmp = this.loadedClasses[this.currentXType];
            cmp.fireEvent('onShowView', cmp, this.currentXType);
        }
    },
    /**
     * [switchToView 根据treepanel 叶子节点的选择显示相应的面板]
     * 参数具体 参照 EXT API treepanel Event selectionchange
     * @param  {[type]} model     [当前选择模型]
     * @param  {[type]} Selectarr [当前选择项的list]
     * @return {[type]} Ext.Component [当前处于激活状态的panel]
     */
    switchToView: function(model,Selectarr) {
        if(!Selectarr[0].raw.leaf){return false}
            
        var contentPanel = this.getContentPanel(),
            contentItems = contentPanel.items.items,
            xtype = Selectarr[0].raw.id
            isNew = true;
            
        Ext.Array.each(contentItems,function(item){
            if(item.xtype == xtype){
                contentPanel.setActiveTab(item.show());
                isNew = false;
            }
        })
        if(isNew){
            contentPanel.add({
                xtype : xtype
            });
            contentPanel.setActiveTab(xtype);
        }
        return contentPanel.getActiveTab( )
    }
});