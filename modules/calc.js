const PI = 3.14;

function circleArea(radius) {
    return PI * Math.pow(radius, 2);
}

let add = (args) => {
    // let args = Array.from(arguments);
    args = args || [];

    return args
        .map((item) => parseFloat(item)) // MAP: convertir en float dans un tableau indicé le résultat du filtre
        .reduce((total, current) => total + current, 0); // REDUCE: Applatir chaque élément du tableau en une valeur
};

module.exports = {
    PI: PI,
    calcArea: circleArea,
    add: add
};