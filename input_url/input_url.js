var url;

function openUrl() {
    "use strict";
    /*jslint browser: true*/
    window.open(url, "mywindow", "width=400px,height=450px");
}

function urlInput() {
    "use strict";
    /*global prompt: true*/
    /*global alert: true*/
    var i, flag = 0;
    url = prompt("enter url");
    if (url === null) {
        alert("empty url");
        urlInput();
    }
    for (i = 0; i <  url.length; i += 1) {
        if (url[i] !== " ") {
            flag = 1;
        }
    }
    if (!flag) {
        alert("empty url");
        urlInput();
    }
}


function initialize() {
    "use strict";
    urlInput();
    openUrl();
}
