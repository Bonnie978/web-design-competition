$(".nav-1").click(function(){
	$(".bag1").css("top","0%");
	$(".bag2").css("top","0%");
	$("body").css("background-color","#EEDFCC");
	$(".poemlb-1,.poemlb-2,.poemlb-3,.poemlb-4,.poemlb-5,.poemlb-6,.poemlb-7,.poemlb-8,.poemlb-9,.poemlb-10,.poemlb-11,.poemlb-12").hide();
	$(".return").css("background-color","#FDF5E6");
});
$(".nav-2").click(function(){
	$(".bag1").css("top","-100%");
	$(".bag2").css("top","-100%");
	$("body").css("background-color","#EDEDED");
	$(".return").css("background-color","#FAFAFA");
});
$(document).ready(function(){
	$(".poemlb-1,.poemlb-2,.poemlb-3,.poemlb-4,.poemlb-5,.poemlb-6,.poemlb-7,.poemlb-8,.poemlb-9,.poemlb-10,.poemlb-11,.poemlb-12").hide();
  	$(".poemlb-title,.poemlb-name").click(function(){
   		$(".poemlb-1,.poemlb-2,.poemlb-3,.poemlb-4,.poemlb-5,.poemlb-6,.poemlb-7,.poemlb-8,.poemlb-9,.poemlb-10,.poemlb-11,.poemlb-12").fadeIn("slow");
  	});
});