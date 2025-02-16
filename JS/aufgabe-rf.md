## Aufgabe: Berechnung der Summe von 1 bis n mit Rekursion


Schreibe eine rekursive Funktion sumUpTo(n), die die Summe aller Zahlen von 1 bis n berechnet.

1+2+3+4+5+6

Anforderungen:
- Die Funktion soll sich selbst aufrufen, um die Summe schrittweise zu berechnen.
- Es muss eine Abbruchbedingung (Basisfall) geben, damit die Rekursion nicht unendlich läuft.
- Die Funktion soll nur eine Zahl als Parameter n akzeptieren.
Falls n = 0 ist, soll die Funktion 0 zurückgeben.

---------


## Aufgabe: Rekursiver Count-Up (Hochzählen)

Schreibe eine rekursive Funktion countUp(n), die von 1 bis n hochzählt.

Anforderungen:
- Die Funktion soll sich selbst aufrufen, um die Zahlen von 1 bis n auszugeben.
- Es muss eine Abbruchbedingung (Basisfall) geben, damit die Rekursion stoppt.
- Falls n <= 0 ist, soll nichts ausgegeben werden.

countUp(5);
Erwartete Ausgabe:
1
2
3
4
5


### **Aufgabe: Rekursives Multiplizieren**  
Schreibe eine **rekursive Funktion** `multiply(a, b)`, die zwei Zahlen **ohne das `*`-Zeichen** multipliziert.

---

### **Anforderungen:**
1. Die Funktion soll sich **selbst aufrufen**, um die Multiplikation durch wiederholte Addition zu berechnen.
2. Es muss eine **Abbruchbedingung (Basisfall)** geben:
   - Wenn `b == 0`, soll die Funktion `0` zurückgeben (da `a * 0 = 0`).
3. **Nur Addition (`+`) und Rekursion sind erlaubt** – keine Schleifen oder `*`-Operatoren.

---

### **Erwartetes Verhalten:**
```javascript
console.log(multiply(3, 4)); // 12 (3 + 3 + 3 + 3)
console.log(multiply(5, 2)); // 10 (5 + 5)
console.log(multiply(7, 0)); // 0
console.log(multiply(2, 1)); // 2
```