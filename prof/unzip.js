var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("data/files.tar.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("data/output.txt"))
    .on("finish", ()=>console.log("terminé"));