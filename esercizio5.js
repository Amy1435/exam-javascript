const power = (base, exponent) => {
    if (typeof base !== "number" && typeof exponent !== "number") {
        throw new Error(`${base} e ${exponent} non e' un numero `);
    } else if (typeof base !== "number") {
        throw new Error(`${base} non e' un numero `);
    } else if (typeof exponent !== "number") {
        throw new Error(`${exponent} non e' un numero `);
    }
    try {
        const elevamentoAllaPotenza = base ** exponent;
        return elevamentoAllaPotenza;
    } catch {
        return null;
    } finally {
        console.log("operazione completata");
    }
};
// const risultato = power("h", "h");
// console.log(risultato);
