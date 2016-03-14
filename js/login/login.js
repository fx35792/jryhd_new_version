/*
*Author:fanxin
*Describtion:登录页面相关的js
*
*/
$(function(){
	$(".third_part a.wechat").hover(function() {
		$(".dl-weixin-message").show();
	}, function() {
		$(".dl-weixin-message").hide();
	});
});