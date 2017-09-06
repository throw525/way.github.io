var consult=document.getElementById('consult');
var oWbox=document.getElementById('wbox');
var wBox1=document.getElementById('wbox1');
var body=document.body
consult.onclick=function(){
	oWbox.style.opacity='1';
	oWbox.style.transition='0.8s';
	oWbox.style.zIndex='999';
	body.style.overflow='hidden'	
}
wBox1.onclick=function(){
	oWbox.style.opacity='0';
	oWbox.style.transition='0.5s';
	oWbox.style.zIndex='-999'
	body.style.overflow='';	
}


var oImg=document.querySelectorAll('.w-content .w-rate_img');
console.log(oImg.length)
var flag=true
function num(i){
oImg[i].onclick=function(){
	if(flag==true){
		oImg[i].style.width='250px';
		oImg[i].style.height='500px';
		flag=false
	}else if(flag==false){
		oImg[i].style.width='40px';
		oImg[i].style.height='120px';
		flag=true
	}
}
}
num(0);
num(1);
num(2);
num(3);
num(4);
num(5);
num(6);
num(7);




