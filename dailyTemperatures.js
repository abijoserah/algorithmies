/* On te donne un tableau temps (températures par jour).
Objectif
Implémenter dailyTemperatures(temps) qui retourne un tableau res où res[i] = nombre de jours à attendre pour avoir une température plus chaude, sinon 0. */

console.assert(JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) === JSON.stringify([1, 1, 4, 2, 1, 1, 0, 0]));
console.assert(JSON.stringify(dailyTemperatures([30, 40, 50, 60])) === JSON.stringify([1, 1, 1, 0]));
console.assert(JSON.stringify(dailyTemperatures([60, 50, 40])) === JSON.stringify([0, 0, 0]));