CSS bietet erweiterte Selektoren, um gezielt Elemente zu stylen, ohne immer neue Klassen oder IDs zu erstellen. Diese erweiterten Selektoren machen dein CSS effizienter und flexibler.

**1. Attributselektoren und ihre Verwendung**

  

Mit **Attributselektoren** kannst du gezielt Elemente basierend auf deren Attribute (z. B. href, type, target) stylen.

  

**a) Element mit bestimmtem Attribut ([attribute])**

```
input[type="text"] {
    background-color: lightgray;
}
```

➡ **Alle <`input`>-Felder vom Typ “text” erhalten einen grauen Hintergrund.**

```
<input type="text" placeholder="Textfeld">
<input type="password" placeholder="Passwortfeld">
```

**b) Attributwert beginnt mit (^=)**

```
a[href^="https"] {
    color: green;
}
```

➡ **Alle Links, die mit “https” beginnen, werden grün.**

```
<a href="https://example.com">Sicherer Link</a>
<a href="http://example.com">Unsicherer Link</a>
```

**c) Attributwert endet mit ($=)**

```
img[src$=".jpg"] {
    border: 3px solid red;
}
```

➡ **Alle Bilder mit .jpg-Endung erhalten einen roten Rahmen.**

```
<img src="bild.jpg" alt="Foto">
<img src="bild.png" alt="Anderes Foto">
```

**d) Attributwert enthält (*=)**

```
input[placeholder*="Passwort"] {
    background-color: lightyellow;
}
```

➡ **Alle Eingabefelder mit “Passwort” im placeholder haben einen gelben Hintergrund.**

```
<input type="text" placeholder="Benutzername">
<input type="password" placeholder="Passwort eingeben">
```

**2.