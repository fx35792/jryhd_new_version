$(function(){
    $(".line1 li").click(function(){
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".line2 li").click(function(){
        var index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
    });
});
$(function(){
//进度条
		 $(".pro_bg").animate({
	width:"30%"
},1000);
});
 		 // 奖品无缝滚动
function scroll_news(){
	    $(function(){
	            $('.winner-main a').eq(0).delay(1000).animate(
	            	{height:'0px'},function(){
	                $(this).clone().appendTo($(this).parent()).show(0).css('height','60px').css("border-bottom","1px dashed #ddd");
	                $(this).remove();
	            });
	    });
}
setInterval('scroll_news()',1000);
//每隔1000毫秒触发一次scroll_news函数
// 分页
$(function(){
   $(".page a").click(function(){
       var index = $(this).index();
       $(this).addClass('current').siblings().removeClass('current');
       // $(this).addClass('active').siblings().removeClass('active');

   });
});
