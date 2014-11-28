Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.EnableVersion', {
  extend: 'Ext.window.Window',
  xtype: 'EnableVersion',
  alias: 'widget.EnableVersion',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text'
  ],
  title: '版本启用',
  width: 250,
  buttonAlign: 'center',
  items: [{
    xtype: 'form',
    layout: 'vbox',
    url: XMLifeOperating.generic.Global.URL.biz + 'shopHomepage',
    bodyPadding: 8,
    defaults: {
      labelWidth: 70
    },
    style: 'line-height:22px;',
    items: [{
      xtype: 'hidden',
      name: 'shopId'
    }, {
      xtype: 'hidden',
      name: 'layoutId'
    }, {
      xtype: 'radiogroup',
      width: 250,
      columns: 2,
      vertical: true,
      items: [{
        boxLabel: '立即启用',
        name: 'type',
        inputValue: '0',
        checked: true
      }, {
        boxLabel: '定时启用',
        name: 'type',
        inputValue: '1'
      }],
      listeners: {
        change: function () {
          var form = this.up('form'),
            fieldset = form.down('fieldset'),
            type = this.getValue().type;
          if (type == 0) {
            fieldset.hide();
          } else {
            fieldset.show();
          }
        }
      }
    }, {
      xtype: 'fieldset',
      border: 0,
      defaultType: 'datefield',
      padding: 0,
      margin: 0,
      defaults: {
        format: 'Y-m-d H:i:s'
      },
      items: [{
        fieldLabel: '开始时间',
        labelAlign: 'left',
        labelWidth: 70,
        minValue: new Date(),
        name: 'startTime',
        editable: true,
        emptyText: '请选择开始时间',
        listeners: {
          change: function () {
            var form = this.up('form'),
              endTime = form.down('datefield[name="endTime"]');
            if (Ext.Date.format(this.getValue(), 'Y-m-d') == Ext.Date.format(new Date(), 'Y-m-d')) {
              this.setValue(Ext.Date.add(new Date(), Ext.Date.MINUTE, 30))
            }
            if (endTime.getValue() < this.getValue()) {
              endTime.setValue('');
            }
            endTime.setMinValue(this.getValue());
          }
        }
      }, {
        fieldLabel: '结束时间',
        labelAlign: 'left',
        editable: true,
        minValue: new Date(),
        emptyText: '请选择结束时间',
        labelWidth: 70,
        name: 'endTime'
      }]
    }],
    buttons: [{
      xtype: 'button',
      text: '确定',
      itemId: 'subEnableBt'
    }, {
      xtype: 'button',
      text: '取消',
      handler: function () {
        this.up('window').close();
      }
    }],
    listeners: {
      /**
       * @method afterRender
       * @inheritdoc
       * @return {void}
       */
      afterRender: function () {
        var fieldset = this.down('fieldset'),
          type = this.down('radiogroup').getValue().type;
        if (type == '0') {
          fieldset.hide();
        } else {
          fieldset.show();
        }
      }
    }
  }]
});