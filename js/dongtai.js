/**
 * Created by Administrator on 2017/8/18.
 */
$(function () {
    $(".rigtao2>img").hover(function () {
        $(".erwei").animate({
            "opacity":"1"
        },1000)
    }, function () {
        $(".erwei").animate({
            "opacity":"0"
        },1000)
    })
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
