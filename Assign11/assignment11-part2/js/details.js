$(document).on("pagebeforeshow", "#details", function () {
    "use strict";
    $('body').on("click", "#results a", function () {
        
        var employeeId = this.lastChild.id;
        var reportsNum = 0;
        var i;
        
        
        //count how many employees report to this person
        for (i = 0; i < employees.length; i++) {
            for (employeeId){
                    if (value.id === value.reportsTo) {
                    reportsNum += 1;
                }
            }
        };
        
        var employeeInfo = "";
        
        $('#profile').empty();
        $('#info').empty();
        
        $.getJSON("data/json.js", function (data) {
            $.each(data, function () {
                var mgrNum = data.employees[employeeId - 1].reportsTo - 1;
                var mgr;
                if (data.employees[mgrNum] === undefined) {
                    mgr = "None";
                } else {
                    mgr = data.employees[mgrNum].name;
                }
            
                $.each(this, function (key, value) {
                    if (employeeId === value.id) {
                        $('#profile').append('<img src="' + value.imagePath + '">' + '<div>' + '<h2>' + value.name + '</h2><p>' + value.title + '</p></div>');
                        employeeInfo += '<li><a id="mgrLink" href="#details"><h3>View Manager</h3><p>' + mgr + '</p></a></li>';
                        employeeInfo += '<li><a id="dirRptsLink" href="#reports"><h3>View Direct Reports</h3><p>' + reportsNum + '</p></a></li>';
                        employeeInfo += '<li><a id="callOffice" href="tel:+1' + value.officePh + '"><h4>Call Office</h4><p>' + value.officeNumber + '</p></a></li>';
                        employeeInfo += '<li><a id="callCell" href="tel:+1' + value.cell + '"><h4>Call Cell</h4><p>' + value.cellNumber + '</p></a></li>';
                        employeeInfo += '<li><a id="sendEmail" href="mailto:' + value.email + '"><h4>Send Email</h4><p>' + value.email + '</p></a></li>';
                
                        $("#info").html(employeeInfo).listview("refresh");
                    }
                });
            });
        });
    });
});
    

