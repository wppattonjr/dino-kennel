import { dinoData } from './components/dinoData.js';
import { buildHealthyDinoCards, buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos } from './components/dinoKennel.js';




const init = () => {
    buildHealthyDinoCards(getHealthyDinos);
    buildSickDinoCards(getSickDinos);
    buildDeadDinoCards(getDeadDinos);
  
};

init();




