$(function(){
	$(".Condition-cont ul li").hover(function() {
	    $(this).addClass('animated rotateInDownLeft');
	    setTimeout(function(){
        	$(".Condition-cont ul li").removeClass('animated rotateInDownLeft');
    	}, 5000);
	});
	//联系我们
  $(".username").focus(function(){
    if($(this).val() == '您的姓名'){
      $(this).val(" ");
    }
  });
  $(".username").blur(function(){
    if($(this).val() == ' '){
      $(this).val("您的姓名");
    }
  });
  $(".contactway").focus(function(){
    if($(this).val() == '您的联系方式'){
      $(this).val(" ") ;
    }
  });
  $(".contactway").blur(function(){
    if($(this).val() == ' '){
      $(this).val("您的联系方式") ;
    }
  });
});
