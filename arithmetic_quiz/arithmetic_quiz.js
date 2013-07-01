var question_number = 0,
    score = 0,
    timeOutObject,
    HtmlStringAnswers = "<ul>",
    timer,
    json_questions = [],
    operator;

function clearAndNext() {
    "use strict";
    /*global clearInterval: true*/
    clearInterval(timeOutObject);
    question_number += 1;
    nextQuestion();
}

function generateQuestionString(local_question_number) {
    "use strict";
    return ("Q" + parseInt(local_question_number + 1, 10) + ") " + json_questions[local_question_number].operand1 + " " + json_questions[local_question_number].operator + " " + json_questions[local_question_number].operand2 + " = ");
}

function addQuestionToIncorrectList() {
    "use strict";
    HtmlStringAnswers += "<li>" + generateQuestionString(question_number);//question
    HtmlStringAnswers +=  json_questions[question_number].result + "</li>";//answer
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
    timeOutObject = setInterval(function() {timeLeft = myTimer(timeLeft); }, 1000);// timer for 20 seconds
}

function checkAnswer() {
    "use strict";
    var answerTextbox;
    if (question_number >= 20) {
        return;
    }
    answerTextbox = document.getElementById("answerTextbox");
    if (parseInt(json_questions[question_number].result, 10) === parseInt(answerTextbox.value, 10)) {
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
    var question, questionLabel, wrong_answer_box;

    questionLabel = document.getElementById("question");
    wrong_answer_box = document.getElementById("answers");

    if (question_number >= 20) {
        HtmlStringAnswers += "</ul>";
        wrong_answer_box.innerHTML = HtmlStringAnswers;
        displayResult();
        return;
    }
    question = generateQuestionString(question_number);
    questionLabel.innerHTML = question;
    startTimer();
}

function generateOperand() {
    "use strict";
    return Math.floor(Math.random() * 20);
}

function generateOperatorChoice(operand2) {
    "use strict";
    var choice_for_operator;
    do {
        choice_for_operator = Math.floor(Math.random() * 4);
    } while (operand2 === 0 && choice_for_operator === 3); //prevent divide by 0 question
    return choice_for_operator;
}

function generateResult(operand1, operand2, choice_for_operator) {
    "use strict";
    var result;
    switch (choice_for_operator) {
    case 0:
        operator = "+";
        result = operand1 + operand2;
        break;
    case 1:
        operator = "-";
        result = operand1 - operand2;
        break;
    case 2:
        operator = "*";
        result = operand1 * operand2;
        break;
    case 3:
        operator = "/";
        result = Math.floor(operand1 / operand2);
        break;
    }
    return result;
}

function generateQuestions() {
    "use strict";
    var operand1, operand2, result, choice_for_operator, i;

    for (i = 0; i < 20; i += 1) {
        operand1 = generateOperand();
        operand2 = generateOperand();
        choice_for_operator = generateOperatorChoice(operand2);
        result = generateResult(operand1, operand2, choice_for_operator); //choice is also converted to operator

        json_questions.push({"operand1": operand1, "operand2": operand2, "operator": operator, "result": result});
    }
}


function initialize() {
    "use strict";
    alert("please enter only the integer part for the division questions' answer. You have 20 questions with 20 seconds per question. Good luck! :-)");
    generateQuestions();
    nextQuestion();
}
