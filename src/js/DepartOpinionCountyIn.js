$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 143
	}, 500);
});

$('.b_all').on('click', function() {
	window.location.href = "DepartOpinionCounty.html";
})

var url = window.location.href;
var x = url.indexOf('getDepartOpinionCountyIn');

var echarts = require('echarts');

//echart1

var c1_data = {
	'time': ['2016年1月', '2016年2月', '2016年3月', '2016年4月', '2016年5月', '2016年6月', '2016年7月', '2016年8月', '2016年9月', '2016年10月', '2016年11月', '2016年12月'],
	'zl': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800],
	'jb': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800],
	'ts': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800],
	'zx': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800],
	'qz': [4700, 3100, 3400, 5500, 4800, 4700, 5000, 5200, 5000, 5500, 5100, 4800]
};

creatChart1(c1_data);

function creatChart1(data) {

	echarts.init(document.getElementById('chart1')).setOption({
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
			formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}'
		},
		legend: {
			data: ['民意总量', '举报', '投诉', '咨询', '求助'],
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
			start: 30,
			end: 70,
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
				name: '民意总量',
				type: 'bar',
				barMaxWidth: 16,
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
				data: data.zl,
				zlevel: 9

			}, {
				name: '举报',
				type: 'bar',
				barMaxWidth: 16,
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
				data: data.jb,
				zlevel: 9

			}, {
				name: '投诉',
				type: 'bar',
				barMaxWidth: 16,
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
				data: data.ts,
				zlevel: 9

			}, {
				name: '咨询',
				type: 'bar',
				barMaxWidth: 16,
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
				data: data.zx,
				zlevel: 9

			}, {
				name: '求助',
				type: 'bar',
				barMaxWidth: 16,
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
				data: data.qz,
				zlevel: 9

			}

		]
	})

}

//仪表盘
yb1(50);
function yb1(val) {
	$('#d2c1').html('');
	jusfDashBoard.createBDashBoard("d2c1", 600, 400, {
		decimal: 1,
		max: 100,
		name: "办结率",
		count: '一次',
		value: val,
		config: { //必须设置
			dashBoardBgUrl: '../images/ybp1.png',
			dashBoardPointUrl: '../images/point.png'
		}
	});

}
jusfDashBoard.createBDashBoard("d2c2", 600, 400, {
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

jusfDashBoard.createBDashBoard("d2c3", 600, 400, {
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

//民意类型环形图
//jusfPie.drawDoubleRingPie('chart3', getDoubleRingData(), 1);
//jusfPie.drawDoubleRingPie('chart3', getDoubleRingData(), 1, getDoubleRingDataClick());

function randomNum() {
	return Math.round(Math.random() * 200)
}

var pie2 = {
		'sr1': [{
			value: 125,
			name: '求助'
		}, {
			value: 75,
			name: '咨询'
		}, {
			value: 95,
			name: '举报'
		}, {
			value: 75,
			name: '投诉'
		}],
		'sr2': [{
			value: 125,
			name: '物业管理'
		}, {
			value: 75,
			name: '市改建设'
		}, {
			value: 95,
			name: '农民及农村问题'
		}, {
			value: 75,
			name: '城管执法'
		}, {
			value: 75,
			name: '社会治安'
		}, {
			value: 75,
			name: '卫生医疗'
		}, {
			value: 75,
			name: '民工工资及拖欠工程数'
		}],
		'click': [{
			name: '物业管理',
			data: [{
				value: 125,
				name: '求助'
			}, {
				value: 75,
				name: '咨询'
			}, {
				value: 95,
				name: '举报'
			}, {
				value: 75,
				name: '投诉'
			}]
		}, {
			name: '市改建设',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}, {
			name: '农民及农村问题',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}, {
			name: '城管执法',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}, {
			name: '社会治安',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}, {
			name: '卫生医疗',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}, {
			name: '民工工资及拖欠工程数',
			data: [{
				value: randomNum(),
				name: '求助'
			}, {
				value: randomNum(),
				name: '咨询'
			}, {
				value: randomNum(),
				name: '举报'
			}, {
				value: randomNum(),
				name: '投诉'
			}]
		}]
	}
	//jusfPie.drawDoubleRingPie('chart4', getDoubleRingData(), 0);
jusfPie.drawDoubleRingPie('chart4', getDoubleRingData(pie2), 0, getDoubleRingDataClick(pie2));

jusfPie.drawRingPieOther('chart5_1', {
	legend: {
		isShow: true,
		data: ['邮件受理', '电话受理', '留言受理']
	},
	series: [{
		name: '民意类型分析 ',
		data: [{
			value: 335,
			name: '邮件受理'
		}, {
			value: 310,
			name: '电话受理'
		}, {
			value: 234,
			name: '留言受理'
		}],
	}]
});

var c52_data = [2700, 1200, 300, 900, 300];

creatChart5_2(c52_data);

function creatChart5_2(data) {

	var arr = [];

	var sum = 0;
	for(var i = data.length - 1; i > -1; i--) {
		arr[i] = sum;
		sum += data[i];
	}
	arr[0] = 0;

	echarts.init(document.getElementById('chart5_2')).setOption({
		grid: {
			right: '7%',
			left: '18%',
			bottom: '20%',
			top: '20%',
		},
		tooltip: {
			trigger: 'axis',

			formatter: function(params) {
				var tar = params[1];
				return tar.value;
			},
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
		xAxis: {
			type: 'category',
			splitLine: {
				show: false
			},
			data: ['留言受理', '举报', '投诉', '咨询', '求助'],
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
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
		},
		series: [{
			name: '辅助',
			type: 'bar',
			stack: '总量',
			barMaxWidth: 26,
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: arr
		}, {
			name: '生活费',
			type: 'bar',
			stack: '总量',
			barMaxWidth: 26,
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
					barBorderRadius: [5, 5, 5, 5]
				},
				emphasis: {
					opacity: 1
				}
			},
			zlevel: 9,
			data: data
		}]
	})
}

jusfPie.drawRingPieOther('chart6_1', {
	legend: {
		isShow: true,
		data: ['不满意', '满意']
	},
	series: [{
		name: '受理民意来源分布 ',
		data: [{
			value: 335,
			name: '不满意'
		}, {
			value: 310,
			name: '满意'
		}],
	}]
});

var c62_data = {
	'jb': [320, 302, 320, 302, 320],
	'ts': [320, 302, 320, 302, 320],
	'zx': [320, 302, 320, 302, 320],
	'qz': [320, 302, 320, 302, 320]
};

creatChart6_2(c62_data);

function creatChart6_2(data) {

	echarts.init(document.getElementById('chart6_2')).setOption({
		grid: {
			right: '7%',
			left: '18%',
			bottom: '15%',
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
			data: ['卫生医疗', '社会治安', '城管执法', '市政建设', '物业管理'],
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

function timeChange(time,sec){
//	alert(time);
//	alert(sec);
}



addtime('.d21', '2015-5');
addtime('.d22', '2016-8');
addtime('.d23', '2014-3');
addtime('#doc3', '2015-5');
addtime('#doc4', '2015-5');
addtime('#doc5', '2016-8');
addtime('#doc6', '2014-3');

function addtime(adr, tim) {
	
	var sel = [];
	var timarr = tim.split('-');
	var year = timarr[0];
	var mon = timarr[1];
	for(var i = 11;i>=0;i--){
		sel[i] = year + '年' + mon +'月';

		mon--;
		if(mon==0){
			year--;
			mon=12;
		}
	}
	
	function output() {
		if(thiss.html()) {
			var x = thiss.html().split('月')[0].split('年');
			var time = x.join('-');
			var b = adr;
			var sec = '';
			switch (b){
				case '.d21':
					sec = 'yc';
					break;
				case '.d22':
					sec = 'dc';
					break;
				case '.d23':
					sec = 'cs';
					break;
				default:
					break;
			}
			
			var b = adr;
			timeChange(time,sec);
		}
	}
	var html = '';
	var thiss;
	for(var i = 0; i < sel.length; i++) {
		if(i == sel.length - 2) {
			html += "<div class='active'>" + sel[i] + "</div>";
		} else {
			html += "<div>" + sel[i] + "</div>";
		}
	}
	$(adr + ' .dates').html(html);

	var len = $(adr + ' .dates div').length * 80;
	$(adr + ' .dates').width(len);

	$(adr + ' .dates>div').on('click', function() {
		thiss = $(this);
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 80 - Math.round($(this).position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
	$(adr + ' .leftb').on('click', function() {
		thiss = $(adr + ' .dates>.active').prev();
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 80 - Math.round($(adr + ' .dates>.active').position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
	$(adr + ' .rightb').on('click', function() {
		thiss = $(adr + ' .dates>.active').next();
		thiss.addClass('active').siblings().removeClass('active');
		output()
		var pos = 80 - Math.round($(adr + ' .dates>.active').position().left);
		$(adr + ' .dates').animate({
			'left': pos
		});
	})
}


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

selects('.myslqst', 1998, 10);
