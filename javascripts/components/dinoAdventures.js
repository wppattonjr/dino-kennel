const dinoAdventureInfo = (item, index) => {
    item.adventures.forEach((adventure, i) => {
        $(`#adventures-${index}`).append(
            `<tr>
            <td>${i + 1}</td>
            <td>${adventure.date}</td>
            <td>${adventure.adventures}</td>
            </tr>`
        )
    })
}

const randomizeAdventures = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export {dinoAdventureInfo, randomizeAdventures}