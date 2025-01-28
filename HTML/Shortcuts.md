In Visual Studio Code gibt es viele praktische Shortcuts für HTML. Hier sind die wichtigsten, um schneller und effizienter zu arbeiten:

**1. Grundgerüst von HTML automatisch erstellen**

• **Shortcut:** ! + **Tab** oder **Enter**

• **Was passiert?**: Wenn du ein ! tippst und dann **Tab** oder **Enter** drückst, wird das Grundgerüst eines HTML-Dokuments automatisch generiert.

  

**Beispiel:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

**2. Automatisches Erstellen von HTML-Tags**

• **Shortcut:** <tag> + **Tab**

• **Was passiert?**: Sobald du einen HTML-Tag tippst (z. B. <div> oder <h1>) und dann **Tab** drückst, werden automatisch der öffnende und schließende Tag erstellt.

  

**Beispiel:**

  

Eingabe:

```
<h1>
```

Nach **Tab**:

```
<h1></h1>
```

**3. Emmet-Abkürzungen für HTML**

  

Visual Studio Code unterstützt **Emmet**, ein Tool, mit dem du HTML-Strukturen schneller schreiben kannst. Hier ein paar Beispiele:

  

**Schnelle Erstellung von HTML-Strukturen**

• div + **Tab**: Erstellt <div></div>.

• div.container + **Tab**: Erstellt <div class="container"></div>.

• ul>li*3 + **Tab**: Erstellt:

```
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

  

• form>input[type="text"]+button + **Tab**: Erstellt:

```
<form>
    <input type="text">
    <button></button>
</form>
```

  

  

**Verschachtelte Elemente**

• div>h1+p + **Tab**: Erstellt:

```
<div>
    <h1></h1>
    <p></p>
</div>
```

  

  

**Listen mit Klassen**

• ul.list>li.item*3 + **Tab**: Erstellt:

```
<ul class="list">
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
</ul>
```

**4. Auswahl von Code automatisch umschließen**

• **Shortcut:** **Strg+Shift+P** (Windows/Linux) oder **Cmd+Shift+P** (macOS), dann **Wrap with Abbreviation**.

• **Was passiert?**: Du kannst bestehenden Text oder Code in ein HTML-Tag einschließen, z. B. <div>.

  

**Beispiel:**

1. Markiere Hello World.

2. Öffne den Befehlspaletten-Sucher (**Strg+Shift+P**) und wähle **Wrap with Abbreviation**.

3. Gib z. B. p ein, um <p>Hello World</p> zu erhalten.

**5. Kommentieren von HTML**

• **Shortcut:**

• **Strg+/** (Windows/Linux)

• **Cmd+/** (macOS)

• **Was passiert?**: Der markierte Code wird als Kommentar eingefügt.

  

**Beispiel:**

  

Vorher:

```
<p>Dieser Text soll kommentiert werden</p>
```

Nach Shortcut:

```
<!-- <p>Dieser Text soll kommentiert werden</p> -->
```

**6. Mehrere Zeilen gleichzeitig bearbeiten**

• **Shortcut:** **Alt** + Mausklick (Windows/Linux) oder **Option** + Mausklick (macOS).

• **Was passiert?**: Du kannst mehrere Cursor setzen und gleichzeitig HTML-Code an verschiedenen Stellen bearbeiten.