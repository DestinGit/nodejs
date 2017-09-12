const calc = require("./modules/calc");

console.log(calc.PI);

console.log(calc.calcArea(50));

let args = process.argv.filter(
    (item, index) => {
        return index > 1;
    });
console.log(
    calc.addition(args)
);