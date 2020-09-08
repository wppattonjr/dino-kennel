import { getDinos, dinoData } from './dinoData.js';
import { showDinos } from './showDinos.js'

const randomId = () => {
    const random = [Math.floor(Math.random() * 1000)];
    return random;
};

const addDinoSubmitButton = () => {
    $('#formSubmitButton').click(() => {
        const dinoName = $('#dinoName').val();
        const dinoOwner = $('#dinoOwner').val();
        const dinoAge = $('#dinoAge').val();
        const dinoImage = $('#dinoImage').val();
        const dinoType = $('#dinoType').val();

        dinoData.push({
            id: randomId(),
            name: dinoName,
            type: dinoType,
            age: dinoAge,
            owner: dinoOwner,
            placement: 'kennel',
            adventures: [],
            health: 100,
            imageUrl: dinoImage
        })
          
        clearOutForm();
        showDinos(getDinos);
    })
};

    

    const clearOutForm = () => {
        $('#dinoName').val('');
        $('#dinoOwner').val('');
        $('#dinoAge').val('');
        $('#dinoImage').val('');
        $('#dinoType').val('');
    }


export { addDinoSubmitButton }