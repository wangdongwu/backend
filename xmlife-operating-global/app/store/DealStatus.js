Ext.define('XMLifeOperating.store.DealStatus', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
 
    data:[
        { 'name': '全部','value':''},
        { 'name': '正在采购','value':'1'},
        { 'name': '正在配送','value':'3'},
        { 'name': '订单完成','value':'4'},
        { 'name': '订单取消','value':'7'},
        { 'name': '等待分配买手','value':'20'},
        { 'name': '货到中心','value':'21'},
        { 'name': '等待取货','value':'22'},
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
    
});

// 正在采购 1; 
// 正在配送 3; 
// 订单完成 4; 
// 订单取消 7; 
// 等待分配买手 20;
// 货到中心 21;