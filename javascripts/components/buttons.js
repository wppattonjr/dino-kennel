import { showDinos } from './showDinos';


const petDinoButton = (item, array) => {
    $(`#pet-${item.id}`).click( () => {
        if (item.health > 0) {
            item.health += 10;
            if (item.health > 100){
                item.health = 100;
            }
            showDinos(array);
        }
    }
)};

export { petDinoButton };