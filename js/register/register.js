/*
*Author:fanxin
*Describtion:注册页面相关的js
*
*/
$(function(){
	//用户名框获得焦点，向下显示天天理财登录的提示登录内容
	$('.username').focus(function(){
		$('.reg_tt_bg').stop().slideDown(500);
	});
	//用户名框失去焦点，隐藏天天理财登录的提示登录内容
	$('.username').blur(function(){
		$('.reg_tt_bg').stop().slideUp(500);
	});

	


});