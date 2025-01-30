 Pseudoklassen (:hover, :focus, :nth-child(), etc.)**

**Pseudoklassen** verändern das Styling von Elementen je nach Zustand oder Position.

  

**a) :hover – Wenn die Maus darüberfährt**

```
button:hover {
    background-color: darkblue;
    color: white;
}
```

➡ **Button wird dunkelblau, wenn die Maus darüberfährt.**

```
<button>Klick mich</button>
```

**b) :active – Wenn das Element gerade geklickt wird**

```
button:active {
    background-color: red;
}
```

➡ **Button wird rot, solange er gedrückt wird.**

**c) :focus – Wenn ein Eingabefeld aktiv ist**

```
input:focus {
    border: 2px solid blue;
    outline: none;
}
```

➡ **Das Eingabefeld bekommt einen blauen Rand, wenn man hineinklickt.**

**d) :nth-child(n) – Bestimmte Kind-Elemente ansprechen**

```
ul li:nth-child(2) {
    color: red;
}
```

➡ **Das zweite <li>-Element in einer Liste wird rot.**

```
<ul>
    <li>Erstes Element</li>
    <li>Zweites Element</li>
    <li>Drittes Element</li>
</ul>
```

**e) :last-child / :first-child**

```
p:first-child {
    font-weight: bold;
}

p:last-child {
    color: blue;
}
```

➡ **Der erste <`p`> wird fett, der letzte wird blau.**

**3. Pseudoelemente (::before, ::after)**

  

Mit **Pseudoelementen** kannst du zusätzlichen Inhalt vor oder nach einem Element hinzufügen.

  

**a) ::before – Inhalt vor einem Element einfügen**

```
h1::before {
    content: "🔥 ";
}
```

➡ **Fügt ein Emoji vor jede <h1>-Überschrift ein.**

```
<h1>CSS lernen</h1>
```

✅ **Ergebnis:** 🔥 CSS lernen

**b) ::after – Inhalt nach einem Element einfügen**

```
h1::after {
    content: " ✅";
}
```

➡ **Fügt ein ✅ hinter jede <h1>-Überschrift.**

```
<h1>CSS lernen</h1>
```

✅ **Ergebnis:** CSS lernen ✅

**c) ::first-letter – Das erste Zeichen formatieren**

```
p::first-letter {
    font-size: 24px;
    color: red;
}
```

➡ **Das erste Zeichen im Absatz wird größer und rot.**

**d) ::first-line – Die erste Zeile eines Absatzes formatieren**

```
p::first-line {
    font-weight: bold;
}
```

➡ **Nur die erste Zeile des Absatzes wird fett.**

**4. Kombinatoren (>, +, ~)**

  

Mit **Kombinatoren** kannst du gezielt Elemente basierend auf ihrer Struktur auswählen.

**a) > – Direkte Kind-Elemente**

```
div > p {
    color: blue;
}
```

➡ **Nur <`p`>-Elemente, die direkt in einem <`div`> sind, werden blau.**

```
<div>
    <p>Dieser Absatz wird blau.</p>
    <span><p>Dieser nicht, weil er in einem `<span>` ist.</p></span>
</div>
```

**b) + – Direkt benachbartes Element**

```
h1 + p {
    color: red;
}
```

➡ **Der <`p`>-Absatz direkt nach <`h1`> wird rot.**

```
<h1>Überschrift</h1>
<p>Dieser Text wird rot.</p>
<p>Dieser nicht.</p>
```

**c) ~ – Alle nachfolgenden Geschwister-Elemente**

```
h1 ~ p {
    color: green;
}
```

➡ **Alle <`p`>, die nach <`h1`> kommen, werden grün.**

```
<h1>Überschrift</h1>
<p>Dieser Text wird grün.</p>
<p>Dieser auch.</p>
```