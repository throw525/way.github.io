/**
 * Created by Administrator on 2017/8/18.
 */
$(".mhs").click(function () {
    $(".nav-collapse").toggle()
})
//�ص�����


$('.widget-item').click(function(){
    var move=$("body,html").offset().top;
    $("body,html").animate({
        scrollTop: move
    },600)
})

$('#ls1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "1144px"
    },600)
	 $(this).css('background',"#cccccc").siblings().css('background',"");
})

$('#xcfa1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "1564px"
    },600)
	$(this).css('background',"#cccccc").siblings().css('background',"");
})


$('#jgnr1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "3674px"
    },600)
	$(this).css('background',"#cccccc").siblings().css('background',"");
})

$('#cjwt1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "5074px"
    },600)
	$(this).css('background',"#cccccc").siblings().css('background',"");
})

$('#khpj1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "7374px"
    },600)
	$(this).css('background',"#cccccc").siblings().css('background',"");
})


$('#ddxz1').click(function(){
//	alert(111)
	$("body,html").animate({
        scrollTop: "8674px"
    },600)
	$(this).css('background',"#cccccc").siblings().css('background',"");
})



window.onscroll=function(){
	var oDiv = document.getElementsByClassName('backtotop')[0];
    var S = document.documentElement.scrollTop || document.body.scrollTop
    var wXxdt=document.getElementById('w-as-xdt');
    var odiv=document.getElementById('wwdiv')
	var scrollTop=document.body.scrollTop;
	if(scrollTop > 1100){
		odiv.style.display='block'
		wXxdt.style.position='fixed'
		wXxdt.style.top='0';
		wXxdt.style.marginLeft='-20px';
		wXxdt.style.marginTop='0px';
		wXxdt.style.zIndex='1000'
	}else if(scrollTop < 1100){
		wXxdt.style.position=''
		wXxdt.style.top=''
		odiv.style.display='none'
	}
    if (window.navigator.userAgent.indexOf('MSIE') != -1) {
        with (oDiv.style) {
            position = 'absolute'
        }
    }
    if (S > 200) {
        oDiv.style.display = 'block'
    }
    if (S < 200) {
        oDiv.style.display = 'none'
    }
    
}
  
$(".item2>img").hover(function () {
    $(".widget-code").animate({
        "opacity":"1"
    },1000)
}, function () {
    $(".widget-code").animate({
        "opacity":"0"
    },1000)
})

var con=document.getElementsByClassName("concat")[0];
var conX=document.getElementsByClassName("concatx")[0];
var span=document.getElementsByClassName("spanrig")[0];
var small=document.getElementsByClassName("concatsmall")[0];
conX.onclick= function () {
    con.style.left="-480px";
    small.style.display="block"
};
span.onclick= function () {
    con.style.left="0";
    small.style.display="none"
};
function show(){
    con.style.left="0";
    small.style.display="none"
}

