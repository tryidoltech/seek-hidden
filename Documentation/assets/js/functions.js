$(function() {

  "use strict";

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.nav',
    offset: 50
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var smoothLinks = $(".nav-link");

  smoothLinks.on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top - 50}, 700, "easeInOutQuart");  
    e.preventDefault();
  });

});