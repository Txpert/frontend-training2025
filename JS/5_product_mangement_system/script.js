// Funktion zum Erstellen eines neuen Produkts
class Product {
    constructor(name, preis, beschreibung) {
        this.id = Date.now(); // Eindeutige ID basierend auf Zeitstempel
        this.name = name;
        this.preis = preis;
        this.beschreibung = beschreibung;
    }
}


class Shop{
    constructor(){
        this.prducts = [];
    }

    produktHinzufuegen(product){
        this.prducts.push(product);
        this.produkteAnzeigen();
    }


    produkteAnzeigen(){

        const produktsContainer = document.getElementById("productsList");
        // Liste leeren
        produktsContainer.innerHTML = "";
        
        this.products.forEach(produkt =>{ 
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
}

let shop = new shop();
//Funktion zum Hinzufügen eines Produkts


// // Funktion zum Entfernen eines Produkts
// function produktEntfernen(id){
//     produktListe = produktListe.filter(produkt => produkt.id !== id);
//     produkteAnzeigen();
// }


// Funktion zum Anzeigen aller Produkte

  

// Event-Listener für das Formular
document.getElementById("productForm").addEventListener("submit", function(e){
    e.preventDefault(); // Verhindert das Neuladen der Seite

let name = document.getElementById("productName").value;
let preis = parseFloat(document.getElementById("productPrice").value);
let beschreibung = document.getElementById("productDescription").value;

let product = new Product(name, preis, beschreibung);

shop.produktHinzufuegen(product);
});