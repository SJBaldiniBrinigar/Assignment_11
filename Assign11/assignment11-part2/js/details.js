$(document).on("pagebeforeshow", "#details", (function () {
    "use strict";
        var employeeId = window.employeeId;
        var info = '';
        var detail = '';
        var profile= '';
            $.getJSON("data/json.js", function (data) {
            $.each(data, function (index, value) {
                for (var i = 0; i < value.length; i++) { 
                if (value[i].id === employeeId) {
                    var reportsTo = value[i].reportsTo
                    detail += '<span><href="#details"'+'id='+value[i].id+'><img src="' + value[i].imagePath + '"><h3>' + value[i].name + '</h3><p>' + value[i].title + '</p></span>';

                }
            }
            
                for (var j = 0; j < value.length; j++) { 
                if (value[j].id === reportsTo) {
                    info += '<li><a href="#reports"'+'<h3>View Manager</h3>'+'<h5>' + value[j].name + '</h5><p>' + value[j].title + '</p><span class="ui-li-count">' + value[j].reportsTo.length + '</span></a><li>';
                }
            }
                
                for (var i = 0; i < value.length; i++) { 
                if (value[i].id === employeeId) {
                    var reportsTo = value[i].reportsTo
                    info += '<li><a id="callOffice" href="tel:+1' + value[i].officePh + '"><h4>Call Office</h4><p>' + value[i].officePh + '</p></a></li>';
                    info += '<li><a id="callCell" href="tel:+1' + value[i].cell + '"><h4>Call Cell</h4><p>' + value[i].cell + '</p></a></li>';
                    info += '<li><a id="sendEmail" href="mailto:' + value[i].email + '"><h4>Send Email</h4><p>' + value[i].email + '</p></a></li>';
                    
                }
            }
            
        });
                $('#profile').html(detail);     
            $('#info').html(info).listview("refresh");   
    });
        
}));
    

