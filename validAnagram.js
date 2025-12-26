/* On te donne deux chaînes a et b.
Objectif
Implémenter isAnagram(a, b) qui retourne true si ce sont des anagrammes. */

function isAnagram(a, b) {
    if (a.length !== b.length) return false;

    const count = new Map();
    for (const c of a) count.set(c, (count.get(c) ?? 0) + 1);

    for (const c of b) {
        const n = (count.get(c) ?? 0) - 1;
        if (n < 0) return false;
        n === 0 ? count.delete(c) : count.set(c, n);
    }

    return count.size === 0;
}

console.assert(isAnagram("listen", "silent") === true);
console.assert(isAnagram("anagram", "nagaram") === true);
console.assert(isAnagram("rat", "car") === false);