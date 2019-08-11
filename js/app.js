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
let dareList = []

function createNewDare() {
	const dare = document.getElementById("dare");
	dareList.push(dare)
};

const dareSubmit = document.getElementById("saveDareButton");
dareSubmit.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(e);
})

// Game.html

function createScoreboard(integer) {
	console.log(integer);
}

// Rules.html
