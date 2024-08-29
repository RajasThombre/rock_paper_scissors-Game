var choiceBtn = document.querySelectorAll(".choices");

var resultMsgVal = document.getElementById("result-msg");


choiceBtn.forEach((button) => {
    button.addEventListener("click", () => {
        let userChoice = button.getAttribute("id");

        console.log(`${userChoice} was clicked`);
        var compChoice = compChoiceVal();
        console.log(`${compChoice} was clicked`);
        

        play(userChoice, compChoice);





    })
})


function compChoiceVal() {
    var arrChoice = ["rock", "paper", "sissors"];

    var randIndex = Math.floor(Math.random() * 3);

    return arrChoice[randIndex];
}



function play(userChoice, compChoice) {

    if (userChoice === compChoice) {
        resultMsgVal.innerHTML = "It's a Draw !!! Play Again.";
        resultMsgVal.style.backgroundColor = " rgb(43, 46, 68)";
    }
    else {
        var userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            userWin = compChoice === "sissors" ? false : true;

        }
        else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWiner(userWin, userChoice, compChoice);


    }

}
var userScore = 0;
var compScore = 0;

var userScoreVal = document.getElementById("user-score");
var compScoreVal = document.getElementById("comp-score");

var showWiner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        resultMsgVal.innerHTML = `User Win!!! ${userChoice} beats ${compChoice}`;
        resultMsgVal.style.backgroundColor = "green";
        userScoreVal.innerText = userScore;
    }
    else {
        compScore++;
        resultMsgVal.innerHTML = `Computer Win!!! ${compChoice} beats ${userChoice}`;
        resultMsgVal.style.backgroundColor = "red";
        compScoreVal.innerText = compScore;
    }
}