var colours;

function initialize() {
    "use strict";
    /*jslint browser:true */
    var i;
    colours = document.getElementsByClassName("colour");
    for (i = 0; i < colours.length; i += 1) {
        colours[i].checked = false;
    }
}

function check(checked) {
    "use strict";
    var i;
    for (i = 0; i < colours.length; i += 1) {
        colours[i].checked = checked;
    }
}
