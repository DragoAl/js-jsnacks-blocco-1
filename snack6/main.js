// SNACK6 Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
// CREO UN ARRAY VUOTO
const randNumbers= [];

// FACCIO UN CICLO PER POPOLARE L'ARRAY FINO A 50 ELEMENTI
while (randNumbers.length < 50){
    let number = Math.floor(Math.random() * 100) + 1;
    let found = false;

    // CONTROLLO CHE NON CI SIANO DOPPIONI
    for ( let i = 0; i < randNumbers.length; i++){
        if ( number === randNumbers[i] ) {
            found = true
        }
    }
    
    if (found == false) {
        randNumbers.push(number);
    }
}
    

console.log(randNumbers);

  



