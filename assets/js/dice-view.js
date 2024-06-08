export class DiceView {
    constructor(diceModel, parentDomElem){
        this.diceModel = diceModel;
        this.parentDomElem = parentDomElem;
        this.diceContainer = null;

        this.init();
    }

    init(){
        this.diceContainer = document.createElement('div');
        this.diceContainer.classList.add('dice-container');
        this.parentDomElem.append(this.diceContainer);
    }

    refresh(){
        const newRoll = this.diceModel.roll;
        console.log(newRoll);

        this.diceContainer.style.backgroundImage = `url('assets/img/dice-${newRoll}.svg')`;
    }


}