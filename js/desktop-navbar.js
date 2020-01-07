$(document).ready(function () {
  
  $('.nav-item').hover(function(event) {
    var $target = $(event.target);
    if ($target.is('.nav-item')) {
      $target.addClass('active');
      $('.dropdown-menu').hide();
      if (!$('.dropdown-backdrop').length) {
        $('body').append('<div class="dropdown-backdrop"></div>');
      }
      $target.next('.dropdown-menu').show();
    }
  });
  
  $('*').on('mouseover', '.dropdown-backdrop', function () {
    $('.dropdown-menu').hide();
    $('.dropdown-backdrop').remove();
    $('.nav-item').removeClass('active');
  });

});