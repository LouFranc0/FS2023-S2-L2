/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function trovaMassimo(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
let numeroMaggiore = trovaMassimo(10, 5);
alert("Il numero maggiore è: " + numeroMaggiore);
// Esempio di utilizzo

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Numero intero fornito
let numeroFornito = 7; // Puoi sostituire 7 con il numero che desideri verificare

// Verifica se il numero è diverso da 5
if (numeroFornito !== 5) {
    console.log("not equal");
} else {
    console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Chiedi all'utente di inserire un numero
let numero = prompt("Inserisci un numero:");
numero = parseInt(numero);

if (numero % 5 === 0) {
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function verificaOtto(num1, num2) {
  // Verifica se uno dei due numeri è uguale a 8
  if (num1 === 8 || num2 === 8) {
    return true;
  }
  
  // Verifica se l'addizione dei numeri è uguale a 8
  if (num1 + num2 === 8) {
    return true;
  }
  
  // Verifica se la sottrazione dei numeri è uguale a 8
  if (Math.abs(num1 - num2) === 8) {
    return true;
  }
  
  // Se nessuna delle condizioni è soddisfatta, restituisci false
  return false;
}

// Esempi di utilizzo
console.log(verificaOtto(4, 8)); // Restituirà true
console.log(verificaOtto(12, 4)); // Restituirà true
console.log(verificaOtto(5, 3)); // Restituirà false


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Importo totale del carrello dell'utente
var totalShoppingCart = 60; // Cambia questo valore con l'importo reale del carrello

// Verifica se l'importo totale del carrello supera 50 per attivare la spedizione gratuita
if (totalShoppingCart > 50) {
    // L'utente ha diritto alla spedizione gratuita
    var totalToCharge = totalShoppingCart; // Nessun costo aggiuntivo per la spedizione
} else {
    // L'utente deve pagare la spedizione (costo fisso pari a 10)
    var totalToCharge = totalShoppingCart + 10;
}

console.log("Importo totale da addebitare all'utente per il checkout: " + totalToCharge);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Importo totale del carrello dell'utente
var totalShoppingCart = 60; // Cambia questo valore con l'importo reale del carrello
var isBlackFriday = true; // Cambia questo valore a true se è Black Friday, altrimenti a false

// Calcola l'importo totale considerando il 20% di sconto del Black Friday
var totalWithBlackFridayDiscount = isBlackFriday ? totalShoppingCart * 0.8 : totalShoppingCart;

// Verifica se l'importo totale con lo sconto del Black Friday supera 50 per attivare la spedizione gratuita
if (totalWithBlackFridayDiscount > 50) {
    // L'utente ha diritto alla spedizione gratuita
    var totalToCharge = totalWithBlackFridayDiscount; // Nessun costo aggiuntivo per la spedizione
} else {
    // L'utente deve pagare la spedizione (costo fisso pari a 10)
    var totalToCharge = totalWithBlackFridayDiscount + 10;
}

console.log("Importo totale da addebitare all'utente per il checkout: " + totalToCharge);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Creazione delle variabili
let numero1 = 15;
let numero2 = 8;
let numero3 = 22;

// Utilizzo di un blocco condizionale per ordinare le variabili
if (numero1 < numero2) {
  let temp = numero1;
  numero1 = numero2;
  numero2 = temp;
}

if (numero2 < numero3) {
  let temp = numero2;
  numero2 = numero3;
  numero3 = temp;
}

if (numero1 < numero2) {
  let temp = numero1;
  numero1 = numero2;
  numero2 = temp;
}

// Mostra il risultato in console
console.log("Valori ordinati dal più alto al più basso: " + numero1 + ", " + numero2 + ", " + numero3);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaNumero(valore) {
  if (typeof valore === 'number') {
    return true; // Il valore è un numero
  } else {
    return false; // Il valore non è un numero
  }
}

// Esempi di utilizzo:
console.log(verificaNumero(42)); // Restituirà true
console.log(verificaNumero('42')); // Restituirà false

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Definisci una funzione per controllare se un numero è pari o dispari
function controllaPariDispari(numero) {
  if (numero % 2 === 0) {
    return "Il numero è pari.";
  } else {
    return "Il numero è dispari.";
  }
}

// Fornisci il numero da controllare
var numeroDaControllare = 7; // Puoi sostituire 7 con il numero desiderato

// Chiama la funzione e stampa il risultato
console.log(controllaPariDispari(numeroDaControllare));

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me1.city = 'Toronto';

console.log(me1);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me2.lastName;

console.log(me2);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me3.skills.pop();

console.log(me3);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

console.log(numbers);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sostituisci l'ultimo elemento (10) con 100
number[number.length - 1] = 100;

console.log(number);
