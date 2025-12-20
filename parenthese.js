/*📘 Exercice / Instructions
On te donne une chaîne contenant { } [ ] ( ).
Objectif
Implémenter isBalanced(str).*/

function isBalanced(str) {
    const map = { ")": "(", "]": "[", "}": "{" };
    const stack = [];

    for (const c of str) {
        if (map[c]) {
            if (stack.pop() !== map[c]) return false;
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
}

console.assert(isBalanced("{[()]}") === true);
console.assert(isBalanced("{[(])}") === false);
console.assert(isBalanced("((()))") === true);
console.assert(isBalanced(")(") === false);