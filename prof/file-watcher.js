const fs = require("fs");
//Initialisation d'un espion
var watcher = fs.watch("data/test.txt");
//Ecouteur pour l'événement change
watcher.on("change", (eventType, filename) => {
    console.log(filename + " modifié");
});
//Modification du fichier*
/*
fs.appendFile("data/list.txt", "\nOranges", (err)=>{
    if(err) throw err;
    console.log("ajout à list.txt");
});*/