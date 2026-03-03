let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let v = nombres[i];
    let label = String(v);

    if (Number.isNaN(v)) {
        console.log(label + " -> INVALIDE");
    } else if (v === Infinity || v === -Infinity) {
        console.log(label + " -> INFINI");
    } else if (v === 0 && (1 / v === -Infinity)) {
        console.log("0 -> ZERO NEGATIF");
    } else if (Number.isSafeInteger(v)) {
        console.log(label + " -> ENTIER SUR");
    } else if (typeof v === 'number' && v % 1 === 0) {
        console.log(label + " -> ENTIER HORS LIMITES");
    } else {
        console.log(label + " -> DECIMAL");
    }
}