// *******************************************************************
// For page design
// *******************************************************************
function scrollToLink(el, anchor) {
  $('html, body').animate({
       scrollTop: $(anchor).offset().top
  }, 500);
}

function activateLink(el) {
  $("#links .active").removeClass("active");
  $(el).parent().addClass("active");
}

$(window).scroll(function() {
  var projectOffset = $("#project").offset().top;
  var contactOffset = $("#contact").offset().top;
  var hobbyOffset  = $("#hobby").offset().top;
  var currentScroll = $(this).scrollTop();

  if (currentScroll >= contactOffset - (projectOffset / 2) ) {
    activateLink($("#link-contact"));
  } else if (currentScroll >= hobbyOffset - (projectOffset / 2) ) {
    activateLink($("#link-hobby"));
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

function fetchProjects() {
  $.ajax({
    url: "json/projects.json",
    dataType: "json",
    success: function(result, status, xhr) {
      insertProjects(result);
    },
    error: function(result, status, xhr) {
      console.debug("Something went wrong: " + status);
    }
  });
}

function insertProjects(projects) {
  console.log(projects);
}

// *******************************************************************
// "Main"
// *******************************************************************
$(document).ready(function() {
  fetchProjects();
});
