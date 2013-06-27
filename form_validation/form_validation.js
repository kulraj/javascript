function isEmpty(inputField) {
    "use strict";
    /*global alert: true*/
    if (!inputField.value.trim().length) {
        alert("enter value in " + inputField.id);
        return 0;
    }
    return 1;
}

function isInvalidTimezone(timezone) {
    "use strict";
    //invalid timezone is at index 0
    if (!timezone.selectedIndex) {
        alert("Please select a time zone");
        return 0;
    }
    return 1;
}

function checkMinLengthAbout(about) {
    "use strict";
    if (about.value.length < 50) {
        alert("Please enter some more text in about");
        return 0;
    }
    return 1;
}

function validate(form) {
    "use strict";
    /*jslint browser: true*/
    /*jslint bitwise: true*/
    var flag, i;

    flag = 1;
    for (i = 0; i < 6; i += 1) {
        flag &= isEmpty(form.elements[i]);
        if (i === 3) {
            continue;
        }
    }
    
    flag &= isInvalidTimezone(form.timezone);

    flag &= checkMinLengthAbout(form.about);

    if (!flag) {
        return false;
    }

    if (form.notify.checked) {
        alert("recieve notification");
    } else {
        return false;
    }
}
