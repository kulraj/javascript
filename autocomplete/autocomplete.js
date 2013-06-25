var suggestednames,
    nametextbox,
    namelist;


function setVisible(value) {
    "use strict";
    suggestednames.style.visibility = value;
}

var highlightName = function() {
    "use strict";
    this.style.background = "blue";
    this.style.color = "white";
};

var unHighlightName = function() {
    "use strict";
    this.style.background = "white";
    this.style.color = "black";
};

var selectName = function () {
    "use strict";
    nametextbox.value = this.firstChild.nodeValue;
    setVisible("hidden");
};

function addNameToSuggestList(name) {
    "use strict";
    /*jslint browser: true*/
    var namebox, nametext;
    namebox = document.createElement("div");
    nametext = document.createTextNode(name);
    namebox.appendChild(nametext);
    namebox.onmouseover = highlightName;
    namebox.onmouseout = unHighlightName;
    namebox.onclick = selectName;
    suggestednames.appendChild(namebox);
}

function clearNames() {
    "use strict";
    while (suggestednames.firstChild) {
        suggestednames.removeChild(suggestednames.firstChild);
    }
    setVisible("hidden");
}

function checkName() {
    "use strict";
    var i;
    clearNames();

    for (i = 0; i < namelist.length; i += 1) {
        if (namelist[i].name.toUpperCase().indexOf(nametextbox.value.toUpperCase()) === 0) {
            addNameToSuggestList(namelist[i].name);
        }
    }
    setVisible("visible");
}

function initialize() {
    "use strict";
    /*jslint browser: true*/
    var JSONnamelist, jsontext;

    JSONnamelist = {"list": [
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

    nametextbox = document.getElementById("nametextbox");
    suggestednames = document.getElementById("suggestednames");

    setVisible("hidden");

    jsontext = JSON.stringify(JSONnamelist.list);
    namelist = JSON.parse(jsontext);
}
