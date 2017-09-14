/**
 * 绘制柱状图
 */
!function() {
	var jusfBar = {};
	var globalColors = [ {
		start : '#E90102',
		end : '#E16903'
	}, {
		start : '#E16903',
		end : '#C38707'
	}, {
		start : '#028FDB',
		end : '#0CCBEB'
	},
	// {start: '#1EB5F4', end: '#7CE5FD'},
	].reverse();

	var globalRGBColors = [ 'rgba(233,1,2,0.4)', 'rgba(225,105,3,0.4)',
			'rgba(2,143,219,0.4)' ];

	var globalAxisTextColor = '#FFFFFF';

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
			myChart = gECharts.init(document.getElementById(id), '-', 300);
		}

		var chartDivHeightRaw = document.getElementById(id).style.height;
		var chartDivHeight = document.getElementById(id).querySelector('div').style.height;
		var chartHeight = (chartDivHeightRaw != undefined && chartDivHeightRaw != '') ? chartDivHeightRaw
				: (chartDivHeight != undefined && chartDivHeight != '') ? chartDivHeight
						: '200';
		var height = chartHeight.replace('px', '');
		return {
			myChart : myChart,
			gECharts : gECharts,
			height : Number(height)
		}
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
	 * 设置字符云的基option
	 * 
	 * @param datas
	 */
	function setBaseOption(datas) {
		var title = {};
		var tooltip = {};
		var legend = {};
		var toolbox = {};

		title = setOptionParam(title, datas.title);
		tooltip = setOptionParam(tooltip, datas.tooltip);
		legend = setOptionParam(legend, datas.legend);
		toolbox = setOptionParam(toolbox, datas.toolbox);

		var baseOption = {
			backgroundColor : datas.backgroundColor != null ? datas.backgroundColor
					: 'transparent',
			title : {
				show : title.isShow != null ? title.isShow : false,
				text : title.text != null ? title.text : '',
				x : 13,
				top : '1%',
				textStyle : {
					color : '#fff',
					fontSize : 18
				}
			},
			tooltip : {
				show : tooltip.isShow != null ? tooltip.isShow : true,
				trigger : 'axis',
				axisPointer : { // 坐标轴指示器，坐标轴触发有效
					type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
					shadowStyle : {
						color : '#419FFC',
						opacity : 0.2,
						shadowBlur : 10,
						shadouwColor : '#419FFC'
					}
				},
				extraCssText : 'box-shadow: 8 1 3px #419FFC;',
				borderColor : '#419FFC',
				borderWidth : 1.5,
				padding : [ 8, 12, 6, 12 ],
				backgroundColor : "rgba(2,30,103,0.5)",
				formatter : function(params) {
					var hint = '';

					hint = hint + (params.name != null ? params.name : '-')
							+ '\t' + ':' + '\t'
							+ (params.value != null ? params.value : '-');

					return hint;
				}
			},
			legend : {
				data : legend.data != null ? legend.data : [],
				show : legend.isShow != null ? legend.isShow : false,
				right : 55,
				y : '1.5%',
				itemHeight : 7,
				orient : 'horizontal',
				textStyle : {
					fontSize : 14,
					color : '#FFFFFF'
				}
			},
			toolbox : {
				right : '17',
				y : '10',
				show : toolbox.isShow != null ? toolbox.isShow : false,
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

		return baseOption;
	}

	/**
	 * 设置x、y轴配置
	 * 
	 * @param datas
	 * @param option
	 */
	function setHrzXYAxis(datas, option, graphicNum) {
		var xAxis = {};
		var yAxis = {};
		xAxis = setOptionParam(xAxis, datas.xAxis);
		yAxis = setOptionParam(yAxis, datas.yAxis);

		option.yAxis = {
			type : 'category',
			name : yAxis.name != null ? yAxis.name : '',
			boundaryGap : true,
			data : yAxis.data != null ? yAxis.data.reverse() : [],
			nameTextStyle : {
				color : '#FFFFFF',
				fontSize : 16
			},
			axisTick : {
				show : false
			},
			axisLine : {
				show : false,
				lineStyle : {
					color : '#A6ACBA'
				}
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : globalAxisTextColor
				}
			}
		};
		option.xAxis = {
			type : 'value',
			name : xAxis.name != null ? xAxis.name : '',
			nameLocation : 'end',
			nameGap : 20,
			axisTick : {
				show : false
			},
			axisLine : {
				show : false
			},
			splitLine : {
				show : false
			},
			axisLabel : {
				show : false
			},
			nameTextStyle : {
				color : '#FFFFFF',
				fontSize : 16
			},
		};
		if (xAxis.max != null) {
			option.xAxis.max = xAxis.max;
		}

		if (graphicNum == 1) {
			option.grid = {
				left : 50,
				right : 52,
				top : 15,
				bottom : 1,
				containLabel : true
			};
		} else if (graphicNum == 2) {
			option.grid = {
				left : 20,
				right : 52,
				top : 35,
				bottom : 10,
				containLabel : true
			};
			var total = yAxis.data != null ? yAxis.data.length : 0;
			option.yAxis.axisLabel = {
				show : true,
				textStyle : {
					color : globalAxisTextColor
				},
				formatter : function(name) {
					var count;
					yAxis.data.map(function(item, index) {
						if (item == name) {
							count = total - index;
						}
					});

					return count + '\t\t\t\t\t\t' + name;
				}
			}
		} else if (graphicNum == 3) {
			option.grid = {
				left : 20,
				right : 52,
				top : 35,
				bottom : 10,
				containLabel : true
			};
			option.yAxis.axisLine = {
				show : true,
				lineStyle : {
					color : '#002A75'
				}
			};
		}

	}

	/**
	 * 获取序列数据 x轴为value类型，y轴为category类型，柱条为水平方向
	 * 
	 * @param seriesData
	 * @returns {Array}
	 */
	function getHrzBarSeries(seriesData, ec, xMax, params) {
		var series = [];

		var colors;

		if (seriesData != null) {
			var isAnother = false;
			var defaultUnit = '';
			if (params != null && params.isAnother) {
				colors = params.colors != null ? params.colors : globalColors;
				isAnother = params.isAnother;
				defaultUnit = "件";// 设置默认单位，地区钻取--诉求热点top5
			} else {
				colors = globalColors;
			}

			var unit = seriesData[0].unit != null ? seriesData[0].unit
					: defaultUnit;
			for (var i = 0; i < seriesData.length; i++) {
				if (seriesData[i].data != undefined) {
					var barData = seriesData[i].data.reverse();

					if (i == 0) {
						var tmpItem = {
							name : seriesData[0].name != null ? seriesData[0].name
									: '',
							type : 'bar',
							barWidth : 12,
							silent : true,
							itemStyle : {
								normal : {
									color : 'black'
								}
							},
							barGap : '-100%',
							barCategoryGap : '50%',
							data : seriesData[0].data.map(function(d) {
								return xMax
							}),
							label : {
								normal : {
									show : true,
									position : 'right',
									formatter : function(params) {
										return seriesData[0].data[params.dataIndex]
												+ unit;
									},
									textStyle : {
										color : globalAxisTextColor,
										fontSize : 13
									}
								}
							}
						};
						series.push(tmpItem);
					}

					var datas = [];
					for (var j = 0; j < barData.length; j++) {
						var start, end;
						if (!isAnother) {
							start = (colors[j] != null && colors[j].start != null) ? colors[j].start
									: ("#" + Math.floor(
											Math.random()
													* (256 * 256 * 256 - 1))
											.toString(16));
							end = (colors[j] != null && colors[j].end != null) ? colors[j].end
									: ("#" + Math.floor(
											Math.random()
													* (256 * 256 * 256 - 1))
											.toString(16));
						} else {
							start = (colors[j % 2] != null && colors[j % 2].start != null) ? colors[j % 2].start
									: ("#" + Math.floor(
											Math.random()
													* (256 * 256 * 256 - 1))
											.toString(16));
							end = (colors[j % 2] != null && colors[j % 2].end != null) ? colors[j % 2].end
									: ("#" + Math.floor(
											Math.random()
													* (256 * 256 * 256 - 1))
											.toString(16));
						}
						var barItem = {
							value : barData[j],
							itemStyle : {
								normal : {
									color : new ec.graphic.LinearGradient(0, 0,
											1, 0, [ {
												offset : 0,
												color : start
											// 0% 处的颜色
											}, {
												offset : 0.8,
												color : end
											// 100% 处的颜色
											}, {
												offset : 1,
												color : end
											// 100% 处的颜色
											} ], false),
									opacity : 0.8
								},
								emphasis : {
									opacity : 1
								}
							}
						}

						datas.push(barItem);
					}

					var item = {
						name : seriesData[i].name != null ? seriesData[i].name
								: '',
						data : datas,
						type : 'bar',
						barWidth : 12,
						barCategoryGap : '50%',
						label : {
							normal : {
								show : false
							},
							emphasis : {
								show : false
							}
						}
					};

					series.push(item);
				}
			}

		}

		return series;
	}

	/**
	 * 获取序列数据 x轴为value类型，y轴为category类型，柱条为水平方向
	 * 
	 * @param seriesData
	 * @returns {Array}
	 */
	function getHrzBarOtherSeries(seriesData, ec, xMax, status) {
		var series = [];
		var colors = globalColors;

		if (seriesData != null) {
			if (seriesData.length == 1 && status != null) {
				colors = globalColors.slice(status - 1, status);
			}

			for (var i = 0; i < seriesData.length; i++) {
				if (seriesData[i].data != null) {
					var barData = seriesData[i].data.reverse();

					if (i == 0) {
						var tmpItem = {
							name : seriesData[0].name != null ? seriesData[0].name
									: '',
							type : 'bar',
							barWidth : 12,
							silent : true,
							itemStyle : {
								normal : {
									color : 'black'
								}
							},
							barGap : '-100%',
							barCategoryGap : '50%',
							data : seriesData[0].data.map(function(d) {
								return xMax
							}),
							label : {
								normal : {
									show : true,
									position : 'right',
									formatter : function(params) {
										return seriesData[0].data[params.dataIndex]
												+ (seriesData[0].unit != null ? seriesData[0].unit
														: "件");
									},
									textStyle : {
										color : globalAxisTextColor,
										fontSize : 13
									}
								}
							}
						};
						series.push(tmpItem);
					}

					var start = (colors[i] != null && colors[i].start != null) ? colors[i].start
							: ("#" + Math.floor(
									Math.random() * (256 * 256 * 256 - 1))
									.toString(16));
					var end = (colors[i] != null && colors[i].end != null) ? colors[i].end
							: ("#" + Math.floor(
									Math.random() * (256 * 256 * 256 - 1))
									.toString(16));
					var item = {
						name : seriesData[i].name != null ? seriesData[i].name
								: '',
						data : barData,
						type : 'bar',
						barWidth : 12,
						barCategoryGap : '50%',
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
								color : new ec.graphic.LinearGradient(0, 0, 1,
										0, [ {
											offset : 0,
											color : start
										// 0% 处的颜色
										}, {
											offset : 0.8,
											color : end
										// 100% 处的颜色
										}, {
											offset : 1,
											color : end
										// 100% 处的颜色
										} ], false),
								opacity : 0.8
							},
							emphasis : {
								opacity : 1
							}
						}
					};

					series.push(item);
				}
			}
		}

		return series;
	}

	/**
	 * 添加左侧标识1，2，3
	 * 
	 * @param yAxisData
	 * @returns {Array}
	 */
	function addGraphic(yAxisData, height) {
		var graphic = [];
		var colorsRGB = [ 'rgba(233,1,2,0.4)', 'rgba(225,105,3,0.4)',
				'rgba(2,143,219,0.4)' ];
		var colors = [ '#E90102', '#E16903', '#028FDB' ];
		var rectWidth = 25;

		var num = yAxisData != null ? yAxisData.length : 0;
		var gap = (height - 37 - 12 * num) / (2 * num);// 37：包括top(15)+bottom(1)+axisTick(5)+labelsize(16)
		// var gap = (height - 32 - 12 * num) / (2 * num);
		/**
		 * 计算规则： 1计算出平均的gap； 2计算距离顶部位置
		 */
		for (var i = 0; i < num; i++) {
			var topValue = ((2 * i + 1) * (gap + 6) + 15 - rectWidth / 2);
			var item = {
				type : 'group',
				left : '3%',
				top : topValue,// 设置矩形框位置
				children : [ {
					type : 'rect',
					z : 100 + i,
					left : 'center',
					top : 'center',
					shape : {
						width : rectWidth,
						height : rectWidth
					},
					style : {
						fill : colorsRGB[i % 3],
						stroke : colors[i % 3],
						lineWidth : 1,
						shadowBlur : 8,
						shadowOffsetX : 3,
						shadowOffsetY : 3,
						shadowColor : 'rgba(0,0,0,0.3)'
					}
				}, {
					type : 'text',
					z : 100 + i,
					left : 'center',
					top : 'center',
					style : {
						fill : '#FFFFFF',
						text : (i + 1)
					}
				} ]
			};

			graphic.push(item);
		}

		return graphic;
	}

	/**
	 * 设置option x轴为value类型，y轴为category类型，柱条为水平方向
	 * 
	 * @param datas
	 * @returns {*}
	 */
	function initHrzBarOption(datas, ec, height) {
		var option = setBaseOption(datas);
		option.tooltip.trigger = 'item';
		/**
		 * 设置X、Y轴
		 */
		setHrzXYAxis(datas, option, 1);
		var xMax = option.xAxis.max != null ? option.xAxis.max : 100;

		option.series = getHrzBarSeries(datas.series, ec, xMax);

		var yAxis;
		yAxis = setOptionParam(yAxis, datas.yAxis);
		var graphic = addGraphic(yAxis.data, height);
		option.graphic = graphic;

		return option;
	}

	/**
	 * 设置option x轴为value类型，y轴为category类型，柱条为水平方向
	 * 
	 * @param datas
	 * @returns {*}
	 */
	function initHrzBarOtherOption(datas, ec, status) {
		var option = setBaseOption(datas);
		option.tooltip.trigger = 'item';
		/**
		 * 设置X、Y轴
		 */
		setHrzXYAxis(datas, option, 2);
		var xMax = option.xAxis.max != null ? option.xAxis.max : 100;

		option.series = getHrzBarOtherSeries(datas.series, ec, xMax, status);

		return option;
	}

	/**
	 * 设置option x轴为value类型，y轴为category类型，柱条为水平方向
	 * 
	 * @param datas
	 * @returns {*}
	 */
	function initHrzBarAnotherOption(datas, ec) {
		var option = setBaseOption(datas);
		option.tooltip.trigger = 'item';
		/**
		 * 设置X、Y轴
		 */
		setHrzXYAxis(datas, option, 3);
		var xMax = option.xAxis.max != null ? option.xAxis.max : 100;

		var paramsColor = datas.colors != null ? datas.colors : [ {
			start : '#E90102',
			end : '#E16903'
		}, {
			start : '#028FDB',
			end : '#0CCBEB'
		} ];
		var params = {
			isAnother : true,
			colors : paramsColor
		};

		option.series = getHrzBarSeries(datas.series, ec, xMax, params);

		return option;
	}

	/**
	 * 以 首页 -- 热线类型预测 为例 绘制水平方向的柱状图
	 * 
	 * @param id
	 * @param datas
	 */
	jusfBar.drawHrzBar = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;
		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initHrzBarOption(datas, chart.gECharts,
						chart.height);

				myChart.setOption(option);
				// myChart.on('mouseover', function(params) {
				// console.info(params);
				// })
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 以 网络部门热线 -- 市直单位网络单位办理热线 为例 绘制水平方向的柱状图
	 * 
	 * @param id
	 * @param datas
	 */
	jusfBar.drawHrzBarOther = function(id, datas, status) {
		var chart = getChart(id);
		var myChart = chart.myChart;
		var tmpStatus = status != null ? status : 1;// 选择颜色
		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initHrzBarOtherOption(datas, chart.gECharts,
						tmpStatus);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	/**
	 * 地区钻取 以 诉求热点top5 为例 绘制水平方向的柱状图
	 * 
	 * @param id
	 * @param datas
	 */
	jusfBar.drawHrzBarAnother = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;
		try {
			// DOM重用时，清除遗留的图表信息
			if (myChart != null) {
				myChart.clear();

				// 设置option
				var option = initHrzBarAnotherOption(datas, chart.gECharts);

				myChart.setOption(option);
			}
		} catch (err) {
			console.error(err)
		}

		return myChart;
	}

	this.jusfBar = jusfBar;
}()