
**1. “Hallo Welt” ausgeben**  

Das klassische erste Programm gibt eine einfache Nachricht aus:

```
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Hallo Welt</title>
    <script>
        function gruessen() {
            alert('Hallo Welt');
        }
    </script>
</head>
<body>
    <button onclick="gruessen()">Klicke mich!</button>
</body>
</html>
```

In diesem Beispiel wird beim Klicken des Buttons eine Meldung mit “Hallo Welt” angezeigt.

**2. Einfache Berechnung**

Ein kleines Programm, das zwei Zahlen addiert:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Addition</title>
    <script>
        function addiere() {
            let zahl1 = parseFloat(document.getElementById('zahl1').value);
            let zahl2 = parseFloat(document.getElementById('zahl2').value);
            let summe = zahl1 + zahl2;
            alert('Die Summe ist: ' + summe);
            document.getElementById('ergebnis').innerText = "Ergebnis: " + summe;
        }
    </script>
</head>
<body>
    <input type="number" id="zahl1" placeholder="Erste Zahl">
    <input type="number" id="zahl2" placeholder="Zweite Zahl">
    <button onclick="addiere()">Addieren</button>
    <h2 id="ergebnis">Ergebnis: </h2>
</body>
</html>
```

Hier können Sie zwei Zahlen eingeben, und beim Klicken des Buttons wird deren Summe berechnet und angezeigt.

  

**4. Hintergrundfarbe ändern**


Ein Programm, das die Hintergrundfarbe der Seite ändert:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Hintergrundfarbe ändern</title>
    <script>
        function farbeAendern() {
            document.body.style.backgroundColor = 'lightblue';
        }
    </script>
</head>
<body>
    <button onclick="farbeAendern()">Farbe ändern</button>
</body>
</html>
```

Nach dem Klicken des Buttons ändert sich die Hintergrundfarbe der Seite zu Hellblau.

  

**5. Einfache To-Do-Liste**

  

Ein kleines Programm, um Aufgaben hinzuzufügen:

```
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>To-Do-Liste</title>
    <script>
        function aufgabeHinzufuegen() {
            let aufgabe = document.getElementById('aufgabe').value;
            let liste = document.getElementById('liste');
            let eintrag = document.createElement('li');
            eintrag.textContent = aufgabe;
            liste.appendChild(eintrag);
            document.getElementById('aufgabe').value = '';
        }
    </script>
</head>
<body>
    <input type="text" id="aufgabe" placeholder="Neue Aufgabe">
    <button onclick="aufgabeHinzufuegen()">Hinzufügen</button>
    <ul id="liste"></ul>
</body>
</html>
```

Hier können Sie Aufgaben eingeben, die dann zur Liste hinzugefügt werden.

  

![[Screenshot 2025-02-12 at 10.56.50.png]]

```js
// Funktion zur Addition zweier Zahlen
function addiere(a, b) {
  return a + b;
}

// Funktion zur Subtraktion zweier Zahlen
function subtrahiere(a, b) {
  return a - b;
}

// Funktion zur Multiplikation zweier Zahlen
function multipliziere(a, b) {
  return a * b;
}

// Funktion zur Division zweier Zahlen
function dividiere(a, b) {
  return a / b;
}

// Hauptfunktion, die basierend auf der übergebenen Operation die passende Berechnung ausführt
function calculate(operation) {
  // Werte aus den Eingabefeldern auslesen und in Zahlen umwandeln
  var zahl1 = parseFloat(document.getElementById('zahl1').value);
  var zahl2 = parseFloat(document.getElementById('zahl2').value);
  var result;

  // Überprüfen, welche Operation ausgeführt werden soll
  if (operation === 'add') {
    result = addiere(zahl1, zahl2);
  } else if (operation === 'sub') {
    result = subtrahiere(zahl1, zahl2);
  } else if (operation === 'mul') {
    result = multipliziere(zahl1, zahl2);
  } else if (operation === 'div') {
    result = dividiere(zahl1, zahl2);
  } else {
    result = "Unbekannte Operation";
  }

  // Ergebnis im HTML-Element mit der ID "ergebnis" anzeigen
  document.getElementById('ergebnis').innerText = "Ergebnis: " + result;
}
```

**Kurze Erklärung:**

1. **Einzelne Funktionen:**

• Vier Funktionen (addiere, subtrahiere, multipliziere, dividiere) führen die jeweiligen mathematischen Operationen aus.

2. **Hauptfunktion calculate:**

• Liest die Eingaben aus den Feldern (mit der ID zahl1 und zahl2) aus und wandelt sie in Zahlen um.

• Verwendet einfache if/else-Abfragen, um zu bestimmen, welche Operation ausgeführt werden soll.

• Ruft die entsprechende Funktion auf und speichert das Ergebnis.

• Zeigt das Ergebnis im HTML-Element mit der ID ergebnis an.



![[Screenshot 2025-02-12 at 10.59.54.png]]



**Was sind Arrow Functions?**

  

Arrow Functions (Pfeilfunktionen) wurden mit ES6 eingeführt und sind eine kompakte Möglichkeit, Funktionen zu schreiben. Sie haben eine kürzere Syntax als normale Funktionsausdrücke.

  

**Vergleich: Anonyme Funktion vs. Arrow Function**

  

**Normale anonyme Funktion:**

```
let addiere = function(a, b) {
    return a + b;
};
console.log(addiere(3, 5)); // Ausgabe: 8
```

**Gleiche Funktion als Arrow Function:**

```
let addiere = (a, b) => a + b;
console.log(addiere(3, 5)); // Ausgabe: 8
```

💡 **Vorteil:** Kürzere Schreibweise! Kein function-Keyword nötig und {} sowie return können weggelassen werden, wenn nur eine Anweisung vorhanden ist.

**Grundlagen der Arrow Functions**


**1. Einfache Arrow Function mit einem Parameter**

```
let verdoppeln = x => x * 2;
console.log(verdoppeln(4)); // Ausgabe: 8
```

• Bei **einem** Parameter können die () weggelassen werden.

• {} und return sind nicht erforderlich, wenn die Funktion nur **eine einzige Anweisung** hat.


**2. Mehrere Parameter**

```
let multiplizieren = (a, b) => a * b;
console.log(multiplizieren(6, 7)); // Ausgabe: 42
```

Hier sind Klammern () um die Parameter erforderlich, weil es **mehr als einen Parameter** gibt.

  
**3. Mehrzeilige Arrow Function**

```
let begruessung = (name) => {
    let text = "Hallo, " + name + "!";
    return text;
};
console.log(begruessung("Lisa")); // Ausgabe: Hallo, Lisa!
```

• Falls der Funktionskörper **mehrere Anweisungen** enthält, müssen {} genutzt werden und return muss explizit geschrieben werden.


➡️ **Lösung in der nächsten Nachricht, falls du sie brauchst!** 😉

**Zusammenfassung**

|**Typ**|**Syntax**|**Vorteil**|
|---|---|---|
|**Normale Funktion**|function name() {}|Standard, unterstützt this|
|**Anonyme Funktion**|let x = function() {}|Kein Name, praktisch für Callbacks|
|**Arrow Function**|let x = () => {}|Kürzer, kein eigenes this|

Arrow Functions sind besonders nützlich für **kurze Funktionen**, **Callbacks** und **funktionale Programmierung**.




## Coding Policies


Die konsistente Formatierung von JavaScript-Code ist essenziell, um die Lesbarkeit und Wartbarkeit zu gewährleisten. Hier sind einige grundlegende Richtlinien, die Anfänger beachten sollten:


**1. Einrückung:**

• **Leerzeichen vs. Tabulatoren:** Es ist empfehlenswert, für die Einrückung Leerzeichen anstelle von Tabulatoren zu verwenden. Dies verhindert Darstellungsunterschiede in verschiedenen Editoren. Üblicherweise werden 2 oder 4 Leerzeichen pro Einrückungsebene verwendet. 

  

**2. Zeilenumbrüche:**

• **Maximale Zeilenlänge:** Begrenzen Sie die Zeilenlänge auf etwa 80 bis 120 Zeichen. Dies verbessert die Lesbarkeit, insbesondere bei geteilten Bildschirmen oder in Code-Reviews.

• **Zeilenumbrüche setzen:** Bei langen Anweisungen oder Funktionsaufrufen sollten Sie nach logischen Einheiten umbrechen, um den Code übersichtlich zu halten.

  

**3. Leerzeichen:**

• **Um Operatoren:** Platzieren Sie Leerzeichen vor und nach Operatoren, z. B. a + b statt a+b.

• **Nach Kommas:** Setzen Sie ein Leerzeichen nach jedem Komma in Aufzählungen oder Funktionsparametern.

• **Nach Schlüsselwörtern:** Fügen Sie ein Leerzeichen nach Schlüsselwörtern wie if, for oder while ein, z. B. if (condition) { statt if(condition) {.

  

**4. Automatisierte Formatierung:**

• **Verwendung von Tools:** Nutzen Sie Formatierungstools wie [Prettier](https://prettier.io/), die Ihren Code automatisch nach definierten Regeln formatieren. In Editoren wie Visual Studio Code können Sie Prettier integrieren und so konsistente Formatierung sicherstellen. 

  

**5. Konsistenz:**

• **Teamweite Standards:** Wenn Sie in einem Team arbeiten, einigen Sie sich auf gemeinsame Formatierungsregeln und halten Sie diese konsequent ein. Dies erleichtert die Zusammenarbeit und den Code-Review-Prozess.

  

Durch die Beachtung dieser Richtlinien stellen Sie sicher, dass Ihr JavaScript-Code klar strukturiert und für andere Entwickler leicht verständlich ist.


### Beispiele

  

**1. Einrückung:**

  

_Beispiel mit 2 Leerzeichen pro Einrückungsebene:_

```
function beispielFunktion() {
  const x = 10;
  if (x > 5) {
    console.log('x ist größer als 5');
  }
}
```

_Beispiel mit 4 Leerzeichen pro Einrückungsebene:_

```
function beispielFunktion() {
    const x = 10;
    if (x > 5) {
        console.log('x ist größer als 5');
    }
}
```

**2. Zeilenumbrüche:**

  

_Begrenzung der Zeilenlänge auf 80 Zeichen:_

```
const langeVariable = 'Dies ist ein sehr langer String, ' +
                      'der über mehrere Zeilen geht, um ' +
                      'die Lesbarkeit zu verbessern.';
```

_Zeilenumbruch bei langen Funktionsaufrufen:_

```
meineFunktion(argument1, argument2, argument3, argument4, 
              argument5, argument6);
```

**3. Leerzeichen:**

  

_Leerzeichen um Operatoren:_

```
const summe = a + b;
const produkt = a * b;
```

_Leerzeichen nach Kommas:_

```
const zahlen = [1, 2, 3, 4, 5];
```

_Leerzeichen nach Schlüsselwörtern:_

```
if (wahr) {
  // Codeblock
}

for (let i = 0; i < 10; i++) {
  // Codeblock
}
```

**4. Automatisierte Formatierung:**

  

_Verwendung von Prettier:_

• **Installation:** Sie können Prettier über npm installieren:

```
npm install --save-dev prettier
```

  

• **Verwendung:** Erstellen Sie eine Konfigurationsdatei .prettierrc im Projektverzeichnis mit folgendem Inhalt:

```
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}
```

Anschließend können Sie Prettier ausführen, um Ihren Code automatisch zu formatieren:

```
npx prettier --write .
```

  
  

**5. Konsistenz:**

  

_Teamweite Standards:_

• Erstellen Sie eine gemeinsame Styleguide-Dokumentation für Ihr Team.

• Nutzen Sie Tools wie ESLint, um die Einhaltung der Styleguide-Regeln sicherzustellen.

• Integrieren Sie Formatierungstools in Ihren Entwicklungsworkflow, z. B. durch Pre-Commit-Hooks mit Husky.

  

Durch die Anwendung dieser Beispiele und Richtlinien stellen Sie sicher, dass Ihr JavaScript-Code konsistent, lesbar und wartbar bleibt.