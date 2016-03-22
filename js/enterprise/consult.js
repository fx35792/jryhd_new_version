$(window).scroll(function() {
    var scH = $(document).scrollTop();
    if (scH > 100) {
        $("#back-top").fadeIn();
    } else {
        $("#back-top").fadeOut();
    }
    return false;
});
$(function(){
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(window).scroll(function() {
    var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
    //产品众筹
    if(scrollY >= 1000){
        $('.left-obj .obj').addClass('animated slideInLeft');
    }
    //融资服务
    if (scrollY >= 2000){ 
        $('.step1 p').addClass('animated fadeInLeftBig');
        $('.step2 p').addClass('animated fadeInDown');
        $('.step3 p').addClass('animated fadeInRightBig');
    };
});
