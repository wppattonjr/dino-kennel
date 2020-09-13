import { showDinos } from './components/showDinos.js';
import { getDinos } from './components/dinoData.js';
import { addDinoSubmitButton } from './components/addDinoForm.js';






const init = () => {
    showDinos(getDinos());
    addDinoSubmitButton();
};

init();




