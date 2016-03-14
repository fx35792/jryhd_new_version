/*
*Author:fanxin
*Describtion:首页页面相关的js
*
*/
$(function(){
	//商场购物 倒计时
	$(".fnTimeCountDown").fnTimeCountDown();

	//股东介绍图片切换
	var lilength = $(".shareholder_content ul li").length+1;//定义变量lilength并获得li的长度
	$(".ul_width").css("width",lilength*144);//动态生成ul的宽度=每个li的宽度*li的长度
	var leftpos = 0;
	var leftcount = 0;
	//左侧点击切换
	$("#mover_left").click(function() {			
		if (leftcount >=1)
		{
			leftpos = leftpos + 144;
			leftcount = leftcount - 1;
			$(".ul_width").animate({ left: leftpos }, "slow");				
		}
	});
	//右侧点击切换
	$("#mover_right").click(function() {
		if (leftcount <= 0) {
			leftpos = leftpos - 144;
			leftcount = leftcount + 1;
			$(".ul_width").animate({ left: leftpos }, "slow");
		}				
	});

	
});