// SNACK4 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// CREO LA VARIABILE DOVE STAMPARE IL RISULTATO
const invito = document.getElementById("invito");
// 1.CREO L'ARRAY DEGLI INVITATI
const invitati = ["luca", "marco", "alberto", "leonardo", "arianna", "chiara", ]

// 2.CHIEDO IL NOME ALL'UTENTE
const userName = prompt("Inserisci il tuo Nome");

// 3.CONFRONTO IL NOME INSERITO CON I NOMI DELL'ARRAY
let presenteInLista = false
for (let i = 0; i < invitati.length; i++){
    if (userName === invitati[i]) {
        presenteInLista = true;

    }
    
}
if (presenteInLista === true) {
    console.log("Benvenuto");
    invito.innerHTML=("Benvenuto");

    
}else{
    console.log("Mi Dispiace NON sei in Lista");
    invito.innerHTML=("Mi Dispiace NON sei in Lista");
}
