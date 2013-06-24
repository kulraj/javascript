function modifyLists(sourcelist, targetlist) {
    "use strict";
    /*jslint browser: true*/
    var x;
    for (x = 0; x <= sourcelist.length; x += 1) {
        if (sourcelist[x].selected) {
            targetlist.appendChild(sourcelist[x]); //move country from sourcelist to targetlist
            x -= 1;
        }
    }
}

function shiftCountries(choice) {
    "use strict";
    var firstlist, secondlist;
    firstlist = document.getElementById("countriesfirstlist");
    secondlist = document.getElementById("countriessecondlist");

    if (!choice) {
        modifyLists(firstlist, secondlist);
    } else {
        modifyLists(secondlist, firstlist);
    }
}
