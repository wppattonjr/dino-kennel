import { getDinos } from './components/dinoData.js';
import { buildDinoCards } from './components/dinoKennel.js';




const init = () => {
    buildDinoCards();
    getDinos();
};

init();







