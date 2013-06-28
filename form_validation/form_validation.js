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
    var flag = 1;

    for (var i = 0; i < 6; i += 1) {
        flag &= isEmpty(form.elements[i]);
    }

    flag &= isInvalidTimezone(form.timezone);

    flag &= checkMinLengthAbout(form.about);

    if (form.notify.checked && flag) {
        return true;
    } else {
        alert("recieve notification");
        return false;
    }
}
