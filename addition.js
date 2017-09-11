// 1 ère Solution
let result = 0;
process.argv.forEach((item, index) => {
    if (index > 1) {
        result += Number(item);
    }
});
console.log(result);

// 2 ère Solution
// Je récupère la liste des arguments
let args = process.argv.filter((val, index) => index > 1);

// J'applique une fonction qui est un « accumulateur » et qui traite chaque valeur
// d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur
result = args.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

console.log(result);

// 3 ème Solution
result = process.argv
    .filter((item, index) => index > 1) // FILTRE : Récupérer que les arguments à partir du 2e indice du tableau dans un tableau
    .map((item) => parseFloat(item)) // MAP: convertir en float dans un tableau indicé le résultat du filtre
    .reduce((total, current) => total + current, 0); // REDUCE: Applatir chaque élément du tableau en une valeur
console.log(result);