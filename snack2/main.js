// SNACK2 L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 0. CREO LE VARIABILI DOVE STAMPARE IN HTML
const minWord =document.getElementById("min");
const maxWord = document.getElementById("max");

// 1. CHIEDO ALL'UTENTE DI INSERIRE LE PAROLE
// 1.1 CHIEDO LA PRIMA PAROLA
let firstWord = prompt("Inserisci la prima parola");
console.log(firstWord.length);

// 1.2 CHIEDO LA SECONDA PAROLA
let secondWord = prompt("Inserisci la seconda parola");
console.log(secondWord.length);

// 2. CONFRONTO LE DUE PAROLE INSERITE E STAMPO PRIMA LA PAROLA PIU' CORTA E POI LA PIU' LUNGA
if(firstWord.length> secondWord.length){
    minWord.innerHTML = `la parola più corta è :${secondWord} `;
    maxWord.innerHTML = `la parola più lunga è :${firstWord} `;
    console.log(firstWord);
}else if (firstWord.length < secondWord.length) {
    minWord.innerHTML = `la parola più corta è :${firstWord} `;
    maxWord.innerHTML = `la parola più lunga è :${secondWord} `;
    console.log("La parola più lunga è : ",secondWord);
}else{
    minWord.innerHTML = `le parole sono lunghe uguali :${firstWord} `;
    maxWord.innerHTML = `le parole sono lunghe uguali :${secondWord} `;
 
};
