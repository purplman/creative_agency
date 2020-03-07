$(document).ready(function(){
	setTimeout(function(){
		function slide(){
			$s1 = $('.slide-1');
			$s2 = $('.slide-2');
			$s3 = $('.slide-3');
			$s1.fadeOut(4000);
			$s2.fadeIn(4000,function(){
				$s2.fadeOut(4000);
				$s3.fadeIn(4000,function(){
					$s3.fadeOut(4000);
					$s1.fadeIn(4000,function(){
					slide()
					});
				})
			});
		}
		slide()
	},4000)
})




	


