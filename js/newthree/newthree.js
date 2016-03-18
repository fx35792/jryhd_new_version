$(function(){
	//开借简介文字介绍文字进入的效果
	$(".kj_header").find("p").addClass("animated zoomIn");
	    
	//开借上手五步走
	$(window).scroll(function() {
		var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
		if (scrollY >= 350){ 
			$(".newthree_condition h2").addClass("animated bounceInDown");
			$(".newthree_condition img").addClass("animated fadeInUpBig");
		};
		//新三板交易规则
		if (scrollY >= 1750){ 
			$(".yw_ico").find("h3").addClass("animated bounceInDown");		
			$(".yw_ico").find("p").addClass("animated fadeInLeft");	
		};
	});

});