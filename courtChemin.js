/* 📘 Exercice / Instructions
On te donne un graphe pondéré non orienté sous forme d’objet.
Objectif
Implémenter shortestPath(graph, start, end) qui retourne : 
{
  distance: number,
  path: string[]
}
  Contraintes
    •	Graphes jusqu’à 10 000 nœuds
    •	Pas de brute force
    •	Doit utiliser un algo optimal

*/

function shortestPath(graph, start, end) {
    const distances = {};
    const prev = {};
    const visited = new Set();

    Object.keys(graph).forEach(n => distances[n] = Infinity);
    distances[start] = 0;

    while (true) {
        let node = null;
        let min = Infinity;

        for (const n in distances) {
            if (!visited.has(n) && distances[n] < min) {
                min = distances[n];
                node = n;
            }
        }

        if (node === null) break;
        if (node === end) break;

        visited.add(node);

        for (const neigh in graph[node]) {
            const dist = distances[node] + graph[node][neigh];
            if (dist < distances[neigh]) {
                distances[neigh] = dist;
                prev[neigh] = node;
            }
        }
    }

    const path = [];
    let cur = end;
    while (cur) {
        path.unshift(cur);
        cur = prev[cur];
    }

    return { distance: distances[end], path };
}


const graph = {
    A: { B: 5, C: 2 },
    B: { A: 5, D: 1 },
    C: { A: 2, D: 7 },
    D: { B: 1, C: 7 }
};

const result = shortestPath(graph, "A", "D");

console.assert(result.distance === 6, "❌ distance incorrecte");
console.assert(
    JSON.stringify(result.path) === JSON.stringify(["A", "B", "D"]),
    "❌ chemin incorrect"
);