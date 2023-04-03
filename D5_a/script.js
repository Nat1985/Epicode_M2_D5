/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1, l2) {
    let areaRet = l1 * l2;
    return areaRet;
}
console.log(area(3, 4)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum(intA, intB) {
    let sum;
    if (intA !== intB) {
        sum = intA + intB;
    } else {
        sum = (intA + intB) * 3;
    }
    return sum;
}
console.log("La somma dei numeri è (* 3 se sono uguali): " + crazySum(13, 13)); */


/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(a) {
    let diff = a - 19;
    if (diff > 19) {
        diff *= 3;
    }
    return diff;
}
console.log(crazyDiff(109)); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary(intA) {
    if ((intA >= 20 && intA <= 100) || (intA === 400)) {
        return true;
    } else {
        return false;
    }
}
let intA = 20;
console.log("Valore di ritorno della funzione per il numero: " + intA + ": " + boundary(intA)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* function codify(string) {
    let codeTest = "";
    for (i = 0; i < 4; i++) {
        codeTest = codeTest.concat(string[i]);
    }
    if (codeTest !== "code") {
        string = "code" + string;
        return string;
    } else {
        return string;
    }
}
console.log(codify("codenow")); */


/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(intNum) {
    if (!(intNum % 3) || !(intNum % 7)) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(39)); */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(string) {
    let rev = "";
    for (i = string.length; i > 0; i--) {
        rev = rev.concat(string[i - 1]);
    }
    return rev;
}
let inserireStringa = "invertiquesta";
console.log("La stringa invertita di " + inserireStringa.toUpperCase() + " è:")
console.log(reverseString(inserireStringa)); */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


/* function upperFirst(string) {
    let newLetters = "";
    let spaceNow = true;
    for (i = 0; i < string.length; i++) {
        if (spaceNow) {
            newLetters = newLetters.concat(string[i].toUpperCase());
        } else {
            newLetters = newLetters.concat(string[i].toLowerCase());
        }
        spaceNow = string[i] === " " ? true : false;
    }
    return newLetters;
}
console.log(upperFirst("OGNUNA di QUESTE parole AVRA' soltanto LA prima LETTERA maiuscola")); */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* function cutString(string) {
    let newWord = "";
    for (i = 0; i < string.length; i++) {
        if (i !== 0 && i !== string.length - 1) {
            newWord = newWord.concat(string[i]);
        }
    }
    return newWord;
}
console.log(cutString("stringa senza la prima e l'ultima lettera")); */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n) {
    let randomArray = [];
    for (i = 0; i < n; i++) {
        randomArray.push(Math.round(Math.random() * 10));
    }
    return randomArray;
}
console.log(giveMeRandom(14)); */