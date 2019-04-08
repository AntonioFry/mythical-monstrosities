class Direwolf {
	constructor(name, home, size, starksToProtect) {
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = starksToProtect || [];
		this.counter = 0;
		this.huntsWhiteWalkers = true;
	}
	protect(stark) {
		this.counter++;
		this.huntsWhiteWalkers = false;
		if (stark.location === this.home && (this.counter < 3)) {	
			this.starksToProtect.push(stark);
			stark.safe = true;
		}
	}

	leave(stark) {
		this.starksToProtect = []
		stark.safe = false;
	}
}

module.exports = Direwolf;