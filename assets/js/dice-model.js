export class DiceModel {
    constructor(diceSides = 6) {
        this.diceSides = diceSides;
        this.value = null;

        this.roll();
    }

    roll() {
        this.value = Math.floor(Math.random() * this.diceSides) + 1;
    }

    get diceValue(){
        return this.value;
    }
}