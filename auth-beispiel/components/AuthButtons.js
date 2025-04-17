// components/AuthButtons.js
"use client"; // Erfordert Client-Interaktivität und Hooks

import { useSession, signIn, signOut } from "next-auth/react"; // Clientseitige Hooks/Funktionen

export default function AuthButtons() {
  // Holt den aktuellen Session-Status (loading, authenticated, unauthenticated)
  const { data: session, status } = useSession();

  // Während die Session geprüft wird
  if (status === "loading") {
    return <p>Prüfe Login...</p>;
  }
// hi, Danke dass du Timo geschrieben hast
  // Wenn der Benutzer eingeloggt ist
  if (status === "authenticated") {
    return (
      <div>
        {/* Zeige Benutzername und E-Mail aus der Session */}
        <p>Eingeloggt als: {session.user?.name} ({session.user?.email})</p>
        {/* Button zum Abmelden, ruft signOut() von next-auth auf */}
        <button onClick={() => signOut()} style={buttonStyle}>
          Ausloggen
        </button>
      </div>
    );
  }

  // Wenn der Benutzer NICHT eingeloggt ist
  return (
    <div>
      <p>Nicht eingeloggt.</p>
      {/* Button zum Anmelden, ruft signIn() von next-auth auf */}
      {/* Ohne Argumente leitet signIn() zur Standard-Login-Seite (oder der in pages.signIn definierten) */}
      {/* Normalerweise würdest du hier zu deiner eigenen Login-Form leiten oder sie anzeigen */}
      <button onClick={() => signIn()} style={buttonStyle}>
        Einloggen (Standardseite)
      </button>
      {/* Wir werden gleich ein eigenes Login-Formular erstellen */}
    </div>
  );
}

// Kleines Hilfs-Styling für die Buttons
const buttonStyle = {
  padding: '5px 10px',
  margin: '5px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '4px'
};