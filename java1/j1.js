var colours;
var call1;
var cnone;
var d1;
var d2;
var d3;
var d4;
var d5;

function myfun() {
    "use strict";
    /*jslint browser:true */
    var i;
    colours = document.getElementsByClassName("colour");
    call1 = document.getElementById("call");
    cnone = document.getElementById("cnone");
    d1 = document.getElementById("d1");
    d2 = document.getElementById("d2");
    d3 = document.getElementById("d3");
    d4 = document.getElementById("d4");
    d5 = document.getElementById("d5");
    d1.style.color = "red";
    d2.style.color = "green";
    d3.style.color = "yellow";
    d4.style.color = "blue";
    d5.style.color = "black";
    call1.checked = false;
    cnone.checked = false;
    for (i = 0; i < colours.length; i += 1) {
        colours[i].checked = false;
    }
}




function checkall() {
    "use strict";
    var i;
    cnone.checked = false;
    for (i = 0; i < colours.length; i += 1) {
        colours[i].checked = true;
    }
}

function checknone() {
    "use strict";
    var i;
    call1.checked = false;
    for (i = 0; i < colours.length; i += 1) {
        colours[i].checked = false;
    }
}
