$(function(){
	var ul = $("#list");
	var lis = ul.children('li');
	var sel = $(".aa");
	lis.click(function(){
		var neirong = $(this).children('a').html();
		sel.html(neirong);
	})
	$(".ui-select").hover(function(){
		$("#list").show().stop(300);
	},function(){
		$("#list").hide().stop(300);
	});
	

});

