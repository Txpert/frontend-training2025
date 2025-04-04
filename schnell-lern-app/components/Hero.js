import Button from './Button'; // Importiere unseren bestehenden Button

export default function Hero() {
  const handleCTAClick = () => {
    alert('Super! Du willst mehr wissen!');
    // Hier könnte später eine Navigation oder eine andere Aktion stehen
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white py-20 px-4 text-center"> {/* Farbverlauf, weißer Text, viel Padding, zentrierter Text */}
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
  );
}