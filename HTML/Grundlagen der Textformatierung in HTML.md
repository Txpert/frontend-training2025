
HTML bietet verschiedene Tags zur **Strukturierung und Formatierung von Text**. Dazu gehören **Block- und Inline-Elemente**, **Überschriften**, sowie **Absätze und Zeilenumbrüche**.

---

## **1️⃣ Block- vs. Inline-Elemente (`<p>` vs. `<span>`)**

### **📌 Was ist der Unterschied?**
- **Block-Elemente** → Nehmen die **gesamte Breite** ein und beginnen in einer **neuen Zeile**.  
- **Inline-Elemente** → **Nehmen nur so viel Platz ein, wie nötig** und bleiben in derselben Zeile.

| **Element** | **Typ** | **Beispiel** |
|------------|--------|-------------|
| `<p>` | Block | Absätze |
| `<div>` | Block | Container für Inhalte |
| `<h1>` bis `<h6>` | Block | Überschriften |
| `<span>` | Inline | Einzelne Wörter hervorheben |
| `<strong>` | Inline | Fettgedruckter Text |
| `<em>` | Inline | Kursiver Text |

---

### **📌 Beispiel: Block vs. Inline**
```html
<p>Dies ist ein Absatz (Block-Element).</p>
<p>Dieser Absatz beginnt in einer neuen Zeile.</p>

<span>Dies ist ein Inline-Element.</span>
<span>Es bleibt in derselben Zeile.</span>


✅ **Ergebnis:**

• **Die <p>-Elemente erscheinen untereinander.**

• **Die <span>-Elemente bleiben in derselben Zeile.**

**2️⃣ Überschriften (<h1> bis <h6>)**

  

Überschriften strukturieren Inhalte von **sehr wichtig (<h1>) bis weniger wichtig (<h6>)**.

  

**📌 Beispiel: Alle Überschriftentypen**

```
<h1>Überschrift 1 (wichtigste)</h1>
<h2>Überschrift 2</h2>
<h3>Überschrift 3</h3>
<h4>Überschrift 4</h4>
<h5>Überschrift 5</h5>
<h6>Überschrift 6 (am wenigsten wichtig)</h6>
```

✅ **Ergebnis:**

• **<h1> ist die größte und wichtigste Überschrift.**

• **<h6> ist die kleinste und unwichtigste Überschrift.**

  

📌 **SEO-Hinweis:**

• **Nur eine <h1> pro Seite verwenden!**

• **Nutze <h2> und <h3> für Unterüberschriften.**

**3️⃣ Absätze und Zeilenumbrüche (<p>, <br>)**

  

**📌 <p> – Absätze**

  

Ein Absatz <p> ist ein **Block-Element**, das Text voneinander trennt.

```
<p>Dies ist der erste Absatz.</p>
<p>Dies ist ein zweiter Absatz.</p>
```

✅ **Ergebnis:**

• **Die Absätze werden automatisch mit Abstand dargestellt.**

**📌 <br> – Zeilenumbruch**

  

Ein <br> erzeugt einen **Zeilenumbruch innerhalb eines Absatzes**.

```
<p>Dies ist die erste Zeile.<br>Dies ist die zweite Zeile.</p>
```

✅ **Ergebnis:**

• **Zeilenumbruch innerhalb des <p>-Elements, aber kein neuer Block.**

  

📌 **Wann <br> nutzen?**

✅ **Für Adressen oder Gedichte:**

```
<p>Max Mustermann<br>Musterstraße 10<br>12345 Berlin</p>
```

✅ **Für manuelle Zeilenumbrüche in einem Satz:**

```
<p>Hier kommt ein sehr langer Satz,<br>der in einer neuen Zeile weitergeht.</p>
```

❌ **Nicht für Abstände zwischen Absätzen – dafür <p> verwenden!**

**🔹 Fazit**

• **Block-Elemente** (<p>, <div>) beginnen **in einer neuen Zeile**.

• **Inline-Elemente** (<span>, <strong>) bleiben **innerhalb einer Zeile**.

• **Überschriften** (<h1> bis <h6>) haben unterschiedliche Wichtigkeitsstufen.

• **Absätze** (<p>) trennen Textblöcke, **<br> macht nur einen Zeilenumbruch**.

  

📌 **Nächster Schritt: Soll ich dir zeigen, wie du mit CSS den Text stilisieren kannst?** 🚀