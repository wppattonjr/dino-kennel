import { adventures } from './dinoData.js';
import { showDinos } from './showDinos.js';
//import moment from 'moment';


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

const dinoAdventure = (index, item, array) => {
    $(`#adventure-${index}`).click(() => {
        if (item.health > 0){
            item.health -= 15;
            if (item.health < 0){
                item.health = 0;
            }
            item.adventure.push(
                {date: moment().format('MMMM Do YYYY, h:mm a'), adventure: radomizeAdventures(adventures) }
            );
            showDinos(array);
        }
    })
}

const deleteDinos = (index, array) => {
    $(`#delete-${index}`).click(() => {
        array.splice(index, 1);
        showDinos(array);
    })
};

export { petDinoButton, feedDinoButton, deleteDinos, dinoAdventure };