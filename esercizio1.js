const nomeUtente = prompt("Inserisci il tuo nome");
const annoNascitaUtente = Number(prompt("Inserisci il tuo anno di nascita"));
if (
    (annoNascitaUtente % 4 === 0 && annoNascitaUtente % 100) ||
    annoNascitaUtente % 400 === 0
) {
    alert(`Ciao ${nomeUtente}, sei nato in un anno bisestile`);
} else {
    alert(`Ciao ${nomeUtente}, non sei nato in un anno bisestile`);
}
