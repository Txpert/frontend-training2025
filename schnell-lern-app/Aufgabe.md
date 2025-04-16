
---

**Aufgabe: Landing Page erweitern mit Streaming, Assets und Error Handling**

**Teil 1: Testimonials-Abschnitt vorbereiten (Komponenten)**

Wir brauchen eine Komponente, die ein einzelnes Testimonial anzeigt, und eine, die die Daten (simuliert) lädt und die einzelnen Testimonials rendert.

1.  **`TestimonialCard.js` erstellen:**
    *   Erstelle die Datei `components/TestimonialCard.js`.
    *   Diese Komponente soll Props wie `text`, `author` und optional `avatarUrl` erhalten und anzeigen. Style sie einfach mit Tailwind. Füge hier auch schon einen Platz für ein Icon (z.B. Anführungszeichen) und ein Avatar-Bild ein.

    ```javascript
    // components/TestimonialCard.js
    import Image from 'next/image'; // Import für den Avatar

    // Erwartet Text, Autor und Avatar-URL als Props
    export default function TestimonialCard({ text, author, avatarUrl }) {
      return (
        // Grundkarte mit Styling
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          {/* Platz für ein Zitat-Icon (wird später hinzugefügt) */}
          <div className="text-indigo-500 text-4xl mb-4">
            {/* Icon kommt hier */}
            "
          </div>
          {/* Testimonial Text */}
          <p className="text-gray-600 italic mb-4">"{text}"</p>
          {/* Avatar und Autor */}
          <div className="flex items-center justify-center">
            {/* Avatar Bild (wenn URL vorhanden) */}
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={`Avatar von ${author}`}
                width={40} // Feste Breite für den Avatar
                height={40} // Feste Höhe
                className="rounded-full mr-3" // Rundes Bild, Abstand rechts
              />
            )}
            {/* Autor Name */}
            <p className="font-semibold text-gray-800">{author}</p>
          </div>
        </div>
      );
    }
    ```

2.  **`TestimonialsSection.js` erstellen (mit simulierter Ladezeit):**
    *   Erstelle die Datei `components/TestimonialsSection.js`.
    *   Diese Komponente soll **asynchron** sein (`async function`).
    *   Simuliere innerhalb der Komponente eine Ladeverzögerung (z.B. 4 Sekunden) mit `await new Promise(resolve => setTimeout(resolve, 4000));`.
    *   "Lade" danach ein paar Beispiel-Testimonial-Daten (als Array von Objekten).
    *   Rendere ein Grid (ähnlich wie bei den Features), das mehrere `TestimonialCard`-Komponenten mit den geladenen Daten anzeigt.

    ```javascript
    // components/TestimonialsSection.js
    import TestimonialCard from './TestimonialCard'; // Einzelne Karte importieren

    // Simuliert das Abrufen von Testimonial-Daten (dauert 4 Sekunden)
    async function fetchTestimonials() {
      console.log("TestimonialsSection: Beginne Testimonials zu 'laden' (4s)...");
      await new Promise(resolve => setTimeout(resolve, 4000)); // Warte 4 Sekunden

      // Beispiel-Daten
      const testimonials = [
        { id: 1, text: "Diese App hat mein Lernen revolutioniert!", author: "Alex M.", avatarUrl: "https://i.pravatar.cc/150?img=1" }, // Beispiel-Avatar
        { id: 2, text: "Endlich eine App, die wirklich funktioniert.", author: "Sarah K.", avatarUrl: "https://i.pravatar.cc/150?img=5" },
        { id: 3, text: "Ich lerne so viel schneller und effizienter.", author: "Ben T.", avatarUrl: "https://i.pravatar.cc/150?img=8" },
      ];
      console.log("TestimonialsSection: Testimonials 'geladen'!");
      return testimonials;
    }

    // Die Hauptkomponente für den Abschnitt, deklariert als 'async'
    export default async function TestimonialsSection() {
      // Rufe die asynchrone Funktion auf und warte auf die Daten
      const testimonialsData = await fetchTestimonials();

      return (
        // Abschnitt mit Styling
        <section className="py-16 bg-indigo-50"> {/* Leicht anderer Hintergrund */}
          <div className="container mx-auto px-4">
             {/* Überschrift für den Abschnitt */}
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Was unsere Nutzer sagen
            </h2>
             {/* Grid für die Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mappe über die Daten und rendere für jedes Testimonial eine Karte */}
              {testimonialsData.map(testimonial => (
                <TestimonialCard
                  key={testimonial.id} // Wichtig für React Listen
                  text={testimonial.text}
                  author={testimonial.author}
                  avatarUrl={testimonial.avatarUrl} // Übergib die Avatar-URL
                />
              ))}
            </div>
          </div>
        </section>
      );
    }
    ```

**Teil 2: Streaming für Testimonials implementieren**

Jetzt integrieren wir den neuen Abschnitt in die Hauptseite und sorgen dafür, dass er gestreamt wird.

1.  **`Suspense` in `app/page.js` einfügen:**
    *   Öffne `app/page.js`.
    *   Importiere `Suspense` von React und deine neue `TestimonialsSection`.
    *   Füge den `<TestimonialsSection />` Aufruf *innerhalb* einer `<Suspense>`-Grenze hinzu (z.B. zwischen den Features und dem Footer).
    *   Erstelle einen aussagekräftigen `fallback` für die Suspense-Grenze (z.B. ein einfacher Text oder mehrere "graue Boxen" als Skeleton-Platzhalter).

    ```javascript
    // app/page.js
    "use client"; // Bleibt, falls du noch Klick-Handler hast (z.B. vom Hero-Button)

    import React, { Suspense } from 'react'; // Suspense importieren
    import Hero from '../components/Hero';
    import FeatureCard from '../components/FeatureCard'; // Behalten wir bei
    import TestimonialsSection from '../components/TestimonialsSection'; // NEU importieren
    import Footer from '../components/Footer';

    export default function LandingPage() {
      return (
        <div>
          <Hero />

          {/* Features Section (bleibt wie sie ist) */}
          <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Unsere Top-Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* ... Feature Cards hier ... */}
                 <FeatureCard
                    title="Intelligente Wiederholung"
                    description="Vergiss nie wieder etwas Wichtiges dank unseres Spaced-Repetition-Systems."
                  />
                  <FeatureCard
                    title="Vielfältige Lernmodi"
                    description="Karteikarten, Quizze, Lückentexte – lerne so, wie es für dich am besten passt."
                  />
                  <FeatureCard
                    title="Fortschritts-Tracking"
                    description="Behalte deinen Lernfortschritt immer im Blick und bleibe motiviert."
                  />
              </div>
            </div>
          </section>

          {/* NEU: Testimonials Section mit Suspense */}
          <Suspense fallback={
            // Fallback UI: Wird angezeigt, während TestimonialsSection lädt
            <div className="text-center py-16 bg-indigo-50">
              <h2 className="text-2xl font-semibold text-gray-500">Lade Nutzerstimmen...</h2>
              {/* Optional: Einfache Skeleton-Platzhalter */}
              <div className="container mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-200 h-40 rounded-lg animate-pulse"></div>
                  <div className="bg-gray-200 h-40 rounded-lg animate-pulse"></div>
                  <div className="bg-gray-200 h-40 rounded-lg animate-pulse"></div>
              </div>
            </div>
          }>
            {/* Die Komponente, die auf Daten wartet */}
            <TestimonialsSection />
          </Suspense>

          <Footer />
        </div>
      );
    }
    ```

2.  **Testen:**
    *   Öffne `http://localhost:3000`.
    *   Der Hero und die Feature-Karten sollten **sofort** erscheinen.
    *   Der Bereich für die Testimonials sollte den **Fallback** (Ladetext/Skeletons) für ca. 4 Sekunden anzeigen.
    *   Danach sollten die echten Testimonial-Karten erscheinen.

**Teil 3: Externe Ressourcen hinzufügen (Icons & Bilder)**

1.  **Icons:**
    *   Wähle eine Icon-Bibliothek (z.B. **Heroicons** oder **Feather Icons**).
    *   Suche ein passendes "Zitat"-Icon (quote) oder ähnliches.
    *   Lade es als SVG herunter oder kopiere den SVG-Code.
    *   **Füge das SVG-Icon** in die `TestimonialCard.js` an der markierten Stelle ein. Du kannst den SVG-Code direkt ins JSX einfügen. Passe ggf. Größe und Farbe mit Tailwind-Klassen an (`h-8 w-8 text-indigo-500` etc.).
    *   Füge optional auch Icons zu den Feature Cards hinzu.

2.  **Bilder:**
    *   Wir haben bereits Platzhalter-Avatare von `pravatar.cc` in `TestimonialsSection.js` verwendet. Das ist schon eine externe Ressource!
    *   **Zusätzlich:** Suche dir ein passendes Bild für den **Hero-Bereich** von einer kostenlosen Bild-Plattform wie [Unsplash](https://unsplash.com/) oder [Pexels](https://www.pexels.com/).
    *   Füge das Bild in die `components/Hero.js` ein. Benutze die `next/image`-Komponente für Optimierung. Du musst `width` und `height` angeben (die Originalgröße oder eine gewünschte Rendergröße) und einen sinnvollen `alt`-Text. Du kannst das Bild als Hintergrund verwenden (komplizierter) oder einfach unter/neben dem Text platzieren.

    ```javascript
    // Beispiel für ein Bild im Hero (z.B. unter dem Button)
    // components/Hero.js
    import Image from 'next/image';
    // ... restlicher Hero Code ...
          /> // Der Button von vorher
        </div>

        {/* NEU: Bild unter dem Hauptinhalt */}
        <div className="mt-12 max-w-4xl mx-auto"> {/* Container für das Bild */}
           <Image
             // Ersetze dies durch die URL deines gewählten Bildes
             src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGVhcm5pbmcsZWR1Y2F0aW9ufHx8fHx8MTY4Mzg0MzEwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
             alt="Lernende Person mit Laptop und Büchern"
             width={1080} // Beispielbreite (anpassen!)
             height={600} // Beispielhöhe (anpassen!)
             priority // Wichtig für "Above the Fold" Bilder, lädt schneller
             className="rounded-lg shadow-xl" // Styling
           />
        </div>
       </div> // Ende des Haupt-Divs
     );
    }
    ```

**Teil 4: Benutzerdefinierte "Nicht gefunden"-Seite (Error Handling)**

1.  **`not-found.js` erstellen:**
    *   Erstelle **direkt** im `app`-Ordner eine neue Datei: `app/not-found.js`.
    *   Diese Datei definiert die globale 404-Seite für deine Anwendung.
    *   Gestalte sie benutzerfreundlich mit einer Nachricht und einem Link zurück zur Startseite.

    ```javascript
    // app/not-found.js
    import Link from 'next/link'; // Für den Link zur Startseite

    export default function NotFound() {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
          {/* Icon oder eine Grafik (optional) */}
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Seite nicht gefunden</h2>
          <p className="text-gray-600 mb-8">
            Ups! Die Seite, die du suchst, existiert leider nicht (mehr).
          </p>
          <Link href="/" legacyBehavior>
            <a className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Zurück zur Startseite
            </a>
          </Link>
        </div>
      );
    }
    ```

2.  **Testen:**
    *   Gehe im Browser zu einer URL, die definitiv nicht existiert, z.B. `http://localhost:3000/diese-seite-gibt-es-nicht`.
    *   Du solltest jetzt deine benutzerdefinierte 404-Seite sehen, nicht die Standard-Fehlerseite von Next.js.
    *   Klicke auf den "Zurück zur Startseite"-Link, um sicherzustellen, dass er funktioniert.

---

Du hast jetzt:
*   Einen neuen Abschnitt für Testimonials erstellt.
*   Gelernt, wie man `async/await` in Server Components nutzt, um (simulierte) Daten zu laden.
*   `Suspense` implementiert, um den Testimonials-Abschnitt zu streamen und einen Fallback anzuzeigen.
*   Externe Ressourcen (Icons als SVG, Bilder über `next/image` von externen URLs) eingebunden.
*   Eine benutzerdefinierte 404-Fehlerseite mit `not-found.js` erstellt.

