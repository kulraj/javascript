var firstname, lastname;

function displayName() {
    "use strict";
    /*jslint browser: true*/
    /*global alert: true*/
    var container, fullname;
    fullname = firstname + " " + lastname;
    alert("Welcome " + fullname);
    container = document.getElementById("container");
    container.innerHTML = fullname;
}

function isEmpty(name) {
    "use strict";
    return !(name !== null && name.trim().length);
}


function enterName(count) {
    "use strict";
    /*global prompt: true*/
    var name;
    if (!count) {
        name = prompt("enter first name");
        firstname = name;
    } else {
        name = prompt("enter last name");
        lastname = name;
    }

    //name = name.trim();
    if (isEmpty(name)) {
        alert("Please enter some text");
        enterName(count);
    }
}


function initialize() {
    "use strict";
    enterName(0);
    enterName(1);
    displayName();
}
