$( document ).ready(function() {
    console.log( "ready!" );

  $('.clickable-row').click(function() {
    // Remove previous active
    $('.clickable-row.active').removeClass("active");
    $(this).addClass("active");
  });
});
