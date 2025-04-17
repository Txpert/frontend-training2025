


Grundlagen der Zugriffskontrolle verstehen**

1.  **Definition und Zweck:**
    *   **Zugriffskontrolle** bestimmt, *wer* auf welche Ressourcen oder Funktionen deiner Anwendung zugreifen darf. Es geht darum, deine Anwendung und Daten zu schützen.
    *   Sie besteht aus zwei Hauptteilen:
        *   **Authentifizierung (AuthN):** Feststellen, *wer* ein Benutzer ist. Der Prozess des Nachweisens der Identität (z.B. durch Eingabe von Benutzername und Passwort, Login über Google etc.). Das Ergebnis ist oft eine "Session", die besagt "Dieser Browser gehört zu Benutzer X".
        *   **Autorisierung (AuthZ):** Feststellen, *was* ein authentifizierter Benutzer tun darf. Basierend auf der Identität (oder Rollen/Berechtigungen) wird entschieden, ob der Benutzer eine bestimmte Seite sehen, eine Aktion ausführen oder auf bestimmte Daten zugreifen darf.

2.  **Clientseitige vs. Serverseitige Zugriffskontrolle:**
    *   **Clientseitig:** Überprüfungen finden *im Browser* des Benutzers statt (mit JavaScript).
        *   *Beispiel:* Ein "Mein Profil"-Button wird nur angezeigt, wenn JavaScript feststellt, dass der Benutzer eingeloggt ist.
        *   *Vorteil:* Schnelle UI-Anpassungen ohne Neuladen der Seite.
        *   *Nachteil:* **Unsicher!** Ein technisch versierter Benutzer kann den JavaScript-Code im Browser manipulieren und diese Prüfungen umgehen. **Niemals für echten Schutz von Daten oder Funktionen verwenden!** Nur für rein visuelle Anpassungen.
    *   **Serverseitig:** Überprüfungen finden *auf dem Server* statt, *bevor* die Seite oder die Daten an den Browser gesendet werden.
        *   *Beispiel:* Der Server prüft, ob eine gültige Session vorliegt, bevor er den HTML-Code für die `/dashboard`-Seite generiert. Wenn nicht, leitet er zum Login um. Oder eine API-Route prüft die Session, bevor sie sensible Daten zurückgibt.
        *   *Vorteil:* **Sicher!** Der Benutzer kann dies nicht umgehen, da die Prüfung außerhalb seiner Kontrolle stattfindet.
        *   *Nachteil:* Erfordert einen Request zum Server.

3.  **Vorteile der Implementierung in Next.js:**
    *   **Sicherheit:** Schutz sensibler Daten und Funktionen vor unbefugtem Zugriff.
    *   **Personalisierung:** Anzeigen benutzerspezifischer Inhalte (z.B. Name, Profilbild, Dashboard).
    *   **Compliance:** Erfüllung von Datenschutzanforderungen (z.B. DSGVO), indem der Zugriff auf personenbezogene Daten eingeschränkt wird.
    *   **Geschäftslogik:** Implementierung von Rollen und Berechtigungen (z.B. Admin vs. normaler Benutzer).
    *   **Integration:** Next.js bietet mit dem App Router und Middleware hervorragende Möglichkeiten, serverseitige Prüfungen elegant und effizient einzubauen. Bibliotheken wie `next-auth` nehmen einem dabei extrem viel Arbeit ab.

---

**Teil 2: Erstellen und Verwenden von Zugriffskontrollmechanismen**

**Schritt 1: Neues Projekt erstellen und `next-auth` installieren**

1.  **Öffne dein Terminal.**
2.  **Navigiere** in deinen Projektordner.
3.  **Erstelle ein neues Next.js-Projekt** (wir nennen es `nextjs-auth-beispiel`):

    ```bash
    npx create-next-app@latest nextjs-auth-beispiel
    ```

4.  **Beantworte die Fragen:**
    *   TypeScript? -> **No**
    *   ESLint? -> **Yes**
    *   Tailwind? -> **No** (halten wir es einfach)
    *   `src/` directory? -> **No**
    *   **App Router? -> Yes** (Wichtig für die moderne `next-auth` Version!)
    *   Import alias? -> **Enter**

5.  **Wechsle in den Projektordner:**

    ```bash
    cd nextjs-auth-beispiel
    ```

6.  **Installiere `next-auth`:** (Wir verwenden die aktuelle Version, die gut mit dem App Router funktioniert)

    ```bash
    npm install next-auth
    ```

7.  **Erstelle eine `AUTH_SECRET`:** `next-auth` braucht einen geheimen Schlüssel zum Verschlüsseln von Cookies/JWTs.
    *   **Methode 1 (Automatisch):** Oft reicht es, wenn `next-auth` beim ersten Start selbst einen generiert (wird dann in `.env.local` erwartet).
    *   **Methode 2 (Manuell, empfohlen):** Generiere einen sicheren Schlüssel. Du kannst OpenSSL im Terminal nutzen (wenn installiert): `openssl rand -base64 32`
    *   Erstelle eine Datei namens `.env.local` im Hauptverzeichnis deines Projekts (auf der gleichen Ebene wie `package.json`).
    *   Füge den Schlüssel in die Datei ein:

        ```.env.local
        # Ersetze den Wert durch deinen generierten Schlüssel!
        AUTH_SECRET=DEIN_GENERIERTER_SUPER_GEHEIMER_SCHLÜSSEL_HIER
        ```
        *Wichtig:* Füge `.env.local` zu deiner `.gitignore`-Datei hinzu (sollte standardmäßig schon drin sein), damit dein Geheimnis nicht in Git landet!

**Schritt 2: `next-auth` Konfiguration**

Wir verwenden den `CredentialsProvider` für einen einfachen Benutzername/Passwort-Login (in einer echten App würdest du hier auch Google, GitHub etc. hinzufügen und Passwörter *immer* hashen!).

1.  **Erstelle die Haupt-Konfigurationsdatei `auth.config.js`:**
    *   Erstelle die Datei `auth.config.js` im **Hauptverzeichnis** deines Projekts.
    *   Füge folgenden Code ein:

    ```javascript
    // auth.config.js

    import Credentials from 'next-auth/providers/credentials'; // Importiere den Credentials Provider

    // Definiere die Konfiguration für next-auth
    export default {
      // Hier listen wir die Authentifizierungs-Anbieter auf
      providers: [
        // Konfiguration für den Benutzername/Passwort-Login
        Credentials({
          // Dieser Abschnitt ist optional und definiert Felder für eine automatisch generierte Login-Seite.
          // Wir bauen aber unsere eigene Login-Seite.
          // name: 'Credentials',
          // credentials: {
          //   email: { label: 'Email', type: 'email', placeholder: 'test@test.com' },
          //   password: { label: 'Password', type: 'password' }
          // },

          // Dies ist die WICHTIGSTE Funktion: Sie validiert die Anmeldedaten.
          // 'credentials' enthält die vom Benutzer eingegebenen Daten (z.B. email, password).
          async authorize(credentials) {
            console.log('Authorize Funktion wird aufgerufen mit:', credentials);

            // --- WICHTIG: ECHTE AUTHENTIFIZIERUNG ---
            // In einer echten App würdest du hier:
            // 1. Den Benutzer anhand der `credentials.email` in deiner Datenbank suchen.
            // 2. Das eingegebene `credentials.password` sicher mit einem Hash-Algorithmus (z.B. bcrypt) hashen.
            // 3. Den gehashten Wert mit dem gespeicherten Hash in der Datenbank vergleichen.
            // 4. Wenn sie übereinstimmen, den Benutzer aus der Datenbank zurückgeben.

            // --- VEREINFACHTES BEISPIEL FÜR DIESE DEMO ---
            // Wir prüfen nur hartcodierte Werte. NIEMALS so in Produktion verwenden!
            const testEmail = "test@test.com";
            const testPassword = "password123";

            if (credentials.email === testEmail && credentials.password === testPassword) {
              console.log('Credentials OK, gebe Benutzerobjekt zurück.');
              // Wenn die Anmeldung erfolgreich ist, GIB das Benutzerobjekt zurück.
              // Wichtig: Gib hier NIE das Passwort zurück!
              // Die 'id' ist oft nützlich.
              return { id: "1", name: "Test Benutzer", email: testEmail };
            } else {
              console.log('Credentials ungültig.');
              // Wenn die Anmeldung fehlschlägt, gib 'null' zurück.
              return null;
            }
          }
        }) // Ende Credentials Provider
      ], // Ende providers Array

      // Optional: Eigene Login-Seite angeben (standardmäßig /api/auth/signin)
      // pages: {
      //   signIn: '/login', // Wenn du eine eigene Seite unter /login erstellen würdest
      // },
    };
    ```

2.  **Erstelle die `next-auth`-Integrationsdatei `auth.js`:**
    *   Erstelle die Datei `auth.js` im **Hauptverzeichnis**.
    *   Füge folgenden Code ein:

    ```javascript
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
    ```

3.  **Erstelle die API-Route für `next-auth`:**
    *   Erstelle den Pfad `app/api/auth/[...nextauth]/`.
    *   Erstelle darin die Datei `route.js`.
    *   Füge folgenden Code ein:

    ```javascript
    // app/api/auth/[...nextauth]/route.js

    // Importiere die generierten Handler aus unserer auth.js Datei
    import { GET, POST } from '@/auth'; // '@/' ist normalerweise ein Alias für das Projekt-Root

    // Exportiere die GET und POST Handler
    // Diese Zeilen sorgen dafür, dass Routen wie /api/auth/signin, /api/auth/signout,
    // /api/auth/session etc. automatisch von next-auth verwaltet werden.
    export { GET, POST };
    ```
    *(Hinweis: Wenn der Alias `@/` nicht automatisch funktioniert, ersetze ihn durch den relativen Pfad `../../../auth`)*

**Schritt 3: Session Provider und Login-Status anzeigen**

1.  **Erstelle eine Provider-Komponente:**
    *   Erstelle `components/SessionWrapper.js`.
    *   Füge ein:

    ```javascript
    // components/SessionWrapper.js
    "use client"; // SessionProvider erfordert Client-Komponente

    import { SessionProvider } from "next-auth/react"; // Importiere den Provider

    // Eine Wrapper-Komponente, die den SessionProvider für clientseitige Hooks bereitstellt.
    export default function SessionWrapper({ children }) {
      // children repräsentiert den Inhalt, der von diesem Provider umschlossen wird.
      return (
        <SessionProvider>
          {children}
        </SessionProvider>
      );
    }
    ```

2.  **Nutze den Provider im Root Layout:**
    *   Öffne `app/layout.js`.
    *   Importiere und verwende den `SessionWrapper`:

    ```javascript
    // app/layout.js
    import "./globals.css";
    import SessionWrapper from "@/components/SessionWrapper"; // Importiere unseren Wrapper

    export const metadata = {
      title: "Next.js Auth Beispiel",
      description: "Generated by create next app",
    };

    // Das Root-Layout umschließt die gesamte Anwendung.
    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body>
            {/* Umschließe die Kinder mit dem SessionWrapper */}
            <SessionWrapper>
              {children}
            </SessionWrapper>
          </body>
        </html>
      );
    }
    ```
    *(Passe den Pfad `@/components/SessionWrapper` bei Bedarf an: `../components/SessionWrapper`)*

3.  **Login/Logout Button und Status:**
    *   Erstelle `components/AuthButtons.js`:

    ```javascript
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
    ```

4.  **Füge die Buttons zur Startseite hinzu:**
    *   Öffne `app/page.js`.
    *   Importiere und nutze `AuthButtons`:

    ```javascript
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
    ```
    *(Passe Pfad `@/components/AuthButtons` ggf. an)*

**Schritt 4: Eigene Login-Seite erstellen**

1.  **Erstelle die Login-Formular-Komponente:**
    *   Erstelle `components/LoginForm.js`:

    ```javascript
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
    };
    ```

2.  **Erstelle die Login-Seite:**
    *   Erstelle die Datei `app/login/page.js`.
    *   Füge folgenden Code ein:

    ```javascript
    // app/login/page.js
    import LoginForm from "@/components/LoginForm"; // Importiere das Formular

    // Eine einfache Seite, die nur das Login-Formular anzeigt.
    export default function LoginPage() {
      return (
        <div>
          <h1>Bitte einloggen</h1>
          <LoginForm />
        </div>
      );
    }
    ```
    *(Passe Pfad `@/components/LoginForm` ggf. an)*

3.  **Link zur Login-Seite auf der Startseite (optional):**
    *   Öffne `app/page.js`.
    *   Füge einen Link hinzu (z.B. unter den AuthButtons):
    ```javascript
    // app/page.js
    import AuthButtons from "@/components/AuthButtons";
    import Link from 'next/link'; // Link importieren

    export default function Home() {
      return (
        <main>
          <h1>Willkommen zum Next.js Auth Beispiel</h1>
          <p>Dies ist die öffentliche Startseite.</p>
          <AuthButtons />
          <hr />
          <Link href="/login">Gehe zur Login-Seite</Link> {/* NEU */}
          {/* TODO: Links zu anderen Seiten hinzufügen */}
        </main>
      );
    }
    ```

**Schritt 5: Seiten serverseitig schützen**

Wir erstellen eine Seite, die nur eingeloggte Benutzer sehen können.

1.  **Erstelle die geschützte Seite:**
    *   Erstelle die Datei `app/geschuetzt/page.js`.
    *   Füge folgenden Code ein:

    ```javascript
    // app/geschuetzt/page.js
    import { auth } from "@/auth";         // Importiere die serverseitige auth Funktion
    import { redirect } from 'next/navigation'; // Importiere redirect für die Weiterleitung

    // Diese Seite soll nur für eingeloggte Benutzer zugänglich sein.
    // Da dies eine Server Component ist, können wir 'auth' direkt verwenden.
    export default async function GeschuetzteSeite() {
      // Hole die aktuelle Session auf dem Server.
      const session = await auth();

      // Prüfe, ob eine gültige Session existiert.
      if (!session || !session.user) {
        // Wenn keine Session vorhanden ist, leite zum Login weiter.
        // '/api/auth/signin' ist die Standard-Login-Route von next-auth,
        // die dann ggf. zur konfigurierten Seite (oder Standardseite) führt.
        // Du könntest auch direkt zu '/login' weiterleiten.
        console.log("Keine Session gefunden, leite zu signin weiter...");
        redirect("/api/auth/signin?callbackUrl=/geschuetzt"); // Leite zurück nach erfolgreichem Login
      }

      // Wenn eine Session existiert, zeige den geschützten Inhalt an.
      console.log("Session gefunden:", session);
      return (
        <div>
          <h1>Geschützte Seite</h1>
          <p>Dieser Inhalt ist nur für eingeloggte Benutzer sichtbar.</p>
          <p>Willkommen, {session.user.name}!</p>
          {/* Hier könnten weitere geschützte Informationen oder Funktionen stehen */}
        </div>
      );
    }
    ```
    *(Passe Pfad `@/auth` ggf. an)*

2.  **Link zur geschützten Seite hinzufügen (z.B. auf `app/page.js`):**

    ```javascript
    // app/page.js
    // ... andere imports ...
    import Link from 'next/link';

    export default function Home() {
      return (
        <main>
          {/* ... alter Inhalt ... */}
          <Link href="/login">Gehe zur Login-Seite</Link>
          <br /> {/* Zeilenumbruch */}
          <Link href="/geschuetzt">Gehe zur geschützten Seite</Link> {/* NEU */}
          {/* ... */}
        </main>
      );
    }
    ```

**Schritt 6: API-Routen schützen**

Wir erstellen eine API-Route, die nur eingeloggte Benutzer aufrufen können.

1.  **Erstelle die geschützte API-Route:**
    *   Erstelle die Datei `app/api/geschuetzte-daten/route.js`.
    *   Füge folgenden Code ein:

    ```javascript
    // app/api/geschuetzte-daten/route.js
    import { auth } from "@/auth"; // Importiere die serverseitige auth Funktion
    import { NextResponse } from 'next/server'; // Für standardisierte API-Antworten

    // Exportiere die HTTP-Methoden-Handler (hier nur GET)
    export async function GET(request) {
      // Hole die Session auf dem Server für diese API-Anfrage
      const session = await auth();

      // Prüfe, ob eine Session existiert
      if (!session || !session.user) {
        // Wenn nicht eingeloggt, gib eine 401 Unauthorized Antwort zurück
        return NextResponse.json({ message: 'Nicht autorisiert' }, { status: 401 });
      }

      // Wenn eingeloggt, gib die geschützten Daten zurück
      const geschuetzteDaten = {
        userId: session.user.id, // ID aus der Session
        geheimnis: "Das ist eine geheime Information!",
        timestamp: new Date().toISOString(),
      };

      // Sende die Daten als JSON mit Status 200 OK
      return NextResponse.json(geschuetzteDaten, { status: 200 });
    }
    ```
    *(Passe Pfad `@/auth` ggf. an)*

**Schritt 7: Middleware zum Schutz von Routen verwenden**

Middleware ist eine sehr elegante Methode, um *mehrere* Routen auf einmal zu schützen, ohne den Code in jeder Seite wiederholen zu müssen.

1.  **Erstelle die Middleware-Datei:**
    *   Erstelle die Datei `middleware.js` im **Hauptverzeichnis** deines Projekts (auf der gleichen Ebene wie `app`, `package.json`).
    *   Füge folgenden Code ein:

    ```javascript
    // middleware.js
    export { auth as middleware } from "@/auth"; // Importiere und exportiere 'auth' als Middleware

    // Die Middleware wird standardmäßig auf ALLEN Routen ausgeführt.
    // Wir können sie mit einem 'matcher' konfigurieren, um sie nur auf bestimmte
    // Pfade anzuwenden und unnötige Ausführungen (z.B. für Bilddateien) zu vermeiden.

    export const config = {
      // Der Matcher definiert, auf welche Pfade die Middleware angewendet werden soll.
      // Hier schützen wir alles unterhalb von /geschuetzt UND die API-Route.
      // Negative Lookaheads (?!...) können verwendet werden, um bestimmte Pfade auszuschließen (z.B. statische Dateien).
      // Siehe Next.js Middleware Docs für komplexere Matcher: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
       matcher: [
        '/geschuetzt/:path*', // Schützt /geschuetzt und alle Unterseiten
        '/api/geschuetzte-daten/:path*', // Schützt die API Route
        // Füge hier weitere Pfade hinzu, die geschützt werden sollen
        // '/dashboard/:path*',
       ],
    };
    ```
    *(Passe Pfad `@/auth` ggf. an)*

2.  **Wichtiger Hinweis:** Wenn du Middleware verwendest, kümmert sich `next-auth` (durch die `auth`-Funktion) automatisch um die Umleitung zum Login für die im `matcher` angegebenen Seiten-Routen. Du könntest theoretisch den `if (!session)`-Check aus `app/geschuetzt/page.js` entfernen, wenn die Middleware aktiv ist. Es ist aber oft sicherer, die Prüfung trotzdem drin zu lassen (Defense in Depth). Für API-Routen ist der Check im Handler weiterhin nötig, da die Middleware normalerweise nicht direkt eine 401-Antwort sendet, sondern eher umleitet (was für APIs unerwünscht ist).

**Schritt 8: Testen**

1.  **Starte/Neustarte den Dev-Server:** `npm run dev`.
2.  **Tests als ausgeloggter Benutzer:**
    *   Gehe zur Startseite (`/`). Du siehst "Nicht eingeloggt" und die Buttons.
    *   Klicke auf den Link zur "geschützten Seite". Du solltest automatisch zur Login-Seite (`/login`) umgeleitet werden (oder zur Standard-next-auth-Seite, wenn die Middleware die Umleitung macht). Die URL könnte auch `?callbackUrl=/geschuetzt` enthalten.
    *   Versuche, die API-Route direkt im Browser aufzurufen: `http://localhost:3000/api/geschuetzte-daten`. Du solltest eine Fehlermeldung sehen (oft als JSON: `{"message":"Nicht autorisiert"}`).
3.  **Tests als eingeloggter Benutzer:**
    *   Gehe zur Login-Seite (`/login`).
    *   Gib die Testdaten ein: `test@test.com` und `password123`.
    *   Klicke auf "Anmelden". Du solltest zur Startseite weitergeleitet werden.
    *   Auf der Startseite siehst du jetzt "Eingeloggt als: Test Benutzer..." und den Logout-Button.
    *   Klicke auf den Link zur "geschützten Seite". Du solltest jetzt den Inhalt der Seite sehen.
    *   Rufe die API-Route auf: `http://localhost:3000/api/geschuetzte-daten`. Du solltest jetzt die geheimen Daten als JSON sehen.
4.  **Logout testen:**
    *   Klicke auf der Startseite auf "Ausloggen".
    *   Du bist wieder ausgeloggt. Ein erneuter Versuch, auf die geschützte Seite oder API zuzugreifen, sollte wieder fehlschlagen/umleiten.

---

**Zusammenfassung & JWTs:**

*   Wir haben ein System mit `next-auth` und dem `CredentialsProvider` aufgebaut.
*   Benutzer können sich ein- und ausloggen.
*   Der Login-Status wird clientseitig (`useSession`) und serverseitig (`auth()`) geprüft.
*   Seiten (`/geschuetzt`) und API-Routen (`/api/geschuetzte-daten`) werden serverseitig geschützt.
*   Middleware bietet einen zentralen Schutzmechanismus.
*   **Wo sind die JWTs?** `next-auth` verwendet **standardmäßig** eine **Session-Cookie-Strategie**. Nach erfolgreichem Login (`authorize` gibt User zurück) erstellt `next-auth` eine Session auf dem Server und sendet einen **verschlüsselten, HTTP-Only Cookie** an den Browser, der eine Session-ID enthält. Bei nachfolgenden Anfragen sendet der Browser diesen Cookie mit. `next-auth` validiert den Cookie serverseitig und stellt die Session bereit (via `auth()` oder `useSession`).
*   **Optional JWT-Strategie:** Du *kannst* `next-auth` konfigurieren, explizit JWTs als Session-Strategie zu verwenden (`session: { strategy: 'jwt' }` in der Hauptkonfiguration). Dann würde der Inhalt der Session (oder ein Teil davon) als signiertes und optional verschlüsseltes JWT im Cookie gespeichert. Das ist nützlich, wenn du z.B. von anderen Services auf die Session-Daten zugreifen musst, ohne eine Datenbank abzufragen. Für unseren Fall ist die Standard-Cookie-Strategie einfacher und sicherer. `next-auth` kümmert sich um die Details!

Das ist ein umfassender Überblick über die Grundlagen der Zugriffskontrolle mit `next-auth` im App Router! Von hier aus kannst du weitere Provider (Google etc.) hinzufügen, Rollen implementieren oder die Passwortsicherheit verbessern.