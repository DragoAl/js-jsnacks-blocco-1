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

// 2. CONFRONTO LE DUE PAROLE INSERITE E STAMPO SE TROVO LA PIù LUNGA
if(firstWord.length> secondWord.length){
    minWord.innerHTML = `la parola più corta è :${secondWord} `;
    maxWord.innerHTML = `la parola più lunga è :${firstWord} `;
    console.log(firstWord);
}else if (firstWord.length < secondWord.length) {
    minWord.innerHTML = `la parola più corta è :${firstWord} `;
    maxWord.innerHTML = `la parola più lunga è :${secondWord} `;
    console.log("La parola più lunga è : ",secondWord);
}else{
    // NEL CASO IN CUI LE LUNGHEZZE SIANO UGUALI DEVO ITERARE I PROMPT FINO A QUANDO L'UTENTE NON INSERISCE DUE PAROLE DI LUNGHEZZA DIVERSA
    console.log(firstWord.length === secondWord.length);
    let words =firstWord.length === secondWord.length;
    while (words = true){
        let firstIterN = prompt("Inserisci la prima parola");
        let secondIterN = prompt("Inserisci la seconda parola DIVERSA");
        console.log(firstIterN === secondIterN);
        
        
    };

    if(firstIterN.length > secondIterN.length){
        minWord.innerHTML = `la parola più corta è :${secondIterN} `;
        maxWord.innerHTML = `la parola più lunga è :${firstIterN} `;
    } else{
        minWord.innerHTML = `la parola più corta è :${firstIterN} `;
        maxWord.innerHTML = `la parola più lunga è :${secondIterN} `;
    }
};
