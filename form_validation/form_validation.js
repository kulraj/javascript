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
    var flag;

    flag = 1;
    flag = isEmpty(form.login);
    flag &= isEmpty(form.email);
    flag &= isEmpty(form.name);
    flag &= isInvalidTimezone(form.timezone);
    flag &= isEmpty(form.homepage);
    flag &= isEmpty(form.about);

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
