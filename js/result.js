/**
 * Created by Administrator on 2017/8/18.
 */
$(function () {
    $(".item2>img").hover(function () {
        $(".widget-code").animate({
            "opacity":"1"
        },800)
    }, function () {
        $(".widget-code").animate({
            "opacity":"0"
        },400)
    })

    $('.backtotop').click(function(){
        var move=$("body,html").offset().top;

        $("body,html").animate({
            scrollTop: move
        },600)
    })

    var info=true;
    $('.btn_1').click(function(){
        if(info){
            $('.nav-collapse').slideDown();
            $('.nav-collapse1').slideDown()
            info=false
        }else{
            $('.nav-collapse').slideUp();
            $('.nav-collapse1').slideUp()
            info=true
        }
    })


    $(".book-btn").click(function(){
        var i=$(".book-btn").index(this);
        var scroll=$(".form-1").eq(i).offset().top;
        $("body").animate({
            scrollTop: scroll
        },1000)
    })
    $('.mobile_list>a').click(function(){
        $(this).addClass('active-1').siblings().removeClass('active-1')
    })

})

var con=document.getElementsByClassName("concat")[0];
var conX=document.getElementsByClassName("concatx")[0];
var small=document.getElementsByClassName("concatsmall")[0];
conX.onclick= function () {
    con.style.left="-480px";
    small.style.display="block"
};
small.onclick= function () {
    con.style.left="0";
    small.style.display="none"
};


var oDiv = document.getElementsByClassName('backtotop')[0];
window.onscroll=function() {

    var S = document.documentElement.scrollTop || document.body.scrollTop
    if (window.navigator.userAgent.indexOf('MSIE') != -1) {
        with (oDiv.style) {
            position = 'fixed'
        }
    }
    if (S > 200) {
        oDiv.style.display = 'block'
    }
    if (S < 200) {
        oDiv.style.display = 'none'
    }

}
function show(){
    con.style.left="0";
    small.style.display="none";
    oDiv.style.display='none'

}

