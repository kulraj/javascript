var login, email, name, timezone, homepage, about, notify;

function isEmpty(input) {
    "use strict";
    /*global alert: true*/
    if (!input.value.trim().length) {
        alert("enter value in " + input.id);
        return 0;
    }
    return 1;
}

function validateEmail() {
    "use strict";
    var expression = "[a-zA-Z]+[0-9]*[a-zA-Z]*@[a-zA-Z]+[0-9]*[a-zA-Z]*[.][a-z]{2,4}";
    if (!email.value.match(expression)) {
        alert("Please enter valid email");
        return 0;
    }
    return 1;
}


function validateName() {
    "use strict";
    var i, char;
    for (i = 0; i < name.value.length; i += 1) {
        char = name.value.charAt(i);
        if ((char < 'A' || char > 'z' || (char > 'Z' && char < 'a')) && char !== ' ') {
            alert("Enter valid name");
            return 0;
        }
    }
    return 1;
}

function isInvalidTimezone() {
    "use strict";
    //invalid timezone is at index 0
    if (!timezone.selectedIndex) {
        alert("Please select a time zone");
        return 0;
    }
    return 1;
}

function validateHomePage() {
    "use strict";
    var expression = "[a-zA-Z0-9]+[.][a-zA-Z]{2,4}";
    if (!homepage.value.match(expression)) {
        alert("please enter valid url");
        return 0;
    }
    return 1;
}

function checkMinLengthAbout() {
    "use strict";
    if (about.value.length < 50) {
        alert("Please enter some more text in about");
        return 0;
    }
    return 1;
}

function validate() {
    "use strict";
    var flag = 1;
    flag = isEmpty(login);
    if (!flag) {
        return;
    }

    flag = isEmpty(email);
    if (!flag) {
        return;
    }

    flag = validateEmail();
    if (!flag) {
        return;
    }

    flag = isEmpty(name);
    if (!flag) {
        return;
    }

    flag = validateName();
    if (!flag) {
        return;
    }

    flag = isInvalidTimezone();
    if (!flag) {
        return;
    }

    flag = isEmpty(homepage);
    if (!flag) {
        return;
    }

    flag = validateHomePage();
    if (!flag) {
        return;
    }

    flag = isEmpty(about);
    if (!flag) {
        return;
    }

    flag = checkMinLengthAbout();

    if (!flag) {
        return;
    }

    if (notify.checked) {
        alert("recieve notification");
    }
}

function initialize() {
    "use strict";
    /*jslint browser: true*/
    login = document.getElementById("login");
    email = document.getElementById("email");
    name = document.getElementById("name");
    timezone = document.getElementById("timezone");
    homepage = document.getElementById("homepage");
    about = document.getElementById("about");
    notify = document.getElementById("notify");
}
