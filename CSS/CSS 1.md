**CSS-Grundlagen: Einführung in CSS 


CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die verwendet wird, um das Erscheinungsbild von HTML-Dokumenten zu gestalten. Während HTML die Struktur einer Webseite definiert (Überschriften, Absätze, Links etc.), sorgt CSS dafür, dass diese Elemente ein ansprechendes Design erhalten (Farben, Schriftarten, Layouts usw.).

**1. Was ist CSS und warum ist es wichtig?**

  

CSS trennt die Präsentation vom Inhalt einer Webseite. Das hat mehrere Vorteile:

• **Bessere Wartbarkeit:** Änderungen am Design müssen nicht in jeder HTML-Datei einzeln gemacht werden.

• **Wiederverwendbarkeit:** Ein Stylesheet kann für mehrere Seiten genutzt werden.

• **Verbesserte Performance:** CSS wird einmal geladen und für viele Seiten verwendet.

• **Responsives Design:** Webseiten können für verschiedene Bildschirmgrößen angepasst werden.

**2. Syntax und Struktur von CSS-Regeln**

  

CSS besteht aus Regeln, die definieren, wie HTML-Elemente dargestellt werden sollen. Eine Regel hat folgende Struktur:

```
Selektor {
    Eigenschaft: Wert;
}
```

• **Selektor** bestimmt, welches HTML-Element gestaltet wird.

• **Eigenschaft** legt fest, was geändert wird (z. B. color für die Schriftfarbe).

• **Wert** gibt an, wie die Eigenschaft angewendet wird (z. B. red für rote Schrift).

  

**Beispiel für eine CSS-Regel**

```
p {
    color: blue;
    font-size: 16px;
}
```

Diese Regel sagt: „Alle <p>-Elemente sollen eine blaue Schriftfarbe und eine Schriftgröße von 16 Pixeln haben.“

**3. Arten, CSS in eine HTML-Datei einzubinden**

  

Es gibt drei Möglichkeiten, CSS zu verwenden:

  

**a) Inline-CSS (direkt im HTML-Element)**

```
<p style="color: blue;">Dieser Text ist blau.</p>
```

• **Vorteil:** Schnell für kleine Änderungen.

• **Nachteil:** Nicht wiederverwendbar und schwer zu verwalten.

  

**b) Internes CSS (im <style>-Tag im <head> der HTML-Datei)**

```
<!DOCTYPE html>
<html lang="de">
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>Dieser Text ist blau.</p>
</body>
</html>
```

• **Vorteil:** Gut für kleine Webseiten mit wenigen Styles.

• **Nachteil:** Schwer skalierbar, da die Styles in jeder Datei enthalten sind.

  

**c) Externes CSS (in einer separaten .css-Datei)**

1. **Erstelle eine CSS-Datei** (z. B. style.css):

```
body {
    background-color: lightgray;
}
h1 {
    color: darkblue;
}
```

  

2. **Binde die Datei in HTML ein**:

```
<link rel="stylesheet" href="style.css">
```

  

  

• **Vorteil:** Beste Methode für größere Projekte, da das Styling von HTML getrennt ist.

• **Nachteil:** Erfordert eine zusätzliche Datei.

**4. Praktische Übung**

  

**Aufgabe: Gestalte eine einfache Webseite mit CSS**

1. Erstelle eine HTML-Datei (index.html):

```
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine erste CSS-Seite</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Willkommen auf meiner Webseite</h1>
    <p>Dies ist ein Beispiel für CSS.</p>
</body>
</html>
```

  

2. Erstelle eine CSS-Datei (style.css):

```
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
}

h1 {
    color: #333;
    font-size: 24px;
}

p {
    color: #666;
    font-size: 18px;
}
```

  

3. **Ergebnis:** Öffne die index.html in deinem Browser. Die Seite hat jetzt:

• Einen hellgrauen Hintergrund (#f4f4f4)

• Eine mittig ausgerichtete Schrift (text-align: center;)

• Eine große dunkle Überschrift (color: #333; font-size: 24px;)

• Einen etwas helleren Absatz (color: #666; font-size: 18px;)

**Zusammenfassung**

• CSS wird verwendet, um das Aussehen von HTML zu gestalten.

• Eine CSS-Regel besteht aus einem **Selektor**, einer **Eigenschaft** und einem **Wert**.

• Es gibt drei Arten, CSS einzubinden: **Inline, Intern und Extern** (letzteres ist die beste Methode für größere Projekte).

• Mit einer Kombination aus HTML und einer separaten CSS-Datei kannst du Webseiten optisch ansprechend gestalten.
