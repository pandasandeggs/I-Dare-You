document.addEventListener('DOMContentLoaded', () => {
	const dareList = new DareList();
	const newDareForm = document.getElementById("create-dare-form");
	const newDareContent = document.getElementById("dare-content");
	const dareUl = document.getElementById("new-dares");
	const renderApp = () => (dareUl.innerHTML = dareList.renderDares());
	const playGame = document.getElementById("playGameButton");

	newDareForm.addEventListener('submit', (e) => {
		// don't refresh the page
		e.preventDefault();
		dareList.createNewDare(newDareContent.value);
		//reset the dare form
		e.target.reset();
		renderApp();
	});

	playGame.addEventListener('click', function() {
		getDareList(this.dares);
		window.location = "game.html";
	});

});