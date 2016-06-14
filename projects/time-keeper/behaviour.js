$( document ).ready(function() {
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

function showToolTip(element, msg, position) {
  console.log(element);
  console.log(msg);
  console.log(position);
  console.log(element.position());
  // $(element).addClass('tooltips');
  $('<span class="form-tooltip col-md-4">' + msg + '</span>').insertAfter(element);
}
