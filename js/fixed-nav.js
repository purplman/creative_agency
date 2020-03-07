$(document).ready(function() {
    $(document).scroll(function () {
    	var height = window.innerHeight;
    	var scroll = $(this).scrollTop();
        if (scroll > height) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');;
        }
        });
});