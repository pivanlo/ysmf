$(document).ready(function () {
  
  $('.nav-item').hover(function(event) {
    var $target = $(event.target);
    if ($target.is('.nav-item')) {
      $('.dropdown-menu').hide();
      $('body').append('<div class="dropdown-backdrop"></div>');
      $target.next('.dropdown-menu').show();
    }
  });
  
  $('*').on('mouseover', '.dropdown-backdrop', function () {
    $('.dropdown-menu').hide();
    $('.dropdown-backdrop').remove();
  });

});