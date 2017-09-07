$(".sections").niceScroll({
	cursorcolor: "#002e73",
	cursoropacitymax: 1,
	touchbehavior: false,
	cursorwidth: "10px",
	cursorborder: "0",
	cursorborderradius: "5px"

})

function timeChange(time) {
	alert(time);
}

addtime('.chart2_1', '2015-2', '2014-11', '2015-6');

function addtime(adr, mon, start, end) {

	var timarr1 = start.split('-');
	var year1 = parseInt(timarr1[0]);
	var mon1 = parseInt(timarr1[1]);

	var timarr2 = end.split('-');
	var year2 = parseInt(timarr2[0]);
	var mon2 = parseInt(timarr2[1]);

	var tol = (year2 - year1 - 1) * 12 + 13 - mon1 + mon2;

	var sel = [];
	var y1 = year1;
	var m1 = mon1;
	for(var i = 0; i < tol; i++) {
		if(m1 == 13) {
			m1 = 1;
			y1 += 1;
		}

		sel.push(y1 + '年' + m1 + '月');
		m1 += 1;
	}

	var tm = mon.split('-');
	var tmyear = parseInt(tm[0]);
	var tmmon = parseInt(tm[1]);
	tm = tmyear + '年' + tmmon + '月';
	//		alert(tm);

	function output() {
		if(thiss.html()) {
			//			alert(thiss.html());         //切换日期执行这个方法
			var x = thiss.html().split('月')[0].split('年');
			var time = x.join('-');
			timeChange(time);
		}
	}
	var html = '';
	var thiss;
	for(var i = 0; i < sel.length; i++) {
		if(sel[i] == tm) {
			html += "<div class='active'>" + sel[i] + "</div>";
		} else {
			html += "<div>" + sel[i] + "</div>";
		}
	}
	$(adr + ' .dates').html(html);

	var len = $(adr + ' .dates div').length * 90;
	$(adr + ' .dates').width(len);

	var pos = 90 - Math.round($(adr + ' .dates>.active').position().left);
	$(adr + ' .dates').animate({
		'left': pos
	});

	$(adr + ' .dates>div').on('click', function() {
		thiss = $(this);
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 90 - Math.round($(this).position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
	$(adr + ' .leftb').on('click', function() {
		thiss = $(adr + ' .dates>.active').prev();
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 90 - Math.round($(adr + ' .dates>.active').position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
	$(adr + ' .rightb').on('click', function() {
		thiss = $(adr + ' .dates>.active').next();
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 90 - Math.round($(adr + ' .dates>.active').position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
}

//年月选择

$(document).on('click', function() {
	if($('.mp_days').css('display') == 'block') {
		$('.mp_days').slideUp();
	}
	$('.sections').each(function() {
		$(this).css('display');

		//		if($(this).css('display') == 'block')){
		//			console.log($(this));
		//			$('.sections').slideUp();
		//		}
	})

})

function outputtime(year, mon) {
	//	alert(year + '-' + mon);
}

monthSelect('2015-1', '2014-3', '2018-10', '.c_title');

function monthSelect(tmon, start, end, adr) {

	var startyear = parseInt(start.split('-')[0]);
	var endyear = parseInt(end.split('-')[0]);

	var startmon = parseInt(start.split('-')[1]);
	var endmon = parseInt(end.split('-')[1]);

	var thisyear = parseInt(tmon.split('-')[0]);
	var thismon = parseInt(tmon.split('-')[1]);
	if(thismon < 10) {
		thismon = '0' + thismon;
	}
	var trueyear = thisyear;
	var truemon = thismon;

	$(adr + ' .year').html(thisyear);
	$(adr + ' .month').html(thismon);

	var ys = [];
	var a = startyear;
	for(var i = 0; i < (endyear - startyear + 1); i++) {
		ys.push(a++);
	}

	$(adr + ' .monsin>div').each(function() {
		if($(this).html() == thismon) {
			$(this).addClass('active');
		}

	});

	var html = '';
	for(var i = 0; i < ys.length; i++) {
		if(ys[i] == thisyear) {
			html += "<div class='active'>" + ys[i] + "</div>";
		} else {
			html += "<div>" + ys[i] + "</div>";
		}
	}
	$(adr + ' .yearsin').html(html);
	var len = $(adr + ' .yearsin div').length * 62;
	$(adr + ' .yearsin').width(len);

	var posi = -62 * ($(adr + ' .yearsin>.active').index() - 1);
	$(adr + ' .yearsin').css({
		'left': posi
	});

	function ttime() {
		var ti = $(adr + ' .year').html() + '-' + $(adr + ' .month').html();
	}
	$(adr + ' .monsin>div').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(adr + ' .month').html($(this).html());
		truemon = $(this).html();
		outputtime(trueyear, truemon);
	})

	$(adr + ' .yearsin>div').on('click', function(ev) {
		ev.stopPropagation();
		$(this).addClass('active').siblings().removeClass('active');
		$(adr + ' .year').html($(this).html());
		trueyear = $(this).html();

		//判断不能选的月份
		if($(this).html() == endyear) {
			$(adr + ' .lock').remove();
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'
			});
			$(adr + ' .monsin>div').slice(endmon).css({
				'color': '#ccc'
			}).each(function() {
				if($(this).hasClass('active')) {
					$(adr + ' .monsin>div').removeClass('active');
					$(adr + ' .monsin>div:eq(' + (endmon - 1) + ')').addClass('active');
					var newMon = $(adr + ' .monsin>div:eq(' + (endmon - 1) + ')').html();
					$(adr + ' .month').html(newMon);
					truemon = newMon;
				}
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else if($(this).html() == startyear) {
			$(adr + ' .lock').remove();
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'
			});
			$(adr + ' .monsin>div').slice(0, startmon).css({
				'color': '#ccc'
			}).each(function() {
				if($(this).hasClass('active')) {
					$(adr + ' .monsin>div').removeClass('active');
					$(adr + ' .monsin>div:eq(' + startmon + ')').addClass('active');
					var newMon = $(adr + ' .monsin>div:eq(' + startmon + ')').html();
					$(adr + ' .month').html(newMon);
					truemon = newMon;
				}
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else {
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'

			});
			$(adr + ' .lock').remove();
		}

		$(adr + ' .monsin>div').hover(function() {
				$(this).css({
					'color': '#00f0ff'
				})
			},
			function() {
				$(this).css({
					'color': '#3b9dff'
				})
			}

		)
		outputtime(trueyear, truemon);
	})

	$(adr + ' .yearsleft').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) + 62;
		if(posm <= 0) {
			$(adr + ' .yearsin').css({
				'left': posm
			});
		}
		ev.stopPropagation();
	});
	$(adr + ' .yearsright').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) - 62;
		if(posm >= (186 - len)) {
			$(adr + ' .yearsin').css({
				'left': posm
			});
		}
		ev.stopPropagation();
	});

	$(adr + ' .monthPicker').on('click', function(ev) {
		ev.stopPropagation();
		$(adr + ' .mp_days').slideToggle();
	})

	//判断不能选的月

	$(adr + ' .monthPicker').on('click', function() {

		if($(adr + ' .yearsin>.active').html() == endyear) {

			$(adr + ' .monsin>div').slice(endmon).css({
				'color': '#ccc'
			}).each(function() {
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else if($(adr + ' .yearsin>.active').html() == startyear) {
			$(adr + ' .monsin>div').slice(0, startmon).css({
				'color': '#ccc'
			}).each(function() {
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		}
	})
}

var echarts = require('echarts');

var myChart = echarts.init(document.getElementById('chart1'));
// 绘制图表
myChart.setOption({
	grid: {
		right: '8%',
		left: '8%',
		bottom: '12%',
		top: '18%',

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
			return '<p style="color:#dfb422">' + params[0].name + '</p><span>' + params[0].data.name + ' : ' + params[0].data.value + '</span>';
		}
	},
	legend: {
		data: ['民意总量', '预测量'],
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
	series: {
		// 		name: '民意总量',
		type: 'bar',
		barMaxWidth: 30,
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
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1, [{
						offset: 0,
						color: '#00ddff'
					}, {
						offset: 1,
						color: '#007fff'
					}]
				),
				opacity: 1
			}
		},
		data: [{
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '总量',
			value: 750
		}, {
			name: '预测量',
			value: 500,
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
					)

				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#ffdd00'
						}, {
							offset: 1,
							color: '#ff6800'
						}]
					)
				}
			}
		}],
		zlevel: 9,
		markPoint: {
			data: [{
				type: 'max',
				name: '最大值'
			}, {
				type: 'min',
				name: '最小值'
			}],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#ff8e01'
						}, {
							offset: 1,
							color: '#ff1d4d'
						}]
					)
				}
			}
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}],
			silent: true,
		}
	}
});

//chart2_1
jusfPie.drawRosePie('chart2_1', getEPieData(), changeBar, 'name');

function changeBar(param) {
	//param，返回真实数值
	alert(param);
	//绘制右侧图形的方法
	//      jusfPie.drawDoubleRingPie('main2', getDoubleRingData(), 0);
	creatChart2_2(c22_data);
}

//chart2_2
var c22_data = {
	'data1': [220, 178, 330, 250, 170],
	'data2': [180, 146, 260, 220, 150]
};
creatChart2_2(c22_data);

function creatChart2_2(data) {

	echarts.init(document.getElementById('chart2_2')).setOption({
		grid: {
			right: '8%',
			left: '15%',
			bottom: '20%',
			top: '25%',

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
			formatter: '<span style="color:#dfb422">{b}</span><br />数量: {c0}<br />预测: {c1}'
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
			data: ['城管执法', '贪污受贿', '物业管理', '市政建设', '物价收费'],
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
			minInterval: 10,
		}],
		series: [{
			name: '数量',
			type: 'bar',
			barMaxWidth: 16,
			barGap: '60%',
			label: {
				normal: {
					show: true,
					position: 'top',
				}
			},
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#1babff'
						}, {
							offset: 1,
							color: '#8550ff'
						}]
					),
					opacity: 0.6,
					barBorderRadius: [5, 5, 0, 0]
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#1babff'
						}, {
							offset: 1,
							color: '#8550ff'
						}]
					),
					opacity: 1
				}
			},
			data: data.data1,
			zlevel: 9,

		}, {
			name: '预测量',
			type: 'bar',
			barMaxWidth: 16,
			label: {
				normal: {
					show: true,
					position: 'top',
				}
			},
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#a7ff00'
						}, {
							offset: 1,
							color: '#02b81e'
						}]
					),
					opacity: 0.6,
					barBorderRadius: [5, 5, 0, 0]
				},
				emphasis: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#a7ff00'
						}, {
							offset: 1,
							color: '#02b81e'
						}]
					),
					opacity: 1
				}
			},
			data: data.data2,
			zlevel: 9,
		}]
	})
}

//chart2_3
var myChart2_3 = echarts.init(document.getElementById('chart2_3'));
myChart2_3.setOption({
	grid: {
		right: '8%',
		left: '6%',
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
		data: ['举报', '投诉', '咨询', '求助'],
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
		data: [700, 620, 680, 430],
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
		data: [620, 600, 610, 470],
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

//chart3_1
var c31data = [{
	name: '城管执法',
	value: 80
}, {
	name: '贪污受贿',
	value: 67
}, {
	name: '物业管理',
	value: 56
}, {
	name: '市政建设',
	value: 46
}, {
	name: '物价收费',
	value: 30
}];
for(var i = 0; i < 5; i++) {
	$('.c3names').eq(i).html(c31data[i].name);
	$('.c3data').eq(i).html(c31data[i].value + '%');
	$('.c3bars>div').eq(i).css({
		'width': c31data[i].value + '%'
	});
};

//chart3_2

jusfPie.drawRingSortPie('chart3_2', getRingSortData());
//var dataStyle = {
//	normal: {
//		label: {
//			show: false
//		},
//		labelLine: {
//			show: false
//		}
//	}
//};
//var placeHolderStyle = {
//	normal: {
//		color: 'rgba(0,0,0,0)',
//		label: {
//			show: false
//		},
//		labelLine: {
//			show: false
//		}
//	},
//	emphasis: {
//		color: 'rgba(0,0,0,0)'
//	}
//};
//echarts.init(document.getElementById('chart3_2')).setOption({
//	tooltip: {
//		axisPointer: {
//			type: 'shadow',
//			shadowStyle: {
//				color: 'rgba(0,46, 115, 0.3)',
//			}
//		},
//		backgroundColor: 'rgba(0,31,120,0.8)',
//		borderColor: '#3b9dff',
//		borderWidth: 1,
//		padding: 14,
//		formatter: "{a} <br/>{b} : {c} ({d}%)"
//	},
//	legend: {
//		right: '60',
//		top: '20',
//		textStyle: {
//			color: '#fff'
//		},
//		itemGap: 20,
//		itemHeight: 6,
//		itemWidth: 21,
//		data: ['咨询', '投诉', '举报', '求助']
//	},
//	color: ['#035fe3', '#00943f', '#ffc000', '#ff3c00'],
//	series: [{
//		name: '1',
//		type: 'pie',
//		clockWise: false,
//		radius: [85, 110],
//		center: ['50%', '55%'],
//		itemStyle: dataStyle,
//		data: [{
//			value: 68,
//			name: '咨询'
//		}, {
//			value: 32,
//			name: 'invisible',
//			itemStyle: placeHolderStyle
//		}]
//	}, {
//		name: '2',
//		type: 'pie',
//		clockWise: false,
//		radius: [60, 85],
//		center: ['50%', '55%'],
//		itemStyle: dataStyle,
//		data: [{
//			value: 62,
//			name: '投诉'
//		}, {
//			value: 38,
//			name: 'invisible',
//			itemStyle: placeHolderStyle
//		}]
//	}, {
//		name: '3',
//		type: 'pie',
//		clockWise: false,
//		radius: [35, 60],
//		center: ['50%', '55%'],
//		itemStyle: dataStyle,
//		data: [{
//			value: 29,
//			name: '举报'
//		}, {
//			value: 71,
//			name: 'invisible',
//			itemStyle: placeHolderStyle
//
//		}]
//	}, {
//		name: '4',
//		type: 'pie',
//		clockWise: false,
//		radius: [10, 35],
//		center: ['50%', '55%'],
//		itemStyle: dataStyle,
//		data: [{
//			value: 20,
//			name: '求助'
//		}, {
//			value: 80,
//			name: 'invisible',
//			itemStyle: placeHolderStyle
//		}]
//	}]
//})

//最下面排行榜
jusfPie.drawRingPieDoubleAnother('c331', {
	backgroundColor: '#053587',
	title: {
		text: '广播电视',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 94,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 6,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c332', {
	backgroundColor: '#053587',
	title: {
		text: '物价收费',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 87,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 13,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c333', {
	backgroundColor: '#053587',
	title: {
		text: '交通治安',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 82,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 18,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c334', {
	backgroundColor: '#053587',
	title: {
		text: '贪污受贿',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 78,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 22,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c335', {
	backgroundColor: '#053587',
	title: {
		text: '城管执法',
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
		colors: ['#ff5f18', '#ff0148']
	}]
});
jusfPie.drawRingPieDoubleAnother('c336', {
	backgroundColor: '#053587',
	title: {
		text: '物价管理',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 80,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 20,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c337', {
	backgroundColor: '#053587',
	title: {
		text: '市政建设',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 84,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 16,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c338', {
	backgroundColor: '#053587',
	title: {
		text: '相关作风',
		isShow: true,
	},

	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 88,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 12,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718']
	}]
});
jusfPie.drawRingPieDoubleAnother('c339', {
	backgroundColor: '#053587',
	title: {
		text: '广播电视',
		isShow: true,
	},
	series: [{
		name: '民意类型分析 ',
		data: [{
				value: 92,
				name: '辅助信息'
			}, //第一条为辅助信息，两者相加为100
			{
				value: 8,
				name: '本月投诉'
			},
		],
		colors: ['#00a374', '#00a718'],
	}]
});

//区域选择
function selects(name) {

	var adr;

	$(name + ' .qysl').on('click', function(ev) {
		ev.stopPropagation();
		$(name + ' .sections').slideToggle();
	})
	$(name + ' .sections>div').on('click', function() {
		$(name + ' .qyselect_con').html($(this).html());
		adr = $(this).html();
		returnsel(name, adr);
	});
}

function returnsel(name, adr) {
	alert(adr);
}

selects('.myzlyc');
selects('.mylxyc');
selects('.mynryc');


