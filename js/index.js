function activateLink(el) {
  $(".active").removeClass("active");
  $(el).parent().addClass("active");
}
