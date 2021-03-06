function modifyLists(sourceList, targetList) {
    "use strict";
    /*jslint browser: true*/
    while (sourceList.selectedIndex >= 0) {
        targetList.appendChild(sourceList[sourceList.selectedIndex]);
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
