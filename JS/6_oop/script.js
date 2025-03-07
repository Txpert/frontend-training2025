class Auto {
    constructor(farbe, marke, maxGeschwindigkeit) {
        this.farbe = farbe;
        this.marke = marke;
        this.maxGeschwindigkeit = maxGeschwindigkeit;
    }
    start() {
        console.log("Das " + this.farbe + "e " + this.marke + " wurde gestartet!" );
}
}

class Sportwagen extends Auto {
    constructor(farbe, marke, maxGeschwindigkeit, turbo, mods, bodykit){
        super(farbe, marke, maxGeschwindigkeit);
        this.turbo = turbo;
        this.mods = mods;
        this.bodykit = bodykit;  
    }
    turboAktivieren(){
        this.maxGeschwindigkeit = this.maxGeschwindigkeit + 100;
        console.log(this.maxGeschwindigkeit);
    }
}

let meinSportwagen = new Sportwagen("blau", "Ferrari", 320, 2, "ja", "original");
meinSportwagen.turboAktivieren();

// let meinAuto = new Auto("weiß", "Audi");
// let Auto1 = new Auto("weiß", "Audi");

// meinAuto.start();
// meinAuto.changeColor();





