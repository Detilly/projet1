console.log("Salut tout le monde!");
const personne = require('./personne');
console.log("Salut mon cher ", personne.nom);
console.log("tu as "+ personne.age + " ans");
const total = personne.age + 1;
console.log("tu vas avoir ${total} ans");
console.log("salut mon cher &{personne.nom}, tu as ${personne.age} ans");
const Personne = require("./classePersonne");
const paul = new Personne("Paul Larue", 38);
paul.salutations();
const alain = new Personne("Alain Pilon, 22");
alain.salutations();