// Die Hauptklasse Fahrzeug
class Fahrzeug {
    constructor(marke, modell) {
      this.marke = marke;
      this.modell = modell;
      this.geschwindigkeit = 0;
    }
    
    beschleunigen(wert) {
      this.geschwindigkeit += wert;
      console.log(this.marke + " " + this.modell + " beschleunigt auf " + this.geschwindigkeit + " km/h");
    }
    
    bremsen(wert) {
      this.geschwindigkeit = Math.max(0, this.geschwindigkeit - wert); // Nicht unter 0 km/h
      console.log(this.marke + " " + this.modell + " bremst auf " + this.geschwindigkeit + " km/h");
    }
    
    info() {
      return this.marke + " " + this.modell + ", aktuelle Geschwindigkeit: " + this.geschwindigkeit + " km/h";
    }
  }
  
  // Die Unterklasse Auto
  class Auto extends Fahrzeug {
    constructor(marke, modell, anzahlTüren) {
      super(marke, modell); // Ruft den Konstruktor der Elternklasse auf
      this.anzahlTüren = anzahlTüren;
    }
    
    hupen() {
      console.log("Huuuup Huuuup!");
    }
    
    // Überschreiben der info-Methode um die Anzahl der Türen anzuzeigen
    info() {
      return super.info() + ", Anzahl Türen: " + this.anzahlTüren;
    }
  }
  
  // So testest du deine Klassen:
  let meinFahrzeug = new Fahrzeug("Generic", "Vehicle");
  meinFahrzeug.beschleunigen(30);
  
  let meinAuto = new Auto("VW", "Golf", 5);
  meinAuto.beschleunigen(50);
  meinAuto.hupen();
  console.log(meinAuto.info());