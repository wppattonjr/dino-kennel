import { kennel } from './dinoData.js';
import { addDinos } from './dinoKennel.js'

let count = 17;

const incrementalID = () => {
    return ++count
};

console.log(incrementalID() );

const addDinoSubmitButton = () => {
    $('#formSubmitButton').on('click', (e) => {
        const dinoName = $('#dino-name').val();
        const dinoOwner = $('#dino-owner').val();
        const dinoAge = $('#dino-age').val();
        const dinoImage = $('#dino-image').val();
        const dinoType = $('#dino-type').val();

        kennel.push({
            id: incrementalID(),
            name: dinoName,
            type: dinoType,
            age: dinoAge,
            owner: dinoOwner,
            adventures: [],
            health: 100,
            imageUrl: dinoImage
        })

        clearOutForm();
        addDinos(kennel);
            
        })
        console.log(addDinos(kennel))
    };

    const clearOutForm = () => {
        $('#dino-name').val('');
        $('#dino-owner').val('');
        $('#dino-age').val('');
        $('#dino-image').val('');
        $('#dino-type').val('');
    }
    

export { addDinoSubmitButton }