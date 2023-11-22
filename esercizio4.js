window.addEventListener("load", () => {
    const bottone = document.querySelector("button");
    const input = document.querySelector("input");
    const p = document.getElementById("errorMessage");
    const ul = document.getElementById("tasks");

    bottone.addEventListener("click", () => {
        const valoreInput = input.value;
        if (valoreInput === "") {
            p.innerText = `Per favore, inserisci del testo.`;
        } else {
            p.innerText = "";
            const li = document.createElement("li");
            li.innerText = valoreInput;
            ul.appendChild(li);
        }
    });
});
