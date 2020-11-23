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

    $('.mob-menu .level1 span').click(function(){
      $('.mob-menu .level2').fadeIn()
    })

    $('.level2__close').click(function(){
      $('.mob-menu .level2').fadeOut()
    })

    // каталог
    $('.catalog__filter__title').click(function(){
      $(this).next('.catalog__filter__wrap').slideToggle()
      $(this).closest('.catalog__filter__item').toggleClass('active')
    })

    if( $('.select').length ){
      $('.select').selectric()
    }
})