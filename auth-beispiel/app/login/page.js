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