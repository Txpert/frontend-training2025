// speichert alle Produkte
let produktListe = [];

// Funktion zum Erstellen eines neuen Produkts
function erstelleProdukt(name, preis, beschreibung) {
    return {
        id: Date.now(), // Eindeutige ID
        name: name,
        preis: preis,
        beschreibung: beschreibung
    };
}

//Funktion zum Hinzufügen eines Produkts
function produktHinzufuegen(name, preis, beschreibung){
    let neuesProdukt = erstelleProdukt(name, preis, beschreibung);
    produktListe.push(neuesProdukt);
    produkteAnzeigen();
}

// // Funktion zum Entfernen eines Produkts
// function produktEntfernen(id){
//     produktListe = produktListe.filter(produkt => produkt.id !== id);
//     produkteAnzeigen();
// }


// Funktion zum Anzeigen aller Produkte
function produkteAnzeigen(){

    const produktsContainer = document.getElementById("productsList");
    // Liste leeren
    produktsContainer.innerHTML = "";
    
    produktListe.forEach(produkt =>{ 
      //Neues Div für das Warenkprb-Element erstellen
     const produktBox = `
            <div>
                <h3>${produkt.name}</h3>
                <p class="price">${produkt.preis.toFixed(2)} €</p>
                <p>${produkt.beschreibung}</p>
            </div>
     `;
      //html IN DAS Element einfügen
      produktsContainer.innerHTML += produktBox;
  
     // Element zum Warenkorb hinzufügen
    });
  }

// Event-Listener für das Formular
document.getElementById("productForm").addEventListener("submit", function(e){
    e.preventDefault(); // Verhindert das Neuladen der Seite

let name = document.getElementById("productName").value;
let preis = parseFloat(document.getElementById("productPrice").value);
let beschreibung = document.getElementById("productDescription").value;

produktHinzufuegen(name, preis, beschreibung);
});