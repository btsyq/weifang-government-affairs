$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 143
	}, 500);
});

var time;
$('.rightbtn').on('mousedown', function() {
	var pos = $('.btnselin').position().left;

	time = setInterval(function() {
		var lim = $('.btnselin>div:last').offset().left;
		var btnl = $('.rightbtn').offset().left;
		if(lim < (btnl - 150)) {
			clearInterval(time);
			return;
		}

		pos -= 6;
		$('.btnselin').css({
			'left': pos
		});

	}, 10);
}).on('mouseup', function() {
	clearInterval(time);
});

$('.leftbtn').on('mousedown', function() {
	var pos = $('.btnselin').position().left;
	time = setInterval(function() {

		var lim = $('.btnselin>div:first').offset().left;
		var btnl = $('.leftbtn').offset().left;
		if(lim > (btnl + 50)) {
			clearInterval(time);
			return;
		}

		pos += 6;
		$('.btnselin').css({
			'left': pos
		})
	}, 10);
}).on('mouseup', function() {
	clearInterval(time);
});


$('.leftbtnb').on('click',function(){
	var wid = $('.bin').width();
	var pos = $('.btnselin').position().left;
	var posn = (pos+wid);
	if(posn>0){
		posn = 0;
	}
	$('.btnselin').css({
		'left': posn
	})
})
$('.rightbtnb').on('click',function(){
	var wid = $('.bin').width();
	var pos = $('.btnselin').position().left;
	var posn = (pos-wid);
	var lim = $('.btnselin>div:last').offset().left + 100 - wid ;
	if(lim < 0){
		return
	}
	$('.btnselin').css({
		'left': posn
	})
})



//$('.btn1').on('click',function(){
//	window.location.href="DepartOpinionCityIn.html"; 
//})


function outputtime(year, mon, adr) {
	//	alert(year + '-' + mon);
//	alert(adr);
}

monthSelect('2015-1', '2014-3', '2018-10', '.myslqs');
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



//echart2
var chart2_data = {
	'name': ['市审计局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局', '市劳动局', '市税务局', '市畜牧局', '市林业局', '市水利局', '市财政局', '市公安局', '市工商局', '市教育局', '市公安局'],
	'jb': [320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320],
	'ts': [320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320],
	'zx': [320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320],
	'qz': [320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320, 302, 320]
};

creatChart2(chart2_data);

function creatChart2(data) {

	echarts.init(document.getElementById('echart2')).setOption({
		grid: {
			right: '7%',
			left: '20%',
			bottom: '4%',
			top: '3%'
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
			data: data.name,
			barMaxWidth: 10,
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					fontSize: 10,
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
				barMaxWidth: 10,
				itemStyle: {
					normal: {

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
				barMaxWidth: 10,
				itemStyle: {
					normal: {
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
				barMaxWidth: 10,
				itemStyle: {
					normal: {
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
				barMaxWidth: 10,
				itemStyle: {
					normal: {
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
				markPoint: {
					data: [{
						type: 'max',
						name: '最大值'
					}, {
						type: 'min',
						name: '最小值'
					}],
					label: {
						normal: {
							formatter: '{c}',
							position: ['30%', '28%'],
							textStyle: {
								fontSize: 10,
								color: '#fff'
							}
						}
					},
					symbolRotate: -90
				},
				data: data.qz
			}
		]
	})
}

//$("#slider1").slider({
//	value: 100,
//	min: 0,
//	max: 3,
//	step: 1,
//	slide: function(event, ui) {
//		//      $( "#amount" ).val( "$" + ui.value );
//	}
//});

var chart3_data = {
	'name': ['火车站广场开发管理办公室', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
	'datas': [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800]
};
var chart4_data = {
	'name': ['火车站广场开发管理办公室', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
	'datas': [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800]
};
var chart5_data = {
	'name': ['火车站广场开发管理办公室', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
	'datas': [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800]
};
var chart6_data = {
	'name': ['火车站广场开发管理办公室', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县', '市人口和计划生育委员会（停用）', '坊子区', '寒亭区', '青州市', '诸城市', '寿光市', '安丘市', '昌邑市', '高密市', '临朐县', '昌乐县'],
	'datas': [1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800, 800]
};

creatChart1('echart1', '#00ddff', '#007fff', chart3_data ,'满意率');
creatBarChart('echart3', '#00ddff', '#007fff', chart3_data , '办结率');
creatBarChart('echart4', '#a6fe00', '#03b81e', chart4_data, '多大的');
creatBarChart('echart5', '#ffdc00', '#ff6800', chart5_data, '多大的');
creatBarChart('echart6', '#ff8e01', '#ff1454', chart6_data, '多大的');

function creatBarChart(id, col1, col2, data, legend) {
	var arr = [];
	arr[0] = legend;
	echarts.init(document.getElementById(id)).setOption({
		grid: {
			right: '7%',
			left: '20%',
			bottom: '4%',
			top: '3%'
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
			data: arr,
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
		yAxis: [{
			type: 'category',
			data: data.name,
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					fontSize: 10,
				}
			},
			axisTick: {
				show: false
			}
		}],
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
		series: [{
			name: legend,
			type: 'bar',
			barMaxWidth: 10,
			barGap: '60%',

			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 1, 0, [{
							offset: 0,
							color: col1
						}, {
							offset: 1,
							color: col2
						}]
					),
					opacity: 0.6,
					barBorderRadius: [0, 5, 5, 0]
				},
				emphasis: {
					opacity: 1
				}
			},
			data: data.datas,
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}],
				label: {
					normal: {
						formatter: '{c}',
						position: ['30%', '28%'],
						textStyle: {
							fontSize: 10,
							color: '#fff'
						}
					}
				},
				symbolRotate: -90
			},
			zlevel: 9,
		}]
	})
}


function creatChart1(id, col1, col2, data, legend) {
	var arr = [];
	arr[0] = legend;
	echarts.init(document.getElementById(id)).setOption({
		grid: {
			right: '7%',
			left: '20%',
			bottom: '4%',
			top: '3%'
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
			formatter: '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}'
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
			data: arr,
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
		yAxis: [{
			type: 'category',
			data: data.name,
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					fontSize: 10,
				}
			},
			axisTick: {
				show: false
			}
		}],
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
		series: [{
			name: legend,
			type: 'bar',
			barMaxWidth: 10,
			barGap: '60%',

			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 1, 0, [{
							offset: 0,
							color: col1
						}, {
							offset: 1,
							color: col2
						}]
					),
					opacity: 0.6,
					barBorderRadius: [0, 5, 5, 0]
				},
				emphasis: {
					opacity: 1
				}
			},
			data: data.datas,
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}],
				label: {
					normal: {
						formatter: '{c}',
						position: ['30%', '28%'],
						textStyle: {
							fontSize: 10,
							color: '#fff'
						}
					}
				},
				symbolRotate: -90
			},
			zlevel: 9,
		}]
	})
}