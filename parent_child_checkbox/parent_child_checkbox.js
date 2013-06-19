function initialize() {
    "use strict";
    /*jslint browser: true*/
    document.getElementById("colors").checked = false;
    document.getElementById("drinks").checked = false;
    document.getElementById("movies").checked = false;
    document.getElementById("bikes").checked = false;
}

function showHide(parent) {
    "use strict";
    /*jslint browser: true*/
    var i, child, block, length;
    child = document.getElementsByClassName(parent.id);
    block = document.getElementById(parent.id + "div");
    length = child.length;
    if (parent.checked) {
        for (i = 0; i < length; i += 1) {
            child[i].checked = true;
        }
        block.style.display = "inline";
        block.scrollIntoView();
    } else {
        for (i = 0; i < length; i += 1) {
            child[i].checked = false;
        }
        block.style.display = "none";
    }
}

