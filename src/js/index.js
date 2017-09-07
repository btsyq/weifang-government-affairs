$('.timeBlock>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});

$('.hev_head>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
});

$('.timeSel').on('click', function(e) {
	e.stopPropagation();
	$(this).children("ul").toggle();
});
$(document).click(function() {
	$('.timeSel>ul').each(function() {
		if($(this).css('display') == "block") {
			$(this).hide();
		}
	});
});
$('.timeSel>ul>li').on('click', function() {
	var con = $(this).html();
	$(this).parent().parent('.timeSel').children('span').html(con);
});

$('.wf_tab>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
	if($('.rlt').hasClass('active')){
		$('#wfWill').show();
		$('#qxt').hide();
	}else{
		$('#wfWill').hide();
		$('#qxt').show();
	}
});

//右侧弹窗

chart = jusfMap.drawTimelineMap('wfWill', geteMapDataTimeline());

function clickevent(index) {
	jusfMap.addPointDatas(chart, geteMapDataTimelineOther(index));
}

function clickeventOther(index) {
	jusfMap.addPointDatas(chart, geteMapDataTimeline(index));
}
$(".hev_no1").on('mouseover', function() {
	clickevent(jusfMap.currentIndex);
}).on('mouseout', function() {
	clickeventOther(jusfMap.currentIndex);
})

jusfMap.drawMagriteMap('qxt', getMigrateData());

//*******************地图结束

jusfPie.drawRingPieDoubleColor('myd_chart', getDoubleColorData());

jusfPie.drawRingPieDoubleOther('ict_r1', {
	backgroundColor: '#053587',
	title: {
		text: '本月投诉',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 40,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 60,
				name: '本月投诉'
			},
		],
		hoverAnimation: false,
		silent: true,
		tooltipIsShow: false,
		colors: ['#ff5f18', '#ff0148']
	}]
});

jusfPie.drawRingPieDoubleOther('ict_r2', {
	backgroundColor: '#053587',
	title: {
		text: '本月举报',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 79,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 21,
				name: '本月投诉'
			},
		],
		colors: ['#00c09f', '#00fd0c']
	}]
});

jusfPie.drawRingPieDoubleOther('ict_r3', {
	backgroundColor: '#053587',
	title: {
		text: '本月咨询',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 60,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 40,
				name: '本月投诉'
			},
		],
		colors: ['#ffd001', '#ff650c']
	}]
});

jusfPie.drawRingPieDoubleOther('ict_r4', {
	backgroundColor: '#053587',
	title: {
		text: '本月求助',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 70,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 30,
				name: '本月投诉'
			},
		],
		colors: ['#00f9d6', '#00bef9']
	}]
});

//下方仪表盘

jusfDashBoard.createBDashBoard("onceBj", 600, 400, {
	decimal: 1,
	max: 100,
	name: "办结率",
	count: '一次',
	value: 65,
	config: { //必须设置
		dashBoardBgUrl: '../images/ybp1.png',
		dashBoardPointUrl: '../images/point.png'
	}
});

jusfDashBoard.createBDashBoard("moreBj", 600, 400, {
	decimal: 1,
	max: 100,
	name: "办结率",
	count: '多次',
	value: 72.3,
	config: { //必须设置
		dashBoardBgUrl: '../images/ybp2.png',
		dashBoardPointUrl: '../images/point.png'
	}
});

jusfDashBoard.createBDashBoard("overtimeBj", 600, 400, {
	decimal: 1,
	max: 100,
	name: "承办率",
	count: '超时',
	value: 89.59,
	config: { //必须设置
		dashBoardBgUrl: '../images/ybp3.png',
		dashBoardPointUrl: '../images/point.png'
	}
});

//右边栏
jusfPie.drawRingPie('pubType', getEPieData());

var echarts = require('echarts');
echarts.init(document.getElementById('pubChain')).setOption({
	grid: {
		right: '5%',
		left: '15%',
		bottom: '15%',
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
		formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}<br />{a5}: {c5}<br />{a6}: {c6}'
	},
	legend: {
		data: ['总量', '求助', '咨询', '举报', '投诉'],
		right: '30',
		top: '10',
		textStyle: {
			color: '#fff'
		},
		itemGap: 10,
		itemHeight: 5,
		itemWidth: 15
	},
	//	toolbox: {
	//      show : true,
	//      feature : {
	//          saveAsImage : {show: true}
	//      },
	//     	top: '10',
	//      right: '17',
	//      iconStyle: {
	//			normal: {
	//				borderColor: '#0084ff',
	//			}
	//		}
	//  },
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月'],
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
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#fe8778'
						}, {
							offset: 1,
							color: '#d10702'
						}]
					),
					barBorderRadius: [5, 5, 0, 0]
				}
			},
			data: [4200, 3700, 4600, 5800, 5500, 4800],
			zlevel: 9

		}, {
			name: '求助',
			type: 'bar',
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#ffd900'
						}, {
							offset: 1,
							color: '#ff6a00'
						}]
					),
					barBorderRadius: [5, 5, 0, 0]
				}
			},
			data: [4700, 3100, 3400, 5500, 4800, 4700],
			zlevel: 9

		}, {
			name: '咨询',
			type: 'bar',
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#a1fc01'
						}, {
							offset: 1,
							color: '#05b91e'
						}]
					),
					barBorderRadius: [5, 5, 0, 0]
				},

			},
			data: [4700, 3100, 3400, 5500, 4800, 4700],
			zlevel: 9

		}, {
			name: '举报',
			type: 'bar',
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#22a6ff'
						}, {
							offset: 1,
							color: '#8253ff'
						}]
					),
					barBorderRadius: [5, 5, 0, 0]
				}
			},
			data: [4700, 3100, 3400, 5500, 4800, 4700],
			zlevel: 9

		}, {
			name: '投诉',
			type: 'bar',
			barMaxWidth: 30,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#0088fe'
						}, {
							offset: 1,
							color: '#0035d9'
						}]
					),
					barBorderRadius: [5, 5, 0, 0]
				}
			},
			data: [4700, 3100, 3400, 5500, 4800, 4700],
			zlevel: 9

		}

	]
})

var dataShadow = [100, 100, 100, 100, 100];
echarts.init(document.getElementById('pubRank')).setOption({
	// backgroundColor:'#074c81',

	grid: {
		left: '80',
		top: '10',
		right: '40',
		bottom: '10'
	},
	yAxis: [{
		type: 'category',
		data: ['物价收费', '市政建设', '物业管理', '贪污受贿', '城管执法'],
		boundaryGap: true,
		axisLabel: {
			// show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#fff'
			}
		},
	}],
	xAxis: [{
		type: 'value',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	}],
	series: [{ // For shadow
		type: 'bar',
		itemStyle: {
			normal: {
				color: '#000514'
			}
		},
		barGap: '-100%',
		barCategoryGap: '60%',
		data: dataShadow,
		zlevel: 1
	}, {
		name: ' 本月销售量',
		type: 'bar',
		data: [{
			value: '30',
			itemStyle: {
				normal: {
					color: ['#00a3e1']
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff'
					}
				},

			}
		}, {
			value: '46',
			itemStyle: {
				normal: {
					color: ['#0d2ada']
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff'
					}
				}
			}
		}, {
			value: '56',
			itemStyle: {
				normal: {
					color: ['#e6dc34']
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff'
					}
				}
			}
		}, {
			value: '67',
			itemStyle: {
				normal: {
					color: ['#e35902']
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff'
					}
				}
			}
		}, {
			value: '80 ',
			itemStyle: {
				normal: {
					color: ['#d62005']
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: '#fff'
					}
				}
			}
		}, ],
		zlevel: 10

	}]
})
