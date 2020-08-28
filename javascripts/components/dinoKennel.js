import { dinoData } from './dinoData.js'

const getHealthyDinos = dinoData.filter((dino) => {
    return dino.health >= 75
});

const getSickDinos = dinoData.filter ((dino) => {
    return dino.health < 75 && dino.health > 0
});

const getDeadDinos = dinoData.filter ((dino) => {
    return dino.health === 0
});

const buildHealthyDinoCards = (getHealthyDinos) => {
    $('#healthyDinos').html('');
    getHealthyDinos.forEach(dinos => {
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

const buildSickDinoCards = (getSickDinos) => {
    $('#sickDinos').html('');
    getSickDinos.forEach(dinos => {
        $('#sickDinos').append(
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

const buildDeadDinoCards = (getDeadDinos) => {
    $('#deadDinos').html('');
    getSickDinos.forEach(dinos => {
        $('#deadDinos').append(
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



export { buildHealthyDinoCards,buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos }