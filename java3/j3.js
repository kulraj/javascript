var table;
var row;
var cell;
var textbox;
var label;
var save;
var text, text1;
var count;
var maxrows;
var edit;
var del;
var save;
var index;


function initialize() {
    "use strict";
    /*jslint browser:true */
    var i;
    table = document.getElementById("table");
    count = 0;
    maxrows = 20;
    cell = [];
    for (i = 0; i < maxrows; i += 1) {
        cell[i] = new Array(3);
    }
    textbox = [];
    for (i = 0; i < maxrows; i += 1) {
        textbox[i] = new Array(2);
    }
    row = [];
    text = [];
    text1 = [];
    edit = [];
    del = [];
    save = [];
    label = [];
    for (i = 0; i < maxrows; i += 1) {
        label[i] = new Array(2);
    }


}

function editrow(rowid) {
    "use strict";
    /*jslint browser:true */
    var countlocal;
    countlocal = parseInt(rowid, 10);
    textbox[countlocal][0].value = text[countlocal].nodeValue;
    cell[countlocal][0].replaceChild(textbox[countlocal][0], label[countlocal][0]);
    cell[countlocal][1].replaceChild(textbox[countlocal][1], label[countlocal][1]);
    save[countlocal] = document.createElement("input");
    save[countlocal].type = "button";
    save[countlocal].value = "Add";
    save[countlocal].setAttribute("onclick", "saverow(this.parentNode.parentNode.id);");
    while (cell[countlocal][2].firstChild) {
        cell[countlocal][2].removeChild(cell[countlocal][2].firstChild);
    }
    cell[countlocal][2].appendChild(save[countlocal]);
}

function deleterow(rowid) {
    "use strict";
    var countlocal;
    countlocal = parseInt(rowid, 10);
    while (row[countlocal].firstChild) {
        row[countlocal].removeChild(row[countlocal].firstChild);
    }
    table.removeChild(row[countlocal]);
}

function saverow(rowid) {
    "use strict";
    var countlocal;
    countlocal = parseInt(rowid, 10);
    label[countlocal][0] = document.createElement("label");
    text[countlocal] = label[countlocal][0].appendChild(document.createTextNode(""));
    text[countlocal].nodeValue = textbox[countlocal][0].value;
    cell[countlocal][0].replaceChild(label[countlocal][0], textbox[countlocal][0]);
    label[countlocal][1] = document.createElement("label");
    text1[countlocal] = label[countlocal][1].appendChild(document.createTextNode(""));
    text1[countlocal].nodeValue = textbox[countlocal][1].value;
    cell[countlocal][1].replaceChild(label[countlocal][1], textbox[countlocal][1]);
    cell[countlocal][2].removeChild(save[countlocal]);
    edit[countlocal] = cell[countlocal][2].appendChild(document.createElement("label"));
    edit[countlocal].setAttribute("onclick", "editrow(this.parentNode.parentNode.id)");
    edit[countlocal].appendChild(document.createTextNode("Edit"));
    cell[countlocal][2].appendChild(document.createTextNode("/"));
    del[countlocal] = cell[countlocal][2].appendChild(document.createElement("label"));
    del[countlocal].setAttribute("onclick", "deleterow(this.parentNode.parentNode.id)");
    del[countlocal].appendChild(document.createTextNode("delete"));
}

function addrow() {
    "use strict";
    /*jslint browser:true */
    var j;
    row[count] = document.createElement("tr");
    for (j = 0; j < 2; j += 1) {
        cell[count][j] = document.createElement("td");
        textbox[count][j] = cell[count][j].appendChild(document.createElement("input"));
        row[count].appendChild(cell[count][j]);
    }
    cell[count][2] = row[count].appendChild(document.createElement("td"));
    save[count] = cell[count][2].appendChild(document.createElement("input"));
    save[count].type = "button";
    save[count].value = "Add";
    save[count].setAttribute("onclick", "saverow(this.parentNode.parentNode.id);");
    row[count].id = count;
    table.appendChild(row[count]);
    count += 1;
}
