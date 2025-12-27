/* On te donne une chaîne encodée comme 3[a2[c]].
Objectif
Implémenter decodeString(s) qui retourne la chaîne décodée. */

function decodeString(s) {
    const stack = [];
    let num = 0;
    let str = "";

    for (const c of s) {
        if (!isNaN(c)) {
            num = num * 10 + Number(c);
        } else if (c === "[") {
            stack.push([str, num]);
            str = "";
            num = 0;
        } else if (c === "]") {
            const [prev, n] = stack.pop();
            str = prev + str.repeat(n);
        } else {
            str += c;
        }
    }

    return str;
}

console.assert(decodeString("3[a]2[bc]") === "aaabcbc");
console.assert(decodeString("3[a2[c]]") === "accaccacc");
console.assert(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");