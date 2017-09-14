//左边栏点击效果
$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop : move.position().top - 143
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
	if (thismon < 10) {
		thismon = '0' + thismon;
	}
	var trueyear = thisyear;
	var truemon = thismon;

	$(adr + ' .year').html(thisyear);
	$(adr + ' .month').html(thismon);

	var ys = [];
	var a = startyear;
	for (var i = 0; i < (endyear - startyear + 1); i++) {
		ys.push(a++);
	}

	$(adr + ' .monsin>div').each(function() {
		if ($(this).html() == thismon) {
			$(this).addClass('active');
		}

	});

	var html = '';
	for (var i = 0; i < ys.length; i++) {
		if (ys[i] == thisyear) {
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
		'left' : posi
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
						if ($(this).html() == endyear) {
							$(adr + ' .lock').remove();
							$(adr + ' .monsin>div').css({
								'color' : '#3b9dff'
							});
							$(adr + ' .monsin>div')
									.slice(endmon)
									.css({
										'color' : '#ccc'
									})
									.each(
											function() {
												if ($(this).hasClass('active')) {
													$(adr + ' .monsin>div')
															.removeClass(
																	'active');
													$(
															adr
																	+ ' .monsin>div:eq('
																	+ (endmon - 1)
																	+ ')')
															.addClass('active');
													var newMon = $(
															adr
																	+ ' .monsin>div:eq('
																	+ (endmon - 1)
																	+ ')')
															.html();
													$(adr + ' .month').html(
															newMon);
													truemon = newMon;
												}
												$(adr + ' .monsin')
														.append(
																'<div class="lock" style="position:absolute;left:'
																		+ $(
																				this)
																				.position().left
																		+ 'px;top:'
																		+ $(
																				this)
																				.position().top
																		+ 'px;"></div>');
											});
						} else if ($(this).html() == startyear) {
							$(adr + ' .lock').remove();
							$(adr + ' .monsin>div').css({
								'color' : '#3b9dff'
							});
							$(adr + ' .monsin>div')
									.slice(0, startmon)
									.css({
										'color' : '#ccc'
									})
									.each(
											function() {
												if ($(this).hasClass('active')) {
													$(adr + ' .monsin>div')
															.removeClass(
																	'active');
													$(
															adr
																	+ ' .monsin>div:eq('
																	+ startmon
																	+ ')')
															.addClass('active');
													var newMon = $(
															adr
																	+ ' .monsin>div:eq('
																	+ startmon
																	+ ')')
															.html();
													$(adr + ' .month').html(
															newMon);
													truemon = newMon;
												}
												$(adr + ' .monsin')
														.append(
																'<div class="lock" style="position:absolute;left:'
																		+ $(
																				this)
																				.position().left
																		+ 'px;top:'
																		+ $(
																				this)
																				.position().top
																		+ 'px;"></div>');
											});
						} else {
							$(adr + ' .monsin>div').css({
								'color' : '#3b9dff'

							});
							$(adr + ' .lock').remove();
						}

						$(adr + ' .monsin>div').hover(function() {
							$(this).css({
								'color' : '#00f0ff'
							})
						}, function() {
							$(this).css({
								'color' : '#3b9dff'
							})
						})
						outputtime(trueyear, truemon);
					})

	$(adr + ' .yearsleft').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) + 62;
		if (posm <= 0) {
			$(adr + ' .yearsin').css({
				'left' : posm
			});
		}
		ev.stopPropagation();
	});
	$(adr + ' .yearsright').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) - 62;
		if (posm >= (186 - len)) {
			$(adr + ' .yearsin').css({
				'left' : posm
			});
		}
		ev.stopPropagation();
	});

	$(adr + ' .monthPicker').on('click', function(ev) {
		ev.stopPropagation();
		$(adr + ' .mp_days').slideToggle();
	})
	$(document).on('click', function() {
		if ($('.mp_days').css('display') == 'block') {
			$('.mp_days').slideUp();
		}
	})

	// 判断不能选的月

	$(adr + ' .monthPicker').on(
			'click',
			function() {

				if ($(adr + ' .yearsin>.active').html() == endyear) {

					$(adr + ' .monsin>div').slice(endmon).css({
						'color' : '#ccc'
					}).each(
							function() {
								$(adr + ' .monsin').append(
										'<div class="lock" style="position:absolute;left:'
												+ $(this).position().left
												+ 'px;top:'
												+ $(this).position().top
												+ 'px;"></div>');
							});
				} else if ($(adr + ' .yearsin>.active').html() == startyear) {
					$(adr + ' .monsin>div').slice(0, startmon).css({
						'color' : '#ccc'
					}).each(
							function() {
								$(adr + ' .monsin').append(
										'<div class="lock" style="position:absolute;left:'
												+ $(this).position().left
												+ 'px;top:'
												+ $(this).position().top
												+ 'px;"></div>');
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
	for (var i = 0; i < num; i++) {
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
	'jb' : [ 100, 150, 100 ],
	'ts' : [ 124, 145, 100 ],
	'zx' : [ 156, 167, 100 ],
	'qz' : [ 444, 555, 100 ],
	'jy' : [ 333, 444, 100 ],
	'qt' : [ 555, 333, 100 ]
}

creatChart1(dd);

function creatChart1(data) {
	echarts
			.init(document.getElementById('echart1'))
			.setOption(
					{
						grid : {
							right : '8%',
							left : '8%',
							bottom : '15%',
							top : '15%',
						},
						tooltip : {
							trigger : 'axis',
							axisPointer : {
								type : 'shadow',
								shadowStyle : {
									color : 'rgba(0,46, 115, 0.3)',
								}
							},
							backgroundColor : 'rgba(0,31,120,0.8)',
							borderColor : '#3b9dff',
							borderWidth : 1,
							padding : 14,
							formatter : '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />'
						},
						legend : {
							data : [ '举报', '投诉', '咨询', '求助', '建议', '其他' ],
							right : '60',
							top : '15',
							textStyle : {
								color : '#fff'
							},
							itemGap : 20,
							itemHeight : 6,
							itemWidth : 21
						},
						toolbox : {
							show : true,
							feature : {
								saveAsImage : {
									show : true
								}
							},
							top : '10',
							right : '17',
							iconStyle : {
								normal : {
									borderColor : '#0084ff',
								}
							}
						},
						calculable : true,
						xAxis : [ {
							type : 'value',
							axisLine : {
								lineStyle : {
									color : '#fff'
								}
							},
							axisTick : {
								show : false
							},
							splitLine : {
								show : true,
								lineStyle : {
									opacity : 0.3
								}
							}
						} ],
						yAxis : [ {
							type : 'category',
							data : [ '县区机关', '市直机关', '开发区单位' ],
							axisLine : {
								lineStyle : {
									color : '#fff'
								}
							},
							axisTick : {
								show : false
							}
						} ],
						series : [
								{
									name : '举报',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#063cde'
													}, {
														offset : 1,
														color : '#0652de'
													} ]),
											opacity : 0.6,
										},
										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.jb
								},
								{
									name : '投诉',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#006cde'
													}, {
														offset : 1,
														color : '#0096df'
													} ]),
											opacity : 0.6,
										},
										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.ts
								},
								{
									name : '咨询',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#029356'
													}, {
														offset : 1,
														color : '#3cc12b'
													} ]),
											opacity : 0.6,
										},
										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.zx
								},

								{
									name : '求助',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#bb9012'
													}, {
														offset : 1,
														color : '#c0af19'
													} ]),
											opacity : 0.6
										},

										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.qz
								},
								{
									name : '建议',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#cc6014'
													}, {
														offset : 1,
														color : '#cc8415'
													} ]),
											opacity : 0.6
										},

										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.jy
								},
								{
									name : '其他',
									type : 'bar',
									stack : '总量',
									barMaxWidth : 30,
									itemStyle : {
										normal : {
											label : {
												show : true,
												position : 'insideRight'
											},
											color : new echarts.graphic.LinearGradient(
													0, 0, 1, 0, [ {
														offset : 0,
														color : '#b41a26'
													}, {
														offset : 1,
														color : '#c63f25'
													} ]),
											opacity : 0.6,
											barBorderRadius : [ 0, 5, 5, 0 ]
										},

										emphasis : {
											opacity : 1
										}
									},
									zlevel : 9,
									data : data.qt
								} ]
					})
}

// echart2
function getEPieDataR01() {
	return {
		toolbox : { // 控制下载标识是否可见，默认可见
			isShow : false
		},
		legend : {
			// isShow: true,
			data : [ '求助', '举报', '投诉', '咨询', '建议', '其他' ]
		},
		series : [ {
			name : '民意类型分析 ',
			data : [ {
				value : 335,
				name : '求助'
			}, {
				value : 310,
				name : '举报'
			}, {
				value : 234,
				name : '投诉'
			}, {
				value : 1135,
				name : '咨询'
			}, {
				value : 835,
				name : '建议'
			}, {
				value : 1135,
				name : '其他'
			} ],
		}, ]
	}
}
var paramPie1 = {
	clickFn : testFn1,
	clickParam : 'name',
	isTooltipFixed : true
// 设置为true，提示内容为请点击，否则name+value样式的提示
}
function testFn1(value) {
	window.location.href = "publicOpinionType.html";
}
jusfPie.drawRingPieR01('echart2', getEPieDataR01(), paramPie1);

// echart3
function getEPieDataR03() {
	return {
		legend : {
			data : [ '物业管理', '市改建设', '农民及农村问题', '城管执法', '社会治安', '卫生医疗',
					'民工工资及拖欠工程数', '城管执法1', '社会治安1', '卫生医疗1', '民工工资及拖欠工程数1' ]
		},
		series : [ {
			name : '单个部门-下拉.满意度分析 ',
			data : [ {
				value : 335,
				name : '物业管理'
			}, {
				value : 310,
				name : '市改建设'
			}, {
				value : 234,
				name : '农民及农村问题'
			}, {
				value : 1135,
				name : '城管执法'
			}, {
				value : 235,
				name : '社会治安'
			}, {
				value : 465,
				name : '卫生医疗'
			}, {
				value : 375,
				name : '民工工资及拖欠工程数'
			}, {
				value : 1135,
				name : '城管执法1'
			}, {
				value : 235,
				name : '社会治安1'
			}, {
				value : 465,
				name : '卫生医疗1'
			}, {
				value : 375,
				name : '民工工资及拖欠工程数1'
			} ]
		}, ]
	}
}

var paramPie2 = {
	clickFn : testFn2,
	clickParam : 'name',
	isTooltipFixed : true
// 设置为true，提示内容为请点击，否则name+value样式的提示
}
function testFn2(value) {
	window.location.href = "complaintHots.html";
}
jusfPie.drawRingPieR03('echart3', getEPieDataR03(), paramPie2);

// echart4
function getEPieDataR04() {
	return {
		legend : {
			data : [ '电话受理', '留言受理', '邮件受理' ]
		},
		colors : [ '#FF3C00', '#FFBA00', '#0078FF' ], // 通过添加colors属性，更改饼图颜色
		series : [ {
			name : ' 网络部门热线 -- 本市热线来源分布  ',
			data : [ {
				value : 335,
				name : '电话受理'
			}, {
				value : 310,
				name : '留言受理'
			}, {
				value : 410,
				name : '邮件受理'
			} ]
		} ]
	}
}
var paramPie3 = {
	clickFn : testFn3,
	clickParam : 'name',
	isTooltipFixed : true
// 设置为true，提示内容为请点击，否则name+value样式的提示
}
function testFn3(value) {
	window.location.href = "sources-of-opinion.html";
}
jusfPie.drawRingPieR02('echart4', getEPieDataR04(), paramPie3);

// echart5
function getEBarDataOther() {
	return {
		// backgroundColor: '#021A4D',
		yAxis : {
			data : [ '市交通局', '市工商局', '市公安局', '市卫生局', '市教育局' ]
		},
		xAxis : {
			max : 5000
		},
		series : [ {
			data : [ 4324, 3308, 2209, 1900, 890 ],
		// unit: '件'
		} ]
	}
}
jusfBar.drawHrzBarOther('echart5_1', getEBarDataOther(), 3);

function getEBarDataOther2() {
	return {
		// backgroundColor: '#021A4D',
		yAxis : {
			data : [ '市交通局', '市工商局', '市公安局', '市卫生局', '市教育局' ]
		},
		xAxis : {
			max : 5000
		},
		series : [ {
			data : [ 324, 1308, 2209, 3900, 4890 ],
		// unit: '件'
		} ]
	}
}
jusfBar.drawHrzBarOther('echart5_2', getEBarDataOther2(), 2);

// echart6 7

var echart6data1 = {
	'id' : 'echart6',
	'dq' : [ '坊子区', '潍城区', '奎文区', '寒亭区', '诸城区', '寿光区', '青州市', '高密市', '昌邑市',
			'安丘市', '昌乐市' ],
	'dt' : [ 1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800 ]
}
var echart6data2 = {
	'id' : 'echart7',
	'dq' : [ '坊子区', '潍城区', '奎文区', '寒亭区', '诸城区', '寿光区', '青州市', '高密市', '昌邑市',
			'安丘市', '昌乐市' ],
	'dt' : [ 1000, 1200, 900, 800, 850, 1000, 1200, 1300, 700, 600, 800 ]
}

creatChart6(echart6data1);
creatChart6(echart6data2);

function creatChart6(data) {
	echarts
			.init(document.getElementById(data.id))
			.setOption(
					{
						grid : {
							right : '7%',
							left : '8%',
							bottom : '10%',
							top : '18%',
						},
						tooltip : {
							trigger : 'axis',
							axisPointer : {
								type : 'shadow',
								shadowStyle : {
									color : 'rgba(0,46, 115, 0.3)',
								}
							},
							backgroundColor : 'rgba(0,31,120,0.8)',
							borderColor : '#3b9dff',
							borderWidth : 1,
							padding : 14,
							formatter : '<span style="color:#dfb422">{b}</span><br />{a0}: {c0}%'
						},
						toolbox : {
							show : true,
							feature : {
								saveAsImage : {
									show : true
								}
							},
							top : '10',
							right : '17',
							iconStyle : {
								normal : {
									borderColor : '#0084ff',
								}
							}
						},
						legend : {
							data : [ '满意率' ],
							right : '60',
							top : '35',
							textStyle : {
								color : '#fff'
							},
							itemGap : 20,
							itemHeight : 6,
							itemWidth : 21
						},
						calculable : true,
						xAxis : [ {
							type : 'category',
							data : data.dq,
							axisLine : {
								lineStyle : {
									color : '#fff'
								}
							},
							axisTick : {
								show : false
							}
						} ],
						yAxis : [ {
							type : 'value',
							axisLine : {
								lineStyle : {
									color : '#fff'
								}
							},
							axisTick : {
								show : false
							},
							splitLine : {
								show : true,
								lineStyle : {
									opacity : 0.3
								}
							}
						} ],
						series : [ {
							name : '满意率',
							type : 'bar',
							barMaxWidth : 30,
							barGap : '60%',

							itemStyle : {
								normal : {
									color : new echarts.graphic.LinearGradient(
											0, 0, 0, 1, [ {
												offset : 0,
												color : '#00ddff'
											}, {
												offset : 1,
												color : '#007fff'
											} ]),
									opacity : 0.6,
									barBorderRadius : [ 5, 5, 0, 0 ]
								},
								emphasis : {
									opacity : 1
								}
							},
							data : data.dt,
							zlevel : 9,
						} ]

					})
}