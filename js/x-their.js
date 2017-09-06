/* main */
$(function(){
	$(".x-contentbox>div").hover(function(){
		$(this).children("img").eq(1).stop().fadeIn();
	},function(){
		$(this).children("img").eq(1).stop().fadeOut();
	});
	var a=true;
	$(".x-pnavs img:nth-child(3)").click(function(){
		if(a){
			$(".x-hidden").stop().slideDown();
			a=false;
		}else{
			$(".x-hidden").stop().slideUp();
			a=true;
		}
	})
})
