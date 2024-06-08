import { DiceModel } from "./dice-model.js";
import { DiceView } from "./dice-view.js";

const diceDisplay = document.querySelector(`#dice-display`);

const diceModel = new DiceModel();
const diceView = new DiceView(diceModel, diceDisplay);

setInterval(function(){
    diceModel.roll();
    diceView.update()
}, 1000);