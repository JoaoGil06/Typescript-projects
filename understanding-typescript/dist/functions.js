"use strict";
function addTwoNumbers(n1, n2) {
    return n1 + n2;
}
function consoleResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
consoleResult(addTwoNumbers(5, 12));
let combineValues;
// combineValues = consoleResult(addTwoNumbers(5, 12));
// combineValues = consoleResult;
// combineValues = 5;
// console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map