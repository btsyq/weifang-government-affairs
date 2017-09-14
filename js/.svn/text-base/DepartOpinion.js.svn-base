//左边栏点击效果
$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 83
	}, 500);
});


//年月选择
function outputtime(year, mon) {
		alert(year + '-' + mon);
}

monthSelect('2015-1', '2014-3', '2018-10', '.c_title');

//参数为默认时间,开始时间,结束时加,父级名字(有多个注意区分)
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
	$(document).on('click', function() {
		if($('.mp_days').css('display') == 'block') {
			$('.mp_days').slideUp();
		}
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



//chart2年份选择

//参数为父级名字,默认年份,可选年份总数
function selects(name, now, num) {
	
	var html = '';
	var newyear = now;
	$(name + ' .qyselect_con').html(now);
	for(var i=0;i<num; i++){
		html += '<div>'+(newyear--)+'</div>';
	}
	$(name + ' .sections').html(html);
	

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

selects('.bmjmy', 1998, 10);




//echart图把能变的数据都提出来,类似于这样,写成函数传参方式,数据结构随意,后台整理

var dd = {
	'jb': [100, 150],
	'ts': [124, 145],
	'zx': [156, 167],
	'qz': [444, 555]
}

creatChart1(dd);

function creatChart1(data) {
	echarts.init(document.getElementById('echart1')).setOption({
		grid: {
			right: '8%',
			left: '8%',
			bottom: '15%',
			top: '22%',
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
			formatter: '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />'
		},
		legend: {
			data: ['举报', '投诉', '咨询', '求助'],
			right: '60',
			top: '35',
			textStyle: {
				color: '#fff'
			},
			itemGap: 20,
			itemHeight: 6,
			itemWidth: 21
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {
					show: true
				}
			},
			top: '10',
			right: '17',
			iconStyle: {
				normal: {
					borderColor: '#0084ff',
				}
			}
		},
		calculable: true,
		xAxis: [{
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
		yAxis: [{
			type: 'category',
			data: ['县区机关', '市直机关'],
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
				name: '举报',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 41,
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'insideRight'
						},
						color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0, [{
								offset: 0,
								color: '#ff8408'
							}, {
								offset: 1,
								color: '#ff3b3a'
							}]
						),
						opacity: 0.6,
					},
					emphasis: {
						opacity: 1
					}
				},
				zlevel: 9,
				data: data.jb
			}, {
				name: '投诉',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 41,
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'insideRight'
						},
						color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0, [{
								offset: 0,
								color: '#ffd400'
							}, {
								offset: 1,
								color: '#ff8b00'
							}]
						),
						opacity: 0.6,
					},
					emphasis: {
						opacity: 1
					}
				},
				zlevel: 9,
				data: data.ts
			}, {
				name: '咨询',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 41,
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'insideRight'
						},
						color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0, [{
								offset: 0,
								color: '#68e30c'
							}, {
								offset: 1,
								color: '#0fbd1c'
							}]
						),
						opacity: 0.6,
					},
					emphasis: {
						opacity: 1
					}
				},
				zlevel: 9,
				data: data.zx
			},

			{
				name: '求助',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 41,
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'insideRight'
						},
						color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0, [{
								offset: 0,
								color: '#00d2ff'
							}, {
								offset: 1,
								color: '#008aff'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [0, 5, 5, 0]
					},

					emphasis: {
						opacity: 1
					}
				},
				zlevel: 9,
				data: data.qz
			}
		]
	})
}

//echart2

var data2 = {
	'time': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	'szjg': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'xqjg': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800]
}
creatChart2(data2);

function creatChart2(data) {

	echarts.init(document.getElementById('echart2')).setOption({
		grid: {
			right: '8%',
			left: '10%',
			bottom: '20%',
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
			formatter: '<span style="color:#dfb422">{b}</span><br />市直机关: {c0}<br />县区机关: {c1}'
		},
		legend: {
			data: ['市直机关', '县区机关'],
			right: '60',
			top: '35',
			textStyle: {
				color: '#fff'
			},
			itemGap: 20,
			itemHeight: 6,
			itemWidth: 21
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {
					show: true
				}
			},
			top: '10',
			right: '17',
			iconStyle: {
				normal: {
					borderColor: '#0084ff',
				}
			}
		},
		dataZoom: [{
			show: true,
			realtime: true,
			start: 10,
			end: 90,
			dataBackground: {
				lineStyle: {
					color: '#00c6ff',
				},
				areaStyle: {
					color: '#00a7ff'
				}
			},
			handleStyle: {
				color: '#00c6ff'
			},
			fillerColor: 'rgba(0,162,255,0.4)',
			textStyle: {
				color: '#00c6ff'
			},
			borderColor: '#005f9f',
			bottom: '8%'
		}],
		calculable: true,
		xAxis: [{
			type: 'category',
			data: data.time,
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
			name: '市直机关',
			type: 'bar',
			barMaxWidth: 30,
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
			data: data.szjg,
			zlevel: 9

		}, {
			name: '县区机关',
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
					opacity: 1
				}
			},
			data: data.xqjg,
			zlevel: 9

		}]
	})
}