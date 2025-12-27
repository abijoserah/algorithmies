/* On te donne une chaîne encodée comme 3[a2[c]].
Objectif
Implémenter decodeString(s) qui retourne la chaîne décodée. */


console.assert(decodeString("3[a]2[bc]") === "aaabcbc");
console.assert(decodeString("3[a2[c]]") === "accaccacc");
console.assert(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");