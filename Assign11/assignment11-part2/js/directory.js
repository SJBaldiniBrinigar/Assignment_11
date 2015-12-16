//$(document).on("pageinit", "#directory", (function () {
//    "use strict";
//    
//    $("#searchBox").on("keypress", function () {
//        $("#searchBox").focus();
//        var searchTerm = $('#searchBox').val().toUpperCase();
//
//        $.getJSON("data/json.js", function (data) {
//            var output = '';
//            $.each(data, function (index, value) {
//                for (var i = 0; i < value.length; i++) {
//                    if (value[i].name.toUpperCase().indexOf(searchTerm) !== -1) {
//                        output += '<ul><li data-filtertext="' + value[i].name +'"><a id="' + value[i].id + '"href="#details"><img src="' + value[i].image + '"><h3>' + value[i].name + '</h3><p>' + value[i].title + '</p><span class="ui-li-count">' + value[i].reportsTo.length + '</span></a></li></ul>';
//                    }
//                }
//            });
//            $('#results').html(output).listview("refresh");
//        });
//    });