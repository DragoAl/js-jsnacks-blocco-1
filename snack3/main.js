// SNACK3 Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// 0. CREO LE VARIABILI
const sommaCont = document.getElementById("somma");
let numArr = [];
let somma = 0;

// CHIEDO 10 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO E LO INSERISCO IN UN ARRAY VUOTO E LI SOMMO
for( let i = 0; i < 10; i++){
    let numAdded = parseInt(prompt("Inserisci un numero"));
    console.log(numAdded);
    numArr.push(numAdded);
    somma += numArr[i];
    // somma += numAdded; NON DOVENDO TENERE I NUMERI IN MEMORIA NON MI SERVE CHE I NUMERI VENGANO SALVATI IN UN ARRAY
}
console.log(numArr);
console.log(somma);

// STAMPO IL RISULTATO
sommaCont.innerHTML =`La somma è : ${somma}`;


