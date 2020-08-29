import { dinoData, kennel } from './dinoData.js'


const getHealthyDinos = dinoData.filter((dino) => {
    return dino.health >= 75
});


const getSickDinos = dinoData.filter ((dino) => {
    return dino.health < 75 && dino.health > 0
});


const getDeadDinos = dinoData.filter ((dino) => {
    return dino.health === 0
});


/* const healthyDinosToKennel = (data) => {
    kennel.push(getHealthyDinos)
    return healthyDinosToKennel
}; */

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
            <div class="progress-bar-${dinos.id}" id="progress-bar-${dinos.id}" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div class="card-buttons">
                <button type="button" id="pet-${dinos.id}" class="btn btn-outline-primary">Pet</button>
                <button type="button" id="view-${dinos.id}" class="btn btn-outline-secondary">View</button>
                <button type="button" id="feed-${dinos.id}" class="btn btn-outline-success">Feed</button>
                <button type="button" id="delete-${dinos.id}" class="btn btn-outline-danger">Delete</button>
                <button type="button" id="adventure-${dinos.id}" class="btn btn-outline-warning">Adventure</button>
                </div>`
        )

        
    
    });
};

const buildSickDinoCards = (data) => {
    $('#sickDinos').html('');
    data.forEach(dinos => {
        $('#sickDinos').append(
            `<div class="card" "mx-auto" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
            </div>
            <div class="progress">
            <div class="progress-bar-${dinos.id}" id="progress-bar-${dinos.id}" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div class="card-buttons">
                <button type="button" id="pet-${dinos.id}" class="btn btn-outline-primary">Pet</button>
                <button type="button" id="view-${dinos.id}" class="btn btn-outline-secondary">View</button>
                <button type="button" id="feed-${dinos.id}" class="btn btn-outline-success">Feed</button>
                <button type="button" id="delete-${dinos.id}" class="btn btn-outline-danger">Delete</button>
                <button type="button" id="adventure-${dinos.id}" class="btn btn-outline-warning">Adventure</button>
                </div>`
                
        )
        
    
    });
};

const buildDeadDinoCards = (data) => {
    $('#deadDinos').html('');
    data.forEach(dinos => {
        $('#deadDinos').append(
            `<div class="card" "mx-auto" style="width: 18rem;">
            <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${dinos.name}</h5>
            </div>
            <div class="progress">
            <div class="progress-bar-${dinos.id}" id="progress-bar-${dinos.id}" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div class="card-buttons">
                <button type="button" id="pet-${dinos.id}" class="btn btn-outline-primary">Pet</button>
                <button type="button" id="view-${dinos.id}" class="btn btn-outline-secondary">View</button>
                <button type="button" id="feed-${dinos.id}" class="btn btn-outline-success">Feed</button>
                <button type="button" id="delete-${dinos.id}" class="btn btn-outline-danger">Delete</button>
                <button type="button" id="adventure-${dinos.id}" class="btn btn-outline-warning">Adventure</button>
                </div>`
                
        )
        
    
    });
};

const addDinos = (array) => {
    /* $('#healthyDinos').html(''); */
    array.forEach(dinos => { 
       $('#healthyDinos').append(
        `<div class="card" "mx-auto" style="width: 18rem;">
        <img src="${dinos.imageUrl}" class="card-img-top" alt="image of dino">
        <div class="card-body">
            <h5>${dinos.name}</h5>
        </div>
        <div class="progress">
        <div class="progress-bar-${dinos.id}" id="progress-bar-${dinos.id}" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <div class="card-buttons">
            <button type="button" id="pet-${dinos.id}" class="btn btn-outline-primary">Pet</button>
            <button type="button" id="view-${dinos.id}" class="btn btn-outline-secondary">View</button>
            <button type="button" id="feed-${dinos.id}" class="btn btn-outline-success">Feed</button>
            <button type="button" id="delete-${dinos.id}" class="btn btn-outline-danger">Delete</button>
            <button type="button" id="adventure-${dinos.id}" class="btn btn-outline-warning">Adventure</button>
            </div>`
       )
   
   });
   }
 




export { buildHealthyDinoCards,buildSickDinoCards, buildDeadDinoCards, getHealthyDinos, getSickDinos, getDeadDinos, addDinos }