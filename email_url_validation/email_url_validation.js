function isEmpty(inputField) {
    "use strict";
    /*global alert: true*/
    if (!inputField.value.trim().length) {
        alert("enter value in " + inputField.id);
        return 0;
    }
    return 1;
}

function validateEmail(email) {
    "use strict";
    var regex_for_email = /^(\w[.]?)*\w+[@](\w[.]?)*\w+[.][a-z]{2,4}$/i;
    if (!email.value.match(regex_for_email)) {
        alert("Please enter valid email");
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

function validateHomePage(homepage) {
    "use strict";
    var regex_for_homepage = /^(https|ftp|http)?([:][/][/])?(\w+[.-]?)*\w+[.][a-z]{2,4}([/]|$)/i;

    if (!homepage.value.match(regex_for_homepage)) {
        alert("please enter valid url");
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
    flag &= validateEmail(form.email);
    flag &= isEmpty(form.name);
    flag &= isInvalidTimezone(form.timezone);
    flag &= isEmpty(form.homepage);
    flag &= validateHomePage(form.homepage);
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
