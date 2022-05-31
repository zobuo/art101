// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 26 May 2022
// License: Public Domain

// The URL for the request (from the api docs)
var endpoint = "https://xkcd.com/info.0.json";
// Using the core $.ajax() method
function getAjax() {
	$.ajax({
  	url: endpoint,
		// Whether this is a POST or GET request
    type: "GET",
  })
	// What do we do when the api call is successful
  .done(function(data){
  	console.log("Worked!");
    var comicObj = data;
    console.log(comicObj);
    var title = comicObj.title;
    var img = comicObj.img;
    var alt = comicObj.alt;
    console.log(title, img, alt);
    $("#output").html("<h3>" + title + "</h3>");
    $("#output").append("<img src=" + img + ">");
    $("#output").append("<p>" + alt + "</p>");
  })
	// What we do if the api call fails
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");
  })
}
$("button").click(getAjax);
