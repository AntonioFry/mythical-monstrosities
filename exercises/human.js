class Human {
	constructor(name) {
		this.name = name;
		this.encounterCounter = 0;
		this.knockedOut = true // false;
	}
	noticesOgre(ogre) {
		if ((this.encounterCounter === 3) || (this.encounterCounter === 6)) { 
		return true;
		}
		return false;
	}
}

module.exports = Human;