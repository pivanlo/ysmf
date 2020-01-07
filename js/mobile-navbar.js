$(document).ready(function () {
  
  $('.nav-item').click(function(event) {
    var $target = $(event.target);
    var id = $(this).attr('data-subnav-id');
    $('.subnav').not('#' + id).hide();
    if (id) {
      $('#' + id).toggle();
    }
  });

});
