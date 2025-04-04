// app/page.js
"use client"; // Beibehalten wegen des Klick-Handlers im Hero/Button

// Komponenten importieren
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
// Den einfachen Button brauchen wir hier nicht direkt, er ist im Hero enthalten
// import Button from '../components/Button';
// Den DoubleClickButton brauchen wir für die Landing Page nicht
// import DoubleClickButton from '../components/DoubleClickButton';

export default function LandingPage() {
  return (
    <div> {/* Ein äußerer Container kann nützlich sein, muss aber nicht */}

      <Hero />

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100"> {/* Hintergrund für den Abschnitt, vertikales Padding */}
        <div className="container mx-auto px-4"> {/* Zentrierter Container mit horizontalem Padding */}

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Unsere Top-Features
          </h2>

          {/* Grid für die Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid Layout: 1 Spalte auf kleinen Schirmen, 3 auf mittleren (md) und größer, mit Abstand (gap) */}

            {/* Hier verwenden wir unsere FeatureCard Komponente mehrmals mit unterschiedlichen Props */}
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

      <Footer />

    </div>
  );
}

// Benenne die exportierte Funktion um (von Home zu LandingPage ist optional, aber beschreibend)
// Stelle sicher, dass der Dateiname weiterhin page.js ist!