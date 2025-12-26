/* On te donne beginWord, endWord et une liste wordList.
Objectif
Implémenter ladderLength(beginWord, endWord, wordList) qui retourne la longueur de la transformation la plus courte. */


console.assert(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5
);
console.assert(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) === 0
);