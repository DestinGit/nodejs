const os = require("os");

console.log(os.platform());

console.log(os.totalmem() - os.freemem());