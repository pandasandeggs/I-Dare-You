// const score = 0
// const teamScore = document.getElementById("scoreboard");

// Index.html 

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener('click', function() {
	window.location = "teams.html";
});

// Teams.html

const teamSubmit = document.getElementById("submit-button");
teamSubmit.addEventListener('click', function() {
	const teamNumber = document.getElementById("team-form").value;
	createScoreboard(teamNumber);
	window.location = "dares.html";
})

// Dares.html


// Game.html

function createScoreboard(integer) {
	console.log(integer);
}

// Rules.html
