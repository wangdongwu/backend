Ext.define('XMLifeOperating.view.centralPointManage.centralPointConfigure.CentralPointConfigureList', {
    extend: 'Ext.grid.Panel',
    xtype: 'centralpointconfigurelist',
    header: false,
    store: 'ShopArea',
    
    tbar: [
        {
            xtype: 'button',
            text: '添加中心点',
            itemId: 'add',
            hidden:true
        }
    ], 
    columns: [
        {
            text: '编号',
            dataIndex: 'id',
            width: 60,
            sortable: false,
            align: 'left'
        },
        // {
        //     text: '中心点名称',
        //     dataIndex: 'name',
        //     width: 80,
        //     sortable: false,
        //     align: 'left',
        //     itemId:'editCentralPoint'
        // },
        {
            text: '管辖线路',
            dataIndex: 'zoneNames',
            width: 100,
            sortable: false,
            align: 'left',
            renderer:function(value){
                var str='';
                for(var i=0;i<value.length;i++){
                    str += value[i]+'<br />';
                }
                return str;
            }
        },
        {
            text: '店铺',
            dataIndex: 'shopNames',
            width: 100,
            sortable: false,
            align: 'left',
            renderer:function(value){
                var str='';
                for(var i=0;i<value.length;i++){
                    str += value[i]+'<br />';
                }
                return str;
            }
        },
        {
            header:"首页配置",
            width: 90,
            itemId: 'seeBannerBtn',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer : function(value, metadata, model, rowIndex, colIndex, store) { 

                var seeBtn = '<span style="cursor:pointer">banner配置</span>';
                return seeBtn; 
            } 
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }

});
