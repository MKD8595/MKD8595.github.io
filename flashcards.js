//Global Vars
let index = 0;
let previousIndex  = 0;
let week = '1';
let filteredData = [];
let indexArr = [];

function generateQuestion() {

    if(indexArr.length == 0) {

        return(console.log("Questions completed"));

    }
    
    //Randomise index
    index = Math.floor(Math.random() * indexArr.length);

    //Generate image string
    document.getElementById("questionImg").src = "img/" + week + "/T" + week + "_Q" + (indexArr[index]) + ".jpg";

    //Hide answer
    document.getElementById("answerImg").src = ""

}

function showAnswer() {

    //Generate image string
    document.getElementById("answerImg").src = "img/" + week + "/T" + week + "_A" + (index + 1) + ".jpg";

    //Delete index to remove duplicate questions
    indexArr.splice(index, 1);

    console.log("index Array: " + indexArr);
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
            questionsNumber = 20;
        break;

        case 3:
            questionsNumber = 25;
        break;

    }

    //create array of integers from 0 to number of questions - 1
    for (let i = 0; i < questionsNumber; i++) {

        indexArr[i] = i + 1;

    }

    //Create question
    generateQuestion();

}

