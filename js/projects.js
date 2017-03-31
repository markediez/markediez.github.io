var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var projects = [];

$(document).ready(function() {
  fetchProjects();
});


/**
 * Generates a color in hsl that matches the colors of links
 */
function getCSSColor() {
  var color = "hsl(";
  color += Math.round(Math.random() * 360);
  color += ",84%,32%)";
  return color;
}


/**
 * Fetch projects data
 */
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

/**
 * Inject projects to the DOM
 * @param result - an array of project objects
 */
function insertProjects(result) {
  projects = result;
  // sort by start date desc

  // show each project
  for (var key in projects) {
    $("#content").append(objectToProjectThumbnail(projects[key]));
  }

  $(".project").each(function() {
    $(".title", this).css("background-color", getCSSColor())
  });
}

/**
 * Converts a project in JSON form to HTML form
 * @param project - a single project object
 */
function objectToProjectThumbnail(project) {
  var dateRange = dateToString(project.start_date) + " - ";
  if (!project.end_date) {
    dateRange += " Present";
  } else {
    dateRange += dateToString(project.end_date);
  }

  return '<div class="project">  <span class="title text-xlarge">' + project.title  + '</span> <span class="sub-title text-small">' + dateRange + '</span> </div>';
}

function dateToString(date) {
  date = new Date(date);
  return monthNames[date.getMonth()] + " " + date.getFullYear();
 }
