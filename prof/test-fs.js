const fs = require("fs");
//Retourne un buffer
fs.readFile("data/list.txt", "utf8",
    (err, data)=>{
        if (err) throw  err;
        console.log(data.toString());
});

console.log("leture du fichier");
//La méthode toString transforme
// le buffer en chaîne de caractères


