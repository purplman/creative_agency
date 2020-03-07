$(document).ready(function(){
	var height = 100;
	var cSlide = 1;
	var cnt = $('.item').length;

	

		 setInterval(function(){
			$('.p-slider').animate({ top:'-='+height+'%' },500,function(){
				cSlide++;
				if(cSlide===cnt){
					cSlide=1;
					$('.p-slider').css({
						'top':0
					});
				}
			})
		},4000)
})