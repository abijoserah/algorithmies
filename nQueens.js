/*On te donne un entier n.
    Objectif
Implémenter solveNQueens(n) qui retourne toutes les solutions, chaque solution étant un tableau de strings(Q et.).*/

function solveNQueens(n) {
    const res = [];
    const cols = new Set();
    const d1 = new Set();
    const d2 = new Set();
    const board = Array.from({ length: n }, () => Array(n).fill("."));

    const backtrack = (r) => {
        if (r === n) {
            res.push(board.map(row => row.join("")));
            return;
        }
        for (let c = 0; c < n; c++) {
            const a = r - c;
            const b = r + c;
            if (cols.has(c) || d1.has(a) || d2.has(b)) continue;
            cols.add(c); d1.add(a); d2.add(b);
            board[r][c] = "Q";
            backtrack(r + 1);
            board[r][c] = ".";
            cols.delete(c); d1.delete(a); d2.delete(b);
        }
    };

    backtrack(0);
    return res;
}


console.assert(solveNQueens(1).length === 1);
console.assert(solveNQueens(4).length === 2);
console.assert(solveNQueens(5).length === 10);