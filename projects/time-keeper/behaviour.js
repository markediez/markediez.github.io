$( document ).ready(function() {
    console.log( "ready!" );

  $('.clickable-row').click(function() {
    // Remove previous active
    $('.clickable-row.active').removeClass("active");
    $(this).addClass("active");
  });
});

function isValid(formID) {
  if(!$(formID)[0].checkValidity()) {
    $(formID).find(':submit').click();
    return false;
  } else {
    return true;
  }
}
