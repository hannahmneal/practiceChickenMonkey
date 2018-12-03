//              INSTRUCTIONS:
//  Write a program that prints nos. 1-100. 
//      Conditions: 
//      Multiples of 5: Print "Chicken" instead of the number.
//      Multiples of 7: Print "Monkey" instead of the number.
//      Numbers that are multiples of both 5 and 7, print "ChickenMonkey".

//  GIVEN CODE:

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }



// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 5 === 0) {
//         console.log("Chicken");
//     }
//     if (currentNumber % 7 === 0) {                   //This should be an "else if"
//         console.log("Monkey");
//     }
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {        //This should be an "else if"
//         console.log("ChickenMonkey")
//     } else {                                                         //This must be declared first/at the top of the loop
//         console.log(currentNumber);
//     }
// }

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey");
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken");
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey");
    } else {
        console.log(currentNumber);
    }
}

