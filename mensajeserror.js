$("#user").keypress(function(event) {
  var keycode = event.keyCode || event.which;
  if (keycode == '13') {
    $("#pass").focus();
  }
});
$("#pass").keypress(function(event) {
  var keycode = event.keyCode || event.which;
  if (keycode == '13') {
    login();
  }
});
