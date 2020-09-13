import { petDinoButton, feedDinoButton, deleteDinos, dinoAdventure } from './buttons.js';
import { dinoAdventureInfo } from './dinoAdventures.js';
import { makeDinoCard } from './makeDinoCard.js'

const showDinos = (array) => {
    $('#healthyDinos').html('');
    $('#sickDinos').html('');
    $('#deadDinos').html('');
    array.forEach((item, index) => {
        if (item.health >= 75) {
            $('#healthyDinos').append(makeDinoCard(item, index))
        }else if (item.health < 75 && item.health > 0){
            $('#sickDinos').append(makeDinoCard(item, index))
        }else {
            $('#deadDinos').append(makeDinoCard(item, index))
        }
        petDinoButton(index, item, array);
        feedDinoButton(index,item, array );
        deleteDinos (index, array);
        dinoAdventure (index, item, array);
        dinoAdventureInfo(item, index);
        
    });
};

export { showDinos };