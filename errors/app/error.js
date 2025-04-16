"use client";
import Link from "next/link";
import { useEffect } from "react";


export default function Error( error, reset){
    useEffect(() => {
        console.error("Fehler im segment abgefangen:", error);
    }, [error]);

    return(
        <div>
            <h2>Hoppla! Etwas ist schiefgelaufen.</h2>
            <p>Ein unerwarteter Fehler ist in diesem Teil der Anwendung aufgetreten</p>
            <button onClick={
                () => reset()
            }>
            </button>
            {/* Aufgabe: füge hier noch einen Link zur Startseite hinzu */}
            <Link href="/">Zurück zur Startseite</Link>

        </div>



    )

}