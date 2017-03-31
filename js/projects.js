$(document).ready(function() {
  $(".project").each(function() {
    $(".title", this).css("background-color", getCSSColor())
  });
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
