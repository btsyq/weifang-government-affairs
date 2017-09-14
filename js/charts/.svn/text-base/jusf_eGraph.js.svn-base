/**
 * 绘制柱状图
 */

! function() {
	var jusfGraph = {};

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
			myChart = gECharts.init(document.getElementById(id), '-', 300);
		}

		return {
			myChart: myChart,
			gECharts: gECharts
		}
	}

	/**
	 * 获得力导向图的序列数据
	 * @param seriesData
	 * @param categories
	 * @returns {Array}
	 */
	function getForceSeries(seriesData, categories) {
		var series = [];
		if(seriesData != null) {
			var item;
			for(var i = 0; i < seriesData.length; i++) {
				var nodes = seriesData[i].nodes;

				for(var j = 0; j < nodes.length; j++) {
					if(nodes[j].symbolSize != null) {
						nodes[j].label = {
							normal: {
								textStyle: {
									fontSize: nodes[j].symbolSize / 4 > 10 ? (nodes[j].symbolSize / 4 > 28 ? 28 : nodes[j].symbolSize / 4) : 10
								}
							},
							emphasis: {
								textStyle: {
									fontSize: nodes[j].symbolSize / 4 > 10 ? (nodes[j].symbolSize / 4 > 28 ? 28 : nodes[j].symbolSize / 4) : 10
								}
							}
						}
					} else {
						nodes[j].label = {
							normal: {
								textStyle: {
									fontSize: nodes[j].value / 4 > 10 ? (nodes[j].value / 4 > 28 ? 28 : nodes[j].value / 4) : 10
								}
							},
							emphasis: {
								textStyle: {
									fontSize: nodes[j].value / 4 > 10 ? (nodes[j].value / 4 > 28 ? 28 : nodes[j].value / 4) : 10
								}
							}
						}
					}

				}

				var repulsionNum = Number(seriesData[i].repulsion != null ? seriesData[i].repulsion :
					130);
				item = {
					name: seriesData[i].name != null ? seriesData[i].name : '',
					type: 'graph',
					layout: 'force',
					data: nodes,
					links: seriesData[i].links,
					categories: categories,
					roam: true,
					label: {
						normal: {
							show: true,
							position: 'inside',
							textStyle: {
								color: 'white',
								fontSize: 18
							}
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.8
						},
						emphasis: {
							opacity: 1
						}
					},
					force: {
						repulsion: repulsionNum
					},
					symbol: 'circle',
					symbolSize: function(value, params) {
						if(params.data.symbolSize == null) {
							if(value != null) {
								var num = value / 4;
								if(num < 30) {
									num = 30;
								} else if(num > 100) {
									num = 100;
								}
								return num;
							}
						}
						return 30;
					}
				};
				series.push(item);
			}
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
	 * 设置基类
	 * @param datas
	 * @returns {{}}
	 */
	function setBaseOption(datas) {
		var title = {};
		var tooltip = {};
		//var legend = {};
		var toolbox = {};

		title = setOptionParam(title, datas.title);
		tooltip = setOptionParam(tooltip, datas.tooltip);
		//legend = setOptionParam(legend, datas.categories);
		toolbox = setOptionParam(toolbox, datas.toolbox);

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
				borderColor: '#419FFC',
				borderWidth: 1.5,
				padding: [8, 12, 6, 12],
				backgroundColor: "rgba(2,30,103,0.5)",
				formatter: function(params) {
					var hint = '';
					hint = hint + '<div style="color:#DCB234">' + params.name + '</div>' + params.value;
					return hint;
				}
			},
			//legend: {
			//    data: legend.data != null ? legend.data : [],
			//    show: legend.isShow != null ? legend.isShow : false,
			//    right: '8%',
			//    y: '1.5%',
			//    itemHeight: 7,
			//    orient: 'horizontal',
			//    textStyle: {
			//        fontSize: 14,
			//        //color: '#A3A6B1'
			//        color: '#CCCFD7'
			//    }
			//},
			//          toolbox: {
			//              right: '2.5%',
			//              y: '1%',
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

		// 可设置自定义颜色
		if(datas.colors != null) {
			baseOption.color = datas.colors;
		} else if(datas.colors == null && datas.categories != null) {
			var num = datas.categories.length > 6 ? 6 : datas.categories.length;
			var colors = ['#D73617', '#3192E3', '#1BB264', '#E5A73A', '#2D2B2D', '#632F32'];
			if(num < 7 && num > 0) {
				baseOption.color = colors.slice(0, num);
			}
		}

		return baseOption;
	}

	/**
	 * 设置力导向图的option
	 * @param datas
	 * @returns {{}}
	 */
	function initForceOption(datas) {
		var option = setBaseOption(datas);
		option.series = getForceSeries(datas.series, datas.categories);

		return option;
	}

	/**
	 * 绘制力导向图
	 * @param id
	 * @param datas
	 * @returns {*}
	 */
	jusfGraph.drawForce = function(id, datas) {
		var chart = getChart(id);
		var myChart = chart.myChart;

		try {
			// DOM重用时，清除遗留的图表信息
			if(myChart != null) {
				myChart.clear();

				// 设置option
				var option = initForceOption(datas);

				myChart.setOption(option);
			}
		} catch(err) {
			console.error(err)
		}

		return myChart;
	}

	this.jusfGraph = jusfGraph;
}();