// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/



/* let oldArray = (giveMeRandom(14));
console.log(oldArray);

console.log("La somma dei maggiori di 5 è " + checkArray(oldArray));

function checkArray(newArray) {
    let greaterThan5;
    let greatersSum = 0;
    for (i = 0; i < newArray.length; i++) {
        greaterThan5 = newArray[i] > 5 ? true : false;
        console.log("Valore n° " + i + ": " + greaterThan5);
        if (greaterThan5) {
            greatersSum += newArray[i];
        }
    }
    return greatersSum;
}

function giveMeRandom(n) {
    let randomArray = [];
    for (i = 0; i < n; i++) {
        randomArray.push(Math.round(Math.random() * 10));
    }
    return randomArray;
} */

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

let shoppingCart = [
    {
        name: "Wheels",
        price: 98,
        id: "ah345",
        amount: 4
    },
    {
        name: "Auto Cleaner",
        price: 180,
        id: "dr82",
        amount: 1
    },
    {
        name: "Front Wiper",
        price: 113,
        id: "z87h",
        amount: 2
    }
];

/* console.log("Il totale del carrello è: " + shoppingCartTotal(shoppingCart));

function shoppingCartTotal(cart) {
    let total = 0;
    for (i = 0; i < cart.length; i++) {
        total += (cart[i].price * cart[i].amount);
    }
    return total;
} */

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/



/* let interiorCleaner = {
    name: "Interior Cleaner",
    price: 34,
    id: "jk45",
    amount: 2
}

console.log(addToShoppingCart(interiorCleaner));
console.log(shoppingCart);

function addToShoppingCart(newObject) {
    shoppingCart.push(newObject);
    return shoppingCart.length;
} */

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* function maxShoppingCart(array) {
    let moreExp;
    let moreExpCost = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].price > moreExpCost) {
            moreExpCost = array[i].price;
            moreExp = i;
        }
    }
    return moreExp;
}

let returnedValue = maxShoppingCart(shoppingCart)
console.log("L'oggetto più costoso è quello alla posizione n." + returnedValue + " (" + shoppingCart[returnedValue]. name + ")"); */



/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* function latestShoppingCart(array) {
    let lastObject = array[array.length - 1].name;
    return lastObject;
}

console.log("L'ultimo oggetto è: " + latestShoppingCart(shoppingCart)); */


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* function loopUntil(intX) {
    if (intX <= 9) {
        let randomSerie = "";
        let expiredAttempt = 1;
        n = 0
        while (n < 3) {
            let randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber > intX) {
                randomSerie = randomSerie.concat(randomNumber + " ");
                n++;
            } else if (randomNumber <= intX) {
                expiredAttempt++;
                randomSerie = "";
                n = 0;
            }
        }
        console.log("Numeri random maggiori di " + intX + " consecutivi per 3 volte: " + randomSerie);
        console.log("dopo " + expiredAttempt + " tentativi");
    } else {
        console.log("Inserire un numero compreso fra 0 e 9");
    }
}

loopUntil(5); */

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* let valueList = [3, 6, 8, "a", "b", 5, true, 33];

console.log("La media dei valori numerici all'interno dell'array è ")
console.log(average(valueList));

function average(array) {
    let totalNumbers = 0;
    let NumbersSum = 0;
    for (i = 0; i < valueList.length; i++) {
        if (typeof valueList[i] === "number") {
            totalNumbers++;
            NumbersSum += (valueList[i]);
        }
    }
    let averageResult = NumbersSum / totalNumbers;
        return averageResult;
} */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* let array = [
    "Ciao",
    "Buongiorno",
    "Arrivederci",
    "Addio"
]

console.log("La parola più lunga all'interno dell'array è:");
console.log(longest(array));

function longest(stringsArray) {
    let LongestString = "";
    for (i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i].length > LongestString.length) {
            LongestString = stringsArray[i];
        }
    }
    return LongestString;
} */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* let string = "SPAM Scam";
console.log("L'email non contiene le parole scam o spam:")
console.log(checkSpam(string));

function checkSpam(emailContent) {
    let lowerCaseString = emailContent.toLowerCase();
    if (lowerCaseString.includes("spam") || lowerCaseString.includes("scam")) {
        return false;
    } else {
        return true;
    }
} */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* let myDate = new Date(2020, 07, 22);
console.log("Ad oggi sono passati " + dayDifference(myDate) + " giorni.");

function dayDifference(pastDate) {
    let today = new Date();
    let millisecondsDifference = today - pastDate;
    let days = Math.floor(millisecondsDifference / 1000 / 60 / 60 / 24);
    return days;
} */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* console.log(matrixGenerator(6, 9));

function matrixGenerator(x, y) {
    let matrix = [];
    let forStorage = 0;
    for (i = 0; i < y; i++) {
        for (n = 0; n < x; n++) {
            matrix[forStorage] = i.toString() + n.toString();
            forStorage ++;
        }
    }
    return matrix;
} */
