const PI = 3.14;

function circleArea(radius) {
    return PI * Math.pow(radius, 2);
}

let addition = (args) => {
    let total = 0;
    args = args || [];
    args.forEach((item) => {
        total += parseInt(item);
    });
    return total;
};

module.exports = {
    PI,
    calcArea: circleArea,
    addition
};