/* On te donne un tableau nums.
Objectif
Implémenter productExceptSelf(nums) qui retourne un tableau où res[i] = produit de tous les éléments sauf nums[i], sans utiliser la division. */

function productExceptSelf(nums) {
    const res = Array(nums.length).fill(1);

    let p = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = p;
        p *= nums[i];
    }

    p = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= p;
        p *= nums[i];
    }

    return res;
}

console.assert(JSON.stringify(productExceptSelf([1, 2, 3, 4])) === JSON.stringify([24, 12, 8, 6]));
console.assert(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])) === JSON.stringify([0, 0, 9, 0, 0]));