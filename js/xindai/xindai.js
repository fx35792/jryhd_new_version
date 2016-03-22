$(function(){
	//房产受理条件添加鼠标划入效果
	$(".h_bg").hover(function() {
		$(this).find("h2").addClass("animated fadeInDown");
		$(this).find("p").addClass("animated fadeInUp");		
	}, function() {
		$(this).find("h2").removeClass("animated fadeInDown");
		$(this).find("p").removeClass("animated fadeInUp");		
	});   
	//业务流程添加鼠标划入效果
	$(".yw_ico").hover(function() {
		$(this).find("h3").addClass("animated bounceInDown");
		$(this).find("h2").addClass("animated fadeInLeft");
		$(this).find("p").addClass("animated fadeInRight");		
	}, function() {
		$(this).find("h3").removeClass("animated bounceInDown");
		$(this).find("h2").removeClass("animated fadeInLeft");
		$(this).find("p").removeClass("animated fadeInRight");		
	});   
});