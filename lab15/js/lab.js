// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 26 May 2022
// License: Public Domain

function getAjax() {
	// using the core $.ajax() method
	$.ajax({
		// the URL for the request (from the api docs)
  	url: "https://xkcd.com/info.0.json",
		// whether this is a POST or GET request
    type: "GET"
  })
	// what we do when the api call is successful
  .done(function(data){
  	$("#output").append("<h3>" + data.title + "</h3>");
  	$("#output").append("<img src=" + data.img + ">");
  	$("#output").append("<p>" + data.alt);
  })
	// what happens if the api call fails
  .fail(function(request, error){
  	$("#output").html("Uh oh, there's an issue.");
  })
}

$("button").click(getAjax);
