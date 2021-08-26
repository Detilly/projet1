const fs = require("fs");
const path = require("path");
console.log("creation du dossier toto");
fs.mkdirSync(path.join(__dirname, "toto"), {});
console.log("le dossier toto a été créé");