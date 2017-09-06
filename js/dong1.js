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
window.onscroll=function() {
    var oDiv = document.getElementsByClassName('backtotop')[0];
    var S = document.documentElement.scrollTop || document.body.scrollTop
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

