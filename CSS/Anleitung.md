**Beispiel 2: Buttons mit Hover-Effekt**

**1.** style.css**-Datei anpassen:**

```
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: darkblue;
}
```

**2.** index.html **erweitern:**

```
<button>Klick mich</button>
```

✅ **Erwartetes Ergebnis:**

• Ein blauer Button mit weißer Schrift

• Beim Überfahren mit der Maus wird der Button dunkler

**Beispiel 3: Box mit Schatten und abgerundeten Ecken**

  

**1.** style.css**-Datei anpassen:**

```
.card {
    width: 300px;
    padding: 20px;
    margin: 50px auto;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    background-color: white;
}
```

**2.** index.html **erweitern:**

```
<div class="card">
    <h2>Max Mustermann</h2>
    <p>Webentwickler</p>
    <p>max@example.com</p>
</div>
```

✅ **Erwartetes Ergebnis:**

• Eine kleine **Box** mit Schatten und runden Ecken

• **Weißer Hintergrund** und **zentrierter Text**

**4. Wann sollte man externe Stylesheets nutzen?**

  
✅ **Für alle größeren Projekte oder Webseiten mit mehreren Seiten**

✅ **Wenn du das Design für viele Seiten gleichzeitig steuern willst**

✅ **Wenn du eine professionelle, wartbare und saubere Code-Struktur möchtest**

  **2. Vor- und Nachteile externer Stylesheets**

  
**Vorteile:**

• **Trennung von Inhalt und Design** → Besserer Überblick und einfachere Wartung.

• **Wiederverwendbarkeit** → Eine .css-Datei kann für viele HTML-Seiten genutzt werden.

• **Bessere Performance** → Die CSS-Datei wird nur einmal geladen und für alle Seiten wiederverwendet.

• **Sauberer HTML-Code** → Keine unnötigen Inline-Styles oder <`style`>-Tags in der HTML-Datei.

  

**Nachteile:**

• **Zusätzlicher HTTP-Request** → Die CSS-Datei muss separat geladen werden (kann durch Caching optimiert werden).

• **Kein direktes Styling in der HTML-Datei** → Erfordert den Wechsel zwischen HTML- und CSS-Datei.

• **Ohne Internet kann externes CSS bei verlinkten Online-Dateien nicht geladen werden** (z. B. bei CDN-Nutzung).

📌 **Empfohlen für jede Webseite, die mehr als nur eine einzelne Seite mit einfachem Styling hat!**

