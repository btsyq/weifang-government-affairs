/**
 * 绘制柱状图
 */

! function() {
	var jusfLine = {};

	/**
	 * 通过div的id初始化成功chart，并返回
	 * @param id
	 * @returns {{myChart: *, gECharts: *}}
	 */
	function getChart(id) {
		var myChart;
		var gECharts;
		try {
			var ec = require('echarts');
			gECharts = ec;
		} catch(err) {
			gECharts = echarts;
		}
		if(gECharts != null) {
			myChart = gECharts.init(document.getElementById(id));
		}

		return {
			myChart: myChart,
			gECharts: gECharts
		}
	}

	/**
	 * 设置line的序列数据
	 * @param sereisData
	 */
	function getLineSeries(seriesData) {
		var series = [];
		var lineColors = ['#FC2653', '#FEC62F', '#EC0C19', '#FB6120', '#FEF048', '#7CE5FD', '#1EB5F4'];

		for(var i = 0; i < seriesData.length; i++) {
			var item = {
				name: seriesData[i].name,
				type: 'line',
				smooth: true,
				smoothMonotone: 'y',
				symbol: 'circle',
				symbolSize: 12,
				data: seriesData[i].data,
				label: {
					normal: {
						show: false
					}
				},
				markPoint: {
					data: seriesData[i].pointData
				}
			};

			if(seriesData[i].itemStyle != null) {
				item.itemStyle = seriesData[i].itemStyle;
			}
			if(seriesData[i].lineData != null) {
				item.markLine = {
					data: seriesData[i].lineData,
					label: {
						normal: {
							formatter: function(params) {
								if(params.data.itemType != null && params.data.itemType == 0) {
									return params.value;
								} else if(params.data.itemType != null && params.data.itemType == 1) {
									return '\n\n' + params.name;
								}
								return '\n' + params.value + '\n' + params.name;
							},
							textStyle: {
								fontSize: 12
							}
						},
						emphasis: {
							formatter: function(params) {
								if(params.data.itemType != null && params.data.itemType == 0) {
									return params.value;
								} else if(params.data.itemType != null && params.data.itemType == 1) {
									return '\n\n' + params.name;
								}
								return '\n' + params.value + '\n' + params.name;
							},
							textStyle: {
								fontSize: 12
							}
						}
					},
					lineStyle: {
						normal: {
							color: lineColors[i] != null ? lineColors[i] : ("#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16))
						},
						emphasis: {
							color: lineColors[i] != null ? lineColors[i] : ("#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16))
						}
					},
					tooltip: {
						show: seriesData[i].tooltipIsShow != null ? seriesData[i].tooltipIsShow : true
					}
				};
			}
			series.push(item);
		}

		return series;

	}

	/**
	 * 赋值
	 * @param obj
	 * @param fromObj
	 */
	function setOptionParam(obj, fromObj) {
		if(fromObj != null) {
			return fromObj;
		}
		return obj;
	}

	/**
	 * 设置折线图的基option
	 * @param datas
	 * @returns {{}}
	 */
	function setBaseOption(datas) {
		var title = {};
		var tooltip = {};
		var legend = {};
		var toolbox = {};
		var dataZoom = {};

		title = setOptionParam(title, datas.title);
		tooltip = setOptionParam(tooltip, datas.tooltip);
		legend = setOptionParam(legend, datas.legend);
		toolbox = setOptionParam(toolbox, datas.toolbox);
		dataZoom = setOptionParam(dataZoom, datas.dataZoom);

		var baseOption = {
			backgroundColor: datas.backgroundColor != null ? datas.backgroundColor : 'transparent',
			title: [{ //设置文字标题左侧颜色条
				show: title.isShow != null ? title.isShow : false,
				text: '',
				padding: 0,
				x: 12,
				top: '1.8%',
				backgroundColor: '#FC3E1D',
				borderWidth: 3.5,
				borderColor: '#FC3E1D',
				textStyle: {
					fontSize: 22
				}
			}, {
				show: title.isShow != null ? title.isShow : false,
				text: title.text != null ? title.text : '',
				subtext: title.subtext != null ? title.subtext : '',
				subtextStyle: {
					color: '#fff'
				},
				x: 13,
				top: '1%',
				textStyle: {
					color: '#fff',
					fontSize: 18
				}
			}],
			tooltip: {
				show: tooltip.isShow != null ? tooltip.isShow : true,
				trigger: 'item',
				borderColor: '#419FFC',
				borderWidth: 1.5,
				padding: [8, 12, 6, 12],
				backgroundColor: "rgba(2,30,103,0.5)",
				formatter: function(params) {
					var hint = '';
					if(params instanceof Array) {
						if(params.length == 1) {
							return params[0].value;
						}
						hint = hint + '<div style="color:#DCB234">' + params[0].name + '</div>';
						for(var i = 0; i < params.length; i++) {
							hint = hint + params[i].seriesName + '\t' + ':' + '\t' +
								params[i].value + '</br>';
						}
					} else {
						if(params.componentType === "markLine") {
							hint = hint + (params.name != null && params.name != '' ? (params.name + '\t' + ':' + '\t') : '') + params.value;
						} else if(params.componentType === "series") {
							hint = hint + params.value;
						}
					}

					return hint;
				}
			},
			legend: {
				data: legend.data != null ? legend.data : [],
				show: legend.isShow != null ? legend.isShow : false,
				right: '60',
				top: '22',
				y: '1.5%',
				itemHeight: 7,
				orient: 'horizontal',
				textStyle: {
					fontSize: 12,
					//color: '#A3A6B1'
					color: '#CCCFD7'
				}
			},
			//          toolbox: {
			//              right: '5%',
			//              y: '3%',
			//              show: toolbox.isShow != null ? toolbox.isShow : true,
			//              feature: {
			//                  saveAsImage: {
			//                      show: true,
			//                      iconStyle: {
			//                          normal: {
			//                              color: "#1787FB",
			//                              borderColor: '#1787FB',
			//                              borderWidth: 2,
			//                              opacity: 0.8
			//                          },
			//                          emphasis: {
			//                              color: "#1787FB",
			//                              borderColor: '#1787FB',
			//                              borderWidth: 2
			//                          }
			//                      }
			//                  }
			//              }
			//          },
			animationDuration: 1500,
			animationEasingUpdate: 'quinticInOut'
		};

		// 设置X轴的缩放控件
		if(dataZoom.isShow != null && dataZoom.isShow) {
			baseOption.grid.bottom = '42';
			baseOption.dataZoom = [{
				type: 'slider',
				show: true,
				xAxisIndex: [0],
			}, {
				type: 'inside',
				xAxisIndex: [0],
			}];
			if(dataZoom.data != null && dataZoom.data.startValue != null &&
				dataZoom.data.endValue != null) {
				baseOption.dataZoom[0].startValue = dataZoom.data.startValue;
				baseOption.dataZoom[0].endValue = dataZoom.data.endValue;
				baseOption.dataZoom[1].startValue = dataZoom.data.startValue;
				baseOption.dataZoom[1].endValue = dataZoom.data.endValue;
			} else {
				baseOption.dataZoom[0].start = 50;
				baseOption.dataZoom[0].end = 100;
				baseOption.dataZoom[1].start = 50;
				baseOption.dataZoom[1].end = 100;
			}
		}

		// 可设置自定义颜色
		if(datas.colors != null) {
			baseOption.color = datas.colors;
		} else if(datas.colors == null && legend.data != null) {
			var num = legend.data.length > 6 ? 6 : legend.data.length;
			var colors = ['#FC3E1D', '#1787FB', '#FEE233', '#FD9526', '#149343', '#1BA4DE'];
			if(num < 7 && num > 0) {
				baseOption.color = colors.slice(0, num);
			}
		}

		return baseOption;
	}

	function setAxisTypeOne(datas, option) {
		var grid = {};
		var xAxis = {};
		var yAxis = {};

		grid = setOptionParam(grid, datas.grid);
		xAxis = setOptionParam(xAxis, datas.xAxis);
		yAxis = setOptionParam(yAxis, datas.yAxis);

		option.grid = {
			left: '2%',
			right: '6%',
			top: '16%',
			bottom: grid.bottom != null ? grid.bottom : '6%',
			containLabel: true
		};

		option.xAxis = {
			type: 'category',
			name: xAxis.name != null ? xAxis.name : '',
			boundaryGap: false,
			data: xAxis.data,
			nameTextStyle: {
				color: '#FFFFFF',
				fontSize: 12
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#4D5972'
				},
				opacity: 0.5
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			}
		};

		option.yAxis = {
			type: 'value',
			name: yAxis.name != null ? yAxis.name : '',
			nameLocation: 'end',
			nameGap: 20,
			nameTextStyle: {
				color: '#FFFFFF',
				fontSize: 12
			},
			axisTick: {
				show: false
			},
			splitLine: {
				lineStyle: {
					color: '#08449B'
				}
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: ['transparent', 'rgba(0,57,142,.5)', 'transparent', 'rgba(0,57,142,.5)', 'transparent']
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			}
		};

		if(yAxis.max != null) {
			option.yAxis.max = yAxis.max;
		}
		if(yAxis.min != null) {
			option.yAxis.max = yAxis.min;
		}

		return option;
	}

	/**
	 *
	 * @param datas
	 */
	function initLineOption(datas) {
		var option = setBaseOption(datas);
		option = setAxisTypeOne(datas, option);

		option.series = getLineSeries(datas.series);

		return option;
	}

	/**
	 * 添加itemStyle
	 * @param ec
	 * @param datas
	 */
	function addItemStyleToSeries(ec, datas) {
		var series = datas.series;

		var colors = [{
				start: '#D51C4E',
				end: '#FEC62F'
			},
			//{start: '#EC0C19', end: '#FB6120'},
			//{start: '#FEF048', end: '#7CE5FD'},
			//{start: '#1EB5F4', end: '#7CE5FD'},
		];

		for(var i = 0; i < series.length; i++) {
			var start = (colors[i] != null && colors[i].start != null) ? colors[i].start : ("#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16));
			var end = (colors[i] != null && colors[i].end != null) ? colors[i].end : ("#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16));

			datas.series[i].itemStyle = {
				normal: {
					color: new ec.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: start // 0% 处的颜色
					}, {
						offset: 1,
						color: end // 100% 处的颜色
					}], false)
				}
			}
		}

	}

	/**
	 *
	 * @param id
	 * @param datas
	 * @returns {*}
	 */
	jusfLine.drawLine = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		addItemStyleToSeries(chart.gECharts, datas);

		try {
			// DOM重用时，清除遗留的图表信息
			if(myChart != null) {
				myChart.clear();

				// 设置option
				var option = initLineOption(datas, true);

				myChart.setOption(option);
			}
		} catch(err) {
			console.error(err)
		}

		return myChart;
	}

	this.jusfLine = jusfLine;
}();