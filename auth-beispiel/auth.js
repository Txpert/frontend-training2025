// auth.js
import NextAuth from 'next-auth';      // Importiere die Hauptfunktion von next-auth
import config from './auth.config'; // Importiere unsere Konfiguration

// Initialisiere next-auth mit unserer Konfiguration
// Dies exportiert wichtige Funktionen und Objekte für die Authentifizierung
export const {
  handlers: { GET, POST }, // API Route Handler (für /api/auth/...)
  auth,                   // Funktion zum Abrufen der Session auf dem Server / in Middleware
  signIn,                 // Funktion zum Starten des Anmeldevorgangs
  signOut,                // Funktion zum Abmelden
} = NextAuth(config);     // Übergib die Konfiguration an NextAuth