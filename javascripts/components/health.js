import { getDinos } from './dinoData';

const healthStatus = (item) => {
    if (item.health >= 100) {
        item.health = 100;
        item.placement = 'kennel'
    }else if (item.health >= 65){
        item.placement = 'kennel'
    }else if (item.health < 65 && item.health > 0) {
        item.placement = 'hospital';
    }else {
        item.placement = "graveyard";
    }
};

export { healthStatus }