import { showDinos } from './components/showDinos.js';
import { getDinos } from './components/dinoData.js';
import { addDinoSubmitButton } from './components/addDinoForm.js';
import { petDinoButton } from './components/buttons.js';





const init = () => {
    showDinos(getDinos());
    addDinoSubmitButton();
    petDinoButton();
};

init();




