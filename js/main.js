// Hedear Js

	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header").addClass("shrink");
			updateSliderMargin();
		}
		else
		{
			$("header").removeClass("shrink");
			updateSliderMargin();
		}
	});


// menu slide toggle

$(document).ready(function(){
	var switch_icon = true;
	$('.sw-sm').click(function(){
		$(this).find('.sub-menu').slideToggle();
		var temp = $(this).find('.icon-change span').html();
		if(temp == "-"){
			$(this).find('.icon-change span').html("+");	
		}else{
			$(this).find('.icon-change span').html("-");
		}
	});


	$('.dis-edu').click(function(){
		$('.dis-edu-vw').fadeIn();
		$('.toi-trng-vw').fadeOut();
	});

	$('.toi-trng').click(function(){
		$('.toi-trng-vw').fadeIn();
		$('.dis-edu-vw').fadeOut();
	});

});
