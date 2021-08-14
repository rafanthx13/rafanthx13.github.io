$(function () {
	'use strict';

  // LOADER
  $(window).on("load resize", function () {
    $('#loader-overlay').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  /* Descer slide e mudar menu */
  if($('#home').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a ').each(function () {
				var currLink = $(this);
        var extension = currLink.context.href.slice(-3)
        if(extension != 'pdf' && extension != 'tml') {
          var refElement = $(currLink.attr("href"));
          if (refElement.offset().top - 30 <= scrollPos) {
            $('.top-menu ul li').removeClass("active");
            currLink.closest('li').addClass("active");
          }
        }
			});
		});
	}

  /* Open Top Menu */
  $('.image-hero').on('click', '.menu-btn', function(){
    if($('.top-menu').hasClass('active')){
      $('.top-menu').removeClass('active');
    } else {
      $('.top-menu').addClass('active');
    }

    return false;
  });

  /* Fixed Top Menu on scroll */
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 100) {
      $('.top-menu').addClass('fixed');
    }
    else {
      $('.top-menu').removeClass('fixed');
    }
  });

});
