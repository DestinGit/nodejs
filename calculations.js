const calc = require('./modules/calc');

console.log(calc.PI);
console.log(calc.calcArea(50));

let args = process.argv.filter((item, index) => index > 1) // FILTRE : Récupérer que les arguments à partir du 2e indice du tableau dans un tableau
console.log(calc.add(args));