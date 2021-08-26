const fs = require("fs");
const path = require("path");
console.log("creation du dossier toto");
fs.mkdir(path.join(__dirname, "toto"));
console.log("le dossier toto a été créé");