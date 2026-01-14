/*On te donne une grille board de lettres et un tableau words.
Objectif
Implémenter findWords(board, words) qui retourne tous les mots trouvables en bougeant haut/bas/gauche/droite sans réutiliser une case.*/


const b1 = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
const w1 = ["oath", "pea", "eat", "rain"];
const out1 = findWords(b1, w1).sort();
console.assert(JSON.stringify(out1) === JSON.stringify(["eat", "oath"]));