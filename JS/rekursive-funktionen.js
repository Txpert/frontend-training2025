



// function countUp(n) {
//     if (n <= 0){   //Basisfall (Abbruchbedingung)
//        console.log("fertig"); 
//        return;
//     }   
//     console.log(n);
//     countUp(n - 1); //Rekursiver Aufruf 
// }

// console.log(countUp(3));








// function sumUpTo(n) {
//     if (n === 0) {  //Basisfall (Abbruchbedingung)
//         return 0;
//     }
//     console.log(n);
//     return n + sumUpTo(n - 1); // Rekursiver Aufruf
// }

// console.log(sumUpTo(12));






function even(n) {
    if (n === 0) {
    return true;
    }
    return odd(n - 1);
}

function odd(n) {
    if (n === 0) {
    return false;}
    return even(n - 1);
}

console.log(even(4));
console.log(odd(3));
console.log(even(7));