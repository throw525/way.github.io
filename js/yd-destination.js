$('#w-btn').click(function(){
			$('.w-md-dw').slideToggle()
		})
		$('.w-md-dw li').click(function(){
			$(this).css('background','#cccccc').siblings().css('background','#FFFFFF');
})