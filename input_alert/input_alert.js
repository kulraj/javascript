var namebox,
    fullname,
    container,
    name,
    firstname,
    lastname;

function displayName() {
    "use strict";
    /*jslint browser: true*/
    /*global alert: true*/
    alert("welcome " + firstname + " " + lastname);
    namebox = document.createElement("label");
    fullname = document.createTextNode(firstname + " " + lastname);
    namebox.appendChild(fullname);
    container = document.getElementById("container");
    container.appendChild(namebox);
}

function enterName(count) {
    "use strict";
    /*global prompt: true*/
    var i, flag = 0;
    if (!count) {
        name = prompt("enter first name");
    } else {
        name = prompt("enter last name");
    }
    if (name === null) {
        enterName(count);
    }
    for (i = 0; i <  name.length; i += 1) {
        if (name[i] !== " ") {
            flag = 1;
        }
    }
    if (!flag) {
        enterName(count);
    }
    if (!count) {
        firstname = name;
    } else {
        lastname = name;
    }
}

function initialize() {
    "use strict";
    enterName(0);
    enterName(1);
    displayName();
}
