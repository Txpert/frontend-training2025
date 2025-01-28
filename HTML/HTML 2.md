
- HTML-Tags für strukturierte Inhalte kennenlernen und anwenden.
- Erstellen komplexer HTML-Dokumente.
- Grundlagen der Gestaltung mit CSS kennenlernen.

---

![[Fullstack.PNG]]


---

![[Frontend.jpg]]

---


![[Backend.jpg]]

----


![[Fullstackf.jpg]]

---

**1. Strukturierte Inhalte**

**Listen: Geordnete und ungeordnete Listen**

• **Ungeordnete Listen** (`<ul>`):

• Elemente werden als einfache Aufzählungen (mit Punkten) dargestellt.

• Beispiel:

```
<ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ul>
```

  

• **Geordnete Listen** (`<ol>`):

• Elemente werden nummeriert dargestellt.

• Beispiel:

```
<ol>
    <li>Erstes Element</li>
    <li>Zweites Element</li>
    <li>Drittes Element</li>
</ol>
```

  

• **Liste innerhalb einer Liste**:

• Verschachtelte Listen ermöglichen Unterlisten.

• Beispiel:

```
<ul>
    <li>Hauptpunkt
        <ul>
            <li>Unterpunkt</li>
        </ul>
    </li>
</ul>
```

**Tabellen: Erstellung einfacher Tabellen**

• Tabellen bestehen aus **Reihen** (`<tr>`), **Datenzellen** (`<td>`) und **Kopfzeilen** (`<th>`).

• Beispiel einer einfachen Tabelle:

```
<table border="1">
    <tr>
        <th>Name</th>
        <th>Alter</th>
    </tr>
    <tr>
        <td>Max</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Sara</td>
        <td>30</td>
    </tr>
</table>
```

  
• **Wichtige Attribute**:

• border: Definiert die Rahmenstärke.

• colspan: Verbindet mehrere Spalten.

• rowspan: Verbindet mehrere Reihen.

**HTML-Beispiel: Verwendung von colspan und rowspan**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colspan und Rowspan</title>
</head>
<body>
    <h1>Beispiel: colspan und rowspan</h1>
    <table border="1" cellspacing="0" cellpadding="10">
        <!-- Tabellenkopf -->
        <tr>
            <th>Spalte 1</th>
            <th>Spalte 2</th>
            <th>Spalte 3</th>
            <th>Spalte 4</th>
        </tr>

        <!-- Beispiel für colspan -->
        <tr>
            <td colspan="2">Diese Zelle erstreckt sich über 2 Spalten</td>
            <td>Spalte 3</td>
            <td>Spalte 4</td>
        </tr>

        <!-- Beispiel für rowspan -->
        <tr>
            <td rowspan="2">Diese Zelle erstreckt sich über 2 Reihen</td>
            <td>Spalte 2</td>
            <td>Spalte 3</td>
            <td>Spalte 4</td>
        </tr>
        <tr>
            <td>Spalte 2 (nächste Reihe)</td>
            <td>Spalte 3 (nächste Reihe)</td>
            <td>Spalte 4 (nächste Reihe)</td>
        </tr>
    </table>
</body>
</html>
```

**Was passiert in diesem Beispiel?**

1. colspan **(Verbindet Spalten):**

• Im zweiten <`tr`> hat die erste <`td`> das Attribut colspan="2". Dadurch wird diese Zelle über **zwei Spalten** zusammengefasst.

• Es sieht so aus, als ob die Zellen “Spalte 1” und “Spalte 2” eine größere Zelle bilden.

2. rowspan **(Verbindet Reihen):**

• Im dritten <`tr`> hat die erste <`td`> das Attribut rowspan="2". Dadurch wird diese Zelle über **zwei Reihen** zusammengefasst.

• Diese Zelle bleibt sichtbar, während die nachfolgenden Zellen aus den Reihen darunter in die verbleibenden Spalten eingefügt werden.

**Ergebnis in der Tabelle:**

|**Spalte 1**|**Spalte 2**|**Spalte 3**|**Spalte 4**|
|---|---|---|---|
|**Spalte 1**|**Spalte 2**|**Spalte 3**|**Spalte 4**|
|**Colspan: 2 Spalten**||Spalte 3|Spalte 4|
|**Rowspan: 2 Reihen**|Spalte 2|Spalte 3|Spalte 4|
||Spalte 2 (nächste Reihe)|Spalte 3|Spalte 4|


**Verlinkungen: Hyperlinks erstellen**

• Hyperlinks verbinden Webseiten miteinander.

• Syntax:

```
<a href="https://example.com">Klicke hier</a>
```

  

• Wichtige Attribute:

• href: URL der Zielseite.

• target="_blank": Öffnet den Link in einem neuen Tab.

**2. Multimedia und Einbettungen**

  

**Bilder einfügen**

• Syntax:

```
<img src="bild.jpg" alt="Beschreibung" width="200" height="100">
```

  

• Attribute:

• src: Pfad zur Bilddatei.

• alt: Alternativer Text, falls das Bild nicht geladen werden kann.

• width/height: Breite und Höhe des Bildes.

  

**Videos und Audios einbetten**

• Video:

```
<video controls width="400">
    <source src="video.mp4" type="video/mp4">
    Dein Browser unterstützt dieses Video nicht.
</video>
```

  

• Audio:

```
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Dein Browser unterstützt diese Audiodatei nicht.
</audio>
```

**3. Formulare**

**Aufbau eines einfachen Formulars**

• Syntax:

```
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="message">Nachricht:</label>
    <textarea id="message" name="message"></textarea><br><br>

    <button type="submit">Senden</button>
</form>
```

  

  

**Attribute und Validierungsmöglichkeiten**

• **Attribute**:

• action: Zieladresse, an die das Formular gesendet wird.

• method: GET oder POST (sicherer).

• **Validierung**:

• required: Macht ein Feld verpflichtend.

• maxlength: Maximale Zeichenanzahl.

• Beispiel:

```
<input type="email" required maxlength="50">
```

