const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.rating = 6;
book.increaseRating = (num) => {
    book.rating = book.rating + num;
    return book.rating;
};
delete book.year;
book.increaseRating(3);
const stampaOggetto = (oggetto) => {
    let risultato = "";
    const iesimi = Object.entries(oggetto);
    for (let i = 0; i < iesimi.length; i++) {
        const iesimiOggetto = iesimi[i];
        const chiave = iesimiOggetto[0];
        const valore = iesimiOggetto[1];
        risultato += `${chiave}: ${valore}\n`;
    }
    return risultato;
};

const risultato = stampaOggetto(book);
console.log(risultato);
