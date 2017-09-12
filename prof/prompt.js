const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Quel est votre nom ?");
rl.on("line", (name)=> {
    if (!name) {
        rl.close();
    } else {
        console.log("Bonjour " + name);
    }
});
rl.on("close", ()=> console.log("goodbye"));