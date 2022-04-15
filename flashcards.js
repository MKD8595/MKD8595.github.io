//Global Vars
let index = 0;
let previousIndex  = 0;
let week = '1';
let filteredData = [];
let indexArr = [];

function generateQuestion() {

    
    //Button
    hideButtons(false);

    //hide old Question
    document.getElementById("questionImg").src = ""

    if(indexArr.length == 0) {

        document.getElementById("counter").innerHTML = "Topic Completed"

    }
    
    //Randomise index
    index = Math.floor(Math.random() * indexArr.length);

    //Generate image string
    document.getElementById("questionImg").src = "img/" + week + "/T" + week + "_Q" + (indexArr[index]) + ".jpg";

    //Hide answer
    document.getElementById("answerImg").src = "";

}

function showAnswer() {

    //Button
    hideButtons(true);

    //Generate image string
    document.getElementById("answerImg").src = "img/" + week + "/T" + week + "_A" + (indexArr[index]) + ".jpg";

    //Delete index to remove duplicate questions
    indexArr.splice(index, 1);
    
    //show counter
    document.getElementById("counter").innerHTML = "Questions Left: " + indexArr.length;

    console.log("index Array: " + indexArr.length);
}

function handleWeek(buttonID) {

    //convert 1 to '1'
    week = buttonID + ""; 

    console.log("Week changed: " + week);

    indexArr = [];

    //Find number of questions - Change these based on number of images
    switch (buttonID) {

        case 1:
            questionsNumber = 16;
        break;

        case 2:
            questionsNumber = 30;
        break;

        case 3:
            questionsNumber = 25;
        break;

    }

    //create array of integers from 0 to number of questions - 1
    for (let i = 0; i < questionsNumber; i++) {

        indexArr[i] = i + 1;

    }

    //show counter
    document.getElementById("counter").innerHTML = "Questions Left: " + indexArr.length;

    //Create question
    generateQuestion();

}

function hideButtons(answerShown) {

    if (answerShown) {

        document.getElementById("nextButton").style.cursor = '';
        document.getElementById("answerButton").style.cursor = 'not-allowed';

    } else {

        document.getElementById("nextButton").style.cursor = 'not-allowed';
        document.getElementById("answerButton").style.cursor = '';

    }

}
