/**
 * Created by Administrator on 2017/8/26.
 */

//�ֲ�
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

    //��ť���
    for(var s=0;s<Rbtn.length;s++){
        Rbtn[s].onclick=function(){
            if(flag){
                flag=false;
                if(imgNum>=lb.children.length-1){
                    lb.style.marginLeft='0px';
                    imgNum=0;
                }
                animate(-fWidth);
                imgNum++;//ͼƬ������+1
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
                clearInterval(aniTimer);//�رն�ʱ��
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
    //�����ͳ�ʼ����ͼ������
function initMap(){
    createMap();//������ͼ
    setMapEvent();//���õ�ͼ�¼�
    addMapControl();//���ͼ��ӿؼ�
}

//������ͼ������
function createMap(){
    var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
    var point = new BMap.Point(116.55116,39.650558);//����һ�����ĵ�����
    map.centerAndZoom(point,8);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
    window.map = map;//��map�����洢��ȫ��
}

//��ͼ�¼����ú�����
function setMapEvent(){
    map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
    map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
    map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
    map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
}

//��ͼ�ؼ���Ӻ�����
function addMapControl(){
    //���ͼ��������ſؼ�
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //���ͼ���������ͼ�ؼ�
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //���ͼ����ӱ����߿ؼ�
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}


initMap();//�����ͳ�ʼ����ͼ