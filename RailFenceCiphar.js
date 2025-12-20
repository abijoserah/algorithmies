/*📘 Énoncé
On te donne :
    •	une chaîne text
    •	un entier rails ≥ 2
Le texte est écrit en zigzag sur rails lignes, puis lu ligne par ligne.
Travail à faire
    1.	Implémenter encode(text, rails)
    2.	Implémenter decode(text, rails)
Contraintes
    •	Complexité O(n)
    •	Pas de matrice 2D complète
    •	Les espaces comptent comme caractères*/

function encode(text, rails) {
    if (rails === 1) return text;

    const rows = Array.from({ length: rails }, () => []);
    let row = 0, dir = 1;

    for (const c of text) {
        rows[row].push(c);
        row += dir;
        if (row === 0 || row === rails - 1) dir *= -1;
    }

    return rows.flat().join('');
}

function decode(text, rails) {
    if (rails === 1) return text;

    const pattern = [];
    let row = 0, dir = 1;

    for (let i = 0; i < text.length; i++) {
        pattern.push(row);
        row += dir;
        if (row === 0 || row === rails - 1) dir *= -1;
    }

    const rows = Array.from({ length: rails }, () => []);
    let index = 0;

    for (let r = 0; r < rails; r++) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] === r) {
                rows[r].push(text[index++]);
            }
        }
    }

    return pattern.map(r => rows[r].shift()).join('');
}


encode("WE ARE DISCOVERED", 3)
// "WECRLTEERDSOEEAIVD"

decode("WECRLTEERDSOEEAIVD", 3)
// "WE ARE DISCOVERED"

encode("HELLO", 2) // "HLOEL"
decode("HLOEL", 2) // "HELLO"