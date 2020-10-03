const dinoData = [
    {
    id: 1,
    name: 'Fluffy',
    type: 'T Rex',
    age: 50,
    owner: 'Phillip',
    placement: 'hospital',
    adventures: [],
    health: 22,
    imageUrl: 'assets/images/T-Rex.png'
  },

    {
    id: 2,
    name: "Donna",
    type: 'Ankylosaurus',
    age: 100,
    owner: 'Carla',
    placement: 'hospital',
    adventures: [],
    health: 10,
    imageUrl: 'assets/images/Ankylosaurus.png'
    },

    {
    id: 3,
    name: 'Ned',
    type: 'Apatosaurus',
    age: 96,
    owner: 'Lillian',
    placement: 'kennel',
    adventures: [],
    health: 75,
    imageUrl: 'assets/images/Apatosaurus.png'
    },

    {
    id: 4,
    name: 'Harry',
    type: 'Baryonyx',
    age: 29,
    owner: 'Mariah',
    placement: 'graveyard',
    adventures: [],
    health: 0,
    imageUrl: 'assets/images/Baryonyx.png'
    },

    {
    id: 5,
    name: "Branch",
    type: 'Blue',
    age: 90,
    owner: 'Anne',
    placement: 'hospital',
    adventures: [],
    health: 44,
    imageUrl: 'assets/images/Blue.png'
    },

    {
    id: 6,
    name: 'Poppy',
    type: 'Brachiosaurus',
    age: 20,
    owner: 'Camille',
    placement: 'hospital',
    adventures: [],
    health: 30,
    imageUrl: 'assets/images/Brachiosaurus.png'
    },

    {
    id: 7,
    name: 'Cooper',
    type: 'Carnotaurus',
    age: 14,
    owner: 'Jonathan',
    placement: 'graveyard',
    adventures: [],
    health: 0,
    imageUrl: 'assets/images/Carnotaurus.png'
    },

    {
    id: 8,
    name: 'Barb',
    type: 'Dimorphodon',
    age: 78,
    owner: 'Myles',
    placement: 'graveyard',
    adventures: [],
    health: 0,
    imageUrl: 'assets/images/Dimorphodon.png'
    },

    {
    id: 9,
    name: 'Tink',
    type: 'Gallimimus',
    age: 67,
    owner: 'Logan',
    placement: 'kennel',
    adventures: [],
    health: 77,
    imageUrl: 'assets/images/Gallimimus.png'
    },

    {
    id: 10,
    name: 'Biggie',
    type: 'Indominus',
    age: 38,
    owner: 'Imani',
    placement: 'graveyard',
    adventures: [],
    health: 0,
    imageUrl: 'assets/images/Indominus rex.png'
    },

    {
    id: 11,
    name: 'Prince D',
    type: 'Indoraptor',
    age: 33,
    owner: 'Juan',
    placement: 'hospital',
    adventures: [],
    health: 60,
    imageUrl: 'assets/images/Indoraptor.png'
    },

    {
    id: 12,
    name: 'Hickory',
    type: 'Mosasaurus',
    age: 44,
    owner: 'Daniel',
    placement: 'kennel',
    adventures: [],
    health: 80,
    imageUrl: 'assets/images/Mosasaurus.png'
    },

    {
    id: 13,
    name: 'Chenille',
    type: 'Pteranodon',
    age: 78,
    owner: 'Wendy',
    placement: 'kennel',
    adventures: [],
    health: 87,
    imageUrl: 'assets/images/Pteranodon.png'
    },

    {
    id: 14,
    name: 'Satin',
    type: 'Sinoceratops',
    age: 67,
    owner: 'Chuck',
    placement: 'graveyard',
    adventures: [],
    health: 0,
    imageUrl: 'assets/images/Sinoceratops.png'
    },

    {
    id: 15,
    name: 'Tresillo',
    type: 'Stegosaurus',
    age: 59,
    owner: 'Brian',
    placement: 'hospital',
    adventures: [],
    health: 22,
    imageUrl: 'assets/images/Stegosaurus.png'
    },

    {
    id: 16,
    name: 'King Quincy',
    type: 'Stygimoloch',
    age: 30,
    owner: 'Alfred',
    placement: 'kennel',
    adventures: [],
    health: 86,
    imageUrl: 'assets/images/Stygimoloch.png'
    },

    {
    id: 17,
    name: 'Delta Dawn',
    type: 'Triceratops',
    age: 48,
    owner: 'Deddrick',
    placement: 'kennel',
    adventures: [],
    health: 100,
    imageUrl: 'assets/images/Triceratops.png'
    },
];

const getDinos = () => {
  return dinoData;
};

export {  dinoData, getDinos };