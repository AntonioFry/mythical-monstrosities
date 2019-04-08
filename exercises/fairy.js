class Fairy {
	constructor(name, humanWards) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	}
	receiveBelief() {
		this.dust += 1;
	}
	believe() {
		this.dust += 10;
	}
	makeDresses(newDresses) {
		var newClothes = this.clothes.dresses.concat(newDresses);
		this.clothes.dresses = newClothes
	}
	provoke() {
		this.disposition = 'Vengeful'
	}
	replaceInfant(infant) {
		if (this.disposition === 'Vengeful') {
			infant.disposition = 'Malicious';
			this.humanWards.push(infant);
		} else if (this.disposition !== 'Vengeful') {
			return infant;
		}
		if (this.humanWards.length >= 3) {
			this.disposition = 'Good natured';
		}
	}
}

module.exports = Fairy;