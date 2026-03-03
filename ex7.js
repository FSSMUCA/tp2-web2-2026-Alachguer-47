let nomProduit = "Clavier mécanique",
    prix = 89.99,
    quantite = 3,
    codePromo = null,
    reductionPourcentage = 10,
    estMembre = true,
    soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal);

let reduction = (codePromo !== null && estMembre) ? (sousTotal * reductionPourcentage / 100) : 0;
console.log("Réduction : " + reduction);

let totalFinal = sousTotal - reduction;
let paiementAccepte = soldeCompte >= totalFinal;

console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

if (paiementAccepte) {
    let nouveauSolde = soldeCompte - totalFinal;
    console.log("Nouveau solde : " + nouveauSolde);
}

console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Refusé"));
console.log("Solde     : " + (soldeCompte - (paiementAccepte ? totalFinal : 0)) + " MAD");
console.log("=========================");