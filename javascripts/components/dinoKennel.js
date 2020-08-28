import { dinoData } from './dinoData.js'

const getHealthyDinos = dinoData.filter((dino) => {
    return dino.health >= 75
});
console.log(getHealthyDinos);

const getSickDinos = dinoData.filter ((dino) => {
    return dino.health < 75 && dino.health > 0
});
console.log(getSickDinos)

const getDeadDinos = dinoData.filter ((dino) => {
    return dino.health === 0
});
console.log(getDeadDinos)

const buildHealthyDinoCards = (data) => {
    $('#healthyDinos').html('');
    data.forEach(dinos => {
        $('#healthyDinos').append(
            `<div class="card" "mx-auto" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
            </div>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div class="row">
                <div class ="col">
                <button type="button" class="btn btn-outline-dark">Feed</button>
                </div>
                <div class ="col">
                <button type="button" class="btn btn-outline-dark">Adventure</button>
                </div>
                <div class ="col">
                <button type="button" class="btn btn-outline-dark">View</button>
                </div>
                <div class ="col">
                <button type="button" class="btn btn-outline-dark">Delete</button>
                </div>
            </div>

            </div>`

        )
    
    });
}

const buildSickDinoCards = (data) => {
    $('#sickDinos').html('');
    data.forEach(dinos => {
        $('#sickDinos').append(
            `<div class="card" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
                </div>
                <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                <div class="row">
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Feed</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Adventure</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">View</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Delete</button>
                    </div>
                </div>
                </div>`
        )
        
    
    });
}

const buildDeadDinoCards = (data) => {
    $('#deadDinos').html('');
    data.forEach(dinos => {
        $('#deadDinos').append(
            `<div class="card" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
                </div>
                <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                <div class="row">
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Feed</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Adventure</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">View</button>
                    </div>
                    <div class ="col">
                    <button type="button" class="btn btn-outline-dark">Delete</button>
                    </div>
                </div>
                </div>`
        )
    
    });
}



export { buildHealthyDinoCards,buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos }