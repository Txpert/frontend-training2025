// app/page.js
import AuthButtons from "@/components/AuthButtons"; // Importiere die Buttons

// Die Startseite ist eine Server Component
export default function Home() {
  return (
    <main>
      <h1>Willkommen zum Next.js Auth Beispiel</h1>
      <p>Dies ist die öffentliche Startseite.</p>

      {/* Zeige die Login/Logout Buttons und den Status an */}
      <AuthButtons />

      {/* TODO: Links zu anderen Seiten hinzufügen */}
    </main>
  );
}