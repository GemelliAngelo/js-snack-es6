// ! CONSEGNA

// # Snack 1

// * Creare un array di oggetti:
// * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// * Stampare a schermo la bici con peso minore.

// ! ESECUZIONE

let bikes = [
  {
    name: "Torpado",
    weight: {
      value: 10,
      unit: "kg",
    },
  },
  {
    name: "Between",
    weight: {
      value: 15,
      unit: "kg",
    },
  },
  {
    name: "Ktm",
    weight: {
      value: 13,
      unit: "kg",
    },
  },
  {
    name: "Kawasaki",
    weight: {
      value: 8,
      unit: "kg",
    },
  },
  {
    name: "Bianchi",
    weight: {
      value: 18,
      unit: "kg",
    },
  },
];

const bikeWeightsValueArray = [];

bikes.forEach((bike) => {
  bikeWeightsValueArray.push(bike.weight.value);
});

const lightestBikevalue = Math.min(...bikeWeightsValueArray);

console.log(`La bici più leggera pesa ${lightestBikevalue} kg`);

// ! CONSEGNA

// # Snack 2

// * Creare un array di oggetti di squadre di calcio.
// * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// * Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// * Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ! ESECUZIONE

const randomizer = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let teams = [
  {
    name: "Milan",
    points: 0,
    fouls: 0,
  },
  {
    name: "Inter",
    points: 0,
    fouls: 0,
  },
  {
    name: "Napoli",
    points: 0,
    fouls: 0,
  },
  {
    name: "Roma",
    points: 0,
    fouls: 0,
  },
];

let teamsResult = [];

teams.forEach((team) => {
  team.points = randomizer(0, 9);
  team.fouls = randomizer(0, 5);

  delete team.points;
  teamsResult.push(team);
});

console.log(teamsResult);

// ! CONSEGNA

// # Snack 3 (Bonus)

// * Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// ! ESECUZIONE

const numbers = [4, 12, 18, 9, 15, 2, 6];
console.log(numbers);

const getMiddleValues = (array = [], a, b) => {
  const middleValues = [];
  for (let i = 0; i < array.length; i++) {
    if (i > array.indexOf(a) && i < array.indexOf(b)) {
      middleValues.push(array[i]);
    }
  }
  return middleValues;
};

console.log(getMiddleValues(numbers, 12, 2));
