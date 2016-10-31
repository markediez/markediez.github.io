$(document).ready(function() {
  changeQuote();
});

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
