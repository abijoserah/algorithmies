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


const cache = new LRUCache(2);

cache.put(1, "A");
cache.put(2, "B");
cache.get(1);      // "A"
cache.put(3, "C"); // supprime clé 2
cache.get(2);      // -1
cache.get(3);      // "C"