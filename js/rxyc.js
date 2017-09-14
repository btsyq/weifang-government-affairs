//左边栏点击效果
$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 83
	}, 500);
});

//下拉菜单滚动条
$(".sections").niceScroll({
	cursorcolor: "#002e73",
	cursoropacitymax: 1,
	touchbehavior: false,
	cursorwidth: "10px",
	cursorborder: "0",
	cursorborderradius: "5px"
})

selects('t1');
selects('t2');
selects('t3');
timesel('t3');

function selects(id) {

	var adr;

	$('#' + id + ' .qysl').on('click', function(ev) {
		ev.stopPropagation();
		$('#' + id + ' .sections').slideToggle();
		$('#' + id + ' .sections>div').on('click', function() {
			$('#' + id + ' .qyselect_con').html($(this).html());
			adr = $(this).html();
			//			alert(adr);
		});

	})
}

function timesel(id) {
	var daten;

	$('#' + id + ' .ts1').on('click', function(ev) {
		ev.stopPropagation();
		$('#' + id + ' .ts1in').slideToggle();
	})
	$('#' + id + ' .ts2').on('click', function(ev) {
		ev.stopPropagation();
		$('#' + id + ' .ts2in').slideToggle();
	})
	$('#' + id + ' .ts2in>div').on('click', function() {
		$('#' + id + ' .ts2con').html($(this).html());
		$('#' + id + ' .ts1con').html($(this).html() - 1);
		daten = $(this).html() - 1 + '-' + $(this).html();
		//		alert(daten);
	});
	$('#' + id + ' .ts1in>div').on('click', function() {
		$('#' + id + ' .ts1con').html($(this).html());
		$('#' + id + ' .ts2con').html(parseInt($(this).html()) + 1);
		daten = $(this).html() + '-' + (parseInt($(this).html()) + 1);
		//		alert(daten);
	});
}


//chart1

function getEPieDataR01() {
    return {
        series: [
            {
                name: '热线预测 -- 诉求热点预测 ',
                data: [
                    {value: 72, name: '辅助数据'},//第一条为辅助信息，两者相加为100
                    {value: 28, name: '城管执法'}
                ],
                colors: [ '#cc6a17','#c90747'],//实际数据的递进颜色配置，起始颜色-最终颜色
            }
        ]
    }
}
function getEPieDataR02() {
    return {
        series: [
            {
                name: '热线预测 -- 诉求热点预测 ',
                data: [
                    {value: 88, name: '辅助数据'},//第一条为辅助信息，两者相加为100
                    {value: 12, name: '贪污受贿'}
                ],
                colors: [ '#398db4','#4dad71'],//实际数据的递进颜色配置，起始颜色-最终颜色
                nameColor: '#5AD7E2'
            }
        ]
    }
}
function getEPieDataR03() {
    return {
        series: [
            {
                name: '热线预测 -- 诉求热点预测 ',
                data: [
                    {value: 74, name: '辅助数据'},//第一条为辅助信息，两者相加为100
                    {value: 26, name: '物价管理'}
                ],
                colors: ['#036a6a', '#0882ba'],//实际数据的递进颜色配置，起始颜色-最终颜色
                nameColor: '#5AD7E2'
            }
        ]
    }
}
function getEPieDataR04() {
    return {
        series: [
            {
                name: '热线预测 -- 诉求热点预测 ',
                data: [
                    {value: 80, name: '辅助数据'},//第一条为辅助信息，两者相加为100
                    {value: 20, name: '交通治安'}
                ],
                colors: ['#4d5cbe','#028ab6' ],//实际数据的递进颜色配置，起始颜色-最终颜色
                nameColor: '#5abee1'
            }
        ]
    }
}
function getEPieDataR05() {
    return {
        series: [
            {
                name: '热线预测 -- 诉求热点预测 ',
                data: [
                    {value: 84, name: '辅助数据'},//第一条为辅助信息，两者相加为100
                    {value: 16, name: '市政建设'}
                ],
                colors: ['#4e5bbe','#028cb7' ],//实际数据的递进颜色配置，起始颜色-最终颜色
                nameColor: '#5abee1'
            }
        ]
    }
}

jusfPie.drawRingPieDoubleAnother('chart1_1', getEPieDataR01());
jusfPie.drawRingPieDoubleAnother('chart1_2', getEPieDataR02());
jusfPie.drawRingPieDoubleAnother('chart1_3', getEPieDataR03());
jusfPie.drawRingPieDoubleAnother('chart1_4', getEPieDataR04());
jusfPie.drawRingPieDoubleAnother('chart1_5', getEPieDataR05());


//chart2

var chart2data = {
	'zl': [700, 620, 680, 430, 342, 352],
	'yc': [620, 600, 610, 470, 555, 666]
}
chart2(chart2data);

function chart2(data) {

	var myChart2 = echarts.init(document.getElementById('chart2'));
	myChart2.setOption({
		grid: {
			right: '5%',
			left: '7%',
			bottom: '10%',
			top: '20%',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
				shadowStyle: {
					color: 'rgba(0,46, 115, 0.3)',
				}
			},
			backgroundColor: 'rgba(0,31,120,0.8)',
			borderColor: '#3b9dff',
			borderWidth: 1,
			padding: 14,
			formatter: '<span style="color:#dfb422">{b}</span><br />总量: {c0}<br />预测量: {c1}'
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {
					show: true,
					backgroundColor: '#002e73'
				}
			},
			top: '20',
			right: '17',
			iconStyle: {
				normal: {
					borderColor: '#0084ff',
				}
			}
		},
		legend: {
			data: ['数量', '预测量'],
			right: '60',
			top: '25',
			textStyle: {
				color: '#fff'
			},
			itemGap: 20,
			itemHeight: 6,
			itemWidth: 21
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			data: ['举报', '投诉', '咨询', '求助', '建议', '其他'],
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			}
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					opacity: 0.3
				}
			},
		}],
		series: [{
			name: '数量',
			type: 'bar',
			barMaxWidth: 30,
			barGap: '60%',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#1cabff'
						}, {
							offset: 1,
							color: '#8451ff'
						}]
					),
					opacity: 0.6,
					barBorderRadius: [5, 5, 0, 0]
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#1cabff'
						}, {
							offset: 1,
							color: '#8451ff'
						}]
					),
					opacity: 1
				}
			},
			data: data.zl,
			zlevel: 9,
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}],
				silent: true
			}

		}, {
			name: '预测量',
			type: 'bar',
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#ff8e01'
						}, {
							offset: 1,
							color: '#ff1454'
						}]
					),
					opacity: 0.6,
					barBorderRadius: [5, 5, 0, 0]
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#ff8e01'
						}, {
							offset: 1,
							color: '#ff1454'
						}]
					),
					opacity: 1
				}
			},
			data: data.yc,
			zlevel: 9,
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}],
				silent: true
			}
		}]
	})
}

//chart3
var myChart3 = echarts.init(document.getElementById('chart3'));
myChart3.setOption({
	grid: {
		right: '8%',
		left: '8%',
		bottom: '12%',
		top: '18%'

	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
			shadowStyle: {
				color: 'rgba(0,46, 115, 0.3)',
			}
		},
		backgroundColor: 'rgba(0,31,120,0.8)',
		borderColor: '#3b9dff',
		borderWidth: 1,
		padding: 14,
		formatter: function(params, ticket, callback) {

			if(params[0].name == '2016年10月') {
				return '<p style="color:#dfb422">' + params[0].name + '</p><span>' + params[1].data.name +
					' : ' + params[1].data.value + '</span>';
			}
			return '<p style="color:#dfb422">' + params[0].name + '</p><span>' + params[0].data.name +
				' : ' + params[0].data.value + '</span>';
		}

	},
	toolbox: {
		show: true,
		feature: {
			saveAsImage: {
				show: true,
				backgroundColor: '#002e73'
			}
		},
		top: '20',
		right: '17',
		iconStyle: {
			normal: {
				borderColor: '#0084ff',
			}
		}
	},
	legend: {
		show: true,
		data: ['总量', '预测量'],
		right: '60',
		top: '25',
		textStyle: {
			color: '#fff'
		},
		itemGap: 20,
		itemHeight: 6,
		itemWidth: 21,
		selectedMode: false
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['2016年01月', '2016年02月', '2016年03月', '2016年04月', '2016年05月', '2016年06月', '2016年07月', '2016年08月', '2016年09月', '2016年10月'],
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		}
	}],
	yAxis: [{
		type: 'value',
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		splitLine: {
			show: true,
			lineStyle: {
				opacity: 0.3
			}
		}
	}],
	series: [{
		name: '总量',
		type: 'bar',
		barMaxWidth: 30,
		stack: '总量',
		barGap: '60%',
		itemStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1, [{
						offset: 0,
						color: '#00ddff'
					}, {
						offset: 1,
						color: '#007fff'
					}]
				),
				opacity: 0.6,
				barBorderRadius: [5, 5, 0, 0]
			},
			emphasis: {
				opacity: 1
			}
		},
		data: [{
			name: '民意总量',
			value: 98
		}, {
			name: '民意总量',
			value: 56
		}, {
			name: '民意总量',
			value: 34
		}, {
			name: '民意总量',
			value: 45
		}, {
			name: '民意总量',
			value: 38
		}, {
			name: '民意总量',
			value: 67
		}, {
			name: '民意总量',
			value: 47
		}, {
			name: '民意总量',
			value: 59
		}, {
			name: '民意总量',
			value: 69
		}, {
			name: '民意总量',
			value: ''
		}],
		zlevel: 9,
		markPoint: {
			silent: true,
			data: [{
				type: 'max',
				name: '最大值'
			}, {
				type: 'min',
				name: '最小值'
			}]
		},

		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}, {
				type: 'average',
				name: '平均值'
			}],
			silent: true
		}
	}, {
		name: '预测量',
		type: 'bar',
		stack: '总量',
		barMaxWidth: 30,
		barGap: '60%',
		zlevel: 9,
		itemStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1, [{
						offset: 0,
						color: '#ffdd00'
					}, {
						offset: 1,
						color: '#ff6800'
					}]
				),
				opacity: 0.6,
				barBorderRadius: [5, 5, 0, 0]

			},
			emphasis: {
				opacity: 1
			}
		},
		data: [{
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: ''
		}, {
			name: '预测量',
			value: 69
		}]
	}]
});