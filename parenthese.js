/*📘 Exercice / Instructions
On te donne une chaîne contenant { } [ ] ( ).
Objectif
Implémenter isBalanced(str).*/

console.assert(isBalanced("{[()]}") === true);
console.assert(isBalanced("{[(])}") === false);
console.assert(isBalanced("((()))") === true);
console.assert(isBalanced(")(") === false);