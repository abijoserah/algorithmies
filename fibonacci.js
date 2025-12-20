/*📘 Énoncé
On te donne un entier n (0 ≤ n ≤ 1_000_000).
Travail à faire
Écrire fib(n) qui retourne le nᵉ Fibonacci exact.
Contraintes
    •	Temps < 1 seconde
    •	Pas de récursion naïve
    •	Résultat exact (BigInt)*/


function fib(n) {
    function helper(n) {
        if (n === 0n) return [0n, 1n];

        const [a, b] = helper(n / 2n);
        const c = a * (2n * b - a);
        const d = a * a + b * b;

        return n % 2n === 0n ? [c, d] : [d, c + d];
    }

    return helper(BigInt(n))[0];
}

fib(0)   // 0n
fib(1)   // 1n
fib(10)  // 55n
fib(100) // 354224848179261915075n