/**
 * Created by Administrator on 2017/8/27.
 */
$(".restao1").hover(function () {
    var r=$(".restao1").index(this);
    $(".resdesc").eq(r).slideDown();
},function () {
    var r=$(".restao1").index(this);
    $(".resdesc").eq(r).slideUp();
})
$(".restao1").eq(7).hover(function () {
    $(".resdesc").eq(3).slideDown();
},function () {
    $(".resdesc").eq(3).slideUp();
})
$(".restao1").eq(3).hover(function () {
    $(".resdesc").eq(3).css("display","none")
},function () {
    $(".resdesc").eq(3).css("display","none")
})