(function($) {
  "use strict"; // Start of use strict
  //Female on click
  var gender;
  var shade;
  var fit;
  var accessories;
  $('#female').click(function() {
    gender = true; //female
  });

  //Male on click
  $('#male').click(function()   {
    gender = false; //male
  });

  //Lighter shade on click
  $('#light').click(function()   {
    shade = true; //light
  });
  //Darker shade on click
  $('#dark').click(function()   {
    shade = false; //dark
  });
  $('#casual').click(function()   {
    fit = "casual";
  });
  $('#dressToImpress').click(function()   {
    fit = "dressToImpress"; 
  });
  $('#formal').click(function()   {
    fit = "formal"; 
  });
  $('#yesAccessories').click(function()   {
    accessories = true;
  });
  $('#noAccessories').click(function()   {
    accessories = false;
  });
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


function submit(){
    window.location = 'home.html';
}
