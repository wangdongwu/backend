/**
 * Created by wangdongwu on 14/12/8.
 */
Ext.define('XMLifeOperating.view.promotion.AddPromotion', {
	extend: 'Ext.window.Window',
	requires: [
		'Ext.form.Panel',
		'Ext.form.field.Text',
		'Ext.form.field.Hidden'
	],
	id: 'AddPromotion',
	xtype: 'AddPromotion',
	alias: 'widget.AddPromotion',
	maximizable: true,
	title: '添加活动',
	width: 850,
	closeAction: 'destroy',
	modal: true,
	resizable: false,
	items: [{
		xtype: 'form',
		bodyPadding: '5',
		border: 0,
		defaults: {
			bodyPadding: 5
		},
		items: [{
			xtype: 'fieldcontainer',
			defaultType: 'textfield',
			layout: 'hbox',
			defaults: {
				labelWidth: 70,
				width: 280
			},
			items: [{
				xtype: 'hidden',
				name: 'promotionId'
			}, {
				fieldLabel: '活动名称',
				name: 'name'
			}, {
				fieldLabel: '备注',
				labelAlign: 'right',
				name: 'remark'
			}]
		}, {
			xtype: 'fieldcontainer',
			defaultType: 'datefield',
			defaults: {
				format: 'Y-m-d H:i:s',
				labelAlign: 'left'
			},
			items: [{
				fieldLabel: '活动显示',
				labelAlign: 'left',
				labelWidth: 70,
				minValue: new Date(),
				name: 'displayDate',
				editable: true,
				emptyText: '请选择开始展示时间',
				listeners: {
					change: function () {
						var form = this.up('form'),
							endTime = form.down('datefield[name="endDate"]');
						if (endTime.getValue() < this.getValue()) {
							endTime.setValue('');
						}
						endTime.setMinValue(this.getValue());
					}
				}
			}, {
				fieldLabel: '活动开始',
				editable: true,
				emptyText: '请选活动开始时间',
				labelWidth: 70,
				name: 'startDate',
				minValue: new Date(),
				listeners: {
					change: function () {
						var form = this.up('form'),
							endTime = form.down('datefield[name="endDate"]');
						if (endTime.getValue() < this.getValue()) {
							endTime.setValue('');
						}
						endTime.setMinValue(this.getValue());
					}
				}
			}, {
				fieldLabel: '活动结束',
				minValue: new Date(),
				editable: true,
				emptyText: '请选择结束时间',
				labelWidth: 70,
				name: 'endDate'
			}]
		}, {
			xtype: 'combo',
			labelWidth: 70,
			fieldLabel: '活动城市',
			queryMode: 'local',
			displayField: 'name',
			valueField: 'code',
			name: 'city',
			autoSelect: true,
			store: Ext.create('Ext.data.Store', {
				fields: ['name', 'code'],
				data: [{
					name: '杭州',
					code: '310000'
				}]
			}),
			listeners: {
				afterrender: function (combo) {
					var recordSelected = combo.getStore().getAt(0);
					combo.setValue(recordSelected.get('code'));
				}
			}
		}, {
			xtype: 'combo',
			name: 'areaIds',
			fieldLabel: '活动商圈',
			store: 'ShopArea',
			emptyText: '选择商圈-可多选',
			labelWidth: 70,
			width: 300,
			multiSelect: true,
			autoScroll: true,
			displayField: 'name',
			valueField: 'id',
			listeners: {
				change: function () {
					var vlen = this.getDisplayValue().length - this.getValue().length + 1,
						qlen = this.getValue().length,
						newLen = vlen * 13 + qlen * 8;

					if (newLen > 300) {
						this.setWidth(newLen);
					}
					this.updateLayout();
				}
			}
		},{
      border : 0,
      html : '<hr>'
    }, {
			xtype: 'container',
			layout: 'column',
			height: 28,
			border: 0,
			defaults: {
				labelWidth: 120
			},
			items: [{
				xtype: 'checkbox',
				inputValue: true,
				boxLabel: '是否需要banner',
				name: 'isHaveHomeBanner',
				listeners: {
					change: function (p, v) {
						var next = this.next(),
							nextChilds = next.getRefItems();
						if (v) {
							next.show();
						} else {
							Ext.each(nextChilds, function (el) {
								el.setValue && el.setValue('');
							});
							next.hide();
						}
					}
				}
			}, {
				xtype: 'container',
				layout: 'column',
				hidden: true,
				items: [{
					xtype: 'numberfield',
					labelAlign: 'right',
					width: 100,
					labelWidth: 50,
					fieldLabel: '位置',
					name: 'homeBannerPosition'
				}, {
					xtype: 'textfield',
					name: 'homeBanner',
					style: {
						marginRight: '3px'
					},
					fieldLabel: '主页banner',
					itemId: 'homeBanner',
					labelWidth: 70,
					width: 180
				}, {
					xtype: 'form',
					border: false,
					items: [{
						xtype: 'filefield',
						buttonOnly: true,
						buttonText: '选择图片',
						hideLabel: true,
						listeners: {
							change: function () {
								var self = this,
									wins = this.up('window'),
									form = this.ownerCt,
									textfield = this.up('container').down('#homeBanner');

								wins.getImageDimension(this.fileInputEl.dom.files[0], function (v) {
									self.next().setValue(v);
								});
								uploadImage(form, textfield)
							}
						}
					}, {
						xtype: 'hidden',
						name: 'homeBannerSize'
					}]
				}]
			}]
		}, {
      xtype: 'checkbox',
      inputValue: true,
      labelWidth: 140,
      boxLabel: '需要商品详情页活动链接',
      name: 'showOnProductDetail',
      listeners: {
        change: function (p, v) {
          var next = this.next(),
            textList = next.query('textfield');
          if (v) {
            next.show();
          } else {
            next.hide();
            Ext.each(textList, function (textList) {
              textList.setValue('');
            });
          }
          this.up('window').center();
        }
      }
    },{
      xtype: 'container',
      hidden: true,
      items: [{
        xtype: 'textfield',
        name: 'globalUserDailyNum',
        labelWidth: 140,
        fieldLabel: '全场每人每日限购'
      }, {
        xtype: 'textfield',
        name: 'globalUserActiveNum',
        labelWidth: 140,
        fieldLabel: '全场每人活动期限购'
      }]
    },
    {
      html : '<hr>',
      border : 0
    },{
			xtype: 'container',
			layout: 'column',
			items: [{
				xtype: 'container',
				layout: 'column',
				border: 0,
				defaults: {
					labelWidth: 120
				},
				items: [{
					xtype: 'textfield',
					name: 'topBanner',
					style: {
						marginRight: '3px'
					},
					fieldLabel: '活动页Banner宣传图',
					itemId: 'banner',
					width: 230
				}, {
					xtype: 'form',
					border: false,
					items: [{
						xtype: 'filefield',
						buttonOnly: true,
						buttonText: '选择图片',
						hideLabel: true,
						listeners: {
							change: function () {
								var self = this,
									wins = self.up('window'),
									form = self.ownerCt,
									textfield = self.up('container').down('#banner');

								wins.getImageDimension(this.fileInputEl.dom.files[0], function (v) {
									self.next().setValue(v);
								});
								uploadImage(form, textfield)
							}
						}
					}, {
						xtype: 'hidden',
						name: 'topBannerSize'
					}]
				}]
			}]
		}, {
      xtype : 'container',
      items : [{
        xtype: 'checkbox',
        inputValue: true,
        boxLabel: '是/否活动页底部宣传图',
        name: 'isHaveBottomBanner',
        labelWidth: 150,
        listeners: {
          change: function (p, v) {
            var next = this.next(),
              nextChilds = next.getRefItems();
            if (v) {
              next.show();
            } else {
              Ext.each(nextChilds, function (el) {
                el.setValue && el.setValue('');
              });

              next.hide();
            }
          }
        }
      }, {
        xtype: 'container',
        hidden: true,
        layout: 'column',
        border: 0,
        defaults: {
          labelWidth: 120
        },
        items: [{
          xtype: 'textfield',
          name: 'bottomBanner',
          style: {
            marginRight: '3px'
          },
          fieldLabel: '活动页底部宣传图',
          itemId: 'bannerBottom',
          width: 230
        }, {
          xtype: 'form',
          border: false,
          items: [{
            xtype: 'filefield',
            name: 'moduleUploadfile',
            buttonOnly: true,
            buttonText: '选择图片',
            hideLabel: true,
            listeners: {
              change: function () {
                var self = this,
                  wins = this.up('window'),
                  form = this.ownerCt,
                  textfield = this.up('container').down('#bannerBottom');

                wins.getImageDimension(this.fileInputEl.dom.files[0], function (v) {
                  self.next().setValue(v);
                  alert(self.next().getValue());
                });
                uploadImage(form, textfield)
              }
            }
          }, {
            xtype: 'hidden',
            name: 'bottomBannerSize'
          }]
        }]
      }]
    },{
			xtype: 'container',
			layout: 'hbox',
			items: [{
				xtype: 'checkbox',
				inputValue: true,
				labelWidth: 120,
				boxLabel: '是否需要店铺连接',
				name: 'showShopLink',
				listeners: {
					change: function (p, v) {
						var next = this.next();
						if (v) {
							next.show();
						} else {
							next.setValue('');
							next.hide();
						}
					}
				}
			}, {
				xtype: 'textfield',
				name: 'shopLink',
				hidden: true,
				style: {
					marginLeft: '10px'
				}
			}]
		}, {
			xtype: 'container',
			defaults: {
				style: {
					marginRight: '5px'
				}
			},
			items: [{
				xtype: 'checkbox',
				inputValue: true,
				labelWidth: 60,
				name: 'showShortName',
				boxLabel: '显示电梯'
			}, {
				xtype: 'checkbox',
				inputValue: true,
				name: 'showName',
				boxLabel: '显示商品组名称'
			}]
		}]
	}],
	buttons: [{
		text: '取消',
		handler: function () {
			this.up('window').close();
		}
	}, {
		text: '确定',
		itemId: 'save'
	}],
	getImageDimension: function (file, callback) {
		var fr = new FileReader;
		fr.onload = function () {
			var img = new Image;
			img.onload = function () {
				callback && callback(img.width + '*' + img.height);
			};
			img.src = fr.result;
		};
		fr.readAsDataURL(file);
	}
});