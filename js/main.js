
$(function () {
	'use strict';
    /*
      Vars
    */

    var width = $(window).width();
    var height = $(window).height();


    /*
      Typed subtitle
    */

    $('.typed-title').typed({
      stringsElement: $('.typing-title'),
      backDelay: 5000, /* Delay in text change */
      typeSpeed: 0, /* Typing speed */
      loop: true
    });

});
