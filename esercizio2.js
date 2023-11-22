const arrayFrutta = ["Ananas", "pera", "banana", "mela", "anguria", "arancia"];
const concatenaStringhe = (array) => {
    let concatenazioneStringhe = "";
    for (let i = 0; i < array.length; i++) {
        const iesimi = array[i];
        if (iesimi.charAt(0) === "A" || iesimi.charAt(0) === "a") {
            concatenazioneStringhe += iesimi;
        }
        if (concatenazioneStringhe.length > 10) {
            concatenazioneStringhe = concatenazioneStringhe.substring(0, 10);
            break;
        }
    }
    return concatenazioneStringhe;
};

// console.log(concatenaStringhe(arrayFrutta));
