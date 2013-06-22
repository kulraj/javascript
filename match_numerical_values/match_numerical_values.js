function checkNumber() {
    "use strict";
    /*jslint browser: true*/
    var form, number, result;
    form = document.getElementById("form");
    number = document.getElementById("score");
    result = document.getElementById("result");

    result.value = !isNaN(number.value);

    if (!isNaN(number.value)) {
        form.submit();
    }
}
