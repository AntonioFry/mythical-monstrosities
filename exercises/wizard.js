class Wizard {
	constructor(obj) {
		this.name = obj.name;
		this.bearded = obj.bearded;
		if (this.bearded === undefined) {
			this.bearded = true;
		}
		this.counter = 0;
		this.isRested = true;
	}
	incantation(spell) {
		return spell.toUpperCase()
	}
	cast() {
		this.counter++;
		if (this.counter >= 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST!';
		} else {
			return 'MAGIC BULLET';
		}
	}

}

module.exports = Wizard;