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

    update(){        
        console.log(this.diceModel.diceValue);
        this.diceContainer.style.backgroundImage = `url('assets/img/dice-${this.diceModel.diceValue}.svg')`;
    }


}