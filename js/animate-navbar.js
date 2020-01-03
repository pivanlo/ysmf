$(function () {

  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll === 0) {
        $('.navbar').removeClass('navbar-small');
      } else {
        $('.navbar').addClass('navbar-small');
      }
  })
});
