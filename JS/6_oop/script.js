class Auto {
    constructor(farbe, marke) {
        this.farbe = farbe;
        this.marke = marke;
    }
    start() {
        console.log("Das " + this.farbe + "e " + this.marke + " wurde gestartet!" );
    }
    changeColor() {
        this.farbe = "gelb";
    }
}

let meinAuto = new Auto("weiß", "Audi");
meinAuto.start();





