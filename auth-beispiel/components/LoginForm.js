// components/LoginForm.js
"use client"; // Diese Komponente braucht State und Event Handler

import { signIn } from "next-auth/react"; // Clientseitige signIn Funktion
import { useState } from "react";      // Für die Verwaltung der Formular-Eingaben
import { useRouter } from "next/navigation"; // Zum Weiterleiten nach dem Login

export default function LoginForm() {
  // State für E-Mail, Passwort und Fehlermeldungen
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Für Ladezustand des Buttons

  // Router-Hook für die Weiterleitung
  const router = useRouter();

  // Handler für das Absenden des Formulars
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden
    setError("");      // Fehler zurücksetzen
    setIsLoading(true); // Ladezustand aktivieren

    try {
      // Versuche, den Benutzer mit 'credentials' anzumelden
      const result = await signIn("credentials", {
        // WICHTIG: redirect: false verhindert, dass next-auth automatisch weiterleitet.
        // Wir wollen die Weiterleitung selbst steuern und Fehler anzeigen.
        redirect: false,
        email: email,       // Übergib die E-Mail aus dem State
        password: password, // Übergib das Passwort aus dem State
      });

      console.log("Login Result:", result); // Logge das Ergebnis

      // Prüfe, ob das Ergebnis einen Fehler enthält
      if (result?.error) {
        setError("Anmeldung fehlgeschlagen. Prüfe E-Mail/Passwort."); // Setze Fehlermeldung
        setIsLoading(false); // Ladezustand beenden
      } else if (result?.ok) {
        // Wenn Anmeldung erfolgreich war (result ist ok und kein error)
        setError("");
        router.push("/"); // Leite zur Startseite weiter
        // setIsLoading muss hier nicht false sein, da wir wegnavigieren
      } else {
         // Fallback für unerwartete Ergebnisse
         setError("Ein unerwarteter Fehler ist aufgetreten.");
         setIsLoading(false);
      }

    } catch (err) {
      // Fange andere mögliche Fehler ab
      console.error("Login Catch Error:", err);
      setError("Ein Fehler ist aufgetreten.");
      setIsLoading(false);
    }
  };

  // Das JSX für das Formular
  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid gray', padding: '20px', maxWidth: '300px' }}>
      <h2>Login</h2>
      {/* Eingabefeld für E-Mail */}
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Aktualisiere den State bei Änderung
          required // Pflichtfeld
          style={{ width: '90%' }}
        />
      </div>
      {/* Eingabefeld für Passwort */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password">Passwort: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Aktualisiere den State
          required // Pflichtfeld
          style={{ width: '90%' }}
        />
      </div>
      {/* Zeige Fehlermeldung an, falls vorhanden */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Sende-Button */}
      <button type="submit" disabled={isLoading} style={buttonStyle}>
        {isLoading ? 'Melde an...' : 'Anmelden'} {/* Zeige Ladezustand an */}
      </button>

      {/* Abstand zwischen den Buttons */}
      <div style={{ marginTop: '15px' }}></div>

      {/* Google Sign-In Button */}
      <button 
        type="button" // Wichtig: type="button", damit das Formular nicht abgeschickt wird
        onClick={() => signIn('google')} // Rufe signIn mit 'google' auf
        style={buttonStyle} // Wiederverwende den Button-Stil
      >
        Mit Google anmelden
      </button>
    </form>
  );
}

// Kleines Hilfs-Styling für die Buttons
const buttonStyle = {
  padding: '8px 15px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#eee',
  color: 'black', // Textfarbe explizit auf Schwarz setzen
};