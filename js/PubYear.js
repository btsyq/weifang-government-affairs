$(document).on('click', function() {
	if($('.sections').css('display') == 'block') {
		$('.sections').slideUp();
	}
	if($('.ts1in').css('display') == 'block') {
		$('.ts1in').slideUp();
	}
	if($('.ts2in').css('display') == 'block') {
		$('.ts2in').slideUp();
	}
})

//下拉菜单滚动条
$(".sections").niceScroll({
	cursorcolor : "#002e73",
	cursoropacitymax : 1,
	touchbehavior : false,
	cursorwidth : "10px",
	cursorborder : "0",
	cursorborderradius :"5px"
})


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

selects('t1');
selects('t2');



var c1_data = {
	'year': ['2016', '2015'],
	'time': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	'year1': [400, 374, 251, 300, 420, 400, 440, 400, 380, 450, 400, 420],
	'year2': [320, 332, 301, 334, 360, 330, 350, 350, 370, 330, 370, 400],
}
chart1(c1_data);

function chart1(data) {

	var arr = [];
	var arrbar = [];
	for(var i = 0; i < data.time.length; i++) {
		var cha = data.year1[i] - data.year2[i];
		arr.push(cha);
		if(cha < 0) {

			arrbar.push(data.year1[i]);
			arr[i] = {
				value: -cha,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#ff8d02'
							}, {
								offset: 1,
								color: '#ff1751'
							}]
						)
					}
				}
			}
		} else {
			arrbar.push(data.year2[i]);
		}

	}

	echarts.init(document.getElementById('echart1')).setOption({
		grid: {
			right: '6%',
			left: '6%',
			bottom: '10%',
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
			formatter: function(params) {
				return '<span style="color:#dfb422">' + params[0].name + ' : ' +
					(params[0].value - params[1].value > 0 ? '+' : '-') +
					params[3].value + '</span><br/>' +
					params[0].seriesName + ' : ' + params[0].value + '<br/>' +
					params[1].seriesName + ' : ' + params[1].value + '<br/>'
			}
		},
		legend: {
			show: true,
			data: data.year,
			selectedMode: false,
			right: '60',
			top: '25',
			textStyle: {
				color: '#fff'
			},
			itemGap: 20
		},
		xAxis: [{
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
//			min: 0,
//			max: 450,
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
			name: data.year[0],
			type: 'line',
			data: data.year1,
			zlevel: 9,
			lineStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#fac60e' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#e42545' // 100% 处的颜色
					}], false)
				}
			}
		}, {
			name: data.year[1],
			type: 'line',
			symbol: 'path://m187.06499,117.5l0,0c0,-8.83655 7.16344,-16 15.99999,-16l0,0c4.24346,0 8.31312,1.68571 11.3137,4.68629c3.00058,3.00058 4.68629,7.07024 4.68629,11.31371l0,0c0,8.83655 -7.16344,16 -15.99999,16l0,0c-8.83655,0 -15.99999,-7.16344 -15.99999,-16zm8,0l0,0c0,4.41828 3.58172,8 8,8c4.41828,0 8,-3.58172 8,-8c0,-4.41828 -3.58172,-8 -8,-8l0,0c-4.41827,0 -8,3.58172 -8,8z"',
			data: data.year2,
			zlevel: 9,
			lineStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#c9ef31' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#1cefcd' // 100% 处的颜色
					}], false)
				}
			}
		}, {
			name: data.year[1],
			type: 'bar',
			stack: '1',
			barWidth: 6,
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					color: 'rgba(0,0,0,0)'
				}
			},
			data: arrbar
		}, {
			name: '变化',
			type: 'bar',
			stack: '1',
			zlevel: 9,
			data: arr,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#00ddff'
						}, {
							offset: 1,
							color: '#0080ff'
						}]
					)
				}
			}
		}]
	});
}


var c2_data = {
	'year':['2015', '2016'],
	'dt1':[4200, 3700, 4600, 5800],
	'dt2':[4700, 3100, 3400, 5500]
};

creatChart2(c2_data);

function creatChart2(data) {

	echarts.init(document.getElementById('echart2')).setOption({
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
			formatter: '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}<br />{a1}: {c1}'
		},
		legend: {
			data: data.year,
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
			data: ['举报', '求助', '投诉', '咨询'],
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
			name: data.year[0],
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
			data: data.dt1,
			zlevel: 9

		}, {
			name: data.year[1],
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
			data: data.dt2,
			zlevel: 9

		}]
	})

}

