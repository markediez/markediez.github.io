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
  $('<span class="form-tooltip col-md-4">' + msg + '</span>').insertAfter(element);
}


// From internet 'friends'

// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
function whichAnimationEvent() {
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}
