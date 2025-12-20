/* 📘 Exercice / Instructions
On te donne une chaîne représentant une expression mathématique.
Objectif
Implémenter isValidExpression(expr) qui retourne true ou false.
Règles
    •	Parenthèses équilibrées
    •	Pas de double opérateur
    •	Pas de eval
 */

console.assert(isValidExpression("(2+3)*5") === true);
console.assert(isValidExpression("2+*3") === false);
console.assert(isValidExpression("((3+5)") === false);
console.assert(isValidExpression("3+(4/2)-1") === true);