$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("navbar-custom");
    $('.navbar .navbar-brand img').attr('src','static/images/logo.png');
    $('.navbar .navbar-brand img').attr('height','45');
  }
  else {
    $('.navbar').removeClass("navbar-custom");
    $('#desktop-logo').attr('src','static/images/logo-white.png');
    $('#desktop-logo').attr('height','80');
  }
});