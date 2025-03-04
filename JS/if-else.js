let score = 100;

// ab 90: Sehr gut
// ab 75 Gut
// ab 50: Befriedigend
// Nicht bestanden
if (score >= 90) {
    console.log("Sehr gut");
} else if (score >= 75) {
    console.log("Gut");
} else if (score >= 50) {
    console.log("Befriedigend");
} else {   
    console.log("Nicht bestanden");
}


if (age >= 18) {
    console.log("Du bist volljährig");
} else if (age === 17) {
    console.log("Du bist 17 Jahre alt");
}else {
    console.log("Du bist minderjährig");
}



const filteredArray = arr.filter(x => x > 10);

const doubledValues = filteredArray.map(x => x * 2);
const result = doubledValues.reduce((sum, x) => sum + x, 0);