**Vererbung in CSS

In CSS bedeutet **Vererbung**, dass einige Eigenschaften von einem **Elternelement** an seine **Kind-Elemente** weitergegeben werden. Diese Vererbung folgt bestimmten Regeln, die es ermöglichen, CSS-Stile effizient zu verwalten.

**1. Was ist Vererbung in CSS?**
  

Vererbung ist ein Mechanismus in CSS, bei dem bestimmte Eigenschaften automatisch an die untergeordneten (Kind-)Elemente weitergegeben werden, ohne dass sie explizit definiert werden müssen.

  

📌 **Beispiel für automatische Vererbung:**

```
body {
    color: blue;
    font-family: Arial, sans-serif;
}
```

```
<body>
    <p>Dieser Text wird blau.</p>
    <span>Auch dieser Text wird blau.</span>
</body>
```


**2. Welche Eigenschaften werden vererbt?**


**a) Eigenschaften, die automatisch vererbt werden**

  

Diese betreffen meist **Text & Schrift**:

• color

• font

• font-family

• font-size

• font-style

• font-variant

• font-weight

• letter-spacing

• line-height

• visibility

• cursor

• direction

  

📌 **Beispiel für eine automatisch vererbte Eigenschaft:**

```
body {
    color: red;
}
```

```
<body>
    <p>Dieser Text wird automatisch rot.</p>
    <span>Auch dieser.</span>
</body>
```

➡ **Ergebnis:** Der gesamte Text wird **rot**, weil color eine **vererbbare Eigenschaft** ist.

**b) Eigenschaften, die nicht automatisch vererbt werden**

  

Diese betreffen meistens **Box-Model & Layout**:

• width, height

• margin, padding

• border, border-radius

• background, background-color

• display

• position

• top, left, right, bottom

• z-index

• box-shadow

• overflow

• float, clear

• visibility

  

📌 **Warum werden diese nicht vererbt?**

• **Weil Layout-bezogene Stile oft individuell für jedes Element angepasst werden müssen.**

• **Ein <`div`> sollte nicht automatisch die width eines übergeordneten <`div`> erben, sonst würden alle Boxen gleich groß sein.**

**3. Wie erzwingt man Vererbung?**

  

Wenn eine Eigenschaft **nicht automatisch vererbt** wird, kann man sie mit inherit **erzwingen**.

  

**a) Manuelles Erzwingen der Vererbung (inherit)**

```
div {
    background-color: yellow;
}

p {
    background-color: inherit;
}
```

```
<div>
    <p>Dieser Absatz übernimmt den gelben Hintergrund vom Eltern-`div`.</p>
</div>
```

✅ **Ergebnis:** Der p-Tag erbt background-color vom div, obwohl background-color normalerweise nicht vererbt wird.

**b) Standardwerte zurücksetzen (initial)**

  

Manchmal möchtest du eine Eigenschaft auf ihren Standardwert zurücksetzen:

```
p {
    color: initial;
}
```

📌 **initial setzt die Eigenschaft auf den ursprünglichen Standardwert des Browsers zurück.**


