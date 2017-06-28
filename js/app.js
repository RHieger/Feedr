// app.js
//
// Robert Hieger
//
// Feedr Application
//
// June 27, 2017

$(document).ready(function()    {

    // Assemble API Endpoint.

    // Proxy URL:

    var proxy = 'https://accesscontrolalloworiginall.herokuapp.com/';


    // URL for Digg API Endpoint:

    var diggURL = 'http://digg.com/api/news/popular.json';

    // Fully Assembled Digg Endpoint:

    var diggEndPoint = proxy + diggURL;

    console.log(diggEndPoint);

    // Make the request to Digg:

    $.get(diggEndPoint, function(response)   {


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

            var pubName = newRow.append('<div class="col-md-2">' +
                '<h3 class="article-head text-muted">' +
                feed[i].content.domain_name + '</h3>' + '</div>');

            var articleLink = newRow.append('<div class="col-md-2">' +
                '<a href="' + feed[i].content.original_url + '"' +
                'class="articleLink">View Article</a>' + '</div>');

            $(articleLink, 'a href').on('click', function(event)    {

                event.preventDefault();

                var articleWindow = $(this).window.open(feed[i].content.original_url,
                    '_blank', 'article-window', 'width=500, height=300');

            }); // end $(articleLink, 'a href')

        }   // end for

        console.log(feed);

    }); // end $.get(diggEndPoint, function())


}); // end $(document).ready()