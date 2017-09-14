//年月选择
function outputtime(year, mon) {
//	alert(year + '-' + mon);
	time = year + '-' + mon;
	chart1(data_li[time]);
//	chart1(data_li['2017-01']);
}

monthSelect('2017-1', '2016-11', '2017-1', '.c_title');

// 参数为默认时间,开始时间,结束时加,父级名字(有多个注意区分)
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

	$(adr + ' .yearsin>div')
		.on(
			'click',
			function(ev) {
				ev.stopPropagation();
				$(this).addClass('active').siblings().removeClass(
					'active');
				$(adr + ' .year').html($(this).html());
				trueyear = $(this).html();

				// 判断不能选的月份
				if($(this).html() == endyear) {
					$(adr + ' .lock').remove();
					$(adr + ' .monsin>div').css({
						'color': '#3b9dff'
					});
					$(adr + ' .monsin>div')
						.slice(endmon)
						.css({
							'color': '#ccc'
						})
						.each(
							function() {
								if($(this).hasClass('active')) {
									$(adr + ' .monsin>div')
										.removeClass(
											'active');
									$(
											adr +
											' .monsin>div:eq(' +
											(endmon - 1) +
											')')
										.addClass('active');
									var newMon = $(
											adr +
											' .monsin>div:eq(' +
											(endmon - 1) +
											')')
										.html();
									$(adr + ' .month').html(
										newMon);
									truemon = newMon;
								}
								$(adr + ' .monsin')
									.append(
										'<div class="lock" style="position:absolute;left:' +
										$(
											this)
										.position().left +
										'px;top:' +
										$(
											this)
										.position().top +
										'px;"></div>');
							});
				} else if($(this).html() == startyear) {
					$(adr + ' .lock').remove();
					$(adr + ' .monsin>div').css({
						'color': '#3b9dff'
					});
					$(adr + ' .monsin>div')
						.slice(0, startmon)
						.css({
							'color': '#ccc'
						})
						.each(
							function() {
								if($(this).hasClass('active')) {
									$(adr + ' .monsin>div')
										.removeClass(
											'active');
									$(
											adr +
											' .monsin>div:eq(' +
											startmon +
											')')
										.addClass('active');
									var newMon = $(
											adr +
											' .monsin>div:eq(' +
											startmon +
											')')
										.html();
									$(adr + ' .month').html(
										newMon);
									truemon = newMon;
								}
								$(adr + ' .monsin')
									.append(
										'<div class="lock" style="position:absolute;left:' +
										$(
											this)
										.position().left +
										'px;top:' +
										$(
											this)
										.position().top +
										'px;"></div>');
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
					}, function() {
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

	// 判断不能选的月

	$(adr + ' .monthPicker').on(
		'click',
		function() {

			if($(adr + ' .yearsin>.active').html() == endyear) {

				$(adr + ' .monsin>div').slice(endmon).css({
					'color': '#ccc'
				}).each(
					function() {
						$(adr + ' .monsin').append(
							'<div class="lock" style="position:absolute;left:' +
							$(this).position().left +
							'px;top:' +
							$(this).position().top +
							'px;"></div>');
					});
			} else if($(adr + ' .yearsin>.active').html() == startyear) {
				$(adr + ' .monsin>div').slice(0, startmon).css({
					'color': '#ccc'
				}).each(
					function() {
						$(adr + ' .monsin').append(
							'<div class="lock" style="position:absolute;left:' +
							$(this).position().left +
							'px;top:' +
							$(this).position().top +
							'px;"></div>');
					});
			}
		})
}
var time = '2017-01';
// 获取当前的url
var url = window.location.href;
// 获取路劲后面携带的参数
var urlParam = url.substring(url.length - 1, url.length)

//var date1 = new Array();
//var date2 = new Array();
//var value1, value2, value3, value4, value5, value6;
//initDate();

var datas = {};
var datas = [
	{
		'2016-12':{
			'na':['奎文区', '潍城区', '诸城市', '城区供暖', '工商管理', '物业管理'],
			'data':[3442, 1194, 1168, 3537, 1800, 1376]
		},
		'2017-01':{
			'na':['奎文区', '诸城市', '寿光市', '城区供暖', '工商管理', '物业管理'],
			'data':[3042, 956, 806, 3537, 1800, 1376]
		}
	},
	{
		'2016-12':{
			'na':['奎文区', '潍城区', '诸城市', '环境保护', '农民及农村问题', '城管执法'],
			'data':[3442, 1194, 1168, 611, 576, 423]
		},
		'2017-01':{
			'na':['奎文区', '潍城区', '诸城市', '环境保护', '农民及农村问题', '城管执法'],
			'data':[352, 166, 163, 317, 298, 166]
		}
	},
	{
		'2016-12':{
			'na':['奎文区', '诸城市', '高新技术开发区', '交通治安', '市政建设', '运输管理'],
			'data':[245, 55, 54, 288, 117, 46]
		},
		'2017-01':{
			'na':['奎文区', '诸城市', '高新技术开发区', '农民及农村问题', '城管执法', '工商管理'],
			'data':[158, 35, 25, 317, 298, 166]
		}
	},
	{
		'2016-12':{
			'na':['奎文区', '诸城市', '潍城区', '城区供暖', '农民及农村问题', '工商管理'],
			'data':[3215, 996, 883, 2092, 1318, 866]
		},
		'2017-01':{
			'na':['奎文区', '诸城市', '高密市', '农民及农村问题', '民工工资及拖欠工程款', '劳动保障'],
			'data':[2117, 519, 489, 880, 775, 698]
		}
	},
	{
		'2016-12':{
			'na':['奎文区', '诸城市', '潍城区', '运输管理', '交通治安', '农民及农村问题'],
			'data':[8417, 480, 325, 6588, 817, 703]
		},
		'2017-01':{
			'na':['奎文区', '诸城市', '青州市', '运输管理', '农民及农村问题', '工商管理'],
			'data':[9661, 281, 185, 10374, 428, 345]
		}
	},
	{
		'2016-12':{
			'na':['奎文区', '临朐县', '昌乐县', '其它', '农民及农村问题', '运输管理'],
			'data':[12, 2, 1, 16, 3, 3]
		},
		'2017-01':{
			'na':['奎文区', '青州市', '经济开发区', '其它', '通信管理', '工商管理'],
			'data':[9, 2, 1, 7, 2, 1]
		}
	}
];

var data_li = datas[(urlParam-1)];

// echart1
chart1(data_li['2017-01']);
function chart1(data) {

	var dataShadow = [12000, 12000, 12000];
	var myChart1 = echarts.init(document.getElementById('echart1'));
	myChart1.setOption({
		grid: {
			right: '8%',
			left: '8%',
			bottom: '15%',
			top: '22%',
		},
		yAxis: [{
			type: 'category',
			data: [data.na[0],data.na[1],data.na[2]],
			boundaryGap: false,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#00358c',
					width: 1
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
					color: '#00081b'
				}
			},
			barWidth: '30%',
			barGap: '-100%',
			barCategoryGap: '10%',
			data: dataShadow,
			zlevel: 1
		}, {
			name: '件',
			type: 'bar',
			barWidth: '30%',
			zlevel: 9,
			data: [{
				value: data.data[0],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
							offset: 0,
							color: '#009cff'
						}, {
							offset: 1,
							color: '#2351e8'
						}]),
						opacity: 0.6,
						// barBorderRadius: [5, 5, 0, 0]
						borderColor: '#2351e8',
						borderWidth: 1
					},
					emphasis: {
						opacity: 1
					}
				},
				label: {
					normal: {
						show: true,
						position: [830, -2],
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					}
				}
			}, {
				value: data.data[1],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
							offset: 0,
							color: '#00c5ff'
						}, {
							offset: 1,
							color: '#007fff'
						}]),
						opacity: 0.6,
						// barBorderRadius: [5, 5, 0, 0]
						borderColor: '#007fff',
						borderWidth: 1
					},
					emphasis: {
						opacity: 1
					}
				},
				label: {
					normal: {
						show: true,
						position: [830, -2],
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					}
				}
			}, {
				value: data.data[2],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
							offset: 0,
							color: '#00fbff'
						}, {
							offset: 1,
							color: '#009cff'
						}]),
						opacity: 0.6,
						// barBorderRadius: [5, 5, 0, 0],
						borderColor: '#009cff',
						borderWidth: 1
					},
					emphasis: {
						opacity: 1
					}
				},
				label: {
					normal: {
						show: true,
						position: [830, -2],
						textStyle: {
							color: '#fff',
							fontSize: 12
						}
					}
				}
			}]
		}]
	})

// echart2
var dataShadow = [12000, 12000, 12000];
var myChart2 = echarts.init(document.getElementById('echart2'));
myChart2.setOption({
	grid: {
		right: '8%',
		left: '8%',
		bottom: '15%',
		top: '22%',
	},
	yAxis: [{
		type: 'category',
		data: [data.na[3],data.na[4],data.na[5]],
		boundaryGap: false,
		axisLabel: {
			textStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#00358c',
				width: 1
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
				color: '#00081b'
			}
		},
		barWidth: '30%',
		barGap: '-100%',
		barCategoryGap: '10%',
		data: dataShadow,
		zlevel: 1
	}, {
		name: '件',
		type: 'bar',
		barWidth: '30%',
		zlevel: 9,
		data: [{
			value: data.data[3],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
						offset: 0,
						color: '#fd6501'
					}, {
						offset: 1,
						color: '#b70d22'
					}]),
					opacity: 0.6,
					// barBorderRadius: [5, 5, 0, 0]
					borderColor: '#b70d22',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830, -2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: data.data[4],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
						offset: 0,
						color: '#fe8d01'
					}, {
						offset: 1,
						color: '#cf250e'
					}]),
					opacity: 0.6,
					// barBorderRadius: [5, 5, 0, 0]
					borderColor: '#cf250e',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830, -2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: data.data[5],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
						offset: 0,
						color: '#ffba00'
					}, {
						offset: 1,
						color: '#f44b08'
					}]),
					opacity: 0.6,
					// barBorderRadius: [5, 5, 0, 0],
					borderColor: '#f44a08',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830, -2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}]
	}]
})
}