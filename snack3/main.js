// SNACK3 Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// 0. CREO LE VARIABILI
const sommaCont = document.getElementById("somma");
let numArr = [];
let somma = 0;

// CHIEDO 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO E LO INSERISCO IN UN ARRAY VUOTO
for( let i = 0; i < 10; i++){
    let numAdded = parseInt(prompt("Inserisci un numero"));
    console.log(numAdded);
    numArr.push(numAdded);
}
console.log(numArr);

// SOMMO GLI ELEMENTI ALL'INTERNO DELL'ARRAY
for( let i = 0; i < numArr.length; i++){
    somma += numArr[i];
}
console.log(somma);

// STAMPO IL RISULTATO
sommaCont.innerHTML =`La somma è : ${somma}`;


