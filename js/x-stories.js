$(function(){
	$.ajax({
		url:"../json/x-stories.json",
		type:"get",
		success:function(data){
		//console.log(data[0].img);
			data.forEach(function(item){
				$(".x-maindiv").append("<div class='x-mainx'>"+"<img src="+item.img+">"+"<p>"+item.text+"<p>"+"<div>")
			})
		}
	})
})
