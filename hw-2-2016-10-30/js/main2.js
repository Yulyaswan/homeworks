var score1 = 0,
   score2 = 0,
   answer1 = null;
   answer2 = null;
   result = null;

function getRandomNumberFunction(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// player1

do {

   var answer1 = prompt("P1, do you want to play? (Y or N)").toLowerCase();



    if(answer1 !== "y" && answer1 !== "n") {

        alert("Please answer Y or N");

    } else if(answer1 === "y") {

        score1 += getRandomNumberFunction(1, 11);

        if(score1 <= 21) {

            answer1 = null;

            alert(`Your score is ${score1}`);

        } else {

            answer1 = "n";

            alert("Player1 loose the game.");
        }
    } 
} while(answer1 !== 'n' || answer1 > 21)

// player2
do {

   var answer2 = prompt("P2, do you want to play? (Y or N)").toLowerCase();



    if(answer2 !== "y" && answer2 !== "n") {

        alert("Please answer Y or N");

    } else if(answer2 === "y") {

        score2 += getRandomNumberFunction(1, 11);

        if(score2 <= 21) {

            answer2 = null;

            alert(`Your score is ${score2}`);

        } else {

            answer2 = "n";

            alert("Player2 loose the game.");
        }
    } 
} while(answer2 !== 'n' || answer2 > 21)

//result

if(score1 === score2) {
  alert("Friendship!");
} else if(score1 < score2) {
   alert("The pleyer2 won!"); 
} else {
  alert("The pleyer1 won!");
}

// almost the same as for the first player
