function addiere(a, b) {
  return a + b;
}

function subtrahiere(a, b) {
  return a - b;
}

function multipliziere(a, b) {
  return a * b;
}

const MAX_SPEED = 120;

//------------------------------------------------------------


function dividiere(a, b) {
  if (b === 0) {
      return "Nicht durch 0 teilen!";
  }
  return a / b;
}

// Funktion zur Berechnung, je nach gewählter Operation
function berechneAddition() {
  let zahl1 = parseFloat(document.getElementById('zahl1').value);
  let zahl2 = parseFloat(document.getElementById('zahl2').value);
  let result = addiere(zahl1, zahl2);
  document.getElementById('ergebnis').innerText = "Ergebnis: " + result;
}

function berechneSubtraktion() {
  let zahl1 = parseFloat(document.getElementById('zahl1').value);
  let zahl2 = parseFloat(document.getElementById('zahl2').value);
  let result = subtrahiere(zahl1, zahl2);
  document.getElementById('ergebnis').innerText = "Ergebnis: " + result;
}

function berechneMultiplikation() {
  let zahl1 = parseFloat(document.getElementById('zahl1').value);
  let zahl2 = parseFloat(document.getElementById('zahl2').value);
  let result = multipliziere(zahl1, zahl2);
  document.getElementById('ergebnis').innerText = "Ergebnis: " + result;
}

function berechneDivision() {
  let zahl1 = parseFloat(document.getElementById('zahl1').value);
  let zahl2 = parseFloat(document.getElementById('zahl2').value);
  let result = dividiere(zahl1, zahl2);
  document.getElementById('ergebnis').innerText = "Ergebnis: " + result;
}