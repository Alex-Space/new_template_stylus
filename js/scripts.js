$(document).ready(function(){
  // for validation
  $('input[type="text]", textarea').focus(function(){
    $(this).removeClass('notvalid');
  });

});
