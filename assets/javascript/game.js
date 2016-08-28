$(document).ready(function(){

// TO DO: 
// write a function for updating the active scores



// Generate a random number, store it in a variable
var score = 0;
var winCount = 0;
var lossCount = 0;
var scoreGoalMax = 120;
var scoreGoalMin = 19;

var cell1 = 0;
var cell2 = 0;
var cell3 = 0;
var cell4 = 0;

var winScore = 0;



// FUNCTIONS: 

function randomizeCells() {
	cell1 = Math.ceil(Math.random() * 12); 
	cell2 = Math.ceil(Math.random() * 12);
	cell3 = Math.ceil(Math.random() * 12);
	cell4 = Math.ceil(Math.random() * 12);
	$("#crystal-cells__number1").html(cell1);
	$("#crystal-cells__number2").html(cell2);
	$("#crystal-cells__number3").html(cell3);
	$("#crystal-cells__number4").html(cell4);
	console.log(cell1, cell2, cell3, cell4);
}

function randomizeWinScore() {
	winScore = Math.ceil(Math.random() * scoreGoalMax - scoreGoalMin) + scoreGoalMin;
	$("#win-score").html("WINNING NUMBER: " + "<br/>" + winScore);
}


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

function clearNumber() {
	console.log($(".crystal-cells__number"))
	$(".crystal-cells__number").removeClass("crystal-cells__number--revealed");
}

function initializeGame() {
	randomizeWinScore();
	randomizeCells();
	clearNumber();
}


// SET THE WIN SCORE AND VALUE OF THE CRYSTAL CELLS: 
initializeGame();


// ON CLICK EVENT OF CRYSTALS CELLS: 

 $(".crystals-cells").on("click", function(event) {

 	var id = event.currentTarget.id;
 	
 	var amount = 0;

 	switch(id) {

 		case "crystals-cell-1": 
 			amount = cell1;
 			$("#crystal-cells__number1").addClass("crystal-cells__number--revealed");
 			break;

 		case "crystals-cell-2": 
 			amount = cell2;
 			$("#crystal-cells__number2").addClass("crystal-cells__number--revealed");
 			break;

 		case "crystals-cell-3":
 			amount = cell3;
 			$("#crystal-cells__number3").addClass("crystal-cells__number--revealed");
 			break;

 		case "crystals-cell-4": 
 			$("#crystal-cells__number4").addClass("crystal-cells__number--revealed");
 			amount = cell4;
 			break;

 		default: 
 			amount = 0;
 			break;
 	}

 	// UPDATE SCORE WITH VALUE OF CELL CLICKED (AMOUNT)
 	score = updateScore(score, amount);

 	//UPDATE WIN-NUMBER ON SCREEN: 
 	$("#win-score").html("WINNING NUMBER: " + "<br/>" + winScore);


    // UPDATE #ACTIVE SCORE DIV WITH UPDATED SCORE 
    $('#active-score').html("ACTIVE SCORE: " + "<br/>" + score);



   	// CHECK FOR WIN
   	// If you won... 
   	if (checkWin(winScore, score) == "win") {
   		console.log("you won");

   		// Increase winCount by 1
   		winCount++;
		renderRunningScore(winCount, lossCount);

   		// Reset score to 0, print new active score
   		score = 0;
   		$('#active-score').html("ACTIVE SCORE: " + "<br/>" + score);

   		//Randomize cells and winScore, clear numbers
   		initializeGame();


   	// If you lose...
   	} else if (checkWin(winScore, score) == "loss") {
   		console.log("you lost");

   		// Increase lossCount by 1
   		lossCount++; 
		renderRunningScore(winCount, lossCount);

   		// Reset the score to 0, print new active score, randomize cells
   		score = 0;
   		$('#active-score').html("ACTIVE SCORE: " + "<br/>" + score);
   		
   		//Randomize cells and winScore, clear numbers
   		initializeGame();

   	// If 'continue', nothing happens 
   	} else if (checkWin(winScore, score) == "continue") {
   		console.log("continue");
   	}


    console.log("score: " + score);
    console.log("winScore: " + winScore);

}) // END OF CLICK EVENT FOR CRYSTALS CELLS



























}) // END OF DOCUMENT READY FUNCTION