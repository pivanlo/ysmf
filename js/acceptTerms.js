var $popover = $('#popover');

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showMessage(message, $container) {
  $popover.find('.popover-message').text(message);
  var marginLeft = $container.outerWidth() / 2 - $('#popover').outerWidth() / 2;
  $popover
    .css('margin-top', -12)
    .css('margin-left', marginLeft)
    .appendTo($container)
    .show();
}

function hideMessage() {
  $popover.hide();
}

function handleSubmit(event) {
  var $name = $('#name');
  var $email = $('#email');
  var $message = $('#message');

  // Hide error
  hideMessage();

  // Validate name
  if (!$name.val()) {
    event.preventDefault();
    event.stopPropagation();
    var message = 'Please enter your name.';
    var $container = $name.parent();
    showMessage(message, $container);
    $name.addClass('has-error');
    return;
  }

  // Validate email
  var emailValue = $email.val();
  if (!emailValue) {
    event.preventDefault();
    event.stopPropagation();
    var message = 'Please enter your email.';
    var $container = $email.parent();
    showMessage(message, $container);
    $email.addClass('has-error');
    return;
  } else if (!validateEmail(emailValue)) {
    event.preventDefault();
    event.stopPropagation();
    var message = 'The email is not in a valid format.';
    var $container = $email.parent();
    showMessage(message, $container);
    $email.addClass('has-error');
    return;
  }

  // Validate message
  if (!$message.val()) {
    event.preventDefault();
    event.stopPropagation();
    var message = 'Please enter your message.';
    var $container = $message.parent();
    showMessage(message, $container);
    $message.addClass('has-error');
    return;
  }
}

function handleInputKeyUp() {
  var $this = $(this);
  if ($this.val() && $this.hasClass('has-error')) {
    hideMessage();
  }
};


$(document).ready(function(){
  $('.contact-form').submit(handleSubmit);
  $('#name, #email, #message').keyup(handleInputKeyUp);
});
