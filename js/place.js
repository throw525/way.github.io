/**
 * Created by Administrator on 2017/8/23.
 */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    initialSlide:7,
    slidesPerView: 1.08,
    centeredSlides: true,
    slideToClickedSlide: true
});
F(document.querySelectorAll('.placeimgs')[0],1080,700);
F(document.querySelectorAll('.placeimgs2')[0],560,360);
F(document.querySelectorAll('.placeimgs2')[1],560,360);
F(document.querySelectorAll('.placeimgs')[1],1080,700);
function F(element,fWidth,fHeight){
    var focus=element,
        lb=focus.querySelector('.imgstao'),
        Lbtn=focus.querySelectorAll('.left'),
        Rbtn=focus.querySelectorAll('.right');

    var imgNum= 0,lastNum= 0,dotNum=0;
    var moveNum=20;
    var aniTimer,autoTimer;
    var flag=true;

    focus.style.width=fWidth+'px';
    for(var i= 0;i<lb.children.length;i++){
        lb.children[i].style.width=fWidth+'px';
    }
    lb.style.width=lb.children.length*fWidth+'px';
    focus.style.height=fHeight+'px';
    for(var i= 0;i<lb.children.length;i++){
        lb.children[i].style.height=fHeight+'px';
    }
    lb.style.heihgt=lb.children.length*fHeight+'px';

    //按钮点击
    for(var s=0;s<Rbtn.length;s++){
    Rbtn[s].onclick=function(){
        if(flag){
            flag=false;
            if(imgNum>=lb.children.length-1){
                lb.style.marginLeft='0px';
                imgNum=0;
            }
            animate(-fWidth);
            imgNum++;//图片计数器+1
        }
            if(imgNum==1){
                $(".numtao1").eq(0).html(2)
            }
            if(imgNum==2){
                $(".numtao1").eq(0).html(1)
            }
    };
    }
    Lbtn.onclick=function(){
        if(flag){
            flag=false;
            if(imgNum<=0){
                lb.style.marginLeft=-lb.children[0].clientWidth*(lb.children.length-1)+'px';
                imgNum=lb.children.length-1;
            }
            animate(fWidth);
            imgNum--;
        }
    };
    function animate(distance){
        var everyMove=distance/moveNum;
        aniTimer=setInterval(function(){
            if(lastNum>=moveNum){
                clearInterval(aniTimer);//关闭定时器
                lastNum=0;
                flag=true;
                return;
            }
            var ML=parseFloat(getComputedStyle(lb).marginLeft);
            lb.style.marginLeft=ML+everyMove+'px';
            lastNum++;
        },30)
    }
}
//第二个轮播
    $(".liglefttao").scrollLeft($(".rigtop1").width());
    var state=true;
    var index=1;
    var liindex=0;
    var time=null;
    function move(){
        index++;
        if(index>=$(".rigtop1").length){
            $(".liglefttao").scrollLeft(0);
            index=1;
        }
        liindex++;
        if(liindex>=$("li").length){
            liindex=0;
        }
        $("li").eq(liindex).addClass("select").siblings().removeClass("select")
        $(".liglefttao").animate({
            scrollLeft:$(".rigtop1").width()*index
        },1000, function () {
            state=true;
        })
    }
    function automove(){
        time=setInterval(function () {
            move();
        },2000)
    }
    $(".spotlig1").click(function () {
        $(".spotnum1").html(index-1);
        if(index==1){
            $(".spotnum1").html(3);
        }
        if(index==0){
            $(".spotnum1").html(2);
        }
        if(state){
            state=false;
            clearInterval(time);
            index--;
            console.log(index)
            if(index<0){
                $(".liglefttao").scrollLeft($(".rigtop1").width()*($(".rigtop1").length-1));
                index=$(".rigtop1").length-2;
            }
            liindex--;
            if(liindex<0){
                liindex=$("li").length-1;
            }
            $("li").eq(liindex).addClass("select").siblings().removeClass("select");
            $(".liglefttao").animate({
                scrollLeft:$(".rigtop1").width()*index
            },900,function(){
                state=true;
            })
        }
    })
    $(".spotlig2").click(function(){
        $(".spotnum1").html(index+1)
        if(index==3){
            $(".spotnum1").html(1)
        }
        if(state){
            state=false;
            clearInterval(time);
            move();
        }
    });