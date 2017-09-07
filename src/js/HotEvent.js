$('#leftBar li').on('click', function() {
	var liname = $(this).attr('data-a');
	var move = $("#" + liname);
	$('body,html').animate({
		scrollTop: move.position().top - 332
	}, 500);
});

//声量走势分析echart2

jusfLine.drawLine('echart2', getELineData());

//echart4关键字分析

jusfGraph.drawForce('echart4', getEGraphData());

//echart3_2
var c32data = [{
		name: '安丘县',
		value: 80
	}, {
		name: '潍城区哈哈哈哈哈哈哈哈',
		value: 67
	}, {
		name: '奎文区',
		value: 56
	}
	, {
		name: '青州市',
		value: 46
	}
	, {
		name: '寿光市',
		value: 30
	}
];

var chart3_2 = $('#chart3_2');
var htmls = '';
for(var i = 1; i <= c32data.length; i++) {
	htmls += '<div class="no_' + i + '"><div class="c3nos">' + i + '</div><div class="c3names"></div><div class="c3bars"><div></div></div><div class="c3data"></div></div>';
}
$('#chart3_2').html(htmls);

for(var i = 0; i < c32data.length; i++) {
	$('.c3names').eq(i).html(c32data[i].name);
	$('.c3data').eq(i).html(c32data[i].value + '%');
	$('.c3bars>div').eq(i).css({
		'width': c32data[i].value + '%'
	});
};

//echart3_1地图

chart = jusfMap.drawCommonMap('chart3_1', getEMapData());
//          }

function clickevent(index) {
	jusfMap.addPointDatas(chart, geteMapDataTimelineOther(index));
}

function clickeventOther(index) {
	jusfMap.addPointDatas(chart, geteMapDataTimeline(index));
}

//事件演化                      数据要不能超过3个,顺序有先后
var yhdata = {
	start: '12-10',
	day: ['9-10', '10-4', '12-31'],
	type: ['举报', '求助', '投诉'],
	content: [
		'天气太冷了,怎么还不供暖',
		'天气太冷了,怎么还不供暖天气太冷了,怎么还不供暖',
		'天气太冷了,怎么还不供暖'
	],
	count: [2333, 2555, 2777]
}

sjyh(yhdata);

function sjyh(data) {
	var starttime = data.start.split('-');
	$('.c5lDate').html(starttime[0] + '月' + starttime[1] + '日');

	var html = '';
	for(var i = 0; i < data.day.length; i++) {
		var day = data.day[i].split('-');
		var dayshow = day[0] + '月' + day[1] + '日';
		var type = '';
		if(data.type[i] == '咨询') {
			type = 'zix';
		} else if(data.type[i] == '求助') {
			type = 'qiuz';
		} else if(data.type[i] == '投诉') {
			type = 'tous';
		} else if(data.type[i] == '举报') {
			type = 'jub';
		}
		$('.c5lBg').append('<div class="circle'+(i+1)+'"></div>')
		html += '<div><div class="msgdate">' + dayshow + '</div><div class="msgs"><span class="' + type + '">【' + data.type[i] + '】</span><span class="msgc">' + data.content[i] + '</span><span class="xgmy">相关民意:' + data.count[i] + '条</span></div></div>';
	}
	$('.c5right').html(html);

}