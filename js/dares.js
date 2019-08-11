class Dare {

	constructor(content) {
		this.content = content;
	}

	render() {
		if(this.content){
			return `<li>${this.content}</li>`;
		}
	}

}