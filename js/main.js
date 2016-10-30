"use strict";

let token = 'df2c5b456fbf1b37fc45af1e93b2a792';

let getInfo = () => {

    
    $.ajax({ 
             type: 'GET',
             url:'https://api.flickr.com/services/rest/',
             data: {
                method: "flickr.photos.search",
                api_key: token,
                tags: "fashion",
                format: "json",
                nojsoncallback: 1
            },
            success:function(response) { 
                 console.log(response);
                 var template = Handlebars.compile( $('#template').html()  );
                 $('.updates').empty().append( template(response)  );
             },
             error:function(err) {
                     console.log(err); 
             }
         });
}

$(document).ready(function () {
    getInfo();
})
