const makeDinoCard = (item, index) => {
    let domstring = `<div class="modal fade" id="dinoModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dino Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="modal-image" src="${item.imageUrl}" alt="${item.name}">
            <div class="modal-info">
                <h2>${item.name}</h2>
                <p1>Age: ${item.age}</p1>
                <p2>Type: ${item.type}</p2>
                <p3>Owner: ${item.owner}</p3>                
            </div>
          </div>
          <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
         </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card" "mx-auto" style="width: 18rem;">
    <img src="${item.imageUrl}" id="dinoImage-${item.id}" class="card-img-top" alt="image of dino">
    <div class="card-body">
        <h5>${item.name}</h5>
    </div>
    <div class="progress">
    <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
    </div>
    <div class="card-buttons">
        <button type="button" id="pet-${index}" class="btn btn-outline-primary">Pet</button>
        <button type="button" id="view-${index}" class="btn btn-outline-secondary" data-toggle="modal" data-target="#dinoModal-${index}">View</button>
        <button type="button" id="feed-${index}" class="btn btn-outline-success">Feed</button>
        <button type="button" id="delete-${index}" class="btn btn-outline-danger">Delete</button>
        <button type="button" id="adventure-${index}" class="btn btn-outline-warning">Adventure</button>
        </div>`
        return domstring;
};

export { makeDinoCard };