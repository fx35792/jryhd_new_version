$(function(){
    //进度条
    $(".pro_bg").animate({
		width:"70%"
	},1000);
});
/*奖品列表无缝滚动*/
function scroll_news(){
	    $(function(){
	            $('.winner-main a').eq(0).delay(1000).animate(
	            	{height:'0px'},function(){
	                $(this).clone().appendTo($(this).parent()).show(0).css('height','62px').css("border-bottom","1px dashed #ddd");
	                $(this).remove();
	            });
	    });
}
 setInterval('scroll_news()',1000);
//每隔1000毫秒触发一次scroll_news函数
