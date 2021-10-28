// SNACK 5 Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const arrayCont = document.getElementById("array");
// CREO UN ARRAY VUOTO
const numeriAggiunti = [];

// CHIEDO PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO
for(let i= 0; i < 6; i++){
    const numUser = parseInt(prompt("inserisci un numero"));
    console.log(numUser);
    
    // SE I NUMERI INSERITI SONO DISPARI LI METTO NELL'ARRAY
    if (numUser % 2 != 0) {
        numeriAggiunti.push(numUser);
        console.log(numeriAggiunti);
    }

};
// STAMPO L'ARRAY
arrayCont.innerHTML = `i tuoi numeri sono : ${numeriAggiunti}`

