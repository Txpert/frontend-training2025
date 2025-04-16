


// Diese Komponente simuliert das Laden von Daten, das etwas Zeit braucht.

async function SlowDataComponent() {


    // Simuliert eine Netzwerkverzögerung von 3 Sekunden
    await new Promise(resolve => setTimeout(resolve, 30000));

    //Simuliere das Ergebnis des Datenladens
    const data = {
        message: "Daten erfolgreich nach 3 Sek geladen!",
        items: ["Apfel", "Banane"]
    }
    //Rendere die Daten, sobald sie verfügbar sind
    return (
    <div>
        <h2>Langsam geladene Daten</h2>
        <p>{data.message}</p>
        <ul>
            {data.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
 }

export default SlowDataComponent;