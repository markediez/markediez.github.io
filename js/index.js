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
var projects = [];

function activateProject(el, thumbnail) {
  var projectsContainer = $("#project");
  var project = projects[el];

  $(".active", projectsContainer).removeClass("active");
  $(thumbnail).addClass("active");

  $("#project-image img", projectsContainer).attr("src", project.image);
  $(".section-header", projectsContainer).html(project.title);
  $(".section-date", projectsContainer).html(project.start_date + " - " + project.end_date);
  $(".section-description", projectsContainer).html(project.description);
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

function insertProjects(loadedProjects) {
  projects = loadedProjects;

  var projectsContainer = $("#project");

  // Insert projects dynamically
  for(var i = 0; i < projects.length; i++) {
    project = projects[i];
    $(".thumbnail", projectsContainer).append('<a onClick="activateProject(' + i + ', this)"><img src="'+ project.thumbnail + '"></img></a>');
  }

  $(".thumbnail").children()[0].click();
}

// *******************************************************************
// "Main"
// *******************************************************************
$(document).ready(function() {
  fetchProjects();
});
