function modifyLists(sourceList, targetList) {
    "use strict";
    /*jslint browser: true*/
    var x;
    for (x = 0; x <= sourceList.length; x += 1) {
        if (sourceList[x].selected) {
            targetList.appendChild(sourceList[x]); //move country from sourcelist to targetlist
            x -= 1;
        }
    }
}

function shiftCountries(leftToRight) {
    "use strict";
    var leftList, rightList, sourceList, targetList;
    leftList = document.getElementById("countriesLeft");
    rightList = document.getElementById("countriesRight");

    if (leftToRight) {
        sourceList = leftList;
        targetList = rightList;
    } else {
        sourceList = rightList;
        targetList = leftList;
    }

    modifyLists(sourceList, targetList);
}
