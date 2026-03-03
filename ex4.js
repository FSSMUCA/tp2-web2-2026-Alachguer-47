let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let differents = 0;

for (let i = 0; i < paires.length; i++) {
    let v1 = paires[i][0];
    let v2 = paires[i][1];

    let resFaible = (v1 == v2);
    let resFort = (v1 === v2);

    if (resFaible !== resFort) differents++;

    // Formatage pour l'affichage
    let label1 = typeof v1 === 'string' ? `"${v1.replace(/\n/g, '\\n')}"` : v1;
    let label2 = typeof v2 === 'string' ? `"${v2.replace(/\n/g, '\\n')}"` : v2;

    console.log(`${label1} == ${label2} \t -> ${resFaible}    |   ${label1} === ${label2} \t -> ${resFort}`);
}

console.log("---");
console.log(differents + " paire(s) où == et === donnent des résultats différents");