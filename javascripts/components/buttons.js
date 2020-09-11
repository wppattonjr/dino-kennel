import { showDinos } from './showDinos.js';

const petDinoButton = (index, item, array) => {
    $(`#pet-${index}`).click( () => {
        if (item.health > 0 || item.health === 0) {
            item.health += 5;
            if (item.health > 100){
                item.health = 100;
            }
            showDinos(array);
        }
    }
)};

const feedDinoButton = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        if (item.health > 0 || item.health === 0) {
            item.health += 10;
            if (item.health > 100){
                item.health = 100;
            }
            showDinos(array);
        }
    }
)
};

const deleteDinos = (index, array) => {
    $(`#delete-${index}`).click(() => {
        array.splice(index, 1);
        showDinos(array);
    })
};

export { petDinoButton, feedDinoButton, deleteDinos };