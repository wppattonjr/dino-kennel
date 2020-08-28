import { dinoData } from './components/dinoData.js';
import { buildHealthyDinoCards, buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos } from './components/dinoKennel.js';
import { addDinoForm } from './components/addDinoForm.js'




const init = () => {
    buildHealthyDinoCards(getHealthyDinos);
    buildSickDinoCards(getSickDinos);
    buildDeadDinoCards(getDeadDinos);
    addDinoForm();
  
};

init();




