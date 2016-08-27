$(document).ready(function(){


// Generate a random number, store it in a variable
var score = 0;
var winCount = 0;
var lossCount = 0;
var scoreGoalMax = 120;
var scoreGoalMin = 19;

var cell1 = Math.ceil(Math.random() * 12); 
var cell2 = Math.ceil(Math.random() * 12);
var cell3 = Math.ceil(Math.random() * 12);
var cell4 = Math.ceil(Math.random() * 12);

var winScore = Math.ceil(Math.random() * scoreGoalMax - scoreGoalMin) + scoreGoalMin;



// FUNCTIONS: 
function updateScore(score, amount){
	return score + amount;
}


function checkWin(winScore, score) {
	
	if (score == winScore) {
		return "win";

	} else if (score > winScore) {
		return "loss";

	} else if (score < winScore) {
		return "continue";
	}
}

function renderRunningScore(winCount, lossCount) {
	$("#running-score").html("WINS: " + winCount + "<br/>" + "LOSSES: " + lossCount);
}


// ON CLICK EVENT OF CRYSTALS CELLS: 
 $(".crystals-cells").on("click", function(event) {

 	var id = event.currentTarget.id;
 	
 	var amount = 0;

 	switch(id) {

 		case "crystals-cell-1": 
 			amount = cell1;
 			break;

 		case "crystals-cell-2": 
 			amount = cell2;
 			break;

 		case "crystals-cell-3":
 			amount = cell3;
 			break;

 		case "crystals-cell-4": 
 			amount = cell4;
 			break;

 		default: 
 			amount = 0;
 			break;
 	}

 	// UPDATE SCORE WITH VALUE OF CELL CLICKED (AMOUNT)
 	score = updateScore(score, amount);

    // UPDATE #ACTIVE SCORE DIV WITH UPDATED SCORE 
    $('#active-score').html("ACTIVE SCORE: " + score);



   	// CHECK FOR WIN
   	// If you won... 
   	if (checkWin(winScore, score) == "win") {
   		console.log("you won");

   		// Increase winCount by 1
   		winCount++;
		renderRunningScore(winCount, lossCount);

   		// Reset score to 0, print new active score
   		score = 0;
   		$('#active-score').html("ACTIVE SCORE: " + score);

   	// If you lose...
   	} else if (checkWin(winScore, score) == "loss") {
   		console.log("you lost");

   		// Increase lossCount by 1
   		lossCount++; 
		renderRunningScore(winCount, lossCount);

   		// Reset the score to 0, print new active score
   		score = 0;
   		$('#active-score').html("ACTIVE SCORE: " + score);

   	// If 'continue', nothing happens 
   	} else if (checkWin(winScore, score) == "continue") {
   		console.log("continue");
   	}


    console.log("score: " + score);
    console.log("winScore: " + winScore);

}) // END OF CLICK EVENT FOR CRYSTALS CELLS



























}) // END OF DOCUMENT READY FUNCTION