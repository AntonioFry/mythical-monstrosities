class Sphinx {
	constructor(name) {
		this.name = null;
		this.riddles = [];
		this.heroesEaten = 0;
	}
	collectRiddle(riddle) {
		this.riddles.push(riddle);
		if (this.riddles.length >= 4) {
			this.riddles.shift(riddle);
		}
	}
	attemptAnswer(answer) {
		var answerCorrect = 0;
		var riddleAmount = this.riddles.length;
		for (var i = 0; i < this.riddles.length; i++) {
			if (this.riddles[i].answer === answer) {
					answerCorrect += 1;
					this.riddles.splice(i, 1);
					if (answerCorrect === riddleAmount) {
						return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
					}
					return 'That wasn\'t that hard, I bet you don\'t get the next one';
			} 
		} this.heroesEaten += 1;
	} 
}

module.exports = Sphinx;