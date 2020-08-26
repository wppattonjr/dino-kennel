const buildDinoKennel = (array) => {
    $('#dinoKennel').html('');
    array.forEach((item, index) => { 
        switch (names) {
            case dinoData.health >= 75:
                $('#cardsOfDinos')

        }
    })
}


const buildDinoCards = (array) => {
    $('#cardsOfDinos').html('');
    array.forEach(dinos => {
        $('#cardsOfDinos').append(
            `div class="card" style="width: 18rem;">
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

export { buildDinoCards };