// *******************************************************************
// For page design
// *******************************************************************
function scrollToLink(el, anchor) {
  $('html, body').animate({
       scrollTop: $(anchor).offset().top
  }, 500);
}

function activateLink(el) {
  $(".active").removeClass("active");
  $(el).parent().addClass("active");
}

$(window).scroll(function() {
  var projectOffset = $("#project").offset().top;
  var contactOffset = $("#contact").offset().top;
  var currentScroll = $(this).scrollTop();

  if (currentScroll >= contactOffset - (projectOffset / 2) ) {
    activateLink($("#link-contact"));
  } else if (currentScroll >= projectOffset / 2) {
    activateLink($("#link-project"));
  } else {
    activateLink($("#link-about"));
  }

});

// *******************************************************************
// For the projects section
// *******************************************************************
function activateProject(el) {
  
}
