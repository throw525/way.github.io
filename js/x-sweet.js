/* banner */
$(".x-bannerul li").click(function(){
	var $index=$(this).index();
	$(".x-bannerdiv").width($(".x-bannerdiv div").eq(0).width()*$(".x-bannerdiv div").length);
	$(".x-bannerdiv").stop().animate({"margin-left":-1168*$index},500);
	$(".x-bannerul li").css({"color":"#333333"})
	$(this).css({"color":"#669797"});
})
$(".x-bannerdiv>div>ol li").click(function(){
	var $index=$(this).index();
	$(".x-bannerdiv>div>div").width($(".x-bannerdiv img").eq(0).width()*$(".x-bannerdiv img").length);
	$(".x-bannerdiv>div>div").stop().animate({"margin-left":-1168*$index},500);
	$(".x-bannerdiv>div>ol li").css({"background":"none"});
	$(this).css({"background":"#fff"});
})
/* main */
$(".x-contentbox>div").hover(function(){
	$(this).children("img").eq(1).stop().fadeIn();
},function(){
	$(this).children("img").eq(1).stop().fadeOut();
})
