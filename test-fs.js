const fs = require("fs");
//Retourne un buffer
// let content = fs.readFileSync("data/list.txt", "utf8");
//La méthode toString transforme
// le buffer en chaîne de caractères
// console.log(content.toString());

fs.readFile("data/list.txt", "utf8", (err, data) => {
    if(err) throw err;

    console.log(data.toString());
});

console.log('lecture du fichier');