$(function(){
    if($('#fullpage').length){
		if($(window).height() > 649 && $(window).width() > 991){
			$('#fullpage').fullpage({
                autoScrolling:true
            });
		}
    }


    $('.burger').click(function(){
      $(this).toggleClass('active')
      $('.mob-menu').fadeToggle()
    })

    $('.mob-menu .level1').click(function(){
      $('.mob-menu .level2 a').fadeIn()
    })

    $('.level2__close').click(function(){
      $('.mob-menu .level2').fadeOut()
    })
})