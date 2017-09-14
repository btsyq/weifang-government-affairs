$(function(){
	var dpos = $('.dpos');
	$('.dpo').on('click',function(e){
		e.stopPropagation();
		dpos.toggle();
	});
	$(document).click(function(){
		if(dpos.css('display')=="block"){
			dpos.hide();
		}
	});
	
	$('.userArea>a').on('click',function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$('.btnswrap>div').on('click',function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});