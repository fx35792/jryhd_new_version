$(function(){
	//注册页面输入框颜色变化
	$(".input_focus").focus(function(){
		$(this).css({
			"border":"1px solid #f08f4b",
			"box-shadow":"0px 0px 1px #f08f4b"
		});
	});
	$(".input_focus").blur(function(){
		$(this).css({
			"border":"1px solid #dcdcdc",
			"box-shadow":"0px 0px 1px #fff"
		});		
	});
	$('.username').focus(function(){
		$('.reg_tt_bg').stop().slideDown(500);
	});
	$('.username').blur(function(){
		$('.reg_tt_bg').stop().slideUp(500);
	});


});