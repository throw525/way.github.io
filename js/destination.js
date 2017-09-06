
var consult=document.getElementById('consult');
var oWbox=document.getElementById('wbox');
var wBox1=document.getElementById('wbox1');
var body=document.body
var wLi2=document.getElementById('w-li2')

wLi2.onclick=function(){
	oWbox.style.opacity='1';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='999';
	body.style.overflow='hidden'
}
wBox1.onclick=function(){
	oWbox.style.opacity='0';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='-30'
	body.style.overflow=''
}

consult.onclick=function(){
	oWbox.style.opacity='1';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='999';
	body.style.overflow='hidden'
}
wBox1.onclick=function(){
	oWbox.style.opacity='0';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='-10'
	body.style.overflow=''
}



var wXdt=document.querySelector('#w-xdt');
onscroll=function(){
	var scrollTop=document.body.scrollTop;
	if(scrollTop > 100){
		wXdt.style.position='fixed'
		wXdt.style.top='73px';
	}else if(scrollTop < 100){
		wXdt.style.position=''
		wXdt.style.top=''
	}
}

$('#wToplist li').hover(function(){
	       $('#wTop').css('display','block')
           $('#wToplist li').eq($(this).index()).addClass('w-first').siblings().removeClass('w-first');
           $('#wTop div').eq($(this).index()).show().siblings().hide();         
})
$('#wNavWrap').mouseleave(function(){
	$('#wTop').css('display','none')
})




$('#wToplist li').click(function(){  
           $('#wB div').eq($(this).index()).show().siblings().hide(); 
})


$('.w-nav-ul1 li span').click(function(){
	$(this).css('background','#65c8c4').siblings().css('background','');
	$(this).parent().siblings().children().css('background','')
})

$('.w-nav-p1 em').click(function(){
	$(this).css('background','#65c8c4').siblings().css('background','');
})




//$('.w-content-box .w-content-left li').hover(function(){
//	$('.w-content-box .w-content-left li').eq($(this).index()).children('.w-cont-dw').slideDown().parent().siblings().children('.w-cont-dw').css({'display':'none'})
////	$('.w-content-box .w-content-left li').siblings().
//	
//})
//
//$('.w-content-box .w-content-left').children('li').mouseover(function(){
//	$('.w-content-box .w-content-left').children('li').children('.w-cont-dw').eq($(this).index()).slideDown()
//})

$(".w-content-left li").hover(function(){
    $(this).children().eq(2).stop(true).slideDown();
},function(){
	$(this).children().eq(2).css('display','none');
});


$(".w-c-r-list li").hover(function(){
	$(this).css('background','#FFFFFF')
    $(this).children().eq(2).stop(true).css('display','block');
},function(){
	$(this).css('background','')
	$(this).children().eq(2).css('display','none');
	
});