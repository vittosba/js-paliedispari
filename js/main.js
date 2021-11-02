/*
    Palindroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Inserisci una parola');

console.log(palindroma(userWord));

function palindroma (word) {
    const len = word.length;
    console.log(word.length);
    for (let i = 0; i < (len / 2); i++) {
        console.log(`${word[i]} - ${word[len - 1 - i]}`);
        if(word[i] !== word[len - 1 - i]) {
            return 'Non è un palindroma';
        }
    }
    return 'E un palindroma';
}

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let scelta = '';
let numUtente = 0;

do {
    scelta = prompt('pari o dispari?').toLowerCase();
} while (scelta !== 'pari' && scelta !== 'dispari')
console.log(scelta);

do {
    numUtente = parseInt( prompt('Scegliere un numero tra 1 e 5') );
} while (numUtente <= 1 || numUtente >= 5)
console.log(numUtente);

const numComputer = numRand();
const somma = numUtente + numComputer;
const risultato = oddEven(somma);

if (scelta === risultato) {
    console.log('Hai vinto');
}
else {
    console.log('Hai perso');
}

/*
FUNCTION
*/

function numRand () {
    let rand = Math.floor(Math.random() * 5) + 1;
    console.log(rand);
    return rand;
}

function oddEven (sum) {
    if (sum % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}
