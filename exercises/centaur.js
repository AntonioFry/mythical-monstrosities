class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.counter = 0;
	}
	shoot() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
			return 'NO!'
		} else if (this.layingDown === true) {
			return 'NO!'
		} else {
			return 'Twang!!!';
		}
	}
	
	run() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
		} else if (this.layingDown === true) {
			return 'NO!';
		} else {
			return 'Clop clop clop clop!!!';
		}
	}

	sleep() {
		if (this.standing === true) {
			return 'NO!';
		} else if (this.layingDown === true) {
			this.cranky = false;
			this.counter = 0;
			return 'ZZZZ';
		}
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		this.cranky = !this.cranky;
		if (this.layingDown === true) {
			return 'Not while I\'m laying down!';
		}
	}
}

module.exports = Centaur;