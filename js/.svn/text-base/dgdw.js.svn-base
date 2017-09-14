//左边栏点击效果
$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 143
	}, 500);
});

// 头部导航点击事件
$(".nav_ul li").click(
	function() {
		$(this).find("a").addClass("active").parent("li").siblings().find(
			"a").removeClass("active");
	});
// 县区机关排行榜tab切换
$(".navList li").click(function() {
	$(this).addClass("active").find("i").show();
	$(this).siblings().removeClass("active");
	$(this).siblings().find("i").hide();
});
// 年月选择
function outputtime(year, mon) {
	// alert(year + '-' + mon);
}

monthSelect('2015-1', '2014-3', '2018-10', '.c_title');
monthSelect('2015-1', '2014-3', '2018-10', '.c_title1');
monthSelect('2015-1', '2014-3', '2018-10', '.c_title2');
monthSelect('2015-1', '2014-3', '2018-10', '.c_title3');
monthSelect('2015-1', '2014-3', '2018-10', '.c_title4');
monthSelect('2015-1', '2014-3', '2018-10', '.c_title5');

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
				})
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

// chart2年份选择

// 参数为父级名字,默认年份,可选年份总数
function selects(name, now, num) {

	var html = '';
	var newyear = now;
	$(name + ' .qyselect_con').html(now);
	for(var i = 0; i < num; i++) {
		html += '<div>' + (newyear--) + '</div>';
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
	// alert(adr);
}

selects('.bmjmy', 1998, 10);

// echart图把能变的数据都提出来,类似于这样,写成函数传参方式,数据结构随意,后台整理

var dd = {
	'jb': [100, 150, 100],
	'ts': [124, 145, 100],
	'zx': [156, 167, 100],
	'qz': [444, 555, 100],
	'jy': [333, 444, 100],
	'qt': [555, 333, 100]
}

creatChart1(dd);

function creatChart1(data) {
	echarts
		.init(document.getElementById('echart1'))
		.setOption({
			//  backgroundColor:'#074c81',

			grid: {
				left: '60',
				top: '40',
				right: '40',
				bottom: '40'
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
				formatter: '{b} : {c0}'
			},
			xAxis: [{
				type: 'category',
				data: ['民意总量', '举报', '投诉', '咨询', '求助', '建议', '其他'],
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
			series: [

				{
					name: ' 本月销售量',
					type: 'bar',
					barMaxWidth: 30,
					barGap: '60%',
					data: [{
						value: '30',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#1064ff'
									}, {
										offset: 1,
										color: '#071fff'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '46',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#00b1ff'
									}, {
										offset: 1,
										color: '#006eff'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '56',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#a4fd01'
									}, {
										offset: 1,
										color: '#05b91e'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '67',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#f0fb01'
									}, {
										offset: 1,
										color: '#ebb70c'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '80 ',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#ffa545'
									}, {
										offset: 1,
										color: '#f7380a'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '80 ',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#ff4327'
									}, {
										offset: 1,
										color: '#ff0147'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}, {
						value: '80 ',
						zlevel: 9,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#a400ff'
									}, {
										offset: 1,
										color: '#6600ff'
									}]
								),
								opacity: 0.6,
								barBorderRadius: [5, 5, 0, 0]
							},
							emphasis: {
								opacity: 1
							}
						}
					}],
					zlevel: 10

				}
			]
		})
}

//chart2
var dashBoardDatas1 = {
	decimal: 2,
	max: 100,
	count: '超时', //'一次'、'多次'、‘超时’，3种，文字颜色根据其改变
	value: 35,
	total: 9384,
	chainRatio: '30',
	unit: '件', //单位
	config: { //必须设置
		dashBoardBgUrl: '../images/dashbg.png',
		dashBoardPointUrl: '../images/point.png',
		dashBoardUpUrl: '../images/upArrow.png', //环比增长图形标志，本地地址
		dashBoardDownUrl: '../images/downArrow.png', //环比降低图形标志，本地地址
		dashBoardFlatUrl: '../images/flatIcon.png' //环比持平图形标志，本地地址
	},
	//      backgroundColor: '#011646',
	type: "环比"
}
jusfDashBoard.createBDashBoard("charts2_1", 300, 200, dashBoardDatas1);

var dashBoardDatas2 = {
	decimal: 2,
	max: 100,
	count: '超时', //'一次'、'多次'、‘超时’，3种，文字颜色根据其改变
	value: 35,
	total: 9384,
	chainRatio: '30',
	unit: '件', //单位
	config: { //必须设置
		dashBoardBgUrl: '../images/dashbg.png',
		dashBoardPointUrl: '../images/point.png',
		dashBoardUpUrl: '../images/upArrow.png', //环比增长图形标志，本地地址
		dashBoardDownUrl: '../images/downArrow.png', //环比降低图形标志，本地地址
		dashBoardFlatUrl: '../images/flatIcon.png' //环比持平图形标志，本地地址
	},
	//      backgroundColor: '#011646',
	type: "环比"
}
jusfDashBoard.createBDashBoard("charts2_2", 300, 200, dashBoardDatas2);

var dashBoardDatas3 = {
	decimal: 2,
	max: 100,
	count: '超时', //'一次'、'多次'、‘超时’，3种，文字颜色根据其改变
	value: 35,
	total: 9384,
	chainRatio: '30',
	unit: '件', //单位
	config: { //必须设置
		dashBoardBgUrl: '../images/dashbg.png',
		dashBoardPointUrl: '../images/point.png',
		dashBoardUpUrl: '../images/upArrow.png', //环比增长图形标志，本地地址
		dashBoardDownUrl: '../images/downArrow.png', //环比降低图形标志，本地地址
		dashBoardFlatUrl: '../images/flatIcon.png' //环比持平图形标志，本地地址
	},
	//      backgroundColor: '#011646',
	type: "环比"
}
jusfDashBoard.createBDashBoard("charts2_3", 300, 200, dashBoardDatas3);


function getEPieDataR04() {
	return {
		legend : {
			data : [ '满意', '不满意' ]
		},
		colors : [ '#0078ff', '#ffba00' ], // 通过添加colors属性，更改饼图颜色
		series : [ {
			name : ' 网络部门热线 -- 本市热线来源分布  ',
			data : [ {
				value : 335,
				name : '满意'
			}, {
				value : 310,
				name : '不满意'
			} ]
		} ]
	}
}
jusfPie.drawRingPieR02('echart3', getEPieDataR04());