/* On te donne un tableau heights.
Objectif
Implémenter largestRectangleArea(heights) qui retourne l’aire max d’un rectangle dans l’histogramme. */

function largestRectangleArea(heights) {
    const stack = [];
    let best = 0;

    for (let i = 0; i <= heights.length; i++) {
        const h = i === heights.length ? 0 : heights[i];
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            const top = stack.pop();
            const height = heights[top];
            const left = stack.length ? stack[stack.length - 1] : -1;
            const width = i - left - 1;
            best = Math.max(best, height * width);
        }
        stack.push(i);
    }

    return best;
}

console.assert(largestRectangleArea([2, 1, 5, 6, 2, 3]) === 10);
console.assert(largestRectangleArea([2, 4]) === 4);
console.assert(largestRectangleArea([1, 1]) === 2);