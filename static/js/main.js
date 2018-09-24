$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("navbar-custom");
    $('.navbar .navbar-brand img').attr('src','static/images/horizontal_logo.png');
    $('.navbar .navbar-brand img').attr('height','60');
  }
  else {
    $('.navbar').removeClass("navbar-custom");
    $('#desktop-logo').attr('src','static/images/new_edit_transparent.png');
    $('#desktop-logo').attr('height','120');
  }
});