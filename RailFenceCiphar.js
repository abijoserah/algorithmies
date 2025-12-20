/*📘 Énoncé
On te donne :
    •	une chaîne text
    •	un entier rails ≥ 2
Le texte est écrit en zigzag sur rails lignes, puis lu ligne par ligne.
Travail à faire
    1.	Implémenter encode(text, rails)
    2.	Implémenter decode(text, rails)
Contraintes
    •	Complexité O(n)
    •	Pas de matrice 2D complète
    •	Les espaces comptent comme caractères*/




encode("WE ARE DISCOVERED", 3)
// "WECRLTEERDSOEEAIVD"

decode("WECRLTEERDSOEEAIVD", 3)
// "WE ARE DISCOVERED"

encode("HELLO", 2) // "HLOEL"
decode("HLOEL", 2) // "HELLO"