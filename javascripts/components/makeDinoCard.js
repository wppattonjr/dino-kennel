const makeDinoCard = (item, index) => {
    let domstring = `<div class="modal fade" id="dinoModal-${index}" tabindex="-1" aria-labelledby="ModalLabel-${index}" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel-${index}">Dino Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex"></div>
              <img class="modal-image" style="width: 35%" src="${item.imageUrl}" alt="${item.name}">
              <div class="modal-info">
                <h2>${item.name}</h2>
                <p1>Age: ${item.age}</p1>
                <p2>Type: ${item.type}</p2>
                <p3>Owner: ${item.owner}</p3>                
            </div>
          </div>
          <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
        </div>
        <div class="table-container">
          <table class="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Adventure</th>         
              </tr>
              </thead>
              <tbody id="funAdventures${index}"></tbody>
          </table>
        </div>
      </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
    </div>
    </div>
    <div class="card" "mx-auto" style="width: 18rem;">
    <img src="${item.imageUrl}" id="dinoImage-${item.id}" class="card-img-top" alt="image of dino">
    <div class="card-body">
        <h5>${item.name}</h5>
        <p class="mb-0">Health Bar:</p>
      <div class="progress">
      <div class="progress-bar" id="progress-bar-${item.id}" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
    </div>
    </div>
    <div class="button-container">
        <button type="button" id="pet-${index}" class="btn btn-outline-primary">Pet</button>
        <button type="button" id="view-${index}" class="btn btn-outline-secondary" data-toggle="modal" data-target="#dinoModal-${index}">View</button>
        <button type="button" id="feed-${index}" class="btn btn-outline-success">Feed</button>
        <button type="button" id="delete-${index}" class="btn btn-outline-danger">Delete</button>
        <button type="button" id="adventure-${index}" class="btn btn-outline-warning">Adventure</button>
        </div>`
        return domstring;
};

export { makeDinoCard };