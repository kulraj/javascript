var days, clear_all;

function initialize() {
    "use strict";
    /*jslint browser:true */
    days = document.getElementsByClassName("day");
    clear_all = document.getElementById("checknone");
}

function check_none() {
    "use strict";
    var index;
    if (clear_all.checked) {
        for (index = 0; index < days.length; index += 1) {
            days[index].checked = false;
        }
    }
}

function check(day_clicked) {
    "use strict";
    if (!day_clicked.checked) {
        return;
    }
    clear_all.checked = false;
    var index, checked_count = 0, message = "Only 3 days can be selected. You have already selected ";
    for (index = 0; index < days.length; index += 1) {
        if (days[index].checked) {
            checked_count += 1;
        }
    }
    if (checked_count > 3) {
        day_clicked.checked = false;
        checked_count = 0;
        for (index = 0; index < days.length; index += 1) {
            if (days[index].checked) {
                switch (checked_count) {
                case 0:
                    break;
                case 1:
                    message += ", ";
                    break;
                case 2:
                    message += " and ";
                    break;
                }
                checked_count += 1;
                message += days[index].value;
            }
        }
        /*global alert */
        alert(message);
    }
}
