$(document).ready(function(){
	var width = 100;
	var speed = 500;
	var pause = 3000;
	var currentSlide = 1;
	var count = $('.t-item').length;

	var interval;
	function startSlider(){
		interval = setInterval(function(){
			$('.t-slider').animate({ left:'-='+width+'%' },speed,function(){
				currentSlide++;
				if(currentSlide===count){
					currentSlide=1;
					$('.t-slider').css('left',0);
				}
				if(currentSlide===1){
					$('.control-1').addClass('active').siblings().removeClass('active')
				}
				if(currentSlide===2){
					$('.control-2').addClass('active').siblings().removeClass('active')
				}
				if(currentSlide===3){
					$('.control-3').addClass('active').siblings().removeClass('active')
				}
			})
		},pause)
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	$('.t-slider').on('mouseenter',pauseSlider).on('mouseleave',startSlider);

	startSlider()
	$('.control-1').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.t-slider').animate({
			left:-width*1+'%'
		})
	})
	$('.control-2').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.t-slider').animate({
			left:-width*2+'%'
		})
	})
	$('.control-3').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.t-slider').animate({
			left:-width*3+'%'
		})
	})
})