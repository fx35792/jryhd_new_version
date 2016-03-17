$(function(){
	//开借简介文字介绍文字进入的效果
	$(".kj_header").find("p").addClass("animated zoomIn");
	    
	//开借上手五步走
	$(window).scroll(function() {
		var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
		if (scrollY >= 350){ 
			$(".kj_p2_ico1").animate({left:'180px'},800);
		};
		if (scrollY >= 450){ 
			$('.kj_p2_ico2').animate({left:'345px'},800);
		};
		if (scrollY >= 500){
			$('.kj_p2_ico3').animate({left:'-490px'},800);
		};
		if (scrollY >= 550){ 
			$('.kj_p2_ico4').animate({left:'680px'},800);
		};
		if (scrollY >= 600){ 
			$('.kj_p2_ico5').animate({left:'-153px'},800);
		};
		if (scrollY >= 650){ 
			$('.kj_header2').animate({top:'40px'},800);
		};
		if (scrollY >= 950){ 
			$(".kj_p4_ico1").addClass("animated fadeInLeft");
			$(".kj_p4_ico2").addClass("animated fadeInLeft");
			$(".kj_p4_ico3").addClass("animated fadeInRight");
			$(".kj_p4_ico4").addClass("animated fadeInRight");	
		};

	});

	//家装分期1	
	$(".kj_p4_center").hover(function() {
		$(this).siblings(".kj_p4_ico1").addClass("animated fadeInLeft");
		$(this).siblings(".kj_p4_ico2").addClass("animated fadeInLeft");
		$(this).siblings(".kj_p4_ico3").addClass("animated fadeInRight");
		$(this).siblings(".kj_p4_ico4").addClass("animated fadeInRight");	
	}, function() {
		$(this).siblings(".kj_p4_ico1").removeClass("animated fadeInLeft");
		$(this).siblings(".kj_p4_ico2").removeClass("animated fadeInLeft");
		$(this).siblings(".kj_p4_ico3").removeClass("animated fadeInRight");
		$(this).siblings(".kj_p4_ico4").removeClass("animated fadeInRight");	
	}); 


});