var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var projects = [];
var oldState = undefined;

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
    $("#content").append(objectToProjectThumbnail(projects[key], key));
  }

  $(".project").each(function() {
    // Randomize background color of project titles
    $(".title", this).css("background-color", getCSSColor());
    $(this).css("cursor", "pointer");

    // Add event listeners for each project
    $(this).on("click", function() {
      projectView( $(this).data("key") );
    });
  });

}

/**
 * Converts a project in JSON form to HTML form
 * @param project - a single project object
 * @param key - key of project in projects associative array
 */
function objectToProjectThumbnail(project, key) {
  var dateRange = dateToString(project.start_date) + " - ";
  if (!project.end_date) {
    dateRange += " Present";
  } else {
    dateRange += dateToString(project.end_date);
  }

  return '<a class="project" data-key="' + key + '">  <span class="title text-xlarge no-select">' + project.title  + '</span> <span class="sub-title text-small">' + dateRange + '</span> </a>';
}

/**
 * Returns a date string with '<full-month> <full-year>' format
 * @param date - a valid value for Date constructor
 */
function dateToString(date) {
  date = new Date(date);
  return monthNames[date.getMonth()] + " " + date.getFullYear();
 }

/**
 * Manipulates the DOM to the project selected view
 * @param key - key of project from associative array
 */
function projectView(key) {
  // Save current view state
  oldState = {};
  oldState.content = $("#content");

  // Change view state
  console.log(key);
}
