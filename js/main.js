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

// ! CONSEGNA

// # Snack 3 (Bonus)

// * Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// ! ESECUZIONE
