/**
 * Created by Administrator on 2017/8/18.
 */
$(".close").click(function () {
    var video1=document.getElementsByClassName("vedio1")[0];
    $(".video1").css({"display":"none"});
    video1.pause()
});
function videobox(){
    var video1=document.getElementsByClassName("vedio1")[0];
    $(".video1").css({"display":"block"});
    video1.play()
}
$(".close2").click(function () {
    var video2=document.getElementsByClassName("vedio2")[0];
    $(".video2").css({"display":"none"});
    video2.pause()
});
function videobox2(){
    var video2=document.getElementsByClassName("vedio2")[0];
    $(".video2").css({"display":"block"});
    video2.play()
}
$(".close3").click(function () {
    var video3=document.getElementsByClassName("vedio3")[0];
    $(".video3").css({"display":"none"});
    video3.pause()
});
function videobox3(){
    var video3=document.getElementsByClassName("vedio3")[0];
    $(".video3").css({"display":"block"});
    video3.play()
}