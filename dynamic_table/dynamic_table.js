var table;
var row;
var cell;
var textbox;
var save;
var text, text1;
var count;
var maxrows;
var edit;
var del;
var save;
var label;

function initialize() {
    "use strict";
    /*jslint browser:true */
    var i;
    table = document.getElementById("table");
    count = 0;
    maxrows = 20;
    cell = [];
    row = [];
    text = [];
    text1 = [];
    edit = [];
    del = [];
    save = [];
    label = [];
    textbox = [];
    for (i = 0; i < maxrows; i += 1) {
        label[i] = new Array(2);
        cell[i] = new Array(3);
        textbox[i] = new Array(2);
    }
}

function addSaveButton(countlocal) {
    "use strict";
    /*jslint browser:true */
    save[countlocal] = document.createElement("input");
    save[countlocal].type = "button";
    save[countlocal].value = "Add";
    save[countlocal].setAttribute("onclick", "saveRow(this.parentNode.parentNode);");
    cell[countlocal][2].appendChild(save[countlocal]);
}

function replaceTextboxWithLabel(row, column) {
    "use strict";
    label[row][column] = document.createElement("label");
    text[row] = label[row][column].appendChild(document.createTextNode(""));
    text[row].nodeValue = textbox[row][column].value;
    cell[row][column].replaceChild(label[row][column], textbox[row][column]);
}

function editRow(row) {
    "use strict";
    /*jslint browser:true */
    var countlocal;
    countlocal = row.dataset.index;
    cell[countlocal][0].replaceChild(textbox[countlocal][0], label[countlocal][0]);
    cell[countlocal][1].replaceChild(textbox[countlocal][1], label[countlocal][1]);
    while (cell[countlocal][2].firstChild) {
        cell[countlocal][2].removeChild(cell[countlocal][2].firstChild);
    }
    addSaveButton(countlocal);
}

function deleteRow(rowlocal) {
    "use strict";
    var countlocal;
    countlocal = rowlocal.dataset.index;
    while (row[countlocal].firstChild) {
        row[countlocal].removeChild(row[countlocal].firstChild);
    }
    table.removeChild(row[countlocal]);
}

function saveRow(row) {
    "use strict";
    var countlocal;
    countlocal = row.dataset.index;
    replaceTextboxWithLabel(countlocal, 0);
    replaceTextboxWithLabel(countlocal, 1);

    //replace save button with edit/delete links
    cell[countlocal][2].removeChild(save[countlocal]);
    edit[countlocal] = cell[countlocal][2].appendChild(document.createElement("label"));
    edit[countlocal].setAttribute("onclick", "editRow(this.parentNode.parentNode)");
    edit[countlocal].appendChild(document.createTextNode("Edit"));
    cell[countlocal][2].appendChild(document.createTextNode("/"));
    del[countlocal] = cell[countlocal][2].appendChild(document.createElement("label"));
    del[countlocal].setAttribute("onclick", "deleteRow(this.parentNode.parentNode)");
    del[countlocal].appendChild(document.createTextNode("delete"));
}

function addRow() {
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
    row[count].setAttribute("data-index", count);
    addSaveButton(count);
    table.appendChild(row[count]);
    count += 1;
}
