Ext.define('XMLifeOperating.view.freightManage.FreightSet', {
    extend: 'Ext.window.Window',
    xtype: 'freightSet',
    id: 'freightSet',
    closeAction: 'hide',
    model: true,
    width: 440,
    height: 270,
    resizable: false,
    layout: 'fit',
    title: '运费设置',
    initComponent: function() {
        function getTailLabelConfig(text, disabled) {
            return {
                xtype: 'label',
                text: text || '',
                disabled: (disabled === true),
                // 这个css类不是Ext内建的，这里但命名只是遵从了Ext风格，具体但样式定义在main.css中
                disabledCls: 'x-form-item-label-diabled',
                style: 'margin-left:5px',
                // 这个css类是Ext内建的，这里将其显式附加给输入框尾部的label以使其保持和labelable的样式一致
                // 风险在于这个类名未来可能会变
                componentCls: 'x-form-item-label'
            };
        }

        function getFormCompConfig(config) {
            return Ext.Object.merge({
                xtype: 'numberfield',
                minValue: 0,
                allowDecimals: false,
                width: 180,
                labelWidth: 110,
                labelAlign: 'right'
            }, config);
        }

        // 没有输入框的行为了水平位置对其，添加一个占位符，下面是占位符的config
        var placeholderWidth = 25,
            placeholderCfg = {
                xtype: 'component',
                width: placeholderWidth,
                // 仅仅为了不塌缩，该元素是float left的
                height: 1
            },
            requiredSymTpl = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        this.items = [{
            xtype: 'form',
            itemId: 'dealForm',
            bodyPadding: 5,
            border: false,
            frame: true,
            style: 'border:none;padding:10px',
            defaultType: 'container',
            defaults: {
                layout: 'column',
                // 这个css类是Ext内建的，form中的component会应用这个类，
                // 为了实现一行里面添加多个输入控件，每行使用container包裹，
                // 给container添加这个css类以使得整体效果看起来和其他地方一致。
                // 风险在于这个值未来可能会变。
                componentCls: 'x-anchor-form-item'
            },
            items: [{   // 第一行，只读标签
                items: [placeholderCfg, getFormCompConfig({
                    xtype: 'displayfield',
                    name: 'name',
                    fieldLabel: '城市',
                    style: 'text-align:left'
                })]
            }, {        // 第二行，container > 输入框 ＋ 尾标签
                items: [placeholderCfg, getFormCompConfig({
                    itemId: 'initShippingFee',
                    name: 'initShippingFee',
                    fieldLabel: '基本配送费',
                    afterLabelTextTpl: requiredSymTpl,
                    value: 0,
                    allowBlank: false
                }), getTailLabelConfig('元')]
            }, {        // 第三行，container > 输入框 ＋ 尾标签
                items: [placeholderCfg, getFormCompConfig({
                    itemId: 'minPrice',
                    name: 'minPrice',
                    fieldLabel: '起送金额',
                    afterLabelTextTpl: requiredSymTpl,
                    value: 0,
                    allowBlank: false
                }), getTailLabelConfig('元')]
            }, {        // 第四行，container > 复选框 ＋ 输入框 ＋ 尾标签
                itemId: 'minOrderForFreeShippingCont',
                hidden: true,
                items: [{
                    xtype: 'checkbox',
                    itemId: 'minOrderForFreeShippingEnabled',
                    name: 'minOrderForFreeShippingEnabled',
                    width: placeholderWidth,
                    handler: function(value, record) {
                        this.nextSibling().setDisabled(!value.getValue());
                    }
                }, getFormCompConfig({
                    itemId: 'minOrderForFreeShipping',
                    name: 'minOrderForFreeShipping',
                    fieldLabel: '满免金额',
                    disabled: true
                }), getTailLabelConfig('元（仅免起送费）', true)]
            }, {        // 第五行，container > 复选框 ＋ 输入框 ＋ 尾标签
                items: [{
                    xtype: 'checkbox',
                    itemId: 'minDistanceEnabled',
                    name: 'minDistanceEnabled',
                    width: placeholderWidth,
                    handler: function(value, record) {
                        this.nextSibling().setDisabled(!value.getValue());
                        var shippingFeePerKMCont = this.up('#dealForm').down('#shippingFeePerKMCont');
                        shippingFeePerKMCont.child('#shippingFeePerKM').setDisabled(!value.getValue());
                        shippingFeePerKMCont.setVisible(value.getValue());
                    }
                }, getFormCompConfig({
                    itemId: 'minDistance',
                    name: 'minDistance',
                    fieldLabel: '配送距离',
                    minValue: 1,
                    disabled: true
                }), getTailLabelConfig('公里', true)]
            }, {        // 第六行，container > 输入框 ＋ 尾标签
                itemId: 'shippingFeePerKMCont',
                hidden: true,
                items: [placeholderCfg, getFormCompConfig({
                    itemId: 'shippingFeePerKM',
                    name: 'shippingFeePerKM',
                    fieldLabel: '超配送距离追加费',
                    allowDecimals: true,
                    disabled: true,
                    minValue: 0.01
                }), getTailLabelConfig('元/公里（超过起送公里追加费用）', true)]
            }],
            buttons: [{
                text: '确定',
                itemId: 'submitId'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('freightSet')[0].close();
                }
            }]
        }];
        this.callParent(arguments);
    }
});
