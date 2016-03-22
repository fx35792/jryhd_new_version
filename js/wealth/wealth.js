$(function(){
	$(".join").click(function(){
		$(".mask").show();
		$(".content").show();
		$(".img1").addClass('animated bounceInDown').show(500);
		 // $('body').css("overflow","hidden");
	});
	$(".img2").click(function(){
		$(".content").hide();
		$(".mask").hide();
		// $('body').css("overflow-y","scroll");
	});
})