let usednames = [];

class Robot {
    constructor() {
        this.reset();
    }
    checkDuplicate() {
        if (usednames.find(value => value === this.name)) {
            return this.reset();
        }
        usednames.push(this.name);
    }

    createName () {
        return this.randomLetter() + this.randomLetter() + this.randomNumber() + this.randomNumber() + this.randomNumber();
    }
    randomLetter() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + (65)));
    }
    randomNumber () {
        return Math.floor(Math.random() * 9);
    }
    reset() {
        this.name = this.createName();
        this.checkDuplicate();
    }
}

module.exports = Robot;
