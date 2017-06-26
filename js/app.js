// app.js
//
// Robert Hieger
//
// In-Class Lab
//
// June 21, 2017

$(document).ready(function()    {

    // console.log('Document Loaded!');

    var diggURL = 'http://digg.com/api/news/popular.json';

    var proxy = 'https://accesscontrolalloworiginall.herokuapp.com/';

    var diggEndPoint = proxy + diggURL;

    console.log(diggEndPoint);

    // Make the request to Digg:

    $.get(diggEndPoint, function(response)   {

        // Log the response to the console.

        console.log(response);

        var feed = response.data.feed;

        for (var i = 0; i < response.data.feed.length; i ++)  {

            $('.panel-body .row .col-md-6').append()

            $('.panel-body .row .col-md-6').append('<p>' + feed[i].content.description +
                '</p></article>');

        }

        console.log(feed);

    });


}); // end $(document).ready()