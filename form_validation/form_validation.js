function isEmpty(inputfield) {
    "use strict";
    /*global alert: true*/
    if (!inputfield.value.trim().length) {
        alert("enter value in " + inputfield.id);
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

function validate() {
    "use strict";
    /*jslint browser: true*/
    /*jslint bitwise: true*/
    var login, email, name, timezone, homepage, about, notify, flag, form;

    form = document.getElementById("form");
    login = document.getElementById("login");
    email = document.getElementById("email");
    name = document.getElementById("name");
    timezone = document.getElementById("timezone");
    homepage = document.getElementById("homepage");
    about = document.getElementById("about");
    notify = document.getElementById("notify");

    flag = 1;
    flag = isEmpty(login);
    flag = flag & isEmpty(email);
    flag = flag & isEmpty(name);
    flag = flag & isInvalidTimezone(timezone);
    flag = flag & isEmpty(homepage);
    flag = flag & isEmpty(about);

    flag = flag & checkMinLengthAbout(about);
    if (!flag) {
        return;
    }

    if (notify.checked) {
        alert("recieve notification");
    }

    form.submit();
}
