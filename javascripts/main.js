import { buildHealthyDinoCards, buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos } from './components/dinoKennel.js';
import { addDinoSubmitButton } from './components/addDinoForm.js'





const init = () => {
    buildHealthyDinoCards(getHealthyDinos);
    buildSickDinoCards(getSickDinos);
    buildDeadDinoCards(getDeadDinos);
    addDinoSubmitButton();
  
};

init();




