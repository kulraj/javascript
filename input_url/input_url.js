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

    url = prompt("enter url");
    if (url === null) {
        alert("empty url");
        urlInput();
    }

    if (!url.trim().length) {
        alert("empty url");
        urlInput();
    }
}


function initialize() {
    "use strict";
    urlInput();
    openUrl();
}
