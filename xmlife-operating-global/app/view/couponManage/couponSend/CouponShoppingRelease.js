Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponShoppingRelease', {
  extend: 'Ext.grid.Panel',
  xtype: 'couponShoppingRelease',
  id: 'couponShoppingRelease',
  store: 'CouponSendRuleShopping',
  title: '购物发放优惠券',
  titleAlign: 'left',
  closable: true,
  forceFit: true,
  tbar: [
    {
      xtype: 'button',
      text: '创建规则',
      itemId: 'add',
      hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
    }
  ],
  columns: [

    {
      xtype: 'rownumberer'
    },
    {
      text: '编号',
      dataIndex: 'id',
      width: 50,
      sortable: true,
      align: 'left'
    },
    {
      text: '名称',
      dataIndex: 'name',
      width: 100,
      sortable: true,
      align: 'left'
    },
    {
      text: '优惠券/卡包名称',
      dataIndex: 'couponOrGroupName',
      width: 100,
      sortable: true,
      align: 'left'
    },
    {
      text: '有效期(开始)',
      dataIndex: 'startTime',
      width: 100,
      sortable: true,
      align: 'left',
      renderer: function (v) {
        var date = new Date(v);
        return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
      }
    },
    {
      text: '有效期(结束)',
      dataIndex: 'endTime',
      width: 100,
      sortable: true,
      align: 'left',
      renderer: function (v) {
        var date = new Date(v);
        return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
      }
    },
    {
      text: '类型',
      dataIndex: 'sendType',
      width: 100,
      sortable: true,
      align: 'left',
      renderer: function (v) {
        v = 5;
        switch (v) {
          case 1:
            return '消费发放';
          case 3:
            return '注册发放';
          case 4:
            return '直接发放';
          case 5:
            return 'URL发放';
        }
      }
    },
    {
      text: '创建日期',
      dataIndex: 'gmtCreate',
      width: 100,
      sortable: true,
      align: 'left',
      renderer: function (v) {
        var date = new Date(v);
        return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
      }
    },
    {
      text: '创建者',
      dataIndex: 'createrName',
      width: 100,
      sortable: true,
      align: 'left'
    },
    {
      text: '状态',
      dataIndex: 'status',
      width: 100,
      sortable: false,
      align: 'left',
      itemId: 'toggleStatus',
      renderer: function (v) {
        if (v == 1) {
          return '<button>停用</button>';
        } else {
          return '<button>启用</button>';
        }
      }
    },
    {
      text: '编辑',
      width: 100,
      itemId: 'update',
      sortable: false,
      renderer: function (v) {
        return '<button>编辑</button>';
      }
    }
  ]

});
