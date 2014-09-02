Ext.define('XMLifeOperating.view.centralPointManage.centralPointConfigure.CentralPointConfigureList', {
    extend: 'Ext.grid.Panel',
    xtype: 'centralpointconfigurelist',
    title: '首页配置',
    store: 'ShopArea',
    
    tbar: [
        {
            xtype: 'button',
            text: '添加中心点',
            itemId: 'add',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        }
    ], 
    columns: [
        {
            xtype: 'rownumberer'
        }, 
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
            width: 70,
            itemId: 'seeBannerBtn',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer : function(value, metadata, model, rowIndex, colIndex, store) { 

                var seeBtn = '<a>配置</a>';
                return seeBtn; 
            } 
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'

});
