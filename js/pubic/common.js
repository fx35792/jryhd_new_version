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

	//导航下拉菜单显示
	$(".nav-item").hover(function() {
		$(this).children('.dropbox').show();
	}, function() {
		$(this).children('.dropbox').hide();
	});

	//导航跟着屏幕滚动效果
	$(window).scroll(function() {
		var scroll_target = $(this).scrollTop();
		if (scroll_target>=495) {
        	$("#navigation").addClass("navigation");
		}else{
			$("#navigation").removeClass("navigation");
		}
	});

	//返回顶部
	$("#returnback").hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $("#returnback").fadeIn(800);
        }else{
            $("#returnback").fadeOut(800);
        }
    });
    $(".back_show_back").click(function() {
        $(document.body).animate({scrollTop: 100}, 800);
        return false;
    }); 
    $("#returnback").hover(function() {
    	$(".back_hide").show();
    	$(".back_hide").addClass('animated bounceInRight');
	    setTimeout(function(){
	       $(".back_hide").removeClass('bounceInRight');
	    }, 1000);
    }, function() {
    	$(".back_hide").hide();
    });

    //注册、登录页面输入框获得焦点，输入框框和投影的颜色变化
    $(".input_focus").focus(function(){
    	$(this).css({
    		"border":"1px solid #f08f4b",
    		"box-shadow":"0px 0px 1px #f08f4b"
    	});
    });
    //注册、登录页面输入框失去焦点，输入框框和投影的颜色变化
    $(".input_focus").blur(function(){
    	$(this).css({
    		"border":"1px solid #dcdcdc",
    		"box-shadow":"0px 0px 1px #fff"
    	});		
    });


});