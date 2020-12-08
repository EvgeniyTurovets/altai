
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

    $('#catalog__filter__btn').click(function(){
      $('.catalog__filter').fadeIn()
    })
    $('.filter__close').click(function(){
      $('.catalog__filter').fadeOut()
    })


    // товар
    $('.big-cart').slick({
      fade: true,
      arrows: false,
      asNavFor: '.nav-cart',
    })
    $('.nav-cart').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      asNavFor: '.big-cart',
      focusOnSelect: true,
    })

    $('.tovar-slider__wrap').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint:375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })


    // кабинет
    if($('.cabinet .adressa').length){
		function adressaAppend(){
			if( $(window).width() < 768 ){
				$( ".adressa" ).insertAfter( ".cabinet__table" );
			}else{
				$( ".adressa" ).insertAfter( ".cabinet__form" );
			}
		}
		adressaAppend();
		window.onresize = function(event) {
			adressaAppend();
		};
  }
  

  
})