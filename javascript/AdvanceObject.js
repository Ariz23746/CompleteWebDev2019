class Player {

	constructor(name,type) {
		console.log(this);
		this.name = name;
		this.type = type;

	}
	introduce() {
		console.log(`Hi my name is ${this.name} and my type is ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name,type) {
		super(name, type)
	}

	play() {
		console.log(`wooooo I'm a ${this.type}`);
	}
}

player1 = new Player('shally','healer');

// wizard1 = new Wizard('shally','Healer');
// wizard2 = new Wizard('Ariz','DarkMagic');