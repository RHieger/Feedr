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

            var newRow = $('.panel-body').append('<div class="row"></row>');

            newRow.append('<div class="col-md-6" id="titleDesc"></div>');

            newRow.append('<div class="col-md-2" id="publication"></div>');

            $('#titleDesc').append('<h3 class="text-muted article-head">' +
                feed[i].content.title + '</h3>');

            $('#titleDesc').append('<p>' + feed[i].content.description + '</p>');

            $('#publication').append('<h3 class="text-muted article-head">' +
                feed[i].content.domain_name + '</h3>');

            console.log(newRow.val());

        }

        console.log(feed);

    });


}); // end $(document).ready()