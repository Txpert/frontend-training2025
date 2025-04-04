

## 1. Hintergründe & Farbverläufe (Gradients)

*   **`bg-gradient-to-{direction}`**: Erzeugt einen linearen Farbverlauf. Ersetze `{direction}` mit `t` (top), `b` (bottom), `l` (left), `r` (right), `tl`, `tr`, `bl`, `br`.
    *   Beispiel: `bg-gradient-to-r from-cyan-500 to-blue-500` (Verlauf von Cyan nach Blau, von links nach rechts)
    *   Kombiniert mit `from-{color}`, `via-{color}` (optional), `to-{color}`.
    *   [Docs: Gradients](https://tailwindcss.com/docs/gradient-color-stops)

## 2. Übergänge & Animationen (Transitions & Animations)

*   **`transition-{property}`**: Legt fest, welche CSS-Eigenschaften animiert werden sollen, wenn sie sich ändern (z.B. bei Hover).
    *   `transition-all`: Animiert alle änderbaren Eigenschaften (einfachster Start).
    *   `transition-colors`: Nur Farbänderungen animieren.
    *   `transition-opacity`, `transition-shadow`, `transition-transform`
*   **`duration-{amount}`**: Legt die Dauer der Animation fest (z.B. `duration-150`, `duration-300`, `duration-1000`).
*   **`ease-{timing}`**: Steuert die Beschleunigungskurve der Animation (z.B. `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`).
*   **`animate-{type}`**: Fügt vordefinierte CSS-Animationen hinzu.
    *   `animate-spin`: Lässt etwas rotieren (gut für Ladeindikatoren).
    *   `animate-ping`: Ein "Ping"-Effekt, der größer wird und verblasst.
    *   `animate-pulse`: Sanftes Ein- und Ausblenden.
    *   `animate-bounce`: Lässt etwas auf und ab hüpfen.
    *   [Docs: Transition Property](https://tailwindcss.com/docs/transition-property)
    *   [Docs: Animation](https://tailwindcss.com/docs/animation)

## 3. Transformationen (Transforms)

*   **`scale-{amount}`**: Vergrößert oder verkleinert ein Element (z.B. `scale-105` für 105%). Super für Hover-Effekte!
*   **`rotate-{degree}`**: Dreht ein Element (z.B. `rotate-45`, `rotate-90`, `-rotate-6`).
*   **`translate-x-{amount}` / `translate-y-{amount}`**: Verschiebt ein Element horizontal oder vertikal (z.B. `translate-x-2`, `-translate-y-full`).
*   **`skew-x-{degree}` / `skew-y-{degree}`**: Verzieht ein Element.
*   Kombinieren mit `hover:` für interaktive Effekte: `hover:scale-110 hover:rotate-3`
*   [Docs: Scale](https://tailwindcss.com/docs/scale), [Docs: Rotate](https://tailwindcss.com/docs/rotate), [Docs: Translate](https://tailwindcss.com/docs/translate)

## 4. Schatten & Tiefe (Shadows)

*   **`shadow-{size}`**: Fügt einen Box-Schatten hinzu. Größen reichen von `shadow-sm` (klein) über `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl` bis `shadow-2xl` (sehr groß).
*   **`shadow-inner`**: Fügt einen *inneren* Schatten hinzu.
*   Kann mit Farben kombiniert werden (ab Tailwind v3): `shadow-lg shadow-cyan-500/50` (großer cyanfarbener Schatten mit 50% Deckkraft).
*   [Docs: Box Shadow](https://tailwindcss.com/docs/box-shadow)

## 5. Interaktivitäts-Modifier (Hover, Focus, Group-Hover etc.)

*   **`hover:{utility}`**: Wendet eine Utility-Klasse nur an, wenn der Mauszeiger über dem Element ist (z.B. `hover:bg-red-500`).
*   **`focus:{utility}`**: Wendet eine Utility-Klasse an, wenn das Element den Fokus hat (wichtig für Formularelemente und Links, z.B. `focus:ring-2 focus:ring-blue-400`).
*   **`active:{utility}`**: Wendet eine Utility-Klasse an, während das Element aktiv geklickt wird (z.B. `active:scale-95`).
*   **`group` & `group-hover:{utility}`**: Sehr mächtig! Füge `group` zu einem Elternelement hinzu. Dann kannst du Kindelemente basierend auf dem Hover-Status des *Elternelements* stylen (z.B. ein Icon ändert seine Farbe, wenn man über die gesamte Karte hovert).
    *   Beispiel: `<div class="group ..."><p class="group-hover:text-blue-500">Text</p></div>`
*   **`disabled:{utility}`**: Styles für deaktivierte Elemente (z.B. `disabled:opacity-50 disabled:cursor-not-allowed`).
*   [Docs: Hover, Focus, & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)

## 6. Ringe (Rings)

*   **`ring-{width}`**: Fügt einen soliden, box-shadow-basierten Ring um ein Element hinzu (ähnlich wie Outline, aber flexibler). Super für Fokus-Indikatoren. (z.B. `ring-2`, `ring-4`).
*   **`ring-offset-{width}`**: Fügt einen Abstand zwischen dem Element und dem Ring hinzu, in der Hintergrundfarbe des Elternelements (z.B. `ring-offset-2`).
*   **`ring-{color}`**: Setzt die Farbe des Rings (z.B. `ring-blue-500`).
*   Kombination: `focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`
*   [Docs: Ring Width](https://tailwindcss.com/docs/ring-width), [Docs: Ring Color](https://tailwindcss.com/docs/ring-color)

## 7. Filter & Backdrop-Filter

*   **`blur-{amount?}`**: Macht ein Element unscharf (z.B. `blur-sm`, `blur-md`).
*   **`brightness-{amount}`**: Ändert die Helligkeit (z.B. `brightness-50`, `brightness-125`).
*   **`contrast-{amount}`**: Ändert den Kontrast (z.B. `contrast-200`).
*   **`grayscale`**: Macht das Element schwarz-weiß.
*   **`backdrop-blur-{amount?}`**: Macht den *Hintergrund* hinter einem (oft teiltransparenten) Element unscharf. Perfekt für "Frosted Glass"-Effekte. (z.B. `bg-white/30 backdrop-blur-md`).
*   [Docs: Filter](https://tailwindcss.com/docs/filter), [Docs: Backdrop Filter](https://tailwindcss.com/docs/backdrop-filter)

## 8. Layout-Helfer (Spacing & Dividers)

*   **`space-x-{amount}` / `space-y-{amount}`**: Fügt *zwischen* direkten Kindelementen (in einer Flexbox oder einem Grid) horizontalen (`x`) oder vertikalen (`y`) Abstand hinzu. Sehr nützlich, um nicht jedem Kind einzeln Margin geben zu müssen. (z.B. `flex space-x-4`).
*   **`divide-x-{width?}` / `divide-y-{width?}`**: Fügt Trennlinien *zwischen* direkten Kindelementen hinzu.
*   **`divide-{color}`**: Setzt die Farbe der Trennlinien (z.B. `divide-y divide-gray-300`).
*   [Docs: Space Between](https://tailwindcss.com/docs/space), [Docs: Divide Width](https://tailwindcss.com/docs/divide-width)

## 9. Responsivität & Dark Mode

*   **Responsive Prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)**: Das Kernkonzept! Wendet Klassen nur ab einer bestimmten Bildschirmgröße an (Mobile First).
    *   Beispiel: `w-full md:w-1/2 lg:w-1/3` (Volle Breite auf kleinen Schirmen, halbe auf mittleren, ein Drittel auf großen).
*   **`dark:{utility}`**: Wendet eine Utility-Klasse nur an, wenn der Dark Mode (Dunkelmodus) aktiv ist (muss in `tailwind.config.js` aktiviert werden).
    *   Beispiel: `bg-white dark:bg-gray-900 text-black dark:text-white`
    *   [Docs: Responsive Design](https://tailwindcss.com/docs/responsive-design)
    *   [Docs: Dark Mode](https://tailwindcss.com/docs/dark-mode)

## 10. Beliebige Werte (Arbitrary Values)

*   **`mt-[5px]`**, **`w-[33.3%]`**, **`bg-[#FF00FF]`**: Wenn die vordefinierten Werte nicht ausreichen, kannst du mit eckigen Klammern `[]` exakte CSS-Werte angeben. Extrem mächtig für Feintuning!
*   [Docs: Using arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)