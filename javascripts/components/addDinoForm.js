const addDinoForm = () => {
    $('#dinoForm').html(`
    <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Add Dino
          </button>
        </h5>
      </div>
  
      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    
      <form>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="email" class="form-control" id="dinoName" placeholder="Enter Dino Name">
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Owner</label>
            <input type="password" class="form-control" id="dinoOwner" placeholder="Enter Dino Owner">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Age</label>
            <input type="email" class="form-control" id="dinoAge" placeholder="Enter Dino Age">
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Image</label>
            <input type="password" class="form-control" id="dinoImage" placeholder="Enter Dino Image URL">
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Type</label>
            <input type="password" class="form-control" id="dinoType" placeholder="Enter Dino Type">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>`)

}

export { addDinoForm }