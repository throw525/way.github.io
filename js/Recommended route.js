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
$('.w-lbt-list li').click(function(){
            $('.w-lbt-list li').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('.w-router-xia div').eq($(this).index()).show().siblings().hide();
        })
var focus=document.querySelector('.focus'),
	    lb=focus.querySelector('.lb'),
	    li=lb.querySelectorAll('li'),
	    lbtn=focus.querySelector('.lbtn'),
	    rbtn=focus.querySelector('.rbtn'),
	    dot=focus.querySelector('.dot'),
	    dotli=dot.querySelectorAll('li');
	    
	var imgnum=0;
	var lastnum=0;
	var movenum=25;
	var aniTimer;
	var flag=true;
	var dotnum=0;
//	var autoTimer;
	    rbtn.onclick=function(){
	    	if(flag){
	    		flag=false;
	        if(imgnum>=li.length-1){
	    		lb.style.marginLeft='0px';
	    		imgnum=0
	    	}
	        nobg();
	        if(dotnum>=dotli.length-1){
	        	dotnum=-1;
	        }
	        dotli[dotnum+1].style.backgroundColor='#000';
	    	animate(-870);
	    	imgnum++;
	    	dotnum++;
	    	}
	    }
	    lbtn.onclick=function(){
	    	if(flag){
	    		flag=false
	    	if(imgnum<=0){
	    		lb.style.marginLeft=-li[0].clientWidth*(li.length-1)+'px';
	    		imgnum=li.length-1;
	    	}
	    	nobg();
	    	if(dotnum<=0){
	    		dotnum=dotli.length;
	    	}
	    	dotli[dotnum-1].style.backgroundColor='#000'
	    	animate(870);
	    	imgnum--;
	    	dotnum--;
	    	}
	    }
	    for(var i=0;i<dotli.length;i++){
	    	dotli[i].index=i;
	    	dotli[i].onclick=function(){
	    		if(flag){
	    			flag=false;
	    			nobg();
	    		if(imgnum>=li.length-1){
	    		lb.style.marginLeft='0px';
	    		imgnum=0
	    	}
	    		this.style.backgroundColor='#000';
	    		if(this.index-dotnum>=0){
	    			animate(-870*(this.index-dotnum));
	    		}else{
	    			animate(-870*(this.index-dotnum));
	    		}
	    		dotnum=this.index;
	    		imgnum=this.index;
	    		}
	    	}
	    }
	    
	 function autoplay(){
	 	autoTimer=setInterval(function(){
	 		rbtn.onclick();
	 	},1000)
	 }
	    
	   focus.onmouseover=function(){
	   	clearInterval(autoTimer);
	   }
	   focus.onmouseout=function(){
	   	autoplay();
	   }
	    
	    
	    
	   function animate(distance){
	   	var everymove=distance/movenum;
	   	aniTimer=setInterval(function(){
	   		if(lastnum>=movenum){
	   			clearInterval(aniTimer);
	   			lastnum=0;
	   			flag=true;
	   			return;
	   		}
	   		var ml=parseFloat(getComputedStyle(lb).marginLeft);
	   	    lb.style.marginLeft=ml+everymove+'px';
	   	    lastnum++;
	   	},17);
	   }
	   function nobg(){
	   	for(var i=0;i<dotli.length;i++){
	   		dotli[i].style.backgroundColor='red';
	   	}
	   }