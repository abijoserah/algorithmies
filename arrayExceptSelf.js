/* On te donne un tableau nums.
Objectif
Implémenter productExceptSelf(nums) qui retourne un tableau où res[i] = produit de tous les éléments sauf nums[i], sans utiliser la division. */


console.assert(JSON.stringify(productExceptSelf([1, 2, 3, 4])) === JSON.stringify([24, 12, 8, 6]));
console.assert(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])) === JSON.stringify([0, 0, 9, 0, 0]));