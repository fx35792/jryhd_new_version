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

});