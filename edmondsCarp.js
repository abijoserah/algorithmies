/*On te donne un graphe orienté pondéré par capacité capacity[u][v], une source s et un puits t.
    Objectif
Implémenter maxFlow(capacity, s, t) qui retourne le flow maximum.*/

function maxFlow(capacity, s, t) {
    const n = capacity.length;
    const flow = Array.from({ length: n }, () => Array(n).fill(0));
    let total = 0;

    while (true) {
        const parent = Array(n).fill(-1);
        parent[s] = s;
        const q = [s];

        for (let qi = 0; qi < q.length; qi++) {
            const u = q[qi];
            for (let v = 0; v < n; v++) {
                if (parent[v] !== -1) continue;
                if (capacity[u][v] - flow[u][v] <= 0) continue;
                parent[v] = u;
                q.push(v);
            }
        }

        if (parent[t] === -1) break;

        let aug = Infinity;
        for (let v = t; v !== s; v = parent[v]) {
            const u = parent[v];
            aug = Math.min(aug, capacity[u][v] - flow[u][v]);
        }

        for (let v = t; v !== s; v = parent[v]) {
            const u = parent[v];
            flow[u][v] += aug;
            flow[v][u] -= aug;
        }

        total += aug;
    }

    return total;
}

const cap = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0],
];
console.assert(maxFlow(cap, 0, 5) === 23);