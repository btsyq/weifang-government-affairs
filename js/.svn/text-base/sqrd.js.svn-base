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