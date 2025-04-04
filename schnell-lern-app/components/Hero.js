import Button from './Button'; // Importiere unseren bestehenden Button
import Link from "next/link";

export default function Hero() {
  const handleCTAClick = () => {
    alert('Super! Du willst mehr wissen!');
    // Hier könnte später eine Navigation oder eine andere Aktion stehen
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white py-20 px-4 text-center"> {/* Farbverlauf, weißer Text, viel Padding, zentrierter Text */}
    {/* Navigation Bar */}

    
    <nav className="container mx-auto flex justify-between items-center mb-16"> {/* Container, Flexbox, verteilt Elemente, zentriert vertikal, Abstand nach unten */}
        {/* Logo/App Name (links) */}
        <div className="text-2xl font-bold">
          SchnellLern App
        </div>

        {/* Navigationslinks (rechts) */}
        <ul className="flex space-x-6"> {/* Flexbox für horizontale Links, Abstand zwischen Links */}
          <li>
            {/* Link zur Features-Sektion auf DIESER Seite */}
            <a href="#features" className="hover:text-gray-200 transition-colors duration-150">
              Features
            </a>
          </li>
          <li>
            {/* Link zur (zukünftigen) Preise-Seite */}
            <Link href="/preise" legacyBehavior>
              <a className="hover:text-gray-200 transition-colors duration-150">Preise</a>
            </Link>
          </li>
          <li>
            {/* Link zur (zukünftigen) Kontakt-Seite */}
            <Link href="/kontakt" legacyBehavior>
             <a className="hover:text-gray-200 transition-colors duration-150">Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>

    
    <div className='text-center'>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Lerne schneller als je zuvor!</h1> {/* Große Überschrift, responsiv */}
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"> {/* Textgröße, Abstand unten, maximale Breite, zentriert */}
        Die SchnellLern App hilft dir, Wissen effizient aufzunehmen und zu behalten. Starte noch heute!
      </p>
      <Button
        buttonText="Jetzt kostenlos starten"
        onClickHandler={handleCTAClick}
        // Wir können Tailwind-Klassen auch direkt an unsere Komponente übergeben,
        // wenn wir sie so gebaut hätten, dass sie diese entgegennimmt und weitergibt.
        // Alternativ können wir den Button selbst anpassen oder einen Wrapper stylen.
        // Fürs Erste nutzen wir das Standard-Styling des Buttons.
      />
      </div>
    </div>
  );
}