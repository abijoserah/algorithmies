/* 📘 Exercice / Instructions
On te donne une chaîne représentant une expression mathématique.
Objectif
Implémenter isValidExpression(expr) qui retourne true ou false.
Règles
    •	Parenthèses équilibrées
    •	Pas de double opérateur
    •	Pas de eval
 */

function isValidExpression(expr) {
    const stack = [];
    const operators = "+-*/";

    let prev = "";

    for (const c of expr.replace(/\s/g, "")) {
        if (c === "(") stack.push(c);
        else if (c === ")") {
            if (!stack.pop()) return false;
        }

        if (operators.includes(c) && operators.includes(prev)) return false;
        prev = c;
    }

    return stack.length === 0 && !operators.includes(prev);
}

console.assert(isValidExpression("(2+3)*5") === true);
console.assert(isValidExpression("2+*3") === false);
console.assert(isValidExpression("((3+5)") === false);
console.assert(isValidExpression("3+(4/2)-1") === true);