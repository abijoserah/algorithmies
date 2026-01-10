/*On te donne s et p où p contient . et * (* = zéro ou plus du char précédent).
Objectif
Implémenter isMatch(s, p) qui retourne true si s match exactement p.*/

console.assert(isMatch("aa", "a") === false);
console.assert(isMatch("aa", "a*") === true);
console.assert(isMatch("ab", ".*") === true);
console.assert(isMatch("aab", "c*a*b") === true);
console.assert(isMatch("mississippi", "mis*is*p*.") === false);