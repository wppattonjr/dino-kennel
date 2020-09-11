import { petDinoButton, feedDinoButton, deleteDinos } from './buttons.js';
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
        
    });
};

export { showDinos };