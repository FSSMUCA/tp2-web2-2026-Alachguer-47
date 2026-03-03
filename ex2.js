let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let element = valeurs[i];
    let nomValeur = String(element);

    if (element === "") {
        nomValeur = "(chaine vide)";
    }

    if (element) {
        console.log(nomValeur + " -> truthy");
    } else {
        console.log(nomValeur + " -> falsy");
    }
}