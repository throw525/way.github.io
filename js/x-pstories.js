$(function(){
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