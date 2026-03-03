let u_nom = "   Fatima   ",
    u_age = "23",
    u_email = "fatima@example",
    u_score = "150pts",
    u_admin = "false",
    u_connex = null,
    u_nbConnex = "0";

// 1. Nom
let nomCorrige = u_nom.trim() || "Inconnu";

// 2. Age
let ageNum = parseInt(u_age);
let ageStatus = (!isNaN(ageNum) && ageNum > 0) ? `(${ageNum} (valide))` : "invalide";

// 3. Email
let emailValide = u_email.includes("@") && u_email.indexOf(".") > u_email.indexOf("@");
let emailStatus = emailValide ? "valide" : "invalide : pas de point après @";

// 4. Score
let scoreNum = parseInt(u_score) || 0;

// 5. Admin (Conversion manuelle impérative)
let isAdmin = u_admin === "true";

// 6. Dernière connexion
let derniere = u_connex ? "Jamais connecté" : "Aucune connexion récente";

// 7. Nombre connexions
let nb = Number(u_nbConnex);
let nbStatus = nb === 0 ? "Aucune connexion" : nb;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageStatus}`);
console.log(`email            : "${u_email}" (${emailStatus})`);
console.log(`scoreJeu         : ${scoreNum} (extrait depuis "${u_score}")`);
console.log(`estAdmin         : ${isAdmin} (conversion manuelle effectuée)`);
console.log(`derniereConnexion: "${derniere}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbStatus}"`);
console.log("================================");