function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
    }


// console.log(name(Timo, Patrick, Noah));


function customerName(firstName) {
    return "Hallo, " + firstName + "!";
};

console.log(customerName("Noah")); // Ausgabe: Hallo, Max!

//---------

let begruessen = function(name) {
    return "Hallo, " + name + "!";
}; //Anyonymous function
console.log(begruessen("Noah")); // Ausgabe: Hallo, Max!






function add(a, b) { //Normal Funktion
    return a + b;
}

let addiere = function(a, b) { //Anyonymous function
    return a + b;
};

let add = (a, b) => a + b; // Arrow function




console.log(multi(3, 5)); // Ausgabe: 8

let double = (a) => a * 2; 



let add = (result) => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    // alert("Ergebnis: " + result);
    document.getElementById("result").innerText = "Ergebnis: " + result; 
}

// Arrow function