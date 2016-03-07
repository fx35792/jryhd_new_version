$(function(){
	//qq群的显隐性控制
	$("#qq_qun").hover(function() {
		$(".qun_content").show();
	}, function() {
		$(".qun_content").hide();
	});

	$("#wechat_ewm").hover(function() {
		$(".h_erweima").show();
	}, function() {
		$(".h_erweima").hide();
	});

	//导航下拉菜单显示
	$(".nav-item").hover(function() {
		$(this).children('.dropbox').show();
	}, function() {
		$(this).children('.dropbox').hide();
	});

	//导航跟着屏幕滚动效果
	$(window).scroll(function() {
		var scroll_target = $(this).scrollTop();
		if (scroll_target>=495) {
        	$("#navigation").addClass("navigation");
		}else{
			$("#navigation").removeClass("navigation");
		}
	});


});