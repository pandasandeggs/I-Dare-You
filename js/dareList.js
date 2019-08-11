class DareList {
	constructor() {
		this.dares = [];
	}

	createNewDare(content) {
		console.log("This is the dare:", content);
		const newDare = new Dare(content);
		this.dares.push(newDare);
		console.log("It should be in an array now:", this.dares)
	}

	renderDares() {
		return this.dares.map((content) => content.render()).join("");
	}

}