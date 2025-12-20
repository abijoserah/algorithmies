/* 📘 Énoncé 
Implémenter une structure LRUCache(capacity).
 Methodes : 
get(key)
put(key, value)
Contraintes
    •	get et put en O(1)
    •	Suppression du moins récemment utilisé
    •	Pas de librairie externe
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.map.size === this.capacity) {
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);
        }
        this.map.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
cache.get(1);      // "A"
cache.put(3, "C"); // supprime clé 2
cache.get(2);      // -1
cache.get(3);      // "C"