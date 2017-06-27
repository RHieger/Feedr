// app.js
//
// Robert Hieger
//
// Feedr Application
//
// June 27, 2017

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

            var photo = newRow.append('<div class="col-md-4">' +
                '<img src="' +feed[i].content.media.images[1].url + '" />' +
                '</div>');

            var titleDesc = newRow.append('<div class="col-md-4">' +
                '<h3 class="article-head text-muted">' +
                feed[i].content.title +  '</h3>' +
                '<p>' + feed[i].content.description + '</p>' + '</div>');

            var pubName = newRow.append('<div class="col-md-3">' +
                '<h3 class="article-head text-muted">' +
                feed[i].content.domain_name + '</h3>' + '</div>');


            console.log(newRow.val());

        }   // end for

        console.log(feed);

    }); // end $.get(diggEndPoint, function())


}); // end $(document).ready()