var url;

function openUrl() {
    "use strict";
    /*jslint browser: true*/
    window.open(url, "mywindow", "width=400px,height=450px, menubar=0, scrollbars=no, status=0, titlebar=0,toolbar=0",true);
}

function urlInput() {
    "use strict";
    /*global prompt: true*/
    /*global alert: true*/

    url = prompt("enter url");
    if (url === null || !url.trim().length) {
        alert("empty url");
        urlInput();
    }
}


function initialize() {
    "use strict";
    urlInput();
    openUrl();
}
