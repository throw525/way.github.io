/**
 * Created by Administrator on 2017/8/26.
 */

//轮播
F(document.querySelectorAll('.xiao')[0],512,760);
function F(element,fWidth,fHeight){
    var focus=element,
        lb=focus.querySelector('.abtaocon'),
        Lbtn=focus.querySelector('.left'),
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



$(function () {
    $(".aboutcon").each(function () {
        $(this).tab(".aboutit>li","active","show",".aboutcontao>div");
    })
});
$(function () {
    $(".mobileaboutcon").each(function () {
        $(this).tab(".aboutit>li","active","show",".aboutcontao>div");
    })
});
    //创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(116.55116,39.650558);//定义一个中心点坐标
    map.centerAndZoom(point,8);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}


initMap();//创建和初始化地图