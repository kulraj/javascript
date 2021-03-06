var suggestedNames,
    nameTextbox,
    nameList;

function setVisible(value) {
    "use strict";
    suggestedNames.style.visibility = value;
}

var selectName = function () {
    "use strict";
    nameTextbox.value = this.firstChild.nodeValue;
    setVisible("hidden");
};

function addNamesToSuggestList(array_names) {
    "use strict";
    /*jslint browser: true*/
    var nameBox, nameText, i;
    for (i = 0; i < array_names.length; i += 1) {
        nameBox = document.createElement("div");
        nameText = document.createTextNode(array_names[i]);
        nameBox.appendChild(nameText);
        nameBox.onclick = selectName;
        suggestedNames.appendChild(nameBox);
    }
}

function clearNames() {
    "use strict";
    while (suggestedNames.firstChild) {
        suggestedNames.removeChild(suggestedNames.firstChild);
    }
    setVisible("hidden");
}

function checkName() {
    "use strict";
    var i, array_names, count = 0;
    clearNames();
    array_names = [];
    for (i = 0; i < nameList.length; i += 1) {
        if (nameList[i].name.toUpperCase().indexOf(nameTextbox.value.toUpperCase()) === 0) {
            array_names[count] = nameList[i].name;
            count += 1;
        }
    }
    addNamesToSuggestList(array_names);
    if (count > 0) {
        setVisible("visible");
    }
}

function initialize() {
    "use strict";
    /*jslint browser: true*/
    var JSONnameList, jsonText;

    JSONnameList = {"list": [
        {"name": "Luigi Damiano"},
        {"name": "Zenith Coboro"},
        {"name": "Zig Ziglar"},
        {"name": "Steve Costner"},
        {"name": "Bill Grazer"},
        {"name": "Timothy Frazer"},
        {"name": "Boris Becker"},
        {"name": "Glenn Gladwich"},
        {"name": "Jim Jackson"},
        {"name": "Aaron Kabin"},
        {"name": "Roy Goldwin"},
        {"name": "Jason Goldberg"},
        {"name": "Tim Ferris"},
        {"name": "Buck Singham"},
        {"name": "Malcom Gladwell"},
        {"name": "Joy Rabura"},
        {"name": "Vid Luther"},
        {"name": "Tom Glicken"},
        {"name": "Ray Baxter"},
        {"name": "Ari Kama"},
        {"name": "Kenichi Suzuki"},
        {"name": "Rick Olson"} ]
        };

    nameTextbox = document.getElementById("nameTextbox");
    suggestedNames = document.getElementById("suggestedNames");

    setVisible("hidden");

    jsonText = JSON.stringify(JSONnameList.list);
    nameList = JSON.parse(jsonText);
}
