// Using var
// function varExample() {
//     if (true) {
//         var x = 5;
//     }
//     console.log(x); // Outputs 5
// }
// varExample();

// Using let
// function letExample() {
//     if (true) {
//         let y = 10;
//     }
//     console.log(y); // ReferenceError: y is not defined
// }
// letExample();

// Redeclaration example
var a = 1;
var a = 2; // No error

let b = 1;
 b = 2; // SyntaxError: Identifier 'b' has already been declared

function letExample() {
    // if (true) {
    //     // let y = 10;
    // }
    console.log(b); // ReferenceError: y is not defined
}
letExample();