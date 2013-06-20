function modifyLists(sourcelist, targetlist) {
    "use strict";
    /*jslint browser: true*/
    var x, country;
    for (x = 0; x <= sourcelist.length; x += 1) {
        if (sourcelist[x].selected) {
            //add to targetlist
            country = document.createElement("option");
            country.value = sourcelist[x].value;
            country.appendChild(document.createTextNode(sourcelist[x].value));
            targetlist.appendChild(country);
            //remove from sourcelist
            sourcelist[x].parentNode.removeChild(sourcelist[x]);
            x -= 1;
        }
    }
}

function shiftCountries(choice) {
    "use strict";
    var sourcelist, targetlist;
    if (!choice) {
        sourcelist = document.getElementById("countriesfirst");
        targetlist = document.getElementById("countriessecond");
    } else {
        targetlist = document.getElementById("countriesfirst");
        sourcelist = document.getElementById("countriessecond");
    }

    modifyLists(sourcelist, targetlist);
}
