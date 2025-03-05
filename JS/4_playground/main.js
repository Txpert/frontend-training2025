// Hier beginnt die Interaktion mit dem DOM

//Ein DOM-Element über seine ID finden

const button = document.getElementById("changeButton");


const paragraph = document.getElementById("originalText");
  // document.getElementById("changeButton").oneclick = function(){    // }

//Einen Event-Listener hinzufügen (reagiert auf Klicks)
button.addEventListener("click", function(){
    //Den Inhalt eines DOM-Elements verändern
    paragraph.textContent = "Der Text wurde durch JavaScript geändert"

    //Die Farbe des Textes ändern
    paragraph.style.color = "pink";

    //Ein neues Element erstellen
    const newElement = document.createElement("h2");
    newElement.textContent = "Dieses Element wurde dynamisch hinzugefügt!";
    
    //Das neue Element dem DOM-Baum hinzufügen
    document.getElementById("container").appendChild(newElement);
});




