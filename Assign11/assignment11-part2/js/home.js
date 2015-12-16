$(document).on("pagebeforeshow", "#home", (function () {
    "use strict";
   /* hide welcome info and then display the results listview */
    
    $("#search").on("keypress", function () {
        $("#welcomeMessage").hide();
        /*        $.mobile.pageContainer.pagecontainer("change", "#directory", { allowSamePageTransition: true});   --use if want to load data on new directory page    */

        $.getJSON("data/json.js", function (data) {
            var output = '';
            $.each(data, function (index, value) {
			    var searchTerm = $('#search').val().toUpperCase();
                for (var i = 0; i < value.length; i++) { 
                if (value[i].name.toUpperCase().indexOf(searchTerm) !== -1) {
                output += '<li><a href="#details"><img src="' + value[i].imagePath + '"><h3>' + value[i].name + '</h3><p>' + value[i].title + '</p><span class="ui-li-count">' + value[i].reportsTo.length + '</span></a><li>';
                }
            }
        });
            $('#results').html(output).listview("refresh");
    });
}); 
            
}));
