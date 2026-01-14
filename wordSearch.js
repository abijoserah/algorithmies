/*On te donne une grille board de lettres et un tableau words.
Objectif
Implémenter findWords(board, words) qui retourne tous les mots trouvables en bougeant haut/bas/gauche/droite sans réutiliser une case.*/

function findWords(board, words) {
    const root = {};
    for (const w of words) {
        let node = root;
        for (const ch of w) node = node[ch] ??= {};
        node.$ = w;
    }

    const res = [];
    const R = board.length;
    const C = board[0].length;

    const dfs = (r, c, node) => {
        const ch = board[r][c];
        const next = node[ch];
        if (!next) return;

        if (next.$) {
            res.push(next.$);
            next.$ = null;
        }

        board[r][c] = "#";

        if (r > 0 && board[r - 1][c] !== "#") dfs(r - 1, c, next);
        if (c > 0 && board[r][c - 1] !== "#") dfs(r, c - 1, next);
        if (r + 1 < R && board[r + 1][c] !== "#") dfs(r + 1, c, next);
        if (c + 1 < C && board[r][c + 1] !== "#") dfs(r, c + 1, next);

        board[r][c] = ch;

        if (Object.keys(next).length === 0) delete node[ch];
    };

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) dfs(r, c, root);
    }

    return res;
}

const b1 = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
];
const w1 = ["oath", "pea", "eat", "rain"];
const out1 = findWords(b1, w1).sort();
console.assert(JSON.stringify(out1) === JSON.stringify(["eat", "oath"]));