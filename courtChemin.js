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