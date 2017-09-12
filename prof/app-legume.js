const legume = require("./modules/legumes");

legume.getData()
    .then((data) => {
        return legume.saveData(data + "\nAubergine");
    })
    .then((success) => {
        console.log("Ecriture dans le fichier " + success);
    });