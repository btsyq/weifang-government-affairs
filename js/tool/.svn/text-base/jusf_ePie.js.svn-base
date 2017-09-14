/**
 * 绘制饼图
 */

!function() {
	var jusfPie = {};

	/**
	 * 通过div的id初始化成功chart，并返回
	 * 
	 * @param id
	 * @returns {{myChart: *, gECharts: *}}
	 */
	function getChart(id) {
		var myChart;
		var gECharts;
		try {
			var ec = require('echarts');
			gECharts = ec;
		} catch (err) {
			gECharts = echarts;
		}
		if (gECharts != null) {
			myChart = gECharts.init(document.getElementById(id));
		}

		return {
			myChart : myChart,
			gECharts : gECharts
		}
	}

	/**
	 * 设置环形饼图的序列数据
	 * 
	 * @param seriesData
	 */
	function getRingPieSeries(seriesData, isShowOuterRing) {
		var series = [];
		var center = [ '50%', '50%' ];

		/**
		 * 添加辅助数据，中心信息提示以及外层环线
		 */
		if (isShowOuterRing != null && isShowOuterRing) {
			for (var j = 0; j < seriesData.length; j++) {
				var tmpItem = {
					name : seriesData[j].name,
					type : 'pie',
					radius : seriesData[j].radius != null ? seriesData[j].radius
							: [ '30%', '55%' ],
					center : seriesData[j].center != null ? seriesData[j].center
							: center,
					data : seriesData[j].data != null ? seriesData[j].data : [],
					itemStyle : {
						normal : {
							borderColor : '#021A4D',
							borderWidth : 2
						},
						emphasis : {
							shadowBlur : 10,
							shadowOffsetX : 0,
							shadowColor : 'rgba(0, 0, 0, 0.5)'
						}
					},
					avoidLabelOverlap : true,
					startAngle : 10,
					minAngle : 4,
					label : {
						normal : {
							show : true,
							position : 'outside',
							textStyle : {
								fontSize : 12
							}
						}
					}
				};

				series.push(tmpItem);
			}

			if (series[0].data.length > 0) {
				var otherItem = {
					type : 'pie',
					center : center,
					radius : [ '63.5%', '64%' ],
					data : [ {
						value : 1,
						name : '辅助数据'
					}, ],
					hoverAnimation : false,
					label : {
						normal : {
							show : false
						},
						emphasis : {
							show : false
						}
					},
					startAngle : 10,
					itemStyle : {
						normal : {
							color : '#1073B6'
						},
						emphasis : {
							color : '#1073B6'
						}
					}
				}
				series.push(otherItem);
			}
		}

		/**
		 * 添加实际数据
		 */
		for (var i = 0; i < seriesData.length; i++) {
			var item = {
				name : seriesData[i].name,
				type : 'pie',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: [ '30%', '55%' ],
				center : seriesData[i].center != null ? seriesData[i].center
						: center,
				data : seriesData[i].data != null ? seriesData[i].data : [],
				itemStyle : {
					normal : {
						borderColor : '#021A4D',
						borderWidth : 2
					},
					emphasis : {
						shadowBlur : 10,
						shadowOffsetX : 0,
						shadowColor : 'rgba(0, 0, 0, 0.5)'
					}
				},
				avoidLabelOverlap : false,
				startAngle : 10,
				minAngle : 4,
				label : {
					normal : {
						show : false,
						position : 'center'
					},
					emphasis : {
						show : true,
						textStyle : {
							fontSize : '12',
							fontWeight : 'bold'
						},
						position : 'center',
						formatter : function(params) {
							return params.percent + '\t' + '%';
						}
					}
				}
			};

			series.push(item);
		}

		return series;
	}

	/**
	 * 新版本UI-环形圈在内圈,外侧标签颜色，选中标签在中心 设置环形饼图的序列数据
	 * 
	 * @param seriesData
	 */
	function getRingPieRSeries(seriesData, params) {
		var series = [];
		var center = [ '50%', '50%' ];
		var defaultRadius = [ '42%', '75%' ];
		var defaultRadius2 = [ '39.5%', '40%' ];
		var defaultLabelCenterSize = 24;
		var unificationLineColor = '#13457D';
		var unificationLableColor = '#338CD9';

		var itemStyle = {
			normal : {
				borderColor : '#021A4D',
				borderWidth : 2
			},
			emphasis : {
				color : '#F77B17',
				shadowBlur : 10,
				shadowOffsetX : 0,
				shadowColor : 'rgba(0, 0, 0, 0.5)'
			}
		};

		var labelLine = {
			normal : {},
			emphasis : {
				lineStyle : {
					color : "#F77B17"
				}
			}
		};

		var outsideLable = {
			normal : {
				show : true,
				position : 'outside',
				textStyle : {
					fontSize : 14
				}
			},
			emphasis : {
				textStyle : {
					color : '#F77B17',
					fontSize : 14
				}
			}
		};

		if (params != null) {
			var type = params.type != null ? params.type : 1;// 标识圆圈是内环还是外环，0外环；1内环
			var subType = params.subType != null ? params.subType : 0;// 标识
			// 饼图标签
			// 以及 标线
			// 的颜色，0，根据饼图自适应外环；1，统一颜色
			if (type == 0) {
				defaultRadius = [ '32%', '65%' ];
				defaultRadius2 = [ '75.5%', '76%' ];
				defaultLabelCenterSize = 18;
			}

			if (subType == 1) {
				labelLine.normal = {
					lineStyle : {
						color : unificationLineColor
					}
				};
				outsideLable.normal = {
					show : true,
					position : 'outside',
					textStyle : {
						fontSize : 14,
						color : unificationLableColor
					}
				};
			}
		}

		/**
		 * 添加辅助数据，中心信息提示以及内层环线
		 */
		for (var j = 0; j < seriesData.length; j++) {
			var tmpItem = {
				name : seriesData[j].name,
				type : 'pie',
				radius : seriesData[j].radius != null ? seriesData[j].radius
						: defaultRadius,
				center : seriesData[j].center != null ? seriesData[j].center
						: center,
				data : seriesData[j].data != null ? seriesData[j].data : [],
				itemStyle : itemStyle,
				avoidLabelOverlap : true,
				startAngle : 10,
				minAngle : 4,
				label : outsideLable,
				labelLine : labelLine
			};

			series.push(tmpItem);
		}

		if (series[0].data.length > 0) {
			var otherItem = {
				type : 'pie',
				center : center,
				radius : defaultRadius2,
				data : [ {
					value : 1,
					name : '辅助数据'
				}, ],
				hoverAnimation : false,
				label : {
					normal : {
						show : false
					},
					emphasis : {
						show : false
					}
				},
				startAngle : 10,
				itemStyle : {
					normal : {
						color : '#1073B6'
					},
					emphasis : {
						color : '#1073B6'
					}
				}
			}
			series.push(otherItem);
		}

		/**
		 * 添加实际数据
		 */
		for (var i = 0; i < seriesData.length; i++) {
			var item = {
				name : seriesData[i].name,
				type : 'pie',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: defaultRadius,
				center : seriesData[i].center != null ? seriesData[i].center
						: center,
				data : seriesData[i].data != null ? seriesData[i].data : [],
				itemStyle : itemStyle,
				avoidLabelOverlap : false,
				startAngle : 10,
				minAngle : 4,
				label : {
					normal : {
						show : false,
						position : 'center'
					},
					emphasis : {
						show : true,
						textStyle : {
							fontSize : defaultLabelCenterSize,
							fontWeight : 'bold',
							color : '#F77B17'
						},
						position : 'center',
						formatter : function(params) {
							return params.percent + '\t' + '%';
						}
					}
				}
			};

			series.push(item);
		}

		return series;
	}

	/**
	 * 获取双色环形饼图的序列数据
	 * 
	 * @param seriesData
	 * @param ec
	 * @returns {Array}
	 */
	function getRingPieDoubleColorSeries(seriesData, ec) {
		var series = [];
		var assistData = [ {
			value : seriesData[0].data[0].value
		} ];

		for (var i = 0; i < seriesData.length; i++) {
			var data = seriesData[i].data;
			for (var k = 0; k < data.length; k++) {
				if (k == 0) {
					data[k].itemStyle = {
						normal : {
							color : new ec.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset : 0,
										color : '#FBE459' // 0% 处的颜色
									}, {
										offset : 1,
										color : '#E61E1D' // 100% 处的颜色
									} ], false),
							opacity : 1
						},
						emphasis : {
							color : new ec.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset : 0,
										color : '#FBE459' // 0% 处的颜色
									}, {
										offset : 1,
										color : '#E61E1D' // 100% 处的颜色
									} ], false),
							opacity : 1
						}
					}
				} else {
					data[k].tooltip = {
						show : false
					};
					data[k].itemStyle = {
						normal : {
							color : '#02174C',
							opacity : 1
						},
						emphasis : {
							color : '#02174C',
							opacity : 1
						}
					}
				}
			}

			var item = {
				name : seriesData[i].name,
				type : 'pie',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: [ '70%', '82%' ],
				center : seriesData[i].center != null ? seriesData[i].center
						: [ '50%', '50%' ],
				data : data,
				avoidLabelOverlap : false,
				label : {
					normal : {
						show : false
					}
				},
				silent : true,
				tooltip : {
					show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
							: true
				}
			};

			series.push(item);
		}

		var assistItem = {
			type : 'pie',
			radius : [ '0%', '50%' ],
			center : [ '50%', '50%' ],
			data : assistData,
			avoidLabelOverlap : true,
			hoverAnimation : false,
			label : {
				normal : {
					position : 'center',
					textStyle : {
						color : '#FED731',
						fontSize : 12
					},
					formatter : function(params) {
						return params.value + '%';
					}
				}
			},
			itemStyle : {
				normal : {
					color : '#02174C',
					opacity : 0.5
				},
				emphasis : {
					color : '#02174C',
					opacity : 0.5
				}
			},
			tooltip : {
				show : false
			}
		}
		series.push(assistItem);

		return series;
	}

	/**
	 * 设置渐进色
	 * 
	 * @param seriesData
	 * @param i
	 * @param ec
	 * @returns {*}
	 */
	function setDataByLinearGradient(seriesData, i, ec, isAnother) {
		var defaultNameColor = seriesData[i].nameColor != null ? seriesData[i].nameColor
				: '#DD5B19';
		var data = seriesData[i].data;
		for (var k = 0; k < data.length; k++) {
			if (k == 1) {
				data[k].itemStyle = {
					normal : {
						color : new ec.graphic.LinearGradient(0, 0, 0, 1, [ {
							offset : 0,
							color : seriesData[0].colors[1]
						// 0% 处的颜色
						}, {
							offset : 1,
							color : seriesData[0].colors[0]
						// 100% 处的颜色
						} ], false),
						opacity : 1
					},
					emphasis : {
						color : new ec.graphic.LinearGradient(0, 0, 0, 1, [ {
							offset : 0,
							color : seriesData[0].colors[1]
						// 0% 处的颜色
						}, {
							offset : 1,
							color : seriesData[0].colors[0]
						// 100% 处的颜色
						} ], false),
						opacity : 1
					}
				}
				if (isAnother) {// 设置比例数据显示样式
					data[k].label = {
						normal : {
							formatter : function(param) {
								return "\n" + param.percent + '%';
							},
							textStyle : {
								color : '#FFFFFF',
								fontSize : 16
							}
						}
					};
				}
			} else {
				data[k].tooltip = {
					show : false
				};
				data[k].itemStyle = {
					normal : {
						color : '#0C56C0',
						opacity : 1
					},
					emphasis : {
						color : '#0C56C0',
						opacity : 1
					}
				}
				if (isAnother) {// 设置名称数据显示样式
					data[k].label = {
						normal : {
							show : true,
							position : 'center',
							formatter : function(param) {
								return data[1].name;
							},
							textStyle : {
								color : defaultNameColor,
								fontSize : 19
							}
						}
					};
				}
			}
		}

		return data;
	}

	/**
	 * 设置中心提示信息‘55%’
	 * 
	 * @returns {{type: string, radius: string[], center: string[], data: *[],
	 *          avoidLabelOverlap: boolean, hoverAnimation: boolean, label:
	 *          {normal: {position: string, textStyle: {color: string, fontSize:
	 *          number}, formatter: Function}}, itemStyle: {normal: {color:
	 *          string}, emphasis: {color: string}}, tooltip: {show: boolean}}}
	 */
	function setAssistItem(assistData) {
		/**
		 * 中心‘55%’提示信息
		 * 
		 * @type {{type: string, radius: string[], center: string[], data: *[],
		 *       avoidLabelOverlap: boolean, hoverAnimation: boolean, label:
		 *       {normal: {position: string, textStyle: {color: string,
		 *       fontSize: number}, formatter: Function}}, itemStyle: {normal:
		 *       {color: string}, emphasis: {color: string}}, tooltip: {show:
		 *       boolean}}}
		 */
		var item = {
			type : 'pie',
			radius : [ '0%', '40%' ],
			center : [ '50%', '65%' ],
			data : assistData,
			avoidLabelOverlap : false,
			hoverAnimation : false,
			label : {
				normal : {
					position : 'center',
					textStyle : {
						color : '#B8BBC3',
						fontSize : 16
					},
					formatter : function(params) {
						return params.value + '%';
					}
				}
			},
			itemStyle : {
				normal : {
					color : 'transparent',
				},
				emphasis : {
					color : 'transparent',
				}
			},
			tooltip : {
				show : false
			}
		}

		return item;
	}

	/**
	 * 设置环形饼图option，样式参照首页--‘本月投诉’， 标题在饼图下侧
	 * 
	 * @param seriesData
	 * @param ec
	 * @returns {Array}
	 */
	function getRingPieDoubleOtherSeries(seriesData, ec) {
		var series = [];

		for (var i = 0; i < seriesData.length; i++) {
			var data = setDataByLinearGradient(seriesData, i, ec, false);

			var item = {
				name : seriesData[i].name,
				type : 'pie',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: [ '70%', '82%' ],
				center : seriesData[i].center != null ? seriesData[i].center
						: [ '50%', '42%' ],
				data : data,
				avoidLabelOverlap : false,
				label : {
					normal : {
						show : false
					}
				},
				silent : true,
				tooltip : {
					show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
							: true
				}
			};

			series.push(item);
		}

		var assistData = [ {
			value : seriesData[0].data[1].value
		} ];
		var assistItem = setAssistItem(assistData);

		series.push(assistItem);

		return series;
	}

	/**
	 * 设置环形饼图option，样式参照民意预测页面--‘下月民意内容预测’， 标题在饼图下侧
	 * 
	 * @param seriesData
	 * @param ec
	 */
	function getRingPieDoubleAnotherSeries(seriesData, ec) {
		var series = [];

		for (var i = 0; i < seriesData.length; i++) {
			var data = setDataByLinearGradient(seriesData, i, ec, true);

			var item = {
				name : seriesData[i].name,
				type : 'pie',
				silent : true,
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: [ '76%', '90%' ],
				center : seriesData[i].center != null ? seriesData[i].center
						: [ '50%', '50%' ],
				data : data,
				avoidLabelOverlap : true,
				label : {
					normal : {
						show : true,
						position : 'center'
					}
				},
				tooltip : {
					show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
							: true
				}
			};

			series.push(item);
		}

		return series;
	}

	/**
	 * 获得南丁格尔玫瑰图的序列数据
	 * 
	 * @param seriesData
	 * @returns {Array}
	 */
	function getRosePieSeries(seriesData) {
		var series = [];

		for (var i = 0; i < seriesData.length; i++) {
			var item = {
				name : seriesData[i].name,
				type : 'pie',
				roseType : seriesData[i].roseType != null ? seriesData[i].roseType
						: 'radius',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: [ '25%', '70%' ],
				center : seriesData[i].center != null ? seriesData[i].center
						: [ '50%', '55%' ],
				data : seriesData[i].data != null ? seriesData[i].data : [],
				avoidLabelOverlap : true,
				startAngle : 10,
				minAngle : 4,
				label : {
					normal : {
						show : true,
						position : 'outside',
						textStyle : {
							color : '#fff',
							fontSize : 12
						}
					}
				},
				tooltip : {
					show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
							: true
				}
			};

			series.push(item);
		}

		/**
		 * 辅助数据item
		 * 
		 * @type {{type: string, radius: string[], center: string[], data: *[],
		 *       avoidLabelOverlap: boolean, hoverAnimation: boolean, label:
		 *       {normal: {show: boolean}, emphasis: {show: boolean}},
		 *       itemStyle: {normal: {color: string}, emphasis: {shadowBlur:
		 *       number, shadowOffsetX: number, shadowColor: string}}, tooltip:
		 *       {show: boolean}}}
		 */
		if (series[0].data.length > 0) {
			var assistItem = {
				type : 'pie',
				radius : [ '20%', '20.5%' ],
				center : [ '50%', '55%' ],
				startAngle : 10,
				data : [ {
					value : '1'
				} ],
				avoidLabelOverlap : true,
				hoverAnimation : false,
				label : {
					normal : {
						show : false
					},
					emphasis : {
						show : false
					}
				},
				itemStyle : {
					normal : {
						color : '#1581F0'
					},
					emphasis : {
						shadowBlur : 10,
						shadowOffsetX : 0,
						shadowColor : 'rgba(0, 0, 0, 0.5)'
					}
				},
				tooltip : {
					show : false
				}
			};
			series.push(assistItem);
		}
		return series;
	}

	/**
	 * 获取环形排序图的序列数据
	 * 
	 * @param seriesData
	 * @returns {Array}
	 */
	function getRingSortPieSeries(seriesData, colors) {
		var series = [];
		var radiusData = [ [ '15%', '27%' ], [ '27%', '39%' ],
				[ '39%', '51%' ], [ '51%', '63%' ] ];
		for (var i = 0; i < seriesData.length; i++) {
			if (i > 3) {
				var data = seriesData[i].data;
				data[0].itemStyle = {
					normal : {
						color : 'transparent'
					},
					emphasis : {
						color : 'transparent'
					}
				};
				data[0].tooltip = {
					show : false
				};
				var item = {
					name : seriesData[i].name,
					type : 'pie',
					radius : seriesData[i].radius != null ? seriesData[i].radius
							: radiusData[i % 4],
					center : seriesData[i].center != null ? seriesData[i].center
							: [ '50%', '52%' ],
					data : data,
					avoidLabelOverlap : true,
					// hoverAnimation: false,
					label : {
						normal : {
							show : false,
						}
					},
					tooltip : {
						show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
								: true
					}
				};

				series.push(item);
			} else {
				var addedData = seriesData[i].data;
				addedData[0].itemStyle = {
					normal : {
						color : colors[i % 4],
						opacity : 0
					},
					emphasis : {
						color : colors[i % 4],
						opacity : 0
					}
				};
				addedData[0].label = {
					normal : {
						show : true,
						textStyle : {
							fontSize : 12
						},
						formatter : function(params) {
							var hint = '';
							if (params.data.percent != null) {
								var percent = params.data.percent;
								hint = (Number(percent) != 0 && percent != '-') ? (percent
										+ '\t' + '%')
										: '';
							}

							return hint;
						}
					}
				};
				addedData[0].tooltip = {
					show : false
				};
				addedData[1].tooltip = {
					show : false
				};

				var percent = addedData[0].percent != null ? Number(addedData[0].percent)
						: 0;
				var addedOneIsShow = (addedData[0].value > 0 && percent > 0) ? true
						: false
				addedData[0].labelLine = {
					normal : {
						show : addedOneIsShow,
						length : 0,
						length2 : 120
					},
					emphasis : {
						show : true,
						length : 0,
						length2 : 120
					}
				};

				var tmpitem = {
					type : 'pie',
					radius : seriesData[i].radius != null ? seriesData[i].radius
							: radiusData[i % 4],
					center : seriesData[i].center != null ? seriesData[i].center
							: [ '50%', '52%' ],
					data : addedData,
					avoidLabelOverlap : true,
					hoverAnimation : false,
					label : {
						normal : {
							show : false,
							position : 'outside'
						}
					},
					itemStyle : {
						normal : {
							color : 'transparent'
						},
						emphasis : {
							color : 'transparent'
						}
					}
				};

				series.push(tmpitem);
			}
		}

		return series;
	}

	/**
	 * 获取双环饼图的序列数据
	 * 
	 * @param seriesData
	 * @returns {Array}
	 */
	function getDoubleRingPieSeries(seriesData, type) {
		var series = [];
		var radiusData = [ [ '25%', '45%' ], [ '55%', '66%' ] ];
		var clockWise = (type != null && (type == 0 || type == '-')) ? false
				: true;
		var defaultCenter = [ '49%', '51%' ];

		for (var i = 0; i < seriesData.length; i++) {
			var item = {
				name : seriesData[i].name,
				type : 'pie',
				radius : seriesData[i].radius != null ? seriesData[i].radius
						: radiusData[i % 2],
				center : seriesData[i].center != null ? seriesData[i].center
						: defaultCenter,
				data : seriesData[i].data,
				clockwise : i % 2 == 0 ? clockWise : true,
				avoidLabelOverlap : true,
				label : {
					normal : {
						show : i % 2 == 0 ? false : true
					}
				},
				itemStyle : {
					normal : {
						borderColor : '#021A4D',
						borderWidth : 2
					},
					emphasis : {
						shadowBlur : 10,
						shadowOffsetX : 0,
						shadowColor : 'rgba(0, 0, 0, 0.5)'
					}
				},
				tooltip : {
					show : seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow
							: true
				}
			};

			series.push(item);
		}

		/**
		 * 防止外层圆环显示标签重叠
		 * 
		 * @type {number}
		 */
		series[1].startAngle = 10;
		series[1].minAngle = 4;

		var assistItem = {
			name : seriesData[0].name,
			type : 'pie',
			radius : seriesData[0].radius != null ? seriesData[0].radius : [
					'0%', '42%' ],
			center : seriesData[0].center != null ? seriesData[0].center
					: defaultCenter,
			data : seriesData[0].data,
			avoidLabelOverlap : false,
			clockwise : clockWise,
			label : {
				normal : {
					show : false,
					position : 'center'
				},
				emphasis : {
					show : true,
					position : 'center',
					textStyle : {
						fontSize : 12
					},
					formatter : function(params) {
						return params.percent + '\t' + '%';
					}
				}
			},
			itemStyle : {
				normal : {
					opacity : 0,
					borderColor : '#021A4D',// 与背景颜色要一致，否则看不出间隔效果
					borderWidth : 2
				},
				emphasis : {
					opacity : 0.5,
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			},
			tooltip : {
				show : seriesData[0].tooltipIsShow != null ? seriesData[0].tooltipIsShow
						: false
			}
		}
		series.push(assistItem);

		return series;
	}

	/**
	 * 赋值
	 * 
	 * @param obj
	 * @param fromObj
	 */
	function setOptionParam(obj, fromObj) {
		if (fromObj != null) {
			return fromObj;
		}
		return obj;
	}

	/**
	 * 设置饼图的基础option
	 * 
	 * @param datas
	 * @returns {{backgroundColor: string, title: *[], tooltip: {show: *,
	 *          trigger: string, borderColor: string, borderWidth: number,
	 *          padding: number, backgroundColor: string}, legend: {data: Array,
	 *          show: *, y: string, left: string, x: string, orient: string,
	 *          textStyle: {fontSize: number, color: string}}, toolbox: {right:
	 *          string, show: *, feature: {saveAsImage: {show: boolean,
	 *          iconStyle: {normal: {color: string, borderColor: string,
	 *          borderWidth: number, opacity: number}, emphasis: {color: string,
	 *          borderColor: string, borderWidth: number}}}}},
	 *          animationDuration: number, animationEasingUpdate: string}}
	 */
	function setBaseOption(datas, defaultColors) {
		var title = {};
		var tooltip = {};
		var legend = {};
		var toolbox = {};

		title = setOptionParam(title, datas.title);
		tooltip = setOptionParam(tooltip, datas.tooltip);
		legend = setOptionParam(legend, datas.legend);
		toolbox = setOptionParam(toolbox, datas.toolbox);

		var baseOption = {
			// backgroundColor: datas.backgroundColor != null ?
			// datas.backgroundColor : 'transparent',
			title : [ {// 设置文字标题左侧颜色条
				show : title.isShow != null ? title.isShow : true,
				text : '',
				padding : 0,
				x : 12,
				top : '2.3%',
				backgroundColor : '#FC3E1D',
				// borderWidth: 3.5,
				// borderColor: '#FC3E1D',//显示时，可显示左侧红色矩形条
				textStyle : {
					fontSize : 22
				}
			}, {
				show : title.isShow != null ? title.isShow : true,
				text : title.text != null ? title.text : '',
				subtext : title.subtext != null ? title.subtext : '',
				subtextStyle : {
					color : '#fff'
				},
				x : 13,
				top : '2%',
				textStyle : {
					color : '#fff',
					fontSize : 18
				}
			} ],
			tooltip : {
				show : tooltip.isShow != null ? tooltip.isShow : true,
				trigger : 'item',
				borderColor : '#419FFC',
				borderWidth : 1.5,
				padding : [ 8, 12, 8, 12 ],
				backgroundColor : "rgba(2,30,103,0.5)",
				formatter : function(params) {
					var hint = '';

					hint = hint + params.name + '\t' + ':' + '\t'
							+ params.value + '\t' + '(' + params.percent + '%)';

					return hint;
				}
			},
			legend : {
				orient : 'vertical',
				top : 'center',
				left : '82%',// 调节左侧距离，保持在同一个页面，div宽度一致时，图例标志对齐
				height : '94%',
				data : legend.data != null ? legend.data : [],
				show : legend.isShow != null ? legend.isShow : true,
				textStyle : {
					fontSize : 12,
					color : '#FFFFFF'
				},
				padding : [ 8, 12, 8, 12 ],
				itemHeight : 7,
			},
			toolbox : {
				right : '17',
				y : '10',
				show : toolbox.isShow != null ? toolbox.isShow : true,
				feature : {
					saveAsImage : {
						show : true,
						backgroundColor : toolbox.backgroundColor != null ? toolbox.backgroundColor
								: '#002e73',
						iconStyle : {
							normal : {
								borderColor : '#0084ff'
							}
						}
					}
				}
			},
			animationDuration : 1500,
			animationEasingUpdate : 'quinticInOut'
		};

		// 可设置自定义颜色
		if (datas.colors != null) {
			baseOption.color = datas.colors;
		} else if (datas.colors == null && legend.data != null) {
			var length = legend.data.length;
			var colors = [ '#FC3E1D', '#1787FB', '#FEE233', '#FD9526',
					'#149343', '#1BA4DE', '#28E4FD', '#1FB5FC' ];
			if (defaultColors != null) {
				colors = defaultColors;
			}

			var m = Math.floor(length / colors.length);
			var n = length % colors.length;
			var tColors = [];
			for (var i = 0; i < m; i++) {
				tColors = tColors.concat(colors);
			}
			tColors = tColors.concat(colors.slice(0, n));
			baseOption.color = tColors;
		}

		return baseOption;
	}

	/**
	 * 设置环形饼图的option
	 * 
	 * @param datas
	 */
	function initRingPieOption(datas, isShowOuterRing) {
		var option = setBaseOption(datas);
		var series = [];
		series = setOptionParam(series, datas.series);

		option.series = getRingPieSeries(series, isShowOuterRing);

		return option;
	}

	/**
	 * 设置双色环形饼图的option----第一个环为实际数据
	 * 
	 * @param datas
	 * @param ec
	 */
	function initRingPieDoubleColorOption(datas, ec) {
		var option = setBaseOption(datas);
		/**
		 * 设置该类型饼图默认不添加保存标识
		 * 
		 * @type {{}}
		 */
		var toolbox = {};
		toolbox = setOptionParam(toolbox, datas.toolbox);
		option.toolbox.show = toolbox.isShow != null ? toolbox.isShow : false;

		var series = [];
		series = setOptionParam(series, datas.series);

		option.series = getRingPieDoubleColorSeries(series, ec);

		return option;
	}

	/**
	 * 设置双色环形饼图的option----第二个环为实际数据
	 * 
	 * @param datas
	 * @param ec
	 * @returns {{backgroundColor: string, title: *[], tooltip: {show: *,
	 *          trigger: string, borderColor: string, borderWidth: number,
	 *          padding: number, backgroundColor: string}, legend: {data: Array,
	 *          show: *, y: string, left: string, x: string, orient: string,
	 *          textStyle: {fontSize: number, color: string}}, toolbox: {right:
	 *          string, show: *, feature: {saveAsImage: {show: boolean,
	 *          iconStyle: {normal: {color: string, borderColor: string,
	 *          borderWidth: number, opacity: number}, emphasis: {color: string,
	 *          borderColor: string, borderWidth: number}}}}},
	 *          animationDuration: number, animationEasingUpdate: string}}
	 */
	function initRingPieDoubleOtherOption(datas, ec) {
		var option = setBaseOption(datas);

		/**
		 * 设置该类型饼图默认不添加保存标识
		 * 
		 * @type {{}}
		 */
		var toolbox = {};
		toolbox = setOptionParam(toolbox, datas.toolbox);
		option.toolbox.show = toolbox.isShow != null ? toolbox.isShow : false;

		var series = [];
		series = setOptionParam(series, datas.series);

		var title = {};
		title = setOptionParam(title, datas.title);
		option.title = [ {
			show : title.isShow != null ? title.isShow : true,
			text : title.text != null ? title.text : '',
			left : 'center',
			top : '75%',
			textStyle : {
				color : '#fff',
				fontSize : 14,
				fontWeight : 'normal'
			}
		} ];

		option.series = getRingPieDoubleOtherSeries(series, ec);

		return option;
	}

	/**
	 * 以 民意预测页面--下月民意预测 为例 设置环形饼图的option
	 * 
	 * @param datas
	 * @param ec
	 * @returns {{backgroundColor: string, title: *[], tooltip: {show: *,
	 *          trigger: string, borderColor: string, borderWidth: number,
	 *          padding: number, backgroundColor: string}, legend: {data: Array,
	 *          show: *, y: string, left: string, x: string, orient: string,
	 *          textStyle: {fontSize: number, color: string}}, toolbox: {right:
	 *          string, show: *, feature: {saveAsImage: {show: boolean,
	 *          iconStyle: {normal: {color: string, borderColor: string,
	 *          borderWidth: number, opacity: number}, emphasis: {color: string,
	 *          borderColor: string, borderWidth: number}}}}},
	 *          animationDuration: number, animationEasingUpdate: string}}
	 */
	function initRingPieDoubleAnotherOption(datas, ec) {
		var option = setBaseOption(datas);

		/**
		 * 设置该类型饼图默认不添加保存标识
		 * 
		 * @type {{}}
		 */
		var toolbox = {};
		toolbox = setOptionParam(toolbox, datas.toolbox);
		option.toolbox.show = toolbox.isShow != null ? toolbox.isShow : false;

		var series = [];
		series = setOptionParam(series, datas.series);

		var title = {};
		title = setOptionParam(title, datas.title);
		option.title = [ {
			show : title.isShow != null ? title.isShow : true,
			text : title.text != null ? title.text : '',
			left : 'center',
			top : '52%',
			textStyle : {
				color : '#B8B9C0',
				fontSize : 12
			}
		} ];

		option.series = getRingPieDoubleAnotherSeries(series, ec);

		return option;
	}

	/**
	 * 设置南丁格尔玫瑰图的option
	 * 
	 * @param datas
	 * @returns {{backgroundColor: string, title: *[], tooltip: {show: *,
	 *          trigger: string, borderColor: string, borderWidth: number,
	 *          padding: number, backgroundColor: string}, legend: {data: Array,
	 *          show: *, y: string, left: string, x: string, orient: string,
	 *          textStyle: {fontSize: number, color: string}}, toolbox: {right:
	 *          string, show: *, feature: {saveAsImage: {show: boolean,
	 *          iconStyle: {normal: {color: string, borderColor: string,
	 *          borderWidth: number, opacity: number}, emphasis: {color: string,
	 *          borderColor: string, borderWidth: number}}}}},
	 *          animationDuration: number, animationEasingUpdate: string}}
	 */
	function initRosePieOption(datas) {
		var option = setBaseOption(datas);
		var series = [];
		series = setOptionParam(series, datas.series);
		option.legend.show = true;
		option.series = getRosePieSeries(series);

		return option;
	}

	/**
	 * 设置环形排序饼图的option
	 * 
	 * @param datas
	 * @returns {{backgroundColor: string, title: *[], tooltip: {show: *,
	 *          trigger: string, borderColor: string, borderWidth: number,
	 *          padding: number, backgroundColor: string}, legend: {data: Array,
	 *          show: *, y: string, left: string, x: string, orient: string,
	 *          textStyle: {fontSize: number, color: string}}, toolbox: {right:
	 *          string, show: *, feature: {saveAsImage: {show: boolean,
	 *          iconStyle: {normal: {color: string, borderColor: string,
	 *          borderWidth: number, opacity: number}, emphasis: {color: string,
	 *          borderColor: string, borderWidth: number}}}}},
	 *          animationDuration: number, animationEasingUpdate: string}}
	 */
	function initRingSortPieOption(datas) {
		var option = setBaseOption(datas);
		var series = [];
		series = setOptionParam(series, datas.series);
		option.legend.show = true;
		option.series = getRingSortPieSeries(series, option.color);

		return option;
	}

	/**
	 * 设置双环形饼图的option
	 * 
	 * @param datas
	 */
	function initDoubleRingPieOption(datas, type) {
		var option = setBaseOption(datas);
		var series = [];
		series = setOptionParam(series, datas.series);
		option.title[0].show = false;
		option.title[1].show = false;
		var legend = {};
		legend = setOptionParam(legend, datas.legend);
		option.legend = [
				{
					orient : 'vertical',
					left : '2%',
					top : 'center',
					x : 'left',
					data : (legend[0] != null && legend[0].data != null) ? legend[0].data
							: (legend.data != null ? legend.data : []),
					show : (legend[0] != null && legend[0].isShow != null) ? legend[0].isShow
							: (legend.isShow != null ? legend.isShow : true),
					textStyle : {
						fontSize : 12,
						color : '#fff'
					},
					height : '70%'
				},
				{
					orient : 'vertical',
					top : 'center',
					right : '2.5%',
					height : '70%',
					data : (legend[1] != null && legend[1].data != null) ? legend[1].data
							: [],
					show : (legend[1] != null && legend[1].isShow != null) ? legend[1].isShow
							: true,
					textStyle : {
						fontSize : 12,
						color : '#fff'
					},
					borderColor : '#419FFC',
					borderWidth : 0.5,
					padding : [ 8, 12, 8, 12 ],
					backgroundColor : "rgba(2,30,103,0.5)",
					itemHeight : 7,
				// align: 'right'//图例标记和文本的对齐
				} ];

		// 可设置自定义颜色
		if (datas.colors != null) {
			option.color = datas.colors;
		} else if (datas.colors == null && option.legend[0].data != null
				&& option.legend[1].data != null) {
			var colors = [];
			var size;
			if (type != null && (type == 0 || type == '-')) {
				colors = [ '#976EFB', '#423691', '#4F5AC2', '#5E659A',
						'#FC3E1D', '#FD8825', '#FDB92C', '#FCFD37', '#87C826',
						'#1DBD90', '#0B54B1' ];
			} else {
				colors = [ '#FC3E1D', '#FA8023', '#FDB92C', '#FCFD37',
						'#87C826', '#1DBD90', '#28E4FD', '#1FB5FC', '#157CFB',
						'#1056FB', '#0835CC', '#976EFB', '#423691', '#4F5AC2',
						'#5E659A' ];
			}

			size = colors.length;
			var num;
			if (legend instanceof Array) {
				num = option.legend[0].data.length
						+ option.legend[1].data.length;
			} else {
				num = legend.data.length;
			}

			if (option.legend[1].data.length == 0) {
				option.legend[1].show = false
			}

			var m = Math.floor(num / size);
			var n = num % size;
			var tColors = [];
			for (var i = 0; i < m; i++) {
				tColors = tColors.concat(colors);
			}
			tColors = tColors.concat(colors.slice(0, n));
			option.color = tColors;
		}
		option.series = getDoubleRingPieSeries(series, type);

		return option;
	}

	/**
	 * 首页地图交互事件--热线分析--热点类型分析
	 * 
	 * @param datas
	 */
	function initRingPieR01Option(datas) {
		var defaultColors = [ '#2A52C6', '#2B54CA', '#2B62D2', '#347FE5',
				'#389BEE', '#A6D845', '#4AC977', '#09B2E9', '#FF502D',
				'#FF8D27' ];
		var option = setBaseOption(datas, defaultColors);
		var series = [];
		series = setOptionParam(series, datas.series);

		/**
		 * 选中区域为黄色:#F77B17
		 * 
		 * @type {{type: number}}
		 */
		var params = {
			type : 1
		};

		option.series = getRingPieRSeries(series, params);

		return option;
	}

	/**
	 * 以 单个部门-下拉.满意度分析 为例
	 * 
	 * @param datas
	 */
	function initRingPieR02Option(datas) {
		var defaultColors = [ '#0078FF', '#FFBA00', '#2A52C6', '#2B54CA',
				'#2B62D2', '#347FE5', '#389BEE' ];
		var option = setBaseOption(datas, defaultColors);
		var series = [];
		series = setOptionParam(series, datas.series);

		var params = {
			type : 0
		// 圆圈在外侧
		};

		option.series = getRingPieRSeries(series, params);

		return option;
	}

	/**
	 * 1 以 网络部门热线 -- 本市诉求热点分布 为例 2 以 网络部门热线 -- 民意钻取--民意类型环形图 为例
	 * 
	 * @param datas
	 */
	function initRingPieR03Option(datas) {
		var defaultColors = [ '#FF502D', '#FF8D27', '#A6D845', '#4AC977',
				'#09B2E9', '#168FFF', '#1F6EFF', '#2F58ED', '#2A3ED2',
				'#4A3FB0', '#6F3FB0', '#338CD9' ];
		var option = setBaseOption(datas, defaultColors);
		var series = [];
		series = setOptionParam(series, datas.series);

		var params = {
			type : 1,// 圆圈在外侧
			subType : 1
		// 标签颜色为
		};

		option.series = getRingPieRSeries(series, params);

		return option;
	}

	/**
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawCommonPie = function(id, datas) {

	}

	/**
	 * 以 民意类型分析 为基础 通用环形图--带有border； 环形获取焦点时，中心提示信息出现
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRingPie = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieOption(datas, true);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 受理民意来源分布 为基础 通用环形图--不带有外环蓝色线，以及外侧提示信息
	 * 
	 * @param id
	 * @param datas
	 * @param fn
	 *            点击函数
	 * @param param
	 *            点击参数
	 * 
	 */
	jusfPie.drawRingPieOther = function(id, datas, fn, param) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();
				// 设置option
				var option = initRingPieOption(datas, true);
				option.legend.right = '5%';
				option.legend.y = '11%';
				myChart.setOption(option);
				myChart.on('click',
						function(params) {
							// 点击调用,辅助内圈点击无效
							if (param != null && fn != null
									&& params.seriesIndex == 0) {
								if (param instanceof Array) {
									var arrayP = [];
									for (var i = 0; i < param.length; i++) {
										arrayP.push(params.data[param[i]])
									}
									fn(arrayP);
								} else {
									fn(params.data[param])
								}
							} else {
								fn(params);
							}
						})
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 首页 ---满意度 为例 绘制 双色环形饼图
	 * 
	 * @param id
	 * @param datas
	 * @returns {*}
	 */
	jusfPie.drawRingPieDoubleColor = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieDoubleColorOption(datas, chart.gECharts);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 首页--导航栏下侧右边 ，‘本月投诉’、‘本月举报’等样式 绘制环形饼图，标题位置在饼图下侧
	 * 
	 * @param id
	 * @param datas
	 * @returns {*}
	 */
	jusfPie.drawRingPieDoubleOther = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieDoubleOtherOption(datas, chart.gECharts);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 绘制环形饼图，标题内容在环形中间
	 * 
	 * @param id
	 * @param datas
	 * @returns {*}
	 */
	jusfPie.drawRingPieDoubleAnother = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieDoubleAnotherOption(datas,
						chart.gECharts);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 民意预测--当月民意类型占比 为例 绘制南丁格尔玫瑰图
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRosePie = function(id, datas, fn, param) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRosePieOption(datas);

				myChart.setOption(option);
				myChart.on('click',
						function(params) {
							// 点击调用,辅助内圈点击无效
							if (param != null && fn != null
									&& params.seriesIndex == 0) {
								if (param instanceof Array) {
									var arrayP = [];
									for (var i = 0; i < param.length; i++) {
										arrayP.push(params.data[param[i]])
									}
									fn(arrayP);
								} else {
									fn(params.data[param])
								}
							}
						})
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 民意预测----民意类型分析 为例 绘制环形排序饼图
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRingSortPie = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingSortPieOption(datas);

				myChart.setOption(option);

			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 部门民意-市直机关单位--民意内容环形图 为例 绘制双环形图，扇形区域覆盖
	 * 
	 * @param id
	 * @param datas
	 * @param
	 *            type，两种情况：1）type=0或者‘-’，适用场景：受理民意环形图；2）type==undefined或者其他数字,适用场景：民意内容环形图
	 * @param subDatas,适用场景：受理民意环形图，点击事件所需数据
	 * @returns {*}
	 */
	jusfPie.drawDoubleRingPie = function(id, datas, type, subDatas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initDoubleRingPieOption(datas, type);

				myChart.setOption(option);
				myChart
						.on(
								'click',
								function(params) {
									/**
									 * 目前仅处理 ‘受理民意环形图’ 场景下的外层饼图的点击事件
									 */
									if (subDatas != null
											&& params.seriesIndex == 1
											&& (type != null && (type == 0 || type == '-'))) {
										option.series[0].name = subDatas.series[params.dataIndex].name;
										option.series[0].data = subDatas.series[params.dataIndex].data;

										option.series[2].name = subDatas.series[params.dataIndex].name;
										option.series[2].data = subDatas.series[params.dataIndex].data;

										myChart.setOption(option);
										myChart.resize();
									}
								});
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 首页地图点击--热点类型分析 为例 绘制环形饼图，内圈有蓝线
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRingPieR01 = function(id, datas, param) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieR01Option(datas);
				/**
				 * 设置点击提示的提示内容
				 */
				if (param != null && param.isTooltipFixed != null
						&& param.isTooltipFixed) {
					option.tooltip.formatter = function(value) {
						return '请点击';
					}
				}

				myChart.setOption(option);
				if (param != null) {
					addChartEvents(myChart, param);
				}
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 单个部门-下拉.满意度分析 为例 绘制环形饼图，内圈有蓝线
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRingPieR02 = function(id, datas, param) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieR02Option(datas);
				/**
				 * 设置点击提示的提示内容
				 */
				if (param != null && param.isTooltipFixed != null
						&& param.isTooltipFixed) {
					option.tooltip.formatter = function(value) {
						return '请点击';
					}
				}

				myChart.setOption(option);
				if (param != null) {
					addChartEvents(myChart, param);
				}
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 1 以 网络部门热线 -- 本市诉求热点分布 为例 2 以 网络部门热线 -- 民意钻取--民意类型环形图 为例 绘制环形饼图，内圈有蓝线
	 * 
	 * @param id
	 * @param datas
	 */
	jusfPie.drawRingPieR03 = function(id, datas, param) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initRingPieR03Option(datas);
				/**
				 * 设置点击提示的提示内容
				 */
				if (param != null && param.isTooltipFixed != null
						&& param.isTooltipFixed) {
					option.tooltip.formatter = function(value) {
						return '请点击';
					}
				}

				myChart.setOption(option);
				if (param != null) {
					addChartEvents(myChart, param);
				}
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 添加图形事件
	 * 
	 * @param myChart
	 * @param param
	 */
	function addChartEvents(myChart, param) {
		if (param.clickFn != null && param.clickFn instanceof Function
				&& param.clickParam != null) {
			myChart
					.on(
							'click',
							function(params) {
								if (param.clickParam instanceof Array) {
									var arrayP = [];
									for (var i = 0; i < param.clickParam.length; i++) {
										arrayP
												.push(params.data[param.clickParam[i]] != null ? params.data[param.clickParam[i]]
														: params[param.clickParam[i]])
									}
									param.clickFn(arrayP);
								} else {
									param
											.clickFn(params.data[param.clickParam] != null ? params.data[param.clickParam]
													: params[param.clickParam])
								}
							})
		}
	}

	this.jusfPie = jusfPie;
}();