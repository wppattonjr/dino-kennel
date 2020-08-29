import { kennel } from './dinoData.js';
import { addDinos } from './dinoKennel.js'

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

        kennel.push({
            id: randomId(),
            name: dinoName,
            type: dinoType,
            age: dinoAge,
            owner: dinoOwner,
            adventures: [],
            health: 100,
            imageUrl: dinoImage
        })
                
        clearOutForm();
        addDinos(kennel, 'kennel');
            
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