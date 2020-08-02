// Author: Jasser Dhaouadi 
// Student ID: 610099
// Homework: maze

var gameOver = false;  // track the user if he/she hits the wall while moving the mouse

window.onload = function() {
    $('#start')[0].onclick = startMazeGameOnClick;
    $('#end')[0].onmouseover = EndMazeGame;
    var boundaries = $('#maze .boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
	
};

function overBoundary() {
    gameOver = true;
    var boundaries = $('#maze .boundary'); 
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i] = $(boundaries[i]);
        boundaries[i].addClass("youlose");
    }
}

function startMazeGameOnClick() {
	$( "#status" ).text( 'Click the "S" to begin.' );
    gameOver = false;
    var boundaries = $("#maze .boundary");
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i] = $(boundaries[i]);
        boundaries[i].removeClass("youlose");
    }
}

function EndMazeGame() {
    if(gameOver) {
        alert("Sorry, you lost. :[");
		$( "#status" ).text( "You lose" );
    } else {
        alert("You win! :]");
		$( "#status" ).text( "You win" );
    }
}