import Link from "next/link";

export default function NotFound()
{
    return (

        <div>
            <h1> 404 - Seite nicht gefunden</h1>

            <p> Hoppla! Der Link ist veraltet oder die Seite wurde verschoben.</p>
            
            {/* Aufgabe: füge hier noch einen Link zur Startseite hinzu */}
            <Link href="/">Zurück zur Startseite</Link>
            
        </div>
    )
}
