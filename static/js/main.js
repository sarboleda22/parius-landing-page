$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("navbar-custom");
    $('.navbar .navbar-brand img').attr('src','static/images/logo.png');
  }
  else {
    $('.navbar').removeClass("navbar-custom");
    $('#desktop-logo').attr('src','static/images/logo-white.png');
  }
});