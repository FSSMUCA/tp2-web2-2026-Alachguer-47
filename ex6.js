let nom = null,
    age = 0,
    ville = "",
    score = undefined,
    actif = false;
let vars = { nom, age, ville, score, actif };

console.log("--- Partie A & B ---");
for (let cle in vars) {
    let v = vars[cle];
    console.log(`${cle} ?? "defaut" -> ${v ?? "valeur par défaut"}`);
    console.log(`${cle} || "defaut" -> ${v || "valeur par défaut"}`);
}

console.log("\n--- Partie C ---");
for (let cle in vars) {
    let v = vars[cle];
    let meme = (v ? ? "defaut") === (v || "defaut") ? "même résultat" : "résultats différents";
    console.log(`${cle.padEnd(6)} : ?? et || -> ${meme}`);
}