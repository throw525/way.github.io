$('#w-btn').click(function(){
			$('.w-md-dw').slideToggle()
		})
		$('.w-md-dw li').click(function(){
			$(this).css('background','#cccccc').siblings().css('background','#FFFFFF');
})
		

$('.w-lbt-list li').click(function(){
            $('.w-lbt-list li').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('.w-router-xia div').eq($(this).index()).show().siblings().hide();
        })
