const fs = require('fs');

function getData() {
    return new Promise((resolve, reject) => {
        fs.readFile('data/list.txt', 'utf8', (err, data)=>{
            if (err) reject(err);
            resolve(data);
        });
    });
}

function saveData(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('data/list.txt', content, 'utf8', (err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
}
module.exports = {
  getData,
  saveData
};