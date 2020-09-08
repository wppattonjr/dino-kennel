import { getDinos } from './dinoData.js';
/* import { petDinoButton } from './buttons.js'; */

const showDinos = () => {
    $('#healthyDinos').html('');
    $('#sickDinos').html('');
    $('#deadDinos').html('');

    getDinos().forEach((item) => {
        if (item.placement === 'kennel') {
            $('#healthyDinos').append(
                `<div class="card" "mx-auto" id="${item.id}" style="width: 18rem;">
            <img src="${item.imageUrl}" id="dinoImage-${item.id}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${item.name}</h5>
            </div>
            <div class="progress">
            <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
            </div>
            <div class="card-buttons">
                <button type="button" id="pet-${item.id}" class="btn btn-outline-primary">Pet</button>
                <button type="button" id="view-${item.id}" class="btn btn-outline-secondary">View</button>
                <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
                <button type="button" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
                <button type="button" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
                </div>`
            );
        } else if (item.placement === 'hospital') {
            $('#sickDinos').append(
                `<div class="card" "mx-auto" id="${item.id}" style="width: 18rem;">
                <img src="${item.imageUrl}" id="dinoImage-${item.id}" class="card-img-top" alt="image of dino">
                <div class="card-body">
                    <h5>${item.name}</h5>
                </div>
                <div class="progress">
                <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
                </div>
                <div class="card-buttons">
                    <button type="button" id="pet-${item.id}" class="btn btn-outline-primary">Pet</button>
                    <button type="button" id="view-${item.id}" class="btn btn-outline-secondary">View</button>
                    <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
                    <button type="button" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
                    <button type="button" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
                    </div>`
            )
        }else {
            $('#deadDinos').append(
                `<div class="card" "mx-auto" id="${item.id}" style="width: 18rem;">
            <img src="${item.imageUrl}" id="dinoImage-${item.id}" class="card-img-top" alt="image of dino">
            <div class="card-body">
                <h5>${item.name}</h5>
            </div>
            <div class="progress">
            <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
            </div>
            <div class="card-buttons">
                <button id="pet-${item.id}" type="button" class="btn btn-outline-primary">Pet</button>
                <button type="button" id="view-${item.id}" class="btn btn-outline-secondary">View</button>
                <button type="button" id="feed-${item.id}" class="btn btn-outline-success">Feed</button>
                <button type="button" id="delete-${item.id}" class="btn btn-outline-danger">Delete</button>
                <button type="button" id="adventure-${item.id}" class="btn btn-outline-warning">Adventure</button>
                </div>`
            );
        }
    });
    petDinoButton(item.id);
};

    export { showDinos };
