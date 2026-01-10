/*On te donne s et p où p contient . et * (* = zéro ou plus du char précédent).
Objectif
Implémenter isMatch(s, p) qui retourne true si s match exactement p.*/

function isMatch(s, p) {
    const n = s.length, m = p.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
    dp[0][0] = true;

    for (let j = 2; j <= m; j++) {
        if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const pc = p[j - 1];
            const sc = s[i - 1];

            if (pc === "." || pc === sc) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pc === "*") {
                const prev = p[j - 2];
                dp[i][j] = dp[i][j - 2];
                if (prev === "." || prev === sc) dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
        }
    }

    return dp[n][m];
}

console.assert(isMatch("aa", "a") === false);
console.assert(isMatch("aa", "a*") === true);
console.assert(isMatch("ab", ".*") === true);
console.assert(isMatch("aab", "c*a*b") === true);
console.assert(isMatch("mississippi", "mis*is*p*.") === false);