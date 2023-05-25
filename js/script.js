console.log(`JS OK`)

// recupero placeholder dal dom 
const placeholder = document.getElementById(`password`);
console.log(password);

// chiedi al utente il nome
const name = prompt(`inserisci il tuo nome`);
console.log(name);

// chiedi al utente il cognome
const surname = prompt(`inserisci il tuo cognome`);
console.log(surname);

// chiedi al utente il colore preferito
const FavCol = prompt(`Qual è il tuo colore preferito?`);
console.log(FavCol);

// unisci queste 3 risposte
const PrePass = name + surname + FavCol;
console.log(PrePass);

// aggiungi 21 alla risposta
const Plus21 = PrePass + 21;
console.log(Plus21);

// mostrala a schermo
placeholder.innerText = Plus21;