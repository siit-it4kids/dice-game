export class DiceModel {
    constructor(diceSides = 6) {
        this.diceSides = diceSides;
    }

    get roll() {
        return Math.floor(Math.random() * this.diceSides) + 1;
    }
}