import { getDinos } from './dinoData.js'

const buildDinoCards = (array) => {
    $('#healthyDinos').html('');
    array.forEach(dinos => {
        $('#healthyDinos').append(
            `<div class="card" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
            </div>
            <table>
                <colgroup>
                    <col span="2">
                </colgroup>
                    <tr>
                        <th><button type="button" class="btn btn-outline-info">Info</button></th>
                        <th><button type="button" class="btn btn-outline-info">Info</button></th>
                    </tr>
                    <tr>
                        <th><button type="button" class="btn btn-outline-info">Info</button></th>
                        <th><button type="button" class="btn btn-outline-info">Info</button></th>
                    </tr>`
        )
        
    });
}

export { buildDinoCards }