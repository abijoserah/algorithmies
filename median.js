/* On te donne deux tableaux triés nums1 et nums2.
Objectif
Implémenter findMedianSortedArrays(nums1, nums2) en O(log(n+m)). */

function findMedianSortedArrays(a, b) {
    if (a.length > b.length) return findMedianSortedArrays(b, a);

    let total = a.length + b.length;
    let half = Math.floor(total / 2);
    let l = 0, r = a.length;

    while (true) {
        let i = Math.floor((l + r) / 2);
        let j = half - i;

        let aL = i > 0 ? a[i - 1] : -Infinity;
        let aR = i < a.length ? a[i] : Infinity;
        let bL = j > 0 ? b[j - 1] : -Infinity;
        let bR = j < b.length ? b[j] : Infinity;

        if (aL <= bR && bL <= aR) {
            if (total % 2) return Math.min(aR, bR);
            return (Math.max(aL, bL) + Math.min(aR, bR)) / 2;
        } else if (aL > bR) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
}

console.assert(findMedianSortedArrays([1, 3], [2]) === 2);
console.assert(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
console.assert(findMedianSortedArrays([0, 0], [0, 0]) === 0);