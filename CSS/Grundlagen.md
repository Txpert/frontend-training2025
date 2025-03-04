
CSS-Grundlagen**

**Einbindung von CSS in HTML**

1. **Inline-CSS**:

```html
<h1 style="color: red;">Text</h1>
```

  

2. **Internes CSS** (im `<style>-Tag`):

```
<style>
    h1 {
        color: blue;
    }
</style>
```


3. **Externes CSS**:

• Erstelle eine Datei style.css:


```
h1 {
    color: green;
}
```

  

• Binde sie ein:

```html
<link rel="stylesheet" href="style.css">
```

**Grundlegende CSS-Regeln und Syntax**

• **Selektoren**: Bestimmen, welche Elemente gestaltet werden.

• Beispiel:


```html
p {
    color: black;
    font-size: 14px;
}
```

**Ansprechende Gestaltung von HTML-Elementen**

• Flexbox für Layout:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---  

CSS (Cascading Style Sheets) wird verwendet, um das Erscheinungsbild von HTML-Elementen zu gestalten. Hier sind die grundlegenden Regeln und die Syntax:

**1. Die CSS-Syntax**

  

Eine CSS-Regel besteht aus drei Teilen:

```
selector {
    property: value;
}
```

• **Selector**: Wählt das HTML-Element aus (z. B. h1, p, .class, #id).

• **Property**: Bestimmt, welche Eigenschaft angepasst werden soll (z. B. color, font-size).

• **Value**: Legt den Wert der Eigenschaft fest (z. B. red, 16px).

  

**Beispiel:**

```
h1 {
    color: blue;          /* Die Textfarbe ist blau */
    font-size: 24px;      /* Die Schriftgröße beträgt 24 Pixel */
    text-align: center;   /* Der Text wird zentriert */
}
```

**2. Arten von Selectors**

• **Element-Selektor**: Stilt alle Elemente eines bestimmten Typs.

```
p {
    color: green;
}
```

  

• **ID-Selektor**: Wählt ein spezifisches Element mit einer ID aus (wird durch # angesprochen).

```
#header {
    background-color: lightgray;
}
```

  

• **Klassenselektor**: Stilt alle Elemente, die eine bestimmte Klasse haben (wird durch . angesprochen).

```
.box {
    border: 1px solid black;
}
```

  

• **Gruppenselektoren**: Mehrere Selektoren kombinieren.

```
h1, p {
    margin: 0;
}
```

**3. Häufig verwendete CSS-Eigenschaften**

• **Textgestaltung:**

```
color: red;             /* Textfarbe */
font-size: 16px;        /* Schriftgröße */
font-weight: bold;      /* Fettschrift */
text-align: center;     /* Zentrierung */
text-decoration: none;  /* Entfernt Unterstreichungen */
```

  

• **Box-Modell:**

```
width: 300px;           /* Breite der Box */
height: 200px;          /* Höhe der Box */
padding: 10px;          /* Innenabstand */
margin: 20px;           /* Außenabstand */
border: 2px solid black;/* Rahmen */
```

  

• **Hintergrund:**

```
background-color: yellow; /* Hintergrundfarbe */
background-image: url('image.jpg'); /* Hintergrundbild */
```

  

• **Positionierung:**

```
position: relative;     /* Position relativ zum normalen Fluss */
display: flex;          /* Flexbox-Layout */
```

**Ansprechende Gestaltung von HTML-Elementen**

  

Hier sind einige Tipps und Beispiele, wie du HTML-Elemente ansprechend gestalten kannst:

**1. Stilisiere eine Überschrift**

• Beispiel:

```
h1 {
    color: darkblue;
    font-family: Arial, sans-serif;
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
}
```

**2. Hintergrundfarben und Rahmen für Boxen**

• Beispiel:

```
.box {
    background-color: lightgray;
    border: 1px solid #333;
    padding: 15px;
    margin: 10px auto;
    width: 80%;
    border-radius: 10px; /* Abgerundete Ecken */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Schatteneffekt */
}
```

**3. Buttons ansprechend gestalten**

• Beispiel:

```
button {
    background-color: #4CAF50; /* Grün */
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049; /* Dunkleres Grün bei Hover */
}
```

**4. Layout mit Flexbox**

• Beispiel:

```
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh; /* Volle Höhe der Ansicht */
}

.box {
    background-color: lightblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
```

HTML:

```
<div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```

**5. Textanimation mit Übergang**

• Beispiel:

```
h1 {
    color: black;
    font-size: 30px;
    transition: color 0.5s ease, font-size 0.5s ease;
}

h1:hover {
    color: orange;
    font-size: 36px;
}
```



**Übung 1: Farbe und Schriftgröße anpassen**


**Aufgabe:**

1. Erstelle ein HTML-Dokument mit einem <`h1`>-Tag und einem <`p`>-Tag.

2. Verwende CSS, um:

• Die Farbe des <`h1`>-Tags auf Blau zu setzen.

• Die Schriftgröße des <`p`>-Tags auf 18 Pixel zu ändern.

  ---
  
**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 1</title>
    <style>
        h1 {
            color: blue;
        }
        p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>CSS Übung</h1>
    <p>Das ist ein einfacher Absatz.</p>
</body>
</html>
```

---


**Übung 2: Hintergrundfarbe ändern**

**Aufgabe:**


1. Füge einer <`div`>-Box eine Hintergrundfarbe hinzu.

2. Setze die Breite der <`div`> auf 300 Pixel und die Höhe auf 200 Pixel.

  

**Lösung:**


**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 2</title>
    <style>
        div {
            background-color: lightblue;
            width: 300px;
            height: 200px;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

---

**Übung 3: Rahmen und Abstände hinzufügen**

**Aufgabe:**

1. Erstelle eine Box mit einem Rahmen.

2. Der Rahmen soll 2 Pixel breit und schwarz sein.

3. Füge 20 Pixel Innenabstand (padding) hinzu.

4. Setze einen Außenabstand (margin) von 10 Pixeln.

  

**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 3</title>
    <style>
        div {
            border: 2px solid black;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div>Das ist eine Box mit Rahmen und Abständen.</div>
</body>
</html>
```

---



**Übung 4: Schriftart ändern**


**Aufgabe:**

1. Setze die Schriftart eines Textes auf “Arial”.

2. Mache den Text fett (font-weight: bold).

  

**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 4</title>
    <style>
        p {
            font-family: Arial, sans-serif;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p>Das ist ein Text mit angepasster Schriftart.</p>
</body>
</html>
```

---


**Übung 5: Hover-Effekt**


**Aufgabe:**

1. Erstelle einen Button (<button>).

2. Füge einen Hover-Effekt hinzu, bei dem sich die Hintergrundfarbe des Buttons auf Grün ändert, wenn die Maus darüber schwebt.

  

**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 5</title>
    <style>
        button {
            background-color: lightgray;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
        button:hover {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <button>Hover über mich!</button>
</body>
</html>
```

---

**Übung 6: Flexbox-Grundlagen**

  

**Aufgabe:**

1. Erstelle drei Boxen innerhalb eines Containers (`<div>`).

2. Setze den Container so, dass die Boxen nebeneinander angezeigt werden.

3. Zentriere die Boxen horizontal und vertikal.

  

**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 6</title>
    <style>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .box {
            background-color: lightcoral;
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
```

**Übung 7: Text zentrieren**

  

**Aufgabe:**

1. Erstelle einen Text in einer Box.

2. Zentriere den Text sowohl horizontal als auch vertikal innerhalb der Box.

  

**Lösung:**

  

**HTML:**

```
<!DOCTYPE html>
<html>
<head>
    <title>Übung 7</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: lightgreen;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="box">Zentrierter Text</div>
</body>
</html>
```

