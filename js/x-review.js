$(function(){
	var a=true;
	function clicks(aa,bb,wid1,wid2){
		if(a){
			$(aa).css({"width":"500px","height":"500px"});
			$(bb).css({"width":wid1});
			a=false;
		}else{
			$(aa).css({"width":"120px","height":"120px"});
			$(bb).css({"width":wid2});
			a=true;
		};
	};
	$(".c1").click(function(){
		clicks('.c1 p:nth-child(4)','.c1 p:nth-child(4) img','166px','39px');
	});
	$(".c2").click(function(){
		clicks('.c2 p:nth-child(4)','.c2 p:nth-child(4) img','280px','67px');
	});
	$(".c3").click(function(){
		clicks('.c3 p:nth-child(4)','.c3 p:nth-child(4) img','311px','75px');
	});
	$(".c4").click(function(){
		clicks('.c4 p:nth-child(4)','.c4 p:nth-child(4) img','280px','67px');
	});
	$(".c5").click(function(){
		clicks('.c5 p:nth-child(4)','.c5 p:nth-child(4) img','280px','67px');
	});
	$(".c6").click(function(){
		clicks('.c6 p:nth-child(4)','.c6 p:nth-child(4) img','280px','67px');
	});
	$(".c7").click(function(){
		clicks('.c7 p:nth-child(4)','.c7 p:nth-child(4) img','280px','67px');
	});
	$(".c8").click(function(){
		clicks('.c8 p:nth-child(4)','.c8 p:nth-child(4) img','280px','67px');
	});
	$(".c9").click(function(){
		clicks('.c9 p:nth-child(4)','.c9 p:nth-child(4) img','280px','67px');
	});
	$(".c10").click(function(){
		clicks('.c10 p:nth-child(4)','.c10 p:nth-child(4) img','280px','67px');
	});
})
