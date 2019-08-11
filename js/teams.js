const teamSubmit = document.getElementById("submit-button");
teamSubmit.addEventListener('click', function() {
	const teamNumber = document.getElementById("team-form").value;
	createScoreboard(teamNumber);
	window.location = "dares.html";
})