/**
 * Created by Administrator on 2017/8/28.
 */
$(function () {
    $(".joinzhao").each(function () {
        $(this).tab(".joinul>li","color","block",".jointab>div");
    })
});
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