$(".callmsg").niceScroll({
	cursorcolor: "#227afe",
	cursoropacitymax: 1,
	touchbehavior: false,
	cursorwidth: "10px",
	cursorborder: "0",
	cursorborderradius: "5px"
})

$('.sctab>div').on('click', function() {
	$(this).addClass('active').siblings().removeClass('active');
	if($(this).hasClass('jzxx')) {
		$('.jzxxdiv').addClass('active').siblings().removeClass('active');
	} else if($(this).hasClass('jdxx')) {
		$('.jdxxdiv').addClass('active').siblings().removeClass('active');
	} else if($(this).hasClass('qsxx')) {
		$('.qsxxdiv').addClass('active').siblings().removeClass('active');
	}
});

var rotatedeg = 180;
$('.scbtm').on('click', function() {
	rotatedeg += 180;
	$('.sctop').slideToggle();
	$('.toggle').css({
		'-webkit-transform': 'rotate(' + rotatedeg + 'deg)',
		'-moz-transform': 'rotate(' + rotatedeg + 'deg)',
		'-ms-transform': 'rotate(' + rotatedeg + 'deg)',
		'-o-transform': 'rotate(' + rotatedeg + 'deg)',
		'transform': 'rotate(' + rotatedeg + 'deg)'
	});
})

//表格数据最多三条,注意顺序
var jzdata = {
	name: '王贵',
	age: 89,
	sex: '男',
	ill: '糖尿病,心肌梗',
	call: {
		time: [
			['2016-12-1', '08:20'],
			['2016-10-29', '18:12'],
			['2016-8-12', '21:09']
		],
		msg: [
			'忘记带钥匙,求助开锁',
			'来电人反映：我将车停在天熙苑小区门口商铺前的停车位上，因逆向停车被贴了罚单，不合理。',
			'求医问药'
		]
	}
}

jzmsg(jzdata);

function jzmsg(data) {
	$('#name').html(data.name);
	$('#age').html((data.age + '岁'));
	$('#sex').html(data.sex);
	$('#ill').html(data.ill);

	var msg = data.call;
	for(var i = 0; i < msg.time.length; i++) {
		$('.msgtable').append('<tr><td><p>' + msg.time[i][0] + '</p><p class="ldtime">' + msg.time[i][1] + '</p></td><td>' + msg.msg[i] + '</td></tr>');
	}
}