var question_number = 1,
    score = 0,
    timeOutObject,
    questions_array = [],
    results_array = [],
    HtmlStringAnswers = "<ul>",
    timer;

function clearAndNext() {
    "use strict";
    /*global clearInterval: true*/
    clearInterval(timeOutObject);
    question_number += 1;
    nextQuestion();
}

function addQuestionToIncorrectList() {
    "use strict";
    HtmlStringAnswers += "<li>" + questions_array[question_number - 1] + " Correct Answer: " + results_array[question_number - 1] + "</li>";
}

function myTimer(timeLeft) {
    "use strict";
    /*global alert: true*/
    var timeLeftString;
    if (timeLeft < 10) {
        timeLeftString = "0" + timeLeft;
    } else {
        timeLeftString = timeLeft;
    }
    timer.innerHTML = timeLeftString;
    timeLeft -= 1;
    if (timeLeft < 0) {
        alert("timeout! Please try next question");
        addQuestionToIncorrectList();
        clearAndNext();
    }
    return timeLeft;
}


function startTimer() {
    "use strict";
    /*jslint browser: true*/
    timer = document.getElementById("timer");
    var timeLeft = 20;
    timeOutObject = setInterval(function() {timeLeft = myTimer(timeLeft); }, 1000);
}

function checkAnswer() {
    "use strict";
    var answerTextbox;
    if (question_number > 20) {
        return;
    }
    answerTextbox = document.getElementById("answerTextbox");
    if (parseInt(results_array[question_number - 1], 10) === parseInt(answerTextbox.value, 10)) {
        score += 1;
    } else {
        addQuestionToIncorrectList();
    }
    clearAndNext();
}

function displayResult() {
    "use strict";
    var scoreBox, answers;
    scoreBox = document.getElementById("score");
    answers = document.getElementById("answers");
    scoreBox.innerHTML = "score= " + score;
    scoreBox.style.visibility = "visible";
    if (score < 20) {
        answers.style.visibility = "visible";
    }
}

function nextQuestion() {
    "use strict";
    var operand1, operand2, question, choice_for_operator, questionLabel, result, wrong_answer_box;

    questionLabel = document.getElementById("question");
    wrong_answer_box = document.getElementById("answers");

    if (question_number > 20) {
        HtmlStringAnswers += "</ul>";
        wrong_answer_box.innerHTML = HtmlStringAnswers;
        displayResult();
        return;
    }

    operand1 = Math.floor(Math.random() * 20);
    do {
        operand2 = Math.floor(Math.random() * 20);
        choice_for_operator = Math.floor(Math.random() * 4);
    } while (choice_for_operator === 3 && operand2 === 0); //prevent divide by 0 question

    question = "Q" + question_number + ") " + operand1;
    switch (choice_for_operator) {
    case 0:
        question += "+";
        result = operand1 + operand2;
        break;
    case 1:
        question += "-";
        result = operand1 - operand2;
        break;
    case 2:
        question += "*";
        result = operand1 * operand2;
        break;
    case 3:
        question += "/";
        result = Math.floor(operand1 / operand2);
        break;
    }
    question += operand2 + " = ?";
    questionLabel.innerHTML = question;
    questions_array[question_number - 1] = question;
    results_array[question_number - 1] = result;

    startTimer();
}

function initialize() {
    "use strict";
    alert("please enter only the integer part for the division questions' answer. You have 20 questions with 20 seconds per question. Good luck! :-)");
    nextQuestion();
}


