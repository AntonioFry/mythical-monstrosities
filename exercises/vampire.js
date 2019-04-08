// class Vampire {
// 	constructor(name, pet, thirsty) {
// 		this.name = name;
// 		if (undefined) {this.pet = 'bat'};
// 		this.thirsty = true;
// 	}
// 	drink() {
// 		return this.thirsty = false;
// 	}
// }

// module.exports = Vampire;

class Vampire{
	constructor(name, pet){
		this.name = name;
		this.pet = pet || "bat";

	}
}

module.exports = Vampire;