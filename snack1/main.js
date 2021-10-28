// SNACK1 L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// 0. CREO UNA VARIABILE DOVE STAMPARE IN HTML
const maxNum = document.getElementById("max");

// 1. CHIEDO ALL'UTENTE I NUMERI
// 1.1 CHIEDO IL PRIMO NUMERO
const firstNum = parseInt(prompt("Inserisci il primo numero"));
console.log(firstNum);

// 1.2 CHIEDO IL SECONDO NUMERO
const secondNum = parseInt(prompt("Inserisci il secondo numero"));
console.log(secondNum);

// 2. CONFRONTO I DUE NUMERI INSERITI E STAMPO IL MAGGIORE
if(firstNum > secondNum){
    maxNum.innerHTML = ("il numero maggiore è : ",firstNum);
    console.log(firstNum);
}else {
    maxNum.innerHTML = (secondNum);
    console.log("il numero maggiore è : ",secondNum);
};

