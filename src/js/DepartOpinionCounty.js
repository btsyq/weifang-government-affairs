$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 143
	}, 500);
});
$('.btn1').on('click', function() {
	if(!$(this).hasClass('b_all')){
		window.location.href = "DepartOpinionCountyIn.html";
	}
})


//年份选择
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

selects('.myslqs', 1998, 10);


//选择月
function outputtime(year, mon, adr) {
	//	alert(year + '-' + mon);
//	alert(adr);
}

monthSelect('2015-1', '2014-3', '2018-10', '.slph');
monthSelect('2015-1', '2014-3', '2018-10', '.myd');
monthSelect('2015-1', '2014-3', '2018-10', '.ycjbl');
monthSelect('2015-1', '2014-3', '2018-10', '.dczbl');
monthSelect('2015-1', '2014-3', '2018-10', '.cscbl');

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
		outputtime(trueyear, truemon, adr);
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
		outputtime(trueyear, truemon, adr);
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

//echart1
var chart1_data = {
	'date': ['2016年1月', '2016年2月', '2016年3月', '2016年4月', '2016年5月', '2016年6月', '2016年7月', '2016年8月', '2016年9月', '2016年10月', '2016年11月', '2016年12月'],
	'kw': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'wc': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'fz': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'ht': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'qz': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'zc': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'sg': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'aq': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'cy': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'gm': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'lq': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100],
	'cl': [4200, 3700, 4600, 5800, 5500, 4800, 5600, 5500, 5700, 6000, 5700, 5100]
}

creatChart1(chart1_data);

function creatChart1(data) {

	echarts.init(document.getElementById('echart1')).setOption({
		grid: {
			right: '7%',
			left: '8%',
			bottom: '25%',
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
			formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}<br />{a5}: {c5}<br />{a6}: {c6}<br />{a7}: {c7}<br />{a8}: {c8}<br />{a9}: {c9}<br />{a10}: {c10}<br />{a11}: {c11}'
		},
		legend: {
			data: ['奎文区', '潍城区', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
			right: '60',
			top: '35',
			textStyle: {
				color: '#fff'
			},
			itemGap: 18,
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
			start: 40,
			end: 60,
			// backgroundColor:'rgba(0,162,255,0.4)',
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
			bottom: '6%'
		}],
		calculable: true,
		xAxis: [{
			type: 'category',
			data: data.date,
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
				name: '奎文区',
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
								color: '#002fd6'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.kw,
				zlevel: 9

			}, {
				name: '潍城区',
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
				data: data.wc,
				zlevel: 9

			}, {
				name: '坊子区',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#20a7ff'
							}, {
								offset: 1,
								color: '#8154ff'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.fz,
				zlevel: 9

			}, {
				name: '寒亭区',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#a5fe00'
							}, {
								offset: 1,
								color: '#03b81e'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.ht,
				zlevel: 9

			}, {
				name: '青州市',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#ffdc00'
							}, {
								offset: 1,
								color: '#ff6a00'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.qz,
				zlevel: 9

			}, {
				name: '诸城市',
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
								color: '#ff1553'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.zc,
				zlevel: 9

			}, {
				name: '寿光市',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#ff897a'
							}, {
								offset: 1,
								color: '#d10702'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.sg,
				zlevel: 9

			}, {
				name: '安丘市',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#be41ff'
							}, {
								offset: 1,
								color: '#55246e'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.aq,
				zlevel: 9

			}, {
				name: '昌邑市',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#ab90ef'
							}, {
								offset: 1,
								color: '#4801fb'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.cy,
				zlevel: 9

			}, {
				name: '高密市',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#72c1fd'
							}, {
								offset: 1,
								color: '#0053a7'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.gm,
				zlevel: 9

			}, {
				name: '临朐县',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#9cffee'
							}, {
								offset: 1,
								color: '#009077'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.lq,
				zlevel: 9

			}, {
				name: '昌乐县',
				type: 'bar',
				barMaxWidth: 30,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#a1ffc7'
							}, {
								offset: 1,
								color: '#00702d'
							}]
						),
						opacity: 0.6,
						barBorderRadius: [5, 5, 0, 0]
					},
					emphasis: {
						opacity: 1
					}
				},
				data: data.cl,
				zlevel: 9

			}

		]
	})
}

//echart2

var chart2_data = {
	'jb': [1, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 300],
	'ts': [0, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 300],
	'zx': [0, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 300],
	'qz': [0, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 300]
};

creatChart2(chart2_data);

function creatChart2(data) {

	echarts.init(document.getElementById('echart2')).setOption({
		grid: {
			right: '7%',
			left: '8%',
			bottom: '20%',
			top: '12%',
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
			data: ['奎文区', '潍城区', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
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
				barMaxWidth: 16,
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

$("#slider1").slider({
	value: 100,
	min: 0,
	max: 3,
	step: 1,
	slide: function(event, ui) {
		//      $( "#amount" ).val( "$" + ui.value );
	}
});

//echart3
var chart3_data = [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800];
var chart4_data = [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800];
var chart5_data = [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800];
var chart6_data = [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800];


creatBarChart('echart3','#00ddff','#007fff',chart3_data);
creatBarChart('echart4','#a6fe00','#03b81e',chart4_data);
creatBarChart('echart5','#ffdc00','#ff6800',chart5_data);
creatBarChart('echart6','#ff8e01','#ff1454',chart6_data);

function creatBarChart(id, col1, col2, data) {

	echarts.init(document.getElementById(id)).setOption({
		grid: {
			right: '7%',
			left: '8%',
			bottom: '20%',
			top: '12%',
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
			formatter: '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}%'
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
		legend: {
			data: ['满意率'],
			right: '60',
			top: '35',
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
			data: ['奎文区', '潍城区', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
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
			name: '满意率',
			type: 'bar',
			barMaxWidth: 30,
			barGap: '60%',

			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: col1
						}, {
							offset: 1,
							color: col2
						}]
					),
					opacity: 0.6,
					barBorderRadius: [5, 5, 0, 0]
				},
				emphasis: {
					opacity: 1
				}
			},
			data: data,
			zlevel: 9,
		}]
	})
}
