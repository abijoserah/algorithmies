/* On te donne beginWord, endWord et une liste wordList.
Objectif
Implémenter ladderLength(beginWord, endWord, wordList) qui retourne la longueur de la transformation la plus courte. */

function ladderLength(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length) {
        const [word, len] = queue.shift();
        if (word === endWord) return len;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const next =
                    word.slice(0, i) +
                    String.fromCharCode(c) +
                    word.slice(i + 1);

                if (set.has(next)) {
                    set.delete(next);
                    queue.push([next, len + 1]);
                }
            }
        }
    }

    return 0;
}

console.assert(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5
);
console.assert(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) === 0
);