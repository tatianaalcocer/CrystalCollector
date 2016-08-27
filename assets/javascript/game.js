$(document).ready(function(){


// Generate a random number, store it in a variable
var cell1 = Math.floor(Math.random() * 12) + 1; 
var cell2 = Math.floor(Math.random() * 12) + 1;
var cell3 = Math.floor(Math.random() * 12) + 1;
var cell4 = Math.floor(Math.random() * 12) + 1;

var score = 0;
var wins = 0;
var losses = 0;


// FUNCTIONS: 
function updateScore(score, number){
	return score + number;
}

// On click of crystals cell 1: 
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

 	// Add the value of cell1 to var score
 	score = updateScore(score, amount);

    // Then dump the random number into our active-score div. 
    $('#active-score').html("Active Score: " + score);

    console.log("cell1: " + cell1);
    console.log("score: " + score);
})



























}) // END OF DOCUMENT READY FUNCTION