$(document).ready(function() {
  $('.video iframe').each(function() {
    $(this).height($(this).width() * (9/16));
  })
});