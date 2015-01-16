Ext.define('XMLifeOperating.model.Template', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'logo', 'inco', 'name', 'banner',
        'nameColor', 'nameStrokeColor', 'nameDegree', 'descColor',
        'descStrokeColor', 'descDegree', 'type', 'response'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('shopbannertemplate')
});
