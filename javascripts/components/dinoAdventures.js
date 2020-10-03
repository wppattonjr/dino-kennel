import { showDinos } from "./showDinos.js";

const funAdventures = [
    'Brawl',
    'Ice skating',
    'Scuba diving',
    'Spelunking',
    'Baking',
    'Crochet',
    'Yoga',
    'Surfing',
    'Sky diving',
    'LARPing'
];

const randomizeAdventures = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const dinoAdventure = (index, item, array) => {
    $(`#adventure-${index}`).click(() => {
      if (item.health > 0){
        item.health -= 25;
        if (item.health < 0){
            item.health = 0;
        }
        item.adventures.push({timeStamp: new Date(), adventure: randomizeAdventures(funAdventures)}
        );
        showDinos(array);
     }
    })
};

const dinoAdventureInfo = (item, index) => {
    item.adventures.forEach((adventures, i) => {
        $(`#funAdventures${index}`).append(
            `<tr>
            <td>${i + 1}</td>
            <td>${adventures.timeStamp}</td>
            <td>${adventures.adventure}</td>
            </tr>`
        )
    })
};

export {dinoAdventureInfo, dinoAdventure }