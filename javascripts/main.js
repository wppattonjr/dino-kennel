import { kennel } from './components/dinoData.js';
import { buildHealthyDinoCards, buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos, addDinos } from './components/dinoKennel.js';
import { addDinoSubmitButton } from './components/addDinoForm.js'





const init = () => {
    buildHealthyDinoCards(getHealthyDinos);
    buildSickDinoCards(getSickDinos);
    buildDeadDinoCards(getDeadDinos);
   /*  addDinos(kennel);
    addDinoSubmitButton(); */
  
};

init();




