$(document).ready(function() {
  changeQuote();
  changeDate();
});

function changeDate() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var currDate = new Date(Date.now());
  var day = currDate.getDay() < 10 ? "0" + currDate.getDay() : currDate.getDay();
  
  $("#curr_date .h2").html(months[currDate.getMonth()]);
  $("#curr_date #day").html(day);
}

function changeQuote() {
  var newQuote = {};

  // Get quote from API
  $.ajax({
    type: "GET",
    cache: false,
    async: true,
    url: "http://quotesondesign.com/wp-json/posts",
    data: {"filter[orderby]": "rand", "filter[posts_per_page]": "1"},
    success: function(result, textStatus, jqXHR) {
      updateQuote(result[0]);
    },
    error: function(result, textStatus, jqXHR) {
      console.log("ERROR");
    }
  });

}

function updateQuote(data) {
  // Change current quote to new quote
  $("#random_quote .quote").html(data["content"]);
  $("#random_quote .author").html(data["title"]);
}

function tweet(quote, author) {
  var quote = $("#random_quote .quote p").html() + " -" + $("#random_quote .author").html()
  var url = "https://twitter.com/intent/tweet?hashtags=freecodecamp,quotes&text=";
  url += quote;

  window.open(url,'_blank');
}
