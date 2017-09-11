const legume = require('./modules/legumes');

legume.getData().then((data) => legume.saveData(data + '\nAubergine na nga'))
    // .then((success) => console.log('Ecriture dans fichier'));
    .then((success) => legume.getData())
    .then((data) => console.log(data));
