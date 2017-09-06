
var consult=document.getElementById('consult');
var oWbox=document.getElementById('wbox');
var wBox1=document.getElementById('wbox1');
var body=document.body
var wLi2=document.getElementById('w-li2')
consult.onclick=function(){
	oWbox.style.opacity='1';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='999';
	body.style.overflow='hidden'	
}
wBox1.onclick=function(){
	oWbox.style.opacity='0';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='-999'
	body.style.overflow='';	
}






$(".w-c-r-list li").hover(function(){
	$(this).css('background','#FFFFFF')
    $(this).children().eq(2).stop(true).css('display','block');
},function(){
	$(this).css('background','')
	$(this).children().eq(2).css('display','none');
	
});
			
window.onload=function (){
	var oW=document.getElementById('www');
    var oY=document.getElementById('www-y');
    var oB=document.getElementById('www-b');
    if(oY.style.display='none'){
    	oB.style.display='none'
    }
	oW.onclick=function (){
		if(oY.style.display='none'){
			oY.style.display='block';
			oB.style.display='block'
		}
	}
	oB.onclick=function(){
		if(oY.style.display='block'){
			oY.style.display='none';
			oB.style.display='none'
		}
	}

}


var oBox=document.getElementById('box');
var oS=oBox.getElementsByTagName('s')[0];
var oB=oBox.getElementsByTagName('b')[0];
var oSpan=oBox.getElementsByTagName('span')[0];
var oP=oBox.getElementsByTagName('p')[0];
var oImg=oBox.getElementsByTagName('img')[0];
var oUl=oBox.getElementsByTagName('ul')[0];
var aLi=oBox.getElementsByTagName('li')
				
				var num=0
				var timer=null
				var arrImg=['../img/w-img/aside-lbt-yi.jpg','../img/w-img/w-ad-lbt-er.jpg','../img/w-img/w-ad-lbt-san.jpg','../img/w-img/w-ad-lbt-si.jpg','../img/w-img/w-ad-lbt-wu.jpg','../img/w-img/w-ad-lbt-liu.jpg']
				var arrText=['1','行程亮点：参观美国地标性建筑自由女神像，不容错过的经典景点','行程亮点：变身魔法师，漫游迪士尼魔法王国','行程亮点：在第五大道流连，感受时尚之都的非凡魅力','行程亮点：在第五大道流连，感受时尚之都的非凡魅力','行程亮点：参观美国最大的艺术博物馆，打破时空界限深探艺术的灵魂']
				
				oImg.src=arrImg[num];
				oP.innerHTML=arrText[num];
				oSpan.innerHTML=(num+1)+'/'+arrImg.length;
				
				
				
				
				
			oB.onclick=function(){
				num++
				if(num==arrImg.length){
					num=0
				}
				oImg.src=arrImg[num];
				oP.innerHTML=arrText[num];
				oSpan.innerHTML=(num+1)+'/'+arrImg.length;
				
			}
				oS.onclick=function(){
				num--
				if(num==-1){
					num=arrImg.length-1
				}
				oImg.src=arrImg[num];
				oP.innerHTML=arrText[num];
				oSpan.innerHTML=(num+1)+'/'+arrImg.length;
				
			}
				
			for(var i=0;i<aLi.length;i++){
				aLi[i].index=i
				aLi[i].onclick=function(){
				num=this.index;
				oImg.src=arrImg[this.index];
				oP.innerHTML=arrText[this.index];
				oSpan.innerHTML=(this.index+1)+'/'+arrImg.length;
				
				}
			}