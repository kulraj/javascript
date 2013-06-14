var sun;
var mon;
var tues;
var wed;
var thur;
var fri;
var sat;
var days;
var cnon;

function myfun() {
    "use strict";
    /*jslint browser:true */
    days = document.getElementsByClassName("day");
    cnon = document.getElementById("cnone");
}

function checknone() {
    "use strict";
    var i;
    for (i = 0; i < days.length; i += 1) {
        days[i].checked = false;
    }
}

function check(day1) {
    "use strict";
    cnon.checked = false;
    var i, count, str;
    count = 0;
    for (i = 0; i < days.length; i += 1) {
        if (days[i].checked) {
            count += 1;
        }
    }
    if (count <= 3) {
        return;
    }
    day1.checked = false;
    count = 0;
    str = "Only 3 days can be selected. You have already selected ";
    for (i = 0; i < days.length; i += 1) {
        if (days[i].checked) {
            switch (count) {
            case 0:
                break;
            case 1:
                str += ", ";
                break;
            case 2:
                str += " and ";
                break;
            }
            count += 1;
            str += days[i].value;
        }
    }
    /*global alert */
    alert(str);
}
